import { readFileSync, readdirSync } from 'node:fs';
import { parse, join, relative, sep } from 'node:path';
import type zlib from 'node:zlib';
import { merge } from 'lodash';
import { version } from 'webpack';
import type { Chunk, EntryObject, Stats, Configuration } from 'webpack';
import type TerserPluginType from 'terser-webpack-plugin';

export type Manifest = chrome.runtime.Manifest;
export type ManifestV2 = chrome.runtime.ManifestV2;
export type ManifestV3 = chrome.runtime.ManifestV3;

// HMR (Hot Module Reloading) can't be used until all circular dependencies in
// the codebase are removed
// See: https://github.com/MetaMask/metamask-extension/issues/22450
// TODO: remove this variable when HMR is ready.
export const __HMR_READY__ = false;

/**
 * Target browsers
 */
export const Browsers = ['brave', 'chrome', 'firefox', 'opera'] as const;
export type Browser = (typeof Browsers)[number];

const slash = `(?:\\${sep})?`;
/**
 * Regular expression to match files in any `node_modules` directory
 * Uses a platform-specific path separator: `/` on Unix-like systems and `\` on
 * Windows.
 */
export const NODE_MODULES_RE = new RegExp(`${slash}node_modules${slash}`, 'u');

/**
 * No Operation. A function that does nothing and returns nothing.
 *
 * @returns `undefined`
 */
export const noop = () => undefined;

/**
 *
 * @returns Returns the current version of MetaMask as specified in package.json
 * @throws Throws an error if the version is not a valid semantic version.
 */
export const getMetaMaskVersion = (): string => {
  const { version } = require('../../../package.json');
  // RegEx from https://semver.org/#is-there-a-suggested-regular-expression-regex-to-check-a-semver-string
  if (
    /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/u.test(
      version,
    )
  ) {
    return version as string;
  }
  throw new Error(
    `Invalid \`version\` found in \`package.json\`. Expected a valid semantic version (https://semver.org/) but got "${version}".`,
  );
};

/**
 *
 * @param userEnv
 * @returns Returns `process.env` after checking that it is valid for building.
 * @throws Throws an error if `process.env` is invalid or missing required fields.
 */
export const mergeEnv = (userEnv: NodeJS.ProcessEnv): NodeJS.ProcessEnv => {
  // TODO: throw this whole function in the trash and import env vars the way
  // the gulp build system does it.
  let env: NodeJS.ProcessEnv = {};
  try {
    const rawConfig = readFileSync(join(__dirname, '../../../.metamaskrc'));
    env = require('dotenv').parse(rawConfig);
  } catch {
    console.log('No .metamaskrc file found, using default env');
    env.INFURA_PROJECT_ID = '00000000000000000000000000000000';
  }

  env.METAMASK_VERSION = getMetaMaskVersion();
  env.BLOCKAID_FILE_CDN =
    'static.metafi.codefi.network/api/v1/confirmations/ppom';
  env.BLOCKAID_PUBLIC_KEY =
    '066ad3e8af5583385e312c156d238055215d5f25247c1e91055afa756cb98a88';
  env.SUPPORT_LINK = 'https://support.metamask.io';
  env.METAMASK_DEBUG;

  // TODO: these should be dynamic somehow
  env.PHISHING_WARNING_PAGE_URL = 'http://localhost:9999';
  env.IFRAME_EXECUTION_ENVIRONMENT_URL =
    'https://execution.consensys.io/0.36.1-flask.1/index.html';
  env.METAMASK_BUILD_NAME = 'MM Webpack Test';
  env.METAMASK_BUILD_ICON = 'data:image:./images/icon-64.png';
  env.METAMASK_BUILD_APP_ID = 'io.metamask';
  // env.IN_TEST = "0";
  env.APPLY_LAVAMOAT = false as any as string; // metamask is drunk

  const finalEnv = { ...userEnv, ...env };

  const { INFURA_PROJECT_ID } = finalEnv;
  // if we don't have an INFURA_PROJECT_ID at build time we should bail!
  if (!INFURA_PROJECT_ID) {
    throw new Error(
      'The `INFURA_PROJECT_ID` environment variable was not supplied at build time.',
    );
  }

  // validate INFURA_KEY
  if (INFURA_PROJECT_ID) {
    if (!/^[a-f0-9]{32}$/u.test(INFURA_PROJECT_ID)) {
      throw new Error(
        'INFURA_PROJECT_ID must be 32 characters long and contain only the characters a-f0-9',
      );
    }
  }

  return env;
};

export type ManifestOptions = {
  env: 'development' | 'production';
  browser: Browser;
  version: string;
  name: string;
  description: string;
};

type ManifestTypeForVersion<T extends Manifest> =
  T['manifest_version'] extends 2 ? ManifestV2 : ManifestV3;

