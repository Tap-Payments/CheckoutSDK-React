import type { AmountModificationModel } from './AmountModificationModel';

export type TaxesModel = {
  title: string;
  descriptionText?: string;
  amount: AmountModificationModel;
};
