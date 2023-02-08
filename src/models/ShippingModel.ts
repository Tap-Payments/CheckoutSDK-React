import type { AddressModel } from './AddressModel';
import type { ShippingProviderModel } from './ShippingProviderModel';
import type { TapCurrencyCode } from './enums/TapCurrencyCode';

export type ShippingModel = {
  name: string;
  descriptionText?: string;
  amount: number;
  currency: TapCurrencyCode;
  recipientName?: string;
  address?: AddressModel;
  provider?: ShippingProviderModel;
};
