import type { CustomerModel } from './CustomerModel';
import type {
  ApplePayButtonStyle,
  ApplePayButtonType,
  CloseButtonStyle,
  FlippingStatus,
  LocaleIdentifier,
  PaymentType,
  SdkMode,
  ShowSaveCreditCard,
  TransactionModeType,
} from './enums';
import type { PaymentItemModel } from './PaymentItemModel';
import type { ShippingModel } from './ShippingModel';
import type { TaxesModel } from './TaxesModel';

export type CheckoutSDKConfig = {
  secretKey: string;
  bundleID: string;
  localeIdentifier: LocaleIdentifier;
  flippingStatus: FlippingStatus;
  amount: number;
  items: PaymentItemModel[];
  swipeDownToDismiss: boolean;
  paymentType?: PaymentType[];
  closeButtonStyle?: CloseButtonStyle;
  showDragHandler: boolean;
  transactionMode: TransactionModeType;
  customer: CustomerModel;
  tapMerchantID?: string;
  taxes?: TaxesModel;
  shipping?: ShippingModel;
  require3DSecure: boolean;
  sdkMode: SdkMode;
  collectCreditCardName: true;
  showSaveCreditCard: ShowSaveCreditCard;
  isSubscription: false;
  recurringPaymentRequest: boolean;
  applePayButtonType: ApplePayButtonType;
  applePayButtonStyle: ApplePayButtonStyle;
};