export const generateManifest = (
  baseManifest: Manifest,
  options: ManifestOptions,
): ManifestTypeForVersion<typeof baseManifest> => {
  const { version, name, description, browser } = options;

  const browserManifestOverrides: Partial<Manifest> = require(join(
    __dirname,
    `../../../app/manifest/v${baseManifest.manifest_version}/${browser}.json`,
  ));

  const overrides = {
    version,
    name,
    description,
  };

  return merge(
    {},
    baseManifest,
    browserManifestOverrides,
    overrides,
  ) as ManifestTypeForVersion<typeof baseManifest>;
};

/**
 * Collects all entry files for use with webpack.
 *
 * @param manifest - Base manifest file
 * @param appRoot - Absolute directory to search for entry files listed in the
 * base manifest
 * @returns an `entry` object containing html and JS entry points for use with
 * webpack, and an array, `manifestScripts`, list of filepaths of all scripts
 * that were added to it.
 */
export function collectEntries(manifest: Manifest, appRoot: string) {
  const entry: EntryObject = {};
  /**
   * Scripts that must be self-contained and not split into chunks.
   */
  const selfContainedScripts: Set<string> = new Set([
    // Snow shouldn't be chunked
    'snow.prod',
    'use-snow',
  ]);

  function addManifestScript(filename?: string) {
    if (filename) {
      selfContainedScripts.add(filename);
      entry[filename] = {
        chunkLoading: false,
        filename, // output filename
        import: join(appRoot, filename), // the path to the file to use as an entry
      };
    }
  }

  function addHtml(filename?: string) {
    if (filename) {
      entry[parse(filename).name] = join(appRoot, filename);
    }
  }

  // add content_scripts to entries
  manifest.content_scripts?.forEach((s) => s.js?.forEach(addManifestScript));

  if (manifest.manifest_version === 2) {
    manifest.web_accessible_resources?.forEach(addManifestScript);
    manifest.background?.scripts?.forEach(addManifestScript);
    addHtml(manifest.background?.page);
  } else {
    addManifestScript(manifest.background?.service_worker);
    manifest.web_accessible_resources?.forEach(({ resources }) =>
      resources.forEach((filename) => {
        filename.endsWith('.js') && addManifestScript(filename);
      }),
    );
  }

  for (const filename of readdirSync(appRoot)) {
    // ignore non-htm/html files
    if (/\.html?$/iu.test(filename)) {
      assertValidEntryFileName(filename, appRoot);
      addHtml(filename);
    }
  }

  /**
   * Ignore scripts that were found in the manifest, as these are only loaded by
   * the browser extension platform itself.
   *
   * @param chunk
   * @param chunk.name
   * @returns
   */
  function canBeChunked({ name }: Chunk): boolean {
    return !name || !selfContainedScripts.has(name);
  }
  return { entry, canBeChunked };
}

export type DetailedErrorMessage = {
  message: string;
  reason: string;
  solutions: string[];
  context?: string;
};

export class DetailedError extends Error {
  constructor({ message, reason, solutions, context }: DetailedErrorMessage) {
    const redMessage = `${message}
Reason: ${reason}

Suggested Action${solutions.length === 1 ? '' : 's'}:
${solutions.map((solution) => ` •  ${solution}`).join('\n')}
${context ? `\n ${context}` : ``}
`;
    super(redMessage);
    this.message = redMessage;
    this.name = '';
  }
}

/**
 * @param filename
 * @param appRoot
 * @throws Throws a `DetailedError` if the file is an invalid entrypoint
 * filename (a file starting with "_")
 */
function assertValidEntryFileName(filename: string, appRoot: string) {
  if (!filename.startsWith('_')) {
    return;
  }

  const relativeFile = relative(process.cwd(), join(appRoot, filename));
  const message = `Invalid Entrypoint Filename Detected\nPath: ${relativeFile}`;
  const reason = `Filenames at the root of the extension directory starting with "_" are reserved for use by the browser.`;
  const newFile = filename.slice(1);
  const solutions = [
    `Rename this file to remove the underscore, e.g., '${filename}' to '${newFile}'`,
    `Move this file to a subdirectory and, if necessary, add it manually to the build 😱`,
  ];
  const context = `This file was included in the build automatically by our build script, which adds all HTML files at the root of '${appRoot}'.`;

  throw new DetailedError({
    message,
    reason,
    solutions,
    context,
  });
}

/**
 * Retrieves the timestamp of the last commit in UTC for the current Git branch.
 *
 * The author timestamp is used for its consistency across different
 * repositories and its inclusion in the Git commit hash calculation. This makes
 * it a stable choice for reproducible builds.
 *
 * Does not require git and is faster than shelling out to git.
 *
 * @param gitDir
 * @returns Millisecond precision timestamp in UTC of the last commit on the
 * current branch. If the branch is detached or has no commits, it will throw an
 * error.
 * @throws Throws an error if the current branch is detached or has no commits.
 * May also throw if the Git repository is malformed (or not found).
 */
