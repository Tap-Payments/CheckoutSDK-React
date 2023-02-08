import type { AmountModificationModel } from './AmountModificationModel';
import type { TapCurrencyCode } from './enums/TapCurrencyCode';
import type { TaxesModel } from './TaxesModel';

export type PaymentItemModel = {
  title?: string;
  itemDescription?: string;
  productID?: string;
  fulfillmentService?: string;
  category?: string;
  itemCode?: string;
  tags?: string;
  accountCode?: string;
  requiresShipping?: boolean;
  price?: number;
  discount?: AmountModificationModel[];
  taxes?: TaxesModel[];
  totalAmount?: number;
  quantity?: number;
  currency?: TapCurrencyCode;
};
