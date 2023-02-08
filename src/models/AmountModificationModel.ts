import type { AmountModificationModelType } from './enums/sdkEnums';

export type AmountModificationModel = {
  type?: AmountModificationModelType;
  value?: number;
  minFee: number;
  maxFee: number;
};
