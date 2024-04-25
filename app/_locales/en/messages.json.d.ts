declare const schema: {
  QRHardwareInvalidTransactionTitle: {
    message: 'Error';
  };
  QRHardwareMismatchedSignId: {
    message: 'Incongruent transaction data. Please check the transaction details.';
  };
  QRHardwarePubkeyAccountOutOfRange: {
    message: 'No more accounts. If you would like to access another account unlisted below, please reconnect your hardware wallet and select it.';
  };
  QRHardwareScanInstructions: {
    message: 'Place the QR code in front of your camera. The screen is blurred, but it will not affect the reading.';
  };
  QRHardwareSignRequestCancel: {
    message: 'Reject';
  };
  QRHardwareSignRequestDescription: {
    message: "After you’ve signed with your wallet, click on 'Get Signature' to receive the signature";
  };
  QRHardwareSignRequestGetSignature: {
    message: 'Get signature';
  };
  QRHardwareSignRequestSubtitle: {
    message: 'Scan the QR code with your wallet';
  };
  QRHardwareSignRequestTitle: {
    message: 'Request signature';
  };
  QRHardwareUnknownQRCodeTitle: {
    message: 'Error';
  };
  QRHardwareUnknownWalletQRCode: {
    message: 'Invalid QR code. Please scan the sync QR code of the hardware wallet.';
  };
  QRHardwareWalletImporterTitle: {
    message: 'Scan QR code';
  };
  QRHardwareWalletSteps1Description: {
    message: 'You can choose from a list of official QR-code supporting partners below.';
  };
  QRHardwareWalletSteps1Title: {
    message: 'Connect your QR hardware wallet';
  };
  QRHardwareWalletSteps2Description: {
    message: 'Ngrave (coming soon)';
  };
  SIWEAddressInvalid: {
    message: 'The address in the sign-in request does not match the address of the account you are using to sign in.';
  };
  SIWEDomainInvalidText: {
    message: "The site you're attempting to sign into doesn't match the domain in the request. Proceed with caution.";
  };
  SIWEDomainInvalidTitle: {
    message: 'Deceptive site request.';
  };
  SIWEDomainWarningBody: {
    message: 'The website ($1) is asking you to sign in to the wrong domain. This may be a phishing attack.';
    description: '$1 represents the website domain';
  };
  SIWEDomainWarningLabel: {
    message: 'Unsafe';
  };
  SIWELabelChainID: {
    message: 'Chain ID:';
  };
  SIWELabelExpirationTime: {
    message: 'Expires At:';
  };
  SIWELabelIssuedAt: {
    message: 'Issued At:';
  };
  SIWELabelMessage: {
    message: 'Message:';
  };
  SIWELabelNonce: {
    message: 'Nonce:';
  };
  SIWELabelNotBefore: {
    message: 'Not Before:';
  };
  SIWELabelRequestID: {
    message: 'Request ID:';
  };
  SIWELabelResources: {
    message: 'Resources: $1';
    description: '$1 represents the number of resources';
  };
  SIWELabelURI: {
    message: 'URI:';
  };
  SIWELabelVersion: {
    message: 'Version:';
  };
  SIWESiteRequestSubtitle: {
    message: 'This site is requesting to sign in with';
  };
  SIWESiteRequestTitle: {
    message: 'Sign-in request';
  };
  SIWEWarningSubtitle: {
    message: 'To confirm you understand, check:';
  };
  SIWEWarningTitle: {
    message: 'Are you sure?';
  };
  about: {
    message: 'About';
  };
  accept: {
    message: 'Accept';
  };
  acceptTermsOfUse: {
    message: 'I have read and agree to the $1';
    description: '$1 is the `terms` message';
  };
  accessAndSpendNoticeNFT: {
    message: '$1 may access and spend this asset';
    description: '$1 is the url of the site requesting ability to spend';
  };
  accessYourWalletWithSRP: {
    message: 'Access your wallet with your Secret Recovery Phrase';
  };
  accessYourWalletWithSRPDescription: {
    message: 'MetaMask cannot recover your password. We will use your Secret Recovery Phrase to validate your ownership, restore your wallet and set up a new password. First, enter the Secret Recovery Phrase that you were given when you created your wallet. $1';
    description: "$1 is the words 'Learn More' from key 'learnMore', separated here so that it can be added as a link";
  };
  accessingYourCamera: {
    message: 'Accessing your camera...';
  };
  account: {
    message: 'Account';
  };
  accountDetails: {
    message: 'Account details';
  };
  accountIdenticon: {
    message: 'Account identicon';
  };
  accountIsntConnectedToastText: {
    message: "$1 isn't connected to $2";
  };
  accountName: {
    message: 'Account name';
  };
  accountNameDuplicate: {
    message: 'This account name already exists';
    description: 'This is an error message shown when the user enters a new account name that matches an existing account name';
  };
  accountNameReserved: {
    message: 'This account name is reserved';
    description: 'This is an error message shown when the user enters a new account name that is reserved for future use';
  };
  accountOptions: {
    message: 'Account options';
  };
  accountSelectionRequired: {
    message: 'You need to select an account!';
  };
  accounts: {
    message: 'Accounts';
  };
  accountsConnected: {
    message: 'Accounts connected';
  };
  active: {
    message: 'Active';
  };
  activity: {
    message: 'Activity';
  };
  activityLog: {
    message: 'Activity log';
  };
  add: {
    message: 'Add';
  };
  addANetwork: {
    message: 'Add a network';
  };
  addANetworkManually: {
    message: 'Add a network manually';
  };
  addANickname: {
    message: 'Add a nickname';
  };
  addAccount: {
    message: 'Add account';
  };
  addAcquiredTokens: {
    message: "Add the tokens you've acquired using MetaMask";
  };
  addAlias: {
    message: 'Add alias';
  };
  addBlockExplorer: {
    message: 'Add a block explorer';
  };
  addContact: {
    message: 'Add contact';
  };
  addCustomNetwork: {
    message: 'Add custom network';
  };
  addEthereumChainConfirmationDescription: {
    message: 'This will allow this network to be used within MetaMask.';
  };
  addEthereumChainConfirmationRisks: {
    message: 'MetaMask does not verify custom networks.';
  };
  addEthereumChainConfirmationRisksLearnMore: {
    message: 'Learn about $1.';
    description: "$1 is a link with text that is provided by the 'addEthereumChainConfirmationRisksLearnMoreLink' key";
  };
  addEthereumChainConfirmationRisksLearnMoreLink: {
    message: 'scams and network security risks';
    description: "Link text for the 'addEthereumChainConfirmationRisksLearnMore' translation key";
  };
  addEthereumChainConfirmationTitle: {
    message: 'Allow this site to add a network?';
  };
  addEthereumChainWarningModalHeader: {
    message: 'Only add this RPC provider if you’re sure you can trust it. $1';
    description: '$1 is addEthereumChainWarningModalHeaderPartTwo passed separately so that it can be bolded';
  };
  addEthereumChainWarningModalHeaderPartTwo: {
    message: 'Malicious providers may lie about the state of the blockchain and record your network activity.';
  };
  addEthereumChainWarningModalListHeader: {
    message: "It's important that your provider is reliable, as it has the power to:";
  };
  addEthereumChainWarningModalListPointOne: {
    message: 'See your accounts and IP address, and associate them together';
  };
  addEthereumChainWarningModalListPointThree: {
    message: 'Show account balances and other on-chain states';
  };
  addEthereumChainWarningModalListPointTwo: {
    message: 'Broadcast your transactions';
  };
  addEthereumChainWarningModalTitle: {
    message: 'You are adding a new RPC provider for Ethereum Mainnet';
  };
  addFriendsAndAddresses: {
    message: 'Add friends and addresses you trust';
  };
  addFromAListOfPopularNetworks: {
    message: 'Add from a list of popular networks or add a network manually. Only interact with the entities you trust.';
  };
  addHardwareWallet: {
    message: 'Add hardware wallet';
  };
  addIPFSGateway: {
    message: 'Add your preferred IPFS gateway';
  };
  addImportAccount: {
    message: 'Add account or hardware wallet';
  };
  addMemo: {
    message: 'Add memo';
  };
  addMoreNetworks: {
    message: 'add more networks manually';
  };
  addNetwork: {
    message: 'Add network';
  };
  addNetworkTooltipWarning: {
    message: 'This network connection relies on third parties. This connection may be less reliable or enable third-parties to track activity. $1';
    description: '$1 is Learn more link';
  };
  addNewAccount: {
    message: 'Add a new account';
  };
  addNewToken: {
    message: 'Add new token';
  };
  addNft: {
    message: 'Add NFT';
  };
  addNfts: {
    message: 'Add NFTs';
  };
  addSnapAccountToggle: {
    message: 'Enable "Add account Snap (Beta)"';
  };
  addSnapAccountsDescription: {
    message: 'Turning on this feature will give you the option to add the new Beta account Snaps right from your account list. If you install an account Snap, remember that it is a third-party service.';
  };
  addSuggestedNFTs: {
    message: 'Add suggested NFTs';
  };
  addSuggestedTokens: {
    message: 'Add suggested tokens';
  };
  addToken: {
    message: 'Add token';
  };
  addTokenByContractAddress: {
    message: 'Can’t find a token? You can manually add any token by pasting its address. Token contract addresses can be found on $1';
    description: '$1 is a blockchain explorer for a specific network, e.g. Etherscan for Ethereum';
  };
  addingCustomNetwork: {
    message: 'Adding Network';
  };
  addingTokens: {
    message: 'Adding tokens';
  };
  address: {
    message: 'Address';
  };
  addressCopied: {
    message: 'Address copied!';
  };
  advanced: {
    message: 'Advanced';
  };
  advancedBaseGasFeeToolTip: {
    message: 'When your transaction gets included in the block, any difference between your max base fee and the actual base fee will be refunded. Total amount is calculated as max base fee (in GWEI) * gas limit.';
  };
  advancedConfiguration: {
    message: 'Advanced configuration';
  };
  advancedGasFeeDefaultOptIn: {
    message: 'Save these values as my default for the $1 network.';
    description: '$1 is the current network name.';
  };
  advancedGasFeeModalTitle: {
    message: 'Advanced gas fee';
  };
  advancedGasPriceTitle: {
    message: 'Gas price';
  };
  advancedPriorityFeeToolTip: {
    message: 'Priority fee (aka “miner tip”) goes directly to miners and incentivizes them to prioritize your transaction.';
  };
  agreeTermsOfUse: {
    message: "I agree to MetaMask's $1";
    description: '$1 is the `terms` link';
  };
  airgapVault: {
    message: 'AirGap Vault';
  };
  alertDisableTooltip: {
    message: 'This can be changed in "Settings > Alerts"';
  };
  alertSettingsUnconnectedAccount: {
    message: 'Browsing a website with an unconnected account selected';
  };
  alertSettingsUnconnectedAccountDescription: {
    message: 'This alert is shown in the popup when you are browsing a connected web3 site, but the currently selected account is not connected.';
  };
  alertSettingsWeb3ShimUsage: {
    message: 'When a website tries to use the removed window.web3 API';
  };
  alertSettingsWeb3ShimUsageDescription: {
    message: 'This alert is shown in the popup when you are browsing a site that tries to use the removed window.web3 API, and may be broken as a result.';
  };
  alerts: {
    message: 'Alerts';
  };
  allCustodianAccountsConnectedSubtitle: {
    message: 'You have either already connected all your custodian accounts or don’t have any account to connect to MetaMask Institutional.';
  };
  allCustodianAccountsConnectedTitle: {
    message: 'No accounts available to connect';
  };
  allOfYour: {
    message: 'All of your $1';
    description: '$1 is the symbol or name of the token that the user is approving spending';
  };
  allPermissions: {
    message: 'All Permissions';
  };
  allYourNFTsOf: {
    message: 'All of your NFTs from $1';
    description: "$1 is a link to contract on the block explorer when we're not able to retrieve a erc721 or erc1155 name";
  };
  allow: {
    message: 'Allow';
  };
  allowMmiToConnectToCustodian: {
    message: 'This will allow MMI to connect to $1 to import your accounts.';
  };
  allowSpendToken: {
    message: 'Give permission to access your $1?';
    description: '$1 is the symbol of the token that are requesting to spend';
  };
  allowWithdrawAndSpend: {
    message: 'Allow $1 to withdraw and spend up to the following amount:';
    description: "The url of the site that requested permission to 'withdraw and spend'";
  };
  amount: {
    message: 'Amount';
  };
  andForListItems: {
    message: '$1, and $2';
    description: '$1 is the first item, $2 is the last item in a list of items. Used in Snap Install Warning modal.';
  };
  andForTwoItems: {
    message: '$1 and $2';
    description: '$1 is the first item, $2 is the second item. Used in Snap Install Warning modal.';
  };
  announcements: {
    message: 'Announcements';
  };
  appDescription: {
    message: 'An Ethereum Wallet in your Browser';
    description: 'The description of the application';
  };
  appName: {
    message: 'MetaMask';
    description: 'The name of the application';
  };
  appNameBeta: {
    message: 'MetaMask Beta';
    description: 'The name of the application (Beta)';
  };
  appNameFlask: {
    message: 'MetaMask Flask';
    description: 'The name of the application (Flask)';
  };
  appNameMmi: {
    message: 'MetaMask Institutional';
    description: 'The name of the application (MMI)';
  };
  approve: {
    message: 'Approve spend limit';
  };
  approveAllTokensTitle: {
    message: 'Allow access to and transfer of all your $1?';
    description: '$1 is the symbol of the token for which the user is granting approval';
  };
  approveAllTokensTitleWithoutSymbol: {
    message: 'Allow access to and transfer all of your NFTs from $1?';
    description: "$1 a link to contract on the block explorer when we're not able to retrieve a erc721 or erc1155 name";
  };
  approveButtonText: {
    message: 'Approve';
  };
  approveIncreaseAllowance: {
    message: 'Increase $1 spending cap';
    description: 'The token symbol that is being approved';
  };
  approveSpendingCap: {
    message: 'Approve $1 spending cap';
    description: 'The token symbol that is being approved';
  };
  approveTokenDescription: {
    message: 'This allows a third party to access and transfer the following NFTs without further notice until you revoke its access.';
  };
  approveTokenDescriptionWithoutSymbol: {
    message: 'This allows a third party to access and transfer all of your NFTs from $1 without further notice until you revoke its access.';
    description: "$1 is a link to contract on the block explorer when we're not able to retrieve a erc721 or erc1155 name";
  };
  approveTokenTitle: {
    message: 'Allow access to and transfer of your $1?';
    description: '$1 is the symbol of the token for which the user is granting approval';
  };
  approved: {
    message: 'Approved';
  };
  approvedAsset: {
    message: 'Approved asset';
  };
  approvedOn: {
    message: 'Approved on $1';
    description: '$1 is the approval date for a permission';
  };
  approvedOnForAccounts: {
    message: 'Approved on $1 for $2';
    description: '$1 is the approval date for a permission. $2 is the AvatarGroup component displaying account images.';
  };
  areYouSure: {
    message: 'Are you sure?';
  };
  asset: {
    message: 'Asset';
  };
  assetOptions: {
    message: 'Asset options';
  };
  attemptSendingAssets: {
    message: 'You may lose your assets if you try to send them from another network. Transfer funds safely between networks by using a bridge.';
  };
  attemptSendingAssetsWithPortfolio: {
    message: 'You may lose your assets if you try to send them from another network. Transfer funds safely between networks by using a bridge, like $1';
  };
  attemptToCancelSwapForFree: {
    message: 'Attempt to cancel swap for free';
  };
  attemptingConnect: {
    message: 'Attempting to connect to blockchain.';
  };
  attributions: {
    message: 'Attributions';
  };
  auroraDeprecationWarning: {
    message: 'MetaMask will be deprecating support for $1 network';
    description: '$1 is name of deprecated network';
  };
  authorizedPermissions: {
    message: 'You have authorized the following permissions';
  };
  autoDetectTokens: {
    message: 'Autodetect tokens';
  };
  autoDetectTokensDescription: {
    message: 'We use third-party APIs to detect and display new tokens sent to your wallet. Turn off if you don’t want the app to automatically pull data from those services. $1';
    description: '$1 is a link to a support article';
  };
  autoLockTimeLimit: {
    message: 'Auto-lock timer (minutes)';
  };
  autoLockTimeLimitDescription: {
    message: 'Set the idle time in minutes before MetaMask will become locked.';
  };
  average: {
    message: 'Average';
  };
  awaitingApproval: {
    message: 'Awaiting approval...';
  };
  back: {
    message: 'Back';
  };
  backup: {
    message: 'Back up';
  };
  backupApprovalInfo: {
    message: 'This secret code is required to recover your wallet in case you lose your device, forget your password, have to re-install MetaMask, or want to access your wallet on another device.';
  };
  backupApprovalNotice: {
    message: 'Back up your Secret Recovery Phrase to keep your wallet and funds secure.';
  };
  backupKeyringSnapReminder: {
    message: 'Be sure you can access any accounts created by this Snap on your own before removing it';
  };
  backupNow: {
    message: 'Back up now';
  };
  backupUserData: {
    message: 'Back up your data';
  };
  backupUserDataDescription: {
    message: 'You can back up data like your contacts and preferences.';
  };
  balance: {
    message: 'Balance';
  };
  balanceOutdated: {
    message: 'Balance may be outdated';
  };
  baseFee: {
    message: 'Base fee';
  };
  basic: {
    message: 'Basic';
  };
  beCareful: {
    message: 'Be careful';
  };
  beta: {
    message: 'Beta';
  };
  betaHeaderText: {
    message: 'This is a beta version. Please report bugs $1';
    description: "$1 represents the word 'here' in a hyperlink";
  };
  betaMetamaskInstitutionalVersion: {
    message: 'MetaMask Institutional Beta Version';
  };
  betaMetamaskVersion: {
    message: 'MetaMask Beta Version';
  };
  betaTerms: {
    message: 'Beta Terms of use';
  };
  betaWalletCreationSuccessReminder1: {
    message: 'MetaMask Beta can’t recover your Secret Recovery Phrase.';
  };
  betaWalletCreationSuccessReminder2: {
    message: 'MetaMask Beta will never ask you for your Secret Recovery Phrase.';
  };
  blockExplorerAccountAction: {
    message: 'Account';
    description: 'This is used with viewOnEtherscan and viewInExplorer e.g View Account in Explorer';
  };
  blockExplorerAssetAction: {
    message: 'Asset';
    description: 'This is used with viewOnEtherscan and viewInExplorer e.g View Asset in Explorer';
  };
  blockExplorerSwapAction: {
    message: 'Swap';
    description: 'This is used with viewOnEtherscan e.g View Swap on Etherscan';
  };
  blockExplorerUrl: {
    message: 'Block explorer URL';
  };
  blockExplorerUrlDefinition: {
    message: 'The URL used as the block explorer for this network.';
  };
  blockExplorerView: {
    message: 'View account at $1';
    description: '$1 replaced by URL for custom block explorer';
  };
  blockaid: {
    message: 'Blockaid';
  };
  blockaidDescriptionApproveFarming: {
    message: 'If you approve this request, a third party known for scams might take all your assets.';
  };
  blockaidDescriptionBlurFarming: {
    message: 'If you approve this request, someone can steal your assets listed on Blur.';
  };
  blockaidDescriptionErrored: {
    message: "Because of an error, we couldn't check for security alerts. Only continue if you trust every address involved.";
  };
  blockaidDescriptionMaliciousDomain: {
    message: "You're interacting with a malicious domain. If you approve this request, you might lose your assets.";
  };
  blockaidDescriptionMightLoseAssets: {
    message: 'If you approve this request, you might lose your assets.';
  };
  blockaidDescriptionSeaportFarming: {
    message: 'If you approve this request, someone can steal your assets listed on OpenSea.';
  };
  blockaidDescriptionTransferFarming: {
    message: 'If you approve this request, a third party known for scams will take all your assets.';
  };
  blockaidMessage: {
    message: 'Privacy preserving - no data is shared with third parties. Available on Arbitrum, Avalanche, BNB chain, Ethereum Mainnet, Linea, Optimism, Polygon, Base and Sepolia.';
  };
  blockaidTitleDeceptive: {
    message: 'This is a deceptive request';
  };
  blockaidTitleMayNotBeSafe: {
    message: 'Be careful';
  };
  blockaidTitleSuspicious: {
    message: 'This is a suspicious request';
  };
  blockies: {
    message: 'Blockies';
  };
  bridge: {
    message: 'Bridge';
  };
  bridgeDontSend: {
    message: "Bridge, don't send";
  };
  browserNotSupported: {
    message: 'Your browser is not supported...';
  };
  buildContactList: {
    message: 'Build your contact list';
  };
  builtAroundTheWorld: {
    message: 'MetaMask is designed and built around the world.';
  };
  busy: {
    message: 'Busy';
  };
  buyAndSell: {
    message: 'Buy & Sell';
  };
  buyAsset: {
    message: 'Buy $1';
    description: '$1 is the ticker symbol of a an asset the user is being prompted to purchase';
  };
  buyMoreAsset: {
    message: 'Buy more $1';
    description: '$1 is the ticker symbol of a an asset the user is being prompted to purchase';
  };
  buyNow: {
    message: 'Buy Now';
  };
  buyToken: {
    message: 'Buy $1';
    description: '$1 is the token symbol';
  };
  bytes: {
    message: 'Bytes';
  };
  canToggleInSettings: {
    message: 'You can re-enable this notification in Settings > Alerts.';
  };
  cancel: {
    message: 'Cancel';
  };
  cancelEdit: {
    message: 'Cancel edit';
  };
  cancelPopoverTitle: {
    message: 'Cancel transaction';
  };
  cancelSpeedUp: {
    message: 'cancel or speed up a transaction.';
  };
  cancelSpeedUpLabel: {
    message: 'This gas fee will $1 the original.';
    description: "$1 is text 'replace' in bold";
  };
  cancelSpeedUpTransactionTooltip: {
    message: 'To $1 a transaction the gas fee must be increased by at least 10% for it to be recognized by the network.';
    description: "$1 is string 'cancel' or 'speed up'";
  };
  cancelled: {
    message: 'Cancelled';
  };
  chainId: {
    message: 'Chain ID';
  };
  chainIdDefinition: {
    message: 'The chain ID used to sign transactions for this network.';
  };
  chainIdExistsErrorMsg: {
    message: 'This Chain ID is currently used by the $1 network.';
  };
  chainListReturnedDifferentTickerSymbol: {
    message: "This token symbol doesn't match the network name or chain ID entered. Many popular tokens use similar symbols, which scammers can use to trick you into sending them a more valuable token in return. Verify everything before you continue.";
  };
  chooseYourNetwork: {
    message: 'Choose your network';
  };
  chooseYourNetworkDescription: {
    message: 'We use Infura as our remote procedure call (RPC) provider to offer the most reliable and private access to Ethereum data we can. You can choose your own RPC, but remember that any RPC will receive your IP address and Ethereum wallet to make transactions. Read our $1 to learn more about how Infura handles data.';
    description: '$1 is a link to the privacy policy';
  };
  chromeRequiredForHardwareWallets: {
    message: 'You need to use MetaMask on Google Chrome in order to connect to your Hardware Wallet.';
  };
  clear: {
    message: 'Clear';
  };
  clearActivity: {
    message: 'Clear activity and nonce data';
  };
  clearActivityButton: {
    message: 'Clear activity tab data';
  };
  clearActivityDescription: {
    message: "This resets the account's nonce and erases data from the activity tab in your wallet. Only the current account and network will be affected. Your balances and incoming transactions won't change.";
  };
  click: {
    message: 'Click';
  };
  clickToConnectLedgerViaWebHID: {
    message: 'Click here to connect your Ledger via WebHID';
    description: 'Text that can be clicked to open a browser popup for connecting the ledger device via webhid';
  };
  clickToManuallyAdd: {
    message: 'You can always add tokens manually.';
  };
  close: {
    message: 'Close';
  };
  closeExtension: {
    message: 'Close extension';
  };
  coingecko: {
    message: 'CoinGecko';
  };
  comboNoOptions: {
    message: 'No options found';
    description: 'Default text shown in the combo field dropdown if no options.';
  };
  configureSnapPopupDescription: {
    message: "You're now leaving MetaMask to configure this snap.";
  };
  configureSnapPopupInstallDescription: {
    message: "You're now leaving MetaMask to install this snap.";
  };
  configureSnapPopupInstallTitle: {
    message: 'Install snap';
  };
  configureSnapPopupLink: {
    message: 'Click this link to continue:';
  };
  configureSnapPopupTitle: {
    message: 'Configure snap';
  };
  confirm: {
    message: 'Confirm';
  };
  confirmConnectCustodianRedirect: {
    message: 'We will redirect you to $1 upon clicking continue.';
  };
  confirmConnectCustodianText: {
    message: "To connect your accounts log into your $1 account and click on the 'connect to MMI' button.";
  };
  confirmConnectionTitle: {
    message: 'Confirm connection to $1';
  };
  confirmPassword: {
    message: 'Confirm password';
  };
  confirmRecoveryPhrase: {
    message: 'Confirm Secret Recovery Phrase';
  };
  confirmTitleDescPersonalSignature: {
    message: 'Only sign this message if you fully understand the content and trust the requesting site';
  };
  confirmTitleDescTypedDataSignature: {
    message: 'Review everything below before continuing. Once done, this transaction can’t be undone';
  };
  confirmTitleSignature: {
    message: 'Signature request';
  };
  confirmed: {
    message: 'Confirmed';
  };
  confusableUnicode: {
    message: "'$1' is similar to '$2'.";
  };
  confusableZeroWidthUnicode: {
    message: 'Zero-width character found.';
  };
  confusingEnsDomain: {
    message: 'We have detected a confusable character in the ENS name. Check the ENS name to avoid a potential scam.';
  };
  connect: {
    message: 'Connect';
  };
  connectAccount: {
    message: 'Connect account';
  };
  connectAccountOrCreate: {
    message: 'Connect account or create new';
  };
  connectAccounts: {
    message: 'Connect accounts';
  };
  connectCustodialAccountMenu: {
    message: 'Connect Custodial Account';
  };
  connectCustodialAccountMsg: {
    message: 'Please choose the custodian you want to connect in order to add or refresh a token.';
  };
  connectCustodialAccountTitle: {
    message: 'Custodial Accounts';
  };
  connectCustodianAccounts: {
    message: 'Connect $1 accounts';
  };
  connectManually: {
    message: 'Manually connect to current site';
  };
  connectMoreAccounts: {
    message: 'Connect more accounts';
  };
  connectSnap: {
    message: 'Connect $1';
    description: '$1 is the snap for which a connection is being requested.';
  };
  connectWithMetaMask: {
    message: 'Connect with MetaMask';
  };
  connectedAccounts: {
    message: 'Connected accounts';
  };
  connectedAccountsDescriptionPlural: {
    message: 'You have $1 accounts connected to this site.';
    description: '$1 is the number of accounts';
  };
  connectedAccountsDescriptionSingular: {
    message: 'You have 1 account connected to this site.';
  };
  connectedAccountsEmptyDescription: {
    message: 'MetaMask is not connected to this site. To connect to a web3 site, find and click the connect button.';
  };
  connectedAccountsListTooltip: {
    message: '$1 can see the account balance, address, activity, and suggest transactions to approve for connected accounts.';
    description: '$1 is the origin name';
  };
  connectedAccountsToast: {
    message: 'Connected accounts updated';
  };
  connectedSites: {
    message: 'Connected sites';
  };
  connectedSitesDescription: {
    message: '$1 is connected to these sites. They can view your account address.';
    description: '$1 is the account name';
  };
  connectedSitesEmptyDescription: {
    message: '$1 is not connected to any sites.';
    description: '$1 is the account name';
  };
  connectedSnapAndNoAccountDescription: {
    message: 'MetaMask is connected to this site, but no accounts are connected yet';
  };
  connectedWith: {
    message: 'Connected with';
  };
  connecting: {
    message: 'Connecting';
  };
  connectingTo: {
    message: 'Connecting to $1';
  };
  connectingToDeprecatedNetwork: {
    message: "'$1' is being phased out and may not work. Try another network.";
  };
  connectingToGoerli: {
    message: 'Connecting to Goerli test network';
  };
  connectingToLineaGoerli: {
    message: 'Connecting to Linea Goerli test network';
  };
  connectingToLineaMainnet: {
    message: 'Connecting to Linea Mainnet';
  };
  connectingToLineaSepolia: {
    message: 'Connecting to Linea Sepolia test network';
  };
  connectingToMainnet: {
    message: 'Connecting to Ethereum Mainnet';
  };
  connectingToSepolia: {
    message: 'Connecting to Sepolia test network';
  };
  connectionFailed: {
    message: 'Connection failed';
  };
  connectionFailedDescription: {
    message: 'Fetching of $1 failed, check your network and try again.';
    description: '$1 is the name of the snap being fetched.';
  };
  connectionRequest: {
    message: 'Connection request';
  };
  contactUs: {
    message: 'Contact us';
  };
  contacts: {
    message: 'Contacts';
  };
  contentFromSnap: {
    message: 'Content from $1';
    description: '$1 represents the name of the snap';
  };
  continue: {
    message: 'Continue';
  };
  continueMmiOnboarding: {
    message: 'Continue MetaMask Institutional onboarding';
  };
  continueToWallet: {
    message: 'Continue to wallet';
  };
  contract: {
    message: 'Contract';
  };
  contractAddress: {
    message: 'Contract address';
  };
  contractAddressError: {
    message: "You are sending tokens to the token's contract address. This may result in the loss of these tokens.";
  };
  contractDeployment: {
    message: 'Contract deployment';
  };
  contractDescription: {
    message: 'To protect yourself against scammers, take a moment to verify third-party details.';
  };
  contractInteraction: {
    message: 'Contract interaction';
  };
  contractNFT: {
    message: 'NFT contract';
  };
  contractRequestingAccess: {
    message: 'Third party requesting access';
  };
  contractRequestingSignature: {
    message: 'Third party requesting signature';
  };
  contractRequestingSpendingCap: {
    message: 'Third party requesting spending cap';
  };
  contractTitle: {
    message: 'Third-party details';
  };
  contractToken: {
    message: 'Token contract';
  };
  convertTokenToNFTDescription: {
    message: "We've detected that this asset is an NFT. MetaMask now has full native support for NFTs. Would you like to remove it from your token list and add it as an NFT?";
  };
  convertTokenToNFTExistDescription: {
    message: 'We’ve detected that this asset has been added as an NFT. Would you like to remove it from your token list?';
  };
  coolWallet: {
    message: 'CoolWallet';
  };
  copiedExclamation: {
    message: 'Copied.';
  };
  copyAddress: {
    message: 'Copy address to clipboard';
  };
  copyPrivateKey: {
    message: 'Copy private key';
  };
  copyRawTransactionData: {
    message: 'Copy raw transaction data';
  };
  copyToClipboard: {
    message: 'Copy to clipboard';
  };
  copyTransactionId: {
    message: 'Copy transaction ID';
  };
  create: {
    message: 'Create';
  };
  createNewWallet: {
    message: 'Create a new wallet';
  };
  createPassword: {
    message: 'Create password';
  };
  createSnapAccountDescription: {
    message: '$1 wants to add a new account to MetaMask.';
  };
  createSnapAccountTitle: {
    message: 'Create account';
  };
  crossChainSwapsLink: {
    message: 'Swap across networks with MetaMask Portfolio';
  };
  cryptoCompare: {
    message: 'CryptoCompare';
  };
  currencyConversion: {
    message: 'Currency conversion';
  };
  currencyRateCheckToggle: {
    message: 'Show balance and token price checker';
  };
  currencyRateCheckToggleDescription: {
    message: 'We use $1 and $2 APIs to display your balance and token price. $3';
    description: '$1 represents Coingecko, $2 represents CryptoCompare and $3 represents Privacy Policy';
  };
  currencySymbol: {
    message: 'Currency symbol';
  };
  currencySymbolDefinition: {
    message: 'The ticker symbol displayed for this network’s currency.';
  };
  currentAccountNotConnected: {
    message: 'Your current account is not connected';
  };
  currentExtension: {
    message: 'Current extension page';
  };
  currentLanguage: {
    message: 'Current language';
  };
  currentRpcUrlDeprecated: {
    message: 'The current rpc url for this network has been deprecated.';
  };
  currentTitle: {
    message: 'Current:';
  };
  currentlyUnavailable: {
    message: 'Unavailable on this network';
  };
  curveHighGasEstimate: {
    message: 'Aggressive gas estimate graph';
  };
  curveLowGasEstimate: {
    message: 'Low gas estimate graph';
  };
  curveMediumGasEstimate: {
    message: 'Market gas estimate graph';
  };
  custodian: {
    message: 'Custodian';
  };
  custodianAccountAddedDesc: {
    message: 'You can now use your accounts in MetaMask Institutional.';
  };
  custodianAccountAddedTitle: {
    message: 'Selected $1 accounts have been added.';
  };
  custodianReplaceRefreshTokenChangedFailed: {
    message: "Please go to $1 and click the 'Connect to MMI' button within their user interface to connect your accounts to MMI again.";
  };
  custodianReplaceRefreshTokenChangedSubtitle: {
    message: 'You can now use your custodian accounts in MetaMask Institutional.';
  };
  custodianReplaceRefreshTokenChangedTitle: {
    message: 'Your custodian token has been refreshed';
  };
  custodianReplaceRefreshTokenSubtitle: {
    message: 'This is will replace the custodian token for the following address:';
  };
  custodianReplaceRefreshTokenTitle: {
    message: 'Replace custodian token';
  };
  custodyDeeplinkDescription: {
    message: 'Approve the transaction in the $1 app. Once all required custody approvals have been performed the transaction will complete. Check your $1 app for status.';
  };
  custodyRefreshTokenModalDescription: {
    message: "Please go to $1 and click the 'Connect to MMI' button within their user interface to connect your accounts to MMI again.";
  };
  custodyRefreshTokenModalDescription1: {
    message: 'Your custodian issues a token that authenticates the MetaMask Institutional extension, allowing you to connect your accounts.';
  };
  custodyRefreshTokenModalDescription2: {
    message: 'This token expires after a certain period for security reasons. This requires you to reconnect to MMI.';
  };
  custodyRefreshTokenModalSubtitle: {
    message: 'Why am I seeing this?';
  };
  custodyRefreshTokenModalTitle: {
    message: 'Your custodian session has expired';
  };
  custodySessionExpired: {
    message: 'Custodian session expired.';
  };
  custodyWrongChain: {
    message: 'This account is not set up for use with $1';
  };
  custom: {
    message: 'Advanced';
  };
  customContentSearch: {
    message: 'Search for a previously added network';
  };
  customGasSettingToolTipMessage: {
    message: 'Use $1 to customize the gas price. This can be confusing if you aren’t familiar. Interact at your own risk.';
    description: "$1 is key 'advanced' (text: 'Advanced') separated here so that it can be passed in with bold font-weight";
  };
  customSpendLimit: {
    message: 'Custom spend limit';
  };
  customSpendingCap: {
    message: 'Custom spending cap';
  };
  customToken: {
    message: 'Custom token';
  };
  customTokenWarningInNonTokenDetectionNetwork: {
    message: 'Token detection is not available on this network yet. Please import token manually and make sure you trust it. Learn about $1';
  };
  customTokenWarningInTokenDetectionNetwork: {
    message: 'Anyone can create a token, including creating fake versions of existing tokens. Learn about $1';
  };
  customTokenWarningInTokenDetectionNetworkWithTDOFF: {
    message: 'Make sure you trust a token before you import it. Learn how to avoid $1. You can also enable token detection $2.';
  };
  customerSupport: {
    message: 'customer support';
  };
  dappRequestedSpendingCap: {
    message: 'Site requested spending cap';
  };
  dappSuggested: {
    message: 'Site suggested';
  };
  dappSuggestedGasSettingToolTipMessage: {
    message: '$1 has suggested this price.';
    description: '$1 is url for the dapp that has suggested gas settings';
  };
  dappSuggestedHigh: {
    message: 'Site suggested';
  };
  dappSuggestedHighShortLabel: {
    message: 'Site (high)';
  };
  dappSuggestedShortLabel: {
    message: 'Site';
  };
  dappSuggestedTooltip: {
    message: '$1 has recommended this price.';
    description: "$1 represents the Dapp's origin";
  };
  darkTheme: {
    message: 'Dark';
  };
  data: {
    message: 'Data';
  };
  dataBackupSeemsCorrupt: {
    message: 'Can not restore your data. The file appears to be corrupt.';
  };
  dataHex: {
    message: 'Hex';
  };
  dcent: {
    message: "D'Cent";
  };
  decimal: {
    message: 'Token decimal';
  };
  decimalsMustZerotoTen: {
    message: 'Decimals must be at least 0, and not over 36.';
  };
  decrypt: {
    message: 'Decrypt';
  };
  decryptCopy: {
    message: 'Copy encrypted message';
  };
  decryptInlineError: {
    message: 'This message cannot be decrypted due to error: $1';
    description: '$1 is error message';
  };
  decryptMessageNotice: {
    message: '$1 would like to read this message to complete your action';
    description: '$1 is the web3 site name';
  };
  decryptMetamask: {
    message: 'Decrypt message';
  };
  decryptRequest: {
    message: 'Decrypt request';
  };
  delete: {
    message: 'Delete';
  };
  deleteContact: {
    message: 'Delete contact';
  };
  deleteNetwork: {
    message: 'Delete network?';
  };
  deleteNetworkIntro: {
    message: 'If you delete this network, you will need to add it again to view your assets in this network';
  };
  deleteNetworkTitle: {
    message: 'Delete $1 network?';
    description: '$1 represents the name of the network';
  };
  deposit: {
    message: 'Deposit';
  };
  deprecatedAuroraNetworkMsg: {
    message: 'MetaMask will be deprecating support for Aurora network. Please add it as a custom network if you want to continue to use it';
  };
  deprecatedGoerliNtwrkMsg: {
    message: 'Because of updates to the Ethereum system, the Goerli test network will be phased out soon.';
  };
  deprecatedNetwork: {
    message: 'This network is deprecated';
  };
  deprecatedNetworkButtonMsg: {
    message: 'Got it';
  };
  deprecatedNetworkDescription: {
    message: "The network you're trying to connect to is no longer supported by Metamask. $1";
  };
  description: {
    message: 'Description';
  };
  descriptionFromSnap: {
    message: 'Description from $1';
    description: '$1 represents the name of the snap';
  };
  desktopApp: {
    message: 'Desktop App';
  };
  desktopConnectionCriticalErrorDescription: {
    message: 'This error could be intermittent, so try restarting the extension or disable MetaMask Desktop.';
  };
  desktopConnectionCriticalErrorTitle: {
    message: 'MetaMask had trouble starting';
  };
  desktopConnectionLostErrorDescription: {
    message: 'Please make sure you have the desktop app up and running or disable MetaMask Desktop.';
  };
  desktopConnectionLostErrorTitle: {
    message: 'MetaMask Desktop connection was lost';
  };
  desktopDisableButton: {
    message: 'Disable Desktop App';
  };
  desktopDisableErrorCTA: {
    message: 'Disable MetaMask Desktop';
  };
  desktopEnableButton: {
    message: 'Enable Desktop App';
  };
  desktopEnableButtonDescription: {
    message: 'Click to run all background processes in the desktop app.';
  };
  desktopErrorNavigateSettingsCTA: {
    message: 'Return to Settings Page';
  };
  desktopErrorRestartMMCTA: {
    message: 'Restart MetaMask';
  };
  desktopNotFoundErrorCTA: {
    message: 'Download MetaMask Desktop';
  };
  desktopNotFoundErrorDescription1: {
    message: 'Please make sure you have the desktop app up and running.';
  };
  desktopNotFoundErrorDescription2: {
    message: 'If you have no desktop app installed, please download it on the MetaMask website.';
  };
  desktopNotFoundErrorTitle: {
    message: 'MetaMask Desktop was not found';
  };
  desktopOpenOrDownloadCTA: {
    message: 'Open MetaMask Desktop';
  };
  desktopOutdatedErrorCTA: {
    message: 'Update MetaMask Desktop';
  };
  desktopOutdatedErrorDescription: {
    message: 'Your MetaMask desktop app needs to be upgraded.';
  };
  desktopOutdatedErrorTitle: {
    message: 'MetaMask Desktop is outdated';
  };
  desktopOutdatedExtensionErrorCTA: {
    message: 'Update MetaMask Extension';
  };
  desktopOutdatedExtensionErrorDescription: {
    message: 'Your MetaMask extension needs to be upgraded.';
  };
  desktopOutdatedExtensionErrorTitle: {
    message: 'MetaMask Extension is outdated';
  };
  desktopPageDescription: {
    message: "If the pairing is successful, extension will restart and you'll have to re-enter your password.";
  };
  desktopPageSubTitle: {
    message: 'Open your MetaMask Desktop and type this code';
  };
  desktopPageTitle: {
    message: 'Pair with Desktop';
  };
  desktopPairedWarningDeepLink: {
    message: 'Go to Settings in MetaMask Desktop';
  };
  desktopPairedWarningDescription: {
    message: 'If you want to start a new pairing, please remove the current connection.';
  };
  desktopPairedWarningTitle: {
    message: 'MM Desktop is already paired';
  };
  desktopPairingExpireMessage: {
    message: 'Code expires in $1 seconds';
  };
  desktopRouteNotFoundErrorDescription: {
    message: 'desktopRouteNotFoundErrorDescription';
  };
  desktopRouteNotFoundErrorTitle: {
    message: 'desktopRouteNotFoundErrorTitle';
  };
  desktopUnexpectedErrorCTA: {
    message: 'Return MetaMask Home';
  };
  desktopUnexpectedErrorDescription: {
    message: 'Check your MetaMask Desktop to restore connection';
  };
  desktopUnexpectedErrorTitle: {
    message: 'Something went wrong...';
  };
  details: {
    message: 'Details';
  };
  developerOptions: {
    message: 'Developer Options';
  };
  developerOptionsResetStatesAnnouncementsDescription: {
    message: "Resets isShown boolean to false for all announcements. Announcements are the notifications shown in the What's New popup modal.";
  };
  developerOptionsResetStatesOnboarding: {
    message: 'Resets various states related to onboarding and redirects to the "Secure Your Wallet" onboarding page.';
  };
  disabledGasOptionToolTipMessage: {
    message: '“$1” is disabled because it does not meet the minimum of a 10% increase from the original gas fee.';
    description: '$1 is gas estimate type which can be market or aggressive';
  };
  disconnect: {
    message: 'Disconnect';
  };
  disconnectAllAccounts: {
    message: 'Disconnect all accounts';
  };
  disconnectAllAccountsConfirmationDescription: {
    message: 'Are you sure you want to disconnect? You may lose site functionality.';
  };
  disconnectAllAccountsText: {
    message: 'accounts';
  };
  disconnectAllSnapsText: {
    message: 'Snaps';
  };
  disconnectAllText: {
    message: "If you disconnect your $1 from $2, you'll need to reconnect to use them again.";
    description: '$1 will map to `disconnectAllAccountsText` or `disconnectAllSnapsText`, $2 represents the website hostname';
  };
  disconnectAllTitle: {
    message: 'Disconnect all $1';
    description: '$1 will map to `disconnectAllAccountsText` or `disconnectAllSnapsText`';
  };
  disconnectPrompt: {
    message: 'Disconnect $1';
  };
  disconnectThisAccount: {
    message: 'Disconnect this account';
  };
  disconnectedAllAccountsToast: {
    message: 'All accounts disconnected from $1';
    description: '$1 is name of the dapp`';
  };
  disconnectedSingleAccountToast: {
    message: '$1 disconnected from $2';
    description: '$1 is name of the name and $2 represents the dapp name`';
  };
  discoverSnaps: {
    message: 'Discover Snaps';
    description: 'Text that links to the Snaps website. Displayed in a banner on Snaps list page in settings.';
  };
  dismiss: {
    message: 'Dismiss';
  };
  dismissReminderDescriptionField: {
    message: 'Turn this on to dismiss the Secret Recovery Phrase backup reminder message. We highly recommend that you back up your Secret Recovery Phrase to avoid loss of funds';
  };
  dismissReminderField: {
    message: 'Dismiss Secret Recovery Phrase backup reminder';
  };
  displayNftMedia: {
    message: 'Display NFT media';
  };
  displayNftMediaDescription: {
    message: "Displaying NFT media and data exposes your IP address to OpenSea or other third parties. This can allow attackers to associate your IP address with your Ethereum address. NFT autodetection relies on this setting, and won't be available when this is turned off.";
  };
  doNotShare: {
    message: 'Do not share this with anyone';
  };
  domain: {
    message: 'Domain';
  };
  domainNotSupportedOnNetwork: {
    message: 'Network does not support domain lookup';
  };
  done: {
    message: 'Done';
  };
  dontShowThisAgain: {
    message: "Don't show this again";
  };
  downArrow: {
    message: 'down arrow';
  };
  downloadGoogleChrome: {
    message: 'Download Google Chrome';
  };
  downloadNow: {
    message: 'Download Now';
  };
  downloadStateLogs: {
    message: 'Download state logs';
  };
  dragAndDropBanner: {
    message: 'You can drag networks to reorder them. ';
  };
  dropped: {
    message: 'Dropped';
  };
  edit: {
    message: 'Edit';
  };
  editANickname: {
    message: 'Edit nickname';
  };
  editAddressNickname: {
    message: 'Edit address nickname';
  };
  editCancellationGasFeeModalTitle: {
    message: 'Edit cancellation gas fee';
  };
  editContact: {
    message: 'Edit contact';
  };
  editGasFeeModalTitle: {
    message: 'Edit gas fee';
  };
  editGasLimitOutOfBounds: {
    message: 'Gas limit must be at least $1';
  };
  editGasLimitOutOfBoundsV2: {
    message: 'Gas limit must be greater than $1 and less than $2';
    description: '$1 is the minimum limit for gas and $2 is the maximum limit';
  };
  editGasLimitTooltip: {
    message: 'Gas limit is the maximum units of gas you are willing to use. Units of gas are a multiplier to “Max priority fee” and “Max fee”.';
  };
  editGasMaxBaseFeeGWEIImbalance: {
    message: 'Max base fee cannot be lower than priority fee';
  };
  editGasMaxBaseFeeHigh: {
    message: 'Max base fee is higher than necessary';
  };
  editGasMaxBaseFeeLow: {
    message: 'Max base fee is low for current network conditions';
  };
  editGasMaxFeeHigh: {
    message: 'Max fee is higher than necessary';
  };
  editGasMaxFeeLow: {
    message: 'Max fee too low for network conditions';
  };
  editGasMaxFeePriorityImbalance: {
    message: 'Max fee cannot be lower than max priority fee';
  };
  editGasMaxPriorityFeeBelowMinimum: {
    message: 'Max priority fee must be greater than 0 GWEI';
  };
  editGasMaxPriorityFeeBelowMinimumV2: {
    message: 'Priority fee must be greater than 0.';
  };
  editGasMaxPriorityFeeHigh: {
    message: 'Max priority fee is higher than necessary. You may pay more than needed.';
  };
  editGasMaxPriorityFeeHighV2: {
    message: 'Priority fee is higher than necessary. You may pay more than needed';
  };
  editGasMaxPriorityFeeLow: {
    message: 'Max priority fee is low for current network conditions';
  };
  editGasMaxPriorityFeeLowV2: {
    message: 'Priority fee is low for current network conditions';
  };
  editGasPriceTooLow: {
    message: 'Gas price must be greater than 0';
  };
  editGasPriceTooltip: {
    message: 'This network requires a “Gas price” field when submitting a transaction. Gas price is the amount you will pay pay per unit of gas.';
  };
  editGasSubTextAmountLabel: {
    message: 'Max amount:';
    description: 'This is meant to be used as the $1 substitution editGasSubTextAmount';
  };
  editGasSubTextFeeLabel: {
    message: 'Max fee:';
  };
  editGasTitle: {
    message: 'Edit priority';
  };
  editGasTooLow: {
    message: 'Unknown processing time';
  };
  editNonceField: {
    message: 'Edit nonce';
  };
  editNonceMessage: {
    message: 'This is an advanced feature, use cautiously.';
  };
  editPermission: {
    message: 'Edit permission';
  };
  editSpeedUpEditGasFeeModalTitle: {
    message: 'Edit speed up gas fee';
  };
  enable: {
    message: 'Enable';
  };
  enableAutoDetect: {
    message: ' Enable autodetect';
  };
  enableFromSettings: {
    message: ' Enable it from Settings.';
  };
  enableSmartTransactions: {
    message: 'Enable Smart Transactions';
  };
  enableSnap: {
    message: 'Enable';
  };
  enableToken: {
    message: 'enable $1';
    description: '$1 is a token symbol, e.g. ETH';
  };
  enabled: {
    message: 'Enabled';
  };
  encryptionPublicKeyNotice: {
    message: '$1 would like your public encryption key. By consenting, this site will be able to compose encrypted messages to you.';
    description: '$1 is the web3 site name';
  };
  encryptionPublicKeyRequest: {
    message: 'Request encryption public key';
  };
  endpointReturnedDifferentChainId: {
    message: 'The RPC URL you have entered returned a different chain ID ($1). Please update the Chain ID to match the RPC URL of the network you are trying to add.';
    description: '$1 is the return value of eth_chainId from an RPC endpoint';
  };
  enhancedTokenDetectionAlertMessage: {
    message: 'Enhanced token detection is currently available on $1. $2';
  };
  ensDomainsSettingDescriptionIntroduction: {
    message: "MetaMask lets you see ENS domains right in your browser's address bar. Here's how it works:";
  };
  ensDomainsSettingDescriptionOutroduction: {
    message: 'Keep in mind that using this feature exposes your IP address to IPFS third-party services.';
  };
  ensDomainsSettingDescriptionPart1: {
    message: "MetaMask checks with Ethereum's ENS contract to find the code connected to the ENS name.";
  };
  ensDomainsSettingDescriptionPart2: {
    message: 'If the code links to IPFS, you can see the content associated with it (usually a website).';
  };
  ensDomainsSettingTitle: {
    message: 'Show ENS domains in address bar';
  };
  ensIllegalCharacter: {
    message: 'Illegal character for ENS.';
  };
  ensRegistrationError: {
    message: 'Error in ENS name registration';
  };
  ensUnknownError: {
    message: 'ENS lookup failed.';
  };
  enterANumber: {
    message: 'Enter a number';
  };
  enterCustodianToken: {
    message: 'Enter your $1 token or add a new token';
  };
  enterMaxSpendLimit: {
    message: 'Enter max spend limit';
  };
  enterOptionalPassword: {
    message: 'Enter optional password';
  };
  enterPasswordContinue: {
    message: 'Enter password to continue';
  };
  enterTokenNameOrAddress: {
    message: 'Enter token name or paste address';
  };
  enterYourPassword: {
    message: 'Enter your password';
  };
  errorCode: {
    message: 'Code: $1';
    description: 'Displayed error code for debugging purposes. $1 is the error code';
  };
  errorDetails: {
    message: 'Error details';
    description: 'Title for collapsible section that displays error details for debugging purposes';
  };
  errorGettingSafeChainList: {
    message: 'Error while getting safe chain list, please continue with caution.';
  };
  errorMessage: {
    message: 'Message: $1';
    description: 'Displayed error message for debugging purposes. $1 is the error message';
  };
  errorName: {
    message: 'Code: $1';
    description: 'Displayed error name for debugging purposes. $1 is the error name';
  };
  errorPageMessage: {
    message: 'Try again by reloading the page, or contact support $1.';
    description: "Message displayed on generic error page in the fullscreen or notification UI, $1 is a clickable link with text defined by the 'here' key. The link will open to a form where users can file support tickets.";
  };
  errorPagePopupMessage: {
    message: 'Try again by closing and reopening the popup, or contact support $1.';
    description: "Message displayed on generic error page in the popup UI, $1 is a clickable link with text defined by the 'here' key. The link will open to a form where users can file support tickets.";
  };
  errorPageTitle: {
    message: 'MetaMask encountered an error';
    description: 'Title of generic error page';
  };
  errorStack: {
    message: 'Stack:';
    description: 'Title for error stack, which is displayed for debugging purposes';
  };
  errorWhileConnectingToRPC: {
    message: 'Error while connecting to the custom network.';
  };
  errorWithSnap: {
    message: 'Error with $1';
    description: '$1 represents the name of the snap';
  };
  estimatedFee: {
    message: 'Estimated fee';
  };
  ethGasPriceFetchWarning: {
    message: 'Backup gas price is provided as the main gas estimation service is unavailable right now.';
  };
  ethereumProviderAccess: {
    message: 'Grant Ethereum provider access to $1';
    description: 'The parameter is the name of the requesting origin';
  };
  ethereumPublicAddress: {
    message: 'Ethereum public address';
  };
  etherscan: {
    message: 'Etherscan';
  };
  etherscanView: {
    message: 'View account on Etherscan';
  };
  etherscanViewOn: {
    message: 'View on Etherscan';
  };
  expandView: {
    message: 'Expand view';
  };
  experimental: {
    message: 'Experimental';
  };
  extendWalletWithSnaps: {
    message: 'Explore community-built Snaps to customize your web3 experience';
    description: 'Banner description displayed on Snaps list page in Settings when less than 6 Snaps is installed.';
  };
  extensionInsallCompleteDescription: {
    message: 'Return to the MetaMask Institutional product onboarding to connect your custodial or self-custodial accounts.';
  };
  extensionInsallCompleteTitle: {
    message: 'Extension install complete';
  };
  externalExtension: {
    message: 'External extension';
  };
  externalNameSourcesSetting: {
    message: 'Proposed nicknames';
  };
  externalNameSourcesSettingDescription: {
    message: 'We’ll fetch proposed nicknames for addresses you interact with from third-party sources like Etherscan, Infura, and Lens Protocol. These sources will be able to see the those addresses and your IP address. Your account address won’t be exposed to third parties.';
  };
  failed: {
    message: 'Failed';
  };
  failedToFetchChainId: {
    message: 'Could not fetch chain ID. Is your RPC URL correct?';
  };
  failedToFetchTickerSymbolData: {
    message: 'Ticker symbol verification data is currently unavailable, make sure that the symbol you have entered is correct. It will impact the conversion rates that you see for this network';
  };
  failureMessage: {
    message: 'Something went wrong, and we were unable to complete the action';
  };
  fast: {
    message: 'Fast';
  };
  feeAssociatedRequest: {
    message: 'A fee is associated with this request.';
  };
  feeDetails: {
    message: 'Fee details';
  };
  fiat: {
    message: 'Fiat';
    description: 'Exchange type';
  };
  fileImportFail: {
    message: 'File import not working? Click here!';
    description: 'Helps user import their account from a JSON file';
  };
  flaskWelcomeUninstall: {
    message: 'you should uninstall this extension';
    description: 'This request is shown on the Flask Welcome screen. It is intended for non-developers, and will be bolded.';
  };
  flaskWelcomeWarning1: {
    message: 'Flask is for developers to experiment with new unstable APIs. Unless you are a developer or beta tester, $1.';
    description: "This is a warning shown on the Flask Welcome screen, intended to encourage non-developers not to proceed any further. $1 is the bolded message 'flaskWelcomeUninstall'";
  };
  flaskWelcomeWarning2: {
    message: 'We do not guarantee the safety or stability of this extension. The new APIs offered by Flask are not hardened against phishing attacks, meaning that any site or snap that requires Flask might be a malicious attempt to steal your assets.';
    description: 'This explains the risks of using MetaMask Flask';
  };
  flaskWelcomeWarning3: {
    message: 'All Flask APIs are experimental. They may be changed or removed without notice, or they might stay on Flask indefinitely without ever being migrated to stable MetaMask. Use them at your own risk.';
    description: 'This message warns developers about unstable Flask APIs';
  };
  flaskWelcomeWarning4: {
    message: 'Make sure to disable your regular MetaMask extension when using Flask.';
    description: 'This message calls to pay attention about multiple versions of MetaMask running on the same site (Flask + Prod)';
  };
  flaskWelcomeWarningAcceptButton: {
    message: 'I accept the risks';
    description: 'this text is shown on a button, which the user presses to confirm they understand the risks of using Flask';
  };
  floatAmountToken: {
    message: 'Token amount must be an integer';
  };
  followUsOnTwitter: {
    message: 'Follow us on Twitter';
  };
  forbiddenIpfsGateway: {
    message: 'Forbidden IPFS Gateway: Please specify a CID gateway';
  };
  forgetDevice: {
    message: 'Forget this device';
  };
  forgotPassword: {
    message: 'Forgot password?';
  };
  from: {
    message: 'From';
  };
  fromAddress: {
    message: 'From: $1';
    description: '$1 is the address to include in the From label. It is typically shortened first using shortenAddress';
  };
  fromTokenLists: {
    message: 'From token lists: $1';
  };
  function: {
    message: 'Function: $1';
  };
  functionApprove: {
    message: 'Function: Approve';
  };
  functionSetApprovalForAll: {
    message: 'Function: SetApprovalForAll';
  };
  functionType: {
    message: 'Function type';
  };
  fundYourWallet: {
    message: 'Fund your wallet';
  };
  fundYourWalletDescription: {
    message: 'Get started by adding some $1 to your wallet.';
    description: '$1 is the token symbol';
  };
  gas: {
    message: 'Gas';
  };
  gasDisplayAcknowledgeDappButtonText: {
    message: 'Edit suggested gas fee';
  };
  gasDisplayDappWarning: {
    message: 'This gas fee has been suggested by $1. Overriding this may cause a problem with your transaction. Please reach out to $1 if you have questions.';
    description: "$1 represents the Dapp's origin";
  };
  gasIsETH: {
    message: 'Gas is $1 ';
  };
  gasLimit: {
    message: 'Gas limit';
  };
  gasLimitInfoTooltipContent: {
    message: 'Gas limit is the maximum amount of units of gas you are willing to spend.';
  };
  gasLimitRecommended: {
    message: 'Recommended gas limit is $1. If the gas limit is less than that, it may fail.';
  };
  gasLimitTooLow: {
    message: 'Gas limit must be at least 21000';
  };
  gasLimitTooLowWithDynamicFee: {
    message: 'Gas limit must be at least $1';
    description: '$1 is the custom gas limit, in decimal.';
  };
  gasLimitV2: {
    message: 'Gas limit';
  };
  gasOption: {
    message: 'Gas option';
  };
  gasPrice: {
    message: 'Gas price (GWEI)';
  };
  gasPriceExcessive: {
    message: 'Your gas fee is set unnecessarily high. Consider lowering the amount.';
  };
  gasPriceExcessiveInput: {
    message: 'Gas price is excessive';
  };
  gasPriceExtremelyLow: {
    message: 'Gas price extremely low';
  };
  gasPriceFetchFailed: {
    message: 'Gas price estimation failed due to network error.';
  };
  gasPriceInfoTooltipContent: {
    message: 'Gas price specifies the amount of Ether you are willing to pay for each unit of gas.';
  };
  gasTimingHoursShort: {
    message: '$1 hrs';
    description: '$1 represents a number of hours';
  };
  gasTimingLow: {
    message: 'Slow';
  };
  gasTimingMinutesShort: {
    message: '$1 min';
    description: '$1 represents a number of minutes';
  };
  gasTimingSecondsShort: {
    message: '$1 sec';
    description: '$1 represents a number of seconds';
  };
  gasUsed: {
    message: 'Gas used';
  };
  general: {
    message: 'General';
  };
  generalCameraError: {
    message: "We couldn't access your camera. Please give it another try.";
  };
  generalCameraErrorTitle: {
    message: 'Something went wrong....';
  };
  genericExplorerView: {
    message: 'View account on $1';
  };
  getStartedWithNFTs: {
    message: 'Get $1 to buy NFTs';
    description: '$1 is the token symbol';
  };
  getStartedWithNFTsDescription: {
    message: 'Get started with NFTs by adding some $1 to your wallet.';
    description: '$1 is the token symbol';
  };
  goBack: {
    message: 'Go back';
  };
  goToSite: {
    message: 'Go to site';
  };
  goerli: {
    message: 'Goerli test network';
  };
  gotIt: {
    message: 'Got it';
  };
  grantedToWithColon: {
    message: 'Granted to:';
  };
  gwei: {
    message: 'GWEI';
  };
  hardware: {
    message: 'Hardware';
  };
  hardwareWalletConnected: {
    message: 'Hardware wallet connected';
  };
  hardwareWalletLegacyDescription: {
    message: '(legacy)';
    description: 'Text representing the MEW path';
  };
  hardwareWalletSupportLinkConversion: {
    message: 'click here';
  };
  hardwareWallets: {
    message: 'Connect a hardware wallet';
  };
  hardwareWalletsInfo: {
    message: 'Hardware wallet integrations use API calls to external servers, which can see your IP address and the smart contract addresses you interact with.';
  };
  hardwareWalletsMsg: {
    message: 'Select a hardware wallet you would like to use with MetaMask.';
  };
  here: {
    message: 'here';
    description: 'as in -click here- for more information (goes with troubleTokenBalances)';
  };
  hexData: {
    message: 'Hex data';
  };
  hiddenAccounts: {
    message: 'Hidden accounts';
  };
  hide: {
    message: 'Hide';
  };
  hideAccount: {
    message: 'Hide account';
  };
  hideFullTransactionDetails: {
    message: 'Hide full transaction details';
  };
  hideSeedPhrase: {
    message: 'Hide seed phrase';
  };
  hideSentitiveInfo: {
    message: 'Hide sensitive information';
  };
  hideToken: {
    message: 'Hide token';
  };
  hideTokenPrompt: {
    message: 'Hide token?';
  };
  hideTokenSymbol: {
    message: 'Hide $1';
    description: "$1 is the symbol for a token (e.g. 'DAI')";
  };
  hideZeroBalanceTokens: {
    message: 'Hide tokens without balance';
  };
  high: {
    message: 'Aggressive';
  };
  highGasSettingToolTipMessage: {
    message: 'High probability, even in volatile markets. Use $1 to cover surges in network traffic due to things like popular NFT drops.';
    description: "$1 is key 'high' (text: 'Aggressive') separated here so that it can be passed in with bold font-weight";
  };
  highLowercase: {
    message: 'high';
  };
  history: {
    message: 'History';
  };
  holdToRevealContent1: {
    message: 'Your Secret Recovery Phrase provides $1';
    description: "$1 is a bolded text with the message from 'holdToRevealContent2'";
  };
  holdToRevealContent2: {
    message: 'full access to your wallet and funds.';
    description: "Is the bolded text in 'holdToRevealContent1'";
  };
  holdToRevealContent3: {
    message: 'Do not share this with anyone. $1 $2';
    description: "$1 is a message from 'holdToRevealContent4' and $2 is a text link with the message from 'holdToRevealContent5'";
  };
  holdToRevealContent4: {
    message: 'MetaMask Support will not request this,';
    description: "Part of 'holdToRevealContent3'";
  };
  holdToRevealContent5: {
    message: 'but phishers might.';
    description: "The text link in 'holdToRevealContent3'";
  };
  holdToRevealContentPrivateKey1: {
    message: 'Your Private Key provides $1';
    description: "$1 is a bolded text with the message from 'holdToRevealContentPrivateKey2'";
  };
  holdToRevealContentPrivateKey2: {
    message: 'full access to your wallet and funds.';
    description: "Is the bolded text in 'holdToRevealContentPrivateKey2'";
  };
  holdToRevealLockedLabel: {
    message: 'hold to reveal circle locked';
  };
  holdToRevealPrivateKey: {
    message: 'Hold to reveal Private Key';
  };
  holdToRevealPrivateKeyTitle: {
    message: 'Keep your private key safe';
  };
  holdToRevealSRP: {
    message: 'Hold to reveal SRP';
  };
  holdToRevealSRPTitle: {
    message: 'Keep your SRP safe';
  };
  holdToRevealUnlockedLabel: {
    message: 'hold to reveal circle unlocked';
  };
  id: {
    message: 'ID';
  };
  ignoreAll: {
    message: 'Ignore all';
  };
  ignoreTokenWarning: {
    message: 'If you hide tokens, they will not be shown in your wallet. However, you can still add them by searching for them.';
  };
  imToken: {
    message: 'imToken';
  };
  import: {
    message: 'Import';
    description: 'Button to import an account from a selected file';
  };
  importAccount: {
    message: 'Import account';
  };
  importAccountError: {
    message: 'Error importing account.';
  };
  importAccountErrorIsSRP: {
    message: 'You have entered a Secret Recovery Phrase (or mnemonic). To import an account here, you have to enter a private key, which is a hexadecimal string of length 64.';
  };
  importAccountErrorNotAValidPrivateKey: {
    message: 'This is not a valid private key. You have entered a hexadecimal string, but it must be 64 characters long.';
  };
  importAccountErrorNotHexadecimal: {
    message: 'This is not a valid private key. You must enter a hexadecimal string of length 64.';
  };
  importAccountJsonLoading1: {
    message: 'Expect this JSON import to take a few minutes and freeze MetaMask.';
  };
  importAccountJsonLoading2: {
    message: 'We apologize, and we will make it faster in the future.';
  };
  importAccountMsg: {
    message: 'Imported accounts won’t be associated with your MetaMask Secret Recovery Phrase. Learn more about imported accounts';
  };
  importMyWallet: {
    message: 'Import my wallet';
  };
  importNFT: {
    message: 'Import NFT';
  };
  importNFTAddressToolTip: {
    message: "On OpenSea, for example, on the NFT's page under Details, there is a blue hyperlinked value labeled 'Contract Address'. If you click on this, it will take you to the contract's address on Etherscan; at the top-left of that page, there should be an icon labeled 'Contract', and to the right, a long string of letters and numbers. This is the address of the contract that created your NFT. Click on the 'copy' icon to the right of the address, and you'll have it on your clipboard.";
  };
  importNFTPage: {
    message: 'Import NFT page';
  };
  importNFTTokenIdToolTip: {
    message: "An NFT's ID is a unique identifier since no two NFTs are alike. Again, on OpenSea this number is under 'Details'. Make a note of it, or copy it onto your clipboard.";
  };
  importSelectedTokens: {
    message: 'Import selected tokens?';
  };
  importSelectedTokensDescription: {
    message: "Only the tokens you've selected will appear in your wallet. You can always import hidden tokens later by searching for them.";
  };
  importTokenQuestion: {
    message: 'Import token?';
  };
  importTokenWarning: {
    message: 'Anyone can create a token with any name, including fake versions of existing tokens. Add and trade at your own risk!';
  };
  importTokensCamelCase: {
    message: 'Import tokens';
  };
  importTokensError: {
    message: 'We could not import the tokens. Please try again later.';
  };
  importWithCount: {
    message: 'Import $1';
    description: '$1 will the number of detected tokens that are selected for importing, if all of them are selected then $1 will be all';
  };
  imported: {
    message: 'Imported';
    description: 'status showing that an account has been fully loaded into the keyring';
  };
  inYourSettings: {
    message: 'in your Settings';
  };
  infuraBlockedNotification: {
    message: 'MetaMask is unable to connect to the blockchain host. Review possible reasons $1.';
    description: "$1 is a clickable link with with text defined by the 'here' key";
  };
  initialTransactionConfirmed: {
    message: 'Your initial transaction was confirmed by the network. Click OK to go back.';
  };
  inlineAlert: {
    message: 'Alert';
  };
  inputLogicEmptyState: {
    message: "Only enter a number that you're comfortable with the third party spending now or in the future. You can always increase the spending cap later.";
  };
  inputLogicEqualOrSmallerNumber: {
    message: 'This allows the third party to spend $1 from your current balance.';
    description: '$1 is the current token balance in the account and the name of the current token';
  };
  inputLogicHigherNumber: {
    message: 'This allows the third party to spend all your token balance until it reaches the cap or you revoke the spending cap. If this is not intended, consider setting a lower spending cap.';
  };
  insightWarning: {
    message: 'warning';
  };
  insightWarningCheckboxMessage: {
    message: '$1 the request by $2';
    description: '$1 is the action i.e. sign, confirm. $2 is the origin making the request.';
  };
  insightWarningContentPlural: {
    message: 'Review $1 before $2. Once made, the $3 is irreversible.';
    description: "$1 the 'insightWarnings' message (2 warnings) representing warnings, $2 is the action (i.e. signing) and $3 is the result (i.e. signature, transaction)";
  };
  insightWarningContentSingular: {
    message: 'Review $1 before $2. Once made, the $3 is irreversible.';
    description: "$1 is the 'insightWarning' message (1 warning), $2 is the action (i.e. signing) and $3 is the result (i.e. signature, transaction)";
  };
  insightWarningHeader: {
    message: 'This request may be risky';
  };
  insightWarnings: {
    message: 'warnings';
  };
  insightsFromSnap: {
    message: 'Insights from $1';
    description: '$1 represents the name of the snap';
  };
  install: {
    message: 'Install';
  };
  installExtension: {
    message: 'Install extension';
  };
  installExtensionDescription: {
    message: "The institution-compliant version of the world's leading web3 wallet, MetaMask.";
  };
  installOrigin: {
    message: 'Install origin';
  };
  installRequest: {
    message: 'Add to MetaMask';
  };
  installedOn: {
    message: 'Installed on $1';
    description: '$1 is the date when the snap has been installed';
  };
  insufficientBalance: {
    message: 'Insufficient balance.';
  };
  insufficientCurrencyBuyOrDeposit: {
    message: 'You do not have enough $1 in your account to pay for transaction fees on $2 network. $3 or deposit from another account.';
    description: "$1 is the native currency of the network, $2 is the name of the current network, $3 is the key 'buy' + the ticker symbol of the native currency of the chain wrapped in a button";
  };
  insufficientCurrencyBuyOrReceive: {
    message: 'You do not have enough $1 in your account to pay for transaction fees on $2 network. $3 or $4 from another account.';
    description: "$1 is the native currency of the network, $2 is the name of the current network, $3 is the key 'buy' + the ticker symbol of the native currency of the chain wrapped in a button, $4 is the key 'deposit' button";
  };
  insufficientCurrencyDeposit: {
    message: 'You do not have enough $1 in your account to pay for transaction fees on $2 network. Deposit $1 from another account.';
    description: '$1 is the native currency of the network, $2 is the name of the current network';
  };
  insufficientFunds: {
    message: 'Insufficient funds.';
  };
  insufficientFundsForGas: {
    message: 'Insufficient funds for gas';
  };
  insufficientTokens: {
    message: 'Insufficient tokens.';
  };
  interactingWith: {
    message: 'Interacting with';
  };
  introducingSmartTransactions: {
    message: 'Introducing Smart Transactions';
  };
  invalidAddress: {
    message: 'Invalid address';
  };
  invalidAddressRecipient: {
    message: 'Recipient address is invalid';
  };
  invalidAddressRecipientNotEthNetwork: {
    message: 'Not ETH network, set to lowercase';
  };
  invalidAssetType: {
    message: 'This asset is an NFT and needs to be re-added on the Import NFTs page found under the NFTs tab';
  };
  invalidBlockExplorerURL: {
    message: 'Invalid block explorer URL';
  };
  invalidChainIdTooBig: {
    message: 'Invalid chain ID. The chain ID is too big.';
  };
  invalidCustomNetworkAlertContent1: {
    message: "The chain ID for custom network '$1' has to be re-entered.";
    description: '$1 is the name/identifier of the network.';
  };
  invalidCustomNetworkAlertContent2: {
    message: 'To protect you from malicious or faulty network providers, chain IDs are now required for all custom networks.';
  };
  invalidCustomNetworkAlertContent3: {
    message: 'Go to Settings > Network and enter the chain ID. You can find the chain IDs of most popular networks on $1.';
    description: '$1 is a link to https://chainid.network';
  };
  invalidCustomNetworkAlertTitle: {
    message: 'Invalid custom network';
  };
  invalidHexNumber: {
    message: 'Invalid hexadecimal number.';
  };
  invalidHexNumberLeadingZeros: {
    message: 'Invalid hexadecimal number. Remove any leading zeros.';
  };
  invalidIpfsGateway: {
    message: 'Invalid IPFS Gateway: The value must be a valid URL';
  };
  invalidNumber: {
    message: "Invalid number. Enter a decimal or '0x'-prefixed hexadecimal number.";
  };
  invalidNumberLeadingZeros: {
    message: 'Invalid number. Remove any leading zeros.';
  };
  invalidRPC: {
    message: 'Invalid RPC URL';
  };
  invalidSeedPhrase: {
    message: 'Invalid Secret Recovery Phrase';
  };
  invalidSeedPhraseCaseSensitive: {
    message: 'Invalid input! Secret Recovery Phrase is case sensitive.';
  };
  ipfsGateway: {
    message: 'IPFS gateway';
  };
  ipfsGatewayDescription: {
    message: "MetaMask uses third-party services to show images of your NFTs stored on IPFS, display information related to ENS addresses entered in your browser's address bar, and fetch icons for different tokens. Your IP address may be exposed to these services when you’re using them.";
  };
  ipfsToggleModalDescriptionOne: {
    message: "We use third-party services to show images of your NFTs stored on IPFS, display information related to ENS addresses entered in your browser's address bar, and fetch icons for different tokens. Your IP address may be exposed to these services when you’re using them.";
  };
  ipfsToggleModalDescriptionTwo: {
    message: 'Selecting Confirm turns on IPFS resolution. You can turn it off in $1 at any time.';
    description: '$1 is the method to turn off ipfs';
  };
  ipfsToggleModalSettings: {
    message: 'Settings > Security and privacy';
  };
  isSigningOrSubmitting: {
    message: 'A previous transaction is still being signed or submitted';
  };
  jazzAndBlockies: {
    message: 'Jazzicons and Blockies are two different styles of unique icons that help you identify an account at a glance.';
  };
  jazzicons: {
    message: 'Jazzicons';
  };
  jsDeliver: {
    message: 'jsDeliver';
  };
  jsonFile: {
    message: 'JSON File';
    description: 'format for importing an account';
  };
  keyringAccountName: {
    message: 'Account name';
  };
  keyringAccountPublicAddress: {
    message: 'Public Address';
  };
  keyringSnapRemovalResult1: {
    message: '$1 $2removed';
    description: 'Displays the result after removal of a keyring snap. $1 is the snap name, $2 is whether it is successful or not';
  };
  keyringSnapRemovalResultNotSuccessful: {
    message: 'not ';
    description: 'Displays the `not` word in $2.';
  };
  keyringSnapRemoveConfirmation: {
    message: 'Type $1 to confirm you want to remove this snap:';
    description: 'Asks user to input the name nap prior to deleting the snap. $1 is the snap name';
  };
  keystone: {
    message: 'Keystone';
  };
  knownAddressRecipient: {
    message: 'Known contract address.';
  };
  knownTokenWarning: {
    message: 'This action will edit tokens that are already listed in your wallet, which can be used to phish you. Only approve if you are certain that you mean to change what these tokens represent. Learn more about $1';
  };
  lastConnected: {
    message: 'Last connected';
  };
  lastPriceSold: {
    message: 'Last price sold';
  };
  lastSold: {
    message: 'Last sold';
  };
  lavaDomeCopyWarning: {
    message: 'For your safety, selecting this text is not available right now.';
  };
  layer1Fees: {
    message: 'Layer 1 fees';
  };
  layer2Fees: {
    message: 'Layer 2 fees';
  };
  learnCancelSpeeedup: {
    message: 'Learn how to $1';
    description: '$1 is link to cancel or speed up transactions';
  };
  learnMore: {
    message: 'learn more';
  };
  learnMoreAboutGas: {
    message: 'Want to $1 about gas?';
    description: '$1 will be replaced by the learnMore translation key';
  };
  learnMoreKeystone: {
    message: 'Learn More';
  };
  learnMoreUpperCase: {
    message: 'Learn more';
  };
  learnMoreUpperCaseWithDot: {
    message: 'Learn more.';
  };
  learnScamRisk: {
    message: 'scams and security risks.';
  };
  learnToBridge: {
    message: 'Learn to bridge';
  };
  leaveMetaMask: {
    message: 'Leave MetaMask?';
  };
  leaveMetaMaskDesc: {
    message: "You're about to visit a site outside of MetaMask. Double-check the URL before continuing.";
  };
  ledgerAccountRestriction: {
    message: 'You need to make use your last account before you can add a new one.';
  };
  ledgerConnectionInstructionCloseOtherApps: {
    message: 'Close any other software connected to your device and then click here to refresh.';
  };
  ledgerConnectionInstructionHeader: {
    message: 'Prior to clicking confirm:';
  };
  ledgerConnectionInstructionStepFour: {
    message: 'Enable "smart contract data" or "blind signing" on your Ledger device.';
  };
  ledgerConnectionInstructionStepThree: {
    message: 'Be sure your Ledger is plugged in and to select the Ethereum app.';
  };
  ledgerDeviceOpenFailureMessage: {
    message: 'The Ledger device failed to open. Your Ledger might be connected to other software. Please close Ledger Live or other applications connected to your Ledger device, and try to connect again.';
  };
  ledgerErrorConnectionIssue: {
    message: 'Reconnect your ledger, open the ETH app and try again.';
  };
  ledgerErrorDevicedLocked: {
    message: 'Your Ledger is locked. Unlock it then try again.';
  };
  ledgerErrorEthAppNotOpen: {
    message: 'To solve the issue, open the ETH application on your device and retry.';
  };
  ledgerErrorTransactionDataNotPadded: {
    message: "Ethereum transaction's input data isn't sufficiently padded.";
  };
  ledgerLiveApp: {
    message: 'Ledger Live App';
  };
  ledgerLocked: {
    message: 'Cannot connect to Ledger device. Please make sure your device is unlocked and Ethereum app is opened.';
  };
  ledgerTimeout: {
    message: 'Ledger Live is taking too long to respond or connection timeout. Make sure Ledger Live app is opened and your device is unlocked.';
  };
  ledgerWebHIDNotConnectedErrorMessage: {
    message: "The ledger device was not connected. If you wish to connect your Ledger, please click 'Continue' again and approve HID connection";
    description: 'An error message shown to the user during the hardware connect flow.';
  };
  levelArrow: {
    message: 'level arrow';
  };
  lightTheme: {
    message: 'Light';
  };
  likeToImportToken: {
    message: 'Would you like to import this token?';
  };
  likeToImportTokens: {
    message: 'Would you like to import these tokens?';
  };
  lineaGoerli: {
    message: 'Linea Goerli test network';
  };
  lineaMainnet: {
    message: 'Linea Mainnet';
  };
  lineaSepolia: {
    message: 'Linea Sepolia test network';
  };
  link: {
    message: 'Link';
  };
  links: {
    message: 'Links';
  };
  loadMore: {
    message: 'Load more';
  };
  loading: {
    message: 'Loading...';
  };
  loadingNFTs: {
    message: 'Loading NFTs...';
  };
  loadingScreenHardwareWalletMessage: {
    message: 'Please complete the transaction on the hardware wallet.';
  };
  loadingScreenSnapMessage: {
    message: 'Please complete the transaction on the Snap.';
  };
  loadingTokens: {
    message: 'Loading tokens...';
  };
  localhost: {
    message: 'Localhost 8545';
  };
  lock: {
    message: 'Lock';
  };
  lockMetaMask: {
    message: 'Lock MetaMask';
  };
  lockTimeInvalid: {
    message: 'Lock time must be a number between 0 and 10080';
  };
  logo: {
    message: '$1 logo';
    description: '$1 is the name of the ticker';
  };
  low: {
    message: 'Low';
  };
  lowGasSettingToolTipMessage: {
    message: 'Use $1 to wait for a cheaper price. Time estimates are much less accurate as prices are somewhat unpredictable.';
    description: "$1 is key 'low' separated here so that it can be passed in with bold font-weight";
  };
  lowLowercase: {
    message: 'low';
  };
  lowPriorityMessage: {
    message: 'Future transactions will queue after this one.';
  };
  mainnet: {
    message: 'Ethereum Mainnet';
  };
  mainnetToken: {
    message: 'This address matches a known Ethereum Mainnet token address. Recheck the contract address and network for the token you are trying to add.';
  };
  makeAnotherSwap: {
    message: 'Create a new swap';
  };
  makeSureNoOneWatching: {
    message: 'Make sure nobody is looking';
    description: 'Warning to users to be care while creating and saving their new Secret Recovery Phrase';
  };
  max: {
    message: 'Max';
  };
  maxBaseFee: {
    message: 'Max base fee';
  };
  maxFee: {
    message: 'Max fee';
  };
  maxPriorityFee: {
    message: 'Max priority fee';
  };
  medium: {
    message: 'Market';
  };
  mediumGasSettingToolTipMessage: {
    message: 'Use $1 for fast processing at current market price.';
    description: "$1 is key 'medium' (text: 'Market') separated here so that it can be passed in with bold font-weight";
  };
  memo: {
    message: 'memo';
  };
  message: {
    message: 'Message';
  };
  metaMaskConnectStatusParagraphOne: {
    message: 'You now have more control over your account connections in MetaMask.';
  };
  metaMaskConnectStatusParagraphThree: {
    message: 'Click it to manage your connected accounts.';
  };
  metaMaskConnectStatusParagraphTwo: {
    message: 'The connection status button shows if the website you’re visiting is connected to your currently selected account.';
  };
  metadataModalSourceTooltip: {
    message: '$1 is hosted on npm and $2 is this Snap’s unique identifier.';
    description: '$1 is the snap name and $2 is the snap NPM id.';
  };
  metamaskInstitutionalVersion: {
    message: 'MetaMask Institutional Version';
  };
  metamaskPortfolio: {
    message: 'MetaMask Portfolio.';
  };
  metamaskSwapsOfflineDescription: {
    message: 'MetaMask Swaps is undergoing maintenance. Please check back later.';
  };
  metamaskVersion: {
    message: 'MetaMask Version';
  };
  methodNotSupported: {
    message: 'Not supported with this account.';
  };
  metrics: {
    message: 'Metrics';
  };
  mismatchAccount: {
    message: 'Your selected account ($1) is different than the account trying to sign ($2)';
  };
  mismatchedChainLinkText: {
    message: 'verify the network details';
    description: "Serves as link text for the 'mismatchedChain' key. This text will be embedded inside the translation for that key.";
  };
  mismatchedChainRecommendation: {
    message: 'We recommend that you $1 before proceeding.';
    description: "$1 is a clickable link with text defined by the 'mismatchedChainLinkText' key. The link will open to instructions for users to validate custom network details.";
  };
  mismatchedNetworkName: {
    message: 'According to our record the network name may not correctly match this chain ID.';
  };
  mismatchedNetworkSymbol: {
    message: 'The submitted currency symbol does not match what we expect for this chain ID.';
  };
  mismatchedRpcChainId: {
    message: 'Chain ID returned by the custom network does not match the submitted chain ID.';
  };
  mismatchedRpcUrl: {
    message: 'According to our records the submitted RPC URL value does not match a known provider for this chain ID.';
  };
  missingSetting: {
    message: "Can't find a setting?";
  };
  missingSettingRequest: {
    message: 'Request here';
  };
  mmiBuiltAroundTheWorld: {
    message: 'MetaMask Institutional is designed and built around the world.';
  };
  mmiNewNFTDetectedInNFTsTabMessage: {
    message: 'Let MetaMask Institutional automatically detect and display NFTs in your wallet.';
  };
  mmiPasswordSetupDetails: {
    message: 'This password will unlock your MetaMask Institutional extension only.';
  };
  more: {
    message: 'more';
  };
  multipleSnapConnectionWarning: {
    message: '$1 wants to use $2 Snaps';
    description: '$1 is the dapp and $2 is the number of snaps it wants to connect to.';
  };
  mustSelectOne: {
    message: 'Must select at least 1 token.';
  };
  name: {
    message: 'Name';
  };
  nameAddressLabel: {
    message: 'Address';
    description: 'Label above address field in name component modal.';
  };
  nameInstructionsNew: {
    message: 'If you know this address, give it a nickname to recognize it in the future.';
    description: 'Instruction text in name component modal when value is not recognised.';
  };
  nameInstructionsRecognized: {
    message: 'This address has a default nickname, but you can edit it or explore other suggestions.';
    description: 'Instruction text in name component modal when value is recognized but not saved.';
  };
  nameInstructionsSaved: {
    message: "You've added a nickname for this address before. You can edit or view other suggested nicknames.";
    description: 'Instruction text in name component modal when value is saved.';
  };
  nameLabel: {
    message: 'Nickname';
    description: 'Label above name input field in name component modal.';
  };
  nameModalMaybeProposedName: {
    message: 'Maybe: $1';
    description: '$1 is the proposed name';
  };
  nameModalTitleNew: {
    message: 'Unknown address';
    description: 'Title of the modal created by the name component when value is not recognised.';
  };
  nameModalTitleRecognized: {
    message: 'Recognized address';
    description: 'Title of the modal created by the name component when value is recognized but not saved.';
  };
  nameModalTitleSaved: {
    message: 'Saved address';
    description: 'Title of the modal created by the name component when value is saved.';
  };
  nameProviderProposedBy: {
    message: 'Proposed by $1';
    description: '$1 is the name of the provider';
  };
  nameProvider_ens: {
    message: 'Ethereum Name Service (ENS)';
  };
  nameProvider_etherscan: {
    message: 'Etherscan';
  };
  nameProvider_lens: {
    message: 'Lens Protocol';
  };
  nameProvider_token: {
    message: 'MetaMask';
  };
  nameSetPlaceholder: {
    message: 'Choose a nickname...';
    description: 'Placeholder text for name input field in name component modal.';
  };
  nativePermissionRequestDescription: {
    message: 'Do you want this site to do the following?';
    description: 'Description below header used on Permission Connect screen for native permissions.';
  };
  nativeToken: {
    message: 'The native token on this network is $1. It is the token used for gas fees. ';
    description: '$1 represents the name of the native token on the current network';
  };
  nativeTokenScamWarningConversion: {
    message: 'Edit network details';
  };
  nativeTokenScamWarningDescription: {
    message: "This network doesn't match its associated chain ID or name. Many popular tokens use the name $1, making it a target for scams. Scammers may trick you into sending them more valuable currency in return. Verify everything before you continue.";
    description: '$1 represents the currency name';
  };
  nativeTokenScamWarningTitle: {
    message: 'This is a potential scam';
  };
  needHelp: {
    message: 'Need help? Contact $1';
    description: '$1 represents `needHelpLinkText`, the text which goes in the help link';
  };
  needHelpFeedback: {
    message: 'Share your feedback';
  };
  needHelpLinkText: {
    message: 'MetaMask support';
  };
  needHelpSubmitTicket: {
    message: 'Submit a ticket';
  };
  needImportFile: {
    message: 'You must select a file to import.';
    description: 'User is important an account and needs to add a file to continue';
  };
  negativeETH: {
    message: 'Can not send negative amounts of ETH.';
  };
  negativeOrZeroAmountToken: {
    message: 'Cannot send negative or zero amounts of Tokens';
  };
  network: {
    message: 'Network:';
  };
  networkAddedSuccessfully: {
    message: 'Network added successfully!';
  };
  networkDetails: {
    message: 'Network details';
  };
  networkIsBusy: {
    message: 'Network is busy. Gas prices are high and estimates are less accurate.';
  };
  networkMenu: {
    message: 'Network Menu';
  };
  networkMenuHeading: {
    message: 'Select a network';
  };
  networkName: {
    message: 'Network name';
  };
  networkNameArbitrum: {
    message: 'Arbitrum';
  };
  networkNameAvalanche: {
    message: 'Avalanche';
  };
  networkNameBSC: {
    message: 'BSC';
  };
  networkNameBase: {
    message: 'Base';
  };
  networkNameDefinition: {
    message: 'The name associated with this network.';
  };
  networkNameEthereum: {
    message: 'Ethereum';
  };
  networkNameGoerli: {
    message: 'Goerli';
  };
  networkNameLinea: {
    message: 'Linea';
  };
  networkNameOpMainnet: {
    message: 'OP Mainnet';
  };
  networkNamePolygon: {
    message: 'Polygon';
  };
  networkNameTestnet: {
    message: 'Testnet';
  };
  networkNameZkSyncEra: {
    message: 'zkSync Era';
  };
  networkProvider: {
    message: 'Network provider';
  };
  networkSettingsChainIdDescription: {
    message: "The chain ID is used for signing transactions. It must match the chain ID returned by the network. You can enter a decimal or '0x'-prefixed hexadecimal number, but we will display the number in decimal.";
  };
  networkStatus: {
    message: 'Network status';
  };
  networkStatusBaseFeeTooltip: {
    message: 'The base fee is set by the network and changes every 13-14 seconds. Our $1 and $2 options account for sudden increases.';
    description: '$1 and $2 are bold text for Medium and Aggressive respectively.';
  };
  networkStatusPriorityFeeTooltip: {
    message: 'Range of priority fees (aka “miner tip”). This goes to miners and incentivizes them to prioritize your transaction.';
  };
  networkStatusStabilityFeeTooltip: {
    message: 'Gas fees are $1 relative to the past 72 hours.';
    description: '$1 is networks stability value - stable, low, high';
  };
  networkSwitchConnectionError: {
    message: "We can't connect to $1";
    description: '$1 represents the network name';
  };
  networkURL: {
    message: 'Network URL';
  };
  networkURLDefinition: {
    message: 'The URL used to access this network.';
  };
  networks: {
    message: 'Networks';
  };
  nevermind: {
    message: 'Nevermind';
  };
  new: {
    message: 'New!';
  };
  newAccount: {
    message: 'New account';
  };
  newAccountNumberName: {
    message: 'Account $1';
    description: 'Default name of next account to be created on create account screen';
  };
  newContact: {
    message: 'New contact';
  };
  newContract: {
    message: 'New contract';
  };
  newNFTDetectedInImportNFTsMessageStrongText: {
    message: 'Settings > Security and privacy';
  };
  newNFTDetectedInImportNFTsMsg: {
    message: "To use Opensea to see your NFTs, turn on 'Display NFT Media' in $1.";
    description: '$1 is used for newNFTDetectedInImportNFTsMessageStrongText';
  };
  newNFTDetectedInNFTsTabMessage: {
    message: 'Let MetaMask automatically detect and display NFTs in your wallet.';
  };
  newNFTsAutodetected: {
    message: 'NFT autodetection';
  };
  newNetworkAdded: {
    message: '“$1” was successfully added!';
  };
  newNftAddedMessage: {
    message: 'NFT was successfully added!';
  };
  newPassword: {
    message: 'New password (8 characters min)';
  };
  newTokensImportedMessage: {
    message: 'You’ve successfully imported $1.';
    description: '$1 is the string of symbols of all the tokens imported';
  };
  newTokensImportedTitle: {
    message: 'Token imported';
  };
  next: {
    message: 'Next';
  };
  nextNonceWarning: {
    message: 'Nonce is higher than suggested nonce of $1';
    description: "The next nonce according to MetaMask's internal logic";
  };
  nftAddFailedMessage: {
    message: 'NFT can’t be added as the ownership details do not match. Make sure you have entered correct information.';
  };
  nftAddressError: {
    message: 'This token is an NFT. Add on the $1';
    description: "$1 is a clickable link with text defined by the 'importNFTPage' key";
  };
  nftAlreadyAdded: {
    message: 'NFT has already been added.';
  };
  nftDisclaimer: {
    message: 'Disclaimer: MetaMask pulls the media file from the source url. This url sometimes gets changed by the marketplace on which the NFT was minted.';
  };
  nftOptions: {
    message: 'NFT Options';
  };
  nftTokenIdPlaceholder: {
    message: 'Enter the token id';
  };
  nftWarningContent: {
    message: "You're granting access to $1, including any you might own in the future. The party on the other end can transfer these NFTs from your wallet at any time without asking you until you revoke this approval. $2";
    description: '$1 is nftWarningContentBold bold part, $2 is Learn more link';
  };
  nftWarningContentBold: {
    message: 'all your $1 NFTs';
    description: '$1 is name of the collection';
  };
  nftWarningContentGrey: {
    message: 'Proceed with caution.';
  };
  nfts: {
    message: 'NFTs';
  };
  nftsPreviouslyOwned: {
    message: 'Previously Owned';
  };
  nickname: {
    message: 'Nickname';
  };
  noAccountsFound: {
    message: 'No accounts found for the given search query';
  };
  noAddressForName: {
    message: 'No address has been set for this name.';
  };
  noConnectedAccountDescription: {
    message: 'Select an account you want to use on this site to continue.';
  };
  noConnectedAccountTitle: {
    message: 'MetaMask isn’t connected to this site';
  };
  noConversionDateAvailable: {
    message: 'No currency conversion date available';
  };
  noConversionRateAvailable: {
    message: 'No conversion rate available';
  };
  noDomainResolution: {
    message: 'No resolution for domain provided.';
  };
  noNFTs: {
    message: 'No NFTs yet';
  };
  noNetworksFound: {
    message: 'No networks found for the given search query';
  };
  noSnaps: {
    message: "You don't have any snaps installed.";
  };
  noTransactions: {
    message: 'You have no transactions';
  };
  noWebcamFound: {
    message: "Your computer's webcam was not found. Please try again.";
  };
  noWebcamFoundTitle: {
    message: 'Webcam not found';
  };
  nonCustodialAccounts: {
    message: 'MetaMask Institutional allows you to use non-custodial accounts, if you plan to use these accounts backup the Secret Recovery Phrase.';
  };
  nonce: {
    message: 'Nonce';
  };
  nonceField: {
    message: 'Customize transaction nonce';
  };
  nonceFieldDescription: {
    message: 'Turn this on to change the nonce (transaction number) on confirmation screens. This is an advanced feature, use cautiously.';
  };
  nonceFieldHeading: {
    message: 'Custom nonce';
  };
  notBusy: {
    message: 'Not busy';
  };
  notCurrentAccount: {
    message: "Is this the correct account? It's different from the currently selected account in your wallet";
  };
  notEnoughBalance: {
    message: 'Insufficient balance';
  };
  notEnoughGas: {
    message: 'Not enough gas';
  };
  notRightNow: {
    message: 'Not right now';
  };
  note: {
    message: 'Note';
  };
  notePlaceholder: {
    message: 'The approver will see this note when approving the transaction at the custodian.';
  };
  notificationTransactionFailedMessage: {
    message: 'Transaction $1 failed! $2';
    description: 'Content of the browser notification that appears when a transaction fails';
  };
  notificationTransactionFailedMessageMMI: {
    message: 'Transaction failed! $1';
    description: 'Content of the browser notification that appears when a transaction fails in MMI';
  };
  notificationTransactionFailedTitle: {
    message: 'Failed transaction';
    description: 'Title of the browser notification that appears when a transaction fails';
  };
  notificationTransactionSuccessMessage: {
    message: 'Transaction $1 confirmed!';
    description: 'Content of the browser notification that appears when a transaction is confirmed';
  };
  notificationTransactionSuccessTitle: {
    message: 'Confirmed transaction';
    description: 'Title of the browser notification that appears when a transaction is confirmed';
  };
  notificationTransactionSuccessView: {
    message: 'View on $1';
    description: 'Additional content in browser notification that appears when a transaction is confirmed and has a block explorer URL';
  };
  notifications: {
    message: 'Notifications';
  };
  notifications20ActionText: {
    message: 'Learn more';
    description: "The 'call to action' on the button, or link, of the 'Stay secure' notification. Upon clicking, users will be taken to a ledger page to resolve the U2F connection issue.";
  };
  notifications20Description: {
    message: "If you're on the latest version of Firefox, you might be experiencing an issue related to Firefox dropping U2F support.";
    description: "Description of a notification in the 'See What's New' popup. Describes the U2F support being dropped by firefox and that it affects ledger users.";
  };
  notifications20Title: {
    message: 'Ledger and Firefox Users Experiencing Connection Issues';
    description: "Title for a notification in the 'See What's New' popup. Tells users that latest firefox users using U2F may experience connection issues.";
  };
  notifications24ActionText: {
    message: 'Got it';
  };
  notifications24Description: {
    message: "Advanced gas fee settings are now remembered based on the network you're using. This means you can set specific advanced gas fees for each network and avoid overpaying for gas or stuck transactions.";
  };
  notifications24Title: {
    message: 'Advanced gas fees by network';
  };
  notifications8ActionText: {
    message: 'Go to Settings > Advanced';
    description: "Description on an action button that appears in the What's New popup. Tells the user that if they click it, they will go to our Advanced settings page.";
  };
  notifications8DescriptionOne: {
    message: 'As of MetaMask v10.4.0, you no longer need Ledger Live to connect your Ledger device to MetaMask.';
    description: "Description of a notification in the 'See What's New' popup. Describes changes for how Ledger Live is no longer needed to connect the device.";
  };
  notifications8DescriptionTwo: {
    message: "For an easier and more stable ledger experience, go to Settings > Advanced and switch the 'Preferred Ledger Connection Type' to 'WebHID'.";
    description: "Description of a notification in the 'See What's New' popup. Describes how the user can turn off the Ledger Live setting.";
  };
  notifications8Title: {
    message: 'Ledger connection improvement';
    description: "Title for a notification in the 'See What's New' popup. Notifies ledger users that there is an improvement in how they can connect their device.";
  };
  notificationsBlockaidDefaultDescriptionActionText: {
    message: 'Got it';
  };
  notificationsBlockaidDefaultDescriptionOne: {
    message: 'Steer clear of known scams while still preserving your privacy with security alerts powered by Blockaid. This feature is available on Arbitrum, Avalanche, BNB chain, Ethereum Mainnet, Linea, Optimism, Polygon, Base and Sepolia.';
  };
  notificationsBlockaidDefaultDescriptionTwo: {
    message: 'Always do your own due diligence before approving requests.';
  };
  notificationsBlockaidDefaultTitle: {
    message: 'Stay safe with security alerts';
  };
  notificationsDropLedgerFirefoxDescription: {
    message: "Firefox no longer supports U2F, so Ledger won't work with MetaMask on Firefox. Try MetaMask on Google Chrome instead.";
    description: "Description of a notification in the 'See What's New' popup. Describes that ledger will not longer be supported for firefox users and they should use MetaMask on chrome for ledger support instead.";
  };
  notificationsDropLedgerFirefoxTitle: {
    message: 'Dropping Ledger Support for Firefox';
    description: "Title for a notification in the 'See What's New' popup. Tells firefox users that ledger support is being dropped.";
  };
  notificationsEmptyText: {
    message: 'This is where you can find notifications from your installed snaps.';
  };
  notificationsFeatureToggle: {
    message: 'Enable Wallet Notifications';
    description: 'Experimental feature title';
  };
  notificationsFeatureToggleDescription: {
    message: 'This enables wallet notifications like send/receive funds or nfts and feature announcements.';
    description: 'Description of the experimental notifications feature';
  };
  notificationsHeader: {
    message: 'Notifications';
  };
  notificationsInfos: {
    message: '$1 from $2';
    description: '$1 is the date at which the notification has been dispatched and $2 is the link to the snap that dispatched the notification.';
  };
  notificationsMarkAllAsRead: {
    message: 'Mark all as read';
  };
  notificationsPetnamesActionText: {
    message: 'Got it';
  };
  notificationsPetnamesDescriptionOne: {
    message: 'When you click on an address during a transaction, you can see suggested nicknames from third-party sources such as ENS, Lens, and Etherscan.';
  };
  notificationsPetnamesDescriptionTwo: {
    message: 'This will make it easier for you to recognize addresses in the future, so be sure to give a nickname to addresses you trust.';
  };
  notificationsPetnamesTitle: {
    message: 'Suggested nicknames are here!';
  };
  notificationsPortfolioV2ActionText: {
    message: 'See Portfolio';
  };
  notificationsPortfolioV2DescriptionOne: {
    message: 'Still missing out on MetaMask Portfolio?';
  };
  notificationsPortfolioV2DescriptionThree: {
    message: 'Your Portfolio is waiting.';
  };
  notificationsPortfolioV2DescriptionTwo: {
    message: 'Manage your web3 assets across different networks and accounts in one powerful dashboard. Swap, Buy, Sell, Bridge, and Stake in a secure, convenient, and easy to use dapp. Stay up to speed with the pulse of the cryptoverse, see your DeFi positions, manage your NFT collection, and more. All in one place.';
  };
  notificationsPortfolioV2Title: {
    message: 'MetaMask Portfolio - join millions';
  };
  notificationsSimulationsDescriptionOne: {
    message: 'Now you can see the potential outcome of your transactions before you make them!';
  };
  notificationsSimulationsDescriptionTwo: {
    message: 'This is just a simulation, so we can’t guarantee the final outcome. You can turn this off anytime in \nSettings > Security & Privacy. ';
  };
  notificationsStakingPortfolioActionText: {
    message: 'Got it';
    description: "Action text for a notification in the 'See What's New' popup. Tells users that staking is now available in the portfolio app.";
  };
  notificationsStakingPortfolioDescription: {
    message: 'Now you can stake ETH and manage your rewards all in one place.';
    description: "Description for a notification in the 'See What's New' popup. Tells users that staking is now available in the portfolio app.";
  };
  notificationsStakingPortfolioTitle: {
    message: 'Stake smarter in Portfolio';
    description: "Title for a notification in the 'See What's New' popup. Tells users that staking is now available in the portfolio app.";
  };
  notificationsU2FLedgerLiveDescription: {
    message: 'U2F and Ledger Live are no longer available on Chrome. You can still connect Ledger devices on Chrome using Webhid.';
    description: "Description of a notification in the 'See What's New' popup. Describes the U2F and Ledger Live connection modes are now deprecated";
  };
  notificationsU2FLedgerLiveTitle: {
    message: 'U2F and Ledger Live deprecation';
    description: "Title for a notification in the 'See What's New' popup. Tells ledger and chrome users that U2F and Ledger Live options are now deprecated.";
  };
  numberOfNewTokensDetectedPlural: {
    message: '$1 new tokens found in this account';
    description: '$1 is the number of new tokens detected';
  };
  numberOfNewTokensDetectedSingular: {
    message: '1 new token found in this account';
  };
  ofTextNofM: {
    message: 'of';
  };
  off: {
    message: 'Off';
  };
  offlineForMaintenance: {
    message: 'Offline for maintenance';
  };
  ok: {
    message: 'Ok';
  };
  on: {
    message: 'On';
  };
  onboarding: {
    message: 'Onboarding';
  };
  onboardingAdvancedPrivacyIPFSDescription: {
    message: 'The IPFS gateway makes it possible to access and view data hosted by third parties. You can add a custom IPFS gateway or continue using the default.';
  };
  onboardingAdvancedPrivacyIPFSInvalid: {
    message: 'Please enter a valid URL';
  };
  onboardingAdvancedPrivacyIPFSTitle: {
    message: 'Add custom IPFS Gateway';
  };
  onboardingAdvancedPrivacyIPFSValid: {
    message: 'IPFS gateway URL is valid';
  };
  onboardingAdvancedPrivacyNetworkButton: {
    message: 'Add custom network';
  };
  onboardingAdvancedPrivacyNetworkDescription: {
    message: 'We use Infura as our remote procedure call (RPC) provider to offer the most reliable and private access to Ethereum data we can. You can choose your own RPC, but remember that any RPC will receive your IP address and Ethereum wallet to make transactions. Read our $1 to learn more about how Infura handles data.';
  };
  onboardingAdvancedPrivacyNetworkTitle: {
    message: 'Choose your network';
  };
  onboardingCreateWallet: {
    message: 'Create a new wallet';
  };
  onboardingImportWallet: {
    message: 'Import an existing wallet';
  };
  onboardingMetametricsAgree: {
    message: 'I agree';
  };
  onboardingMetametricsAllowOptOut: {
    message: 'Always allow you to opt-out via Settings';
  };
  onboardingMetametricsDataTerms: {
    message: 'This data is aggregated and is therefore anonymous for the purposes of General Data Protection Regulation (EU) 2016/679.';
  };
  onboardingMetametricsDescription: {
    message: 'MetaMask would like to gather usage data to better understand how our users interact with MetaMask. This data will be used to provide the service, which includes improving the service based on your use.';
  };
  onboardingMetametricsDescription2: {
    message: 'MetaMask will...';
  };
  onboardingMetametricsDisagree: {
    message: 'No thanks';
  };
  onboardingMetametricsInfuraTerms: {
    message: '* When you use Infura as your default RPC provider in MetaMask, Infura will collect your IP address and your Ethereum wallet address when you send a transaction. We don’t store this information in a way that allows our systems to associate those two pieces of data. For more information on how MetaMask and Infura interact from a data collection perspective, see our update $1. For more information on our privacy practices in general, see our $2.';
    description: '$1 represents `onboardingMetametricsInfuraTermsPolicyLink`, $2 represents `onboardingMetametricsInfuraTermsPolicy`';
  };
  onboardingMetametricsInfuraTermsPolicy: {
    message: 'Privacy Policy here';
  };
  onboardingMetametricsInfuraTermsPolicyLink: {
    message: 'here';
  };
  onboardingMetametricsModalTitle: {
    message: 'Add custom network';
  };
  onboardingMetametricsNeverCollect: {
    message: '$1 collect information we don’t need to provide the service (such as keys, addresses, transaction hashes, or balances)';
    description: '$1 represents `onboardingMetametricsNeverEmphasis`';
  };
  onboardingMetametricsNeverCollectIP: {
    message: '$1 collect your full IP address*';
    description: '$1 represents `onboardingMetametricsNeverEmphasis`';
  };
  onboardingMetametricsNeverEmphasis: {
    message: 'Never';
  };
  onboardingMetametricsNeverSellData: {
    message: '$1 sell data.  Ever!';
    description: '$1 represents `onboardingMetametricsNeverEmphasis`';
  };
  onboardingMetametricsSendAnonymize: {
    message: 'Send anonymized click and pageview events';
  };
  onboardingMetametricsTitle: {
    message: 'Help us improve MetaMask';
  };
  onboardingPinExtensionBillboardAccess: {
    message: 'Full access';
  };
  onboardingPinExtensionBillboardDescription: {
    message: 'These extensions can see and change information';
  };
  onboardingPinExtensionBillboardDescription2: {
    message: 'on this site.';
  };
  onboardingPinExtensionBillboardTitle: {
    message: 'Extensions';
  };
  onboardingPinExtensionChrome: {
    message: 'Click the browser extension icon';
  };
  onboardingPinExtensionDescription: {
    message: "Pin MetaMask on your browser so it's accessible and easy to view transaction confirmations.";
  };
  onboardingPinExtensionDescription2: {
    message: 'You can open MetaMask by clicking on the extension and access your wallet with 1 click.';
  };
  onboardingPinExtensionDescription3: {
    message: 'Click browser extension icon to access it instantly';
  };
  onboardingPinExtensionLabel: {
    message: 'Pin MetaMask';
  };
  onboardingPinExtensionStep1: {
    message: '1';
  };
  onboardingPinExtensionStep2: {
    message: '2';
  };
  onboardingPinExtensionTitle: {
    message: 'Your MetaMask install is complete!';
  };
  onboardingPinMmiExtensionLabel: {
    message: 'Pin MetaMask Institutional';
  };
  onboardingUsePhishingDetectionDescription: {
    message: 'Phishing detection alerts rely on communication with $1. jsDeliver will have access to your IP address. View $2.';
    description: "The $1 is the word 'jsDeliver', from key 'jsDeliver' and $2 is the words Privacy Policy from key 'privacyMsg', both separated here so that it can be wrapped as a link";
  };
  onlyAddTrustedNetworks: {
    message: 'A malicious network provider can lie about the state of the blockchain and record your network activity. Only add custom networks you trust.';
  };
  onlyConnectTrust: {
    message: 'Only connect with sites you trust. $1';
    description: 'Text displayed above the buttons for connection confirmation. $1 is the link to the learn more web page.';
  };
  openCustodianApp: {
    message: 'Open $1 app';
    description: 'The $1 is the name of the Custodian that will be open';
  };
  openFullScreenForLedgerWebHid: {
    message: 'Go to full screen to connect your Ledger.';
    description: 'Shown to the user on the confirm screen when they are viewing MetaMask in a popup window but need to connect their ledger via webhid.';
  };
  openInBlockExplorer: {
    message: 'Open in block explorer';
  };
  openSeaNew: {
    message: 'OpenSea';
  };
  openSeaToBlockaidBtnLabel: {
    message: 'Explore Snaps';
  };
  openSeaToBlockaidDescription: {
    message: 'Security alerts are no longer available on this network. Installing a Snap may improve your security.';
  };
  openSeaToBlockaidTitle: {
    message: 'Heads up!';
  };
  operationFailed: {
    message: 'Operation Failed';
  };
  optional: {
    message: 'Optional';
  };
  optionalWithParanthesis: {
    message: '(Optional)';
  };
  options: {
    message: 'Options';
  };
  or: {
    message: 'or';
  };
  origin: {
    message: 'Origin';
  };
  osTheme: {
    message: 'System';
  };
  otherSnaps: {
    message: 'other snaps';
    description: "Used in the 'permission_rpc' message.";
  };
  outdatedBrowserNotification: {
    message: "Your browser is out of date. If you don't update your browser, you won't be able to get security patches and new features from MetaMask.";
  };
  padlock: {
    message: 'Padlock';
  };
  parameters: {
    message: 'Parameters';
  };
  participateInMetaMetrics: {
    message: 'Participate in MetaMetrics';
  };
  participateInMetaMetricsDescription: {
    message: 'Participate in MetaMetrics to help us make MetaMask better';
  };
  password: {
    message: 'Password';
  };
  passwordMmiTermsWarning: {
    message: 'I understand that MetaMask Institutional cannot recover this password for me. $1';
  };
  passwordNotLongEnough: {
    message: 'Password not long enough';
  };
  passwordSetupDetails: {
    message: 'This password will unlock your MetaMask wallet only on this device. MetaMask can not recover this password.';
  };
  passwordStrength: {
    message: 'Password strength: $1';
    description: 'Return password strength to the user when user wants to create password.';
  };
  passwordStrengthDescription: {
    message: 'A strong password can improve the security of your wallet should your device be stolen or compromised.';
  };
  passwordTermsWarning: {
    message: 'I understand that MetaMask cannot recover this password for me. $1';
  };
  passwordsDontMatch: {
    message: "Passwords don't match";
  };
  pasteJWTToken: {
    message: 'Paste or drop your token here:';
  };
  pastePrivateKey: {
    message: 'Enter your private key string here:';
    description: 'For importing an account from a private key';
  };
  paymasterInUse: {
    message: 'The gas for this transaction will be paid by a paymaster.';
    description: 'Alert shown in transaction confirmation if paymaster in use.';
  };
  pending: {
    message: 'Pending';
  };
  pendingTransactionInfo: {
    message: 'This transaction will not process until that one is complete.';
  };
  pendingTransactionMultiple: {
    message: 'You have ($1) pending transactions.';
  };
  pendingTransactionSingle: {
    message: 'You have (1) pending transaction.';
    description: '$1 is count of pending transactions';
  };
  permissionDetails: {
    message: 'Permission details';
  };
  permissionRequest: {
    message: 'Permission request';
  };
  permissionRequested: {
    message: 'Requested now';
  };
  permissionRequestedForAccounts: {
    message: 'Requested now for $1';
    description: 'Permission cell status for requested permission including accounts, rendered as AvatarGroup which is $1.';
  };
  permissionRevoked: {
    message: 'Revoked in this update';
  };
  permissionRevokedForAccounts: {
    message: 'Revoked in this update for $1';
    description: 'Permission cell status for revoked permission including accounts, rendered as AvatarGroup which is $1.';
  };
  permission_accessNamedSnap: {
    message: 'Connect to $1.';
    description: 'The description for the `wallet_snap` permission. $1 is the human-readable name of the snap.';
  };
  permission_accessNetwork: {
    message: 'Access the internet.';
    description: 'The description of the `endowment:network-access` permission.';
  };
  permission_accessNetworkDescription: {
    message: 'Allow $1 to access the internet. This can be used to both send and receive data with third-party servers.';
    description: 'An extended description of the `endowment:network-access` permission. $1 is the snap name.';
  };
  permission_accessSnap: {
    message: 'Connect to the $1 snap.';
    description: 'The description for the `wallet_snap` permission. $1 is the name of the snap.';
  };
  permission_accessSnapDescription: {
    message: 'Allow the website or snap to interact with $1.';
    description: 'The description for the `wallet_snap_*` permission. $1 is the name of the Snap.';
  };
  permission_cronjob: {
    message: 'Schedule and execute periodic actions.';
    description: 'The description for the `snap_cronjob` permission';
  };
  permission_cronjobDescription: {
    message: 'Allow $1 to perform actions that run periodically at fixed times, dates, or intervals. This can be used to trigger time-sensitive interactions or notifications.';
    description: 'An extended description for the `snap_cronjob` permission. $1 is the snap name.';
  };
  permission_dialog: {
    message: 'Display dialog windows in MetaMask.';
    description: 'The description for the `snap_dialog` permission';
  };
  permission_dialogDescription: {
    message: 'Allow $1 to display MetaMask popups with custom text, input field, and buttons to approve or reject an action.\nCan be used to create e.g. alerts, confirmations, and opt-in flows for a snap.';
    description: 'An extended description for the `snap_dialog` permission. $1 is the snap name.';
  };
  permission_ethereumAccounts: {
    message: 'See address, account balance, activity and suggest transactions to approve';
    description: 'The description for the `eth_accounts` permission';
  };
  permission_ethereumProvider: {
    message: 'Access the Ethereum provider.';
    description: 'The description for the `endowment:ethereum-provider` permission';
  };
  permission_ethereumProviderDescription: {
    message: 'Allow $1 to communicate with MetaMask directly, in order for it to read data from the blockchain and suggest messages and transactions.';
    description: 'An extended description for the `endowment:ethereum-provider` permission. $1 is the snap name.';
  };
  permission_getEntropy: {
    message: 'Derive arbitrary keys unique to $1.';
    description: 'The description for the `snap_getEntropy` permission. $1 is the snap name.';
  };
  permission_getEntropyDescription: {
    message: 'Allow $1 to derive arbitrary keys unique to $1, without exposing them. These keys are separate from your MetaMask account(s) and not related to your private keys or Secret Recovery Phrase. Other snaps cannot access this information.';
    description: 'An extended description for the `snap_getEntropy` permission. $1 is the snap name.';
  };
  permission_getLocale: {
    message: 'View your preferred language.';
    description: 'The description for the `snap_getLocale` permission';
  };
  permission_getLocaleDescription: {
    message: "Let $1 access your preferred language from your MetaMask settings. This can be used to localize and display $1's content using your language.";
    description: 'An extended description for the `snap_getLocale` permission. $1 is the snap name.';
  };
  permission_homePage: {
    message: 'Display a custom screen';
    description: 'The description for the `endowment:page-home` permission';
  };
  permission_homePageDescription: {
    message: 'Let $1 display a custom home screen in MetaMask. This can be used for user interfaces, configuration, and dashboards.';
    description: 'An extended description for the `endowment:page-home` permission. $1 is the snap name.';
  };
  permission_keyring: {
    message: 'Allow requests for adding and controlling Ethereum accounts';
    description: 'The description for the `endowment:keyring` permission';
  };
  permission_keyringDescription: {
    message: 'Let $1 receive requests to add or remove accounts, plus sign and transact on behalf of these accounts.';
    description: 'An extended description for the `endowment:keyring` permission. $1 is the snap name.';
  };
  permission_lifecycleHooks: {
    message: 'Use lifecycle hooks.';
    description: 'The description for the `endowment:lifecycle-hooks` permission';
  };
  permission_lifecycleHooksDescription: {
    message: 'Allow $1 to use lifecycle hooks to run code at specific times during its lifecycle.';
    description: 'An extended description for the `endowment:lifecycle-hooks` permission. $1 is the snap name.';
  };
  permission_manageAccounts: {
    message: 'Add and control Ethereum accounts';
    description: 'The description for `snap_manageAccounts` permission';
  };
  permission_manageAccountsDescription: {
    message: 'Allow $1 to add or remove Ethereum accounts, then transact and sign with these accounts.';
    description: 'An extended description for the `snap_manageAccounts` permission. $1 is the snap name.';
  };
  permission_manageBip32Keys: {
    message: 'Manage $1 accounts.';
    description: "The description for the `snap_getBip32Entropy` permission. $1 is a derivation path, e.g. 'm/44'/0'/0' (secp256k1)'.";
  };
  permission_manageBip44AndBip32KeysDescription: {
    message: 'Allow $1 to manage accounts and assets on the requested network. These accounts are derived and backed up using your secret recovery phrase (without revealing it). With the power to derive keys, $1 can support a variety of blockchain protocols beyond Ethereum (EVMs).';
    description: 'An extended description for the `snap_getBip44Entropy` and `snap_getBip44Entropy` permissions. $1 is the snap name.';
  };
  permission_manageBip44Keys: {
    message: 'Manage $1 accounts.';
    description: "The description for the `snap_getBip44Entropy` permission. $1 is the name of a protocol, e.g. 'Filecoin'.";
  };
  permission_manageState: {
    message: 'Store and manage its data on your device.';
    description: 'The description for the `snap_manageState` permission';
  };
  permission_manageStateDescription: {
    message: 'Allow $1 to store, update, and retrieve data securely with encryption. Other snaps cannot access this information.';
    description: 'An extended description for the `snap_manageState` permission. $1 is the snap name.';
  };
  permission_nameLookup: {
    message: 'Provide domain and address lookups.';
    description: 'The description for the `endowment:name-lookup` permission.';
  };
  permission_nameLookupDescription: {
    message: 'Allow the snap to fetch and display address and domain lookups in different parts of the MetaMask UI.';
    description: 'An extended description for the `endowment:name-lookup` permission.';
  };
  permission_notifications: {
    message: 'Show notifications.';
    description: 'The description for the `snap_notify` permission';
  };
  permission_notificationsDescription: {
    message: 'Allow $1 to display notifications within MetaMask. A short notification text can be triggered by a snap for actionable or time-sensitive information.';
    description: 'An extended description for the `snap_notify` permission. $1 is the snap name.';
  };
  permission_rpc: {
    message: 'Allow $1 to communicate directly with $2.';
    description: "The description for the `endowment:rpc` permission. $1 is 'other snaps' or 'websites', $2 is the snap name.";
  };
  permission_rpcDescription: {
    message: 'Allow $1 to send messages to $2 and receive a response from $2.';
    description: "An extended description for the `endowment:rpc` permission. $1 is 'other snaps' or 'websites', $2 is the snap name.";
  };
  permission_rpcDescriptionOriginList: {
    message: '$1 and $2';
    description: "A list of allowed origins where $2 is the last origin of the list and $1 is the rest of the list separated by ','.";
  };
  permission_signatureInsight: {
    message: 'Display signature insights modal.';
    description: 'The description for the `endowment:signature-insight` permission';
  };
  permission_signatureInsightDescription: {
    message: 'Allow $1 to display a modal with insights on any signature request before approval. This can be used for anti-phishing and security solutions.';
    description: 'An extended description for the `endowment:signature-insight` permission. $1 is the snap name.';
  };
  permission_signatureInsightOrigin: {
    message: 'See the origins of websites that initiate a signature request';
    description: 'The description for the `signatureOrigin` caveat, to be used with the `endowment:signature-insight` permission';
  };
  permission_signatureInsightOriginDescription: {
    message: 'Allow $1 to see the origin (URI) of websites that initiate signature requests. This can be used for anti-phishing and security solutions.';
    description: 'An extended description for the `signatureOrigin` caveat, to be used with the `endowment:signature-insight` permission. $1 is the snap name.';
  };
  permission_transactionInsight: {
    message: 'Fetch and display transaction insights.';
    description: 'The description for the `endowment:transaction-insight` permission';
  };
  permission_transactionInsightDescription: {
    message: 'Allow $1 to decode transactions and show insights within the MetaMask UI. This can be used for anti-phishing and security solutions.';
    description: 'An extended description for the `endowment:transaction-insight` permission. $1 is the snap name.';
  };
  permission_transactionInsightOrigin: {
    message: 'See the origins of websites that suggest transactions';
    description: 'The description for the `transactionOrigin` caveat, to be used with the `endowment:transaction-insight` permission';
  };
  permission_transactionInsightOriginDescription: {
    message: 'Allow $1 to see the origin (URI) of websites that suggest transactions. This can be used for anti-phishing and security solutions.';
    description: 'An extended description for the `transactionOrigin` caveat, to be used with the `endowment:transaction-insight` permission. $1 is the snap name.';
  };
  permission_unknown: {
    message: 'Unknown permission: $1';
    description: '$1 is the name of a requested permission that is not recognized.';
  };
  permission_viewBip32PublicKeys: {
    message: 'View your public key for $1 ($2).';
    description: "The description for the `snap_getBip32PublicKey` permission. $1 is a derivation path, e.g. 'm/44'/0'/0''. $2 is the elliptic curve name, e.g. 'secp256k1'.";
  };
  permission_viewBip32PublicKeysDescription: {
    message: 'Allow $2 to view your public keys (and addresses) for $1. This does not grant any control of accounts or assets.';
    description: 'An extended description for the `snap_getBip32PublicKey` permission. $1 is a derivation path (name). $2 is the snap name.';
  };
  permission_viewNamedBip32PublicKeys: {
    message: 'View your public key for $1.';
    description: "The description for the `snap_getBip32PublicKey` permission. $1 is a name for the derivation path, e.g., 'Ethereum accounts'.";
  };
  permission_webAssembly: {
    message: 'Support for WebAssembly.';
    description: 'The description of the `endowment:webassembly` permission.';
  };
  permission_webAssemblyDescription: {
    message: 'Allow $1 to access low-level execution environments via WebAssembly.';
    description: 'An extended description of the `endowment:webassembly` permission. $1 is the snap name.';
  };
  permissions: {
    message: 'Permissions';
  };
  permissionsPageEmptyContent: {
    message: 'Nothing to see here';
  };
  permissionsPageEmptySubContent: {
    message: "This is where you can see the permissions you've given to installed Snaps or connected sites.";
  };
  permissionsPageTourDescription: {
    message: 'This is your control panel for managing permissions given to connected sites and installed Snaps.';
  };
  permissionsPageTourTitle: {
    message: 'Connected sites are now permissions';
  };
  personalAddressDetected: {
    message: 'Personal address detected. Input the token contract address.';
  };
  petnamesEnabledToggle: {
    message: 'Allow nicknames';
  };
  petnamesEnabledToggleDescription: {
    message: 'This lets you assign a nickname to any address. We’ll suggest names for addresses that you interact with when possible.';
  };
  pinExtensionDescription: {
    message: 'Navigate to the extension menu and pin MetaMask Institutional for seamless access.';
  };
  pinExtensionTitle: {
    message: 'Pin extension';
  };
  pinToTop: {
    message: 'Pin to top';
  };
  pleaseConfirm: {
    message: 'Please confirm';
  };
  plusMore: {
    message: '+ $1 more';
    description: '$1 is the number of additional items';
  };
  plusXMore: {
    message: '+ $1 more';
    description: '$1 is a number of additional but unshown items in a list- this message will be shown in place of those items';
  };
  popularCustomNetworks: {
    message: 'Popular custom networks';
  };
  portfolio: {
    message: 'Portfolio';
  };
  portfolioDashboard: {
    message: 'Portfolio Dashboard';
  };
  preparingSwap: {
    message: 'Preparing swap...';
  };
  prev: {
    message: 'Prev';
  };
  primaryCurrencySetting: {
    message: 'Primary currency';
  };
  primaryCurrencySettingDescription: {
    message: 'Select native to prioritize displaying values in the native currency of the chain (e.g. ETH). Select Fiat to prioritize displaying values in your selected fiat currency.';
  };
  primaryType: {
    message: 'Primary type';
  };
  priorityFee: {
    message: 'Priority fee';
  };
  priorityFeeProperCase: {
    message: 'Priority Fee';
  };
  privacy: {
    message: 'Privacy';
  };
  privacyMsg: {
    message: 'Privacy policy';
  };
  privateKey: {
    message: 'Private Key';
    description: 'select this type of file to use to import an account';
  };
  privateKeyCopyWarning: {
    message: 'Private key for $1';
    description: '$1 represents the account name';
  };
  privateKeyHidden: {
    message: 'The private key is hidden';
    description: 'Explains that the private key input is hidden';
  };
  privateKeyShow: {
    message: 'Show/Hide the private key input';
    description: 'Describes a toggle that is used to show or hide the private key input';
  };
  privateKeyShown: {
    message: 'This private key is being shown';
    description: 'Explains that the private key input is being shown';
  };
  privateKeyWarning: {
    message: 'Warning: Never disclose this key. Anyone with your private keys can steal any assets held in your account.';
  };
  privateNetwork: {
    message: 'Private network';
  };
  proceedWithTransaction: {
    message: 'I want to proceed anyway';
  };
  proposedApprovalLimit: {
    message: 'Proposed approval limit';
  };
  provide: {
    message: 'Provide';
  };
  publicAddress: {
    message: 'Public address';
  };
  queued: {
    message: 'Queued';
  };
  quoteRate: {
    message: 'Quote rate';
  };
  reAddAccounts: {
    message: 're-add any other accounts';
  };
  reAdded: {
    message: 're-added';
  };
  readdToken: {
    message: 'You can add this token back in the future by going to “Import token” in your accounts options menu.';
  };
  receive: {
    message: 'Receive';
  };
  receiveTokensCamelCase: {
    message: 'Receive tokens';
  };
  recipientAddressPlaceholder: {
    message: 'Enter public address (0x) or ENS name';
  };
  recipientAddressPlaceholderFlask: {
    message: 'Enter public address (0x) or domain name';
  };
  recommendedGasLabel: {
    message: 'Recommended';
  };
  recoveryPhraseReminderBackupStart: {
    message: 'Start here';
  };
  recoveryPhraseReminderConfirm: {
    message: 'Got it';
  };
  recoveryPhraseReminderHasBackedUp: {
    message: 'Always keep your Secret Recovery Phrase in a secure and secret place';
  };
  recoveryPhraseReminderHasNotBackedUp: {
    message: 'Need to backup your Secret Recovery Phrase again?';
  };
  recoveryPhraseReminderItemOne: {
    message: 'Never share your Secret Recovery Phrase with anyone';
  };
  recoveryPhraseReminderItemTwo: {
    message: 'The MetaMask team will never ask for your Secret Recovery Phrase';
  };
  recoveryPhraseReminderSubText: {
    message: 'Your Secret Recovery Phrase controls all of your accounts.';
  };
  recoveryPhraseReminderTitle: {
    message: 'Protect your funds';
  };
  redesignedConfirmationsEnabledToggle: {
    message: 'Redesigned confirmations';
  };
  redesignedConfirmationsToggleDescription: {
    message: 'Turn this on to see re-designed confirmations whenever you receive signature requests.';
  };
  refreshList: {
    message: 'Refresh list';
  };
  reject: {
    message: 'Reject';
  };
  rejectAll: {
    message: 'Reject all';
  };
  rejectRequestsDescription: {
    message: 'You are about to batch reject $1 requests.';
  };
  rejectRequestsN: {
    message: 'Reject $1 requests';
  };
  rejectTxsDescription: {
    message: 'You are about to batch reject $1 transactions.';
  };
  rejectTxsN: {
    message: 'Reject $1 transactions';
  };
  rejected: {
    message: 'Rejected';
  };
  remember: {
    message: 'Remember:';
  };
  remove: {
    message: 'Remove';
  };
  removeAccount: {
    message: 'Remove account';
  };
  removeAccountDescription: {
    message: 'This account will be removed from your wallet. Please make sure you have the original Secret Recovery Phrase or private key for this imported account before continuing. You can import or create accounts again from the account drop-down. ';
  };
  removeJWT: {
    message: 'Remove custodian token';
  };
  removeJWTDescription: {
    message: 'Are you sure you want to remove this token? All accounts assigned to this token will be removed from extension as well: ';
  };
  removeKeyringSnap: {
    message: 'Removing this Snap removes these accounts from MetaMask:';
  };
  removeKeyringSnapToolTip: {
    message: 'The snap controls the accounts, and by removing it, the accounts will be removed from MetaMask, too, but they will remain in the blockchain.';
  };
  removeNFT: {
    message: 'Remove NFT';
  };
  removeNftErrorMessage: {
    message: 'We could not remove this NFT.';
  };
  removeNftMessage: {
    message: 'NFT was successfully removed!';
  };
  removeSnap: {
    message: 'Remove Snap';
  };
  removeSnapAccountDescription: {
    message: 'If you proceed, this account will no longer be available in MetaMask.';
  };
  removeSnapAccountTitle: {
    message: 'Remove account';
  };
  removeSnapConfirmation: {
    message: 'Are you sure you want to remove $1?';
    description: '$1 represents the name of the snap';
  };
  removeSnapDescription: {
    message: 'This action will delete the snap, its data and revoke your given permissions.';
  };
  replace: {
    message: 'replace';
  };
  reportIssue: {
    message: 'Report an issue';
  };
  requestFlaggedAsMaliciousFallbackCopyReason: {
    message: 'The security provider has not shared additional details';
  };
  requestFlaggedAsMaliciousFallbackCopyReasonTitle: {
    message: 'Request flagged as malicious';
  };
  requestFrom: {
    message: 'Request from';
  };
  requestFromInfo: {
    message: 'This is the site asking for your signature.';
  };
  requestMayNotBeSafe: {
    message: 'Request may not be safe';
  };
  requestMayNotBeSafeError: {
    message: "The security provider didn't detect any known malicious activity, but it still may not be safe to continue.";
  };
  requestNotVerified: {
    message: 'Request not verified';
  };
  requestNotVerifiedError: {
    message: 'Because of an error, this request was not verified by the security provider. Proceed with caution.';
  };
  requestsAwaitingAcknowledgement: {
    message: 'requests waiting to be acknowledged';
  };
  required: {
    message: 'Required';
  };
  reset: {
    message: 'Reset';
  };
  resetStates: {
    message: 'Reset States';
  };
  resetWallet: {
    message: 'Reset wallet';
  };
  resetWalletSubHeader: {
    message: 'MetaMask does not keep a copy of your password. If you’re having trouble unlocking your account, you will need to reset your wallet. You can do this by providing the Secret Recovery Phrase you used when you set up your wallet.';
  };
  resetWalletUsingSRP: {
    message: 'This action will delete your current wallet and Secret Recovery Phrase from this device, along with the list of accounts you’ve curated. After resetting with a Secret Recovery Phrase, you’ll see a list of accounts based on the Secret Recovery Phrase you use to reset. This new list will automatically include accounts that have a balance. You’ll also be able to $1 created previously. Custom accounts that you’ve imported will need to be $2, and any custom tokens you’ve added to an account will need to be $3 as well.';
  };
  resetWalletWarning: {
    message: 'Make sure you’re using the correct Secret Recovery Phrase before proceeding. You will not be able to undo this.';
  };
  restartMetamask: {
    message: 'Restart MetaMask';
  };
  restore: {
    message: 'Restore';
  };
  restoreFailed: {
    message: 'Can not restore your data from the file provided';
  };
  restoreSuccessful: {
    message: 'Your data has been restored successfully';
  };
  restoreUserData: {
    message: 'Restore user data';
  };
  restoreUserDataDescription: {
    message: 'You can restore data like contacts and preferences from a backup file.';
  };
  resultPageError: {
    message: 'Error';
  };
  resultPageErrorDefaultMessage: {
    message: 'The operation failed.';
  };
  resultPageSuccess: {
    message: 'Success';
  };
  resultPageSuccessDefaultMessage: {
    message: 'The operation completed successfully.';
  };
  retryTransaction: {
    message: 'Retry transaction';
  };
  reusedTokenNameWarning: {
    message: 'A token here reuses a symbol from another token you watch, this can be confusing or deceptive.';
  };
  revealSeedWords: {
    message: 'Reveal Secret Recovery Phrase';
  };
  revealSeedWordsDescription1: {
    message: 'The $1 provides $2';
    description: "This is a sentence consisting of link using 'revealSeedWordsSRPName' as $1 and bolded text using 'revealSeedWordsDescription3' as $2.";
  };
  revealSeedWordsDescription2: {
    message: "MetaMask is a $1. That means you're the owner of your SRP.";
    description: "$1 is text link with the message from 'revealSeedWordsNonCustodialWallet'";
  };
  revealSeedWordsDescription3: {
    message: 'full access to your wallet and funds.\n';
  };
  revealSeedWordsNonCustodialWallet: {
    message: 'non-custodial wallet';
  };
  revealSeedWordsQR: {
    message: 'QR';
  };
  revealSeedWordsSRPName: {
    message: 'Secret Recovery Phrase (SRP)';
  };
  revealSeedWordsText: {
    message: 'Text';
  };
  revealSeedWordsWarning: {
    message: 'Make sure no one is looking at your screen. $1';
    description: "$1 is bolded text using the message from 'revealSeedWordsWarning2'";
  };
  revealSeedWordsWarning2: {
    message: 'MetaMask Support will never request this.';
    description: "The bolded texted in the second part of 'revealSeedWordsWarning'";
  };
  revealSensitiveContent: {
    message: 'Reveal sensitive content';
  };
  revealTheSeedPhrase: {
    message: 'Reveal seed phrase';
  };
  revokeAllTokensTitle: {
    message: 'Revoke permission to access and transfer all of your $1?';
    description: '$1 is the symbol of the token for which the user is revoking approval';
  };
  revokeAllTokensTitleWithoutSymbol: {
    message: 'Revoke permission to access and transfer all of your NFTs from $1?';
    description: "$1 is a link to contract on the block explorer when we're not able to retrieve a erc721 or erc1155 name";
  };
  revokeApproveForAllDescription: {
    message: 'This revokes the permission for a third party to access and transfer all of your $1 without further notice.';
    description: '$1 is either a string or link of a given token symbol or name';
  };
  revokeApproveForAllDescriptionWithoutSymbol: {
    message: 'This revokes the permission for a third party to access and transfer all of your NFTs from $1 without further notice.';
    description: "$1 is a link to contract on the block explorer when we're not able to retrieve a erc721 or erc1155 name";
  };
  revokePermission: {
    message: 'Revoke permission';
  };
  revokeSpendingCap: {
    message: 'Revoke spending cap for your $1';
    description: '$1 is a token symbol';
  };
  revokeSpendingCapTooltipText: {
    message: 'This third party will be unable to spend any more of your current or future tokens.';
  };
  rpcUrl: {
    message: 'New RPC URL';
  };
  safeTransferFrom: {
    message: 'Safe transfer from';
  };
  save: {
    message: 'Save';
  };
  scanInstructions: {
    message: 'Place the QR code in front of your camera';
  };
  scanQrCode: {
    message: 'Scan QR code';
  };
  scrollDown: {
    message: 'Scroll down';
  };
  search: {
    message: 'Search';
  };
  searchAccounts: {
    message: 'Search accounts';
  };
  searchTokenOrNFT: {
    message: 'Search token or NFT';
  };
  searchTokens: {
    message: 'Search tokens';
  };
  secretRecoveryPhrase: {
    message: 'Secret Recovery Phrase';
  };
  secureWallet: {
    message: 'Secure wallet';
  };
  security: {
    message: 'Security';
  };
  securityAlert: {
    message: 'Security alert from $1 and $2';
  };
  securityAlerts: {
    message: 'Security alerts';
  };
  securityAlertsDescription: {
    message: 'This feature alerts you to malicious activity by actively reviewing transaction and signature requests. $1';
    description: 'Link to learn more about security alerts';
  };
  securityAndPrivacy: {
    message: 'Security & privacy';
  };
  securityProviderPoweredBy: {
    message: 'Powered by $1';
    description: 'The security provider that is providing data';
  };
  seeDetails: {
    message: 'See details';
  };
  seedPhraseConfirm: {
    message: 'Confirm Secret Recovery Phrase';
  };
  seedPhraseEnterMissingWords: {
    message: 'Confirm Secret Recovery Phrase';
  };
  seedPhraseIntroNotRecommendedButtonCopy: {
    message: 'Remind me later (not recommended)';
  };
  seedPhraseIntroRecommendedButtonCopy: {
    message: 'Secure my wallet (recommended)';
  };
  seedPhraseIntroSidebarBulletFour: {
    message: 'Write down and store in multiple secret places';
  };
  seedPhraseIntroSidebarBulletOne: {
    message: 'Save in a password manager';
  };
  seedPhraseIntroSidebarBulletThree: {
    message: 'Store in a safe deposit box';
  };
  seedPhraseIntroSidebarCopyOne: {
    message: 'Your Secret Recovery Phrase is a 12-word phrase that is the “master key” to your wallet and your funds';
  };
  seedPhraseIntroSidebarCopyThree: {
    message: 'If someone asks for your recovery phrase they are likely trying to scam you and steal your wallet funds.';
  };
  seedPhraseIntroSidebarCopyTwo: {
    message: 'Never, ever share your Secret Recovery Phrase, not even with MetaMask!';
  };
  seedPhraseIntroSidebarTitleOne: {
    message: 'What is a Secret Recovery Phrase?';
  };
  seedPhraseIntroSidebarTitleThree: {
    message: 'Should I share my Secret Recovery Phrase?';
  };
  seedPhraseIntroSidebarTitleTwo: {
    message: 'How do I save my Secret Recovery Phrase?';
  };
  seedPhraseIntroTitle: {
    message: 'Secure your wallet';
  };
  seedPhraseIntroTitleCopy: {
    message: 'Before getting started, watch this short video to learn about your Secret Recovery Phrase and how to keep your wallet safe.';
  };
  seedPhraseReq: {
    message: 'Secret Recovery Phrases contain 12, 15, 18, 21, or 24 words';
  };
  seedPhraseWriteDownDetails: {
    message: 'Write down this 12-word Secret Recovery Phrase and save it in a place that you trust and only you can access.';
  };
  seedPhraseWriteDownHeader: {
    message: 'Write down your Secret Recovery Phrase';
  };
  select: {
    message: 'Select';
  };
  selectAToken: {
    message: 'Select a token';
  };
  selectAccounts: {
    message: 'Select the account(s) to use on this site';
  };
  selectAccountsForSnap: {
    message: 'Select the account(s) to use with this snap';
  };
  selectAll: {
    message: 'Select all';
  };
  selectAllAccounts: {
    message: 'Select all accounts';
  };
  selectAnAccount: {
    message: 'Select an account';
  };
  selectAnAccountAlreadyConnected: {
    message: 'This account has already been connected to MetaMask';
  };
  selectAnAccountHelp: {
    message: 'Select the custodian accounts to use in MetaMask Institutional.';
  };
  selectEnableDisplayMediaPrivacyPreference: {
    message: 'Turn on Display NFT Media';
  };
  selectHdPath: {
    message: 'Select HD path';
  };
  selectJWT: {
    message: 'Select token';
  };
  selectNFTPrivacyPreference: {
    message: 'Turn on NFT detection in Settings';
  };
  selectPathHelp: {
    message: "If you don't see the accounts you expect, try switching the HD path or current selected network.";
  };
  selectType: {
    message: 'Select Type';
  };
  selectingAllWillAllow: {
    message: 'Selecting all will allow this site to view all of your current accounts. Make sure you trust this site.';
  };
  send: {
    message: 'Send';
  };
  sendAToken: {
    message: 'Send a token';
  };
  sendBugReport: {
    message: 'Send us a bug report.';
  };
  sendNoContactsConversionText: {
    message: 'click here';
  };
  sendNoContactsDescription: {
    message: 'Contacts allow you to safely send transactions to another account multiple times.  To create a contact, $1';
    description: "$1 represents the action text 'click here'";
  };
  sendNoContactsTitle: {
    message: "You don't have any contacts yet";
  };
  sendSpecifiedTokens: {
    message: 'Send $1';
    description: 'Symbol of the specified token';
  };
  sendTo: {
    message: 'Send to';
  };
  sendTokens: {
    message: 'Send tokens';
  };
  sendingDisabled: {
    message: 'Sending of ERC-1155 NFT assets is not yet supported.';
  };
  sendingNativeAsset: {
    message: 'Sending $1';
    description: '$1 represents the native currency symbol for the current network (e.g. ETH or BNB)';
  };
  sendingToTokenContractWarning: {
    message: 'Warning: you are about to send to a token contract which could result in a loss of funds. $1';
    description: "$1 is a clickable link with text defined by the 'learnMoreUpperCase' key. The link will open to a support article regarding the known contract address warning";
  };
  sendingZeroAmount: {
    message: 'You are sending 0 $1.';
  };
  sepolia: {
    message: 'Sepolia test network';
  };
  setAdvancedPrivacySettingsDetails: {
    message: 'MetaMask uses these trusted third-party services to enhance product usability and safety.';
  };
  setApprovalForAll: {
    message: 'Set approval for all';
  };
  setApprovalForAllTitle: {
    message: 'Approve $1 with no spend limit';
    description: 'The token symbol that is being approved';
  };
  settingAddSnapAccount: {
    message: 'Add account Snap';
  };
  settings: {
    message: 'Settings';
  };
  settingsSearchMatchingNotFound: {
    message: 'No matching results found.';
  };
  settingsSubHeadingSignaturesAndTransactions: {
    message: 'Signature and transaction requests';
  };
  show: {
    message: 'Show';
  };
  showAccount: {
    message: 'Show account';
  };
  showExtensionInFullSizeView: {
    message: 'Show extension in full-size view';
  };
  showExtensionInFullSizeViewDescription: {
    message: 'Turn this on to make full-size view your default when you click the extension icon.';
  };
  showFiatConversionInTestnets: {
    message: 'Show conversion on test networks';
  };
  showFiatConversionInTestnetsDescription: {
    message: 'Select this to show fiat conversion on test networks';
  };
  showHexData: {
    message: 'Show hex data';
  };
  showHexDataDescription: {
    message: 'Select this to show the hex data field on the send screen';
  };
  showIncomingTransactions: {
    message: 'Show incoming transactions';
  };
  showIncomingTransactionsDescription: {
    message: 'This relies on $1 which will have access to your Ethereum address and your IP address. $2';
    description: '$1 is the link to etherscan url and $2 is the link to the privacy policy of consensys APIs';
  };
  showIncomingTransactionsExplainer: {
    message: 'This relies on different third-party APIs for each network, which expose your Ethereum address and your IP address.';
  };
  showMore: {
    message: 'Show more';
  };
  showNft: {
    message: 'Show NFT';
  };
  showPermissions: {
    message: 'Show permissions';
  };
  showPrivateKey: {
    message: 'Show private key';
  };
  showTestnetNetworks: {
    message: 'Show test networks';
  };
  showTestnetNetworksDescription: {
    message: 'Select this to show test networks in network list';
  };
  sigRequest: {
    message: 'Signature request';
  };
  sign: {
    message: 'Sign';
  };
  signatureRequest: {
    message: 'Signature request';
  };
  signatureRequestGuidance: {
    message: 'Only sign this message if you fully understand the content and trust the requesting site.';
  };
  signatureRequestWarning: {
    message: 'Signing this message could be dangerous. You may be giving total control of your account and assets to the party on the other end of this message. That means they could drain your account at any time. Proceed with caution. $1.';
  };
  signed: {
    message: 'Signed';
  };
  signin: {
    message: 'Sign-In';
  };
  signing: {
    message: 'Signing';
  };
  simulationDetailsFailed: {
    message: 'There was an error loading your estimation.';
  };
  simulationDetailsFiatNotAvailable: {
    message: 'Not Available';
  };
  simulationDetailsIncomingHeading: {
    message: 'You receive';
  };
  simulationDetailsNoBalanceChanges: {
    message: 'No changes predicted for your wallet';
  };
  simulationDetailsOutgoingHeading: {
    message: 'You send';
  };
  simulationDetailsTitle: {
    message: 'Estimated changes';
  };
  simulationDetailsTitleTooltip: {
    message: 'Estimated changes are what might happen if you go through with this transaction. This is just a prediction, not a guarantee.';
  };
  simulationDetailsTotalFiat: {
    message: 'Total = $1';
    description: '$1 is the total amount in fiat currency on one side of the transaction';
  };
  simulationDetailsTransactionReverted: {
    message: 'This transaction is likely to fail';
  };
  simulationErrorMessageV2: {
    message: 'We were not able to estimate gas. There might be an error in the contract and this transaction may fail.';
  };
  simulationsSettingDescription: {
    message: "Turn this on to estimate balance changes of transactions before you confirm them. This doesn't guarantee the final outcome of your transactions. $1";
  };
  simulationsSettingSubHeader: {
    message: 'Estimate balance changes';
  };
  siteConnections: {
    message: 'Site Connections';
  };
  sites: {
    message: 'Sites';
  };
  skip: {
    message: 'Skip';
  };
  skipAccountSecurity: {
    message: 'Skip account security?';
  };
  skipAccountSecurityDetails: {
    message: 'I understand that until I back up my Secret Recovery Phrase, I may lose my accounts and all of their assets.';
  };
  smartContracts: {
    message: 'Smart contracts';
  };
  smartSwapsErrorNotEnoughFunds: {
    message: 'Not enough funds for a smart swap.';
  };
  smartSwapsErrorUnavailable: {
    message: 'Smart Swaps are temporarily unavailable.';
  };
  smartTransactionCancelled: {
    message: 'Your transaction was canceled';
  };
  smartTransactionCancelledDescription: {
    message: "Your transaction couldn't be completed, so it was canceled to save you from paying unnecessary gas fees.";
  };
  smartTransactionError: {
    message: 'Your transaction failed';
  };
  smartTransactionErrorDescription: {
    message: 'Sudden market changes can cause failures. If the problem continues, reach out to MetaMask customer support.';
  };
  smartTransactionPending: {
    message: 'Submitting your transaction';
  };
  smartTransactionSuccess: {
    message: 'Your transaction is complete';
  };
  smartTransactionTakingTooLong: {
    message: 'Sorry for the wait';
  };
  smartTransactionTakingTooLongDescription: {
    message: 'If your transaction is not finalized within $1, it will be canceled and you will not be charged for gas.';
    description: '$1 is remaining time in seconds';
  };
  smartTransactions: {
    message: 'Smart Transactions';
  };
  smartTransactionsBenefit1: {
    message: '82% fewer failed transactions';
  };
  smartTransactionsBenefit2: {
    message: 'Transaction protection';
  };
  smartTransactionsBenefit3: {
    message: 'Real-time updates';
  };
  smartTransactionsDescription: {
    message: 'Unlock the safest, most reliable, and easiest transaction experience - a smarter way to navigate web3.';
  };
  smartTransactionsDescription2: {
    message: 'Millions of dollars are lost every month due to failed transactions & frontrunning. Smart Transactions fixes this.';
  };
  smartTransactionsDescription3: {
    message: 'Right now, Smart Transactions are only available on ETH Mainnet. You can turn them off at any time in settings. $1';
    description: '$1 is an external link to learn more about Smart Transactions';
  };
  snapAccountCreated: {
    message: 'Account created';
  };
  snapAccountCreatedDescription: {
    message: 'Your new account is ready to use!';
  };
  snapAccountCreationFailed: {
    message: 'Account creation failed';
  };
  snapAccountCreationFailedDescription: {
    message: "$1 didn't manage to create an account for you.";
    description: '$1 is the snap name';
  };
  snapAccountRedirectFinishSigningTitle: {
    message: 'Finish signing';
  };
  snapAccountRedirectSiteDescription: {
    message: 'Follow the instructions from $1';
  };
  snapAccountRemovalFailed: {
    message: 'Account removal failed';
  };
  snapAccountRemovalFailedDescription: {
    message: "$1 didn't manage to remove this account for you.";
    description: '$1 is the snap name';
  };
  snapAccountRemoved: {
    message: 'Account removed';
  };
  snapAccountRemovedDescription: {
    message: 'This account will no longer be available to use in MetaMask.';
  };
  snapAccounts: {
    message: 'Account Snaps';
  };
  snapAccountsDescription: {
    message: 'Accounts controlled by third-party Snaps.';
  };
  snapConnectionWarning: {
    message: '$1 wants to use $2';
    description: '$2 is the snap and $1 is the dapp requesting connection to the snap.';
  };
  snapConnections: {
    message: 'Snap Connections';
  };
  snapContent: {
    message: 'This content is coming from $1';
    description: "This is shown when a snap shows transaction insight information in the confirmation UI. $1 is a link to the snap's settings page with the link text being the name of the snap.";
  };
  snapDetailWebsite: {
    message: 'Website';
  };
  snapInstallRequest: {
    message: 'Installing $1 gives it the following permissions.';
    description: '$1 is the snap name.';
  };
  snapInstallSuccess: {
    message: 'Installation complete';
  };
  snapInstallWarningCheck: {
    message: '$1 wants permission to do the following:';
    description: 'Warning message used in popup displayed on snap install. $1 is the snap name.';
  };
  snapInstallWarningHeading: {
    message: 'Proceed with caution';
  };
  snapInstallWarningPermissionDescriptionForBip32View: {
    message: 'Allow $1 to view your public keys (and addresses). This does not grant any control of accounts or assets.';
    description: 'An extended description for the `snap_getBip32PublicKey` permission used for tooltip on Snap Install Warning screen (popup/modal). $1 is the snap name.';
  };
  snapInstallWarningPermissionDescriptionForEntropy: {
    message: 'Allow $1 Snap to manage accounts and assets on the requested network(s). These accounts are derived and backed up using your secret recovery phrase (without revealing it). With the power to derive keys, $1 can support a variety of blockchain protocols beyond Ethereum (EVMs).';
    description: 'An extended description for the `snap_getBip44Entropy` and `snap_getBip44Entropy` permissions used for tooltip on Snap Install Warning screen (popup/modal). $1 is the snap name.';
  };
  snapInstallWarningPermissionNameForEntropy: {
    message: 'Manage $1 accounts';
    description: 'Permission name used for the Permission Cell component displayed on warning popup when installing a Snap. $1 is list of account types.';
  };
  snapInstallWarningPermissionNameForViewPublicKey: {
    message: 'View your public key for $1';
    description: 'Permission name used for the Permission Cell component displayed on warning popup when installing a Snap. $1 is list of account types.';
  };
  snapInstallationErrorDescription: {
    message: '$1 couldn’t be installed.';
    description: 'Error description used when snap installation fails. $1 is the snap name.';
  };
  snapInstallationErrorTitle: {
    message: 'Installation failed';
    description: 'Error title used when snap installation fails.';
  };
  snapResultError: {
    message: 'Error';
  };
  snapResultSuccess: {
    message: 'Success';
  };
  snapResultSuccessDescription: {
    message: '$1 is ready to use';
  };
  snapUpdateAlertDescription: {
    message: 'Get the latest version of $1';
    description: 'Description used in Snap update alert banner when snap update is available. $1 is the Snap name.';
  };
  snapUpdateAvailable: {
    message: 'Update available';
  };
  snapUpdateErrorDescription: {
    message: '$1 couldn’t be updated.';
    description: 'Error description used when snap update fails. $1 is the snap name.';
  };
  snapUpdateErrorTitle: {
    message: 'Update failed';
    description: 'Error title used when snap update fails.';
  };
  snapUpdateRequest: {
    message: 'Updating $1 gives it the following permissions.';
    description: '$1 is the Snap name.';
  };
  snapUpdateSuccess: {
    message: 'Update complete';
  };
  snapUrlIsBlocked: {
    message: 'This Snap wants to take you to a blocked site. $1.';
  };
  snaps: {
    message: 'Snaps';
  };
  snapsConnected: {
    message: 'Snaps connected';
  };
  snapsInvalidUIError: {
    message: 'The UI specified by the snap is invalid.';
  };
  snapsNoInsight: {
    message: "The snap didn't return any insight";
  };
  snapsPrivacyWarningFirstMessage: {
    message: 'You acknowledge that any Snap that you install is a Third Party Service, unless otherwise identified, as defined in the Consensys $1. Your use of Third Party Services is governed by separate terms and conditions set forth by the Third Party Service provider. Consensys does not recommend the use of any Snap by any particular person for any particular reason. You access, rely upon or use the Third Party Service at your own risk. Consensys disclaims all responsibility and liability for any losses on account of your use of Third Party Services.';
    description: 'First part of a message in popup modal displayed when installing a snap for the first time. $1 is terms of use link.';
  };
  snapsPrivacyWarningSecondMessage: {
    message: 'Any information you share with Third Party Services will be collected directly by those Third Party Services in accordance with their privacy policies. Please refer to their privacy policies for more information.';
    description: 'Second part of a message in popup modal displayed when installing a snap for the first time.';
  };
  snapsPrivacyWarningThirdMessage: {
    message: 'Consensys has no access to information you share with Third Party Services.';
    description: 'Third part of a message in popup modal displayed when installing a snap for the first time.';
  };
  snapsSettings: {
    message: 'Snap settings';
  };
  snapsTermsOfUse: {
    message: 'Terms of Use';
  };
  snapsToggle: {
    message: 'A snap will only run if it is enabled';
  };
  snapsUIError: {
    message: 'Contact the creators of $1 for further support.';
    description: 'This is shown when the insight snap throws an error. $1 is the snap name';
  };
  someNetworksMayPoseSecurity: {
    message: 'Some networks may pose security and/or privacy risks. Understand the risks before adding & using a network.';
  };
  somethingDoesntLookRight: {
    message: "Something doesn't look right? $1";
    description: 'A false positive message for users to contact support. $1 is a link to the support page.';
  };
  somethingIsWrong: {
    message: "Something's gone wrong. Try reloading the page.";
  };
  somethingWentWrong: {
    message: 'Oops! Something went wrong.';
  };
  source: {
    message: 'Source';
  };
  speedUp: {
    message: 'Speed up';
  };
  speedUpCancellation: {
    message: 'Speed up this cancellation';
  };
  speedUpExplanation: {
    message: 'We’ve updated the gas fee based on current network conditions and have increased it by at least 10% (required by the network).';
  };
  speedUpPopoverTitle: {
    message: 'Speed up transaction';
  };
  speedUpTooltipText: {
    message: 'New gas fee';
  };
  speedUpTransaction: {
    message: 'Speed up this transaction';
  };
  spendLimitInsufficient: {
    message: 'Spend limit insufficient';
  };
  spendLimitInvalid: {
    message: 'Spend limit invalid; must be a positive number';
  };
  spendLimitPermission: {
    message: 'Spend limit permission';
  };
  spendLimitRequestedBy: {
    message: 'Spend limit requested by $1';
    description: 'Origin of the site requesting the spend limit';
  };
  spendLimitTooLarge: {
    message: 'Spend limit too large';
  };
  spendingCap: {
    message: 'Spending cap';
  };
  spendingCapError: {
    message: 'Error: Enter numbers only';
  };
  spendingCapErrorDescription: {
    message: "Only enter a number that you're comfortable with $1 accessing now or in the future. You can always increase the token limit later.";
    description: '$1 is origin of the site requesting the token limit';
  };
  spendingCapRequest: {
    message: 'Spending cap request for your $1';
  };
  srpInputNumberOfWords: {
    message: 'I have a $1-word phrase';
    description: 'This is the text for each option in the dropdown where a user selects how many words their secret recovery phrase has during import. The $1 is the number of words (either 12, 15, 18, 21, or 24).';
  };
  srpPasteFailedTooManyWords: {
    message: 'Paste failed because it contained over 24 words. A secret recovery phrase can have a maximum of 24 words.';
    description: 'Description of SRP paste error when the pasted content has too many words';
  };
  srpPasteTip: {
    message: 'You can paste your entire secret recovery phrase into any field';
    description: 'Our secret recovery phrase input is split into one field per word. This message explains to users that they can paste their entire secrete recovery phrase into any field, and we will handle it correctly.';
  };
  srpSecurityQuizGetStarted: {
    message: 'Get started';
  };
  srpSecurityQuizImgAlt: {
    message: 'An eye with a keyhole in the center, and three floating password fields';
  };
  srpSecurityQuizIntroduction: {
    message: 'To reveal your Secret Recovery Phrase, you need to correctly answer two questions';
  };
  srpSecurityQuizQuestionOneQuestion: {
    message: 'If you lose your Secret Recovery Phrase, MetaMask...';
  };
  srpSecurityQuizQuestionOneRightAnswer: {
    message: 'Can’t help you';
  };
  srpSecurityQuizQuestionOneRightAnswerDescription: {
    message: 'Write it down, engrave it on metal, or keep it in multiple secret spots so you never lose it. If you lose it, it’s gone forever.';
  };
  srpSecurityQuizQuestionOneRightAnswerTitle: {
    message: 'Right! No one can help get your Secret Recovery Phrase back';
  };
  srpSecurityQuizQuestionOneWrongAnswer: {
    message: 'Can get it back for you';
  };
  srpSecurityQuizQuestionOneWrongAnswerDescription: {
    message: 'If you lose your Secret Recovery Phrase, it’s gone forever. No one can help you get it back, no matter what they might say.';
  };
  srpSecurityQuizQuestionOneWrongAnswerTitle: {
    message: 'Wrong! No one can help get your Secret Recovery Phrase back';
  };
  srpSecurityQuizQuestionTwoQuestion: {
    message: 'If anyone, even a support agent, asks for your Secret Recovery Phrase...';
  };
  srpSecurityQuizQuestionTwoRightAnswer: {
    message: 'You’re being scammed';
  };
  srpSecurityQuizQuestionTwoRightAnswerDescription: {
    message: 'Anyone claiming to need your Secret Recovery Phrase is lying to you. If you share it with them, they will steal your assets.';
  };
  srpSecurityQuizQuestionTwoRightAnswerTitle: {
    message: 'Correct! Sharing your Secret Recovery Phrase is never a good idea';
  };
  srpSecurityQuizQuestionTwoWrongAnswer: {
    message: 'You should give it to them';
  };
  srpSecurityQuizQuestionTwoWrongAnswerDescription: {
    message: 'Anyone claiming to need your Secret Recovery Phrase is lying to you. If you share it with them, they will steal your assets.';
  };
  srpSecurityQuizQuestionTwoWrongAnswerTitle: {
    message: 'Nope! Never share your Secret Recovery Phrase with anyone, ever';
  };
  srpSecurityQuizTitle: {
    message: 'Security quiz';
  };
  srpToggleShow: {
    message: 'Show/Hide this word of the secret recovery phrase';
    description: 'Describes a toggle that is used to show or hide a single word of the secret recovery phrase';
  };
  srpWordHidden: {
    message: 'This word is hidden';
    description: 'Explains that a word in the secret recovery phrase is hidden';
  };
  srpWordShown: {
    message: 'This word is being shown';
    description: 'Explains that a word in the secret recovery phrase is being shown';
  };
  stable: {
    message: 'Stable';
  };
  stableLowercase: {
    message: 'stable';
  };
  stake: {
    message: 'Stake';
  };
  startYourJourney: {
    message: 'Start your journey with $1';
    description: '$1 is the token symbol';
  };
  startYourJourneyDescription: {
    message: 'Get started with web3 by adding some $1 to your wallet.';
    description: '$1 is the token symbol';
  };
  stateLogError: {
    message: 'Error in retrieving state logs.';
  };
  stateLogFileName: {
    message: 'MetaMask state logs';
  };
  stateLogs: {
    message: 'State logs';
  };
  stateLogsDescription: {
    message: 'State logs contain your public account addresses and sent transactions.';
  };
  states: {
    message: 'States';
  };
  status: {
    message: 'Status';
  };
  statusNotConnected: {
    message: 'Not connected';
  };
  statusNotConnectedAccount: {
    message: 'No accounts connected';
  };
  step1LatticeWallet: {
    message: 'Connect your Lattice1';
  };
  step1LatticeWalletMsg: {
    message: 'You can connect MetaMask to your Lattice1 device once it is set up and online. Unlock your device and have your Device ID ready.';
    description: '$1 represents the `hardwareWalletSupportLinkConversion` localization key';
  };
  step1LedgerWallet: {
    message: 'Download Ledger app';
  };
  step1LedgerWalletMsg: {
    message: 'Download, set up, and enter your password to unlock $1.';
    description: '$1 represents the `ledgerLiveApp` localization value';
  };
  step1TrezorWallet: {
    message: 'Connect your Trezor';
  };
  step1TrezorWalletMsg: {
    message: 'Plug your Trezor directly into your computer and unlock it. Make sure you use the correct passphrase.';
    description: '$1 represents the `hardwareWalletSupportLinkConversion` localization key';
  };
  step2LedgerWallet: {
    message: 'Connect your Ledger';
  };
  step2LedgerWalletMsg: {
    message: 'Plug your Ledger directly into your computer, then  unlock it and open the Ethereum app.';
    description: '$1 represents the `hardwareWalletSupportLinkConversion` localization key';
  };
  stillGettingMessage: {
    message: 'Still getting this message?';
  };
  strong: {
    message: 'Strong';
  };
  stxCancelled: {
    message: 'Swap would have failed';
  };
  stxCancelledDescription: {
    message: 'Your transaction would have failed and was cancelled to protect you from paying unnecessary gas fees.';
  };
  stxCancelledSubDescription: {
    message: 'Try your swap again. We’ll be here to protect you against similar risks next time.';
  };
  stxEstimatedCompletion: {
    message: 'Estimated completion in < $1';
    description: '$1 is remeaning time in minutes and seconds, e.g. 0:10';
  };
  stxFailure: {
    message: 'Swap failed';
  };
  stxFailureDescription: {
    message: 'Sudden market changes can cause failures. If the problem persists, please reach out to $1.';
    description: 'This message is shown to a user if their swap fails. The $1 will be replaced by support.metamask.io';
  };
  stxOptInDescription: {
    message: 'Turn on Smart Transactions for more reliable and secure transactions, and adjustable fees on ETH Mainnet. $1';
  };
  stxPendingPrivatelySubmittingSwap: {
    message: 'Privately submitting your Swap...';
  };
  stxPendingPubliclySubmittingSwap: {
    message: 'Publicly submitting your Swap...';
  };
  stxSuccess: {
    message: 'Swap complete!';
  };
  stxSuccessDescription: {
    message: 'Your $1 is now available.';
    description: '$1 is a token symbol, e.g. ETH';
  };
  stxSwapCompleteIn: {
    message: 'Swap will complete in <';
    description: "'<' means 'less than', e.g. Swap will complete in < 2:59";
  };
  stxTryingToCancel: {
    message: 'Trying to cancel your transaction...';
  };
  stxUnknown: {
    message: 'Status unknown';
  };
  stxUnknownDescription: {
    message: 'A transaction has been successful but we’re unsure what it is. This may be due to submitting another transaction while this swap was processing.';
  };
  stxUserCancelled: {
    message: 'Swap cancelled';
  };
  stxUserCancelledDescription: {
    message: 'Your transaction has been cancelled and you did not pay any unnecessary gas fees.';
  };
  submit: {
    message: 'Submit';
  };
  submitted: {
    message: 'Submitted';
  };
  suggestedBy: {
    message: 'Suggested by';
  };
  suggestedTokenSymbol: {
    message: 'Suggested ticker symbol:';
  };
  support: {
    message: 'Support';
  };
  supportCenter: {
    message: 'Visit our support center';
  };
  surveyConversion: {
    message: 'Take our survey';
  };
  surveyTitle: {
    message: 'Shape the future of MetaMask';
  };
  swap: {
    message: 'Swap';
  };
  swapAdjustSlippage: {
    message: 'Adjust slippage';
  };
  swapAggregator: {
    message: 'Aggregator';
  };
  swapAllowSwappingOf: {
    message: 'Allow swapping of $1';
    description: 'Shows a user that they need to allow a token for swapping on their hardware wallet';
  };
  swapAmountReceived: {
    message: 'Guaranteed amount';
  };
  swapAmountReceivedInfo: {
    message: 'This is the minimum amount you will receive. You may receive more depending on slippage.';
  };
  swapAnyway: {
    message: 'Swap anyway';
  };
  swapApproval: {
    message: 'Approve $1 for swaps';
    description: 'Used in the transaction display list to describe a transaction that is an approve call on a token that is to be swapped.. $1 is the symbol of a token that has been approved.';
  };
  swapApproveNeedMoreTokens: {
    message: 'You need $1 more $2 to complete this swap';
    description: 'Tells the user how many more of a given token they need for a specific swap. $1 is an amount of tokens and $2 is the token symbol.';
  };
  swapAreYouStillThere: {
    message: 'Are you still there?';
  };
  swapAreYouStillThereDescription: {
    message: 'We’re ready to show you the latest quotes when you want to continue';
  };
  swapBuildQuotePlaceHolderText: {
    message: 'No tokens available matching $1';
    description: 'Tells the user that a given search string does not match any tokens in our token lists. $1 can be any string of text';
  };
  swapConfirmWithHwWallet: {
    message: 'Confirm with your hardware wallet';
  };
  swapContinueSwapping: {
    message: 'Continue swapping';
  };
  swapContractDataDisabledErrorDescription: {
    message: 'In the Ethereum app on your Ledger, go to "Settings" and allow contract data. Then, try your swap again.';
  };
  swapContractDataDisabledErrorTitle: {
    message: 'Contract data is not enabled on your Ledger';
  };
  swapCustom: {
    message: 'custom';
  };
  swapDecentralizedExchange: {
    message: 'Decentralized exchange';
  };
  swapDirectContract: {
    message: 'Direct contract';
  };
  swapEditLimit: {
    message: 'Edit limit';
  };
  swapEnableDescription: {
    message: 'This is required and gives MetaMask permission to swap your $1.';
    description: 'Gives the user info about the required approval transaction for swaps. $1 will be the symbol of a token being approved for swaps.';
  };
  swapEnableTokenForSwapping: {
    message: 'This will $1 for swapping';
    description: "$1 is for the 'enableToken' key, e.g. 'enable ETH'";
  };
  swapEnterAmount: {
    message: 'Enter an amount';
  };
  swapEstimatedNetworkFees: {
    message: 'Estimated network fees';
  };
  swapEstimatedNetworkFeesInfo: {
    message: 'This is an estimate of the network fee that will be used to complete your swap. The actual amount may change according to network conditions.';
  };
  swapFailedErrorDescriptionWithSupportLink: {
    message: 'Transaction failures happen and we are here to help. If this issue persists, you can reach our customer support at $1 for further assistance.';
    description: 'This message is shown to a user if their swap fails. The $1 will be replaced by support.metamask.io';
  };
  swapFailedErrorTitle: {
    message: 'Swap failed';
  };
  swapFetchingQuote: {
    message: 'Fetching quote';
  };
  swapFetchingQuoteNofN: {
    message: 'Fetching quote $1 of $2';
    description: 'A count of possible quotes shown to the user while they are waiting for quotes to be fetched. $1 is the number of quotes already loaded, and $2 is the total number of resources that we check for quotes. Keep in mind that not all resources will have a quote for a particular swap.';
  };
  swapFetchingQuotes: {
    message: 'Fetching quotes';
  };
  swapFetchingQuotesErrorDescription: {
    message: 'Hmmm... something went wrong. Try again, or if errors persist, contact customer support.';
  };
  swapFetchingQuotesErrorTitle: {
    message: 'Error fetching quotes';
  };
  swapFetchingTokens: {
    message: 'Fetching tokens...';
  };
  swapFromTo: {
    message: 'The swap of $1 to $2';
    description: 'Tells a user that they need to confirm on their hardware wallet a swap of 2 tokens. $1 is a source token and $2 is a destination token';
  };
  swapGasFeesDetails: {
    message: 'Gas fees are estimated and will fluctuate based on network traffic and transaction complexity.';
  };
  swapGasFeesLearnMore: {
    message: 'Learn more about gas fees';
  };
  swapGasFeesSplit: {
    message: 'Gas fees on the previous screen are split between these two transactions.';
  };
  swapGasFeesSummary: {
    message: 'Gas fees are paid to crypto miners who process transactions on the $1 network. MetaMask does not profit from gas fees.';
    description: '$1 is the selected network, e.g. Ethereum or BSC';
  };
  swapHighSlippage: {
    message: 'High slippage';
  };
  swapHighSlippageWarning: {
    message: 'Slippage amount is very high.';
  };
  swapIncludesMMFee: {
    message: 'Includes a $1% MetaMask fee.';
    description: 'Provides information about the fee that metamask takes for swaps. $1 is a decimal number.';
  };
  swapIncludesMetaMaskFeeViewAllQuotes: {
    message: 'Includes a $1% MetaMask fee – $2';
    description: 'Provides information about the fee that metamask takes for swaps. $1 is a decimal number and $2 is a link to view all quotes.';
  };
  swapLearnMore: {
    message: 'Learn more about Swaps';
  };
  swapLiquiditySourceInfo: {
    message: 'We search multiple liquidity sources (exchanges, aggregators and professional market makers) to compare exchange rates and network fees.';
  };
  swapLowSlippage: {
    message: 'Low slippage';
  };
  swapLowSlippageError: {
    message: 'Transaction may fail, max slippage too low.';
  };
  swapMaxSlippage: {
    message: 'Max slippage';
  };
  swapMetaMaskFee: {
    message: 'MetaMask fee';
  };
  swapMetaMaskFeeDescription: {
    message: "The fee of $1% is automatically factored into this quote. You pay it in exchange for a license to use MetaMask's liquidity provider information aggregation software.";
    description: 'Provides information about the fee that metamask takes for swaps. $1 is a decimal number.';
  };
  swapNQuotesWithDot: {
    message: '$1 quotes.';
    description: "$1 is the number of quotes that the user can select from when opening the list of quotes on the 'view quote' screen";
  };
  swapNewQuoteIn: {
    message: 'New quotes in $1';
    description: 'Tells the user the amount of time until the currently displayed quotes are update. $1 is a time that is counting down from 1:00 to 0:00';
  };
  swapNoTokensAvailable: {
    message: 'No tokens available matching $1';
    description: 'Tells the user that a given search string does not match any tokens in our token lists. $1 can be any string of text';
  };
  swapOnceTransactionHasProcess: {
    message: 'Your $1 will be added to your account once this transaction has processed.';
    description: 'This message communicates the token that is being transferred. It is shown on the awaiting swap screen. The $1 will be a token symbol.';
  };
  swapPriceDifference: {
    message: 'You are about to swap $1 $2 (~$3) for $4 $5 (~$6).';
    description: 'This message represents the price slippage for the swap.  $1 and $4 are a number (ex: 2.89), $2 and $5 are symbols (ex: ETH), and $3 and $6 are fiat currency amounts.';
  };
  swapPriceDifferenceTitle: {
    message: 'Price difference of ~$1%';
    description: '$1 is a number (ex: 1.23) that represents the price difference.';
  };
  swapPriceImpactTooltip: {
    message: 'Price impact is the difference between the current market price and the amount received during transaction execution. Price impact is a function of the size of your trade relative to the size of the liquidity pool.';
  };
  swapPriceUnavailableDescription: {
    message: 'Price impact could not be determined due to lack of market price data. Please confirm that you are comfortable with the amount of tokens you are about to receive before swapping.';
  };
  swapPriceUnavailableTitle: {
    message: 'Check your rate before proceeding';
  };
  swapProcessing: {
    message: 'Processing';
  };
  swapQuoteDetails: {
    message: 'Quote details';
  };
  swapQuoteNofM: {
    message: '$1 of $2';
    description: 'A count of possible quotes shown to the user while they are waiting for quotes to be fetched. $1 is the number of quotes already loaded, and $2 is the total number of resources that we check for quotes. Keep in mind that not all resources will have a quote for a particular swap.';
  };
  swapQuoteSource: {
    message: 'Quote source';
  };
  swapQuotesExpiredErrorDescription: {
    message: 'Please request new quotes to get the latest rates.';
  };
  swapQuotesExpiredErrorTitle: {
    message: 'Quotes timeout';
  };
  swapQuotesNotAvailableDescription: {
    message: 'Reduce the size of your trade or use a different token.';
  };
  swapQuotesNotAvailableErrorDescription: {
    message: 'Try adjusting the amount or slippage settings and try again.';
  };
  swapQuotesNotAvailableErrorTitle: {
    message: 'No quotes available';
  };
  swapRate: {
    message: 'Rate';
  };
  swapReceiving: {
    message: 'Receiving';
  };
  swapReceivingInfoTooltip: {
    message: 'This is an estimate. The exact amount depends on slippage.';
  };
  swapRequestForQuotation: {
    message: 'Request for quotation';
  };
  swapReviewSwap: {
    message: 'Review swap';
  };
  swapSearchNameOrAddress: {
    message: 'Search name or paste address';
  };
  swapSelect: {
    message: 'Select';
  };
  swapSelectAQuote: {
    message: 'Select a quote';
  };
  swapSelectAToken: {
    message: 'Select token';
  };
  swapSelectQuotePopoverDescription: {
    message: 'Below are all the quotes gathered from multiple liquidity sources.';
  };
  swapSelectToken: {
    message: 'Select token';
  };
  swapShowLatestQuotes: {
    message: 'Show latest quotes';
  };
  swapSlippageHighDescription: {
    message: 'The slippage entered ($1%) is considered very high and may result in a bad rate';
    description: '$1 is the amount of % for slippage';
  };
  swapSlippageHighTitle: {
    message: 'High slippage';
  };
  swapSlippageLowDescription: {
    message: 'A value this low ($1%) may result in a failed swap';
    description: '$1 is the amount of % for slippage';
  };
  swapSlippageLowTitle: {
    message: 'Low slippage';
  };
  swapSlippageNegative: {
    message: 'Slippage must be greater or equal to zero';
  };
  swapSlippageNegativeDescription: {
    message: 'Slippage must be greater or equal to zero';
  };
  swapSlippageNegativeTitle: {
    message: 'Increase slippage to continue';
  };
  swapSlippageOverLimitDescription: {
    message: 'Slippage tolerance must be 15% or less. Anything higher will result in a bad rate.';
  };
  swapSlippageOverLimitTitle: {
    message: 'Very high slippage';
  };
  swapSlippagePercent: {
    message: '$1%';
    description: '$1 is the amount of % for slippage';
  };
  swapSlippageTooltip: {
    message: 'If the price changes between the time your order is placed and confirmed it’s called “slippage”. Your swap will automatically cancel if slippage exceeds your “slippage tolerance” setting.';
  };
  swapSlippageZeroDescription: {
    message: 'There are fewer zero-slippage quote providers which will result in a less competitive quote.';
  };
  swapSlippageZeroTitle: {
    message: 'Sourcing zero-slippage providers';
  };
  swapSource: {
    message: 'Liquidity source';
  };
  swapSuggested: {
    message: 'Swap suggested';
  };
  swapSuggestedGasSettingToolTipMessage: {
    message: 'Swaps are complex and time sensitive transactions. We recommend this gas fee for a good balance between cost and confidence of a successful Swap.';
  };
  swapSwapFrom: {
    message: 'Swap from';
  };
  swapSwapSwitch: {
    message: 'Switch token order';
  };
  swapSwapTo: {
    message: 'Swap to';
  };
  swapToConfirmWithHwWallet: {
    message: 'to confirm with your hardware wallet';
  };
  swapTokenAddedManuallyDescription: {
    message: 'Verify this token on $1 and make sure it is the token you want to trade.';
    description: '$1 points the user to etherscan as a place they can verify information about a token. $1 is replaced with the translation for "etherscan"';
  };
  swapTokenAddedManuallyTitle: {
    message: 'Token added manually';
  };
  swapTokenAvailable: {
    message: 'Your $1 has been added to your account.';
    description: 'This message is shown after a swap is successful and communicates the exact amount of tokens the user has received for a swap. The $1 is a decimal number of tokens followed by the token symbol.';
  };
  swapTokenBalanceUnavailable: {
    message: 'We were unable to retrieve your $1 balance';
    description: 'This message communicates to the user that their balance of a given token is currently unavailable. $1 will be replaced by a token symbol';
  };
  swapTokenNotAvailable: {
    message: 'Token is not available to swap in this region';
  };
  swapTokenToToken: {
    message: 'Swap $1 to $2';
    description: 'Used in the transaction display list to describe a swap. $1 and $2 are the symbols of tokens in involved in a swap.';
  };
  swapTokenVerificationAddedManually: {
    message: 'This token has been added manually.';
  };
  swapTokenVerificationMessage: {
    message: 'Always confirm the token address on $1.';
    description: 'Points the user to Etherscan as a place they can verify information about a token. $1 is replaced with the translation for "Etherscan" followed by an info icon that shows more info on hover.';
  };
  swapTokenVerificationOnlyOneSource: {
    message: 'Only verified on 1 source.';
  };
  swapTokenVerificationSources: {
    message: 'Verified on $1 sources.';
    description: 'Indicates the number of token information sources that recognize the symbol + address. $1 is a decimal number.';
  };
  swapTokenVerifiedOn1SourceDescription: {
    message: '$1 is only verified on 1 source. Consider verifying it on $2 before proceeding.';
    description: '$1 is a token name, $2 points the user to etherscan as a place they can verify information about a token. $1 is replaced with the translation for "etherscan"';
  };
  swapTokenVerifiedOn1SourceTitle: {
    message: 'Potentially inauthentic token';
  };
  swapTooManyDecimalsError: {
    message: '$1 allows up to $2 decimals';
    description: '$1 is a token symbol and $2 is the max. number of decimals allowed for the token';
  };
  swapTransactionComplete: {
    message: 'Transaction complete';
  };
  swapTwoTransactions: {
    message: '2 transactions';
  };
  swapUnknown: {
    message: 'Unknown';
  };
  swapVerifyTokenExplanation: {
    message: "Multiple tokens can use the same name and symbol. Check $1 to verify this is the token you're looking for.";
    description: "This appears in a tooltip next to the verifyThisTokenOn message. It gives the user more information about why they should check the token on a block explorer. $1 will be the name or url of the block explorer, which will be the translation of 'etherscan' or a block explorer url specified for a custom network.";
  };
  swapYourTokenBalance: {
    message: '$1 $2 available to swap';
    description: 'Tells the user how much of a token they have in their balance. $1 is a decimal number amount of tokens, and $2 is a token symbol';
  };
  swapZeroSlippage: {
    message: '0% Slippage';
  };
  swapsAdvancedOptions: {
    message: 'Advanced options';
  };
  swapsExcessiveSlippageWarning: {
    message: 'Slippage amount is too high and will result in a bad rate. Please reduce your slippage tolerance to a value below 15%.';
  };
  swapsMaxSlippage: {
    message: 'Slippage tolerance';
  };
  swapsNotEnoughForTx: {
    message: 'Not enough $1 to complete this transaction';
    description: "Tells the user that they don't have enough of a token for a proposed swap. $1 is a token symbol";
  };
  swapsNotEnoughToken: {
    message: 'Not enough $1';
    description: "Tells the user that they don't have enough of a token for a proposed swap. $1 is a token symbol";
  };
  swapsViewInActivity: {
    message: 'View in activity';
  };
  switch: {
    message: 'Switch';
  };
  switchEthereumChainConfirmationDescription: {
    message: 'This will switch the selected network within MetaMask to a previously added network:';
  };
  switchEthereumChainConfirmationTitle: {
    message: 'Allow this site to switch the network?';
  };
  switchInputCurrency: {
    message: 'Switch input currency';
  };
  switchNetwork: {
    message: 'Switch network';
  };
  switchNetworks: {
    message: 'Switch networks';
  };
  switchToNetwork: {
    message: 'Switch to $1';
    description: '$1 represents the custom network that has previously been added';
  };
  switchToThisAccount: {
    message: 'Switch to this account';
  };
  switchedNetworkToastDecline: {
    message: "Don't show again";
  };
  switchedNetworkToastMessage: {
    message: '$1 is now active on $2';
    description: '$1 represents the account name, $2 represents the network name';
  };
  switchedTo: {
    message: "You're now using";
  };
  switchingNetworksCancelsPendingConfirmations: {
    message: 'Switching networks will cancel all pending confirmations';
  };
  symbol: {
    message: 'Symbol';
  };
  symbolBetweenZeroTwelve: {
    message: 'Symbol must be 11 characters or fewer.';
  };
  tenPercentIncreased: {
    message: '10% increase';
  };
  terms: {
    message: 'Terms of use';
  };
  termsOfService: {
    message: 'Terms of service';
  };
  termsOfUseAgreeText: {
    message: ' I agree to the Terms of Use, which apply to my use of MetaMask and all of its features';
  };
  termsOfUseFooterText: {
    message: 'Please scroll to read all sections';
  };
  termsOfUseTitle: {
    message: 'Our Terms of Use have updated';
  };
  testNetworks: {
    message: 'Test networks';
  };
  theme: {
    message: 'Theme';
  };
  themeDescription: {
    message: 'Choose your preferred MetaMask theme.';
  };
  thingsToKeep: {
    message: 'Keep in mind:';
  };
  thirdPartySoftware: {
    message: 'Third-party software notice';
    description: 'Title of a popup modal displayed when installing a snap for the first time.';
  };
  thisCollection: {
    message: 'this collection';
  };
  time: {
    message: 'Time';
  };
  tips: {
    message: 'Tips';
  };
  to: {
    message: 'To';
  };
  toAddress: {
    message: 'To: $1';
    description: '$1 is the address to include in the To label. It is typically shortened first using shortenAddress';
  };
  toggleEthSignBannerDescription: {
    message: 'You’re at risk for phishing attacks. Protect yourself by turning off eth_sign.';
  };
  toggleEthSignDescriptionField: {
    message: "If you enable this setting, you might get signature requests that aren’t readable. By signing a message you don't understand, you could be agreeing to give away your funds and NFTs.";
  };
  toggleEthSignField: {
    message: 'Eth_sign requests';
  };
  toggleEthSignModalBannerBoldText: {
    message: ' you might be getting scammed';
  };
  toggleEthSignModalBannerText: {
    message: "If you've been asked to turn this setting on,";
  };
  toggleEthSignModalCheckBox: {
    message: 'I understand that I can lose all of my funds and NFTs if I enable eth_sign requests. ';
  };
  toggleEthSignModalDescription: {
    message: 'Allowing eth_sign requests can make you vulnerable to phishing attacks. Always review the URL and be careful when signing  messages that contain code.';
  };
  toggleEthSignModalFormError: {
    message: 'The text is incorrect';
  };
  toggleEthSignModalFormLabel: {
    message: 'Enter “I only sign what I understand” to continue';
  };
  toggleEthSignModalFormValidation: {
    message: 'I only sign what I understand';
  };
  toggleEthSignModalTitle: {
    message: 'Use at your own risk';
  };
  toggleEthSignOff: {
    message: 'OFF (Recommended)';
  };
  toggleEthSignOn: {
    message: 'ON (Not recommended)';
  };
  toggleRequestQueueDescription: {
    message: 'This allows you to select a network for each site instead of a single selected network for all sites. This feature will prevent you from switching networks manually, which may break your user experience on certain sites.';
  };
  toggleRequestQueueField: {
    message: 'Select networks for each site';
  };
  toggleRequestQueueOff: {
    message: 'Off';
  };
  toggleRequestQueueOn: {
    message: 'On';
  };
  token: {
    message: 'Token';
  };
  tokenAddress: {
    message: 'Token address';
  };
  tokenAlreadyAdded: {
    message: 'Token has already been added.';
  };
  tokenAutoDetection: {
    message: 'Token autodetection';
  };
  tokenContractAddress: {
    message: 'Token contract address';
  };
  tokenDecimalFetchFailed: {
    message: 'Token decimal required. Find it on: $1';
  };
  tokenDecimalTitle: {
    message: 'Token decimal:';
  };
  tokenDetails: {
    message: 'Token details';
  };
  tokenFoundTitle: {
    message: '1 new token found';
  };
  tokenId: {
    message: 'Token ID';
  };
  tokenList: {
    message: 'Token lists:';
  };
  tokenScamSecurityRisk: {
    message: 'token scams and security risks';
  };
  tokenShowUp: {
    message: 'Your tokens may not automatically show up in your wallet. ';
  };
  tokenSymbol: {
    message: 'Token symbol';
  };
  tokens: {
    message: 'Tokens';
  };
  tokensFoundTitle: {
    message: '$1 new tokens found';
    description: '$1 is the number of new tokens detected';
  };
  tooltipApproveButton: {
    message: 'I understand';
  };
  tooltipSatusConnected: {
    message: 'connected';
  };
  tooltipSatusConnectedUpperCase: {
    message: 'Connected';
  };
  tooltipSatusNotConnected: {
    message: 'not connected';
  };
  total: {
    message: 'Total';
  };
  transaction: {
    message: 'transaction';
  };
  transactionCancelAttempted: {
    message: 'Transaction cancel attempted with estimated gas fee of $1 at $2';
  };
  transactionCancelSuccess: {
    message: 'Transaction successfully cancelled at $2';
  };
  transactionConfirmed: {
    message: 'Transaction confirmed at $2.';
  };
  transactionCreated: {
    message: 'Transaction created with a value of $1 at $2.';
  };
  transactionDetailDappGasMoreInfo: {
    message: 'Site suggested';
  };
  transactionDetailDappGasTooltip: {
    message: "Edit to use MetaMask's recommended gas fee based on the latest block.";
  };
  transactionDetailGasHeading: {
    message: 'Estimated gas fee';
  };
  transactionDetailGasTooltipConversion: {
    message: 'Learn more about gas fees';
  };
  transactionDetailGasTooltipExplanation: {
    message: 'Gas fees are set by the network and fluctuate based on network traffic and transaction complexity.';
  };
  transactionDetailGasTooltipIntro: {
    message: 'Gas fees are paid to crypto miners who process transactions on the $1 network. MetaMask does not profit from gas fees.';
  };
  transactionDetailGasTotalSubtitle: {
    message: 'Amount + gas fee';
  };
  transactionDetailLayer2GasHeading: {
    message: 'Layer 2 gas fee';
  };
  transactionDetailMultiLayerTotalSubtitle: {
    message: 'Amount + fees';
  };
  transactionDropped: {
    message: 'Transaction dropped at $2.';
  };
  transactionError: {
    message: 'Transaction error. Exception thrown in contract code.';
  };
  transactionErrorNoContract: {
    message: 'Trying to call a function on a non-contract address.';
  };
  transactionErrored: {
    message: 'Transaction encountered an error.';
  };
  transactionFailed: {
    message: 'Transaction Failed';
  };
  transactionFee: {
    message: 'Transaction fee';
  };
  transactionHistoryBaseFee: {
    message: 'Base fee (GWEI)';
  };
  transactionHistoryL1GasLabel: {
    message: 'Total L1 gas fee';
  };
  transactionHistoryL2GasLimitLabel: {
    message: 'L2 gas limit';
  };
  transactionHistoryL2GasPriceLabel: {
    message: 'L2 gas price';
  };
  transactionHistoryMaxFeePerGas: {
    message: 'Max fee per gas';
  };
  transactionHistoryPriorityFee: {
    message: 'Priority fee (GWEI)';
  };
  transactionHistoryTotalGasFee: {
    message: 'Total gas fee';
  };
  transactionNote: {
    message: 'Transaction note';
  };
  transactionResubmitted: {
    message: 'Transaction resubmitted with estimated gas fee increased to $1 at $2';
  };
  transactionSettings: {
    message: 'Transaction settings';
  };
  transactionSubmitted: {
    message: 'Transaction submitted with estimated gas fee of $1 at $2.';
  };
  transactionUpdated: {
    message: 'Transaction updated at $2.';
  };
  transactions: {
    message: 'Transactions';
  };
  transfer: {
    message: 'Transfer';
  };
  transferFrom: {
    message: 'Transfer from';
  };
  troubleConnectingToLedgerU2FOnFirefox: {
    message: "We're having trouble connecting your Ledger. $1";
    description: '$1 is a link to the wallet connection guide;';
  };
  troubleConnectingToLedgerU2FOnFirefox2: {
    message: 'Review our hardware wallet connection guide and try again.';
    description: '$1 of the ledger wallet connection guide';
  };
  troubleConnectingToLedgerU2FOnFirefoxLedgerSolution: {
    message: "If you're on the latest version of Firefox, you might be experiencing an issue related to Firefox dropping U2F support. Learn how to fix this issue $1.";
    description: 'It is a link to the ledger website for the workaround.';
  };
  troubleConnectingToLedgerU2FOnFirefoxLedgerSolution2: {
    message: 'here';
    description: 'Second part of the error message; It is a link to the ledger website for the workaround.';
  };
  troubleConnectingToWallet: {
    message: 'We had trouble connecting to your $1, try reviewing $2 and try again.';
    description: '$1 is the wallet device name; $2 is a link to wallet connection guide';
  };
  troubleStarting: {
    message: 'MetaMask had trouble starting. This error could be intermittent, so try restarting the extension.';
  };
  trustSiteApprovePermission: {
    message: 'By granting permission, you are allowing the following $1 to access your funds';
  };
  tryAgain: {
    message: 'Try again';
  };
  turnOnTokenDetection: {
    message: 'Turn on enhanced token detection';
  };
  tutorial: {
    message: 'Tutorial';
  };
  twelveHrTitle: {
    message: '12hr:';
  };
  typeYourSRP: {
    message: 'Type your Secret Recovery Phrase';
  };
  u2f: {
    message: 'U2F';
    description: 'A name on an API for the browser to interact with devices that support the U2F protocol. On some browsers we use it to connect MetaMask to Ledger devices.';
  };
  unapproved: {
    message: 'Unapproved';
  };
  units: {
    message: 'units';
  };
  unknown: {
    message: 'Unknown';
  };
  unknownCollection: {
    message: 'Unnamed collection';
  };
  unknownNetwork: {
    message: 'Unknown private network';
  };
  unknownNetworkForKeyEntropy: {
    message: 'Unknown network';
    description: 'Displayed on places like Snap install warning when regular name is not available.';
  };
  unknownQrCode: {
    message: "Error: We couldn't identify that QR code";
  };
  unlimited: {
    message: 'Unlimited';
  };
  unlock: {
    message: 'Unlock';
  };
  unlockMessage: {
    message: 'The decentralized web awaits';
  };
  unpin: {
    message: 'Unpin';
  };
  unrecognizedChain: {
    message: 'This custom network is not recognized';
    description: "$1 is a clickable link with text defined by the 'unrecognizedChanLinkText' key. The link will open to instructions for users to validate custom network details.";
  };
  unsendableAsset: {
    message: 'Sending NFT (ERC-721) tokens is not currently supported';
    description: "This is an error message we show the user if they attempt to send an NFT asset type, for which currently don't support sending";
  };
  unverifiedContractAddressMessage: {
    message: 'We cannot verify this contract. Make sure you trust this address.';
  };
  upArrow: {
    message: 'up arrow';
  };
  update: {
    message: 'Update';
  };
  updateRequest: {
    message: 'Update request';
  };
  updatedWithDate: {
    message: 'Updated $1';
  };
  urlErrorMsg: {
    message: 'URLs require the appropriate HTTP/HTTPS prefix.';
  };
  urlExistsErrorMsg: {
    message: 'This URL is currently used by the $1 network.';
  };
  use4ByteResolution: {
    message: 'Decode smart contracts';
  };
  use4ByteResolutionDescription: {
    message: "To improve user experience, we customize the activity tab with messages based on the smart contracts you interact with. MetaMask uses a service called 4byte.directory to decode data and show you a version of a smart contract that's easier to read. This helps reduce your chances of approving malicious smart contract actions, but can result in your IP address being shared.";
  };
  useMultiAccountBalanceChecker: {
    message: 'Batch account balance requests';
  };
  useMultiAccountBalanceCheckerSettingDescription: {
    message: 'Get faster balance updates by batching account balance requests. This lets us fetch your account balances together, so you get quicker updates for an improved experience. When this feature is off, third parties may be less likely to associate your accounts with each other.';
  };
  useNftDetection: {
    message: 'Autodetect NFTs';
  };
  useNftDetectionDescriptionText: {
    message: 'Let MetaMask add NFTs you own using third-party services (like OpenSea). Autodetecting NFTs exposes your IP and account address to these services. Enabling this feature could associate your IP address with your Ethereum address and display fake NFTs airdropped by scammers. You can add tokens manually to avoid this risk.';
  };
  usePhishingDetection: {
    message: 'Use phishing detection';
  };
  usePhishingDetectionDescription: {
    message: 'Display a warning for phishing domains targeting Ethereum users';
  };
  useSafeChainsListValidation: {
    message: 'Network details check';
  };
  useSafeChainsListValidationDescription: {
    message: 'MetaMask uses a third-party service called $1 to show accurate and standardized network details. This reduces your chances of connecting to malicious or incorrect network. When using this feature, your IP address is exposed to chainid.network.';
  };
  useSafeChainsListValidationWebsite: {
    message: 'chainid.network';
    description: 'useSafeChainsListValidationWebsite is separated from the rest of the text so that we can bold the third party service name in the middle of them';
  };
  useSiteSuggestion: {
    message: 'Use site suggestion';
  };
  useTokenDetectionPrivacyDesc: {
    message: 'Automatically displaying tokens sent to your account involves communication with third party servers to fetch token’s images. Those serves will have access to your IP address.';
  };
  usedByClients: {
    message: 'Used by a variety of different clients';
  };
  userName: {
    message: 'Username';
  };
  userOpContractDeployError: {
    message: 'Contract deployment from a smart contract account is not supported';
  };
  verifyContractDetails: {
    message: 'Verify third-party details';
  };
  verifyThisTokenOn: {
    message: 'Verify this token on $1';
    description: 'Points the user to etherscan as a place they can verify information about a token. $1 is replaced with the translation for "etherscan"';
  };
  verifyThisUnconfirmedTokenOn: {
    message: 'Verify this token on $1 and make sure this is the token you want to trade.';
    description: 'Points the user to etherscan as a place they can verify information about a token. $1 is replaced with the translation for "etherscan"';
  };
  version: {
    message: 'Version';
  };
  view: {
    message: 'View';
  };
  viewActivity: {
    message: 'View activity';
  };
  viewAllDetails: {
    message: 'View all details';
  };
  viewAllQuotes: {
    message: 'view all quotes';
  };
  viewContact: {
    message: 'View contact';
  };
  viewDetails: {
    message: 'View details';
  };
  viewFullTransactionDetails: {
    message: 'View full transaction details';
  };
  viewMore: {
    message: 'View more';
  };
  viewOnBlockExplorer: {
    message: 'View on block explorer';
  };
  viewOnCustomBlockExplorer: {
    message: 'View $1 at $2';
    description: '$1 is the action type. e.g (Account, Transaction, Swap) and $2 is the Custom Block Explorer URL';
  };
  viewOnEtherscan: {
    message: 'View $1 on Etherscan';
    description: '$1 is the action type. e.g (Account, Transaction, Swap)';
  };
  viewOnExplorer: {
    message: 'View on explorer';
  };
  viewOnOpensea: {
    message: 'View on Opensea';
  };
  viewTransaction: {
    message: 'View  transaction';
  };
  viewinCustodianApp: {
    message: 'View in custodian app';
  };
  viewinExplorer: {
    message: 'View $1 in explorer';
    description: '$1 is the action type. e.g (Account, Transaction, Swap)';
  };
  visitSite: {
    message: 'Visit site';
  };
  visitWebSite: {
    message: 'Visit our website';
  };
  wallet: {
    message: 'Wallet';
  };
  walletConnectionGuide: {
    message: 'our hardware wallet connection guide';
  };
  walletCreationSuccessDetail: {
    message: 'You’ve successfully protected your wallet. Keep your Secret Recovery Phrase safe and secret -- it’s your responsibility!';
  };
  walletCreationSuccessReminder1: {
    message: 'MetaMask can’t recover your Secret Recovery Phrase.';
  };
  walletCreationSuccessReminder2: {
    message: 'MetaMask will never ask you for your Secret Recovery Phrase.';
  };
  walletCreationSuccessReminder3: {
    message: '$1 with anyone or risk your funds being stolen';
    description: '$1 is separated as walletCreationSuccessReminder3BoldSection so that we can bold it';
  };
  walletCreationSuccessReminder3BoldSection: {
    message: 'Never share your Secret Recovery Phrase';
    description: 'This string is localized separately from walletCreationSuccessReminder3 so that we can bold it';
  };
  walletCreationSuccessTitle: {
    message: 'Wallet creation successful';
  };
  wantToAddThisNetwork: {
    message: 'Want to add this network?';
  };
  wantsToAddThisAsset: {
    message: 'This allows the following asset to be added to your wallet.';
  };
  warning: {
    message: 'Warning';
  };
  warningFromSnap: {
    message: 'Warning from $1';
    description: '$1 represents the name of the snap';
  };
  warningTooltipText: {
    message: '$1 The third party could spend your entire token balance without further notice or consent. Protect yourself by customizing a lower spending cap.';
    description: "$1 is a warning icon with text 'Be careful' in 'warning' colour";
  };
  weak: {
    message: 'Weak';
  };
  web3ShimUsageNotification: {
    message: 'We noticed that the current website tried to use the removed window.web3 API. If the site appears to be broken, please click $1 for more information.';
    description: '$1 is a clickable link.';
  };
  webhid: {
    message: 'WebHID';
    description: 'Refers to a interface for connecting external devices to the browser. Used for connecting ledger to the browser. Read more here https://developer.mozilla.org/en-US/docs/Web/API/WebHID_API';
  };
  websites: {
    message: 'websites';
    description: "Used in the 'permission_rpc' message.";
  };
  welcomeBack: {
    message: 'Welcome back!';
  };
  welcomeExploreDescription: {
    message: 'Store, send and spend crypto currencies and assets.';
  };
  welcomeExploreTitle: {
    message: 'Explore decentralized apps';
  };
  welcomeLoginDescription: {
    message: 'Use your MetaMask to login to decentralized apps - no signup needed.';
  };
  welcomeLoginTitle: {
    message: 'Say hello to your wallet';
  };
  welcomeToMetaMask: {
    message: "Let's get started";
  };
  welcomeToMetaMaskIntro: {
    message: 'Trusted by millions, MetaMask is a secure wallet making the world of web3 accessible to all.';
  };
  whatsNew: {
    message: "What's new";
    description: 'This is the title of a popup that gives users notifications about new features and updates to MetaMask.';
  };
  whatsThis: {
    message: "What's this?";
  };
  xOfYPending: {
    message: '$1 of $2 pending';
    description: '$1 and $2 are intended to be two numbers, where $2 is a total number of pending confirmations, and $1 is a count towards that total';
  };
  yes: {
    message: 'Yes';
  };
  youHaveAddedAll: {
    message: "You've added all the popular networks. You can discover more networks $1 Or you can $2";
    description: "$1 is a link with the text 'here' and $2 is a button with the text 'add more networks manually'";
  };
  youNeedToAllowCameraAccess: {
    message: 'You need to allow camera access to use this feature.';
  };
  youSign: {
    message: 'You are signing';
  };
  yourAccounts: {
    message: 'Your accounts';
  };
  yourFundsMayBeAtRisk: {
    message: 'Your funds may be at risk';
  };
  yourNFTmayBeAtRisk: {
    message: 'Your NFT may be at risk';
  };
  yourPrivateSeedPhrase: {
    message: 'Your Secret Recovery Phrase';
  };
  yourTransactionConfirmed: {
    message: 'Transaction already confirmed';
  };
  yourTransactionJustConfirmed: {
    message: "We weren't able to cancel your transaction before it was confirmed on the blockchain.";
  };
  zeroGasPriceOnSpeedUpError: {
    message: 'Zero gas price on speed up';
  };
};

export default schema;