export function getLastCommitTimestamp(gitDir = join(__dirname, '..', '.git')) {
  // Note: this function is synchronous because it's faster this way

  // use `unzipSync` from zlib since git uses zlib-wrapped DEFLATE
  // loaded in this way to avoid requiring it when this function isn't used.
  const { unzipSync } = require('node:zlib') as typeof zlib;

  // read .git/HEAD to get the current branch/commit
  const ref = readFileSync(join(gitDir, 'HEAD'), 'utf-8').trim();

  // determine if we're in a detached HEAD state or on a branch
  const oid = ref.startsWith('ref: ')
    ? // HEAD is pointer to a branch; load the commit hash
      readFileSync(join(gitDir, ref.slice(5)), 'utf-8').trim()
    : // HEAD is detached; so use the commit hash directly
      ref;

  // read the commit object from the file system
  const commitPath = join(gitDir, 'objects', oid.slice(0, 2), oid.slice(2));
  const rawCommit = readFileSync(commitPath);
  // it's compressed with zlib DEFLATE, so we need to decompress it
  const decompressed = unzipSync(rawCommit);
  // the commit object is a text file with a header and a body, we just want the
  // body, which is after the first null byte
  const firstNull = decompressed.indexOf(0);
  const commit = new TextDecoder().decode(decompressed.subarray(firstNull + 1));
  // commits are strictly formatted; use regex to extract the time fields
  const [, timestamp, offset] = commit.match(/^author .* <.*> (.*) (.*)$/mu)!;
  // convert git timestamp from seconds to milliseconds
  const msSinceLocalEpoch = parseInt(timestamp, 10) * 1000;
  const msTimezoneOffset = parseInt(offset, 10) * 60000;

  return msSinceLocalEpoch - msTimezoneOffset;
}

/**
 * It gets minimizers for the webpack build.
 */
export function getMinimizers() {
  const TerserPlugin: typeof TerserPluginType = require('terser-webpack-plugin');
  return [
    new TerserPlugin({
      // use SWC to minify (about 7x faster than Terser)
      minify: TerserPlugin.swcMinify,
      // do not minify snow.
      exclude: /snow\.prod/u,
    }),
  ];
}

/**
 * Helpers for logging to the console with color.
 */
export const { colors, toGreen, toOrange, toPurple } = ((depth, esc) => {
  if (depth === 1) {
    const echo = (message: string): string => message;
    return { colors: false, toGreen: echo, toOrange: echo, toPurple: echo };
  }
  // 24: metamask green, 8: close to metamask green, 4: green
  const green = { 24: '38;2;186;242;74', 8: '38;5;191', 4: '33' }[depth];
  // 24: metamask orange, 8: close to metamask orange, 4: red :-(
  const orange = { 24: '38;2;247;85;25', 8: '38;5;208', 4: '31' }[depth];
  // 24: metamask purple, 8: close to metamask purple, 4: purple
  const purple = { 24: '38;2;208;117;255', 8: '38;5;177', 4: '35' }[depth];
  return {
    colors: { green: `${esc}[1;${green}m`, orange: `${esc}[1;${orange}m` },
    toGreen: (message: string) => `${esc}[1;${green}m${message}${esc}[0m`,
    toOrange: (message: string) => `${esc}[1;${orange}m${message}${esc}[0m`,
    toPurple: (message: string) => `${esc}[1;${purple}m${message}${esc}[0m`,
  };
})((process.stderr.getColorDepth?.() as 1 | 4 | 8 | 24) || 1, '\u001b');

/**
 * Logs a summary of build information to `process.stderr`.
 *
 * @param config - If config.stats is `normal`, logs the full stats object to
 * `stderr`, otherwise logs only errors and a completion message, if it
 * completed.
 * @param err - If not `undefined`, logs the error to `process.stderr`.
 * @param stats - If not `undefined`, logs the stats to `process.stderr`.
 */
export function logStats(config: Configuration, err?: Error, stats?: Stats) {
  err && console.error(err);

  if (!stats) {
    return;
  }

  // orange for production builds, purple for development
  const colorFn = config.mode === 'production' ? toOrange : toPurple;
  stats.compilation.name = colorFn(`🦊 ${stats.compilation.compiler.name}`);
  if (config.stats === 'normal') {
    // log everything (computing stats is slow, so we only do it if asked).
    console.error(stats.toString({ colors }));
  } else if (stats.hasErrors() || stats.hasWarnings()) {
    // always log errors and warnings, if we have them.
    console.error(stats.toString({ colors, preset: 'errors-warnings' }));
  } else {
    // otherwise, just log a simple update
    const { name } = stats.compilation;
    const status = toGreen('successfully');
    const time = `${stats.endTime - stats.startTime} ms`;
    console.error(`${name} (webpack ${version}) compiled ${status} in ${time}`);
  }
}

/**
 * @param array
 * @returns a new array with duplicate values removed and sorted
 */
export const uniqueSort = (array: string[]) => [...new Set(array)].sort();