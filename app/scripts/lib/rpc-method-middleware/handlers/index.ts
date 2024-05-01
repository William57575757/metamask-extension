import { MESSAGE_TYPE } from '../../../../../shared/constants/app';
import addEthereumChain from './add-ethereum-chain';
import ethAccounts from './eth-accounts';
import getProviderState from './get-provider-state';
import logWeb3ShimUsage from './log-web3-shim-usage';
import providerAuthorize from './provider-authorize';
import requestAccounts from './request-accounts';
import sendMetadata from './send-metadata';
import switchEthereumChain from './switch-ethereum-chain';
import watchAsset from './watch-asset';

///: BEGIN:ONLY_INCLUDE_IF(build-mmi)
import mmiSupported from './institutional/mmi-supported';
import mmiAuthenticate from './institutional/mmi-authenticate';
import mmiPortfolio from './institutional/mmi-portfolio';
import mmiCheckIfTokenIsPresent from './institutional/mmi-check-if-token-is-present';
import mmiSetAccountAndNetwork from './institutional/mmi-set-account-and-network';
import mmiOpenAddHardwareWallet from './institutional/mmi-open-add-hardware-wallet';
///: END:ONLY_INCLUDE_IF

type MessageType = (typeof MESSAGE_TYPE)[keyof typeof MESSAGE_TYPE];

type HandlerInterface = {
  methodNames: MessageType[];
  implementation: unknown;
  hookNames?: { [key: string]: boolean };
};

const handlers: HandlerInterface[] = [
  addEthereumChain,
  ethAccounts,
  getProviderState,
  logWeb3ShimUsage,
  providerAuthorize,
  requestAccounts,
  sendMetadata,
  switchEthereumChain,
  watchAsset,
  ///: BEGIN:ONLY_INCLUDE_IF(build-mmi)
  mmiAuthenticate,
  mmiSupported,
  mmiPortfolio,
  mmiCheckIfTokenIsPresent,
  mmiSetAccountAndNetwork,
  mmiOpenAddHardwareWallet,
  ///: END:ONLY_INCLUDE_IF
];

export default handlers;