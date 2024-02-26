/**
 * @file This file contains the CLI parser for the webpack build script.
 * It is responsible for parsing the command line arguments and returning a
 * structured object representing the parsed arguments.
 */

import type { Options as YargsOptions } from 'yargs';
import yargs from 'yargs/yargs';
import parser from 'yargs-parser';
import { Browsers, type Manifest, uniqueSort, toOrange } from './helpers';

const addFeat = 'add-feature' as const;
const omitFeat = 'omit-feature' as const;
type YargsOptionsMap = { [key: string]: YargsOptions };
type OptionsKeys = keyof Omit<Options, typeof addFeat | typeof omitFeat>;

// `envOptions` is a separate object because it is used multiple times
const envOptions = {
  env: {
    alias: 'e',
    array: false,
    default: 'development' as const,
    description:
      'Enables/disables production optimizations or development hints',
    choices: ['development', 'production'] as const,
    group: toOrange('Build options:'),
  },
  // `as const` makes it easier for developers to see the values of the type
  // when hovering over it in their IDE. `satisfies Options` enables type
  // checking, without loosing the `const` property of the values, which is
  // necessary for yargs to infer the final types
} as const satisfies YargsOptionsMap;

// TODO: get these `build-type` types working without having to use `as` here.
const { loadBuildTypesConfig } = require('../../lib/build-type') as {
  loadBuildTypesConfig: () => {
    features: { [x: string]: unknown };
    buildTypes: { [x: string]: { features: string[] } };
  };
};

/**
 * Parses the given args from `argv` and returns whether or not the requested
 * build is a production build or not.
 *
 * @param argv
 * @param options
 * @param options.env
 * @returns `true` if this is a production build, otherwise `false`
 */
function getIsProduction(argv: string[], { env }: typeof envOptions): boolean {
  const options: { [k: string]: any } = {};
  Object.entries(env).forEach(([key, val]) => (options[key] = { env: val }));
  return parser(argv, options).env === 'production';
}

/**
 * Parses an array of command line arguments into a structured format.
 *
 * @param argv - An array of command line arguments, excluding the program
 * executable and file name. Typically used as
 * `parseArgv(process.argv.slice(2))`.
 * @returns An object representing the parsed arguments.
 */
export const parseArgv = (argv: string[]) => {
  const { features: allFeatures, buildTypes } = loadBuildTypesConfig();
  const allBuildTypeNames = Object.keys(buildTypes);
  const allFeatureNames = Object.keys(allFeatures);

  // peek ahead at the args to determine if we're in a production environment,
  // as some defaults are different for production vs development.
  const isProduction = getIsProduction(argv, envOptions);

  const options = getOptions(isProduction, allBuildTypeNames, allFeatureNames);
  const args = getCli(options, 'yarn webpack').parseSync(argv);
  // the properties $0, _, a, o, etc. are added by yargs, but we don't need to
  // return them to the caller, so we omit them.
  const { $0, _, a, o, addFeature: add, omitFeature: omit, ...conf } = args;

  // set up feature flags
  const active = new Set<string>();
  const defaultFeaturesForBuildType = buildTypes[conf.type]?.features ?? [];
  const setActive = (f: string) => omit.includes(f) || active.add(f);
  [defaultFeaturesForBuildType, add].forEach((feat) => feat.forEach(setActive));

  const ignore = new Set(['$0', 'conf', 'progress', 'stats', 'watch']);
  const cacheKey = Object.entries(args)
    .filter(([key]) => key.length > 1 && !ignore.has(key) && !key.includes('-'))
    .sort(([x], [y]) => x.localeCompare(y));
  return {
    // narrow the `config` type to only the options we're returning
    args: conf as { [key in OptionsKeys]: (typeof conf)[key] },
    cacheKey: JSON.stringify(cacheKey),
    features: {
      active,
      all: new Set(allFeatureNames),
    },
  };
};

/**
 * Gets a yargs instance for parsing CLI arguments.
 *
 * @param options
 * @param name
 */
function getCli<T extends YargsOptionsMap = Options>(options: T, name: string) {
  const cli = yargs()
    // Ensure unrecognized commands/options are reported as errors.
    .strict()
    // use the scriptName in `--help` output
    .scriptName(name)
    // wrap output at a maximum of 120 characters or `process.stdout.columns`
    .wrap(Math.min(120, process.stdout.columns))
    // enable the `--config` command, which allows the user to specify a custom
    // config file containing webpack options
    .config()
    // enable ENV parsing, which allows the user to specify webpack options via
    // environment variables prefixed with `BUNDLE_`
    // TODO: choose a better name than `BUNDLE` (it looks like `MM` is already being used in CI for ✨something✨)
    .env('BUNDLE')
    // TODO: enable completion once https://github.com/yargs/yargs/issues/2387 is fixed.
    // enable the `completion` command, which outputs a bash completion script
    // .completion(
    //   'completion',
    //   'Enable bash/zsh completions; concat the script generated by running this command to your .bashrc or .bash_profile',
    // )
    .example(
      '$0 --env development --browser brave --browser chrome --zip',
      'Builds the extension for development for Chrome & Brave; generate zip files for both',
    )
    // TODO: enable completion once https://github.com/yargs/yargs/issues/2387 is fixed.
    // .example(
    //   '$0 completion',
    //   `Generates a bash completion script for the \`${name}\` command`,
    // )
    .updateStrings({
      'Options:': toOrange('Options:'),
      'Examples:': toOrange('Examples:'),
    })
    .options(options);
  return cli;
}

