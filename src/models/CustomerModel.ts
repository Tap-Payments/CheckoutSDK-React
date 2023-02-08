import type { AddressModel } from './AddressModel';
import type { TapCurrencyCode } from './enums/TapCurrencyCode';

export type CustomerModel = {
  identifier?: string;

  emailAddress?: { value: string };

  phoneNumber?: { country_code: string; number: number };

  firstName?: string;

  /// Customer's address
  address?: AddressModel;

  /// Customer's middle name.
  middleName?: string;

  /// Customer's last name.
  lastName?: string;

  /// An arbitrary string attached to the object. Often useful for displaying to users.
  descriptionText?: string;

  metadata?: Record<string, any>;

  /// Customer title.
  title?: string;

  /// Customer's nationality.
  nationality?: string;

  currency?: TapCurrencyCode;

  locale?: string;
};
