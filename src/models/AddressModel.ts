import type { AddressType } from './enums/sdkEnums';

export type AddressModel = {
  type?: AddressType;
  country?: string;
  line1?: string;
  line2?: string;
  line3?: string;
  line4?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  countryGovernorate?: string;
  area?: string;
  block?: string;
  avenue?: string;
  street?: string;
  buildingHouse?: string;
  floor?: string;
  apartment?: string;
  office?: string;
  postalBox?: string;
  postalCode?: string;
};