type Options = ReturnType<typeof getOptions>;

function getOptions(
  isProduction: boolean,
  buildTypes: string[],
  allFeatures: string[],
) {
  const prodDefaultDesc = "If `env` is 'production', `true`, otherwise `false`";
  return {
    ...envOptions,
    watch: {
      alias: 'w',
      array: false,
      default: false,
      description: 'Build then watch for files changes',
      group: toOrange('Developer assistance:'),
      type: 'boolean',
    },
    cache: {
      alias: 'c',
      array: false,
      default: true,
      description: 'Cache build for faster rebuilds',
      group: toOrange('Developer assistance:'),
      type: 'boolean',
    },
    progress: {
      alias: 'p',
      array: false,
      default: true,
      description: 'Show build progress',
      group: toOrange('Developer assistance:'),
      type: 'boolean',
    },
    devtool: {
      alias: 'd',
      array: false,
      default: isProduction ? 'hidden-source-map' : 'source-map',
      defaultDescription:
        "If `env` is 'production', 'hidden-source-map', otherwise 'source-map'",
      description: 'Sourcemap type to generate',
      choices: ['none', 'source-map', 'hidden-source-map'] as const,
      group: toOrange('Developer assistance:'),
      type: 'string',
    },
    sentry: {
      array: false,
      default: isProduction,
      defaultDescription: prodDefaultDesc,
      description: 'Enables/disables Sentry Application Monitoring',
      group: toOrange('Developer assistance:'),
      type: 'boolean',
    },
    zip: {
      alias: 'z',
      array: false,
      default: false,
      description: 'Generate a zip file of the build',
      group: toOrange('Build options:'),
      type: 'boolean',
    },
    minify: {
      alias: 'm',
      array: false,
      default: isProduction,
      defaultDescription: "If `env` is 'production', `true`, otherwise `false`",
      description: 'Minify the output',
      group: toOrange('Build options:'),
      type: 'boolean',
    },
    browser: {
      alias: 'b',
      array: true,
      choices: ['all', ...Browsers],
      coerce: (browsers: string[]) => {
        // sort browser for determinism (important for caching)
        const set = new Set(browsers.sort());
        return set.has('all') ? [...Browsers] : [...set];
      },
      default: 'chrome',
      description: 'Browsers to build for',
      group: toOrange('Build options:'),
      type: 'string',
    },
    manifest_version: {
      alias: 'v',
      array: false,
      choices: [2, 3] as Manifest['manifest_version'][],
      default: 2 as Manifest['manifest_version'],
      description: "Changes manifest.json format to the given version's schema",
      group: toOrange('Build options:'),
      type: 'number',
    },
    type: {
      alias: 't',
      array: false,
      choices: ['none', ...buildTypes],
      default: 'main' as const,
      description: 'Configure features for the build (main, beta, etc)',
      group: toOrange('Build options:'),
      type: 'string',
    },
    [addFeat]: {
      alias: 'a',
      array: true,
      choices: allFeatures,
      coerce: uniqueSort,
      default: [] as typeof allFeatures,
      description: 'Add features not be included in the selected build `type`',
      group: toOrange('Build options:'),
      type: 'string',
    },
    [omitFeat]: {
      alias: 'o',
      array: true,
      choices: allFeatures,
      coerce: uniqueSort,
      default: [] as typeof allFeatures,
      description: 'Omit features included in the selected build `type`',
      group: toOrange('Build options:'),
      type: 'string',
    },
    lavamoat: {
      alias: 'l',
      array: false,
      default: isProduction,
      defaultDescription: prodDefaultDesc,
      description: 'Apply LavaMoat to the build assets',
      group: toOrange('Security:'),
      type: 'boolean',
    },
    snow: {
      alias: 's',
      array: false,
      default: isProduction,
      defaultDescription: prodDefaultDesc,
      description: 'Apply Snow to the build assets',
      group: toOrange('Security:'),
      type: 'boolean',
    },
    'dry-run': {
      array: false,
      default: false,
      description: 'Outputs the config without building',
      group: toOrange('Options:'),
      type: 'boolean',
    },
    stats: {
      array: false,
      default: false,
      description: 'Display build stats after building',
      group: toOrange('Options:'),
      type: 'boolean',
    },
  } as const satisfies YargsOptionsMap;
}