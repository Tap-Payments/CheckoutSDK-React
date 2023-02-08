export enum AddressType {
  residential,
  commercial,
}

export enum ApplePayButtonStyle {
  black = 'Black',
  white = 'White',
  whiteOutline = 'WhiteOutline',
  auto = 'Auto',
}

export enum AmountModificationModelType {
  percentage,
  fixed,
}

export enum ApplePayButtonType {
  appleLogoOnly = 'AppleLogoOnly',
  buyWithApplePay = 'BuyWithApplePay',
  setupApplePay = 'SetupApplePay',
  payWithApplePay = 'PayWithApplePay',
  donateWithApplePay = 'DonateWithApplePay',
  checkoutWithApplePay = 'CheckoutWithApplePay',
  bookWithApplePay = 'BookWithApplePay',
  subscribeWithApplePay = 'SubscribeWithApplePay',
}

export enum CloseButtonStyle {
  icon = 1,
  title = 2,
}

export enum FlippingStatus {
  noFlipping = 'NoFlipping',
  flipOnLoadWithFlippingBack = 'FlipOnLoadWithFlippingBack',
  flipOnLoadWithOutFlippingBack = 'FlipOnLoadWithOutFlippingBack',
}

export enum PaymentType {
  all = 1,
  web = 2,
  card = 3,
  telecom = 4,
  applePay = 5,
  device = 6,
  savedCard = 7,
}

export enum ShowSaveCreditCard {
  none = 'None',
  merchant = 'Merchant',
  tap = 'Tap',
  all = 'All',
}

export enum LocaleIdentifier {
  ar,
  en,
}

export enum TransactionModeType {
  purchase = 'PURCHASE',
  authorizeCapture = 'AUTHORIZE_CAPTURE',
  cardSaving = 'SAVE_CARD',
  cardTokenization = 'TOKENIZE_CARD',
}

export enum SdkMode {
  production,
  sandbox,
}
