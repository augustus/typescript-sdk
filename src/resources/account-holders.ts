// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class AccountHolders extends APIResource {
  /**
   * Creates a new account holder and starts asynchronous processing.
   *
   * @example
   * ```ts
   * const accountHolder = await client.accountHolders.create({
   *   account_program_id:
   *     '550e8400-e29b-41d4-a716-446655440002',
   *   beneficiary_data: {
   *     country_of_citizenship: 'US',
   *     date_of_birth: '1990-01-15',
   *     identification: { type: 'ssn', value: '123-45-6789' },
   *     legal_name: 'Jordan Rivera',
   *     residential_address: {
   *       city: 'San Francisco',
   *       country: 'US',
   *       postal_code: '94103',
   *       state: 'CA',
   *       street_line_1: '548 Market St',
   *     },
   *   },
   *   holder_type: 'natural_person',
   * });
   * ```
   */
  create(body: AccountHolderCreateParams, options?: RequestOptions): APIPromise<AccountHolderCreateResponse> {
    return this._client.post('/v1/account_holders', { body, ...options });
  }

  /**
   * Retrieves an account holder by ID.
   *
   * @example
   * ```ts
   * const accountHolder = await client.accountHolders.retrieve(
   *   '68e0a1b2c3d4e5f60718293a',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<AccountHolderRetrieveResponse> {
    return this._client.get(path`/v1/account_holders/${id}`, options);
  }

  /**
   * Replaces the beneficiary details of an existing account holder.
   *
   * @example
   * ```ts
   * const accountHolder = await client.accountHolders.update(
   *   '68e0a1b2c3d4e5f60718293a',
   *   {
   *     beneficiary_data: {
   *       country_of_citizenship: 'US',
   *       date_of_birth: '1990-01-15',
   *       identification: { type: 'ssn', value: '123-45-6789' },
   *       legal_name: 'Jordan Rivera',
   *       residential_address: {
   *         city: 'San Francisco',
   *         country: 'US',
   *         postal_code: '94103',
   *         state: 'CA',
   *         street_line_1: '548 Market St',
   *       },
   *     },
   *   },
   * );
   * ```
   */
  update(
    id: string,
    body: AccountHolderUpdateParams,
    options?: RequestOptions,
  ): APIPromise<AccountHolderUpdateResponse> {
    return this._client.post(path`/v1/account_holders/${id}`, { body, ...options });
  }

  /**
   * Lists account holders for the merchant with cursor-based pagination.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const accountHolderListResponse of client.accountHolders.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: AccountHolderListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<AccountHolderListResponsesCursorPage, AccountHolderListResponse> {
    return this._client.getAPIList('/v1/account_holders', CursorPage<AccountHolderListResponse>, {
      query,
      ...options,
    });
  }
}

export type AccountHolderListResponsesCursorPage = CursorPage<AccountHolderListResponse>;

export interface AccountHolderCreateResponse {
  /**
   * Unique identifier of the account holder.
   */
  id: string;

  /**
   * Beneficiary details used to create this account holder.
   */
  beneficiary_data:
    | AccountHolderCreateResponse.UsBeneficiaryDataResponse
    | AccountHolderCreateResponse.NonUsBeneficiaryDataResponse
    | AccountHolderCreateResponse.BusinessBeneficiaryDataResponse;

  /**
   * ISO 8601 UTC timestamp when the account holder was created.
   */
  created_at: string;

  /**
   * Type of the account holder.
   */
  holder_type: 'natural_person' | 'business';

  /**
   * Current account holder status.
   */
  status: 'pending' | 'active' | 'closed';

  /**
   * Resource type discriminator.
   */
  type: 'account_holder';
}

export namespace AccountHolderCreateResponse {
  export interface UsBeneficiaryDataResponse {
    /**
     * ISO 3166-1 alpha-2 country code of citizenship.
     */
    country_of_citizenship: 'US';

    /**
     * Date of birth as an ISO 8601 calendar date (YYYY-MM-DD).
     */
    date_of_birth: string;

    /**
     * Government-issued identification with type: "ssn" (Social Security Number,
     * format ###-##-####) or "itin" (Individual Taxpayer ID, format 9##-##-####).
     */
    identification:
      | UsBeneficiaryDataResponse.SsnIdentification
      | UsBeneficiaryDataResponse.ItinIdentification;

    /**
     * Full legal name of the account holder.
     */
    legal_name: string;

    /**
     * Residential address of the account holder.
     */
    residential_address:
      | UsBeneficiaryDataResponse.UsResidentialAddressResponse
      | UsBeneficiaryDataResponse.NonUsResidentialAddressResponse;
  }

  export namespace UsBeneficiaryDataResponse {
    export interface SsnIdentification {
      type: 'ssn';

      value: string;
    }

    export interface ItinIdentification {
      type: 'itin';

      value: string;
    }

    export interface UsResidentialAddressResponse {
      /**
       * City name.
       */
      city: string;

      /**
       * ISO 3166-1 alpha-2 country code.
       */
      country: 'US';

      /**
       * Postal or ZIP code.
       */
      postal_code: string;

      /**
       * Two-letter state code.
       */
      state: string;

      /**
       * Primary street address.
       */
      street_line_1: string;

      /**
       * Secondary street address (apartment, suite, etc.).
       */
      street_line_2: string | null;
    }

    export interface NonUsResidentialAddressResponse {
      /**
       * City name.
       */
      city: string;

      /**
       * ISO 3166-1 alpha-2 country code.
       */
      country:
        | 'AF'
        | 'AL'
        | 'DZ'
        | 'AS'
        | 'AD'
        | 'AO'
        | 'AI'
        | 'AQ'
        | 'AG'
        | 'AR'
        | 'AM'
        | 'AW'
        | 'AU'
        | 'AT'
        | 'AZ'
        | 'BS'
        | 'BH'
        | 'BD'
        | 'BB'
        | 'BY'
        | 'BE'
        | 'BZ'
        | 'BJ'
        | 'BM'
        | 'BT'
        | 'BO'
        | 'BA'
        | 'BW'
        | 'BV'
        | 'BR'
        | 'IO'
        | 'BN'
        | 'BG'
        | 'BF'
        | 'BI'
        | 'KH'
        | 'CM'
        | 'CA'
        | 'CV'
        | 'KY'
        | 'CF'
        | 'TD'
        | 'CL'
        | 'CN'
        | 'CX'
        | 'CC'
        | 'CO'
        | 'KM'
        | 'CG'
        | 'CD'
        | 'CK'
        | 'CR'
        | 'CI'
        | 'HR'
        | 'CU'
        | 'CY'
        | 'CZ'
        | 'DK'
        | 'DJ'
        | 'DM'
        | 'DO'
        | 'EC'
        | 'EG'
        | 'SV'
        | 'GQ'
        | 'ER'
        | 'EE'
        | 'ET'
        | 'FK'
        | 'FO'
        | 'FJ'
        | 'FI'
        | 'FR'
        | 'GF'
        | 'PF'
        | 'TF'
        | 'GA'
        | 'GM'
        | 'GE'
        | 'DE'
        | 'GH'
        | 'GI'
        | 'GR'
        | 'GL'
        | 'GD'
        | 'GP'
        | 'GU'
        | 'GT'
        | 'GN'
        | 'GW'
        | 'GY'
        | 'HT'
        | 'HM'
        | 'VA'
        | 'HN'
        | 'HK'
        | 'HU'
        | 'IS'
        | 'IN'
        | 'ID'
        | 'IR'
        | 'IQ'
        | 'IE'
        | 'IL'
        | 'IT'
        | 'JM'
        | 'JP'
        | 'JO'
        | 'KZ'
        | 'KE'
        | 'KI'
        | 'KP'
        | 'KR'
        | 'KW'
        | 'KG'
        | 'LA'
        | 'LV'
        | 'LB'
        | 'LS'
        | 'LR'
        | 'LY'
        | 'LI'
        | 'LT'
        | 'LU'
        | 'MO'
        | 'MG'
        | 'MW'
        | 'MY'
        | 'MV'
        | 'ML'
        | 'MT'
        | 'MH'
        | 'MQ'
        | 'MR'
        | 'MU'
        | 'YT'
        | 'MX'
        | 'FM'
        | 'MD'
        | 'MC'
        | 'MN'
        | 'MS'
        | 'MA'
        | 'MZ'
        | 'MM'
        | 'NA'
        | 'NR'
        | 'NP'
        | 'NL'
        | 'NC'
        | 'NZ'
        | 'NI'
        | 'NE'
        | 'NG'
        | 'NU'
        | 'NF'
        | 'MP'
        | 'MK'
        | 'NO'
        | 'OM'
        | 'PK'
        | 'PW'
        | 'PS'
        | 'PA'
        | 'PG'
        | 'PY'
        | 'PE'
        | 'PH'
        | 'PN'
        | 'PL'
        | 'PT'
        | 'PR'
        | 'QA'
        | 'RE'
        | 'RO'
        | 'RU'
        | 'RW'
        | 'SH'
        | 'KN'
        | 'LC'
        | 'PM'
        | 'VC'
        | 'WS'
        | 'SM'
        | 'ST'
        | 'SA'
        | 'SN'
        | 'SC'
        | 'SL'
        | 'SG'
        | 'SK'
        | 'SI'
        | 'SB'
        | 'SO'
        | 'ZA'
        | 'GS'
        | 'ES'
        | 'LK'
        | 'SD'
        | 'SR'
        | 'SJ'
        | 'SZ'
        | 'SE'
        | 'CH'
        | 'SY'
        | 'TW'
        | 'TJ'
        | 'TZ'
        | 'TH'
        | 'TL'
        | 'TG'
        | 'TK'
        | 'TO'
        | 'TT'
        | 'TN'
        | 'TR'
        | 'TM'
        | 'TC'
        | 'TV'
        | 'UG'
        | 'UA'
        | 'AE'
        | 'GB'
        | 'UM'
        | 'UY'
        | 'UZ'
        | 'VU'
        | 'VE'
        | 'VN'
        | 'VG'
        | 'VI'
        | 'WF'
        | 'EH'
        | 'YE'
        | 'ZM'
        | 'ZW'
        | 'AX'
        | 'BQ'
        | 'CW'
        | 'GG'
        | 'IM'
        | 'JE'
        | 'ME'
        | 'BL'
        | 'MF'
        | 'RS'
        | 'SX'
        | 'SS'
        | 'XK';

      /**
       * Postal or ZIP code.
       */
      postal_code: string;

      /**
       * Primary street address.
       */
      street_line_1: string;

      /**
       * Secondary street address (apartment, suite, etc.).
       */
      street_line_2: string | null;
    }
  }

  export interface NonUsBeneficiaryDataResponse {
    /**
     * ISO 3166-1 alpha-2 country code of citizenship.
     */
    country_of_citizenship:
      | 'AF'
      | 'AL'
      | 'DZ'
      | 'AS'
      | 'AD'
      | 'AO'
      | 'AI'
      | 'AQ'
      | 'AG'
      | 'AR'
      | 'AM'
      | 'AW'
      | 'AU'
      | 'AT'
      | 'AZ'
      | 'BS'
      | 'BH'
      | 'BD'
      | 'BB'
      | 'BY'
      | 'BE'
      | 'BZ'
      | 'BJ'
      | 'BM'
      | 'BT'
      | 'BO'
      | 'BA'
      | 'BW'
      | 'BV'
      | 'BR'
      | 'IO'
      | 'BN'
      | 'BG'
      | 'BF'
      | 'BI'
      | 'KH'
      | 'CM'
      | 'CA'
      | 'CV'
      | 'KY'
      | 'CF'
      | 'TD'
      | 'CL'
      | 'CN'
      | 'CX'
      | 'CC'
      | 'CO'
      | 'KM'
      | 'CG'
      | 'CD'
      | 'CK'
      | 'CR'
      | 'CI'
      | 'HR'
      | 'CU'
      | 'CY'
      | 'CZ'
      | 'DK'
      | 'DJ'
      | 'DM'
      | 'DO'
      | 'EC'
      | 'EG'
      | 'SV'
      | 'GQ'
      | 'ER'
      | 'EE'
      | 'ET'
      | 'FK'
      | 'FO'
      | 'FJ'
      | 'FI'
      | 'FR'
      | 'GF'
      | 'PF'
      | 'TF'
      | 'GA'
      | 'GM'
      | 'GE'
      | 'DE'
      | 'GH'
      | 'GI'
      | 'GR'
      | 'GL'
      | 'GD'
      | 'GP'
      | 'GU'
      | 'GT'
      | 'GN'
      | 'GW'
      | 'GY'
      | 'HT'
      | 'HM'
      | 'VA'
      | 'HN'
      | 'HK'
      | 'HU'
      | 'IS'
      | 'IN'
      | 'ID'
      | 'IR'
      | 'IQ'
      | 'IE'
      | 'IL'
      | 'IT'
      | 'JM'
      | 'JP'
      | 'JO'
      | 'KZ'
      | 'KE'
      | 'KI'
      | 'KP'
      | 'KR'
      | 'KW'
      | 'KG'
      | 'LA'
      | 'LV'
      | 'LB'
      | 'LS'
      | 'LR'
      | 'LY'
      | 'LI'
      | 'LT'
      | 'LU'
      | 'MO'
      | 'MG'
      | 'MW'
      | 'MY'
      | 'MV'
      | 'ML'
      | 'MT'
      | 'MH'
      | 'MQ'
      | 'MR'
      | 'MU'
      | 'YT'
      | 'MX'
      | 'FM'
      | 'MD'
      | 'MC'
      | 'MN'
      | 'MS'
      | 'MA'
      | 'MZ'
      | 'MM'
      | 'NA'
      | 'NR'
      | 'NP'
      | 'NL'
      | 'NC'
      | 'NZ'
      | 'NI'
      | 'NE'
      | 'NG'
      | 'NU'
      | 'NF'
      | 'MP'
      | 'MK'
      | 'NO'
      | 'OM'
      | 'PK'
      | 'PW'
      | 'PS'
      | 'PA'
      | 'PG'
      | 'PY'
      | 'PE'
      | 'PH'
      | 'PN'
      | 'PL'
      | 'PT'
      | 'PR'
      | 'QA'
      | 'RE'
      | 'RO'
      | 'RU'
      | 'RW'
      | 'SH'
      | 'KN'
      | 'LC'
      | 'PM'
      | 'VC'
      | 'WS'
      | 'SM'
      | 'ST'
      | 'SA'
      | 'SN'
      | 'SC'
      | 'SL'
      | 'SG'
      | 'SK'
      | 'SI'
      | 'SB'
      | 'SO'
      | 'ZA'
      | 'GS'
      | 'ES'
      | 'LK'
      | 'SD'
      | 'SR'
      | 'SJ'
      | 'SZ'
      | 'SE'
      | 'CH'
      | 'SY'
      | 'TW'
      | 'TJ'
      | 'TZ'
      | 'TH'
      | 'TL'
      | 'TG'
      | 'TK'
      | 'TO'
      | 'TT'
      | 'TN'
      | 'TR'
      | 'TM'
      | 'TC'
      | 'TV'
      | 'UG'
      | 'UA'
      | 'AE'
      | 'GB'
      | 'UM'
      | 'UY'
      | 'UZ'
      | 'VU'
      | 'VE'
      | 'VN'
      | 'VG'
      | 'VI'
      | 'WF'
      | 'EH'
      | 'YE'
      | 'ZM'
      | 'ZW'
      | 'AX'
      | 'BQ'
      | 'CW'
      | 'GG'
      | 'IM'
      | 'JE'
      | 'ME'
      | 'BL'
      | 'MF'
      | 'RS'
      | 'SX'
      | 'SS'
      | 'XK';

    /**
     * Date of birth as an ISO 8601 calendar date (YYYY-MM-DD).
     */
    date_of_birth: string;

    /**
     * Government-issued identification with type: "id" (generic government-issued ID).
     */
    identification: NonUsBeneficiaryDataResponse.Identification;

    /**
     * Full legal name of the account holder.
     */
    legal_name: string;

    /**
     * Residential address of the account holder.
     */
    residential_address:
      | NonUsBeneficiaryDataResponse.UsResidentialAddressResponse
      | NonUsBeneficiaryDataResponse.NonUsResidentialAddressResponse;
  }

  export namespace NonUsBeneficiaryDataResponse {
    /**
     * Government-issued identification with type: "id" (generic government-issued ID).
     */
    export interface Identification {
      type: 'id';

      value: string;
    }

    export interface UsResidentialAddressResponse {
      /**
       * City name.
       */
      city: string;

      /**
       * ISO 3166-1 alpha-2 country code.
       */
      country: 'US';

      /**
       * Postal or ZIP code.
       */
      postal_code: string;

      /**
       * Two-letter state code.
       */
      state: string;

      /**
       * Primary street address.
       */
      street_line_1: string;

      /**
       * Secondary street address (apartment, suite, etc.).
       */
      street_line_2: string | null;
    }

    export interface NonUsResidentialAddressResponse {
      /**
       * City name.
       */
      city: string;

      /**
       * ISO 3166-1 alpha-2 country code.
       */
      country:
        | 'AF'
        | 'AL'
        | 'DZ'
        | 'AS'
        | 'AD'
        | 'AO'
        | 'AI'
        | 'AQ'
        | 'AG'
        | 'AR'
        | 'AM'
        | 'AW'
        | 'AU'
        | 'AT'
        | 'AZ'
        | 'BS'
        | 'BH'
        | 'BD'
        | 'BB'
        | 'BY'
        | 'BE'
        | 'BZ'
        | 'BJ'
        | 'BM'
        | 'BT'
        | 'BO'
        | 'BA'
        | 'BW'
        | 'BV'
        | 'BR'
        | 'IO'
        | 'BN'
        | 'BG'
        | 'BF'
        | 'BI'
        | 'KH'
        | 'CM'
        | 'CA'
        | 'CV'
        | 'KY'
        | 'CF'
        | 'TD'
        | 'CL'
        | 'CN'
        | 'CX'
        | 'CC'
        | 'CO'
        | 'KM'
        | 'CG'
        | 'CD'
        | 'CK'
        | 'CR'
        | 'CI'
        | 'HR'
        | 'CU'
        | 'CY'
        | 'CZ'
        | 'DK'
        | 'DJ'
        | 'DM'
        | 'DO'
        | 'EC'
        | 'EG'
        | 'SV'
        | 'GQ'
        | 'ER'
        | 'EE'
        | 'ET'
        | 'FK'
        | 'FO'
        | 'FJ'
        | 'FI'
        | 'FR'
        | 'GF'
        | 'PF'
        | 'TF'
        | 'GA'
        | 'GM'
        | 'GE'
        | 'DE'
        | 'GH'
        | 'GI'
        | 'GR'
        | 'GL'
        | 'GD'
        | 'GP'
        | 'GU'
        | 'GT'
        | 'GN'
        | 'GW'
        | 'GY'
        | 'HT'
        | 'HM'
        | 'VA'
        | 'HN'
        | 'HK'
        | 'HU'
        | 'IS'
        | 'IN'
        | 'ID'
        | 'IR'
        | 'IQ'
        | 'IE'
        | 'IL'
        | 'IT'
        | 'JM'
        | 'JP'
        | 'JO'
        | 'KZ'
        | 'KE'
        | 'KI'
        | 'KP'
        | 'KR'
        | 'KW'
        | 'KG'
        | 'LA'
        | 'LV'
        | 'LB'
        | 'LS'
        | 'LR'
        | 'LY'
        | 'LI'
        | 'LT'
        | 'LU'
        | 'MO'
        | 'MG'
        | 'MW'
        | 'MY'
        | 'MV'
        | 'ML'
        | 'MT'
        | 'MH'
        | 'MQ'
        | 'MR'
        | 'MU'
        | 'YT'
        | 'MX'
        | 'FM'
        | 'MD'
        | 'MC'
        | 'MN'
        | 'MS'
        | 'MA'
        | 'MZ'
        | 'MM'
        | 'NA'
        | 'NR'
        | 'NP'
        | 'NL'
        | 'NC'
        | 'NZ'
        | 'NI'
        | 'NE'
        | 'NG'
        | 'NU'
        | 'NF'
        | 'MP'
        | 'MK'
        | 'NO'
        | 'OM'
        | 'PK'
        | 'PW'
        | 'PS'
        | 'PA'
        | 'PG'
        | 'PY'
        | 'PE'
        | 'PH'
        | 'PN'
        | 'PL'
        | 'PT'
        | 'PR'
        | 'QA'
        | 'RE'
        | 'RO'
        | 'RU'
        | 'RW'
        | 'SH'
        | 'KN'
        | 'LC'
        | 'PM'
        | 'VC'
        | 'WS'
        | 'SM'
        | 'ST'
        | 'SA'
        | 'SN'
        | 'SC'
        | 'SL'
        | 'SG'
        | 'SK'
        | 'SI'
        | 'SB'
        | 'SO'
        | 'ZA'
        | 'GS'
        | 'ES'
        | 'LK'
        | 'SD'
        | 'SR'
        | 'SJ'
        | 'SZ'
        | 'SE'
        | 'CH'
        | 'SY'
        | 'TW'
        | 'TJ'
        | 'TZ'
        | 'TH'
        | 'TL'
        | 'TG'
        | 'TK'
        | 'TO'
        | 'TT'
        | 'TN'
        | 'TR'
        | 'TM'
        | 'TC'
        | 'TV'
        | 'UG'
        | 'UA'
        | 'AE'
        | 'GB'
        | 'UM'
        | 'UY'
        | 'UZ'
        | 'VU'
        | 'VE'
        | 'VN'
        | 'VG'
        | 'VI'
        | 'WF'
        | 'EH'
        | 'YE'
        | 'ZM'
        | 'ZW'
        | 'AX'
        | 'BQ'
        | 'CW'
        | 'GG'
        | 'IM'
        | 'JE'
        | 'ME'
        | 'BL'
        | 'MF'
        | 'RS'
        | 'SX'
        | 'SS'
        | 'XK';

      /**
       * Postal or ZIP code.
       */
      postal_code: string;

      /**
       * Primary street address.
       */
      street_line_1: string;

      /**
       * Secondary street address (apartment, suite, etc.).
       */
      street_line_2: string | null;
    }
  }

  export interface BusinessBeneficiaryDataResponse {
    /**
     * Beneficial owners of the business. At least one required.
     */
    beneficial_owners: Array<
      | BusinessBeneficiaryDataResponse.UsBeneficiaryDataResponse
      | BusinessBeneficiaryDataResponse.NonUsBeneficiaryDataResponse
    >;

    /**
     * Individual with primary responsibility for controlling, managing, or directing
     * the business.
     */
    control_person:
      | BusinessBeneficiaryDataResponse.UnionMember0
      | BusinessBeneficiaryDataResponse.UnionMember1;

    /**
     * ISO 3166-1 alpha-2 country code where the business is incorporated.
     */
    country_of_incorporation:
      | 'AF'
      | 'AL'
      | 'DZ'
      | 'AS'
      | 'AD'
      | 'AO'
      | 'AI'
      | 'AQ'
      | 'AG'
      | 'AR'
      | 'AM'
      | 'AW'
      | 'AU'
      | 'AT'
      | 'AZ'
      | 'BS'
      | 'BH'
      | 'BD'
      | 'BB'
      | 'BY'
      | 'BE'
      | 'BZ'
      | 'BJ'
      | 'BM'
      | 'BT'
      | 'BO'
      | 'BA'
      | 'BW'
      | 'BV'
      | 'BR'
      | 'IO'
      | 'BN'
      | 'BG'
      | 'BF'
      | 'BI'
      | 'KH'
      | 'CM'
      | 'CA'
      | 'CV'
      | 'KY'
      | 'CF'
      | 'TD'
      | 'CL'
      | 'CN'
      | 'CX'
      | 'CC'
      | 'CO'
      | 'KM'
      | 'CG'
      | 'CD'
      | 'CK'
      | 'CR'
      | 'CI'
      | 'HR'
      | 'CU'
      | 'CY'
      | 'CZ'
      | 'DK'
      | 'DJ'
      | 'DM'
      | 'DO'
      | 'EC'
      | 'EG'
      | 'SV'
      | 'GQ'
      | 'ER'
      | 'EE'
      | 'ET'
      | 'FK'
      | 'FO'
      | 'FJ'
      | 'FI'
      | 'FR'
      | 'GF'
      | 'PF'
      | 'TF'
      | 'GA'
      | 'GM'
      | 'GE'
      | 'DE'
      | 'GH'
      | 'GI'
      | 'GR'
      | 'GL'
      | 'GD'
      | 'GP'
      | 'GU'
      | 'GT'
      | 'GN'
      | 'GW'
      | 'GY'
      | 'HT'
      | 'HM'
      | 'VA'
      | 'HN'
      | 'HK'
      | 'HU'
      | 'IS'
      | 'IN'
      | 'ID'
      | 'IR'
      | 'IQ'
      | 'IE'
      | 'IL'
      | 'IT'
      | 'JM'
      | 'JP'
      | 'JO'
      | 'KZ'
      | 'KE'
      | 'KI'
      | 'KP'
      | 'KR'
      | 'KW'
      | 'KG'
      | 'LA'
      | 'LV'
      | 'LB'
      | 'LS'
      | 'LR'
      | 'LY'
      | 'LI'
      | 'LT'
      | 'LU'
      | 'MO'
      | 'MG'
      | 'MW'
      | 'MY'
      | 'MV'
      | 'ML'
      | 'MT'
      | 'MH'
      | 'MQ'
      | 'MR'
      | 'MU'
      | 'YT'
      | 'MX'
      | 'FM'
      | 'MD'
      | 'MC'
      | 'MN'
      | 'MS'
      | 'MA'
      | 'MZ'
      | 'MM'
      | 'NA'
      | 'NR'
      | 'NP'
      | 'NL'
      | 'NC'
      | 'NZ'
      | 'NI'
      | 'NE'
      | 'NG'
      | 'NU'
      | 'NF'
      | 'MP'
      | 'MK'
      | 'NO'
      | 'OM'
      | 'PK'
      | 'PW'
      | 'PS'
      | 'PA'
      | 'PG'
      | 'PY'
      | 'PE'
      | 'PH'
      | 'PN'
      | 'PL'
      | 'PT'
      | 'PR'
      | 'QA'
      | 'RE'
      | 'RO'
      | 'RU'
      | 'RW'
      | 'SH'
      | 'KN'
      | 'LC'
      | 'PM'
      | 'VC'
      | 'WS'
      | 'SM'
      | 'ST'
      | 'SA'
      | 'SN'
      | 'SC'
      | 'SL'
      | 'SG'
      | 'SK'
      | 'SI'
      | 'SB'
      | 'SO'
      | 'ZA'
      | 'GS'
      | 'ES'
      | 'LK'
      | 'SD'
      | 'SR'
      | 'SJ'
      | 'SZ'
      | 'SE'
      | 'CH'
      | 'SY'
      | 'TW'
      | 'TJ'
      | 'TZ'
      | 'TH'
      | 'TL'
      | 'TG'
      | 'TK'
      | 'TO'
      | 'TT'
      | 'TN'
      | 'TR'
      | 'TM'
      | 'TC'
      | 'TV'
      | 'UG'
      | 'UA'
      | 'AE'
      | 'GB'
      | 'US'
      | 'UM'
      | 'UY'
      | 'UZ'
      | 'VU'
      | 'VE'
      | 'VN'
      | 'VG'
      | 'VI'
      | 'WF'
      | 'EH'
      | 'YE'
      | 'ZM'
      | 'ZW'
      | 'AX'
      | 'BQ'
      | 'CW'
      | 'GG'
      | 'IM'
      | 'JE'
      | 'ME'
      | 'BL'
      | 'MF'
      | 'RS'
      | 'SX'
      | 'SS'
      | 'XK';

    /**
     * Trade name the business operates under, if different from the legal name.
     */
    doing_business_as: string | null;

    /**
     * Full legal name of the business.
     */
    legal_business_name: string;

    /**
     * Physical operating address of the business.
     */
    physical_address:
      | BusinessBeneficiaryDataResponse.UsResidentialAddressResponse
      | BusinessBeneficiaryDataResponse.NonUsResidentialAddressResponse;

    /**
     * Registered legal address of the business.
     */
    registered_address:
      | BusinessBeneficiaryDataResponse.UsResidentialAddressResponse
      | BusinessBeneficiaryDataResponse.NonUsResidentialAddressResponse;

    /**
     * Business registration number: type "ein" (Employer Identification Number, format
     * ##-#######) or "ssn" (Social Security Number, format ###-##-####).
     */
    registration_number:
      | BusinessBeneficiaryDataResponse.EinIdentification
      | BusinessBeneficiaryDataResponse.SsnIdentification;

    /**
     * State or subdivision where the business is incorporated.
     */
    state_of_incorporation: string;

    /**
     * Four-digit year the business was incorporated.
     */
    year_of_incorporation: number;
  }

  export namespace BusinessBeneficiaryDataResponse {
    export interface UsBeneficiaryDataResponse {
      /**
       * ISO 3166-1 alpha-2 country code of citizenship.
       */
      country_of_citizenship: 'US';

      /**
       * Date of birth as an ISO 8601 calendar date (YYYY-MM-DD).
       */
      date_of_birth: string;

      /**
       * Government-issued identification with type: "ssn" (Social Security Number,
       * format ###-##-####) or "itin" (Individual Taxpayer ID, format 9##-##-####).
       */
      identification:
        | UsBeneficiaryDataResponse.SsnIdentification
        | UsBeneficiaryDataResponse.ItinIdentification;

      /**
       * Full legal name of the account holder.
       */
      legal_name: string;

      /**
       * Residential address of the account holder.
       */
      residential_address:
        | UsBeneficiaryDataResponse.UsResidentialAddressResponse
        | UsBeneficiaryDataResponse.NonUsResidentialAddressResponse;
    }

    export namespace UsBeneficiaryDataResponse {
      export interface SsnIdentification {
        type: 'ssn';

        value: string;
      }

      export interface ItinIdentification {
        type: 'itin';

        value: string;
      }

      export interface UsResidentialAddressResponse {
        /**
         * City name.
         */
        city: string;

        /**
         * ISO 3166-1 alpha-2 country code.
         */
        country: 'US';

        /**
         * Postal or ZIP code.
         */
        postal_code: string;

        /**
         * Two-letter state code.
         */
        state: string;

        /**
         * Primary street address.
         */
        street_line_1: string;

        /**
         * Secondary street address (apartment, suite, etc.).
         */
        street_line_2: string | null;
      }

      export interface NonUsResidentialAddressResponse {
        /**
         * City name.
         */
        city: string;

        /**
         * ISO 3166-1 alpha-2 country code.
         */
        country:
          | 'AF'
          | 'AL'
          | 'DZ'
          | 'AS'
          | 'AD'
          | 'AO'
          | 'AI'
          | 'AQ'
          | 'AG'
          | 'AR'
          | 'AM'
          | 'AW'
          | 'AU'
          | 'AT'
          | 'AZ'
          | 'BS'
          | 'BH'
          | 'BD'
          | 'BB'
          | 'BY'
          | 'BE'
          | 'BZ'
          | 'BJ'
          | 'BM'
          | 'BT'
          | 'BO'
          | 'BA'
          | 'BW'
          | 'BV'
          | 'BR'
          | 'IO'
          | 'BN'
          | 'BG'
          | 'BF'
          | 'BI'
          | 'KH'
          | 'CM'
          | 'CA'
          | 'CV'
          | 'KY'
          | 'CF'
          | 'TD'
          | 'CL'
          | 'CN'
          | 'CX'
          | 'CC'
          | 'CO'
          | 'KM'
          | 'CG'
          | 'CD'
          | 'CK'
          | 'CR'
          | 'CI'
          | 'HR'
          | 'CU'
          | 'CY'
          | 'CZ'
          | 'DK'
          | 'DJ'
          | 'DM'
          | 'DO'
          | 'EC'
          | 'EG'
          | 'SV'
          | 'GQ'
          | 'ER'
          | 'EE'
          | 'ET'
          | 'FK'
          | 'FO'
          | 'FJ'
          | 'FI'
          | 'FR'
          | 'GF'
          | 'PF'
          | 'TF'
          | 'GA'
          | 'GM'
          | 'GE'
          | 'DE'
          | 'GH'
          | 'GI'
          | 'GR'
          | 'GL'
          | 'GD'
          | 'GP'
          | 'GU'
          | 'GT'
          | 'GN'
          | 'GW'
          | 'GY'
          | 'HT'
          | 'HM'
          | 'VA'
          | 'HN'
          | 'HK'
          | 'HU'
          | 'IS'
          | 'IN'
          | 'ID'
          | 'IR'
          | 'IQ'
          | 'IE'
          | 'IL'
          | 'IT'
          | 'JM'
          | 'JP'
          | 'JO'
          | 'KZ'
          | 'KE'
          | 'KI'
          | 'KP'
          | 'KR'
          | 'KW'
          | 'KG'
          | 'LA'
          | 'LV'
          | 'LB'
          | 'LS'
          | 'LR'
          | 'LY'
          | 'LI'
          | 'LT'
          | 'LU'
          | 'MO'
          | 'MG'
          | 'MW'
          | 'MY'
          | 'MV'
          | 'ML'
          | 'MT'
          | 'MH'
          | 'MQ'
          | 'MR'
          | 'MU'
          | 'YT'
          | 'MX'
          | 'FM'
          | 'MD'
          | 'MC'
          | 'MN'
          | 'MS'
          | 'MA'
          | 'MZ'
          | 'MM'
          | 'NA'
          | 'NR'
          | 'NP'
          | 'NL'
          | 'NC'
          | 'NZ'
          | 'NI'
          | 'NE'
          | 'NG'
          | 'NU'
          | 'NF'
          | 'MP'
          | 'MK'
          | 'NO'
          | 'OM'
          | 'PK'
          | 'PW'
          | 'PS'
          | 'PA'
          | 'PG'
          | 'PY'
          | 'PE'
          | 'PH'
          | 'PN'
          | 'PL'
          | 'PT'
          | 'PR'
          | 'QA'
          | 'RE'
          | 'RO'
          | 'RU'
          | 'RW'
          | 'SH'
          | 'KN'
          | 'LC'
          | 'PM'
          | 'VC'
          | 'WS'
          | 'SM'
          | 'ST'
          | 'SA'
          | 'SN'
          | 'SC'
          | 'SL'
          | 'SG'
          | 'SK'
          | 'SI'
          | 'SB'
          | 'SO'
          | 'ZA'
          | 'GS'
          | 'ES'
          | 'LK'
          | 'SD'
          | 'SR'
          | 'SJ'
          | 'SZ'
          | 'SE'
          | 'CH'
          | 'SY'
          | 'TW'
          | 'TJ'
          | 'TZ'
          | 'TH'
          | 'TL'
          | 'TG'
          | 'TK'
          | 'TO'
          | 'TT'
          | 'TN'
          | 'TR'
          | 'TM'
          | 'TC'
          | 'TV'
          | 'UG'
          | 'UA'
          | 'AE'
          | 'GB'
          | 'UM'
          | 'UY'
          | 'UZ'
          | 'VU'
          | 'VE'
          | 'VN'
          | 'VG'
          | 'VI'
          | 'WF'
          | 'EH'
          | 'YE'
          | 'ZM'
          | 'ZW'
          | 'AX'
          | 'BQ'
          | 'CW'
          | 'GG'
          | 'IM'
          | 'JE'
          | 'ME'
          | 'BL'
          | 'MF'
          | 'RS'
          | 'SX'
          | 'SS'
          | 'XK';

        /**
         * Postal or ZIP code.
         */
        postal_code: string;

        /**
         * Primary street address.
         */
        street_line_1: string;

        /**
         * Secondary street address (apartment, suite, etc.).
         */
        street_line_2: string | null;
      }
    }

    export interface NonUsBeneficiaryDataResponse {
      /**
       * ISO 3166-1 alpha-2 country code of citizenship.
       */
      country_of_citizenship:
        | 'AF'
        | 'AL'
        | 'DZ'
        | 'AS'
        | 'AD'
        | 'AO'
        | 'AI'
        | 'AQ'
        | 'AG'
        | 'AR'
        | 'AM'
        | 'AW'
        | 'AU'
        | 'AT'
        | 'AZ'
        | 'BS'
        | 'BH'
        | 'BD'
        | 'BB'
        | 'BY'
        | 'BE'
        | 'BZ'
        | 'BJ'
        | 'BM'
        | 'BT'
        | 'BO'
        | 'BA'
        | 'BW'
        | 'BV'
        | 'BR'
        | 'IO'
        | 'BN'
        | 'BG'
        | 'BF'
        | 'BI'
        | 'KH'
        | 'CM'
        | 'CA'
        | 'CV'
        | 'KY'
        | 'CF'
        | 'TD'
        | 'CL'
        | 'CN'
        | 'CX'
        | 'CC'
        | 'CO'
        | 'KM'
        | 'CG'
        | 'CD'
        | 'CK'
        | 'CR'
        | 'CI'
        | 'HR'
        | 'CU'
        | 'CY'
        | 'CZ'
        | 'DK'
        | 'DJ'
        | 'DM'
        | 'DO'
        | 'EC'
        | 'EG'
        | 'SV'
        | 'GQ'
        | 'ER'
        | 'EE'
        | 'ET'
        | 'FK'
        | 'FO'
        | 'FJ'
        | 'FI'
        | 'FR'
        | 'GF'
        | 'PF'
        | 'TF'
        | 'GA'
        | 'GM'
        | 'GE'
        | 'DE'
        | 'GH'
        | 'GI'
        | 'GR'
        | 'GL'
        | 'GD'
        | 'GP'
        | 'GU'
        | 'GT'
        | 'GN'
        | 'GW'
        | 'GY'
        | 'HT'
        | 'HM'
        | 'VA'
        | 'HN'
        | 'HK'
        | 'HU'
        | 'IS'
        | 'IN'
        | 'ID'
        | 'IR'
        | 'IQ'
        | 'IE'
        | 'IL'
        | 'IT'
        | 'JM'
        | 'JP'
        | 'JO'
        | 'KZ'
        | 'KE'
        | 'KI'
        | 'KP'
        | 'KR'
        | 'KW'
        | 'KG'
        | 'LA'
        | 'LV'
        | 'LB'
        | 'LS'
        | 'LR'
        | 'LY'
        | 'LI'
        | 'LT'
        | 'LU'
        | 'MO'
        | 'MG'
        | 'MW'
        | 'MY'
        | 'MV'
        | 'ML'
        | 'MT'
        | 'MH'
        | 'MQ'
        | 'MR'
        | 'MU'
        | 'YT'
        | 'MX'
        | 'FM'
        | 'MD'
        | 'MC'
        | 'MN'
        | 'MS'
        | 'MA'
        | 'MZ'
        | 'MM'
        | 'NA'
        | 'NR'
        | 'NP'
        | 'NL'
        | 'NC'
        | 'NZ'
        | 'NI'
        | 'NE'
        | 'NG'
        | 'NU'
        | 'NF'
        | 'MP'
        | 'MK'
        | 'NO'
        | 'OM'
        | 'PK'
        | 'PW'
        | 'PS'
        | 'PA'
        | 'PG'
        | 'PY'
        | 'PE'
        | 'PH'
        | 'PN'
        | 'PL'
        | 'PT'
        | 'PR'
        | 'QA'
        | 'RE'
        | 'RO'
        | 'RU'
        | 'RW'
        | 'SH'
        | 'KN'
        | 'LC'
        | 'PM'
        | 'VC'
        | 'WS'
        | 'SM'
        | 'ST'
        | 'SA'
        | 'SN'
        | 'SC'
        | 'SL'
        | 'SG'
        | 'SK'
        | 'SI'
        | 'SB'
        | 'SO'
        | 'ZA'
        | 'GS'
        | 'ES'
        | 'LK'
        | 'SD'
        | 'SR'
        | 'SJ'
        | 'SZ'
        | 'SE'
        | 'CH'
        | 'SY'
        | 'TW'
        | 'TJ'
        | 'TZ'
        | 'TH'
        | 'TL'
        | 'TG'
        | 'TK'
        | 'TO'
        | 'TT'
        | 'TN'
        | 'TR'
        | 'TM'
        | 'TC'
        | 'TV'
        | 'UG'
        | 'UA'
        | 'AE'
        | 'GB'
        | 'UM'
        | 'UY'
        | 'UZ'
        | 'VU'
        | 'VE'
        | 'VN'
        | 'VG'
        | 'VI'
        | 'WF'
        | 'EH'
        | 'YE'
        | 'ZM'
        | 'ZW'
        | 'AX'
        | 'BQ'
        | 'CW'
        | 'GG'
        | 'IM'
        | 'JE'
        | 'ME'
        | 'BL'
        | 'MF'
        | 'RS'
        | 'SX'
        | 'SS'
        | 'XK';

      /**
       * Date of birth as an ISO 8601 calendar date (YYYY-MM-DD).
       */
      date_of_birth: string;

      /**
       * Government-issued identification with type: "id" (generic government-issued ID).
       */
      identification: NonUsBeneficiaryDataResponse.Identification;

      /**
       * Full legal name of the account holder.
       */
      legal_name: string;

      /**
       * Residential address of the account holder.
       */
      residential_address:
        | NonUsBeneficiaryDataResponse.UsResidentialAddressResponse
        | NonUsBeneficiaryDataResponse.NonUsResidentialAddressResponse;
    }

    export namespace NonUsBeneficiaryDataResponse {
      /**
       * Government-issued identification with type: "id" (generic government-issued ID).
       */
      export interface Identification {
        type: 'id';

        value: string;
      }

      export interface UsResidentialAddressResponse {
        /**
         * City name.
         */
        city: string;

        /**
         * ISO 3166-1 alpha-2 country code.
         */
        country: 'US';

        /**
         * Postal or ZIP code.
         */
        postal_code: string;

        /**
         * Two-letter state code.
         */
        state: string;

        /**
         * Primary street address.
         */
        street_line_1: string;

        /**
         * Secondary street address (apartment, suite, etc.).
         */
        street_line_2: string | null;
      }

      export interface NonUsResidentialAddressResponse {
        /**
         * City name.
         */
        city: string;

        /**
         * ISO 3166-1 alpha-2 country code.
         */
        country:
          | 'AF'
          | 'AL'
          | 'DZ'
          | 'AS'
          | 'AD'
          | 'AO'
          | 'AI'
          | 'AQ'
          | 'AG'
          | 'AR'
          | 'AM'
          | 'AW'
          | 'AU'
          | 'AT'
          | 'AZ'
          | 'BS'
          | 'BH'
          | 'BD'
          | 'BB'
          | 'BY'
          | 'BE'
          | 'BZ'
          | 'BJ'
          | 'BM'
          | 'BT'
          | 'BO'
          | 'BA'
          | 'BW'
          | 'BV'
          | 'BR'
          | 'IO'
          | 'BN'
          | 'BG'
          | 'BF'
          | 'BI'
          | 'KH'
          | 'CM'
          | 'CA'
          | 'CV'
          | 'KY'
          | 'CF'
          | 'TD'
          | 'CL'
          | 'CN'
          | 'CX'
          | 'CC'
          | 'CO'
          | 'KM'
          | 'CG'
          | 'CD'
          | 'CK'
          | 'CR'
          | 'CI'
          | 'HR'
          | 'CU'
          | 'CY'
          | 'CZ'
          | 'DK'
          | 'DJ'
          | 'DM'
          | 'DO'
          | 'EC'
          | 'EG'
          | 'SV'
          | 'GQ'
          | 'ER'
          | 'EE'
          | 'ET'
          | 'FK'
          | 'FO'
          | 'FJ'
          | 'FI'
          | 'FR'
          | 'GF'
          | 'PF'
          | 'TF'
          | 'GA'
          | 'GM'
          | 'GE'
          | 'DE'
          | 'GH'
          | 'GI'
          | 'GR'
          | 'GL'
          | 'GD'
          | 'GP'
          | 'GU'
          | 'GT'
          | 'GN'
          | 'GW'
          | 'GY'
          | 'HT'
          | 'HM'
          | 'VA'
          | 'HN'
          | 'HK'
          | 'HU'
          | 'IS'
          | 'IN'
          | 'ID'
          | 'IR'
          | 'IQ'
          | 'IE'
          | 'IL'
          | 'IT'
          | 'JM'
          | 'JP'
          | 'JO'
          | 'KZ'
          | 'KE'
          | 'KI'
          | 'KP'
          | 'KR'
          | 'KW'
          | 'KG'
          | 'LA'
          | 'LV'
          | 'LB'
          | 'LS'
          | 'LR'
          | 'LY'
          | 'LI'
          | 'LT'
          | 'LU'
          | 'MO'
          | 'MG'
          | 'MW'
          | 'MY'
          | 'MV'
          | 'ML'
          | 'MT'
          | 'MH'
          | 'MQ'
          | 'MR'
          | 'MU'
          | 'YT'
          | 'MX'
          | 'FM'
          | 'MD'
          | 'MC'
          | 'MN'
          | 'MS'
          | 'MA'
          | 'MZ'
          | 'MM'
          | 'NA'
          | 'NR'
          | 'NP'
          | 'NL'
          | 'NC'
          | 'NZ'
          | 'NI'
          | 'NE'
          | 'NG'
          | 'NU'
          | 'NF'
          | 'MP'
          | 'MK'
          | 'NO'
          | 'OM'
          | 'PK'
          | 'PW'
          | 'PS'
          | 'PA'
          | 'PG'
          | 'PY'
          | 'PE'
          | 'PH'
          | 'PN'
          | 'PL'
          | 'PT'
          | 'PR'
          | 'QA'
          | 'RE'
          | 'RO'
          | 'RU'
          | 'RW'
          | 'SH'
          | 'KN'
          | 'LC'
          | 'PM'
          | 'VC'
          | 'WS'
          | 'SM'
          | 'ST'
          | 'SA'
          | 'SN'
          | 'SC'
          | 'SL'
          | 'SG'
          | 'SK'
          | 'SI'
          | 'SB'
          | 'SO'
          | 'ZA'
          | 'GS'
          | 'ES'
          | 'LK'
          | 'SD'
          | 'SR'
          | 'SJ'
          | 'SZ'
          | 'SE'
          | 'CH'
          | 'SY'
          | 'TW'
          | 'TJ'
          | 'TZ'
          | 'TH'
          | 'TL'
          | 'TG'
          | 'TK'
          | 'TO'
          | 'TT'
          | 'TN'
          | 'TR'
          | 'TM'
          | 'TC'
          | 'TV'
          | 'UG'
          | 'UA'
          | 'AE'
          | 'GB'
          | 'UM'
          | 'UY'
          | 'UZ'
          | 'VU'
          | 'VE'
          | 'VN'
          | 'VG'
          | 'VI'
          | 'WF'
          | 'EH'
          | 'YE'
          | 'ZM'
          | 'ZW'
          | 'AX'
          | 'BQ'
          | 'CW'
          | 'GG'
          | 'IM'
          | 'JE'
          | 'ME'
          | 'BL'
          | 'MF'
          | 'RS'
          | 'SX'
          | 'SS'
          | 'XK';

        /**
         * Postal or ZIP code.
         */
        postal_code: string;

        /**
         * Primary street address.
         */
        street_line_1: string;

        /**
         * Secondary street address (apartment, suite, etc.).
         */
        street_line_2: string | null;
      }
    }

    export interface UnionMember0 {
      /**
       * ISO 3166-1 alpha-2 country code of citizenship.
       */
      country_of_citizenship: 'US';

      /**
       * Date of birth as an ISO 8601 calendar date (YYYY-MM-DD).
       */
      date_of_birth: string;

      /**
       * Government-issued identification with type: "ssn" (Social Security Number,
       * format ###-##-####) or "itin" (Individual Taxpayer ID, format 9##-##-####).
       */
      identification: UnionMember0.SsnIdentification | UnionMember0.ItinIdentification;

      /**
       * Full legal name of the account holder.
       */
      legal_name: string;

      /**
       * Residential address of the account holder.
       */
      residential_address:
        | UnionMember0.UsResidentialAddressResponse
        | UnionMember0.NonUsResidentialAddressResponse;

      /**
       * Role of the control person at the business (e.g., "CEO", "President", "Managing
       * Director").
       */
      title: string;
    }

    export namespace UnionMember0 {
      export interface SsnIdentification {
        type: 'ssn';

        value: string;
      }

      export interface ItinIdentification {
        type: 'itin';

        value: string;
      }

      export interface UsResidentialAddressResponse {
        /**
         * City name.
         */
        city: string;

        /**
         * ISO 3166-1 alpha-2 country code.
         */
        country: 'US';

        /**
         * Postal or ZIP code.
         */
        postal_code: string;

        /**
         * Two-letter state code.
         */
        state: string;

        /**
         * Primary street address.
         */
        street_line_1: string;

        /**
         * Secondary street address (apartment, suite, etc.).
         */
        street_line_2: string | null;
      }

      export interface NonUsResidentialAddressResponse {
        /**
         * City name.
         */
        city: string;

        /**
         * ISO 3166-1 alpha-2 country code.
         */
        country:
          | 'AF'
          | 'AL'
          | 'DZ'
          | 'AS'
          | 'AD'
          | 'AO'
          | 'AI'
          | 'AQ'
          | 'AG'
          | 'AR'
          | 'AM'
          | 'AW'
          | 'AU'
          | 'AT'
          | 'AZ'
          | 'BS'
          | 'BH'
          | 'BD'
          | 'BB'
          | 'BY'
          | 'BE'
          | 'BZ'
          | 'BJ'
          | 'BM'
          | 'BT'
          | 'BO'
          | 'BA'
          | 'BW'
          | 'BV'
          | 'BR'
          | 'IO'
          | 'BN'
          | 'BG'
          | 'BF'
          | 'BI'
          | 'KH'
          | 'CM'
          | 'CA'
          | 'CV'
          | 'KY'
          | 'CF'
          | 'TD'
          | 'CL'
          | 'CN'
          | 'CX'
          | 'CC'
          | 'CO'
          | 'KM'
          | 'CG'
          | 'CD'
          | 'CK'
          | 'CR'
          | 'CI'
          | 'HR'
          | 'CU'
          | 'CY'
          | 'CZ'
          | 'DK'
          | 'DJ'
          | 'DM'
          | 'DO'
          | 'EC'
          | 'EG'
          | 'SV'
          | 'GQ'
          | 'ER'
          | 'EE'
          | 'ET'
          | 'FK'
          | 'FO'
          | 'FJ'
          | 'FI'
          | 'FR'
          | 'GF'
          | 'PF'
          | 'TF'
          | 'GA'
          | 'GM'
          | 'GE'
          | 'DE'
          | 'GH'
          | 'GI'
          | 'GR'
          | 'GL'
          | 'GD'
          | 'GP'
          | 'GU'
          | 'GT'
          | 'GN'
          | 'GW'
          | 'GY'
          | 'HT'
          | 'HM'
          | 'VA'
          | 'HN'
          | 'HK'
          | 'HU'
          | 'IS'
          | 'IN'
          | 'ID'
          | 'IR'
          | 'IQ'
          | 'IE'
          | 'IL'
          | 'IT'
          | 'JM'
          | 'JP'
          | 'JO'
          | 'KZ'
          | 'KE'
          | 'KI'
          | 'KP'
          | 'KR'
          | 'KW'
          | 'KG'
          | 'LA'
          | 'LV'
          | 'LB'
          | 'LS'
          | 'LR'
          | 'LY'
          | 'LI'
          | 'LT'
          | 'LU'
          | 'MO'
          | 'MG'
          | 'MW'
          | 'MY'
          | 'MV'
          | 'ML'
          | 'MT'
          | 'MH'
          | 'MQ'
          | 'MR'
          | 'MU'
          | 'YT'
          | 'MX'
          | 'FM'
          | 'MD'
          | 'MC'
          | 'MN'
          | 'MS'
          | 'MA'
          | 'MZ'
          | 'MM'
          | 'NA'
          | 'NR'
          | 'NP'
          | 'NL'
          | 'NC'
          | 'NZ'
          | 'NI'
          | 'NE'
          | 'NG'
          | 'NU'
          | 'NF'
          | 'MP'
          | 'MK'
          | 'NO'
          | 'OM'
          | 'PK'
          | 'PW'
          | 'PS'
          | 'PA'
          | 'PG'
          | 'PY'
          | 'PE'
          | 'PH'
          | 'PN'
          | 'PL'
          | 'PT'
          | 'PR'
          | 'QA'
          | 'RE'
          | 'RO'
          | 'RU'
          | 'RW'
          | 'SH'
          | 'KN'
          | 'LC'
          | 'PM'
          | 'VC'
          | 'WS'
          | 'SM'
          | 'ST'
          | 'SA'
          | 'SN'
          | 'SC'
          | 'SL'
          | 'SG'
          | 'SK'
          | 'SI'
          | 'SB'
          | 'SO'
          | 'ZA'
          | 'GS'
          | 'ES'
          | 'LK'
          | 'SD'
          | 'SR'
          | 'SJ'
          | 'SZ'
          | 'SE'
          | 'CH'
          | 'SY'
          | 'TW'
          | 'TJ'
          | 'TZ'
          | 'TH'
          | 'TL'
          | 'TG'
          | 'TK'
          | 'TO'
          | 'TT'
          | 'TN'
          | 'TR'
          | 'TM'
          | 'TC'
          | 'TV'
          | 'UG'
          | 'UA'
          | 'AE'
          | 'GB'
          | 'UM'
          | 'UY'
          | 'UZ'
          | 'VU'
          | 'VE'
          | 'VN'
          | 'VG'
          | 'VI'
          | 'WF'
          | 'EH'
          | 'YE'
          | 'ZM'
          | 'ZW'
          | 'AX'
          | 'BQ'
          | 'CW'
          | 'GG'
          | 'IM'
          | 'JE'
          | 'ME'
          | 'BL'
          | 'MF'
          | 'RS'
          | 'SX'
          | 'SS'
          | 'XK';

        /**
         * Postal or ZIP code.
         */
        postal_code: string;

        /**
         * Primary street address.
         */
        street_line_1: string;

        /**
         * Secondary street address (apartment, suite, etc.).
         */
        street_line_2: string | null;
      }
    }

    export interface UnionMember1 {
      /**
       * ISO 3166-1 alpha-2 country code of citizenship.
       */
      country_of_citizenship:
        | 'AF'
        | 'AL'
        | 'DZ'
        | 'AS'
        | 'AD'
        | 'AO'
        | 'AI'
        | 'AQ'
        | 'AG'
        | 'AR'
        | 'AM'
        | 'AW'
        | 'AU'
        | 'AT'
        | 'AZ'
        | 'BS'
        | 'BH'
        | 'BD'
        | 'BB'
        | 'BY'
        | 'BE'
        | 'BZ'
        | 'BJ'
        | 'BM'
        | 'BT'
        | 'BO'
        | 'BA'
        | 'BW'
        | 'BV'
        | 'BR'
        | 'IO'
        | 'BN'
        | 'BG'
        | 'BF'
        | 'BI'
        | 'KH'
        | 'CM'
        | 'CA'
        | 'CV'
        | 'KY'
        | 'CF'
        | 'TD'
        | 'CL'
        | 'CN'
        | 'CX'
        | 'CC'
        | 'CO'
        | 'KM'
        | 'CG'
        | 'CD'
        | 'CK'
        | 'CR'
        | 'CI'
        | 'HR'
        | 'CU'
        | 'CY'
        | 'CZ'
        | 'DK'
        | 'DJ'
        | 'DM'
        | 'DO'
        | 'EC'
        | 'EG'
        | 'SV'
        | 'GQ'
        | 'ER'
        | 'EE'
        | 'ET'
        | 'FK'
        | 'FO'
        | 'FJ'
        | 'FI'
        | 'FR'
        | 'GF'
        | 'PF'
        | 'TF'
        | 'GA'
        | 'GM'
        | 'GE'
        | 'DE'
        | 'GH'
        | 'GI'
        | 'GR'
        | 'GL'
        | 'GD'
        | 'GP'
        | 'GU'
        | 'GT'
        | 'GN'
        | 'GW'
        | 'GY'
        | 'HT'
        | 'HM'
        | 'VA'
        | 'HN'
        | 'HK'
        | 'HU'
        | 'IS'
        | 'IN'
        | 'ID'
        | 'IR'
        | 'IQ'
        | 'IE'
        | 'IL'
        | 'IT'
        | 'JM'
        | 'JP'
        | 'JO'
        | 'KZ'
        | 'KE'
        | 'KI'
        | 'KP'
        | 'KR'
        | 'KW'
        | 'KG'
        | 'LA'
        | 'LV'
        | 'LB'
        | 'LS'
        | 'LR'
        | 'LY'
        | 'LI'
        | 'LT'
        | 'LU'
        | 'MO'
        | 'MG'
        | 'MW'
        | 'MY'
        | 'MV'
        | 'ML'
        | 'MT'
        | 'MH'
        | 'MQ'
        | 'MR'
        | 'MU'
        | 'YT'
        | 'MX'
        | 'FM'
        | 'MD'
        | 'MC'
        | 'MN'
        | 'MS'
        | 'MA'
        | 'MZ'
        | 'MM'
        | 'NA'
        | 'NR'
        | 'NP'
        | 'NL'
        | 'NC'
        | 'NZ'
        | 'NI'
        | 'NE'
        | 'NG'
        | 'NU'
        | 'NF'
        | 'MP'
        | 'MK'
        | 'NO'
        | 'OM'
        | 'PK'
        | 'PW'
        | 'PS'
        | 'PA'
        | 'PG'
        | 'PY'
        | 'PE'
        | 'PH'
        | 'PN'
        | 'PL'
        | 'PT'
        | 'PR'
        | 'QA'
        | 'RE'
        | 'RO'
        | 'RU'
        | 'RW'
        | 'SH'
        | 'KN'
        | 'LC'
        | 'PM'
        | 'VC'
        | 'WS'
        | 'SM'
        | 'ST'
        | 'SA'
        | 'SN'
        | 'SC'
        | 'SL'
        | 'SG'
        | 'SK'
        | 'SI'
        | 'SB'
        | 'SO'
        | 'ZA'
        | 'GS'
        | 'ES'
        | 'LK'
        | 'SD'
        | 'SR'
        | 'SJ'
        | 'SZ'
        | 'SE'
        | 'CH'
        | 'SY'
        | 'TW'
        | 'TJ'
        | 'TZ'
        | 'TH'
        | 'TL'
        | 'TG'
        | 'TK'
        | 'TO'
        | 'TT'
        | 'TN'
        | 'TR'
        | 'TM'
        | 'TC'
        | 'TV'
        | 'UG'
        | 'UA'
        | 'AE'
        | 'GB'
        | 'UM'
        | 'UY'
        | 'UZ'
        | 'VU'
        | 'VE'
        | 'VN'
        | 'VG'
        | 'VI'
        | 'WF'
        | 'EH'
        | 'YE'
        | 'ZM'
        | 'ZW'
        | 'AX'
        | 'BQ'
        | 'CW'
        | 'GG'
        | 'IM'
        | 'JE'
        | 'ME'
        | 'BL'
        | 'MF'
        | 'RS'
        | 'SX'
        | 'SS'
        | 'XK';

      /**
       * Date of birth as an ISO 8601 calendar date (YYYY-MM-DD).
       */
      date_of_birth: string;

      /**
       * Government-issued identification with type: "id" (generic government-issued ID).
       */
      identification: UnionMember1.Identification;

      /**
       * Full legal name of the account holder.
       */
      legal_name: string;

      /**
       * Residential address of the account holder.
       */
      residential_address:
        | UnionMember1.UsResidentialAddressResponse
        | UnionMember1.NonUsResidentialAddressResponse;

      /**
       * Role of the control person at the business (e.g., "CEO", "President", "Managing
       * Director").
       */
      title: string;
    }

    export namespace UnionMember1 {
      /**
       * Government-issued identification with type: "id" (generic government-issued ID).
       */
      export interface Identification {
        type: 'id';

        value: string;
      }

      export interface UsResidentialAddressResponse {
        /**
         * City name.
         */
        city: string;

        /**
         * ISO 3166-1 alpha-2 country code.
         */
        country: 'US';

        /**
         * Postal or ZIP code.
         */
        postal_code: string;

        /**
         * Two-letter state code.
         */
        state: string;

        /**
         * Primary street address.
         */
        street_line_1: string;

        /**
         * Secondary street address (apartment, suite, etc.).
         */
        street_line_2: string | null;
      }

      export interface NonUsResidentialAddressResponse {
        /**
         * City name.
         */
        city: string;

        /**
         * ISO 3166-1 alpha-2 country code.
         */
        country:
          | 'AF'
          | 'AL'
          | 'DZ'
          | 'AS'
          | 'AD'
          | 'AO'
          | 'AI'
          | 'AQ'
          | 'AG'
          | 'AR'
          | 'AM'
          | 'AW'
          | 'AU'
          | 'AT'
          | 'AZ'
          | 'BS'
          | 'BH'
          | 'BD'
          | 'BB'
          | 'BY'
          | 'BE'
          | 'BZ'
          | 'BJ'
          | 'BM'
          | 'BT'
          | 'BO'
          | 'BA'
          | 'BW'
          | 'BV'
          | 'BR'
          | 'IO'
          | 'BN'
          | 'BG'
          | 'BF'
          | 'BI'
          | 'KH'
          | 'CM'
          | 'CA'
          | 'CV'
          | 'KY'
          | 'CF'
          | 'TD'
          | 'CL'
          | 'CN'
          | 'CX'
          | 'CC'
          | 'CO'
          | 'KM'
          | 'CG'
          | 'CD'
          | 'CK'
          | 'CR'
          | 'CI'
          | 'HR'
          | 'CU'
          | 'CY'
          | 'CZ'
          | 'DK'
          | 'DJ'
          | 'DM'
          | 'DO'
          | 'EC'
          | 'EG'
          | 'SV'
          | 'GQ'
          | 'ER'
          | 'EE'
          | 'ET'
          | 'FK'
          | 'FO'
          | 'FJ'
          | 'FI'
          | 'FR'
          | 'GF'
          | 'PF'
          | 'TF'
          | 'GA'
          | 'GM'
          | 'GE'
          | 'DE'
          | 'GH'
          | 'GI'
          | 'GR'
          | 'GL'
          | 'GD'
          | 'GP'
          | 'GU'
          | 'GT'
          | 'GN'
          | 'GW'
          | 'GY'
          | 'HT'
          | 'HM'
          | 'VA'
          | 'HN'
          | 'HK'
          | 'HU'
          | 'IS'
          | 'IN'
          | 'ID'
          | 'IR'
          | 'IQ'
          | 'IE'
          | 'IL'
          | 'IT'
          | 'JM'
          | 'JP'
          | 'JO'
          | 'KZ'
          | 'KE'
          | 'KI'
          | 'KP'
          | 'KR'
          | 'KW'
          | 'KG'
          | 'LA'
          | 'LV'
          | 'LB'
          | 'LS'
          | 'LR'
          | 'LY'
          | 'LI'
          | 'LT'
          | 'LU'
          | 'MO'
          | 'MG'
          | 'MW'
          | 'MY'
          | 'MV'
          | 'ML'
          | 'MT'
          | 'MH'
          | 'MQ'
          | 'MR'
          | 'MU'
          | 'YT'
          | 'MX'
          | 'FM'
          | 'MD'
          | 'MC'
          | 'MN'
          | 'MS'
          | 'MA'
          | 'MZ'
          | 'MM'
          | 'NA'
          | 'NR'
          | 'NP'
          | 'NL'
          | 'NC'
          | 'NZ'
          | 'NI'
          | 'NE'
          | 'NG'
          | 'NU'
          | 'NF'
          | 'MP'
          | 'MK'
          | 'NO'
          | 'OM'
          | 'PK'
          | 'PW'
          | 'PS'
          | 'PA'
          | 'PG'
          | 'PY'
          | 'PE'
          | 'PH'
          | 'PN'
          | 'PL'
          | 'PT'
          | 'PR'
          | 'QA'
          | 'RE'
          | 'RO'
          | 'RU'
          | 'RW'
          | 'SH'
          | 'KN'
          | 'LC'
          | 'PM'
          | 'VC'
          | 'WS'
          | 'SM'
          | 'ST'
          | 'SA'
          | 'SN'
          | 'SC'
          | 'SL'
          | 'SG'
          | 'SK'
          | 'SI'
          | 'SB'
          | 'SO'
          | 'ZA'
          | 'GS'
          | 'ES'
          | 'LK'
          | 'SD'
          | 'SR'
          | 'SJ'
          | 'SZ'
          | 'SE'
          | 'CH'
          | 'SY'
          | 'TW'
          | 'TJ'
          | 'TZ'
          | 'TH'
          | 'TL'
          | 'TG'
          | 'TK'
          | 'TO'
          | 'TT'
          | 'TN'
          | 'TR'
          | 'TM'
          | 'TC'
          | 'TV'
          | 'UG'
          | 'UA'
          | 'AE'
          | 'GB'
          | 'UM'
          | 'UY'
          | 'UZ'
          | 'VU'
          | 'VE'
          | 'VN'
          | 'VG'
          | 'VI'
          | 'WF'
          | 'EH'
          | 'YE'
          | 'ZM'
          | 'ZW'
          | 'AX'
          | 'BQ'
          | 'CW'
          | 'GG'
          | 'IM'
          | 'JE'
          | 'ME'
          | 'BL'
          | 'MF'
          | 'RS'
          | 'SX'
          | 'SS'
          | 'XK';

        /**
         * Postal or ZIP code.
         */
        postal_code: string;

        /**
         * Primary street address.
         */
        street_line_1: string;

        /**
         * Secondary street address (apartment, suite, etc.).
         */
        street_line_2: string | null;
      }
    }

    export interface UsResidentialAddressResponse {
      /**
       * City name.
       */
      city: string;

      /**
       * ISO 3166-1 alpha-2 country code.
       */
      country: 'US';

      /**
       * Postal or ZIP code.
       */
      postal_code: string;

      /**
       * Two-letter state code.
       */
      state: string;

      /**
       * Primary street address.
       */
      street_line_1: string;

      /**
       * Secondary street address (apartment, suite, etc.).
       */
      street_line_2: string | null;
    }

    export interface NonUsResidentialAddressResponse {
      /**
       * City name.
       */
      city: string;

      /**
       * ISO 3166-1 alpha-2 country code.
       */
      country:
        | 'AF'
        | 'AL'
        | 'DZ'
        | 'AS'
        | 'AD'
        | 'AO'
        | 'AI'
        | 'AQ'
        | 'AG'
        | 'AR'
        | 'AM'
        | 'AW'
        | 'AU'
        | 'AT'
        | 'AZ'
        | 'BS'
        | 'BH'
        | 'BD'
        | 'BB'
        | 'BY'
        | 'BE'
        | 'BZ'
        | 'BJ'
        | 'BM'
        | 'BT'
        | 'BO'
        | 'BA'
        | 'BW'
        | 'BV'
        | 'BR'
        | 'IO'
        | 'BN'
        | 'BG'
        | 'BF'
        | 'BI'
        | 'KH'
        | 'CM'
        | 'CA'
        | 'CV'
        | 'KY'
        | 'CF'
        | 'TD'
        | 'CL'
        | 'CN'
        | 'CX'
        | 'CC'
        | 'CO'
        | 'KM'
        | 'CG'
        | 'CD'
        | 'CK'
        | 'CR'
        | 'CI'
        | 'HR'
        | 'CU'
        | 'CY'
        | 'CZ'
        | 'DK'
        | 'DJ'
        | 'DM'
        | 'DO'
        | 'EC'
        | 'EG'
        | 'SV'
        | 'GQ'
        | 'ER'
        | 'EE'
        | 'ET'
        | 'FK'
        | 'FO'
        | 'FJ'
        | 'FI'
        | 'FR'
        | 'GF'
        | 'PF'
        | 'TF'
        | 'GA'
        | 'GM'
        | 'GE'
        | 'DE'
        | 'GH'
        | 'GI'
        | 'GR'
        | 'GL'
        | 'GD'
        | 'GP'
        | 'GU'
        | 'GT'
        | 'GN'
        | 'GW'
        | 'GY'
        | 'HT'
        | 'HM'
        | 'VA'
        | 'HN'
        | 'HK'
        | 'HU'
        | 'IS'
        | 'IN'
        | 'ID'
        | 'IR'
        | 'IQ'
        | 'IE'
        | 'IL'
        | 'IT'
        | 'JM'
        | 'JP'
        | 'JO'
        | 'KZ'
        | 'KE'
        | 'KI'
        | 'KP'
        | 'KR'
        | 'KW'
        | 'KG'
        | 'LA'
        | 'LV'
        | 'LB'
        | 'LS'
        | 'LR'
        | 'LY'
        | 'LI'
        | 'LT'
        | 'LU'
        | 'MO'
        | 'MG'
        | 'MW'
        | 'MY'
        | 'MV'
        | 'ML'
        | 'MT'
        | 'MH'
        | 'MQ'
        | 'MR'
        | 'MU'
        | 'YT'
        | 'MX'
        | 'FM'
        | 'MD'
        | 'MC'
        | 'MN'
        | 'MS'
        | 'MA'
        | 'MZ'
        | 'MM'
        | 'NA'
        | 'NR'
        | 'NP'
        | 'NL'
        | 'NC'
        | 'NZ'
        | 'NI'
        | 'NE'
        | 'NG'
        | 'NU'
        | 'NF'
        | 'MP'
        | 'MK'
        | 'NO'
        | 'OM'
        | 'PK'
        | 'PW'
        | 'PS'
        | 'PA'
        | 'PG'
        | 'PY'
        | 'PE'
        | 'PH'
        | 'PN'
        | 'PL'
        | 'PT'
        | 'PR'
        | 'QA'
        | 'RE'
        | 'RO'
        | 'RU'
        | 'RW'
        | 'SH'
        | 'KN'
        | 'LC'
        | 'PM'
        | 'VC'
        | 'WS'
        | 'SM'
        | 'ST'
        | 'SA'
        | 'SN'
        | 'SC'
        | 'SL'
        | 'SG'
        | 'SK'
        | 'SI'
        | 'SB'
        | 'SO'
        | 'ZA'
        | 'GS'
        | 'ES'
        | 'LK'
        | 'SD'
        | 'SR'
        | 'SJ'
        | 'SZ'
        | 'SE'
        | 'CH'
        | 'SY'
        | 'TW'
        | 'TJ'
        | 'TZ'
        | 'TH'
        | 'TL'
        | 'TG'
        | 'TK'
        | 'TO'
        | 'TT'
        | 'TN'
        | 'TR'
        | 'TM'
        | 'TC'
        | 'TV'
        | 'UG'
        | 'UA'
        | 'AE'
        | 'GB'
        | 'UM'
        | 'UY'
        | 'UZ'
        | 'VU'
        | 'VE'
        | 'VN'
        | 'VG'
        | 'VI'
        | 'WF'
        | 'EH'
        | 'YE'
        | 'ZM'
        | 'ZW'
        | 'AX'
        | 'BQ'
        | 'CW'
        | 'GG'
        | 'IM'
        | 'JE'
        | 'ME'
        | 'BL'
        | 'MF'
        | 'RS'
        | 'SX'
        | 'SS'
        | 'XK';

      /**
       * Postal or ZIP code.
       */
      postal_code: string;

      /**
       * Primary street address.
       */
      street_line_1: string;

      /**
       * Secondary street address (apartment, suite, etc.).
       */
      street_line_2: string | null;
    }

    export interface UsResidentialAddressResponse {
      /**
       * City name.
       */
      city: string;

      /**
       * ISO 3166-1 alpha-2 country code.
       */
      country: 'US';

      /**
       * Postal or ZIP code.
       */
      postal_code: string;

      /**
       * Two-letter state code.
       */
      state: string;

      /**
       * Primary street address.
       */
      street_line_1: string;

      /**
       * Secondary street address (apartment, suite, etc.).
       */
      street_line_2: string | null;
    }

    export interface NonUsResidentialAddressResponse {
      /**
       * City name.
       */
      city: string;

      /**
       * ISO 3166-1 alpha-2 country code.
       */
      country:
        | 'AF'
        | 'AL'
        | 'DZ'
        | 'AS'
        | 'AD'
        | 'AO'
        | 'AI'
        | 'AQ'
        | 'AG'
        | 'AR'
        | 'AM'
        | 'AW'
        | 'AU'
        | 'AT'
        | 'AZ'
        | 'BS'
        | 'BH'
        | 'BD'
        | 'BB'
        | 'BY'
        | 'BE'
        | 'BZ'
        | 'BJ'
        | 'BM'
        | 'BT'
        | 'BO'
        | 'BA'
        | 'BW'
        | 'BV'
        | 'BR'
        | 'IO'
        | 'BN'
        | 'BG'
        | 'BF'
        | 'BI'
        | 'KH'
        | 'CM'
        | 'CA'
        | 'CV'
        | 'KY'
        | 'CF'
        | 'TD'
        | 'CL'
        | 'CN'
        | 'CX'
        | 'CC'
        | 'CO'
        | 'KM'
        | 'CG'
        | 'CD'
        | 'CK'
        | 'CR'
        | 'CI'
        | 'HR'
        | 'CU'
        | 'CY'
        | 'CZ'
        | 'DK'
        | 'DJ'
        | 'DM'
        | 'DO'
        | 'EC'
        | 'EG'
        | 'SV'
        | 'GQ'
        | 'ER'
        | 'EE'
        | 'ET'
        | 'FK'
        | 'FO'
        | 'FJ'
        | 'FI'
        | 'FR'
        | 'GF'
        | 'PF'
        | 'TF'
        | 'GA'
        | 'GM'
        | 'GE'
        | 'DE'
        | 'GH'
        | 'GI'
        | 'GR'
        | 'GL'
        | 'GD'
        | 'GP'
        | 'GU'
        | 'GT'
        | 'GN'
        | 'GW'
        | 'GY'
        | 'HT'
        | 'HM'
        | 'VA'
        | 'HN'
        | 'HK'
        | 'HU'
        | 'IS'
        | 'IN'
        | 'ID'
        | 'IR'
        | 'IQ'
        | 'IE'
        | 'IL'
        | 'IT'
        | 'JM'
        | 'JP'
        | 'JO'
        | 'KZ'
        | 'KE'
        | 'KI'
        | 'KP'
        | 'KR'
        | 'KW'
        | 'KG'
        | 'LA'
        | 'LV'
        | 'LB'
        | 'LS'
        | 'LR'
        | 'LY'
        | 'LI'
        | 'LT'
        | 'LU'
        | 'MO'
        | 'MG'
        | 'MW'
        | 'MY'
        | 'MV'
        | 'ML'
        | 'MT'
        | 'MH'
        | 'MQ'
        | 'MR'
        | 'MU'
        | 'YT'
        | 'MX'
        | 'FM'
        | 'MD'
        | 'MC'
        | 'MN'
        | 'MS'
        | 'MA'
        | 'MZ'
        | 'MM'
        | 'NA'
        | 'NR'
        | 'NP'
        | 'NL'
        | 'NC'
        | 'NZ'
        | 'NI'
        | 'NE'
        | 'NG'
        | 'NU'
        | 'NF'
        | 'MP'
        | 'MK'
        | 'NO'
        | 'OM'
        | 'PK'
        | 'PW'
        | 'PS'
        | 'PA'
        | 'PG'
        | 'PY'
        | 'PE'
        | 'PH'
        | 'PN'
        | 'PL'
        | 'PT'
        | 'PR'
        | 'QA'
        | 'RE'
        | 'RO'
        | 'RU'
        | 'RW'
        | 'SH'
        | 'KN'
        | 'LC'
        | 'PM'
        | 'VC'
        | 'WS'
        | 'SM'
        | 'ST'
        | 'SA'
        | 'SN'
        | 'SC'
        | 'SL'
        | 'SG'
        | 'SK'
        | 'SI'
        | 'SB'
        | 'SO'
        | 'ZA'
        | 'GS'
        | 'ES'
        | 'LK'
        | 'SD'
        | 'SR'
        | 'SJ'
        | 'SZ'
        | 'SE'
        | 'CH'
        | 'SY'
        | 'TW'
        | 'TJ'
        | 'TZ'
        | 'TH'
        | 'TL'
        | 'TG'
        | 'TK'
        | 'TO'
        | 'TT'
        | 'TN'
        | 'TR'
        | 'TM'
        | 'TC'
        | 'TV'
        | 'UG'
        | 'UA'
        | 'AE'
        | 'GB'
        | 'UM'
        | 'UY'
        | 'UZ'
        | 'VU'
        | 'VE'
        | 'VN'
        | 'VG'
        | 'VI'
        | 'WF'
        | 'EH'
        | 'YE'
        | 'ZM'
        | 'ZW'
        | 'AX'
        | 'BQ'
        | 'CW'
        | 'GG'
        | 'IM'
        | 'JE'
        | 'ME'
        | 'BL'
        | 'MF'
        | 'RS'
        | 'SX'
        | 'SS'
        | 'XK';

      /**
       * Postal or ZIP code.
       */
      postal_code: string;

      /**
       * Primary street address.
       */
      street_line_1: string;

      /**
       * Secondary street address (apartment, suite, etc.).
       */
      street_line_2: string | null;
    }

    export interface EinIdentification {
      type: 'ein';

      value: string;
    }

    export interface SsnIdentification {
      type: 'ssn';

      value: string;
    }
  }
}

export interface AccountHolderRetrieveResponse {
  /**
   * Unique identifier of the account holder.
   */
  id: string;

  /**
   * Beneficiary details used to create this account holder.
   */
  beneficiary_data:
    | AccountHolderRetrieveResponse.UsBeneficiaryDataResponse
    | AccountHolderRetrieveResponse.NonUsBeneficiaryDataResponse
    | AccountHolderRetrieveResponse.BusinessBeneficiaryDataResponse;

  /**
   * ISO 8601 UTC timestamp when the account holder was created.
   */
  created_at: string;

  /**
   * Type of the account holder.
   */
  holder_type: 'natural_person' | 'business';

  /**
   * Current account holder status.
   */
  status: 'pending' | 'active' | 'closed';

  /**
   * Resource type discriminator.
   */
  type: 'account_holder';
}

export namespace AccountHolderRetrieveResponse {
  export interface UsBeneficiaryDataResponse {
    /**
     * ISO 3166-1 alpha-2 country code of citizenship.
     */
    country_of_citizenship: 'US';

    /**
     * Date of birth as an ISO 8601 calendar date (YYYY-MM-DD).
     */
    date_of_birth: string;

    /**
     * Government-issued identification with type: "ssn" (Social Security Number,
     * format ###-##-####) or "itin" (Individual Taxpayer ID, format 9##-##-####).
     */
    identification:
      | UsBeneficiaryDataResponse.SsnIdentification
      | UsBeneficiaryDataResponse.ItinIdentification;

    /**
     * Full legal name of the account holder.
     */
    legal_name: string;

    /**
     * Residential address of the account holder.
     */
    residential_address:
      | UsBeneficiaryDataResponse.UsResidentialAddressResponse
      | UsBeneficiaryDataResponse.NonUsResidentialAddressResponse;
  }

  export namespace UsBeneficiaryDataResponse {
    export interface SsnIdentification {
      type: 'ssn';

      value: string;
    }

    export interface ItinIdentification {
      type: 'itin';

      value: string;
    }

    export interface UsResidentialAddressResponse {
      /**
       * City name.
       */
      city: string;

      /**
       * ISO 3166-1 alpha-2 country code.
       */
      country: 'US';

      /**
       * Postal or ZIP code.
       */
      postal_code: string;

      /**
       * Two-letter state code.
       */
      state: string;

      /**
       * Primary street address.
       */
      street_line_1: string;

      /**
       * Secondary street address (apartment, suite, etc.).
       */
      street_line_2: string | null;
    }

    export interface NonUsResidentialAddressResponse {
      /**
       * City name.
       */
      city: string;

      /**
       * ISO 3166-1 alpha-2 country code.
       */
      country:
        | 'AF'
        | 'AL'
        | 'DZ'
        | 'AS'
        | 'AD'
        | 'AO'
        | 'AI'
        | 'AQ'
        | 'AG'
        | 'AR'
        | 'AM'
        | 'AW'
        | 'AU'
        | 'AT'
        | 'AZ'
        | 'BS'
        | 'BH'
        | 'BD'
        | 'BB'
        | 'BY'
        | 'BE'
        | 'BZ'
        | 'BJ'
        | 'BM'
        | 'BT'
        | 'BO'
        | 'BA'
        | 'BW'
        | 'BV'
        | 'BR'
        | 'IO'
        | 'BN'
        | 'BG'
        | 'BF'
        | 'BI'
        | 'KH'
        | 'CM'
        | 'CA'
        | 'CV'
        | 'KY'
        | 'CF'
        | 'TD'
        | 'CL'
        | 'CN'
        | 'CX'
        | 'CC'
        | 'CO'
        | 'KM'
        | 'CG'
        | 'CD'
        | 'CK'
        | 'CR'
        | 'CI'
        | 'HR'
        | 'CU'
        | 'CY'
        | 'CZ'
        | 'DK'
        | 'DJ'
        | 'DM'
        | 'DO'
        | 'EC'
        | 'EG'
        | 'SV'
        | 'GQ'
        | 'ER'
        | 'EE'
        | 'ET'
        | 'FK'
        | 'FO'
        | 'FJ'
        | 'FI'
        | 'FR'
        | 'GF'
        | 'PF'
        | 'TF'
        | 'GA'
        | 'GM'
        | 'GE'
        | 'DE'
        | 'GH'
        | 'GI'
        | 'GR'
        | 'GL'
        | 'GD'
        | 'GP'
        | 'GU'
        | 'GT'
        | 'GN'
        | 'GW'
        | 'GY'
        | 'HT'
        | 'HM'
        | 'VA'
        | 'HN'
        | 'HK'
        | 'HU'
        | 'IS'
        | 'IN'
        | 'ID'
        | 'IR'
        | 'IQ'
        | 'IE'
        | 'IL'
        | 'IT'
        | 'JM'
        | 'JP'
        | 'JO'
        | 'KZ'
        | 'KE'
        | 'KI'
        | 'KP'
        | 'KR'
        | 'KW'
        | 'KG'
        | 'LA'
        | 'LV'
        | 'LB'
        | 'LS'
        | 'LR'
        | 'LY'
        | 'LI'
        | 'LT'
        | 'LU'
        | 'MO'
        | 'MG'
        | 'MW'
        | 'MY'
        | 'MV'
        | 'ML'
        | 'MT'
        | 'MH'
        | 'MQ'
        | 'MR'
        | 'MU'
        | 'YT'
        | 'MX'
        | 'FM'
        | 'MD'
        | 'MC'
        | 'MN'
        | 'MS'
        | 'MA'
        | 'MZ'
        | 'MM'
        | 'NA'
        | 'NR'
        | 'NP'
        | 'NL'
        | 'NC'
        | 'NZ'
        | 'NI'
        | 'NE'
        | 'NG'
        | 'NU'
        | 'NF'
        | 'MP'
        | 'MK'
        | 'NO'
        | 'OM'
        | 'PK'
        | 'PW'
        | 'PS'
        | 'PA'
        | 'PG'
        | 'PY'
        | 'PE'
        | 'PH'
        | 'PN'
        | 'PL'
        | 'PT'
        | 'PR'
        | 'QA'
        | 'RE'
        | 'RO'
        | 'RU'
        | 'RW'
        | 'SH'
        | 'KN'
        | 'LC'
        | 'PM'
        | 'VC'
        | 'WS'
        | 'SM'
        | 'ST'
        | 'SA'
        | 'SN'
        | 'SC'
        | 'SL'
        | 'SG'
        | 'SK'
        | 'SI'
        | 'SB'
        | 'SO'
        | 'ZA'
        | 'GS'
        | 'ES'
        | 'LK'
        | 'SD'
        | 'SR'
        | 'SJ'
        | 'SZ'
        | 'SE'
        | 'CH'
        | 'SY'
        | 'TW'
        | 'TJ'
        | 'TZ'
        | 'TH'
        | 'TL'
        | 'TG'
        | 'TK'
        | 'TO'
        | 'TT'
        | 'TN'
        | 'TR'
        | 'TM'
        | 'TC'
        | 'TV'
        | 'UG'
        | 'UA'
        | 'AE'
        | 'GB'
        | 'UM'
        | 'UY'
        | 'UZ'
        | 'VU'
        | 'VE'
        | 'VN'
        | 'VG'
        | 'VI'
        | 'WF'
        | 'EH'
        | 'YE'
        | 'ZM'
        | 'ZW'
        | 'AX'
        | 'BQ'
        | 'CW'
        | 'GG'
        | 'IM'
        | 'JE'
        | 'ME'
        | 'BL'
        | 'MF'
        | 'RS'
        | 'SX'
        | 'SS'
        | 'XK';

      /**
       * Postal or ZIP code.
       */
      postal_code: string;

      /**
       * Primary street address.
       */
      street_line_1: string;

      /**
       * Secondary street address (apartment, suite, etc.).
       */
      street_line_2: string | null;
    }
  }

  export interface NonUsBeneficiaryDataResponse {
    /**
     * ISO 3166-1 alpha-2 country code of citizenship.
     */
    country_of_citizenship:
      | 'AF'
      | 'AL'
      | 'DZ'
      | 'AS'
      | 'AD'
      | 'AO'
      | 'AI'
      | 'AQ'
      | 'AG'
      | 'AR'
      | 'AM'
      | 'AW'
      | 'AU'
      | 'AT'
      | 'AZ'
      | 'BS'
      | 'BH'
      | 'BD'
      | 'BB'
      | 'BY'
      | 'BE'
      | 'BZ'
      | 'BJ'
      | 'BM'
      | 'BT'
      | 'BO'
      | 'BA'
      | 'BW'
      | 'BV'
      | 'BR'
      | 'IO'
      | 'BN'
      | 'BG'
      | 'BF'
      | 'BI'
      | 'KH'
      | 'CM'
      | 'CA'
      | 'CV'
      | 'KY'
      | 'CF'
      | 'TD'
      | 'CL'
      | 'CN'
      | 'CX'
      | 'CC'
      | 'CO'
      | 'KM'
      | 'CG'
      | 'CD'
      | 'CK'
      | 'CR'
      | 'CI'
      | 'HR'
      | 'CU'
      | 'CY'
      | 'CZ'
      | 'DK'
      | 'DJ'
      | 'DM'
      | 'DO'
      | 'EC'
      | 'EG'
      | 'SV'
      | 'GQ'
      | 'ER'
      | 'EE'
      | 'ET'
      | 'FK'
      | 'FO'
      | 'FJ'
      | 'FI'
      | 'FR'
      | 'GF'
      | 'PF'
      | 'TF'
      | 'GA'
      | 'GM'
      | 'GE'
      | 'DE'
      | 'GH'
      | 'GI'
      | 'GR'
      | 'GL'
      | 'GD'
      | 'GP'
      | 'GU'
      | 'GT'
      | 'GN'
      | 'GW'
      | 'GY'
      | 'HT'
      | 'HM'
      | 'VA'
      | 'HN'
      | 'HK'
      | 'HU'
      | 'IS'
      | 'IN'
      | 'ID'
      | 'IR'
      | 'IQ'
      | 'IE'
      | 'IL'
      | 'IT'
      | 'JM'
      | 'JP'
      | 'JO'
      | 'KZ'
      | 'KE'
      | 'KI'
      | 'KP'
      | 'KR'
      | 'KW'
      | 'KG'
      | 'LA'
      | 'LV'
      | 'LB'
      | 'LS'
      | 'LR'
      | 'LY'
      | 'LI'
      | 'LT'
      | 'LU'
      | 'MO'
      | 'MG'
      | 'MW'
      | 'MY'
      | 'MV'
      | 'ML'
      | 'MT'
      | 'MH'
      | 'MQ'
      | 'MR'
      | 'MU'
      | 'YT'
      | 'MX'
      | 'FM'
      | 'MD'
      | 'MC'
      | 'MN'
      | 'MS'
      | 'MA'
      | 'MZ'
      | 'MM'
      | 'NA'
      | 'NR'
      | 'NP'
      | 'NL'
      | 'NC'
      | 'NZ'
      | 'NI'
      | 'NE'
      | 'NG'
      | 'NU'
      | 'NF'
      | 'MP'
      | 'MK'
      | 'NO'
      | 'OM'
      | 'PK'
      | 'PW'
      | 'PS'
      | 'PA'
      | 'PG'
      | 'PY'
      | 'PE'
      | 'PH'
      | 'PN'
      | 'PL'
      | 'PT'
      | 'PR'
      | 'QA'
      | 'RE'
      | 'RO'
      | 'RU'
      | 'RW'
      | 'SH'
      | 'KN'
      | 'LC'
      | 'PM'
      | 'VC'
      | 'WS'
      | 'SM'
      | 'ST'
      | 'SA'
      | 'SN'
      | 'SC'
      | 'SL'
      | 'SG'
      | 'SK'
      | 'SI'
      | 'SB'
      | 'SO'
      | 'ZA'
      | 'GS'
      | 'ES'
      | 'LK'
      | 'SD'
      | 'SR'
      | 'SJ'
      | 'SZ'
      | 'SE'
      | 'CH'
      | 'SY'
      | 'TW'
      | 'TJ'
      | 'TZ'
      | 'TH'
      | 'TL'
      | 'TG'
      | 'TK'
      | 'TO'
      | 'TT'
      | 'TN'
      | 'TR'
      | 'TM'
      | 'TC'
      | 'TV'
      | 'UG'
      | 'UA'
      | 'AE'
      | 'GB'
      | 'UM'
      | 'UY'
      | 'UZ'
      | 'VU'
      | 'VE'
      | 'VN'
      | 'VG'
      | 'VI'
      | 'WF'
      | 'EH'
      | 'YE'
      | 'ZM'
      | 'ZW'
      | 'AX'
      | 'BQ'
      | 'CW'
      | 'GG'
      | 'IM'
      | 'JE'
      | 'ME'
      | 'BL'
      | 'MF'
      | 'RS'
      | 'SX'
      | 'SS'
      | 'XK';

    /**
     * Date of birth as an ISO 8601 calendar date (YYYY-MM-DD).
     */
    date_of_birth: string;

    /**
     * Government-issued identification with type: "id" (generic government-issued ID).
     */
    identification: NonUsBeneficiaryDataResponse.Identification;

    /**
     * Full legal name of the account holder.
     */
    legal_name: string;

    /**
     * Residential address of the account holder.
     */
    residential_address:
      | NonUsBeneficiaryDataResponse.UsResidentialAddressResponse
      | NonUsBeneficiaryDataResponse.NonUsResidentialAddressResponse;
  }

  export namespace NonUsBeneficiaryDataResponse {
    /**
     * Government-issued identification with type: "id" (generic government-issued ID).
     */
    export interface Identification {
      type: 'id';

      value: string;
    }

    export interface UsResidentialAddressResponse {
      /**
       * City name.
       */
      city: string;

      /**
       * ISO 3166-1 alpha-2 country code.
       */
      country: 'US';

      /**
       * Postal or ZIP code.
       */
      postal_code: string;

      /**
       * Two-letter state code.
       */
      state: string;

      /**
       * Primary street address.
       */
      street_line_1: string;

      /**
       * Secondary street address (apartment, suite, etc.).
       */
      street_line_2: string | null;
    }

    export interface NonUsResidentialAddressResponse {
      /**
       * City name.
       */
      city: string;

      /**
       * ISO 3166-1 alpha-2 country code.
       */
      country:
        | 'AF'
        | 'AL'
        | 'DZ'
        | 'AS'
        | 'AD'
        | 'AO'
        | 'AI'
        | 'AQ'
        | 'AG'
        | 'AR'
        | 'AM'
        | 'AW'
        | 'AU'
        | 'AT'
        | 'AZ'
        | 'BS'
        | 'BH'
        | 'BD'
        | 'BB'
        | 'BY'
        | 'BE'
        | 'BZ'
        | 'BJ'
        | 'BM'
        | 'BT'
        | 'BO'
        | 'BA'
        | 'BW'
        | 'BV'
        | 'BR'
        | 'IO'
        | 'BN'
        | 'BG'
        | 'BF'
        | 'BI'
        | 'KH'
        | 'CM'
        | 'CA'
        | 'CV'
        | 'KY'
        | 'CF'
        | 'TD'
        | 'CL'
        | 'CN'
        | 'CX'
        | 'CC'
        | 'CO'
        | 'KM'
        | 'CG'
        | 'CD'
        | 'CK'
        | 'CR'
        | 'CI'
        | 'HR'
        | 'CU'
        | 'CY'
        | 'CZ'
        | 'DK'
        | 'DJ'
        | 'DM'
        | 'DO'
        | 'EC'
        | 'EG'
        | 'SV'
        | 'GQ'
        | 'ER'
        | 'EE'
        | 'ET'
        | 'FK'
        | 'FO'
        | 'FJ'
        | 'FI'
        | 'FR'
        | 'GF'
        | 'PF'
        | 'TF'
        | 'GA'
        | 'GM'
        | 'GE'
        | 'DE'
        | 'GH'
        | 'GI'
        | 'GR'
        | 'GL'
        | 'GD'
        | 'GP'
        | 'GU'
        | 'GT'
        | 'GN'
        | 'GW'
        | 'GY'
        | 'HT'
        | 'HM'
        | 'VA'
        | 'HN'
        | 'HK'
        | 'HU'
        | 'IS'
        | 'IN'
        | 'ID'
        | 'IR'
        | 'IQ'
        | 'IE'
        | 'IL'
        | 'IT'
        | 'JM'
        | 'JP'
        | 'JO'
        | 'KZ'
        | 'KE'
        | 'KI'
        | 'KP'
        | 'KR'
        | 'KW'
        | 'KG'
        | 'LA'
        | 'LV'
        | 'LB'
        | 'LS'
        | 'LR'
        | 'LY'
        | 'LI'
        | 'LT'
        | 'LU'
        | 'MO'
        | 'MG'
        | 'MW'
        | 'MY'
        | 'MV'
        | 'ML'
        | 'MT'
        | 'MH'
        | 'MQ'
        | 'MR'
        | 'MU'
        | 'YT'
        | 'MX'
        | 'FM'
        | 'MD'
        | 'MC'
        | 'MN'
        | 'MS'
        | 'MA'
        | 'MZ'
        | 'MM'
        | 'NA'
        | 'NR'
        | 'NP'
        | 'NL'
        | 'NC'
        | 'NZ'
        | 'NI'
        | 'NE'
        | 'NG'
        | 'NU'
        | 'NF'
        | 'MP'
        | 'MK'
        | 'NO'
        | 'OM'
        | 'PK'
        | 'PW'
        | 'PS'
        | 'PA'
        | 'PG'
        | 'PY'
        | 'PE'
        | 'PH'
        | 'PN'
        | 'PL'
        | 'PT'
        | 'PR'
        | 'QA'
        | 'RE'
        | 'RO'
        | 'RU'
        | 'RW'
        | 'SH'
        | 'KN'
        | 'LC'
        | 'PM'
        | 'VC'
        | 'WS'
        | 'SM'
        | 'ST'
        | 'SA'
        | 'SN'
        | 'SC'
        | 'SL'
        | 'SG'
        | 'SK'
        | 'SI'
        | 'SB'
        | 'SO'
        | 'ZA'
        | 'GS'
        | 'ES'
        | 'LK'
        | 'SD'
        | 'SR'
        | 'SJ'
        | 'SZ'
        | 'SE'
        | 'CH'
        | 'SY'
        | 'TW'
        | 'TJ'
        | 'TZ'
        | 'TH'
        | 'TL'
        | 'TG'
        | 'TK'
        | 'TO'
        | 'TT'
        | 'TN'
        | 'TR'
        | 'TM'
        | 'TC'
        | 'TV'
        | 'UG'
        | 'UA'
        | 'AE'
        | 'GB'
        | 'UM'
        | 'UY'
        | 'UZ'
        | 'VU'
        | 'VE'
        | 'VN'
        | 'VG'
        | 'VI'
        | 'WF'
        | 'EH'
        | 'YE'
        | 'ZM'
        | 'ZW'
        | 'AX'
        | 'BQ'
        | 'CW'
        | 'GG'
        | 'IM'
        | 'JE'
        | 'ME'
        | 'BL'
        | 'MF'
        | 'RS'
        | 'SX'
        | 'SS'
        | 'XK';

      /**
       * Postal or ZIP code.
       */
      postal_code: string;

      /**
       * Primary street address.
       */
      street_line_1: string;

      /**
       * Secondary street address (apartment, suite, etc.).
       */
      street_line_2: string | null;
    }
  }

  export interface BusinessBeneficiaryDataResponse {
    /**
     * Beneficial owners of the business. At least one required.
     */
    beneficial_owners: Array<
      | BusinessBeneficiaryDataResponse.UsBeneficiaryDataResponse
      | BusinessBeneficiaryDataResponse.NonUsBeneficiaryDataResponse
    >;

    /**
     * Individual with primary responsibility for controlling, managing, or directing
     * the business.
     */
    control_person:
      | BusinessBeneficiaryDataResponse.UnionMember0
      | BusinessBeneficiaryDataResponse.UnionMember1;

    /**
     * ISO 3166-1 alpha-2 country code where the business is incorporated.
     */
    country_of_incorporation:
      | 'AF'
      | 'AL'
      | 'DZ'
      | 'AS'
      | 'AD'
      | 'AO'
      | 'AI'
      | 'AQ'
      | 'AG'
      | 'AR'
      | 'AM'
      | 'AW'
      | 'AU'
      | 'AT'
      | 'AZ'
      | 'BS'
      | 'BH'
      | 'BD'
      | 'BB'
      | 'BY'
      | 'BE'
      | 'BZ'
      | 'BJ'
      | 'BM'
      | 'BT'
      | 'BO'
      | 'BA'
      | 'BW'
      | 'BV'
      | 'BR'
      | 'IO'
      | 'BN'
      | 'BG'
      | 'BF'
      | 'BI'
      | 'KH'
      | 'CM'
      | 'CA'
      | 'CV'
      | 'KY'
      | 'CF'
      | 'TD'
      | 'CL'
      | 'CN'
      | 'CX'
      | 'CC'
      | 'CO'
      | 'KM'
      | 'CG'
      | 'CD'
      | 'CK'
      | 'CR'
      | 'CI'
      | 'HR'
      | 'CU'
      | 'CY'
      | 'CZ'
      | 'DK'
      | 'DJ'
      | 'DM'
      | 'DO'
      | 'EC'
      | 'EG'
      | 'SV'
      | 'GQ'
      | 'ER'
      | 'EE'
      | 'ET'
      | 'FK'
      | 'FO'
      | 'FJ'
      | 'FI'
      | 'FR'
      | 'GF'
      | 'PF'
      | 'TF'
      | 'GA'
      | 'GM'
      | 'GE'
      | 'DE'
      | 'GH'
      | 'GI'
      | 'GR'
      | 'GL'
      | 'GD'
      | 'GP'
      | 'GU'
      | 'GT'
      | 'GN'
      | 'GW'
      | 'GY'
      | 'HT'
      | 'HM'
      | 'VA'
      | 'HN'
      | 'HK'
      | 'HU'
      | 'IS'
      | 'IN'
      | 'ID'
      | 'IR'
      | 'IQ'
      | 'IE'
      | 'IL'
      | 'IT'
      | 'JM'
      | 'JP'
      | 'JO'
      | 'KZ'
      | 'KE'
      | 'KI'
      | 'KP'
      | 'KR'
      | 'KW'
      | 'KG'
      | 'LA'
      | 'LV'
      | 'LB'
      | 'LS'
      | 'LR'
      | 'LY'
      | 'LI'
      | 'LT'
      | 'LU'
      | 'MO'
      | 'MG'
      | 'MW'
      | 'MY'
      | 'MV'
      | 'ML'
      | 'MT'
      | 'MH'
      | 'MQ'
      | 'MR'
      | 'MU'
      | 'YT'
      | 'MX'
      | 'FM'
      | 'MD'
      | 'MC'
      | 'MN'
      | 'MS'
      | 'MA'
      | 'MZ'
      | 'MM'
      | 'NA'
      | 'NR'
      | 'NP'
      | 'NL'
      | 'NC'
      | 'NZ'
      | 'NI'
      | 'NE'
      | 'NG'
      | 'NU'
      | 'NF'
      | 'MP'
      | 'MK'
      | 'NO'
      | 'OM'
      | 'PK'
      | 'PW'
      | 'PS'
      | 'PA'
      | 'PG'
      | 'PY'
      | 'PE'
      | 'PH'
      | 'PN'
      | 'PL'
      | 'PT'
      | 'PR'
      | 'QA'
      | 'RE'
      | 'RO'
      | 'RU'
      | 'RW'
      | 'SH'
      | 'KN'
      | 'LC'
      | 'PM'
      | 'VC'
      | 'WS'
      | 'SM'
      | 'ST'
      | 'SA'
      | 'SN'
      | 'SC'
      | 'SL'
      | 'SG'
      | 'SK'
      | 'SI'
      | 'SB'
      | 'SO'
      | 'ZA'
      | 'GS'
      | 'ES'
      | 'LK'
      | 'SD'
      | 'SR'
      | 'SJ'
      | 'SZ'
      | 'SE'
      | 'CH'
      | 'SY'
      | 'TW'
      | 'TJ'
      | 'TZ'
      | 'TH'
      | 'TL'
      | 'TG'
      | 'TK'
      | 'TO'
      | 'TT'
      | 'TN'
      | 'TR'
      | 'TM'
      | 'TC'
      | 'TV'
      | 'UG'
      | 'UA'
      | 'AE'
      | 'GB'
      | 'US'
      | 'UM'
      | 'UY'
      | 'UZ'
      | 'VU'
      | 'VE'
      | 'VN'
      | 'VG'
      | 'VI'
      | 'WF'
      | 'EH'
      | 'YE'
      | 'ZM'
      | 'ZW'
      | 'AX'
      | 'BQ'
      | 'CW'
      | 'GG'
      | 'IM'
      | 'JE'
      | 'ME'
      | 'BL'
      | 'MF'
      | 'RS'
      | 'SX'
      | 'SS'
      | 'XK';

    /**
     * Trade name the business operates under, if different from the legal name.
     */
    doing_business_as: string | null;

    /**
     * Full legal name of the business.
     */
    legal_business_name: string;

    /**
     * Physical operating address of the business.
     */
    physical_address:
      | BusinessBeneficiaryDataResponse.UsResidentialAddressResponse
      | BusinessBeneficiaryDataResponse.NonUsResidentialAddressResponse;

    /**
     * Registered legal address of the business.
     */
    registered_address:
      | BusinessBeneficiaryDataResponse.UsResidentialAddressResponse
      | BusinessBeneficiaryDataResponse.NonUsResidentialAddressResponse;

    /**
     * Business registration number: type "ein" (Employer Identification Number, format
     * ##-#######) or "ssn" (Social Security Number, format ###-##-####).
     */
    registration_number:
      | BusinessBeneficiaryDataResponse.EinIdentification
      | BusinessBeneficiaryDataResponse.SsnIdentification;

    /**
     * State or subdivision where the business is incorporated.
     */
    state_of_incorporation: string;

    /**
     * Four-digit year the business was incorporated.
     */
    year_of_incorporation: number;
  }

  export namespace BusinessBeneficiaryDataResponse {
    export interface UsBeneficiaryDataResponse {
      /**
       * ISO 3166-1 alpha-2 country code of citizenship.
       */
      country_of_citizenship: 'US';

      /**
       * Date of birth as an ISO 8601 calendar date (YYYY-MM-DD).
       */
      date_of_birth: string;

      /**
       * Government-issued identification with type: "ssn" (Social Security Number,
       * format ###-##-####) or "itin" (Individual Taxpayer ID, format 9##-##-####).
       */
      identification:
        | UsBeneficiaryDataResponse.SsnIdentification
        | UsBeneficiaryDataResponse.ItinIdentification;

      /**
       * Full legal name of the account holder.
       */
      legal_name: string;

      /**
       * Residential address of the account holder.
       */
      residential_address:
        | UsBeneficiaryDataResponse.UsResidentialAddressResponse
        | UsBeneficiaryDataResponse.NonUsResidentialAddressResponse;
    }

    export namespace UsBeneficiaryDataResponse {
      export interface SsnIdentification {
        type: 'ssn';

        value: string;
      }

      export interface ItinIdentification {
        type: 'itin';

        value: string;
      }

      export interface UsResidentialAddressResponse {
        /**
         * City name.
         */
        city: string;

        /**
         * ISO 3166-1 alpha-2 country code.
         */
        country: 'US';

        /**
         * Postal or ZIP code.
         */
        postal_code: string;

        /**
         * Two-letter state code.
         */
        state: string;

        /**
         * Primary street address.
         */
        street_line_1: string;

        /**
         * Secondary street address (apartment, suite, etc.).
         */
        street_line_2: string | null;
      }

      export interface NonUsResidentialAddressResponse {
        /**
         * City name.
         */
        city: string;

        /**
         * ISO 3166-1 alpha-2 country code.
         */
        country:
          | 'AF'
          | 'AL'
          | 'DZ'
          | 'AS'
          | 'AD'
          | 'AO'
          | 'AI'
          | 'AQ'
          | 'AG'
          | 'AR'
          | 'AM'
          | 'AW'
          | 'AU'
          | 'AT'
          | 'AZ'
          | 'BS'
          | 'BH'
          | 'BD'
          | 'BB'
          | 'BY'
          | 'BE'
          | 'BZ'
          | 'BJ'
          | 'BM'
          | 'BT'
          | 'BO'
          | 'BA'
          | 'BW'
          | 'BV'
          | 'BR'
          | 'IO'
          | 'BN'
          | 'BG'
          | 'BF'
          | 'BI'
          | 'KH'
          | 'CM'
          | 'CA'
          | 'CV'
          | 'KY'
          | 'CF'
          | 'TD'
          | 'CL'
          | 'CN'
          | 'CX'
          | 'CC'
          | 'CO'
          | 'KM'
          | 'CG'
          | 'CD'
          | 'CK'
          | 'CR'
          | 'CI'
          | 'HR'
          | 'CU'
          | 'CY'
          | 'CZ'
          | 'DK'
          | 'DJ'
          | 'DM'
          | 'DO'
          | 'EC'
          | 'EG'
          | 'SV'
          | 'GQ'
          | 'ER'
          | 'EE'
          | 'ET'
          | 'FK'
          | 'FO'
          | 'FJ'
          | 'FI'
          | 'FR'
          | 'GF'
          | 'PF'
          | 'TF'
          | 'GA'
          | 'GM'
          | 'GE'
          | 'DE'
          | 'GH'
          | 'GI'
          | 'GR'
          | 'GL'
          | 'GD'
          | 'GP'
          | 'GU'
          | 'GT'
          | 'GN'
          | 'GW'
          | 'GY'
          | 'HT'
          | 'HM'
          | 'VA'
          | 'HN'
          | 'HK'
          | 'HU'
          | 'IS'
          | 'IN'
          | 'ID'
          | 'IR'
          | 'IQ'
          | 'IE'
          | 'IL'
          | 'IT'
          | 'JM'
          | 'JP'
          | 'JO'
          | 'KZ'
          | 'KE'
          | 'KI'
          | 'KP'
          | 'KR'
          | 'KW'
          | 'KG'
          | 'LA'
          | 'LV'
          | 'LB'
          | 'LS'
          | 'LR'
          | 'LY'
          | 'LI'
          | 'LT'
          | 'LU'
          | 'MO'
          | 'MG'
          | 'MW'
          | 'MY'
          | 'MV'
          | 'ML'
          | 'MT'
          | 'MH'
          | 'MQ'
          | 'MR'
          | 'MU'
          | 'YT'
          | 'MX'
          | 'FM'
          | 'MD'
          | 'MC'
          | 'MN'
          | 'MS'
          | 'MA'
          | 'MZ'
          | 'MM'
          | 'NA'
          | 'NR'
          | 'NP'
          | 'NL'
          | 'NC'
          | 'NZ'
          | 'NI'
          | 'NE'
          | 'NG'
          | 'NU'
          | 'NF'
          | 'MP'
          | 'MK'
          | 'NO'
          | 'OM'
          | 'PK'
          | 'PW'
          | 'PS'
          | 'PA'
          | 'PG'
          | 'PY'
          | 'PE'
          | 'PH'
          | 'PN'
          | 'PL'
          | 'PT'
          | 'PR'
          | 'QA'
          | 'RE'
          | 'RO'
          | 'RU'
          | 'RW'
          | 'SH'
          | 'KN'
          | 'LC'
          | 'PM'
          | 'VC'
          | 'WS'
          | 'SM'
          | 'ST'
          | 'SA'
          | 'SN'
          | 'SC'
          | 'SL'
          | 'SG'
          | 'SK'
          | 'SI'
          | 'SB'
          | 'SO'
          | 'ZA'
          | 'GS'
          | 'ES'
          | 'LK'
          | 'SD'
          | 'SR'
          | 'SJ'
          | 'SZ'
          | 'SE'
          | 'CH'
          | 'SY'
          | 'TW'
          | 'TJ'
          | 'TZ'
          | 'TH'
          | 'TL'
          | 'TG'
          | 'TK'
          | 'TO'
          | 'TT'
          | 'TN'
          | 'TR'
          | 'TM'
          | 'TC'
          | 'TV'
          | 'UG'
          | 'UA'
          | 'AE'
          | 'GB'
          | 'UM'
          | 'UY'
          | 'UZ'
          | 'VU'
          | 'VE'
          | 'VN'
          | 'VG'
          | 'VI'
          | 'WF'
          | 'EH'
          | 'YE'
          | 'ZM'
          | 'ZW'
          | 'AX'
          | 'BQ'
          | 'CW'
          | 'GG'
          | 'IM'
          | 'JE'
          | 'ME'
          | 'BL'
          | 'MF'
          | 'RS'
          | 'SX'
          | 'SS'
          | 'XK';

        /**
         * Postal or ZIP code.
         */
        postal_code: string;

        /**
         * Primary street address.
         */
        street_line_1: string;

        /**
         * Secondary street address (apartment, suite, etc.).
         */
        street_line_2: string | null;
      }
    }

    export interface NonUsBeneficiaryDataResponse {
      /**
       * ISO 3166-1 alpha-2 country code of citizenship.
       */
      country_of_citizenship:
        | 'AF'
        | 'AL'
        | 'DZ'
        | 'AS'
        | 'AD'
        | 'AO'
        | 'AI'
        | 'AQ'
        | 'AG'
        | 'AR'
        | 'AM'
        | 'AW'
        | 'AU'
        | 'AT'
        | 'AZ'
        | 'BS'
        | 'BH'
        | 'BD'
        | 'BB'
        | 'BY'
        | 'BE'
        | 'BZ'
        | 'BJ'
        | 'BM'
        | 'BT'
        | 'BO'
        | 'BA'
        | 'BW'
        | 'BV'
        | 'BR'
        | 'IO'
        | 'BN'
        | 'BG'
        | 'BF'
        | 'BI'
        | 'KH'
        | 'CM'
        | 'CA'
        | 'CV'
        | 'KY'
        | 'CF'
        | 'TD'
        | 'CL'
        | 'CN'
        | 'CX'
        | 'CC'
        | 'CO'
        | 'KM'
        | 'CG'
        | 'CD'
        | 'CK'
        | 'CR'
        | 'CI'
        | 'HR'
        | 'CU'
        | 'CY'
        | 'CZ'
        | 'DK'
        | 'DJ'
        | 'DM'
        | 'DO'
        | 'EC'
        | 'EG'
        | 'SV'
        | 'GQ'
        | 'ER'
        | 'EE'
        | 'ET'
        | 'FK'
        | 'FO'
        | 'FJ'
        | 'FI'
        | 'FR'
        | 'GF'
        | 'PF'
        | 'TF'
        | 'GA'
        | 'GM'
        | 'GE'
        | 'DE'
        | 'GH'
        | 'GI'
        | 'GR'
        | 'GL'
        | 'GD'
        | 'GP'
        | 'GU'
        | 'GT'
        | 'GN'
        | 'GW'
        | 'GY'
        | 'HT'
        | 'HM'
        | 'VA'
        | 'HN'
        | 'HK'
        | 'HU'
        | 'IS'
        | 'IN'
        | 'ID'
        | 'IR'
        | 'IQ'
        | 'IE'
        | 'IL'
        | 'IT'
        | 'JM'
        | 'JP'
        | 'JO'
        | 'KZ'
        | 'KE'
        | 'KI'
        | 'KP'
        | 'KR'
        | 'KW'
        | 'KG'
        | 'LA'
        | 'LV'
        | 'LB'
        | 'LS'
        | 'LR'
        | 'LY'
        | 'LI'
        | 'LT'
        | 'LU'
        | 'MO'
        | 'MG'
        | 'MW'
        | 'MY'
        | 'MV'
        | 'ML'
        | 'MT'
        | 'MH'
        | 'MQ'
        | 'MR'
        | 'MU'
        | 'YT'
        | 'MX'
        | 'FM'
        | 'MD'
        | 'MC'
        | 'MN'
        | 'MS'
        | 'MA'
        | 'MZ'
        | 'MM'
        | 'NA'
        | 'NR'
        | 'NP'
        | 'NL'
        | 'NC'
        | 'NZ'
        | 'NI'
        | 'NE'
        | 'NG'
        | 'NU'
        | 'NF'
        | 'MP'
        | 'MK'
        | 'NO'
        | 'OM'
        | 'PK'
        | 'PW'
        | 'PS'
        | 'PA'
        | 'PG'
        | 'PY'
        | 'PE'
        | 'PH'
        | 'PN'
        | 'PL'
        | 'PT'
        | 'PR'
        | 'QA'
        | 'RE'
        | 'RO'
        | 'RU'
        | 'RW'
        | 'SH'
        | 'KN'
        | 'LC'
        | 'PM'
        | 'VC'
        | 'WS'
        | 'SM'
        | 'ST'
        | 'SA'
        | 'SN'
        | 'SC'
        | 'SL'
        | 'SG'
        | 'SK'
        | 'SI'
        | 'SB'
        | 'SO'
        | 'ZA'
        | 'GS'
        | 'ES'
        | 'LK'
        | 'SD'
        | 'SR'
        | 'SJ'
        | 'SZ'
        | 'SE'
        | 'CH'
        | 'SY'
        | 'TW'
        | 'TJ'
        | 'TZ'
        | 'TH'
        | 'TL'
        | 'TG'
        | 'TK'
        | 'TO'
        | 'TT'
        | 'TN'
        | 'TR'
        | 'TM'
        | 'TC'
        | 'TV'
        | 'UG'
        | 'UA'
        | 'AE'
        | 'GB'
        | 'UM'
        | 'UY'
        | 'UZ'
        | 'VU'
        | 'VE'
        | 'VN'
        | 'VG'
        | 'VI'
        | 'WF'
        | 'EH'
        | 'YE'
        | 'ZM'
        | 'ZW'
        | 'AX'
        | 'BQ'
        | 'CW'
        | 'GG'
        | 'IM'
        | 'JE'
        | 'ME'
        | 'BL'
        | 'MF'
        | 'RS'
        | 'SX'
        | 'SS'
        | 'XK';

      /**
       * Date of birth as an ISO 8601 calendar date (YYYY-MM-DD).
       */
      date_of_birth: string;

      /**
       * Government-issued identification with type: "id" (generic government-issued ID).
       */
      identification: NonUsBeneficiaryDataResponse.Identification;

      /**
       * Full legal name of the account holder.
       */
      legal_name: string;

      /**
       * Residential address of the account holder.
       */
      residential_address:
        | NonUsBeneficiaryDataResponse.UsResidentialAddressResponse
        | NonUsBeneficiaryDataResponse.NonUsResidentialAddressResponse;
    }

    export namespace NonUsBeneficiaryDataResponse {
      /**
       * Government-issued identification with type: "id" (generic government-issued ID).
       */
      export interface Identification {
        type: 'id';

        value: string;
      }

      export interface UsResidentialAddressResponse {
        /**
         * City name.
         */
        city: string;

        /**
         * ISO 3166-1 alpha-2 country code.
         */
        country: 'US';

        /**
         * Postal or ZIP code.
         */
        postal_code: string;

        /**
         * Two-letter state code.
         */
        state: string;

        /**
         * Primary street address.
         */
        street_line_1: string;

        /**
         * Secondary street address (apartment, suite, etc.).
         */
        street_line_2: string | null;
      }

      export interface NonUsResidentialAddressResponse {
        /**
         * City name.
         */
        city: string;

        /**
         * ISO 3166-1 alpha-2 country code.
         */
        country:
          | 'AF'
          | 'AL'
          | 'DZ'
          | 'AS'
          | 'AD'
          | 'AO'
          | 'AI'
          | 'AQ'
          | 'AG'
          | 'AR'
          | 'AM'
          | 'AW'
          | 'AU'
          | 'AT'
          | 'AZ'
          | 'BS'
          | 'BH'
          | 'BD'
          | 'BB'
          | 'BY'
          | 'BE'
          | 'BZ'
          | 'BJ'
          | 'BM'
          | 'BT'
          | 'BO'
          | 'BA'
          | 'BW'
          | 'BV'
          | 'BR'
          | 'IO'
          | 'BN'
          | 'BG'
          | 'BF'
          | 'BI'
          | 'KH'
          | 'CM'
          | 'CA'
          | 'CV'
          | 'KY'
          | 'CF'
          | 'TD'
          | 'CL'
          | 'CN'
          | 'CX'
          | 'CC'
          | 'CO'
          | 'KM'
          | 'CG'
          | 'CD'
          | 'CK'
          | 'CR'
          | 'CI'
          | 'HR'
          | 'CU'
          | 'CY'
          | 'CZ'
          | 'DK'
          | 'DJ'
          | 'DM'
          | 'DO'
          | 'EC'
          | 'EG'
          | 'SV'
          | 'GQ'
          | 'ER'
          | 'EE'
          | 'ET'
          | 'FK'
          | 'FO'
          | 'FJ'
          | 'FI'
          | 'FR'
          | 'GF'
          | 'PF'
          | 'TF'
          | 'GA'
          | 'GM'
          | 'GE'
          | 'DE'
          | 'GH'
          | 'GI'
          | 'GR'
          | 'GL'
          | 'GD'
          | 'GP'
          | 'GU'
          | 'GT'
          | 'GN'
          | 'GW'
          | 'GY'
          | 'HT'
          | 'HM'
          | 'VA'
          | 'HN'
          | 'HK'
          | 'HU'
          | 'IS'
          | 'IN'
          | 'ID'
          | 'IR'
          | 'IQ'
          | 'IE'
          | 'IL'
          | 'IT'
          | 'JM'
          | 'JP'
          | 'JO'
          | 'KZ'
          | 'KE'
          | 'KI'
          | 'KP'
          | 'KR'
          | 'KW'
          | 'KG'
          | 'LA'
          | 'LV'
          | 'LB'
          | 'LS'
          | 'LR'
          | 'LY'
          | 'LI'
          | 'LT'
          | 'LU'
          | 'MO'
          | 'MG'
          | 'MW'
          | 'MY'
          | 'MV'
          | 'ML'
          | 'MT'
          | 'MH'
          | 'MQ'
          | 'MR'
          | 'MU'
          | 'YT'
          | 'MX'
          | 'FM'
          | 'MD'
          | 'MC'
          | 'MN'
          | 'MS'
          | 'MA'
          | 'MZ'
          | 'MM'
          | 'NA'
          | 'NR'
          | 'NP'
          | 'NL'
          | 'NC'
          | 'NZ'
          | 'NI'
          | 'NE'
          | 'NG'
          | 'NU'
          | 'NF'
          | 'MP'
          | 'MK'
          | 'NO'
          | 'OM'
          | 'PK'
          | 'PW'
          | 'PS'
          | 'PA'
          | 'PG'
          | 'PY'
          | 'PE'
          | 'PH'
          | 'PN'
          | 'PL'
          | 'PT'
          | 'PR'
          | 'QA'
          | 'RE'
          | 'RO'
          | 'RU'
          | 'RW'
          | 'SH'
          | 'KN'
          | 'LC'
          | 'PM'
          | 'VC'
          | 'WS'
          | 'SM'
          | 'ST'
          | 'SA'
          | 'SN'
          | 'SC'
          | 'SL'
          | 'SG'
          | 'SK'
          | 'SI'
          | 'SB'
          | 'SO'
          | 'ZA'
          | 'GS'
          | 'ES'
          | 'LK'
          | 'SD'
          | 'SR'
          | 'SJ'
          | 'SZ'
          | 'SE'
          | 'CH'
          | 'SY'
          | 'TW'
          | 'TJ'
          | 'TZ'
          | 'TH'
          | 'TL'
          | 'TG'
          | 'TK'
          | 'TO'
          | 'TT'
          | 'TN'
          | 'TR'
          | 'TM'
          | 'TC'
          | 'TV'
          | 'UG'
          | 'UA'
          | 'AE'
          | 'GB'
          | 'UM'
          | 'UY'
          | 'UZ'
          | 'VU'
          | 'VE'
          | 'VN'
          | 'VG'
          | 'VI'
          | 'WF'
          | 'EH'
          | 'YE'
          | 'ZM'
          | 'ZW'
          | 'AX'
          | 'BQ'
          | 'CW'
          | 'GG'
          | 'IM'
          | 'JE'
          | 'ME'
          | 'BL'
          | 'MF'
          | 'RS'
          | 'SX'
          | 'SS'
          | 'XK';

        /**
         * Postal or ZIP code.
         */
        postal_code: string;

        /**
         * Primary street address.
         */
        street_line_1: string;

        /**
         * Secondary street address (apartment, suite, etc.).
         */
        street_line_2: string | null;
      }
    }

    export interface UnionMember0 {
      /**
       * ISO 3166-1 alpha-2 country code of citizenship.
       */
      country_of_citizenship: 'US';

      /**
       * Date of birth as an ISO 8601 calendar date (YYYY-MM-DD).
       */
      date_of_birth: string;

      /**
       * Government-issued identification with type: "ssn" (Social Security Number,
       * format ###-##-####) or "itin" (Individual Taxpayer ID, format 9##-##-####).
       */
      identification: UnionMember0.SsnIdentification | UnionMember0.ItinIdentification;

      /**
       * Full legal name of the account holder.
       */
      legal_name: string;

      /**
       * Residential address of the account holder.
       */
      residential_address:
        | UnionMember0.UsResidentialAddressResponse
        | UnionMember0.NonUsResidentialAddressResponse;

      /**
       * Role of the control person at the business (e.g., "CEO", "President", "Managing
       * Director").
       */
      title: string;
    }

    export namespace UnionMember0 {
      export interface SsnIdentification {
        type: 'ssn';

        value: string;
      }

      export interface ItinIdentification {
        type: 'itin';

        value: string;
      }

      export interface UsResidentialAddressResponse {
        /**
         * City name.
         */
        city: string;

        /**
         * ISO 3166-1 alpha-2 country code.
         */
        country: 'US';

        /**
         * Postal or ZIP code.
         */
        postal_code: string;

        /**
         * Two-letter state code.
         */
        state: string;

        /**
         * Primary street address.
         */
        street_line_1: string;

        /**
         * Secondary street address (apartment, suite, etc.).
         */
        street_line_2: string | null;
      }

      export interface NonUsResidentialAddressResponse {
        /**
         * City name.
         */
        city: string;

        /**
         * ISO 3166-1 alpha-2 country code.
         */
        country:
          | 'AF'
          | 'AL'
          | 'DZ'
          | 'AS'
          | 'AD'
          | 'AO'
          | 'AI'
          | 'AQ'
          | 'AG'
          | 'AR'
          | 'AM'
          | 'AW'
          | 'AU'
          | 'AT'
          | 'AZ'
          | 'BS'
          | 'BH'
          | 'BD'
          | 'BB'
          | 'BY'
          | 'BE'
          | 'BZ'
          | 'BJ'
          | 'BM'
          | 'BT'
          | 'BO'
          | 'BA'
          | 'BW'
          | 'BV'
          | 'BR'
          | 'IO'
          | 'BN'
          | 'BG'
          | 'BF'
          | 'BI'
          | 'KH'
          | 'CM'
          | 'CA'
          | 'CV'
          | 'KY'
          | 'CF'
          | 'TD'
          | 'CL'
          | 'CN'
          | 'CX'
          | 'CC'
          | 'CO'
          | 'KM'
          | 'CG'
          | 'CD'
          | 'CK'
          | 'CR'
          | 'CI'
          | 'HR'
          | 'CU'
          | 'CY'
          | 'CZ'
          | 'DK'
          | 'DJ'
          | 'DM'
          | 'DO'
          | 'EC'
          | 'EG'
          | 'SV'
          | 'GQ'
          | 'ER'
          | 'EE'
          | 'ET'
          | 'FK'
          | 'FO'
          | 'FJ'
          | 'FI'
          | 'FR'
          | 'GF'
          | 'PF'
          | 'TF'
          | 'GA'
          | 'GM'
          | 'GE'
          | 'DE'
          | 'GH'
          | 'GI'
          | 'GR'
          | 'GL'
          | 'GD'
          | 'GP'
          | 'GU'
          | 'GT'
          | 'GN'
          | 'GW'
          | 'GY'
          | 'HT'
          | 'HM'
          | 'VA'
          | 'HN'
          | 'HK'
          | 'HU'
          | 'IS'
          | 'IN'
          | 'ID'
          | 'IR'
          | 'IQ'
          | 'IE'
          | 'IL'
          | 'IT'
          | 'JM'
          | 'JP'
          | 'JO'
          | 'KZ'
          | 'KE'
          | 'KI'
          | 'KP'
          | 'KR'
          | 'KW'
          | 'KG'
          | 'LA'
          | 'LV'
          | 'LB'
          | 'LS'
          | 'LR'
          | 'LY'
          | 'LI'
          | 'LT'
          | 'LU'
          | 'MO'
          | 'MG'
          | 'MW'
          | 'MY'
          | 'MV'
          | 'ML'
          | 'MT'
          | 'MH'
          | 'MQ'
          | 'MR'
          | 'MU'
          | 'YT'
          | 'MX'
          | 'FM'
          | 'MD'
          | 'MC'
          | 'MN'
          | 'MS'
          | 'MA'
          | 'MZ'
          | 'MM'
          | 'NA'
          | 'NR'
          | 'NP'
          | 'NL'
          | 'NC'
          | 'NZ'
          | 'NI'
          | 'NE'
          | 'NG'
          | 'NU'
          | 'NF'
          | 'MP'
          | 'MK'
          | 'NO'
          | 'OM'
          | 'PK'
          | 'PW'
          | 'PS'
          | 'PA'
          | 'PG'
          | 'PY'
          | 'PE'
          | 'PH'
          | 'PN'
          | 'PL'
          | 'PT'
          | 'PR'
          | 'QA'
          | 'RE'
          | 'RO'
          | 'RU'
          | 'RW'
          | 'SH'
          | 'KN'
          | 'LC'
          | 'PM'
          | 'VC'
          | 'WS'
          | 'SM'
          | 'ST'
          | 'SA'
          | 'SN'
          | 'SC'
          | 'SL'
          | 'SG'
          | 'SK'
          | 'SI'
          | 'SB'
          | 'SO'
          | 'ZA'
          | 'GS'
          | 'ES'
          | 'LK'
          | 'SD'
          | 'SR'
          | 'SJ'
          | 'SZ'
          | 'SE'
          | 'CH'
          | 'SY'
          | 'TW'
          | 'TJ'
          | 'TZ'
          | 'TH'
          | 'TL'
          | 'TG'
          | 'TK'
          | 'TO'
          | 'TT'
          | 'TN'
          | 'TR'
          | 'TM'
          | 'TC'
          | 'TV'
          | 'UG'
          | 'UA'
          | 'AE'
          | 'GB'
          | 'UM'
          | 'UY'
          | 'UZ'
          | 'VU'
          | 'VE'
          | 'VN'
          | 'VG'
          | 'VI'
          | 'WF'
          | 'EH'
          | 'YE'
          | 'ZM'
          | 'ZW'
          | 'AX'
          | 'BQ'
          | 'CW'
          | 'GG'
          | 'IM'
          | 'JE'
          | 'ME'
          | 'BL'
          | 'MF'
          | 'RS'
          | 'SX'
          | 'SS'
          | 'XK';

        /**
         * Postal or ZIP code.
         */
        postal_code: string;

        /**
         * Primary street address.
         */
        street_line_1: string;

        /**
         * Secondary street address (apartment, suite, etc.).
         */
        street_line_2: string | null;
      }
    }

    export interface UnionMember1 {
      /**
       * ISO 3166-1 alpha-2 country code of citizenship.
       */
      country_of_citizenship:
        | 'AF'
        | 'AL'
        | 'DZ'
        | 'AS'
        | 'AD'
        | 'AO'
        | 'AI'
        | 'AQ'
        | 'AG'
        | 'AR'
        | 'AM'
        | 'AW'
        | 'AU'
        | 'AT'
        | 'AZ'
        | 'BS'
        | 'BH'
        | 'BD'
        | 'BB'
        | 'BY'
        | 'BE'
        | 'BZ'
        | 'BJ'
        | 'BM'
        | 'BT'
        | 'BO'
        | 'BA'
        | 'BW'
        | 'BV'
        | 'BR'
        | 'IO'
        | 'BN'
        | 'BG'
        | 'BF'
        | 'BI'
        | 'KH'
        | 'CM'
        | 'CA'
        | 'CV'
        | 'KY'
        | 'CF'
        | 'TD'
        | 'CL'
        | 'CN'
        | 'CX'
        | 'CC'
        | 'CO'
        | 'KM'
        | 'CG'
        | 'CD'
        | 'CK'
        | 'CR'
        | 'CI'
        | 'HR'
        | 'CU'
        | 'CY'
        | 'CZ'
        | 'DK'
        | 'DJ'
        | 'DM'
        | 'DO'
        | 'EC'
        | 'EG'
        | 'SV'
        | 'GQ'
        | 'ER'
        | 'EE'
        | 'ET'
        | 'FK'
        | 'FO'
        | 'FJ'
        | 'FI'
        | 'FR'
        | 'GF'
        | 'PF'
        | 'TF'
        | 'GA'
        | 'GM'
        | 'GE'
        | 'DE'
        | 'GH'
        | 'GI'
        | 'GR'
        | 'GL'
        | 'GD'
        | 'GP'
        | 'GU'
        | 'GT'
        | 'GN'
        | 'GW'
        | 'GY'
        | 'HT'
        | 'HM'
        | 'VA'
        | 'HN'
        | 'HK'
        | 'HU'
        | 'IS'
        | 'IN'
        | 'ID'
        | 'IR'
        | 'IQ'
        | 'IE'
        | 'IL'
        | 'IT'
        | 'JM'
        | 'JP'
        | 'JO'
        | 'KZ'
        | 'KE'
        | 'KI'
        | 'KP'
        | 'KR'
        | 'KW'
        | 'KG'
        | 'LA'
        | 'LV'
        | 'LB'
        | 'LS'
        | 'LR'
        | 'LY'
        | 'LI'
        | 'LT'
        | 'LU'
        | 'MO'
        | 'MG'
        | 'MW'
        | 'MY'
        | 'MV'
        | 'ML'
        | 'MT'
        | 'MH'
        | 'MQ'
        | 'MR'
        | 'MU'
        | 'YT'
        | 'MX'
        | 'FM'
        | 'MD'
        | 'MC'
        | 'MN'
        | 'MS'
        | 'MA'
        | 'MZ'
        | 'MM'
        | 'NA'
        | 'NR'
        | 'NP'
        | 'NL'
        | 'NC'
        | 'NZ'
        | 'NI'
        | 'NE'
        | 'NG'
        | 'NU'
        | 'NF'
        | 'MP'
        | 'MK'
        | 'NO'
        | 'OM'
        | 'PK'
        | 'PW'
        | 'PS'
        | 'PA'
        | 'PG'
        | 'PY'
        | 'PE'
        | 'PH'
        | 'PN'
        | 'PL'
        | 'PT'
        | 'PR'
        | 'QA'
        | 'RE'
        | 'RO'
        | 'RU'
        | 'RW'
        | 'SH'
        | 'KN'
        | 'LC'
        | 'PM'
        | 'VC'
        | 'WS'
        | 'SM'
        | 'ST'
        | 'SA'
        | 'SN'
        | 'SC'
        | 'SL'
        | 'SG'
        | 'SK'
        | 'SI'
        | 'SB'
        | 'SO'
        | 'ZA'
        | 'GS'
        | 'ES'
        | 'LK'
        | 'SD'
        | 'SR'
        | 'SJ'
        | 'SZ'
        | 'SE'
        | 'CH'
        | 'SY'
        | 'TW'
        | 'TJ'
        | 'TZ'
        | 'TH'
        | 'TL'
        | 'TG'
        | 'TK'
        | 'TO'
        | 'TT'
        | 'TN'
        | 'TR'
        | 'TM'
        | 'TC'
        | 'TV'
        | 'UG'
        | 'UA'
        | 'AE'
        | 'GB'
        | 'UM'
        | 'UY'
        | 'UZ'
        | 'VU'
        | 'VE'
        | 'VN'
        | 'VG'
        | 'VI'
        | 'WF'
        | 'EH'
        | 'YE'
        | 'ZM'
        | 'ZW'
        | 'AX'
        | 'BQ'
        | 'CW'
        | 'GG'
        | 'IM'
        | 'JE'
        | 'ME'
        | 'BL'
        | 'MF'
        | 'RS'
        | 'SX'
        | 'SS'
        | 'XK';

      /**
       * Date of birth as an ISO 8601 calendar date (YYYY-MM-DD).
       */
      date_of_birth: string;

      /**
       * Government-issued identification with type: "id" (generic government-issued ID).
       */
      identification: UnionMember1.Identification;

      /**
       * Full legal name of the account holder.
       */
      legal_name: string;

      /**
       * Residential address of the account holder.
       */
      residential_address:
        | UnionMember1.UsResidentialAddressResponse
        | UnionMember1.NonUsResidentialAddressResponse;

      /**
       * Role of the control person at the business (e.g., "CEO", "President", "Managing
       * Director").
       */
      title: string;
    }

    export namespace UnionMember1 {
      /**
       * Government-issued identification with type: "id" (generic government-issued ID).
       */
      export interface Identification {
        type: 'id';

        value: string;
      }

      export interface UsResidentialAddressResponse {
        /**
         * City name.
         */
        city: string;

        /**
         * ISO 3166-1 alpha-2 country code.
         */
        country: 'US';

        /**
         * Postal or ZIP code.
         */
        postal_code: string;

        /**
         * Two-letter state code.
         */
        state: string;

        /**
         * Primary street address.
         */
        street_line_1: string;

        /**
         * Secondary street address (apartment, suite, etc.).
         */
        street_line_2: string | null;
      }

      export interface NonUsResidentialAddressResponse {
        /**
         * City name.
         */
        city: string;

        /**
         * ISO 3166-1 alpha-2 country code.
         */
        country:
          | 'AF'
          | 'AL'
          | 'DZ'
          | 'AS'
          | 'AD'
          | 'AO'
          | 'AI'
          | 'AQ'
          | 'AG'
          | 'AR'
          | 'AM'
          | 'AW'
          | 'AU'
          | 'AT'
          | 'AZ'
          | 'BS'
          | 'BH'
          | 'BD'
          | 'BB'
          | 'BY'
          | 'BE'
          | 'BZ'
          | 'BJ'
          | 'BM'
          | 'BT'
          | 'BO'
          | 'BA'
          | 'BW'
          | 'BV'
          | 'BR'
          | 'IO'
          | 'BN'
          | 'BG'
          | 'BF'
          | 'BI'
          | 'KH'
          | 'CM'
          | 'CA'
          | 'CV'
          | 'KY'
          | 'CF'
          | 'TD'
          | 'CL'
          | 'CN'
          | 'CX'
          | 'CC'
          | 'CO'
          | 'KM'
          | 'CG'
          | 'CD'
          | 'CK'
          | 'CR'
          | 'CI'
          | 'HR'
          | 'CU'
          | 'CY'
          | 'CZ'
          | 'DK'
          | 'DJ'
          | 'DM'
          | 'DO'
          | 'EC'
          | 'EG'
          | 'SV'
          | 'GQ'
          | 'ER'
          | 'EE'
          | 'ET'
          | 'FK'
          | 'FO'
          | 'FJ'
          | 'FI'
          | 'FR'
          | 'GF'
          | 'PF'
          | 'TF'
          | 'GA'
          | 'GM'
          | 'GE'
          | 'DE'
          | 'GH'
          | 'GI'
          | 'GR'
          | 'GL'
          | 'GD'
          | 'GP'
          | 'GU'
          | 'GT'
          | 'GN'
          | 'GW'
          | 'GY'
          | 'HT'
          | 'HM'
          | 'VA'
          | 'HN'
          | 'HK'
          | 'HU'
          | 'IS'
          | 'IN'
          | 'ID'
          | 'IR'
          | 'IQ'
          | 'IE'
          | 'IL'
          | 'IT'
          | 'JM'
          | 'JP'
          | 'JO'
          | 'KZ'
          | 'KE'
          | 'KI'
          | 'KP'
          | 'KR'
          | 'KW'
          | 'KG'
          | 'LA'
          | 'LV'
          | 'LB'
          | 'LS'
          | 'LR'
          | 'LY'
          | 'LI'
          | 'LT'
          | 'LU'
          | 'MO'
          | 'MG'
          | 'MW'
          | 'MY'
          | 'MV'
          | 'ML'
          | 'MT'
          | 'MH'
          | 'MQ'
          | 'MR'
          | 'MU'
          | 'YT'
          | 'MX'
          | 'FM'
          | 'MD'
          | 'MC'
          | 'MN'
          | 'MS'
          | 'MA'
          | 'MZ'
          | 'MM'
          | 'NA'
          | 'NR'
          | 'NP'
          | 'NL'
          | 'NC'
          | 'NZ'
          | 'NI'
          | 'NE'
          | 'NG'
          | 'NU'
          | 'NF'
          | 'MP'
          | 'MK'
          | 'NO'
          | 'OM'
          | 'PK'
          | 'PW'
          | 'PS'
          | 'PA'
          | 'PG'
          | 'PY'
          | 'PE'
          | 'PH'
          | 'PN'
          | 'PL'
          | 'PT'
          | 'PR'
          | 'QA'
          | 'RE'
          | 'RO'
          | 'RU'
          | 'RW'
          | 'SH'
          | 'KN'
          | 'LC'
          | 'PM'
          | 'VC'
          | 'WS'
          | 'SM'
          | 'ST'
          | 'SA'
          | 'SN'
          | 'SC'
          | 'SL'
          | 'SG'
          | 'SK'
          | 'SI'
          | 'SB'
          | 'SO'
          | 'ZA'
          | 'GS'
          | 'ES'
          | 'LK'
          | 'SD'
          | 'SR'
          | 'SJ'
          | 'SZ'
          | 'SE'
          | 'CH'
          | 'SY'
          | 'TW'
          | 'TJ'
          | 'TZ'
          | 'TH'
          | 'TL'
          | 'TG'
          | 'TK'
          | 'TO'
          | 'TT'
          | 'TN'
          | 'TR'
          | 'TM'
          | 'TC'
          | 'TV'
          | 'UG'
          | 'UA'
          | 'AE'
          | 'GB'
          | 'UM'
          | 'UY'
          | 'UZ'
          | 'VU'
          | 'VE'
          | 'VN'
          | 'VG'
          | 'VI'
          | 'WF'
          | 'EH'
          | 'YE'
          | 'ZM'
          | 'ZW'
          | 'AX'
          | 'BQ'
          | 'CW'
          | 'GG'
          | 'IM'
          | 'JE'
          | 'ME'
          | 'BL'
          | 'MF'
          | 'RS'
          | 'SX'
          | 'SS'
          | 'XK';

        /**
         * Postal or ZIP code.
         */
        postal_code: string;

        /**
         * Primary street address.
         */
        street_line_1: string;

        /**
         * Secondary street address (apartment, suite, etc.).
         */
        street_line_2: string | null;
      }
    }

    export interface UsResidentialAddressResponse {
      /**
       * City name.
       */
      city: string;

      /**
       * ISO 3166-1 alpha-2 country code.
       */
      country: 'US';

      /**
       * Postal or ZIP code.
       */
      postal_code: string;

      /**
       * Two-letter state code.
       */
      state: string;

      /**
       * Primary street address.
       */
      street_line_1: string;

      /**
       * Secondary street address (apartment, suite, etc.).
       */
      street_line_2: string | null;
    }

    export interface NonUsResidentialAddressResponse {
      /**
       * City name.
       */
      city: string;

      /**
       * ISO 3166-1 alpha-2 country code.
       */
      country:
        | 'AF'
        | 'AL'
        | 'DZ'
        | 'AS'
        | 'AD'
        | 'AO'
        | 'AI'
        | 'AQ'
        | 'AG'
        | 'AR'
        | 'AM'
        | 'AW'
        | 'AU'
        | 'AT'
        | 'AZ'
        | 'BS'
        | 'BH'
        | 'BD'
        | 'BB'
        | 'BY'
        | 'BE'
        | 'BZ'
        | 'BJ'
        | 'BM'
        | 'BT'
        | 'BO'
        | 'BA'
        | 'BW'
        | 'BV'
        | 'BR'
        | 'IO'
        | 'BN'
        | 'BG'
        | 'BF'
        | 'BI'
        | 'KH'
        | 'CM'
        | 'CA'
        | 'CV'
        | 'KY'
        | 'CF'
        | 'TD'
        | 'CL'
        | 'CN'
        | 'CX'
        | 'CC'
        | 'CO'
        | 'KM'
        | 'CG'
        | 'CD'
        | 'CK'
        | 'CR'
        | 'CI'
        | 'HR'
        | 'CU'
        | 'CY'
        | 'CZ'
        | 'DK'
        | 'DJ'
        | 'DM'
        | 'DO'
        | 'EC'
        | 'EG'
        | 'SV'
        | 'GQ'
        | 'ER'
        | 'EE'
        | 'ET'
        | 'FK'
        | 'FO'
        | 'FJ'
        | 'FI'
        | 'FR'
        | 'GF'
        | 'PF'
        | 'TF'
        | 'GA'
        | 'GM'
        | 'GE'
        | 'DE'
        | 'GH'
        | 'GI'
        | 'GR'
        | 'GL'
        | 'GD'
        | 'GP'
        | 'GU'
        | 'GT'
        | 'GN'
        | 'GW'
        | 'GY'
        | 'HT'
        | 'HM'
        | 'VA'
        | 'HN'
        | 'HK'
        | 'HU'
        | 'IS'
        | 'IN'
        | 'ID'
        | 'IR'
        | 'IQ'
        | 'IE'
        | 'IL'
        | 'IT'
        | 'JM'
        | 'JP'
        | 'JO'
        | 'KZ'
        | 'KE'
        | 'KI'
        | 'KP'
        | 'KR'
        | 'KW'
        | 'KG'
        | 'LA'
        | 'LV'
        | 'LB'
        | 'LS'
        | 'LR'
        | 'LY'
        | 'LI'
        | 'LT'
        | 'LU'
        | 'MO'
        | 'MG'
        | 'MW'
        | 'MY'
        | 'MV'
        | 'ML'
        | 'MT'
        | 'MH'
        | 'MQ'
        | 'MR'
        | 'MU'
        | 'YT'
        | 'MX'
        | 'FM'
        | 'MD'
        | 'MC'
        | 'MN'
        | 'MS'
        | 'MA'
        | 'MZ'
        | 'MM'
        | 'NA'
        | 'NR'
        | 'NP'
        | 'NL'
        | 'NC'
        | 'NZ'
        | 'NI'
        | 'NE'
        | 'NG'
        | 'NU'
        | 'NF'
        | 'MP'
        | 'MK'
        | 'NO'
        | 'OM'
        | 'PK'
        | 'PW'
        | 'PS'
        | 'PA'
        | 'PG'
        | 'PY'
        | 'PE'
        | 'PH'
        | 'PN'
        | 'PL'
        | 'PT'
        | 'PR'
        | 'QA'
        | 'RE'
        | 'RO'
        | 'RU'
        | 'RW'
        | 'SH'
        | 'KN'
        | 'LC'
        | 'PM'
        | 'VC'
        | 'WS'
        | 'SM'
        | 'ST'
        | 'SA'
        | 'SN'
        | 'SC'
        | 'SL'
        | 'SG'
        | 'SK'
        | 'SI'
        | 'SB'
        | 'SO'
        | 'ZA'
        | 'GS'
        | 'ES'
        | 'LK'
        | 'SD'
        | 'SR'
        | 'SJ'
        | 'SZ'
        | 'SE'
        | 'CH'
        | 'SY'
        | 'TW'
        | 'TJ'
        | 'TZ'
        | 'TH'
        | 'TL'
        | 'TG'
        | 'TK'
        | 'TO'
        | 'TT'
        | 'TN'
        | 'TR'
        | 'TM'
        | 'TC'
        | 'TV'
        | 'UG'
        | 'UA'
        | 'AE'
        | 'GB'
        | 'UM'
        | 'UY'
        | 'UZ'
        | 'VU'
        | 'VE'
        | 'VN'
        | 'VG'
        | 'VI'
        | 'WF'
        | 'EH'
        | 'YE'
        | 'ZM'
        | 'ZW'
        | 'AX'
        | 'BQ'
        | 'CW'
        | 'GG'
        | 'IM'
        | 'JE'
        | 'ME'
        | 'BL'
        | 'MF'
        | 'RS'
        | 'SX'
        | 'SS'
        | 'XK';

      /**
       * Postal or ZIP code.
       */
      postal_code: string;

      /**
       * Primary street address.
       */
      street_line_1: string;

      /**
       * Secondary street address (apartment, suite, etc.).
       */
      street_line_2: string | null;
    }

    export interface UsResidentialAddressResponse {
      /**
       * City name.
       */
      city: string;

      /**
       * ISO 3166-1 alpha-2 country code.
       */
      country: 'US';

      /**
       * Postal or ZIP code.
       */
      postal_code: string;

      /**
       * Two-letter state code.
       */
      state: string;

      /**
       * Primary street address.
       */
      street_line_1: string;

      /**
       * Secondary street address (apartment, suite, etc.).
       */
      street_line_2: string | null;
    }

    export interface NonUsResidentialAddressResponse {
      /**
       * City name.
       */
      city: string;

      /**
       * ISO 3166-1 alpha-2 country code.
       */
      country:
        | 'AF'
        | 'AL'
        | 'DZ'
        | 'AS'
        | 'AD'
        | 'AO'
        | 'AI'
        | 'AQ'
        | 'AG'
        | 'AR'
        | 'AM'
        | 'AW'
        | 'AU'
        | 'AT'
        | 'AZ'
        | 'BS'
        | 'BH'
        | 'BD'
        | 'BB'
        | 'BY'
        | 'BE'
        | 'BZ'
        | 'BJ'
        | 'BM'
        | 'BT'
        | 'BO'
        | 'BA'
        | 'BW'
        | 'BV'
        | 'BR'
        | 'IO'
        | 'BN'
        | 'BG'
        | 'BF'
        | 'BI'
        | 'KH'
        | 'CM'
        | 'CA'
        | 'CV'
        | 'KY'
        | 'CF'
        | 'TD'
        | 'CL'
        | 'CN'
        | 'CX'
        | 'CC'
        | 'CO'
        | 'KM'
        | 'CG'
        | 'CD'
        | 'CK'
        | 'CR'
        | 'CI'
        | 'HR'
        | 'CU'
        | 'CY'
        | 'CZ'
        | 'DK'
        | 'DJ'
        | 'DM'
        | 'DO'
        | 'EC'
        | 'EG'
        | 'SV'
        | 'GQ'
        | 'ER'
        | 'EE'
        | 'ET'
        | 'FK'
        | 'FO'
        | 'FJ'
        | 'FI'
        | 'FR'
        | 'GF'
        | 'PF'
        | 'TF'
        | 'GA'
        | 'GM'
        | 'GE'
        | 'DE'
        | 'GH'
        | 'GI'
        | 'GR'
        | 'GL'
        | 'GD'
        | 'GP'
        | 'GU'
        | 'GT'
        | 'GN'
        | 'GW'
        | 'GY'
        | 'HT'
        | 'HM'
        | 'VA'
        | 'HN'
        | 'HK'
        | 'HU'
        | 'IS'
        | 'IN'
        | 'ID'
        | 'IR'
        | 'IQ'
        | 'IE'
        | 'IL'
        | 'IT'
        | 'JM'
        | 'JP'
        | 'JO'
        | 'KZ'
        | 'KE'
        | 'KI'
        | 'KP'
        | 'KR'
        | 'KW'
        | 'KG'
        | 'LA'
        | 'LV'
        | 'LB'
        | 'LS'
        | 'LR'
        | 'LY'
        | 'LI'
        | 'LT'
        | 'LU'
        | 'MO'
        | 'MG'
        | 'MW'
        | 'MY'
        | 'MV'
        | 'ML'
        | 'MT'
        | 'MH'
        | 'MQ'
        | 'MR'
        | 'MU'
        | 'YT'
        | 'MX'
        | 'FM'
        | 'MD'
        | 'MC'
        | 'MN'
        | 'MS'
        | 'MA'
        | 'MZ'
        | 'MM'
        | 'NA'
        | 'NR'
        | 'NP'
        | 'NL'
        | 'NC'
        | 'NZ'
        | 'NI'
        | 'NE'
        | 'NG'
        | 'NU'
        | 'NF'
        | 'MP'
        | 'MK'
        | 'NO'
        | 'OM'
        | 'PK'
        | 'PW'
        | 'PS'
        | 'PA'
        | 'PG'
        | 'PY'
        | 'PE'
        | 'PH'
        | 'PN'
        | 'PL'
        | 'PT'
        | 'PR'
        | 'QA'
        | 'RE'
        | 'RO'
        | 'RU'
        | 'RW'
        | 'SH'
        | 'KN'
        | 'LC'
        | 'PM'
        | 'VC'
        | 'WS'
        | 'SM'
        | 'ST'
        | 'SA'
        | 'SN'
        | 'SC'
        | 'SL'
        | 'SG'
        | 'SK'
        | 'SI'
        | 'SB'
        | 'SO'
        | 'ZA'
        | 'GS'
        | 'ES'
        | 'LK'
        | 'SD'
        | 'SR'
        | 'SJ'
        | 'SZ'
        | 'SE'
        | 'CH'
        | 'SY'
        | 'TW'
        | 'TJ'
        | 'TZ'
        | 'TH'
        | 'TL'
        | 'TG'
        | 'TK'
        | 'TO'
        | 'TT'
        | 'TN'
        | 'TR'
        | 'TM'
        | 'TC'
        | 'TV'
        | 'UG'
        | 'UA'
        | 'AE'
        | 'GB'
        | 'UM'
        | 'UY'
        | 'UZ'
        | 'VU'
        | 'VE'
        | 'VN'
        | 'VG'
        | 'VI'
        | 'WF'
        | 'EH'
        | 'YE'
        | 'ZM'
        | 'ZW'
        | 'AX'
        | 'BQ'
        | 'CW'
        | 'GG'
        | 'IM'
        | 'JE'
        | 'ME'
        | 'BL'
        | 'MF'
        | 'RS'
        | 'SX'
        | 'SS'
        | 'XK';

      /**
       * Postal or ZIP code.
       */
      postal_code: string;

      /**
       * Primary street address.
       */
      street_line_1: string;

      /**
       * Secondary street address (apartment, suite, etc.).
       */
      street_line_2: string | null;
    }

    export interface EinIdentification {
      type: 'ein';

      value: string;
    }

    export interface SsnIdentification {
      type: 'ssn';

      value: string;
    }
  }
}

export interface AccountHolderUpdateResponse {
  /**
   * Unique identifier of the account holder.
   */
  id: string;

  /**
   * Beneficiary details used to create this account holder.
   */
  beneficiary_data:
    | AccountHolderUpdateResponse.UsBeneficiaryDataResponse
    | AccountHolderUpdateResponse.NonUsBeneficiaryDataResponse
    | AccountHolderUpdateResponse.BusinessBeneficiaryDataResponse;

  /**
   * ISO 8601 UTC timestamp when the account holder was created.
   */
  created_at: string;

  /**
   * Type of the account holder.
   */
  holder_type: 'natural_person' | 'business';

  /**
   * Current account holder status.
   */
  status: 'pending' | 'active' | 'closed';

  /**
   * Resource type discriminator.
   */
  type: 'account_holder';
}

export namespace AccountHolderUpdateResponse {
  export interface UsBeneficiaryDataResponse {
    /**
     * ISO 3166-1 alpha-2 country code of citizenship.
     */
    country_of_citizenship: 'US';

    /**
     * Date of birth as an ISO 8601 calendar date (YYYY-MM-DD).
     */
    date_of_birth: string;

    /**
     * Government-issued identification with type: "ssn" (Social Security Number,
     * format ###-##-####) or "itin" (Individual Taxpayer ID, format 9##-##-####).
     */
    identification:
      | UsBeneficiaryDataResponse.SsnIdentification
      | UsBeneficiaryDataResponse.ItinIdentification;

    /**
     * Full legal name of the account holder.
     */
    legal_name: string;

    /**
     * Residential address of the account holder.
     */
    residential_address:
      | UsBeneficiaryDataResponse.UsResidentialAddressResponse
      | UsBeneficiaryDataResponse.NonUsResidentialAddressResponse;
  }

  export namespace UsBeneficiaryDataResponse {
    export interface SsnIdentification {
      type: 'ssn';

      value: string;
    }

    export interface ItinIdentification {
      type: 'itin';

      value: string;
    }

    export interface UsResidentialAddressResponse {
      /**
       * City name.
       */
      city: string;

      /**
       * ISO 3166-1 alpha-2 country code.
       */
      country: 'US';

      /**
       * Postal or ZIP code.
       */
      postal_code: string;

      /**
       * Two-letter state code.
       */
      state: string;

      /**
       * Primary street address.
       */
      street_line_1: string;

      /**
       * Secondary street address (apartment, suite, etc.).
       */
      street_line_2: string | null;
    }

    export interface NonUsResidentialAddressResponse {
      /**
       * City name.
       */
      city: string;

      /**
       * ISO 3166-1 alpha-2 country code.
       */
      country:
        | 'AF'
        | 'AL'
        | 'DZ'
        | 'AS'
        | 'AD'
        | 'AO'
        | 'AI'
        | 'AQ'
        | 'AG'
        | 'AR'
        | 'AM'
        | 'AW'
        | 'AU'
        | 'AT'
        | 'AZ'
        | 'BS'
        | 'BH'
        | 'BD'
        | 'BB'
        | 'BY'
        | 'BE'
        | 'BZ'
        | 'BJ'
        | 'BM'
        | 'BT'
        | 'BO'
        | 'BA'
        | 'BW'
        | 'BV'
        | 'BR'
        | 'IO'
        | 'BN'
        | 'BG'
        | 'BF'
        | 'BI'
        | 'KH'
        | 'CM'
        | 'CA'
        | 'CV'
        | 'KY'
        | 'CF'
        | 'TD'
        | 'CL'
        | 'CN'
        | 'CX'
        | 'CC'
        | 'CO'
        | 'KM'
        | 'CG'
        | 'CD'
        | 'CK'
        | 'CR'
        | 'CI'
        | 'HR'
        | 'CU'
        | 'CY'
        | 'CZ'
        | 'DK'
        | 'DJ'
        | 'DM'
        | 'DO'
        | 'EC'
        | 'EG'
        | 'SV'
        | 'GQ'
        | 'ER'
        | 'EE'
        | 'ET'
        | 'FK'
        | 'FO'
        | 'FJ'
        | 'FI'
        | 'FR'
        | 'GF'
        | 'PF'
        | 'TF'
        | 'GA'
        | 'GM'
        | 'GE'
        | 'DE'
        | 'GH'
        | 'GI'
        | 'GR'
        | 'GL'
        | 'GD'
        | 'GP'
        | 'GU'
        | 'GT'
        | 'GN'
        | 'GW'
        | 'GY'
        | 'HT'
        | 'HM'
        | 'VA'
        | 'HN'
        | 'HK'
        | 'HU'
        | 'IS'
        | 'IN'
        | 'ID'
        | 'IR'
        | 'IQ'
        | 'IE'
        | 'IL'
        | 'IT'
        | 'JM'
        | 'JP'
        | 'JO'
        | 'KZ'
        | 'KE'
        | 'KI'
        | 'KP'
        | 'KR'
        | 'KW'
        | 'KG'
        | 'LA'
        | 'LV'
        | 'LB'
        | 'LS'
        | 'LR'
        | 'LY'
        | 'LI'
        | 'LT'
        | 'LU'
        | 'MO'
        | 'MG'
        | 'MW'
        | 'MY'
        | 'MV'
        | 'ML'
        | 'MT'
        | 'MH'
        | 'MQ'
        | 'MR'
        | 'MU'
        | 'YT'
        | 'MX'
        | 'FM'
        | 'MD'
        | 'MC'
        | 'MN'
        | 'MS'
        | 'MA'
        | 'MZ'
        | 'MM'
        | 'NA'
        | 'NR'
        | 'NP'
        | 'NL'
        | 'NC'
        | 'NZ'
        | 'NI'
        | 'NE'
        | 'NG'
        | 'NU'
        | 'NF'
        | 'MP'
        | 'MK'
        | 'NO'
        | 'OM'
        | 'PK'
        | 'PW'
        | 'PS'
        | 'PA'
        | 'PG'
        | 'PY'
        | 'PE'
        | 'PH'
        | 'PN'
        | 'PL'
        | 'PT'
        | 'PR'
        | 'QA'
        | 'RE'
        | 'RO'
        | 'RU'
        | 'RW'
        | 'SH'
        | 'KN'
        | 'LC'
        | 'PM'
        | 'VC'
        | 'WS'
        | 'SM'
        | 'ST'
        | 'SA'
        | 'SN'
        | 'SC'
        | 'SL'
        | 'SG'
        | 'SK'
        | 'SI'
        | 'SB'
        | 'SO'
        | 'ZA'
        | 'GS'
        | 'ES'
        | 'LK'
        | 'SD'
        | 'SR'
        | 'SJ'
        | 'SZ'
        | 'SE'
        | 'CH'
        | 'SY'
        | 'TW'
        | 'TJ'
        | 'TZ'
        | 'TH'
        | 'TL'
        | 'TG'
        | 'TK'
        | 'TO'
        | 'TT'
        | 'TN'
        | 'TR'
        | 'TM'
        | 'TC'
        | 'TV'
        | 'UG'
        | 'UA'
        | 'AE'
        | 'GB'
        | 'UM'
        | 'UY'
        | 'UZ'
        | 'VU'
        | 'VE'
        | 'VN'
        | 'VG'
        | 'VI'
        | 'WF'
        | 'EH'
        | 'YE'
        | 'ZM'
        | 'ZW'
        | 'AX'
        | 'BQ'
        | 'CW'
        | 'GG'
        | 'IM'
        | 'JE'
        | 'ME'
        | 'BL'
        | 'MF'
        | 'RS'
        | 'SX'
        | 'SS'
        | 'XK';

      /**
       * Postal or ZIP code.
       */
      postal_code: string;

      /**
       * Primary street address.
       */
      street_line_1: string;

      /**
       * Secondary street address (apartment, suite, etc.).
       */
      street_line_2: string | null;
    }
  }

  export interface NonUsBeneficiaryDataResponse {
    /**
     * ISO 3166-1 alpha-2 country code of citizenship.
     */
    country_of_citizenship:
      | 'AF'
      | 'AL'
      | 'DZ'
      | 'AS'
      | 'AD'
      | 'AO'
      | 'AI'
      | 'AQ'
      | 'AG'
      | 'AR'
      | 'AM'
      | 'AW'
      | 'AU'
      | 'AT'
      | 'AZ'
      | 'BS'
      | 'BH'
      | 'BD'
      | 'BB'
      | 'BY'
      | 'BE'
      | 'BZ'
      | 'BJ'
      | 'BM'
      | 'BT'
      | 'BO'
      | 'BA'
      | 'BW'
      | 'BV'
      | 'BR'
      | 'IO'
      | 'BN'
      | 'BG'
      | 'BF'
      | 'BI'
      | 'KH'
      | 'CM'
      | 'CA'
      | 'CV'
      | 'KY'
      | 'CF'
      | 'TD'
      | 'CL'
      | 'CN'
      | 'CX'
      | 'CC'
      | 'CO'
      | 'KM'
      | 'CG'
      | 'CD'
      | 'CK'
      | 'CR'
      | 'CI'
      | 'HR'
      | 'CU'
      | 'CY'
      | 'CZ'
      | 'DK'
      | 'DJ'
      | 'DM'
      | 'DO'
      | 'EC'
      | 'EG'
      | 'SV'
      | 'GQ'
      | 'ER'
      | 'EE'
      | 'ET'
      | 'FK'
      | 'FO'
      | 'FJ'
      | 'FI'
      | 'FR'
      | 'GF'
      | 'PF'
      | 'TF'
      | 'GA'
      | 'GM'
      | 'GE'
      | 'DE'
      | 'GH'
      | 'GI'
      | 'GR'
      | 'GL'
      | 'GD'
      | 'GP'
      | 'GU'
      | 'GT'
      | 'GN'
      | 'GW'
      | 'GY'
      | 'HT'
      | 'HM'
      | 'VA'
      | 'HN'
      | 'HK'
      | 'HU'
      | 'IS'
      | 'IN'
      | 'ID'
      | 'IR'
      | 'IQ'
      | 'IE'
      | 'IL'
      | 'IT'
      | 'JM'
      | 'JP'
      | 'JO'
      | 'KZ'
      | 'KE'
      | 'KI'
      | 'KP'
      | 'KR'
      | 'KW'
      | 'KG'
      | 'LA'
      | 'LV'
      | 'LB'
      | 'LS'
      | 'LR'
      | 'LY'
      | 'LI'
      | 'LT'
      | 'LU'
      | 'MO'
      | 'MG'
      | 'MW'
      | 'MY'
      | 'MV'
      | 'ML'
      | 'MT'
      | 'MH'
      | 'MQ'
      | 'MR'
      | 'MU'
      | 'YT'
      | 'MX'
      | 'FM'
      | 'MD'
      | 'MC'
      | 'MN'
      | 'MS'
      | 'MA'
      | 'MZ'
      | 'MM'
      | 'NA'
      | 'NR'
      | 'NP'
      | 'NL'
      | 'NC'
      | 'NZ'
      | 'NI'
      | 'NE'
      | 'NG'
      | 'NU'
      | 'NF'
      | 'MP'
      | 'MK'
      | 'NO'
      | 'OM'
      | 'PK'
      | 'PW'
      | 'PS'
      | 'PA'
      | 'PG'
      | 'PY'
      | 'PE'
      | 'PH'
      | 'PN'
      | 'PL'
      | 'PT'
      | 'PR'
      | 'QA'
      | 'RE'
      | 'RO'
      | 'RU'
      | 'RW'
      | 'SH'
      | 'KN'
      | 'LC'
      | 'PM'
      | 'VC'
      | 'WS'
      | 'SM'
      | 'ST'
      | 'SA'
      | 'SN'
      | 'SC'
      | 'SL'
      | 'SG'
      | 'SK'
      | 'SI'
      | 'SB'
      | 'SO'
      | 'ZA'
      | 'GS'
      | 'ES'
      | 'LK'
      | 'SD'
      | 'SR'
      | 'SJ'
      | 'SZ'
      | 'SE'
      | 'CH'
      | 'SY'
      | 'TW'
      | 'TJ'
      | 'TZ'
      | 'TH'
      | 'TL'
      | 'TG'
      | 'TK'
      | 'TO'
      | 'TT'
      | 'TN'
      | 'TR'
      | 'TM'
      | 'TC'
      | 'TV'
      | 'UG'
      | 'UA'
      | 'AE'
      | 'GB'
      | 'UM'
      | 'UY'
      | 'UZ'
      | 'VU'
      | 'VE'
      | 'VN'
      | 'VG'
      | 'VI'
      | 'WF'
      | 'EH'
      | 'YE'
      | 'ZM'
      | 'ZW'
      | 'AX'
      | 'BQ'
      | 'CW'
      | 'GG'
      | 'IM'
      | 'JE'
      | 'ME'
      | 'BL'
      | 'MF'
      | 'RS'
      | 'SX'
      | 'SS'
      | 'XK';

    /**
     * Date of birth as an ISO 8601 calendar date (YYYY-MM-DD).
     */
    date_of_birth: string;

    /**
     * Government-issued identification with type: "id" (generic government-issued ID).
     */
    identification: NonUsBeneficiaryDataResponse.Identification;

    /**
     * Full legal name of the account holder.
     */
    legal_name: string;

    /**
     * Residential address of the account holder.
     */
    residential_address:
      | NonUsBeneficiaryDataResponse.UsResidentialAddressResponse
      | NonUsBeneficiaryDataResponse.NonUsResidentialAddressResponse;
  }

  export namespace NonUsBeneficiaryDataResponse {
    /**
     * Government-issued identification with type: "id" (generic government-issued ID).
     */
    export interface Identification {
      type: 'id';

      value: string;
    }

    export interface UsResidentialAddressResponse {
      /**
       * City name.
       */
      city: string;

      /**
       * ISO 3166-1 alpha-2 country code.
       */
      country: 'US';

      /**
       * Postal or ZIP code.
       */
      postal_code: string;

      /**
       * Two-letter state code.
       */
      state: string;

      /**
       * Primary street address.
       */
      street_line_1: string;

      /**
       * Secondary street address (apartment, suite, etc.).
       */
      street_line_2: string | null;
    }

    export interface NonUsResidentialAddressResponse {
      /**
       * City name.
       */
      city: string;

      /**
       * ISO 3166-1 alpha-2 country code.
       */
      country:
        | 'AF'
        | 'AL'
        | 'DZ'
        | 'AS'
        | 'AD'
        | 'AO'
        | 'AI'
        | 'AQ'
        | 'AG'
        | 'AR'
        | 'AM'
        | 'AW'
        | 'AU'
        | 'AT'
        | 'AZ'
        | 'BS'
        | 'BH'
        | 'BD'
        | 'BB'
        | 'BY'
        | 'BE'
        | 'BZ'
        | 'BJ'
        | 'BM'
        | 'BT'
        | 'BO'
        | 'BA'
        | 'BW'
        | 'BV'
        | 'BR'
        | 'IO'
        | 'BN'
        | 'BG'
        | 'BF'
        | 'BI'
        | 'KH'
        | 'CM'
        | 'CA'
        | 'CV'
        | 'KY'
        | 'CF'
        | 'TD'
        | 'CL'
        | 'CN'
        | 'CX'
        | 'CC'
        | 'CO'
        | 'KM'
        | 'CG'
        | 'CD'
        | 'CK'
        | 'CR'
        | 'CI'
        | 'HR'
        | 'CU'
        | 'CY'
        | 'CZ'
        | 'DK'
        | 'DJ'
        | 'DM'
        | 'DO'
        | 'EC'
        | 'EG'
        | 'SV'
        | 'GQ'
        | 'ER'
        | 'EE'
        | 'ET'
        | 'FK'
        | 'FO'
        | 'FJ'
        | 'FI'
        | 'FR'
        | 'GF'
        | 'PF'
        | 'TF'
        | 'GA'
        | 'GM'
        | 'GE'
        | 'DE'
        | 'GH'
        | 'GI'
        | 'GR'
        | 'GL'
        | 'GD'
        | 'GP'
        | 'GU'
        | 'GT'
        | 'GN'
        | 'GW'
        | 'GY'
        | 'HT'
        | 'HM'
        | 'VA'
        | 'HN'
        | 'HK'
        | 'HU'
        | 'IS'
        | 'IN'
        | 'ID'
        | 'IR'
        | 'IQ'
        | 'IE'
        | 'IL'
        | 'IT'
        | 'JM'
        | 'JP'
        | 'JO'
        | 'KZ'
        | 'KE'
        | 'KI'
        | 'KP'
        | 'KR'
        | 'KW'
        | 'KG'
        | 'LA'
        | 'LV'
        | 'LB'
        | 'LS'
        | 'LR'
        | 'LY'
        | 'LI'
        | 'LT'
        | 'LU'
        | 'MO'
        | 'MG'
        | 'MW'
        | 'MY'
        | 'MV'
        | 'ML'
        | 'MT'
        | 'MH'
        | 'MQ'
        | 'MR'
        | 'MU'
        | 'YT'
        | 'MX'
        | 'FM'
        | 'MD'
        | 'MC'
        | 'MN'
        | 'MS'
        | 'MA'
        | 'MZ'
        | 'MM'
        | 'NA'
        | 'NR'
        | 'NP'
        | 'NL'
        | 'NC'
        | 'NZ'
        | 'NI'
        | 'NE'
        | 'NG'
        | 'NU'
        | 'NF'
        | 'MP'
        | 'MK'
        | 'NO'
        | 'OM'
        | 'PK'
        | 'PW'
        | 'PS'
        | 'PA'
        | 'PG'
        | 'PY'
        | 'PE'
        | 'PH'
        | 'PN'
        | 'PL'
        | 'PT'
        | 'PR'
        | 'QA'
        | 'RE'
        | 'RO'
        | 'RU'
        | 'RW'
        | 'SH'
        | 'KN'
        | 'LC'
        | 'PM'
        | 'VC'
        | 'WS'
        | 'SM'
        | 'ST'
        | 'SA'
        | 'SN'
        | 'SC'
        | 'SL'
        | 'SG'
        | 'SK'
        | 'SI'
        | 'SB'
        | 'SO'
        | 'ZA'
        | 'GS'
        | 'ES'
        | 'LK'
        | 'SD'
        | 'SR'
        | 'SJ'
        | 'SZ'
        | 'SE'
        | 'CH'
        | 'SY'
        | 'TW'
        | 'TJ'
        | 'TZ'
        | 'TH'
        | 'TL'
        | 'TG'
        | 'TK'
        | 'TO'
        | 'TT'
        | 'TN'
        | 'TR'
        | 'TM'
        | 'TC'
        | 'TV'
        | 'UG'
        | 'UA'
        | 'AE'
        | 'GB'
        | 'UM'
        | 'UY'
        | 'UZ'
        | 'VU'
        | 'VE'
        | 'VN'
        | 'VG'
        | 'VI'
        | 'WF'
        | 'EH'
        | 'YE'
        | 'ZM'
        | 'ZW'
        | 'AX'
        | 'BQ'
        | 'CW'
        | 'GG'
        | 'IM'
        | 'JE'
        | 'ME'
        | 'BL'
        | 'MF'
        | 'RS'
        | 'SX'
        | 'SS'
        | 'XK';

      /**
       * Postal or ZIP code.
       */
      postal_code: string;

      /**
       * Primary street address.
       */
      street_line_1: string;

      /**
       * Secondary street address (apartment, suite, etc.).
       */
      street_line_2: string | null;
    }
  }

  export interface BusinessBeneficiaryDataResponse {
    /**
     * Beneficial owners of the business. At least one required.
     */
    beneficial_owners: Array<
      | BusinessBeneficiaryDataResponse.UsBeneficiaryDataResponse
      | BusinessBeneficiaryDataResponse.NonUsBeneficiaryDataResponse
    >;

    /**
     * Individual with primary responsibility for controlling, managing, or directing
     * the business.
     */
    control_person:
      | BusinessBeneficiaryDataResponse.UnionMember0
      | BusinessBeneficiaryDataResponse.UnionMember1;

    /**
     * ISO 3166-1 alpha-2 country code where the business is incorporated.
     */
    country_of_incorporation:
      | 'AF'
      | 'AL'
      | 'DZ'
      | 'AS'
      | 'AD'
      | 'AO'
      | 'AI'
      | 'AQ'
      | 'AG'
      | 'AR'
      | 'AM'
      | 'AW'
      | 'AU'
      | 'AT'
      | 'AZ'
      | 'BS'
      | 'BH'
      | 'BD'
      | 'BB'
      | 'BY'
      | 'BE'
      | 'BZ'
      | 'BJ'
      | 'BM'
      | 'BT'
      | 'BO'
      | 'BA'
      | 'BW'
      | 'BV'
      | 'BR'
      | 'IO'
      | 'BN'
      | 'BG'
      | 'BF'
      | 'BI'
      | 'KH'
      | 'CM'
      | 'CA'
      | 'CV'
      | 'KY'
      | 'CF'
      | 'TD'
      | 'CL'
      | 'CN'
      | 'CX'
      | 'CC'
      | 'CO'
      | 'KM'
      | 'CG'
      | 'CD'
      | 'CK'
      | 'CR'
      | 'CI'
      | 'HR'
      | 'CU'
      | 'CY'
      | 'CZ'
      | 'DK'
      | 'DJ'
      | 'DM'
      | 'DO'
      | 'EC'
      | 'EG'
      | 'SV'
      | 'GQ'
      | 'ER'
      | 'EE'
      | 'ET'
      | 'FK'
      | 'FO'
      | 'FJ'
      | 'FI'
      | 'FR'
      | 'GF'
      | 'PF'
      | 'TF'
      | 'GA'
      | 'GM'
      | 'GE'
      | 'DE'
      | 'GH'
      | 'GI'
      | 'GR'
      | 'GL'
      | 'GD'
      | 'GP'
      | 'GU'
      | 'GT'
      | 'GN'
      | 'GW'
      | 'GY'
      | 'HT'
      | 'HM'
      | 'VA'
      | 'HN'
      | 'HK'
      | 'HU'
      | 'IS'
      | 'IN'
      | 'ID'
      | 'IR'
      | 'IQ'
      | 'IE'
      | 'IL'
      | 'IT'
      | 'JM'
      | 'JP'
      | 'JO'
      | 'KZ'
      | 'KE'
      | 'KI'
      | 'KP'
      | 'KR'
      | 'KW'
      | 'KG'
      | 'LA'
      | 'LV'
      | 'LB'
      | 'LS'
      | 'LR'
      | 'LY'
      | 'LI'
      | 'LT'
      | 'LU'
      | 'MO'
      | 'MG'
      | 'MW'
      | 'MY'
      | 'MV'
      | 'ML'
      | 'MT'
      | 'MH'
      | 'MQ'
      | 'MR'
      | 'MU'
      | 'YT'
      | 'MX'
      | 'FM'
      | 'MD'
      | 'MC'
      | 'MN'
      | 'MS'
      | 'MA'
      | 'MZ'
      | 'MM'
      | 'NA'
      | 'NR'
      | 'NP'
      | 'NL'
      | 'NC'
      | 'NZ'
      | 'NI'
      | 'NE'
      | 'NG'
      | 'NU'
      | 'NF'
      | 'MP'
      | 'MK'
      | 'NO'
      | 'OM'
      | 'PK'
      | 'PW'
      | 'PS'
      | 'PA'
      | 'PG'
      | 'PY'
      | 'PE'
      | 'PH'
      | 'PN'
      | 'PL'
      | 'PT'
      | 'PR'
      | 'QA'
      | 'RE'
      | 'RO'
      | 'RU'
      | 'RW'
      | 'SH'
      | 'KN'
      | 'LC'
      | 'PM'
      | 'VC'
      | 'WS'
      | 'SM'
      | 'ST'
      | 'SA'
      | 'SN'
      | 'SC'
      | 'SL'
      | 'SG'
      | 'SK'
      | 'SI'
      | 'SB'
      | 'SO'
      | 'ZA'
      | 'GS'
      | 'ES'
      | 'LK'
      | 'SD'
      | 'SR'
      | 'SJ'
      | 'SZ'
      | 'SE'
      | 'CH'
      | 'SY'
      | 'TW'
      | 'TJ'
      | 'TZ'
      | 'TH'
      | 'TL'
      | 'TG'
      | 'TK'
      | 'TO'
      | 'TT'
      | 'TN'
      | 'TR'
      | 'TM'
      | 'TC'
      | 'TV'
      | 'UG'
      | 'UA'
      | 'AE'
      | 'GB'
      | 'US'
      | 'UM'
      | 'UY'
      | 'UZ'
      | 'VU'
      | 'VE'
      | 'VN'
      | 'VG'
      | 'VI'
      | 'WF'
      | 'EH'
      | 'YE'
      | 'ZM'
      | 'ZW'
      | 'AX'
      | 'BQ'
      | 'CW'
      | 'GG'
      | 'IM'
      | 'JE'
      | 'ME'
      | 'BL'
      | 'MF'
      | 'RS'
      | 'SX'
      | 'SS'
      | 'XK';

    /**
     * Trade name the business operates under, if different from the legal name.
     */
    doing_business_as: string | null;

    /**
     * Full legal name of the business.
     */
    legal_business_name: string;

    /**
     * Physical operating address of the business.
     */
    physical_address:
      | BusinessBeneficiaryDataResponse.UsResidentialAddressResponse
      | BusinessBeneficiaryDataResponse.NonUsResidentialAddressResponse;

    /**
     * Registered legal address of the business.
     */
    registered_address:
      | BusinessBeneficiaryDataResponse.UsResidentialAddressResponse
      | BusinessBeneficiaryDataResponse.NonUsResidentialAddressResponse;

    /**
     * Business registration number: type "ein" (Employer Identification Number, format
     * ##-#######) or "ssn" (Social Security Number, format ###-##-####).
     */
    registration_number:
      | BusinessBeneficiaryDataResponse.EinIdentification
      | BusinessBeneficiaryDataResponse.SsnIdentification;

    /**
     * State or subdivision where the business is incorporated.
     */
    state_of_incorporation: string;

    /**
     * Four-digit year the business was incorporated.
     */
    year_of_incorporation: number;
  }

  export namespace BusinessBeneficiaryDataResponse {
    export interface UsBeneficiaryDataResponse {
      /**
       * ISO 3166-1 alpha-2 country code of citizenship.
       */
      country_of_citizenship: 'US';

      /**
       * Date of birth as an ISO 8601 calendar date (YYYY-MM-DD).
       */
      date_of_birth: string;

      /**
       * Government-issued identification with type: "ssn" (Social Security Number,
       * format ###-##-####) or "itin" (Individual Taxpayer ID, format 9##-##-####).
       */
      identification:
        | UsBeneficiaryDataResponse.SsnIdentification
        | UsBeneficiaryDataResponse.ItinIdentification;

      /**
       * Full legal name of the account holder.
       */
      legal_name: string;

      /**
       * Residential address of the account holder.
       */
      residential_address:
        | UsBeneficiaryDataResponse.UsResidentialAddressResponse
        | UsBeneficiaryDataResponse.NonUsResidentialAddressResponse;
    }

    export namespace UsBeneficiaryDataResponse {
      export interface SsnIdentification {
        type: 'ssn';

        value: string;
      }

      export interface ItinIdentification {
        type: 'itin';

        value: string;
      }

      export interface UsResidentialAddressResponse {
        /**
         * City name.
         */
        city: string;

        /**
         * ISO 3166-1 alpha-2 country code.
         */
        country: 'US';

        /**
         * Postal or ZIP code.
         */
        postal_code: string;

        /**
         * Two-letter state code.
         */
        state: string;

        /**
         * Primary street address.
         */
        street_line_1: string;

        /**
         * Secondary street address (apartment, suite, etc.).
         */
        street_line_2: string | null;
      }

      export interface NonUsResidentialAddressResponse {
        /**
         * City name.
         */
        city: string;

        /**
         * ISO 3166-1 alpha-2 country code.
         */
        country:
          | 'AF'
          | 'AL'
          | 'DZ'
          | 'AS'
          | 'AD'
          | 'AO'
          | 'AI'
          | 'AQ'
          | 'AG'
          | 'AR'
          | 'AM'
          | 'AW'
          | 'AU'
          | 'AT'
          | 'AZ'
          | 'BS'
          | 'BH'
          | 'BD'
          | 'BB'
          | 'BY'
          | 'BE'
          | 'BZ'
          | 'BJ'
          | 'BM'
          | 'BT'
          | 'BO'
          | 'BA'
          | 'BW'
          | 'BV'
          | 'BR'
          | 'IO'
          | 'BN'
          | 'BG'
          | 'BF'
          | 'BI'
          | 'KH'
          | 'CM'
          | 'CA'
          | 'CV'
          | 'KY'
          | 'CF'
          | 'TD'
          | 'CL'
          | 'CN'
          | 'CX'
          | 'CC'
          | 'CO'
          | 'KM'
          | 'CG'
          | 'CD'
          | 'CK'
          | 'CR'
          | 'CI'
          | 'HR'
          | 'CU'
          | 'CY'
          | 'CZ'
          | 'DK'
          | 'DJ'
          | 'DM'
          | 'DO'
          | 'EC'
          | 'EG'
          | 'SV'
          | 'GQ'
          | 'ER'
          | 'EE'
          | 'ET'
          | 'FK'
          | 'FO'
          | 'FJ'
          | 'FI'
          | 'FR'
          | 'GF'
          | 'PF'
          | 'TF'
          | 'GA'
          | 'GM'
          | 'GE'
          | 'DE'
          | 'GH'
          | 'GI'
          | 'GR'
          | 'GL'
          | 'GD'
          | 'GP'
          | 'GU'
          | 'GT'
          | 'GN'
          | 'GW'
          | 'GY'
          | 'HT'
          | 'HM'
          | 'VA'
          | 'HN'
          | 'HK'
          | 'HU'
          | 'IS'
          | 'IN'
          | 'ID'
          | 'IR'
          | 'IQ'
          | 'IE'
          | 'IL'
          | 'IT'
          | 'JM'
          | 'JP'
          | 'JO'
          | 'KZ'
          | 'KE'
          | 'KI'
          | 'KP'
          | 'KR'
          | 'KW'
          | 'KG'
          | 'LA'
          | 'LV'
          | 'LB'
          | 'LS'
          | 'LR'
          | 'LY'
          | 'LI'
          | 'LT'
          | 'LU'
          | 'MO'
          | 'MG'
          | 'MW'
          | 'MY'
          | 'MV'
          | 'ML'
          | 'MT'
          | 'MH'
          | 'MQ'
          | 'MR'
          | 'MU'
          | 'YT'
          | 'MX'
          | 'FM'
          | 'MD'
          | 'MC'
          | 'MN'
          | 'MS'
          | 'MA'
          | 'MZ'
          | 'MM'
          | 'NA'
          | 'NR'
          | 'NP'
          | 'NL'
          | 'NC'
          | 'NZ'
          | 'NI'
          | 'NE'
          | 'NG'
          | 'NU'
          | 'NF'
          | 'MP'
          | 'MK'
          | 'NO'
          | 'OM'
          | 'PK'
          | 'PW'
          | 'PS'
          | 'PA'
          | 'PG'
          | 'PY'
          | 'PE'
          | 'PH'
          | 'PN'
          | 'PL'
          | 'PT'
          | 'PR'
          | 'QA'
          | 'RE'
          | 'RO'
          | 'RU'
          | 'RW'
          | 'SH'
          | 'KN'
          | 'LC'
          | 'PM'
          | 'VC'
          | 'WS'
          | 'SM'
          | 'ST'
          | 'SA'
          | 'SN'
          | 'SC'
          | 'SL'
          | 'SG'
          | 'SK'
          | 'SI'
          | 'SB'
          | 'SO'
          | 'ZA'
          | 'GS'
          | 'ES'
          | 'LK'
          | 'SD'
          | 'SR'
          | 'SJ'
          | 'SZ'
          | 'SE'
          | 'CH'
          | 'SY'
          | 'TW'
          | 'TJ'
          | 'TZ'
          | 'TH'
          | 'TL'
          | 'TG'
          | 'TK'
          | 'TO'
          | 'TT'
          | 'TN'
          | 'TR'
          | 'TM'
          | 'TC'
          | 'TV'
          | 'UG'
          | 'UA'
          | 'AE'
          | 'GB'
          | 'UM'
          | 'UY'
          | 'UZ'
          | 'VU'
          | 'VE'
          | 'VN'
          | 'VG'
          | 'VI'
          | 'WF'
          | 'EH'
          | 'YE'
          | 'ZM'
          | 'ZW'
          | 'AX'
          | 'BQ'
          | 'CW'
          | 'GG'
          | 'IM'
          | 'JE'
          | 'ME'
          | 'BL'
          | 'MF'
          | 'RS'
          | 'SX'
          | 'SS'
          | 'XK';

        /**
         * Postal or ZIP code.
         */
        postal_code: string;

        /**
         * Primary street address.
         */
        street_line_1: string;

        /**
         * Secondary street address (apartment, suite, etc.).
         */
        street_line_2: string | null;
      }
    }

    export interface NonUsBeneficiaryDataResponse {
      /**
       * ISO 3166-1 alpha-2 country code of citizenship.
       */
      country_of_citizenship:
        | 'AF'
        | 'AL'
        | 'DZ'
        | 'AS'
        | 'AD'
        | 'AO'
        | 'AI'
        | 'AQ'
        | 'AG'
        | 'AR'
        | 'AM'
        | 'AW'
        | 'AU'
        | 'AT'
        | 'AZ'
        | 'BS'
        | 'BH'
        | 'BD'
        | 'BB'
        | 'BY'
        | 'BE'
        | 'BZ'
        | 'BJ'
        | 'BM'
        | 'BT'
        | 'BO'
        | 'BA'
        | 'BW'
        | 'BV'
        | 'BR'
        | 'IO'
        | 'BN'
        | 'BG'
        | 'BF'
        | 'BI'
        | 'KH'
        | 'CM'
        | 'CA'
        | 'CV'
        | 'KY'
        | 'CF'
        | 'TD'
        | 'CL'
        | 'CN'
        | 'CX'
        | 'CC'
        | 'CO'
        | 'KM'
        | 'CG'
        | 'CD'
        | 'CK'
        | 'CR'
        | 'CI'
        | 'HR'
        | 'CU'
        | 'CY'
        | 'CZ'
        | 'DK'
        | 'DJ'
        | 'DM'
        | 'DO'
        | 'EC'
        | 'EG'
        | 'SV'
        | 'GQ'
        | 'ER'
        | 'EE'
        | 'ET'
        | 'FK'
        | 'FO'
        | 'FJ'
        | 'FI'
        | 'FR'
        | 'GF'
        | 'PF'
        | 'TF'
        | 'GA'
        | 'GM'
        | 'GE'
        | 'DE'
        | 'GH'
        | 'GI'
        | 'GR'
        | 'GL'
        | 'GD'
        | 'GP'
        | 'GU'
        | 'GT'
        | 'GN'
        | 'GW'
        | 'GY'
        | 'HT'
        | 'HM'
        | 'VA'
        | 'HN'
        | 'HK'
        | 'HU'
        | 'IS'
        | 'IN'
        | 'ID'
        | 'IR'
        | 'IQ'
        | 'IE'
        | 'IL'
        | 'IT'
        | 'JM'
        | 'JP'
        | 'JO'
        | 'KZ'
        | 'KE'
        | 'KI'
        | 'KP'
        | 'KR'
        | 'KW'
        | 'KG'
        | 'LA'
        | 'LV'
        | 'LB'
        | 'LS'
        | 'LR'
        | 'LY'
        | 'LI'
        | 'LT'
        | 'LU'
        | 'MO'
        | 'MG'
        | 'MW'
        | 'MY'
        | 'MV'
        | 'ML'
        | 'MT'
        | 'MH'
        | 'MQ'
        | 'MR'
        | 'MU'
        | 'YT'
        | 'MX'
        | 'FM'
        | 'MD'
        | 'MC'
        | 'MN'
        | 'MS'
        | 'MA'
        | 'MZ'
        | 'MM'
        | 'NA'
        | 'NR'
        | 'NP'
        | 'NL'
        | 'NC'
        | 'NZ'
        | 'NI'
        | 'NE'
        | 'NG'
        | 'NU'
        | 'NF'
        | 'MP'
        | 'MK'
        | 'NO'
        | 'OM'
        | 'PK'
        | 'PW'
        | 'PS'
        | 'PA'
        | 'PG'
        | 'PY'
        | 'PE'
        | 'PH'
        | 'PN'
        | 'PL'
        | 'PT'
        | 'PR'
        | 'QA'
        | 'RE'
        | 'RO'
        | 'RU'
        | 'RW'
        | 'SH'
        | 'KN'
        | 'LC'
        | 'PM'
        | 'VC'
        | 'WS'
        | 'SM'
        | 'ST'
        | 'SA'
        | 'SN'
        | 'SC'
        | 'SL'
        | 'SG'
        | 'SK'
        | 'SI'
        | 'SB'
        | 'SO'
        | 'ZA'
        | 'GS'
        | 'ES'
        | 'LK'
        | 'SD'
        | 'SR'
        | 'SJ'
        | 'SZ'
        | 'SE'
        | 'CH'
        | 'SY'
        | 'TW'
        | 'TJ'
        | 'TZ'
        | 'TH'
        | 'TL'
        | 'TG'
        | 'TK'
        | 'TO'
        | 'TT'
        | 'TN'
        | 'TR'
        | 'TM'
        | 'TC'
        | 'TV'
        | 'UG'
        | 'UA'
        | 'AE'
        | 'GB'
        | 'UM'
        | 'UY'
        | 'UZ'
        | 'VU'
        | 'VE'
        | 'VN'
        | 'VG'
        | 'VI'
        | 'WF'
        | 'EH'
        | 'YE'
        | 'ZM'
        | 'ZW'
        | 'AX'
        | 'BQ'
        | 'CW'
        | 'GG'
        | 'IM'
        | 'JE'
        | 'ME'
        | 'BL'
        | 'MF'
        | 'RS'
        | 'SX'
        | 'SS'
        | 'XK';

      /**
       * Date of birth as an ISO 8601 calendar date (YYYY-MM-DD).
       */
      date_of_birth: string;

      /**
       * Government-issued identification with type: "id" (generic government-issued ID).
       */
      identification: NonUsBeneficiaryDataResponse.Identification;

      /**
       * Full legal name of the account holder.
       */
      legal_name: string;

      /**
       * Residential address of the account holder.
       */
      residential_address:
        | NonUsBeneficiaryDataResponse.UsResidentialAddressResponse
        | NonUsBeneficiaryDataResponse.NonUsResidentialAddressResponse;
    }

    export namespace NonUsBeneficiaryDataResponse {
      /**
       * Government-issued identification with type: "id" (generic government-issued ID).
       */
      export interface Identification {
        type: 'id';

        value: string;
      }

      export interface UsResidentialAddressResponse {
        /**
         * City name.
         */
        city: string;

        /**
         * ISO 3166-1 alpha-2 country code.
         */
        country: 'US';

        /**
         * Postal or ZIP code.
         */
        postal_code: string;

        /**
         * Two-letter state code.
         */
        state: string;

        /**
         * Primary street address.
         */
        street_line_1: string;

        /**
         * Secondary street address (apartment, suite, etc.).
         */
        street_line_2: string | null;
      }

      export interface NonUsResidentialAddressResponse {
        /**
         * City name.
         */
        city: string;

        /**
         * ISO 3166-1 alpha-2 country code.
         */
        country:
          | 'AF'
          | 'AL'
          | 'DZ'
          | 'AS'
          | 'AD'
          | 'AO'
          | 'AI'
          | 'AQ'
          | 'AG'
          | 'AR'
          | 'AM'
          | 'AW'
          | 'AU'
          | 'AT'
          | 'AZ'
          | 'BS'
          | 'BH'
          | 'BD'
          | 'BB'
          | 'BY'
          | 'BE'
          | 'BZ'
          | 'BJ'
          | 'BM'
          | 'BT'
          | 'BO'
          | 'BA'
          | 'BW'
          | 'BV'
          | 'BR'
          | 'IO'
          | 'BN'
          | 'BG'
          | 'BF'
          | 'BI'
          | 'KH'
          | 'CM'
          | 'CA'
          | 'CV'
          | 'KY'
          | 'CF'
          | 'TD'
          | 'CL'
          | 'CN'
          | 'CX'
          | 'CC'
          | 'CO'
          | 'KM'
          | 'CG'
          | 'CD'
          | 'CK'
          | 'CR'
          | 'CI'
          | 'HR'
          | 'CU'
          | 'CY'
          | 'CZ'
          | 'DK'
          | 'DJ'
          | 'DM'
          | 'DO'
          | 'EC'
          | 'EG'
          | 'SV'
          | 'GQ'
          | 'ER'
          | 'EE'
          | 'ET'
          | 'FK'
          | 'FO'
          | 'FJ'
          | 'FI'
          | 'FR'
          | 'GF'
          | 'PF'
          | 'TF'
          | 'GA'
          | 'GM'
          | 'GE'
          | 'DE'
          | 'GH'
          | 'GI'
          | 'GR'
          | 'GL'
          | 'GD'
          | 'GP'
          | 'GU'
          | 'GT'
          | 'GN'
          | 'GW'
          | 'GY'
          | 'HT'
          | 'HM'
          | 'VA'
          | 'HN'
          | 'HK'
          | 'HU'
          | 'IS'
          | 'IN'
          | 'ID'
          | 'IR'
          | 'IQ'
          | 'IE'
          | 'IL'
          | 'IT'
          | 'JM'
          | 'JP'
          | 'JO'
          | 'KZ'
          | 'KE'
          | 'KI'
          | 'KP'
          | 'KR'
          | 'KW'
          | 'KG'
          | 'LA'
          | 'LV'
          | 'LB'
          | 'LS'
          | 'LR'
          | 'LY'
          | 'LI'
          | 'LT'
          | 'LU'
          | 'MO'
          | 'MG'
          | 'MW'
          | 'MY'
          | 'MV'
          | 'ML'
          | 'MT'
          | 'MH'
          | 'MQ'
          | 'MR'
          | 'MU'
          | 'YT'
          | 'MX'
          | 'FM'
          | 'MD'
          | 'MC'
          | 'MN'
          | 'MS'
          | 'MA'
          | 'MZ'
          | 'MM'
          | 'NA'
          | 'NR'
          | 'NP'
          | 'NL'
          | 'NC'
          | 'NZ'
          | 'NI'
          | 'NE'
          | 'NG'
          | 'NU'
          | 'NF'
          | 'MP'
          | 'MK'
          | 'NO'
          | 'OM'
          | 'PK'
          | 'PW'
          | 'PS'
          | 'PA'
          | 'PG'
          | 'PY'
          | 'PE'
          | 'PH'
          | 'PN'
          | 'PL'
          | 'PT'
          | 'PR'
          | 'QA'
          | 'RE'
          | 'RO'
          | 'RU'
          | 'RW'
          | 'SH'
          | 'KN'
          | 'LC'
          | 'PM'
          | 'VC'
          | 'WS'
          | 'SM'
          | 'ST'
          | 'SA'
          | 'SN'
          | 'SC'
          | 'SL'
          | 'SG'
          | 'SK'
          | 'SI'
          | 'SB'
          | 'SO'
          | 'ZA'
          | 'GS'
          | 'ES'
          | 'LK'
          | 'SD'
          | 'SR'
          | 'SJ'
          | 'SZ'
          | 'SE'
          | 'CH'
          | 'SY'
          | 'TW'
          | 'TJ'
          | 'TZ'
          | 'TH'
          | 'TL'
          | 'TG'
          | 'TK'
          | 'TO'
          | 'TT'
          | 'TN'
          | 'TR'
          | 'TM'
          | 'TC'
          | 'TV'
          | 'UG'
          | 'UA'
          | 'AE'
          | 'GB'
          | 'UM'
          | 'UY'
          | 'UZ'
          | 'VU'
          | 'VE'
          | 'VN'
          | 'VG'
          | 'VI'
          | 'WF'
          | 'EH'
          | 'YE'
          | 'ZM'
          | 'ZW'
          | 'AX'
          | 'BQ'
          | 'CW'
          | 'GG'
          | 'IM'
          | 'JE'
          | 'ME'
          | 'BL'
          | 'MF'
          | 'RS'
          | 'SX'
          | 'SS'
          | 'XK';

        /**
         * Postal or ZIP code.
         */
        postal_code: string;

        /**
         * Primary street address.
         */
        street_line_1: string;

        /**
         * Secondary street address (apartment, suite, etc.).
         */
        street_line_2: string | null;
      }
    }

    export interface UnionMember0 {
      /**
       * ISO 3166-1 alpha-2 country code of citizenship.
       */
      country_of_citizenship: 'US';

      /**
       * Date of birth as an ISO 8601 calendar date (YYYY-MM-DD).
       */
      date_of_birth: string;

      /**
       * Government-issued identification with type: "ssn" (Social Security Number,
       * format ###-##-####) or "itin" (Individual Taxpayer ID, format 9##-##-####).
       */
      identification: UnionMember0.SsnIdentification | UnionMember0.ItinIdentification;

      /**
       * Full legal name of the account holder.
       */
      legal_name: string;

      /**
       * Residential address of the account holder.
       */
      residential_address:
        | UnionMember0.UsResidentialAddressResponse
        | UnionMember0.NonUsResidentialAddressResponse;

      /**
       * Role of the control person at the business (e.g., "CEO", "President", "Managing
       * Director").
       */
      title: string;
    }

    export namespace UnionMember0 {
      export interface SsnIdentification {
        type: 'ssn';

        value: string;
      }

      export interface ItinIdentification {
        type: 'itin';

        value: string;
      }

      export interface UsResidentialAddressResponse {
        /**
         * City name.
         */
        city: string;

        /**
         * ISO 3166-1 alpha-2 country code.
         */
        country: 'US';

        /**
         * Postal or ZIP code.
         */
        postal_code: string;

        /**
         * Two-letter state code.
         */
        state: string;

        /**
         * Primary street address.
         */
        street_line_1: string;

        /**
         * Secondary street address (apartment, suite, etc.).
         */
        street_line_2: string | null;
      }

      export interface NonUsResidentialAddressResponse {
        /**
         * City name.
         */
        city: string;

        /**
         * ISO 3166-1 alpha-2 country code.
         */
        country:
          | 'AF'
          | 'AL'
          | 'DZ'
          | 'AS'
          | 'AD'
          | 'AO'
          | 'AI'
          | 'AQ'
          | 'AG'
          | 'AR'
          | 'AM'
          | 'AW'
          | 'AU'
          | 'AT'
          | 'AZ'
          | 'BS'
          | 'BH'
          | 'BD'
          | 'BB'
          | 'BY'
          | 'BE'
          | 'BZ'
          | 'BJ'
          | 'BM'
          | 'BT'
          | 'BO'
          | 'BA'
          | 'BW'
          | 'BV'
          | 'BR'
          | 'IO'
          | 'BN'
          | 'BG'
          | 'BF'
          | 'BI'
          | 'KH'
          | 'CM'
          | 'CA'
          | 'CV'
          | 'KY'
          | 'CF'
          | 'TD'
          | 'CL'
          | 'CN'
          | 'CX'
          | 'CC'
          | 'CO'
          | 'KM'
          | 'CG'
          | 'CD'
          | 'CK'
          | 'CR'
          | 'CI'
          | 'HR'
          | 'CU'
          | 'CY'
          | 'CZ'
          | 'DK'
          | 'DJ'
          | 'DM'
          | 'DO'
          | 'EC'
          | 'EG'
          | 'SV'
          | 'GQ'
          | 'ER'
          | 'EE'
          | 'ET'
          | 'FK'
          | 'FO'
          | 'FJ'
          | 'FI'
          | 'FR'
          | 'GF'
          | 'PF'
          | 'TF'
          | 'GA'
          | 'GM'
          | 'GE'
          | 'DE'
          | 'GH'
          | 'GI'
          | 'GR'
          | 'GL'
          | 'GD'
          | 'GP'
          | 'GU'
          | 'GT'
          | 'GN'
          | 'GW'
          | 'GY'
          | 'HT'
          | 'HM'
          | 'VA'
          | 'HN'
          | 'HK'
          | 'HU'
          | 'IS'
          | 'IN'
          | 'ID'
          | 'IR'
          | 'IQ'
          | 'IE'
          | 'IL'
          | 'IT'
          | 'JM'
          | 'JP'
          | 'JO'
          | 'KZ'
          | 'KE'
          | 'KI'
          | 'KP'
          | 'KR'
          | 'KW'
          | 'KG'
          | 'LA'
          | 'LV'
          | 'LB'
          | 'LS'
          | 'LR'
          | 'LY'
          | 'LI'
          | 'LT'
          | 'LU'
          | 'MO'
          | 'MG'
          | 'MW'
          | 'MY'
          | 'MV'
          | 'ML'
          | 'MT'
          | 'MH'
          | 'MQ'
          | 'MR'
          | 'MU'
          | 'YT'
          | 'MX'
          | 'FM'
          | 'MD'
          | 'MC'
          | 'MN'
          | 'MS'
          | 'MA'
          | 'MZ'
          | 'MM'
          | 'NA'
          | 'NR'
          | 'NP'
          | 'NL'
          | 'NC'
          | 'NZ'
          | 'NI'
          | 'NE'
          | 'NG'
          | 'NU'
          | 'NF'
          | 'MP'
          | 'MK'
          | 'NO'
          | 'OM'
          | 'PK'
          | 'PW'
          | 'PS'
          | 'PA'
          | 'PG'
          | 'PY'
          | 'PE'
          | 'PH'
          | 'PN'
          | 'PL'
          | 'PT'
          | 'PR'
          | 'QA'
          | 'RE'
          | 'RO'
          | 'RU'
          | 'RW'
          | 'SH'
          | 'KN'
          | 'LC'
          | 'PM'
          | 'VC'
          | 'WS'
          | 'SM'
          | 'ST'
          | 'SA'
          | 'SN'
          | 'SC'
          | 'SL'
          | 'SG'
          | 'SK'
          | 'SI'
          | 'SB'
          | 'SO'
          | 'ZA'
          | 'GS'
          | 'ES'
          | 'LK'
          | 'SD'
          | 'SR'
          | 'SJ'
          | 'SZ'
          | 'SE'
          | 'CH'
          | 'SY'
          | 'TW'
          | 'TJ'
          | 'TZ'
          | 'TH'
          | 'TL'
          | 'TG'
          | 'TK'
          | 'TO'
          | 'TT'
          | 'TN'
          | 'TR'
          | 'TM'
          | 'TC'
          | 'TV'
          | 'UG'
          | 'UA'
          | 'AE'
          | 'GB'
          | 'UM'
          | 'UY'
          | 'UZ'
          | 'VU'
          | 'VE'
          | 'VN'
          | 'VG'
          | 'VI'
          | 'WF'
          | 'EH'
          | 'YE'
          | 'ZM'
          | 'ZW'
          | 'AX'
          | 'BQ'
          | 'CW'
          | 'GG'
          | 'IM'
          | 'JE'
          | 'ME'
          | 'BL'
          | 'MF'
          | 'RS'
          | 'SX'
          | 'SS'
          | 'XK';

        /**
         * Postal or ZIP code.
         */
        postal_code: string;

        /**
         * Primary street address.
         */
        street_line_1: string;

        /**
         * Secondary street address (apartment, suite, etc.).
         */
        street_line_2: string | null;
      }
    }

    export interface UnionMember1 {
      /**
       * ISO 3166-1 alpha-2 country code of citizenship.
       */
      country_of_citizenship:
        | 'AF'
        | 'AL'
        | 'DZ'
        | 'AS'
        | 'AD'
        | 'AO'
        | 'AI'
        | 'AQ'
        | 'AG'
        | 'AR'
        | 'AM'
        | 'AW'
        | 'AU'
        | 'AT'
        | 'AZ'
        | 'BS'
        | 'BH'
        | 'BD'
        | 'BB'
        | 'BY'
        | 'BE'
        | 'BZ'
        | 'BJ'
        | 'BM'
        | 'BT'
        | 'BO'
        | 'BA'
        | 'BW'
        | 'BV'
        | 'BR'
        | 'IO'
        | 'BN'
        | 'BG'
        | 'BF'
        | 'BI'
        | 'KH'
        | 'CM'
        | 'CA'
        | 'CV'
        | 'KY'
        | 'CF'
        | 'TD'
        | 'CL'
        | 'CN'
        | 'CX'
        | 'CC'
        | 'CO'
        | 'KM'
        | 'CG'
        | 'CD'
        | 'CK'
        | 'CR'
        | 'CI'
        | 'HR'
        | 'CU'
        | 'CY'
        | 'CZ'
        | 'DK'
        | 'DJ'
        | 'DM'
        | 'DO'
        | 'EC'
        | 'EG'
        | 'SV'
        | 'GQ'
        | 'ER'
        | 'EE'
        | 'ET'
        | 'FK'
        | 'FO'
        | 'FJ'
        | 'FI'
        | 'FR'
        | 'GF'
        | 'PF'
        | 'TF'
        | 'GA'
        | 'GM'
        | 'GE'
        | 'DE'
        | 'GH'
        | 'GI'
        | 'GR'
        | 'GL'
        | 'GD'
        | 'GP'
        | 'GU'
        | 'GT'
        | 'GN'
        | 'GW'
        | 'GY'
        | 'HT'
        | 'HM'
        | 'VA'
        | 'HN'
        | 'HK'
        | 'HU'
        | 'IS'
        | 'IN'
        | 'ID'
        | 'IR'
        | 'IQ'
        | 'IE'
        | 'IL'
        | 'IT'
        | 'JM'
        | 'JP'
        | 'JO'
        | 'KZ'
        | 'KE'
        | 'KI'
        | 'KP'
        | 'KR'
        | 'KW'
        | 'KG'
        | 'LA'
        | 'LV'
        | 'LB'
        | 'LS'
        | 'LR'
        | 'LY'
        | 'LI'
        | 'LT'
        | 'LU'
        | 'MO'
        | 'MG'
        | 'MW'
        | 'MY'
        | 'MV'
        | 'ML'
        | 'MT'
        | 'MH'
        | 'MQ'
        | 'MR'
        | 'MU'
        | 'YT'
        | 'MX'
        | 'FM'
        | 'MD'
        | 'MC'
        | 'MN'
        | 'MS'
        | 'MA'
        | 'MZ'
        | 'MM'
        | 'NA'
        | 'NR'
        | 'NP'
        | 'NL'
        | 'NC'
        | 'NZ'
        | 'NI'
        | 'NE'
        | 'NG'
        | 'NU'
        | 'NF'
        | 'MP'
        | 'MK'
        | 'NO'
        | 'OM'
        | 'PK'
        | 'PW'
        | 'PS'
        | 'PA'
        | 'PG'
        | 'PY'
        | 'PE'
        | 'PH'
        | 'PN'
        | 'PL'
        | 'PT'
        | 'PR'
        | 'QA'
        | 'RE'
        | 'RO'
        | 'RU'
        | 'RW'
        | 'SH'
        | 'KN'
        | 'LC'
        | 'PM'
        | 'VC'
        | 'WS'
        | 'SM'
        | 'ST'
        | 'SA'
        | 'SN'
        | 'SC'
        | 'SL'
        | 'SG'
        | 'SK'
        | 'SI'
        | 'SB'
        | 'SO'
        | 'ZA'
        | 'GS'
        | 'ES'
        | 'LK'
        | 'SD'
        | 'SR'
        | 'SJ'
        | 'SZ'
        | 'SE'
        | 'CH'
        | 'SY'
        | 'TW'
        | 'TJ'
        | 'TZ'
        | 'TH'
        | 'TL'
        | 'TG'
        | 'TK'
        | 'TO'
        | 'TT'
        | 'TN'
        | 'TR'
        | 'TM'
        | 'TC'
        | 'TV'
        | 'UG'
        | 'UA'
        | 'AE'
        | 'GB'
        | 'UM'
        | 'UY'
        | 'UZ'
        | 'VU'
        | 'VE'
        | 'VN'
        | 'VG'
        | 'VI'
        | 'WF'
        | 'EH'
        | 'YE'
        | 'ZM'
        | 'ZW'
        | 'AX'
        | 'BQ'
        | 'CW'
        | 'GG'
        | 'IM'
        | 'JE'
        | 'ME'
        | 'BL'
        | 'MF'
        | 'RS'
        | 'SX'
        | 'SS'
        | 'XK';

      /**
       * Date of birth as an ISO 8601 calendar date (YYYY-MM-DD).
       */
      date_of_birth: string;

      /**
       * Government-issued identification with type: "id" (generic government-issued ID).
       */
      identification: UnionMember1.Identification;

      /**
       * Full legal name of the account holder.
       */
      legal_name: string;

      /**
       * Residential address of the account holder.
       */
      residential_address:
        | UnionMember1.UsResidentialAddressResponse
        | UnionMember1.NonUsResidentialAddressResponse;

      /**
       * Role of the control person at the business (e.g., "CEO", "President", "Managing
       * Director").
       */
      title: string;
    }

    export namespace UnionMember1 {
      /**
       * Government-issued identification with type: "id" (generic government-issued ID).
       */
      export interface Identification {
        type: 'id';

        value: string;
      }

      export interface UsResidentialAddressResponse {
        /**
         * City name.
         */
        city: string;

        /**
         * ISO 3166-1 alpha-2 country code.
         */
        country: 'US';

        /**
         * Postal or ZIP code.
         */
        postal_code: string;

        /**
         * Two-letter state code.
         */
        state: string;

        /**
         * Primary street address.
         */
        street_line_1: string;

        /**
         * Secondary street address (apartment, suite, etc.).
         */
        street_line_2: string | null;
      }

      export interface NonUsResidentialAddressResponse {
        /**
         * City name.
         */
        city: string;

        /**
         * ISO 3166-1 alpha-2 country code.
         */
        country:
          | 'AF'
          | 'AL'
          | 'DZ'
          | 'AS'
          | 'AD'
          | 'AO'
          | 'AI'
          | 'AQ'
          | 'AG'
          | 'AR'
          | 'AM'
          | 'AW'
          | 'AU'
          | 'AT'
          | 'AZ'
          | 'BS'
          | 'BH'
          | 'BD'
          | 'BB'
          | 'BY'
          | 'BE'
          | 'BZ'
          | 'BJ'
          | 'BM'
          | 'BT'
          | 'BO'
          | 'BA'
          | 'BW'
          | 'BV'
          | 'BR'
          | 'IO'
          | 'BN'
          | 'BG'
          | 'BF'
          | 'BI'
          | 'KH'
          | 'CM'
          | 'CA'
          | 'CV'
          | 'KY'
          | 'CF'
          | 'TD'
          | 'CL'
          | 'CN'
          | 'CX'
          | 'CC'
          | 'CO'
          | 'KM'
          | 'CG'
          | 'CD'
          | 'CK'
          | 'CR'
          | 'CI'
          | 'HR'
          | 'CU'
          | 'CY'
          | 'CZ'
          | 'DK'
          | 'DJ'
          | 'DM'
          | 'DO'
          | 'EC'
          | 'EG'
          | 'SV'
          | 'GQ'
          | 'ER'
          | 'EE'
          | 'ET'
          | 'FK'
          | 'FO'
          | 'FJ'
          | 'FI'
          | 'FR'
          | 'GF'
          | 'PF'
          | 'TF'
          | 'GA'
          | 'GM'
          | 'GE'
          | 'DE'
          | 'GH'
          | 'GI'
          | 'GR'
          | 'GL'
          | 'GD'
          | 'GP'
          | 'GU'
          | 'GT'
          | 'GN'
          | 'GW'
          | 'GY'
          | 'HT'
          | 'HM'
          | 'VA'
          | 'HN'
          | 'HK'
          | 'HU'
          | 'IS'
          | 'IN'
          | 'ID'
          | 'IR'
          | 'IQ'
          | 'IE'
          | 'IL'
          | 'IT'
          | 'JM'
          | 'JP'
          | 'JO'
          | 'KZ'
          | 'KE'
          | 'KI'
          | 'KP'
          | 'KR'
          | 'KW'
          | 'KG'
          | 'LA'
          | 'LV'
          | 'LB'
          | 'LS'
          | 'LR'
          | 'LY'
          | 'LI'
          | 'LT'
          | 'LU'
          | 'MO'
          | 'MG'
          | 'MW'
          | 'MY'
          | 'MV'
          | 'ML'
          | 'MT'
          | 'MH'
          | 'MQ'
          | 'MR'
          | 'MU'
          | 'YT'
          | 'MX'
          | 'FM'
          | 'MD'
          | 'MC'
          | 'MN'
          | 'MS'
          | 'MA'
          | 'MZ'
          | 'MM'
          | 'NA'
          | 'NR'
          | 'NP'
          | 'NL'
          | 'NC'
          | 'NZ'
          | 'NI'
          | 'NE'
          | 'NG'
          | 'NU'
          | 'NF'
          | 'MP'
          | 'MK'
          | 'NO'
          | 'OM'
          | 'PK'
          | 'PW'
          | 'PS'
          | 'PA'
          | 'PG'
          | 'PY'
          | 'PE'
          | 'PH'
          | 'PN'
          | 'PL'
          | 'PT'
          | 'PR'
          | 'QA'
          | 'RE'
          | 'RO'
          | 'RU'
          | 'RW'
          | 'SH'
          | 'KN'
          | 'LC'
          | 'PM'
          | 'VC'
          | 'WS'
          | 'SM'
          | 'ST'
          | 'SA'
          | 'SN'
          | 'SC'
          | 'SL'
          | 'SG'
          | 'SK'
          | 'SI'
          | 'SB'
          | 'SO'
          | 'ZA'
          | 'GS'
          | 'ES'
          | 'LK'
          | 'SD'
          | 'SR'
          | 'SJ'
          | 'SZ'
          | 'SE'
          | 'CH'
          | 'SY'
          | 'TW'
          | 'TJ'
          | 'TZ'
          | 'TH'
          | 'TL'
          | 'TG'
          | 'TK'
          | 'TO'
          | 'TT'
          | 'TN'
          | 'TR'
          | 'TM'
          | 'TC'
          | 'TV'
          | 'UG'
          | 'UA'
          | 'AE'
          | 'GB'
          | 'UM'
          | 'UY'
          | 'UZ'
          | 'VU'
          | 'VE'
          | 'VN'
          | 'VG'
          | 'VI'
          | 'WF'
          | 'EH'
          | 'YE'
          | 'ZM'
          | 'ZW'
          | 'AX'
          | 'BQ'
          | 'CW'
          | 'GG'
          | 'IM'
          | 'JE'
          | 'ME'
          | 'BL'
          | 'MF'
          | 'RS'
          | 'SX'
          | 'SS'
          | 'XK';

        /**
         * Postal or ZIP code.
         */
        postal_code: string;

        /**
         * Primary street address.
         */
        street_line_1: string;

        /**
         * Secondary street address (apartment, suite, etc.).
         */
        street_line_2: string | null;
      }
    }

    export interface UsResidentialAddressResponse {
      /**
       * City name.
       */
      city: string;

      /**
       * ISO 3166-1 alpha-2 country code.
       */
      country: 'US';

      /**
       * Postal or ZIP code.
       */
      postal_code: string;

      /**
       * Two-letter state code.
       */
      state: string;

      /**
       * Primary street address.
       */
      street_line_1: string;

      /**
       * Secondary street address (apartment, suite, etc.).
       */
      street_line_2: string | null;
    }

    export interface NonUsResidentialAddressResponse {
      /**
       * City name.
       */
      city: string;

      /**
       * ISO 3166-1 alpha-2 country code.
       */
      country:
        | 'AF'
        | 'AL'
        | 'DZ'
        | 'AS'
        | 'AD'
        | 'AO'
        | 'AI'
        | 'AQ'
        | 'AG'
        | 'AR'
        | 'AM'
        | 'AW'
        | 'AU'
        | 'AT'
        | 'AZ'
        | 'BS'
        | 'BH'
        | 'BD'
        | 'BB'
        | 'BY'
        | 'BE'
        | 'BZ'
        | 'BJ'
        | 'BM'
        | 'BT'
        | 'BO'
        | 'BA'
        | 'BW'
        | 'BV'
        | 'BR'
        | 'IO'
        | 'BN'
        | 'BG'
        | 'BF'
        | 'BI'
        | 'KH'
        | 'CM'
        | 'CA'
        | 'CV'
        | 'KY'
        | 'CF'
        | 'TD'
        | 'CL'
        | 'CN'
        | 'CX'
        | 'CC'
        | 'CO'
        | 'KM'
        | 'CG'
        | 'CD'
        | 'CK'
        | 'CR'
        | 'CI'
        | 'HR'
        | 'CU'
        | 'CY'
        | 'CZ'
        | 'DK'
        | 'DJ'
        | 'DM'
        | 'DO'
        | 'EC'
        | 'EG'
        | 'SV'
        | 'GQ'
        | 'ER'
        | 'EE'
        | 'ET'
        | 'FK'
        | 'FO'
        | 'FJ'
        | 'FI'
        | 'FR'
        | 'GF'
        | 'PF'
        | 'TF'
        | 'GA'
        | 'GM'
        | 'GE'
        | 'DE'
        | 'GH'
        | 'GI'
        | 'GR'
        | 'GL'
        | 'GD'
        | 'GP'
        | 'GU'
        | 'GT'
        | 'GN'
        | 'GW'
        | 'GY'
        | 'HT'
        | 'HM'
        | 'VA'
        | 'HN'
        | 'HK'
        | 'HU'
        | 'IS'
        | 'IN'
        | 'ID'
        | 'IR'
        | 'IQ'
        | 'IE'
        | 'IL'
        | 'IT'
        | 'JM'
        | 'JP'
        | 'JO'
        | 'KZ'
        | 'KE'
        | 'KI'
        | 'KP'
        | 'KR'
        | 'KW'
        | 'KG'
        | 'LA'
        | 'LV'
        | 'LB'
        | 'LS'
        | 'LR'
        | 'LY'
        | 'LI'
        | 'LT'
        | 'LU'
        | 'MO'
        | 'MG'
        | 'MW'
        | 'MY'
        | 'MV'
        | 'ML'
        | 'MT'
        | 'MH'
        | 'MQ'
        | 'MR'
        | 'MU'
        | 'YT'
        | 'MX'
        | 'FM'
        | 'MD'
        | 'MC'
        | 'MN'
        | 'MS'
        | 'MA'
        | 'MZ'
        | 'MM'
        | 'NA'
        | 'NR'
        | 'NP'
        | 'NL'
        | 'NC'
        | 'NZ'
        | 'NI'
        | 'NE'
        | 'NG'
        | 'NU'
        | 'NF'
        | 'MP'
        | 'MK'
        | 'NO'
        | 'OM'
        | 'PK'
        | 'PW'
        | 'PS'
        | 'PA'
        | 'PG'
        | 'PY'
        | 'PE'
        | 'PH'
        | 'PN'
        | 'PL'
        | 'PT'
        | 'PR'
        | 'QA'
        | 'RE'
        | 'RO'
        | 'RU'
        | 'RW'
        | 'SH'
        | 'KN'
        | 'LC'
        | 'PM'
        | 'VC'
        | 'WS'
        | 'SM'
        | 'ST'
        | 'SA'
        | 'SN'
        | 'SC'
        | 'SL'
        | 'SG'
        | 'SK'
        | 'SI'
        | 'SB'
        | 'SO'
        | 'ZA'
        | 'GS'
        | 'ES'
        | 'LK'
        | 'SD'
        | 'SR'
        | 'SJ'
        | 'SZ'
        | 'SE'
        | 'CH'
        | 'SY'
        | 'TW'
        | 'TJ'
        | 'TZ'
        | 'TH'
        | 'TL'
        | 'TG'
        | 'TK'
        | 'TO'
        | 'TT'
        | 'TN'
        | 'TR'
        | 'TM'
        | 'TC'
        | 'TV'
        | 'UG'
        | 'UA'
        | 'AE'
        | 'GB'
        | 'UM'
        | 'UY'
        | 'UZ'
        | 'VU'
        | 'VE'
        | 'VN'
        | 'VG'
        | 'VI'
        | 'WF'
        | 'EH'
        | 'YE'
        | 'ZM'
        | 'ZW'
        | 'AX'
        | 'BQ'
        | 'CW'
        | 'GG'
        | 'IM'
        | 'JE'
        | 'ME'
        | 'BL'
        | 'MF'
        | 'RS'
        | 'SX'
        | 'SS'
        | 'XK';

      /**
       * Postal or ZIP code.
       */
      postal_code: string;

      /**
       * Primary street address.
       */
      street_line_1: string;

      /**
       * Secondary street address (apartment, suite, etc.).
       */
      street_line_2: string | null;
    }

    export interface UsResidentialAddressResponse {
      /**
       * City name.
       */
      city: string;

      /**
       * ISO 3166-1 alpha-2 country code.
       */
      country: 'US';

      /**
       * Postal or ZIP code.
       */
      postal_code: string;

      /**
       * Two-letter state code.
       */
      state: string;

      /**
       * Primary street address.
       */
      street_line_1: string;

      /**
       * Secondary street address (apartment, suite, etc.).
       */
      street_line_2: string | null;
    }

    export interface NonUsResidentialAddressResponse {
      /**
       * City name.
       */
      city: string;

      /**
       * ISO 3166-1 alpha-2 country code.
       */
      country:
        | 'AF'
        | 'AL'
        | 'DZ'
        | 'AS'
        | 'AD'
        | 'AO'
        | 'AI'
        | 'AQ'
        | 'AG'
        | 'AR'
        | 'AM'
        | 'AW'
        | 'AU'
        | 'AT'
        | 'AZ'
        | 'BS'
        | 'BH'
        | 'BD'
        | 'BB'
        | 'BY'
        | 'BE'
        | 'BZ'
        | 'BJ'
        | 'BM'
        | 'BT'
        | 'BO'
        | 'BA'
        | 'BW'
        | 'BV'
        | 'BR'
        | 'IO'
        | 'BN'
        | 'BG'
        | 'BF'
        | 'BI'
        | 'KH'
        | 'CM'
        | 'CA'
        | 'CV'
        | 'KY'
        | 'CF'
        | 'TD'
        | 'CL'
        | 'CN'
        | 'CX'
        | 'CC'
        | 'CO'
        | 'KM'
        | 'CG'
        | 'CD'
        | 'CK'
        | 'CR'
        | 'CI'
        | 'HR'
        | 'CU'
        | 'CY'
        | 'CZ'
        | 'DK'
        | 'DJ'
        | 'DM'
        | 'DO'
        | 'EC'
        | 'EG'
        | 'SV'
        | 'GQ'
        | 'ER'
        | 'EE'
        | 'ET'
        | 'FK'
        | 'FO'
        | 'FJ'
        | 'FI'
        | 'FR'
        | 'GF'
        | 'PF'
        | 'TF'
        | 'GA'
        | 'GM'
        | 'GE'
        | 'DE'
        | 'GH'
        | 'GI'
        | 'GR'
        | 'GL'
        | 'GD'
        | 'GP'
        | 'GU'
        | 'GT'
        | 'GN'
        | 'GW'
        | 'GY'
        | 'HT'
        | 'HM'
        | 'VA'
        | 'HN'
        | 'HK'
        | 'HU'
        | 'IS'
        | 'IN'
        | 'ID'
        | 'IR'
        | 'IQ'
        | 'IE'
        | 'IL'
        | 'IT'
        | 'JM'
        | 'JP'
        | 'JO'
        | 'KZ'
        | 'KE'
        | 'KI'
        | 'KP'
        | 'KR'
        | 'KW'
        | 'KG'
        | 'LA'
        | 'LV'
        | 'LB'
        | 'LS'
        | 'LR'
        | 'LY'
        | 'LI'
        | 'LT'
        | 'LU'
        | 'MO'
        | 'MG'
        | 'MW'
        | 'MY'
        | 'MV'
        | 'ML'
        | 'MT'
        | 'MH'
        | 'MQ'
        | 'MR'
        | 'MU'
        | 'YT'
        | 'MX'
        | 'FM'
        | 'MD'
        | 'MC'
        | 'MN'
        | 'MS'
        | 'MA'
        | 'MZ'
        | 'MM'
        | 'NA'
        | 'NR'
        | 'NP'
        | 'NL'
        | 'NC'
        | 'NZ'
        | 'NI'
        | 'NE'
        | 'NG'
        | 'NU'
        | 'NF'
        | 'MP'
        | 'MK'
        | 'NO'
        | 'OM'
        | 'PK'
        | 'PW'
        | 'PS'
        | 'PA'
        | 'PG'
        | 'PY'
        | 'PE'
        | 'PH'
        | 'PN'
        | 'PL'
        | 'PT'
        | 'PR'
        | 'QA'
        | 'RE'
        | 'RO'
        | 'RU'
        | 'RW'
        | 'SH'
        | 'KN'
        | 'LC'
        | 'PM'
        | 'VC'
        | 'WS'
        | 'SM'
        | 'ST'
        | 'SA'
        | 'SN'
        | 'SC'
        | 'SL'
        | 'SG'
        | 'SK'
        | 'SI'
        | 'SB'
        | 'SO'
        | 'ZA'
        | 'GS'
        | 'ES'
        | 'LK'
        | 'SD'
        | 'SR'
        | 'SJ'
        | 'SZ'
        | 'SE'
        | 'CH'
        | 'SY'
        | 'TW'
        | 'TJ'
        | 'TZ'
        | 'TH'
        | 'TL'
        | 'TG'
        | 'TK'
        | 'TO'
        | 'TT'
        | 'TN'
        | 'TR'
        | 'TM'
        | 'TC'
        | 'TV'
        | 'UG'
        | 'UA'
        | 'AE'
        | 'GB'
        | 'UM'
        | 'UY'
        | 'UZ'
        | 'VU'
        | 'VE'
        | 'VN'
        | 'VG'
        | 'VI'
        | 'WF'
        | 'EH'
        | 'YE'
        | 'ZM'
        | 'ZW'
        | 'AX'
        | 'BQ'
        | 'CW'
        | 'GG'
        | 'IM'
        | 'JE'
        | 'ME'
        | 'BL'
        | 'MF'
        | 'RS'
        | 'SX'
        | 'SS'
        | 'XK';

      /**
       * Postal or ZIP code.
       */
      postal_code: string;

      /**
       * Primary street address.
       */
      street_line_1: string;

      /**
       * Secondary street address (apartment, suite, etc.).
       */
      street_line_2: string | null;
    }

    export interface EinIdentification {
      type: 'ein';

      value: string;
    }

    export interface SsnIdentification {
      type: 'ssn';

      value: string;
    }
  }
}

export interface AccountHolderListResponse {
  /**
   * Unique identifier of the account holder.
   */
  id: string;

  /**
   * Beneficiary details used to create this account holder.
   */
  beneficiary_data:
    | AccountHolderListResponse.UsBeneficiaryDataResponse
    | AccountHolderListResponse.NonUsBeneficiaryDataResponse
    | AccountHolderListResponse.BusinessBeneficiaryDataResponse;

  /**
   * ISO 8601 UTC timestamp when the account holder was created.
   */
  created_at: string;

  /**
   * Type of the account holder.
   */
  holder_type: 'natural_person' | 'business';

  /**
   * Current account holder status.
   */
  status: 'pending' | 'active' | 'closed';

  /**
   * Resource type discriminator.
   */
  type: 'account_holder';
}

export namespace AccountHolderListResponse {
  export interface UsBeneficiaryDataResponse {
    /**
     * ISO 3166-1 alpha-2 country code of citizenship.
     */
    country_of_citizenship: 'US';

    /**
     * Date of birth as an ISO 8601 calendar date (YYYY-MM-DD).
     */
    date_of_birth: string;

    /**
     * Government-issued identification with type: "ssn" (Social Security Number,
     * format ###-##-####) or "itin" (Individual Taxpayer ID, format 9##-##-####).
     */
    identification:
      | UsBeneficiaryDataResponse.SsnIdentification
      | UsBeneficiaryDataResponse.ItinIdentification;

    /**
     * Full legal name of the account holder.
     */
    legal_name: string;

    /**
     * Residential address of the account holder.
     */
    residential_address:
      | UsBeneficiaryDataResponse.UsResidentialAddressResponse
      | UsBeneficiaryDataResponse.NonUsResidentialAddressResponse;
  }

  export namespace UsBeneficiaryDataResponse {
    export interface SsnIdentification {
      type: 'ssn';

      value: string;
    }

    export interface ItinIdentification {
      type: 'itin';

      value: string;
    }

    export interface UsResidentialAddressResponse {
      /**
       * City name.
       */
      city: string;

      /**
       * ISO 3166-1 alpha-2 country code.
       */
      country: 'US';

      /**
       * Postal or ZIP code.
       */
      postal_code: string;

      /**
       * Two-letter state code.
       */
      state: string;

      /**
       * Primary street address.
       */
      street_line_1: string;

      /**
       * Secondary street address (apartment, suite, etc.).
       */
      street_line_2: string | null;
    }

    export interface NonUsResidentialAddressResponse {
      /**
       * City name.
       */
      city: string;

      /**
       * ISO 3166-1 alpha-2 country code.
       */
      country:
        | 'AF'
        | 'AL'
        | 'DZ'
        | 'AS'
        | 'AD'
        | 'AO'
        | 'AI'
        | 'AQ'
        | 'AG'
        | 'AR'
        | 'AM'
        | 'AW'
        | 'AU'
        | 'AT'
        | 'AZ'
        | 'BS'
        | 'BH'
        | 'BD'
        | 'BB'
        | 'BY'
        | 'BE'
        | 'BZ'
        | 'BJ'
        | 'BM'
        | 'BT'
        | 'BO'
        | 'BA'
        | 'BW'
        | 'BV'
        | 'BR'
        | 'IO'
        | 'BN'
        | 'BG'
        | 'BF'
        | 'BI'
        | 'KH'
        | 'CM'
        | 'CA'
        | 'CV'
        | 'KY'
        | 'CF'
        | 'TD'
        | 'CL'
        | 'CN'
        | 'CX'
        | 'CC'
        | 'CO'
        | 'KM'
        | 'CG'
        | 'CD'
        | 'CK'
        | 'CR'
        | 'CI'
        | 'HR'
        | 'CU'
        | 'CY'
        | 'CZ'
        | 'DK'
        | 'DJ'
        | 'DM'
        | 'DO'
        | 'EC'
        | 'EG'
        | 'SV'
        | 'GQ'
        | 'ER'
        | 'EE'
        | 'ET'
        | 'FK'
        | 'FO'
        | 'FJ'
        | 'FI'
        | 'FR'
        | 'GF'
        | 'PF'
        | 'TF'
        | 'GA'
        | 'GM'
        | 'GE'
        | 'DE'
        | 'GH'
        | 'GI'
        | 'GR'
        | 'GL'
        | 'GD'
        | 'GP'
        | 'GU'
        | 'GT'
        | 'GN'
        | 'GW'
        | 'GY'
        | 'HT'
        | 'HM'
        | 'VA'
        | 'HN'
        | 'HK'
        | 'HU'
        | 'IS'
        | 'IN'
        | 'ID'
        | 'IR'
        | 'IQ'
        | 'IE'
        | 'IL'
        | 'IT'
        | 'JM'
        | 'JP'
        | 'JO'
        | 'KZ'
        | 'KE'
        | 'KI'
        | 'KP'
        | 'KR'
        | 'KW'
        | 'KG'
        | 'LA'
        | 'LV'
        | 'LB'
        | 'LS'
        | 'LR'
        | 'LY'
        | 'LI'
        | 'LT'
        | 'LU'
        | 'MO'
        | 'MG'
        | 'MW'
        | 'MY'
        | 'MV'
        | 'ML'
        | 'MT'
        | 'MH'
        | 'MQ'
        | 'MR'
        | 'MU'
        | 'YT'
        | 'MX'
        | 'FM'
        | 'MD'
        | 'MC'
        | 'MN'
        | 'MS'
        | 'MA'
        | 'MZ'
        | 'MM'
        | 'NA'
        | 'NR'
        | 'NP'
        | 'NL'
        | 'NC'
        | 'NZ'
        | 'NI'
        | 'NE'
        | 'NG'
        | 'NU'
        | 'NF'
        | 'MP'
        | 'MK'
        | 'NO'
        | 'OM'
        | 'PK'
        | 'PW'
        | 'PS'
        | 'PA'
        | 'PG'
        | 'PY'
        | 'PE'
        | 'PH'
        | 'PN'
        | 'PL'
        | 'PT'
        | 'PR'
        | 'QA'
        | 'RE'
        | 'RO'
        | 'RU'
        | 'RW'
        | 'SH'
        | 'KN'
        | 'LC'
        | 'PM'
        | 'VC'
        | 'WS'
        | 'SM'
        | 'ST'
        | 'SA'
        | 'SN'
        | 'SC'
        | 'SL'
        | 'SG'
        | 'SK'
        | 'SI'
        | 'SB'
        | 'SO'
        | 'ZA'
        | 'GS'
        | 'ES'
        | 'LK'
        | 'SD'
        | 'SR'
        | 'SJ'
        | 'SZ'
        | 'SE'
        | 'CH'
        | 'SY'
        | 'TW'
        | 'TJ'
        | 'TZ'
        | 'TH'
        | 'TL'
        | 'TG'
        | 'TK'
        | 'TO'
        | 'TT'
        | 'TN'
        | 'TR'
        | 'TM'
        | 'TC'
        | 'TV'
        | 'UG'
        | 'UA'
        | 'AE'
        | 'GB'
        | 'UM'
        | 'UY'
        | 'UZ'
        | 'VU'
        | 'VE'
        | 'VN'
        | 'VG'
        | 'VI'
        | 'WF'
        | 'EH'
        | 'YE'
        | 'ZM'
        | 'ZW'
        | 'AX'
        | 'BQ'
        | 'CW'
        | 'GG'
        | 'IM'
        | 'JE'
        | 'ME'
        | 'BL'
        | 'MF'
        | 'RS'
        | 'SX'
        | 'SS'
        | 'XK';

      /**
       * Postal or ZIP code.
       */
      postal_code: string;

      /**
       * Primary street address.
       */
      street_line_1: string;

      /**
       * Secondary street address (apartment, suite, etc.).
       */
      street_line_2: string | null;
    }
  }

  export interface NonUsBeneficiaryDataResponse {
    /**
     * ISO 3166-1 alpha-2 country code of citizenship.
     */
    country_of_citizenship:
      | 'AF'
      | 'AL'
      | 'DZ'
      | 'AS'
      | 'AD'
      | 'AO'
      | 'AI'
      | 'AQ'
      | 'AG'
      | 'AR'
      | 'AM'
      | 'AW'
      | 'AU'
      | 'AT'
      | 'AZ'
      | 'BS'
      | 'BH'
      | 'BD'
      | 'BB'
      | 'BY'
      | 'BE'
      | 'BZ'
      | 'BJ'
      | 'BM'
      | 'BT'
      | 'BO'
      | 'BA'
      | 'BW'
      | 'BV'
      | 'BR'
      | 'IO'
      | 'BN'
      | 'BG'
      | 'BF'
      | 'BI'
      | 'KH'
      | 'CM'
      | 'CA'
      | 'CV'
      | 'KY'
      | 'CF'
      | 'TD'
      | 'CL'
      | 'CN'
      | 'CX'
      | 'CC'
      | 'CO'
      | 'KM'
      | 'CG'
      | 'CD'
      | 'CK'
      | 'CR'
      | 'CI'
      | 'HR'
      | 'CU'
      | 'CY'
      | 'CZ'
      | 'DK'
      | 'DJ'
      | 'DM'
      | 'DO'
      | 'EC'
      | 'EG'
      | 'SV'
      | 'GQ'
      | 'ER'
      | 'EE'
      | 'ET'
      | 'FK'
      | 'FO'
      | 'FJ'
      | 'FI'
      | 'FR'
      | 'GF'
      | 'PF'
      | 'TF'
      | 'GA'
      | 'GM'
      | 'GE'
      | 'DE'
      | 'GH'
      | 'GI'
      | 'GR'
      | 'GL'
      | 'GD'
      | 'GP'
      | 'GU'
      | 'GT'
      | 'GN'
      | 'GW'
      | 'GY'
      | 'HT'
      | 'HM'
      | 'VA'
      | 'HN'
      | 'HK'
      | 'HU'
      | 'IS'
      | 'IN'
      | 'ID'
      | 'IR'
      | 'IQ'
      | 'IE'
      | 'IL'
      | 'IT'
      | 'JM'
      | 'JP'
      | 'JO'
      | 'KZ'
      | 'KE'
      | 'KI'
      | 'KP'
      | 'KR'
      | 'KW'
      | 'KG'
      | 'LA'
      | 'LV'
      | 'LB'
      | 'LS'
      | 'LR'
      | 'LY'
      | 'LI'
      | 'LT'
      | 'LU'
      | 'MO'
      | 'MG'
      | 'MW'
      | 'MY'
      | 'MV'
      | 'ML'
      | 'MT'
      | 'MH'
      | 'MQ'
      | 'MR'
      | 'MU'
      | 'YT'
      | 'MX'
      | 'FM'
      | 'MD'
      | 'MC'
      | 'MN'
      | 'MS'
      | 'MA'
      | 'MZ'
      | 'MM'
      | 'NA'
      | 'NR'
      | 'NP'
      | 'NL'
      | 'NC'
      | 'NZ'
      | 'NI'
      | 'NE'
      | 'NG'
      | 'NU'
      | 'NF'
      | 'MP'
      | 'MK'
      | 'NO'
      | 'OM'
      | 'PK'
      | 'PW'
      | 'PS'
      | 'PA'
      | 'PG'
      | 'PY'
      | 'PE'
      | 'PH'
      | 'PN'
      | 'PL'
      | 'PT'
      | 'PR'
      | 'QA'
      | 'RE'
      | 'RO'
      | 'RU'
      | 'RW'
      | 'SH'
      | 'KN'
      | 'LC'
      | 'PM'
      | 'VC'
      | 'WS'
      | 'SM'
      | 'ST'
      | 'SA'
      | 'SN'
      | 'SC'
      | 'SL'
      | 'SG'
      | 'SK'
      | 'SI'
      | 'SB'
      | 'SO'
      | 'ZA'
      | 'GS'
      | 'ES'
      | 'LK'
      | 'SD'
      | 'SR'
      | 'SJ'
      | 'SZ'
      | 'SE'
      | 'CH'
      | 'SY'
      | 'TW'
      | 'TJ'
      | 'TZ'
      | 'TH'
      | 'TL'
      | 'TG'
      | 'TK'
      | 'TO'
      | 'TT'
      | 'TN'
      | 'TR'
      | 'TM'
      | 'TC'
      | 'TV'
      | 'UG'
      | 'UA'
      | 'AE'
      | 'GB'
      | 'UM'
      | 'UY'
      | 'UZ'
      | 'VU'
      | 'VE'
      | 'VN'
      | 'VG'
      | 'VI'
      | 'WF'
      | 'EH'
      | 'YE'
      | 'ZM'
      | 'ZW'
      | 'AX'
      | 'BQ'
      | 'CW'
      | 'GG'
      | 'IM'
      | 'JE'
      | 'ME'
      | 'BL'
      | 'MF'
      | 'RS'
      | 'SX'
      | 'SS'
      | 'XK';

    /**
     * Date of birth as an ISO 8601 calendar date (YYYY-MM-DD).
     */
    date_of_birth: string;

    /**
     * Government-issued identification with type: "id" (generic government-issued ID).
     */
    identification: NonUsBeneficiaryDataResponse.Identification;

    /**
     * Full legal name of the account holder.
     */
    legal_name: string;

    /**
     * Residential address of the account holder.
     */
    residential_address:
      | NonUsBeneficiaryDataResponse.UsResidentialAddressResponse
      | NonUsBeneficiaryDataResponse.NonUsResidentialAddressResponse;
  }

  export namespace NonUsBeneficiaryDataResponse {
    /**
     * Government-issued identification with type: "id" (generic government-issued ID).
     */
    export interface Identification {
      type: 'id';

      value: string;
    }

    export interface UsResidentialAddressResponse {
      /**
       * City name.
       */
      city: string;

      /**
       * ISO 3166-1 alpha-2 country code.
       */
      country: 'US';

      /**
       * Postal or ZIP code.
       */
      postal_code: string;

      /**
       * Two-letter state code.
       */
      state: string;

      /**
       * Primary street address.
       */
      street_line_1: string;

      /**
       * Secondary street address (apartment, suite, etc.).
       */
      street_line_2: string | null;
    }

    export interface NonUsResidentialAddressResponse {
      /**
       * City name.
       */
      city: string;

      /**
       * ISO 3166-1 alpha-2 country code.
       */
      country:
        | 'AF'
        | 'AL'
        | 'DZ'
        | 'AS'
        | 'AD'
        | 'AO'
        | 'AI'
        | 'AQ'
        | 'AG'
        | 'AR'
        | 'AM'
        | 'AW'
        | 'AU'
        | 'AT'
        | 'AZ'
        | 'BS'
        | 'BH'
        | 'BD'
        | 'BB'
        | 'BY'
        | 'BE'
        | 'BZ'
        | 'BJ'
        | 'BM'
        | 'BT'
        | 'BO'
        | 'BA'
        | 'BW'
        | 'BV'
        | 'BR'
        | 'IO'
        | 'BN'
        | 'BG'
        | 'BF'
        | 'BI'
        | 'KH'
        | 'CM'
        | 'CA'
        | 'CV'
        | 'KY'
        | 'CF'
        | 'TD'
        | 'CL'
        | 'CN'
        | 'CX'
        | 'CC'
        | 'CO'
        | 'KM'
        | 'CG'
        | 'CD'
        | 'CK'
        | 'CR'
        | 'CI'
        | 'HR'
        | 'CU'
        | 'CY'
        | 'CZ'
        | 'DK'
        | 'DJ'
        | 'DM'
        | 'DO'
        | 'EC'
        | 'EG'
        | 'SV'
        | 'GQ'
        | 'ER'
        | 'EE'
        | 'ET'
        | 'FK'
        | 'FO'
        | 'FJ'
        | 'FI'
        | 'FR'
        | 'GF'
        | 'PF'
        | 'TF'
        | 'GA'
        | 'GM'
        | 'GE'
        | 'DE'
        | 'GH'
        | 'GI'
        | 'GR'
        | 'GL'
        | 'GD'
        | 'GP'
        | 'GU'
        | 'GT'
        | 'GN'
        | 'GW'
        | 'GY'
        | 'HT'
        | 'HM'
        | 'VA'
        | 'HN'
        | 'HK'
        | 'HU'
        | 'IS'
        | 'IN'
        | 'ID'
        | 'IR'
        | 'IQ'
        | 'IE'
        | 'IL'
        | 'IT'
        | 'JM'
        | 'JP'
        | 'JO'
        | 'KZ'
        | 'KE'
        | 'KI'
        | 'KP'
        | 'KR'
        | 'KW'
        | 'KG'
        | 'LA'
        | 'LV'
        | 'LB'
        | 'LS'
        | 'LR'
        | 'LY'
        | 'LI'
        | 'LT'
        | 'LU'
        | 'MO'
        | 'MG'
        | 'MW'
        | 'MY'
        | 'MV'
        | 'ML'
        | 'MT'
        | 'MH'
        | 'MQ'
        | 'MR'
        | 'MU'
        | 'YT'
        | 'MX'
        | 'FM'
        | 'MD'
        | 'MC'
        | 'MN'
        | 'MS'
        | 'MA'
        | 'MZ'
        | 'MM'
        | 'NA'
        | 'NR'
        | 'NP'
        | 'NL'
        | 'NC'
        | 'NZ'
        | 'NI'
        | 'NE'
        | 'NG'
        | 'NU'
        | 'NF'
        | 'MP'
        | 'MK'
        | 'NO'
        | 'OM'
        | 'PK'
        | 'PW'
        | 'PS'
        | 'PA'
        | 'PG'
        | 'PY'
        | 'PE'
        | 'PH'
        | 'PN'
        | 'PL'
        | 'PT'
        | 'PR'
        | 'QA'
        | 'RE'
        | 'RO'
        | 'RU'
        | 'RW'
        | 'SH'
        | 'KN'
        | 'LC'
        | 'PM'
        | 'VC'
        | 'WS'
        | 'SM'
        | 'ST'
        | 'SA'
        | 'SN'
        | 'SC'
        | 'SL'
        | 'SG'
        | 'SK'
        | 'SI'
        | 'SB'
        | 'SO'
        | 'ZA'
        | 'GS'
        | 'ES'
        | 'LK'
        | 'SD'
        | 'SR'
        | 'SJ'
        | 'SZ'
        | 'SE'
        | 'CH'
        | 'SY'
        | 'TW'
        | 'TJ'
        | 'TZ'
        | 'TH'
        | 'TL'
        | 'TG'
        | 'TK'
        | 'TO'
        | 'TT'
        | 'TN'
        | 'TR'
        | 'TM'
        | 'TC'
        | 'TV'
        | 'UG'
        | 'UA'
        | 'AE'
        | 'GB'
        | 'UM'
        | 'UY'
        | 'UZ'
        | 'VU'
        | 'VE'
        | 'VN'
        | 'VG'
        | 'VI'
        | 'WF'
        | 'EH'
        | 'YE'
        | 'ZM'
        | 'ZW'
        | 'AX'
        | 'BQ'
        | 'CW'
        | 'GG'
        | 'IM'
        | 'JE'
        | 'ME'
        | 'BL'
        | 'MF'
        | 'RS'
        | 'SX'
        | 'SS'
        | 'XK';

      /**
       * Postal or ZIP code.
       */
      postal_code: string;

      /**
       * Primary street address.
       */
      street_line_1: string;

      /**
       * Secondary street address (apartment, suite, etc.).
       */
      street_line_2: string | null;
    }
  }

  export interface BusinessBeneficiaryDataResponse {
    /**
     * Beneficial owners of the business. At least one required.
     */
    beneficial_owners: Array<
      | BusinessBeneficiaryDataResponse.UsBeneficiaryDataResponse
      | BusinessBeneficiaryDataResponse.NonUsBeneficiaryDataResponse
    >;

    /**
     * Individual with primary responsibility for controlling, managing, or directing
     * the business.
     */
    control_person:
      | BusinessBeneficiaryDataResponse.UnionMember0
      | BusinessBeneficiaryDataResponse.UnionMember1;

    /**
     * ISO 3166-1 alpha-2 country code where the business is incorporated.
     */
    country_of_incorporation:
      | 'AF'
      | 'AL'
      | 'DZ'
      | 'AS'
      | 'AD'
      | 'AO'
      | 'AI'
      | 'AQ'
      | 'AG'
      | 'AR'
      | 'AM'
      | 'AW'
      | 'AU'
      | 'AT'
      | 'AZ'
      | 'BS'
      | 'BH'
      | 'BD'
      | 'BB'
      | 'BY'
      | 'BE'
      | 'BZ'
      | 'BJ'
      | 'BM'
      | 'BT'
      | 'BO'
      | 'BA'
      | 'BW'
      | 'BV'
      | 'BR'
      | 'IO'
      | 'BN'
      | 'BG'
      | 'BF'
      | 'BI'
      | 'KH'
      | 'CM'
      | 'CA'
      | 'CV'
      | 'KY'
      | 'CF'
      | 'TD'
      | 'CL'
      | 'CN'
      | 'CX'
      | 'CC'
      | 'CO'
      | 'KM'
      | 'CG'
      | 'CD'
      | 'CK'
      | 'CR'
      | 'CI'
      | 'HR'
      | 'CU'
      | 'CY'
      | 'CZ'
      | 'DK'
      | 'DJ'
      | 'DM'
      | 'DO'
      | 'EC'
      | 'EG'
      | 'SV'
      | 'GQ'
      | 'ER'
      | 'EE'
      | 'ET'
      | 'FK'
      | 'FO'
      | 'FJ'
      | 'FI'
      | 'FR'
      | 'GF'
      | 'PF'
      | 'TF'
      | 'GA'
      | 'GM'
      | 'GE'
      | 'DE'
      | 'GH'
      | 'GI'
      | 'GR'
      | 'GL'
      | 'GD'
      | 'GP'
      | 'GU'
      | 'GT'
      | 'GN'
      | 'GW'
      | 'GY'
      | 'HT'
      | 'HM'
      | 'VA'
      | 'HN'
      | 'HK'
      | 'HU'
      | 'IS'
      | 'IN'
      | 'ID'
      | 'IR'
      | 'IQ'
      | 'IE'
      | 'IL'
      | 'IT'
      | 'JM'
      | 'JP'
      | 'JO'
      | 'KZ'
      | 'KE'
      | 'KI'
      | 'KP'
      | 'KR'
      | 'KW'
      | 'KG'
      | 'LA'
      | 'LV'
      | 'LB'
      | 'LS'
      | 'LR'
      | 'LY'
      | 'LI'
      | 'LT'
      | 'LU'
      | 'MO'
      | 'MG'
      | 'MW'
      | 'MY'
      | 'MV'
      | 'ML'
      | 'MT'
      | 'MH'
      | 'MQ'
      | 'MR'
      | 'MU'
      | 'YT'
      | 'MX'
      | 'FM'
      | 'MD'
      | 'MC'
      | 'MN'
      | 'MS'
      | 'MA'
      | 'MZ'
      | 'MM'
      | 'NA'
      | 'NR'
      | 'NP'
      | 'NL'
      | 'NC'
      | 'NZ'
      | 'NI'
      | 'NE'
      | 'NG'
      | 'NU'
      | 'NF'
      | 'MP'
      | 'MK'
      | 'NO'
      | 'OM'
      | 'PK'
      | 'PW'
      | 'PS'
      | 'PA'
      | 'PG'
      | 'PY'
      | 'PE'
      | 'PH'
      | 'PN'
      | 'PL'
      | 'PT'
      | 'PR'
      | 'QA'
      | 'RE'
      | 'RO'
      | 'RU'
      | 'RW'
      | 'SH'
      | 'KN'
      | 'LC'
      | 'PM'
      | 'VC'
      | 'WS'
      | 'SM'
      | 'ST'
      | 'SA'
      | 'SN'
      | 'SC'
      | 'SL'
      | 'SG'
      | 'SK'
      | 'SI'
      | 'SB'
      | 'SO'
      | 'ZA'
      | 'GS'
      | 'ES'
      | 'LK'
      | 'SD'
      | 'SR'
      | 'SJ'
      | 'SZ'
      | 'SE'
      | 'CH'
      | 'SY'
      | 'TW'
      | 'TJ'
      | 'TZ'
      | 'TH'
      | 'TL'
      | 'TG'
      | 'TK'
      | 'TO'
      | 'TT'
      | 'TN'
      | 'TR'
      | 'TM'
      | 'TC'
      | 'TV'
      | 'UG'
      | 'UA'
      | 'AE'
      | 'GB'
      | 'US'
      | 'UM'
      | 'UY'
      | 'UZ'
      | 'VU'
      | 'VE'
      | 'VN'
      | 'VG'
      | 'VI'
      | 'WF'
      | 'EH'
      | 'YE'
      | 'ZM'
      | 'ZW'
      | 'AX'
      | 'BQ'
      | 'CW'
      | 'GG'
      | 'IM'
      | 'JE'
      | 'ME'
      | 'BL'
      | 'MF'
      | 'RS'
      | 'SX'
      | 'SS'
      | 'XK';

    /**
     * Trade name the business operates under, if different from the legal name.
     */
    doing_business_as: string | null;

    /**
     * Full legal name of the business.
     */
    legal_business_name: string;

    /**
     * Physical operating address of the business.
     */
    physical_address:
      | BusinessBeneficiaryDataResponse.UsResidentialAddressResponse
      | BusinessBeneficiaryDataResponse.NonUsResidentialAddressResponse;

    /**
     * Registered legal address of the business.
     */
    registered_address:
      | BusinessBeneficiaryDataResponse.UsResidentialAddressResponse
      | BusinessBeneficiaryDataResponse.NonUsResidentialAddressResponse;

    /**
     * Business registration number: type "ein" (Employer Identification Number, format
     * ##-#######) or "ssn" (Social Security Number, format ###-##-####).
     */
    registration_number:
      | BusinessBeneficiaryDataResponse.EinIdentification
      | BusinessBeneficiaryDataResponse.SsnIdentification;

    /**
     * State or subdivision where the business is incorporated.
     */
    state_of_incorporation: string;

    /**
     * Four-digit year the business was incorporated.
     */
    year_of_incorporation: number;
  }

  export namespace BusinessBeneficiaryDataResponse {
    export interface UsBeneficiaryDataResponse {
      /**
       * ISO 3166-1 alpha-2 country code of citizenship.
       */
      country_of_citizenship: 'US';

      /**
       * Date of birth as an ISO 8601 calendar date (YYYY-MM-DD).
       */
      date_of_birth: string;

      /**
       * Government-issued identification with type: "ssn" (Social Security Number,
       * format ###-##-####) or "itin" (Individual Taxpayer ID, format 9##-##-####).
       */
      identification:
        | UsBeneficiaryDataResponse.SsnIdentification
        | UsBeneficiaryDataResponse.ItinIdentification;

      /**
       * Full legal name of the account holder.
       */
      legal_name: string;

      /**
       * Residential address of the account holder.
       */
      residential_address:
        | UsBeneficiaryDataResponse.UsResidentialAddressResponse
        | UsBeneficiaryDataResponse.NonUsResidentialAddressResponse;
    }

    export namespace UsBeneficiaryDataResponse {
      export interface SsnIdentification {
        type: 'ssn';

        value: string;
      }

      export interface ItinIdentification {
        type: 'itin';

        value: string;
      }

      export interface UsResidentialAddressResponse {
        /**
         * City name.
         */
        city: string;

        /**
         * ISO 3166-1 alpha-2 country code.
         */
        country: 'US';

        /**
         * Postal or ZIP code.
         */
        postal_code: string;

        /**
         * Two-letter state code.
         */
        state: string;

        /**
         * Primary street address.
         */
        street_line_1: string;

        /**
         * Secondary street address (apartment, suite, etc.).
         */
        street_line_2: string | null;
      }

      export interface NonUsResidentialAddressResponse {
        /**
         * City name.
         */
        city: string;

        /**
         * ISO 3166-1 alpha-2 country code.
         */
        country:
          | 'AF'
          | 'AL'
          | 'DZ'
          | 'AS'
          | 'AD'
          | 'AO'
          | 'AI'
          | 'AQ'
          | 'AG'
          | 'AR'
          | 'AM'
          | 'AW'
          | 'AU'
          | 'AT'
          | 'AZ'
          | 'BS'
          | 'BH'
          | 'BD'
          | 'BB'
          | 'BY'
          | 'BE'
          | 'BZ'
          | 'BJ'
          | 'BM'
          | 'BT'
          | 'BO'
          | 'BA'
          | 'BW'
          | 'BV'
          | 'BR'
          | 'IO'
          | 'BN'
          | 'BG'
          | 'BF'
          | 'BI'
          | 'KH'
          | 'CM'
          | 'CA'
          | 'CV'
          | 'KY'
          | 'CF'
          | 'TD'
          | 'CL'
          | 'CN'
          | 'CX'
          | 'CC'
          | 'CO'
          | 'KM'
          | 'CG'
          | 'CD'
          | 'CK'
          | 'CR'
          | 'CI'
          | 'HR'
          | 'CU'
          | 'CY'
          | 'CZ'
          | 'DK'
          | 'DJ'
          | 'DM'
          | 'DO'
          | 'EC'
          | 'EG'
          | 'SV'
          | 'GQ'
          | 'ER'
          | 'EE'
          | 'ET'
          | 'FK'
          | 'FO'
          | 'FJ'
          | 'FI'
          | 'FR'
          | 'GF'
          | 'PF'
          | 'TF'
          | 'GA'
          | 'GM'
          | 'GE'
          | 'DE'
          | 'GH'
          | 'GI'
          | 'GR'
          | 'GL'
          | 'GD'
          | 'GP'
          | 'GU'
          | 'GT'
          | 'GN'
          | 'GW'
          | 'GY'
          | 'HT'
          | 'HM'
          | 'VA'
          | 'HN'
          | 'HK'
          | 'HU'
          | 'IS'
          | 'IN'
          | 'ID'
          | 'IR'
          | 'IQ'
          | 'IE'
          | 'IL'
          | 'IT'
          | 'JM'
          | 'JP'
          | 'JO'
          | 'KZ'
          | 'KE'
          | 'KI'
          | 'KP'
          | 'KR'
          | 'KW'
          | 'KG'
          | 'LA'
          | 'LV'
          | 'LB'
          | 'LS'
          | 'LR'
          | 'LY'
          | 'LI'
          | 'LT'
          | 'LU'
          | 'MO'
          | 'MG'
          | 'MW'
          | 'MY'
          | 'MV'
          | 'ML'
          | 'MT'
          | 'MH'
          | 'MQ'
          | 'MR'
          | 'MU'
          | 'YT'
          | 'MX'
          | 'FM'
          | 'MD'
          | 'MC'
          | 'MN'
          | 'MS'
          | 'MA'
          | 'MZ'
          | 'MM'
          | 'NA'
          | 'NR'
          | 'NP'
          | 'NL'
          | 'NC'
          | 'NZ'
          | 'NI'
          | 'NE'
          | 'NG'
          | 'NU'
          | 'NF'
          | 'MP'
          | 'MK'
          | 'NO'
          | 'OM'
          | 'PK'
          | 'PW'
          | 'PS'
          | 'PA'
          | 'PG'
          | 'PY'
          | 'PE'
          | 'PH'
          | 'PN'
          | 'PL'
          | 'PT'
          | 'PR'
          | 'QA'
          | 'RE'
          | 'RO'
          | 'RU'
          | 'RW'
          | 'SH'
          | 'KN'
          | 'LC'
          | 'PM'
          | 'VC'
          | 'WS'
          | 'SM'
          | 'ST'
          | 'SA'
          | 'SN'
          | 'SC'
          | 'SL'
          | 'SG'
          | 'SK'
          | 'SI'
          | 'SB'
          | 'SO'
          | 'ZA'
          | 'GS'
          | 'ES'
          | 'LK'
          | 'SD'
          | 'SR'
          | 'SJ'
          | 'SZ'
          | 'SE'
          | 'CH'
          | 'SY'
          | 'TW'
          | 'TJ'
          | 'TZ'
          | 'TH'
          | 'TL'
          | 'TG'
          | 'TK'
          | 'TO'
          | 'TT'
          | 'TN'
          | 'TR'
          | 'TM'
          | 'TC'
          | 'TV'
          | 'UG'
          | 'UA'
          | 'AE'
          | 'GB'
          | 'UM'
          | 'UY'
          | 'UZ'
          | 'VU'
          | 'VE'
          | 'VN'
          | 'VG'
          | 'VI'
          | 'WF'
          | 'EH'
          | 'YE'
          | 'ZM'
          | 'ZW'
          | 'AX'
          | 'BQ'
          | 'CW'
          | 'GG'
          | 'IM'
          | 'JE'
          | 'ME'
          | 'BL'
          | 'MF'
          | 'RS'
          | 'SX'
          | 'SS'
          | 'XK';

        /**
         * Postal or ZIP code.
         */
        postal_code: string;

        /**
         * Primary street address.
         */
        street_line_1: string;

        /**
         * Secondary street address (apartment, suite, etc.).
         */
        street_line_2: string | null;
      }
    }

    export interface NonUsBeneficiaryDataResponse {
      /**
       * ISO 3166-1 alpha-2 country code of citizenship.
       */
      country_of_citizenship:
        | 'AF'
        | 'AL'
        | 'DZ'
        | 'AS'
        | 'AD'
        | 'AO'
        | 'AI'
        | 'AQ'
        | 'AG'
        | 'AR'
        | 'AM'
        | 'AW'
        | 'AU'
        | 'AT'
        | 'AZ'
        | 'BS'
        | 'BH'
        | 'BD'
        | 'BB'
        | 'BY'
        | 'BE'
        | 'BZ'
        | 'BJ'
        | 'BM'
        | 'BT'
        | 'BO'
        | 'BA'
        | 'BW'
        | 'BV'
        | 'BR'
        | 'IO'
        | 'BN'
        | 'BG'
        | 'BF'
        | 'BI'
        | 'KH'
        | 'CM'
        | 'CA'
        | 'CV'
        | 'KY'
        | 'CF'
        | 'TD'
        | 'CL'
        | 'CN'
        | 'CX'
        | 'CC'
        | 'CO'
        | 'KM'
        | 'CG'
        | 'CD'
        | 'CK'
        | 'CR'
        | 'CI'
        | 'HR'
        | 'CU'
        | 'CY'
        | 'CZ'
        | 'DK'
        | 'DJ'
        | 'DM'
        | 'DO'
        | 'EC'
        | 'EG'
        | 'SV'
        | 'GQ'
        | 'ER'
        | 'EE'
        | 'ET'
        | 'FK'
        | 'FO'
        | 'FJ'
        | 'FI'
        | 'FR'
        | 'GF'
        | 'PF'
        | 'TF'
        | 'GA'
        | 'GM'
        | 'GE'
        | 'DE'
        | 'GH'
        | 'GI'
        | 'GR'
        | 'GL'
        | 'GD'
        | 'GP'
        | 'GU'
        | 'GT'
        | 'GN'
        | 'GW'
        | 'GY'
        | 'HT'
        | 'HM'
        | 'VA'
        | 'HN'
        | 'HK'
        | 'HU'
        | 'IS'
        | 'IN'
        | 'ID'
        | 'IR'
        | 'IQ'
        | 'IE'
        | 'IL'
        | 'IT'
        | 'JM'
        | 'JP'
        | 'JO'
        | 'KZ'
        | 'KE'
        | 'KI'
        | 'KP'
        | 'KR'
        | 'KW'
        | 'KG'
        | 'LA'
        | 'LV'
        | 'LB'
        | 'LS'
        | 'LR'
        | 'LY'
        | 'LI'
        | 'LT'
        | 'LU'
        | 'MO'
        | 'MG'
        | 'MW'
        | 'MY'
        | 'MV'
        | 'ML'
        | 'MT'
        | 'MH'
        | 'MQ'
        | 'MR'
        | 'MU'
        | 'YT'
        | 'MX'
        | 'FM'
        | 'MD'
        | 'MC'
        | 'MN'
        | 'MS'
        | 'MA'
        | 'MZ'
        | 'MM'
        | 'NA'
        | 'NR'
        | 'NP'
        | 'NL'
        | 'NC'
        | 'NZ'
        | 'NI'
        | 'NE'
        | 'NG'
        | 'NU'
        | 'NF'
        | 'MP'
        | 'MK'
        | 'NO'
        | 'OM'
        | 'PK'
        | 'PW'
        | 'PS'
        | 'PA'
        | 'PG'
        | 'PY'
        | 'PE'
        | 'PH'
        | 'PN'
        | 'PL'
        | 'PT'
        | 'PR'
        | 'QA'
        | 'RE'
        | 'RO'
        | 'RU'
        | 'RW'
        | 'SH'
        | 'KN'
        | 'LC'
        | 'PM'
        | 'VC'
        | 'WS'
        | 'SM'
        | 'ST'
        | 'SA'
        | 'SN'
        | 'SC'
        | 'SL'
        | 'SG'
        | 'SK'
        | 'SI'
        | 'SB'
        | 'SO'
        | 'ZA'
        | 'GS'
        | 'ES'
        | 'LK'
        | 'SD'
        | 'SR'
        | 'SJ'
        | 'SZ'
        | 'SE'
        | 'CH'
        | 'SY'
        | 'TW'
        | 'TJ'
        | 'TZ'
        | 'TH'
        | 'TL'
        | 'TG'
        | 'TK'
        | 'TO'
        | 'TT'
        | 'TN'
        | 'TR'
        | 'TM'
        | 'TC'
        | 'TV'
        | 'UG'
        | 'UA'
        | 'AE'
        | 'GB'
        | 'UM'
        | 'UY'
        | 'UZ'
        | 'VU'
        | 'VE'
        | 'VN'
        | 'VG'
        | 'VI'
        | 'WF'
        | 'EH'
        | 'YE'
        | 'ZM'
        | 'ZW'
        | 'AX'
        | 'BQ'
        | 'CW'
        | 'GG'
        | 'IM'
        | 'JE'
        | 'ME'
        | 'BL'
        | 'MF'
        | 'RS'
        | 'SX'
        | 'SS'
        | 'XK';

      /**
       * Date of birth as an ISO 8601 calendar date (YYYY-MM-DD).
       */
      date_of_birth: string;

      /**
       * Government-issued identification with type: "id" (generic government-issued ID).
       */
      identification: NonUsBeneficiaryDataResponse.Identification;

      /**
       * Full legal name of the account holder.
       */
      legal_name: string;

      /**
       * Residential address of the account holder.
       */
      residential_address:
        | NonUsBeneficiaryDataResponse.UsResidentialAddressResponse
        | NonUsBeneficiaryDataResponse.NonUsResidentialAddressResponse;
    }

    export namespace NonUsBeneficiaryDataResponse {
      /**
       * Government-issued identification with type: "id" (generic government-issued ID).
       */
      export interface Identification {
        type: 'id';

        value: string;
      }

      export interface UsResidentialAddressResponse {
        /**
         * City name.
         */
        city: string;

        /**
         * ISO 3166-1 alpha-2 country code.
         */
        country: 'US';

        /**
         * Postal or ZIP code.
         */
        postal_code: string;

        /**
         * Two-letter state code.
         */
        state: string;

        /**
         * Primary street address.
         */
        street_line_1: string;

        /**
         * Secondary street address (apartment, suite, etc.).
         */
        street_line_2: string | null;
      }

      export interface NonUsResidentialAddressResponse {
        /**
         * City name.
         */
        city: string;

        /**
         * ISO 3166-1 alpha-2 country code.
         */
        country:
          | 'AF'
          | 'AL'
          | 'DZ'
          | 'AS'
          | 'AD'
          | 'AO'
          | 'AI'
          | 'AQ'
          | 'AG'
          | 'AR'
          | 'AM'
          | 'AW'
          | 'AU'
          | 'AT'
          | 'AZ'
          | 'BS'
          | 'BH'
          | 'BD'
          | 'BB'
          | 'BY'
          | 'BE'
          | 'BZ'
          | 'BJ'
          | 'BM'
          | 'BT'
          | 'BO'
          | 'BA'
          | 'BW'
          | 'BV'
          | 'BR'
          | 'IO'
          | 'BN'
          | 'BG'
          | 'BF'
          | 'BI'
          | 'KH'
          | 'CM'
          | 'CA'
          | 'CV'
          | 'KY'
          | 'CF'
          | 'TD'
          | 'CL'
          | 'CN'
          | 'CX'
          | 'CC'
          | 'CO'
          | 'KM'
          | 'CG'
          | 'CD'
          | 'CK'
          | 'CR'
          | 'CI'
          | 'HR'
          | 'CU'
          | 'CY'
          | 'CZ'
          | 'DK'
          | 'DJ'
          | 'DM'
          | 'DO'
          | 'EC'
          | 'EG'
          | 'SV'
          | 'GQ'
          | 'ER'
          | 'EE'
          | 'ET'
          | 'FK'
          | 'FO'
          | 'FJ'
          | 'FI'
          | 'FR'
          | 'GF'
          | 'PF'
          | 'TF'
          | 'GA'
          | 'GM'
          | 'GE'
          | 'DE'
          | 'GH'
          | 'GI'
          | 'GR'
          | 'GL'
          | 'GD'
          | 'GP'
          | 'GU'
          | 'GT'
          | 'GN'
          | 'GW'
          | 'GY'
          | 'HT'
          | 'HM'
          | 'VA'
          | 'HN'
          | 'HK'
          | 'HU'
          | 'IS'
          | 'IN'
          | 'ID'
          | 'IR'
          | 'IQ'
          | 'IE'
          | 'IL'
          | 'IT'
          | 'JM'
          | 'JP'
          | 'JO'
          | 'KZ'
          | 'KE'
          | 'KI'
          | 'KP'
          | 'KR'
          | 'KW'
          | 'KG'
          | 'LA'
          | 'LV'
          | 'LB'
          | 'LS'
          | 'LR'
          | 'LY'
          | 'LI'
          | 'LT'
          | 'LU'
          | 'MO'
          | 'MG'
          | 'MW'
          | 'MY'
          | 'MV'
          | 'ML'
          | 'MT'
          | 'MH'
          | 'MQ'
          | 'MR'
          | 'MU'
          | 'YT'
          | 'MX'
          | 'FM'
          | 'MD'
          | 'MC'
          | 'MN'
          | 'MS'
          | 'MA'
          | 'MZ'
          | 'MM'
          | 'NA'
          | 'NR'
          | 'NP'
          | 'NL'
          | 'NC'
          | 'NZ'
          | 'NI'
          | 'NE'
          | 'NG'
          | 'NU'
          | 'NF'
          | 'MP'
          | 'MK'
          | 'NO'
          | 'OM'
          | 'PK'
          | 'PW'
          | 'PS'
          | 'PA'
          | 'PG'
          | 'PY'
          | 'PE'
          | 'PH'
          | 'PN'
          | 'PL'
          | 'PT'
          | 'PR'
          | 'QA'
          | 'RE'
          | 'RO'
          | 'RU'
          | 'RW'
          | 'SH'
          | 'KN'
          | 'LC'
          | 'PM'
          | 'VC'
          | 'WS'
          | 'SM'
          | 'ST'
          | 'SA'
          | 'SN'
          | 'SC'
          | 'SL'
          | 'SG'
          | 'SK'
          | 'SI'
          | 'SB'
          | 'SO'
          | 'ZA'
          | 'GS'
          | 'ES'
          | 'LK'
          | 'SD'
          | 'SR'
          | 'SJ'
          | 'SZ'
          | 'SE'
          | 'CH'
          | 'SY'
          | 'TW'
          | 'TJ'
          | 'TZ'
          | 'TH'
          | 'TL'
          | 'TG'
          | 'TK'
          | 'TO'
          | 'TT'
          | 'TN'
          | 'TR'
          | 'TM'
          | 'TC'
          | 'TV'
          | 'UG'
          | 'UA'
          | 'AE'
          | 'GB'
          | 'UM'
          | 'UY'
          | 'UZ'
          | 'VU'
          | 'VE'
          | 'VN'
          | 'VG'
          | 'VI'
          | 'WF'
          | 'EH'
          | 'YE'
          | 'ZM'
          | 'ZW'
          | 'AX'
          | 'BQ'
          | 'CW'
          | 'GG'
          | 'IM'
          | 'JE'
          | 'ME'
          | 'BL'
          | 'MF'
          | 'RS'
          | 'SX'
          | 'SS'
          | 'XK';

        /**
         * Postal or ZIP code.
         */
        postal_code: string;

        /**
         * Primary street address.
         */
        street_line_1: string;

        /**
         * Secondary street address (apartment, suite, etc.).
         */
        street_line_2: string | null;
      }
    }

    export interface UnionMember0 {
      /**
       * ISO 3166-1 alpha-2 country code of citizenship.
       */
      country_of_citizenship: 'US';

      /**
       * Date of birth as an ISO 8601 calendar date (YYYY-MM-DD).
       */
      date_of_birth: string;

      /**
       * Government-issued identification with type: "ssn" (Social Security Number,
       * format ###-##-####) or "itin" (Individual Taxpayer ID, format 9##-##-####).
       */
      identification: UnionMember0.SsnIdentification | UnionMember0.ItinIdentification;

      /**
       * Full legal name of the account holder.
       */
      legal_name: string;

      /**
       * Residential address of the account holder.
       */
      residential_address:
        | UnionMember0.UsResidentialAddressResponse
        | UnionMember0.NonUsResidentialAddressResponse;

      /**
       * Role of the control person at the business (e.g., "CEO", "President", "Managing
       * Director").
       */
      title: string;
    }

    export namespace UnionMember0 {
      export interface SsnIdentification {
        type: 'ssn';

        value: string;
      }

      export interface ItinIdentification {
        type: 'itin';

        value: string;
      }

      export interface UsResidentialAddressResponse {
        /**
         * City name.
         */
        city: string;

        /**
         * ISO 3166-1 alpha-2 country code.
         */
        country: 'US';

        /**
         * Postal or ZIP code.
         */
        postal_code: string;

        /**
         * Two-letter state code.
         */
        state: string;

        /**
         * Primary street address.
         */
        street_line_1: string;

        /**
         * Secondary street address (apartment, suite, etc.).
         */
        street_line_2: string | null;
      }

      export interface NonUsResidentialAddressResponse {
        /**
         * City name.
         */
        city: string;

        /**
         * ISO 3166-1 alpha-2 country code.
         */
        country:
          | 'AF'
          | 'AL'
          | 'DZ'
          | 'AS'
          | 'AD'
          | 'AO'
          | 'AI'
          | 'AQ'
          | 'AG'
          | 'AR'
          | 'AM'
          | 'AW'
          | 'AU'
          | 'AT'
          | 'AZ'
          | 'BS'
          | 'BH'
          | 'BD'
          | 'BB'
          | 'BY'
          | 'BE'
          | 'BZ'
          | 'BJ'
          | 'BM'
          | 'BT'
          | 'BO'
          | 'BA'
          | 'BW'
          | 'BV'
          | 'BR'
          | 'IO'
          | 'BN'
          | 'BG'
          | 'BF'
          | 'BI'
          | 'KH'
          | 'CM'
          | 'CA'
          | 'CV'
          | 'KY'
          | 'CF'
          | 'TD'
          | 'CL'
          | 'CN'
          | 'CX'
          | 'CC'
          | 'CO'
          | 'KM'
          | 'CG'
          | 'CD'
          | 'CK'
          | 'CR'
          | 'CI'
          | 'HR'
          | 'CU'
          | 'CY'
          | 'CZ'
          | 'DK'
          | 'DJ'
          | 'DM'
          | 'DO'
          | 'EC'
          | 'EG'
          | 'SV'
          | 'GQ'
          | 'ER'
          | 'EE'
          | 'ET'
          | 'FK'
          | 'FO'
          | 'FJ'
          | 'FI'
          | 'FR'
          | 'GF'
          | 'PF'
          | 'TF'
          | 'GA'
          | 'GM'
          | 'GE'
          | 'DE'
          | 'GH'
          | 'GI'
          | 'GR'
          | 'GL'
          | 'GD'
          | 'GP'
          | 'GU'
          | 'GT'
          | 'GN'
          | 'GW'
          | 'GY'
          | 'HT'
          | 'HM'
          | 'VA'
          | 'HN'
          | 'HK'
          | 'HU'
          | 'IS'
          | 'IN'
          | 'ID'
          | 'IR'
          | 'IQ'
          | 'IE'
          | 'IL'
          | 'IT'
          | 'JM'
          | 'JP'
          | 'JO'
          | 'KZ'
          | 'KE'
          | 'KI'
          | 'KP'
          | 'KR'
          | 'KW'
          | 'KG'
          | 'LA'
          | 'LV'
          | 'LB'
          | 'LS'
          | 'LR'
          | 'LY'
          | 'LI'
          | 'LT'
          | 'LU'
          | 'MO'
          | 'MG'
          | 'MW'
          | 'MY'
          | 'MV'
          | 'ML'
          | 'MT'
          | 'MH'
          | 'MQ'
          | 'MR'
          | 'MU'
          | 'YT'
          | 'MX'
          | 'FM'
          | 'MD'
          | 'MC'
          | 'MN'
          | 'MS'
          | 'MA'
          | 'MZ'
          | 'MM'
          | 'NA'
          | 'NR'
          | 'NP'
          | 'NL'
          | 'NC'
          | 'NZ'
          | 'NI'
          | 'NE'
          | 'NG'
          | 'NU'
          | 'NF'
          | 'MP'
          | 'MK'
          | 'NO'
          | 'OM'
          | 'PK'
          | 'PW'
          | 'PS'
          | 'PA'
          | 'PG'
          | 'PY'
          | 'PE'
          | 'PH'
          | 'PN'
          | 'PL'
          | 'PT'
          | 'PR'
          | 'QA'
          | 'RE'
          | 'RO'
          | 'RU'
          | 'RW'
          | 'SH'
          | 'KN'
          | 'LC'
          | 'PM'
          | 'VC'
          | 'WS'
          | 'SM'
          | 'ST'
          | 'SA'
          | 'SN'
          | 'SC'
          | 'SL'
          | 'SG'
          | 'SK'
          | 'SI'
          | 'SB'
          | 'SO'
          | 'ZA'
          | 'GS'
          | 'ES'
          | 'LK'
          | 'SD'
          | 'SR'
          | 'SJ'
          | 'SZ'
          | 'SE'
          | 'CH'
          | 'SY'
          | 'TW'
          | 'TJ'
          | 'TZ'
          | 'TH'
          | 'TL'
          | 'TG'
          | 'TK'
          | 'TO'
          | 'TT'
          | 'TN'
          | 'TR'
          | 'TM'
          | 'TC'
          | 'TV'
          | 'UG'
          | 'UA'
          | 'AE'
          | 'GB'
          | 'UM'
          | 'UY'
          | 'UZ'
          | 'VU'
          | 'VE'
          | 'VN'
          | 'VG'
          | 'VI'
          | 'WF'
          | 'EH'
          | 'YE'
          | 'ZM'
          | 'ZW'
          | 'AX'
          | 'BQ'
          | 'CW'
          | 'GG'
          | 'IM'
          | 'JE'
          | 'ME'
          | 'BL'
          | 'MF'
          | 'RS'
          | 'SX'
          | 'SS'
          | 'XK';

        /**
         * Postal or ZIP code.
         */
        postal_code: string;

        /**
         * Primary street address.
         */
        street_line_1: string;

        /**
         * Secondary street address (apartment, suite, etc.).
         */
        street_line_2: string | null;
      }
    }

    export interface UnionMember1 {
      /**
       * ISO 3166-1 alpha-2 country code of citizenship.
       */
      country_of_citizenship:
        | 'AF'
        | 'AL'
        | 'DZ'
        | 'AS'
        | 'AD'
        | 'AO'
        | 'AI'
        | 'AQ'
        | 'AG'
        | 'AR'
        | 'AM'
        | 'AW'
        | 'AU'
        | 'AT'
        | 'AZ'
        | 'BS'
        | 'BH'
        | 'BD'
        | 'BB'
        | 'BY'
        | 'BE'
        | 'BZ'
        | 'BJ'
        | 'BM'
        | 'BT'
        | 'BO'
        | 'BA'
        | 'BW'
        | 'BV'
        | 'BR'
        | 'IO'
        | 'BN'
        | 'BG'
        | 'BF'
        | 'BI'
        | 'KH'
        | 'CM'
        | 'CA'
        | 'CV'
        | 'KY'
        | 'CF'
        | 'TD'
        | 'CL'
        | 'CN'
        | 'CX'
        | 'CC'
        | 'CO'
        | 'KM'
        | 'CG'
        | 'CD'
        | 'CK'
        | 'CR'
        | 'CI'
        | 'HR'
        | 'CU'
        | 'CY'
        | 'CZ'
        | 'DK'
        | 'DJ'
        | 'DM'
        | 'DO'
        | 'EC'
        | 'EG'
        | 'SV'
        | 'GQ'
        | 'ER'
        | 'EE'
        | 'ET'
        | 'FK'
        | 'FO'
        | 'FJ'
        | 'FI'
        | 'FR'
        | 'GF'
        | 'PF'
        | 'TF'
        | 'GA'
        | 'GM'
        | 'GE'
        | 'DE'
        | 'GH'
        | 'GI'
        | 'GR'
        | 'GL'
        | 'GD'
        | 'GP'
        | 'GU'
        | 'GT'
        | 'GN'
        | 'GW'
        | 'GY'
        | 'HT'
        | 'HM'
        | 'VA'
        | 'HN'
        | 'HK'
        | 'HU'
        | 'IS'
        | 'IN'
        | 'ID'
        | 'IR'
        | 'IQ'
        | 'IE'
        | 'IL'
        | 'IT'
        | 'JM'
        | 'JP'
        | 'JO'
        | 'KZ'
        | 'KE'
        | 'KI'
        | 'KP'
        | 'KR'
        | 'KW'
        | 'KG'
        | 'LA'
        | 'LV'
        | 'LB'
        | 'LS'
        | 'LR'
        | 'LY'
        | 'LI'
        | 'LT'
        | 'LU'
        | 'MO'
        | 'MG'
        | 'MW'
        | 'MY'
        | 'MV'
        | 'ML'
        | 'MT'
        | 'MH'
        | 'MQ'
        | 'MR'
        | 'MU'
        | 'YT'
        | 'MX'
        | 'FM'
        | 'MD'
        | 'MC'
        | 'MN'
        | 'MS'
        | 'MA'
        | 'MZ'
        | 'MM'
        | 'NA'
        | 'NR'
        | 'NP'
        | 'NL'
        | 'NC'
        | 'NZ'
        | 'NI'
        | 'NE'
        | 'NG'
        | 'NU'
        | 'NF'
        | 'MP'
        | 'MK'
        | 'NO'
        | 'OM'
        | 'PK'
        | 'PW'
        | 'PS'
        | 'PA'
        | 'PG'
        | 'PY'
        | 'PE'
        | 'PH'
        | 'PN'
        | 'PL'
        | 'PT'
        | 'PR'
        | 'QA'
        | 'RE'
        | 'RO'
        | 'RU'
        | 'RW'
        | 'SH'
        | 'KN'
        | 'LC'
        | 'PM'
        | 'VC'
        | 'WS'
        | 'SM'
        | 'ST'
        | 'SA'
        | 'SN'
        | 'SC'
        | 'SL'
        | 'SG'
        | 'SK'
        | 'SI'
        | 'SB'
        | 'SO'
        | 'ZA'
        | 'GS'
        | 'ES'
        | 'LK'
        | 'SD'
        | 'SR'
        | 'SJ'
        | 'SZ'
        | 'SE'
        | 'CH'
        | 'SY'
        | 'TW'
        | 'TJ'
        | 'TZ'
        | 'TH'
        | 'TL'
        | 'TG'
        | 'TK'
        | 'TO'
        | 'TT'
        | 'TN'
        | 'TR'
        | 'TM'
        | 'TC'
        | 'TV'
        | 'UG'
        | 'UA'
        | 'AE'
        | 'GB'
        | 'UM'
        | 'UY'
        | 'UZ'
        | 'VU'
        | 'VE'
        | 'VN'
        | 'VG'
        | 'VI'
        | 'WF'
        | 'EH'
        | 'YE'
        | 'ZM'
        | 'ZW'
        | 'AX'
        | 'BQ'
        | 'CW'
        | 'GG'
        | 'IM'
        | 'JE'
        | 'ME'
        | 'BL'
        | 'MF'
        | 'RS'
        | 'SX'
        | 'SS'
        | 'XK';

      /**
       * Date of birth as an ISO 8601 calendar date (YYYY-MM-DD).
       */
      date_of_birth: string;

      /**
       * Government-issued identification with type: "id" (generic government-issued ID).
       */
      identification: UnionMember1.Identification;

      /**
       * Full legal name of the account holder.
       */
      legal_name: string;

      /**
       * Residential address of the account holder.
       */
      residential_address:
        | UnionMember1.UsResidentialAddressResponse
        | UnionMember1.NonUsResidentialAddressResponse;

      /**
       * Role of the control person at the business (e.g., "CEO", "President", "Managing
       * Director").
       */
      title: string;
    }

    export namespace UnionMember1 {
      /**
       * Government-issued identification with type: "id" (generic government-issued ID).
       */
      export interface Identification {
        type: 'id';

        value: string;
      }

      export interface UsResidentialAddressResponse {
        /**
         * City name.
         */
        city: string;

        /**
         * ISO 3166-1 alpha-2 country code.
         */
        country: 'US';

        /**
         * Postal or ZIP code.
         */
        postal_code: string;

        /**
         * Two-letter state code.
         */
        state: string;

        /**
         * Primary street address.
         */
        street_line_1: string;

        /**
         * Secondary street address (apartment, suite, etc.).
         */
        street_line_2: string | null;
      }

      export interface NonUsResidentialAddressResponse {
        /**
         * City name.
         */
        city: string;

        /**
         * ISO 3166-1 alpha-2 country code.
         */
        country:
          | 'AF'
          | 'AL'
          | 'DZ'
          | 'AS'
          | 'AD'
          | 'AO'
          | 'AI'
          | 'AQ'
          | 'AG'
          | 'AR'
          | 'AM'
          | 'AW'
          | 'AU'
          | 'AT'
          | 'AZ'
          | 'BS'
          | 'BH'
          | 'BD'
          | 'BB'
          | 'BY'
          | 'BE'
          | 'BZ'
          | 'BJ'
          | 'BM'
          | 'BT'
          | 'BO'
          | 'BA'
          | 'BW'
          | 'BV'
          | 'BR'
          | 'IO'
          | 'BN'
          | 'BG'
          | 'BF'
          | 'BI'
          | 'KH'
          | 'CM'
          | 'CA'
          | 'CV'
          | 'KY'
          | 'CF'
          | 'TD'
          | 'CL'
          | 'CN'
          | 'CX'
          | 'CC'
          | 'CO'
          | 'KM'
          | 'CG'
          | 'CD'
          | 'CK'
          | 'CR'
          | 'CI'
          | 'HR'
          | 'CU'
          | 'CY'
          | 'CZ'
          | 'DK'
          | 'DJ'
          | 'DM'
          | 'DO'
          | 'EC'
          | 'EG'
          | 'SV'
          | 'GQ'
          | 'ER'
          | 'EE'
          | 'ET'
          | 'FK'
          | 'FO'
          | 'FJ'
          | 'FI'
          | 'FR'
          | 'GF'
          | 'PF'
          | 'TF'
          | 'GA'
          | 'GM'
          | 'GE'
          | 'DE'
          | 'GH'
          | 'GI'
          | 'GR'
          | 'GL'
          | 'GD'
          | 'GP'
          | 'GU'
          | 'GT'
          | 'GN'
          | 'GW'
          | 'GY'
          | 'HT'
          | 'HM'
          | 'VA'
          | 'HN'
          | 'HK'
          | 'HU'
          | 'IS'
          | 'IN'
          | 'ID'
          | 'IR'
          | 'IQ'
          | 'IE'
          | 'IL'
          | 'IT'
          | 'JM'
          | 'JP'
          | 'JO'
          | 'KZ'
          | 'KE'
          | 'KI'
          | 'KP'
          | 'KR'
          | 'KW'
          | 'KG'
          | 'LA'
          | 'LV'
          | 'LB'
          | 'LS'
          | 'LR'
          | 'LY'
          | 'LI'
          | 'LT'
          | 'LU'
          | 'MO'
          | 'MG'
          | 'MW'
          | 'MY'
          | 'MV'
          | 'ML'
          | 'MT'
          | 'MH'
          | 'MQ'
          | 'MR'
          | 'MU'
          | 'YT'
          | 'MX'
          | 'FM'
          | 'MD'
          | 'MC'
          | 'MN'
          | 'MS'
          | 'MA'
          | 'MZ'
          | 'MM'
          | 'NA'
          | 'NR'
          | 'NP'
          | 'NL'
          | 'NC'
          | 'NZ'
          | 'NI'
          | 'NE'
          | 'NG'
          | 'NU'
          | 'NF'
          | 'MP'
          | 'MK'
          | 'NO'
          | 'OM'
          | 'PK'
          | 'PW'
          | 'PS'
          | 'PA'
          | 'PG'
          | 'PY'
          | 'PE'
          | 'PH'
          | 'PN'
          | 'PL'
          | 'PT'
          | 'PR'
          | 'QA'
          | 'RE'
          | 'RO'
          | 'RU'
          | 'RW'
          | 'SH'
          | 'KN'
          | 'LC'
          | 'PM'
          | 'VC'
          | 'WS'
          | 'SM'
          | 'ST'
          | 'SA'
          | 'SN'
          | 'SC'
          | 'SL'
          | 'SG'
          | 'SK'
          | 'SI'
          | 'SB'
          | 'SO'
          | 'ZA'
          | 'GS'
          | 'ES'
          | 'LK'
          | 'SD'
          | 'SR'
          | 'SJ'
          | 'SZ'
          | 'SE'
          | 'CH'
          | 'SY'
          | 'TW'
          | 'TJ'
          | 'TZ'
          | 'TH'
          | 'TL'
          | 'TG'
          | 'TK'
          | 'TO'
          | 'TT'
          | 'TN'
          | 'TR'
          | 'TM'
          | 'TC'
          | 'TV'
          | 'UG'
          | 'UA'
          | 'AE'
          | 'GB'
          | 'UM'
          | 'UY'
          | 'UZ'
          | 'VU'
          | 'VE'
          | 'VN'
          | 'VG'
          | 'VI'
          | 'WF'
          | 'EH'
          | 'YE'
          | 'ZM'
          | 'ZW'
          | 'AX'
          | 'BQ'
          | 'CW'
          | 'GG'
          | 'IM'
          | 'JE'
          | 'ME'
          | 'BL'
          | 'MF'
          | 'RS'
          | 'SX'
          | 'SS'
          | 'XK';

        /**
         * Postal or ZIP code.
         */
        postal_code: string;

        /**
         * Primary street address.
         */
        street_line_1: string;

        /**
         * Secondary street address (apartment, suite, etc.).
         */
        street_line_2: string | null;
      }
    }

    export interface UsResidentialAddressResponse {
      /**
       * City name.
       */
      city: string;

      /**
       * ISO 3166-1 alpha-2 country code.
       */
      country: 'US';

      /**
       * Postal or ZIP code.
       */
      postal_code: string;

      /**
       * Two-letter state code.
       */
      state: string;

      /**
       * Primary street address.
       */
      street_line_1: string;

      /**
       * Secondary street address (apartment, suite, etc.).
       */
      street_line_2: string | null;
    }

    export interface NonUsResidentialAddressResponse {
      /**
       * City name.
       */
      city: string;

      /**
       * ISO 3166-1 alpha-2 country code.
       */
      country:
        | 'AF'
        | 'AL'
        | 'DZ'
        | 'AS'
        | 'AD'
        | 'AO'
        | 'AI'
        | 'AQ'
        | 'AG'
        | 'AR'
        | 'AM'
        | 'AW'
        | 'AU'
        | 'AT'
        | 'AZ'
        | 'BS'
        | 'BH'
        | 'BD'
        | 'BB'
        | 'BY'
        | 'BE'
        | 'BZ'
        | 'BJ'
        | 'BM'
        | 'BT'
        | 'BO'
        | 'BA'
        | 'BW'
        | 'BV'
        | 'BR'
        | 'IO'
        | 'BN'
        | 'BG'
        | 'BF'
        | 'BI'
        | 'KH'
        | 'CM'
        | 'CA'
        | 'CV'
        | 'KY'
        | 'CF'
        | 'TD'
        | 'CL'
        | 'CN'
        | 'CX'
        | 'CC'
        | 'CO'
        | 'KM'
        | 'CG'
        | 'CD'
        | 'CK'
        | 'CR'
        | 'CI'
        | 'HR'
        | 'CU'
        | 'CY'
        | 'CZ'
        | 'DK'
        | 'DJ'
        | 'DM'
        | 'DO'
        | 'EC'
        | 'EG'
        | 'SV'
        | 'GQ'
        | 'ER'
        | 'EE'
        | 'ET'
        | 'FK'
        | 'FO'
        | 'FJ'
        | 'FI'
        | 'FR'
        | 'GF'
        | 'PF'
        | 'TF'
        | 'GA'
        | 'GM'
        | 'GE'
        | 'DE'
        | 'GH'
        | 'GI'
        | 'GR'
        | 'GL'
        | 'GD'
        | 'GP'
        | 'GU'
        | 'GT'
        | 'GN'
        | 'GW'
        | 'GY'
        | 'HT'
        | 'HM'
        | 'VA'
        | 'HN'
        | 'HK'
        | 'HU'
        | 'IS'
        | 'IN'
        | 'ID'
        | 'IR'
        | 'IQ'
        | 'IE'
        | 'IL'
        | 'IT'
        | 'JM'
        | 'JP'
        | 'JO'
        | 'KZ'
        | 'KE'
        | 'KI'
        | 'KP'
        | 'KR'
        | 'KW'
        | 'KG'
        | 'LA'
        | 'LV'
        | 'LB'
        | 'LS'
        | 'LR'
        | 'LY'
        | 'LI'
        | 'LT'
        | 'LU'
        | 'MO'
        | 'MG'
        | 'MW'
        | 'MY'
        | 'MV'
        | 'ML'
        | 'MT'
        | 'MH'
        | 'MQ'
        | 'MR'
        | 'MU'
        | 'YT'
        | 'MX'
        | 'FM'
        | 'MD'
        | 'MC'
        | 'MN'
        | 'MS'
        | 'MA'
        | 'MZ'
        | 'MM'
        | 'NA'
        | 'NR'
        | 'NP'
        | 'NL'
        | 'NC'
        | 'NZ'
        | 'NI'
        | 'NE'
        | 'NG'
        | 'NU'
        | 'NF'
        | 'MP'
        | 'MK'
        | 'NO'
        | 'OM'
        | 'PK'
        | 'PW'
        | 'PS'
        | 'PA'
        | 'PG'
        | 'PY'
        | 'PE'
        | 'PH'
        | 'PN'
        | 'PL'
        | 'PT'
        | 'PR'
        | 'QA'
        | 'RE'
        | 'RO'
        | 'RU'
        | 'RW'
        | 'SH'
        | 'KN'
        | 'LC'
        | 'PM'
        | 'VC'
        | 'WS'
        | 'SM'
        | 'ST'
        | 'SA'
        | 'SN'
        | 'SC'
        | 'SL'
        | 'SG'
        | 'SK'
        | 'SI'
        | 'SB'
        | 'SO'
        | 'ZA'
        | 'GS'
        | 'ES'
        | 'LK'
        | 'SD'
        | 'SR'
        | 'SJ'
        | 'SZ'
        | 'SE'
        | 'CH'
        | 'SY'
        | 'TW'
        | 'TJ'
        | 'TZ'
        | 'TH'
        | 'TL'
        | 'TG'
        | 'TK'
        | 'TO'
        | 'TT'
        | 'TN'
        | 'TR'
        | 'TM'
        | 'TC'
        | 'TV'
        | 'UG'
        | 'UA'
        | 'AE'
        | 'GB'
        | 'UM'
        | 'UY'
        | 'UZ'
        | 'VU'
        | 'VE'
        | 'VN'
        | 'VG'
        | 'VI'
        | 'WF'
        | 'EH'
        | 'YE'
        | 'ZM'
        | 'ZW'
        | 'AX'
        | 'BQ'
        | 'CW'
        | 'GG'
        | 'IM'
        | 'JE'
        | 'ME'
        | 'BL'
        | 'MF'
        | 'RS'
        | 'SX'
        | 'SS'
        | 'XK';

      /**
       * Postal or ZIP code.
       */
      postal_code: string;

      /**
       * Primary street address.
       */
      street_line_1: string;

      /**
       * Secondary street address (apartment, suite, etc.).
       */
      street_line_2: string | null;
    }

    export interface UsResidentialAddressResponse {
      /**
       * City name.
       */
      city: string;

      /**
       * ISO 3166-1 alpha-2 country code.
       */
      country: 'US';

      /**
       * Postal or ZIP code.
       */
      postal_code: string;

      /**
       * Two-letter state code.
       */
      state: string;

      /**
       * Primary street address.
       */
      street_line_1: string;

      /**
       * Secondary street address (apartment, suite, etc.).
       */
      street_line_2: string | null;
    }

    export interface NonUsResidentialAddressResponse {
      /**
       * City name.
       */
      city: string;

      /**
       * ISO 3166-1 alpha-2 country code.
       */
      country:
        | 'AF'
        | 'AL'
        | 'DZ'
        | 'AS'
        | 'AD'
        | 'AO'
        | 'AI'
        | 'AQ'
        | 'AG'
        | 'AR'
        | 'AM'
        | 'AW'
        | 'AU'
        | 'AT'
        | 'AZ'
        | 'BS'
        | 'BH'
        | 'BD'
        | 'BB'
        | 'BY'
        | 'BE'
        | 'BZ'
        | 'BJ'
        | 'BM'
        | 'BT'
        | 'BO'
        | 'BA'
        | 'BW'
        | 'BV'
        | 'BR'
        | 'IO'
        | 'BN'
        | 'BG'
        | 'BF'
        | 'BI'
        | 'KH'
        | 'CM'
        | 'CA'
        | 'CV'
        | 'KY'
        | 'CF'
        | 'TD'
        | 'CL'
        | 'CN'
        | 'CX'
        | 'CC'
        | 'CO'
        | 'KM'
        | 'CG'
        | 'CD'
        | 'CK'
        | 'CR'
        | 'CI'
        | 'HR'
        | 'CU'
        | 'CY'
        | 'CZ'
        | 'DK'
        | 'DJ'
        | 'DM'
        | 'DO'
        | 'EC'
        | 'EG'
        | 'SV'
        | 'GQ'
        | 'ER'
        | 'EE'
        | 'ET'
        | 'FK'
        | 'FO'
        | 'FJ'
        | 'FI'
        | 'FR'
        | 'GF'
        | 'PF'
        | 'TF'
        | 'GA'
        | 'GM'
        | 'GE'
        | 'DE'
        | 'GH'
        | 'GI'
        | 'GR'
        | 'GL'
        | 'GD'
        | 'GP'
        | 'GU'
        | 'GT'
        | 'GN'
        | 'GW'
        | 'GY'
        | 'HT'
        | 'HM'
        | 'VA'
        | 'HN'
        | 'HK'
        | 'HU'
        | 'IS'
        | 'IN'
        | 'ID'
        | 'IR'
        | 'IQ'
        | 'IE'
        | 'IL'
        | 'IT'
        | 'JM'
        | 'JP'
        | 'JO'
        | 'KZ'
        | 'KE'
        | 'KI'
        | 'KP'
        | 'KR'
        | 'KW'
        | 'KG'
        | 'LA'
        | 'LV'
        | 'LB'
        | 'LS'
        | 'LR'
        | 'LY'
        | 'LI'
        | 'LT'
        | 'LU'
        | 'MO'
        | 'MG'
        | 'MW'
        | 'MY'
        | 'MV'
        | 'ML'
        | 'MT'
        | 'MH'
        | 'MQ'
        | 'MR'
        | 'MU'
        | 'YT'
        | 'MX'
        | 'FM'
        | 'MD'
        | 'MC'
        | 'MN'
        | 'MS'
        | 'MA'
        | 'MZ'
        | 'MM'
        | 'NA'
        | 'NR'
        | 'NP'
        | 'NL'
        | 'NC'
        | 'NZ'
        | 'NI'
        | 'NE'
        | 'NG'
        | 'NU'
        | 'NF'
        | 'MP'
        | 'MK'
        | 'NO'
        | 'OM'
        | 'PK'
        | 'PW'
        | 'PS'
        | 'PA'
        | 'PG'
        | 'PY'
        | 'PE'
        | 'PH'
        | 'PN'
        | 'PL'
        | 'PT'
        | 'PR'
        | 'QA'
        | 'RE'
        | 'RO'
        | 'RU'
        | 'RW'
        | 'SH'
        | 'KN'
        | 'LC'
        | 'PM'
        | 'VC'
        | 'WS'
        | 'SM'
        | 'ST'
        | 'SA'
        | 'SN'
        | 'SC'
        | 'SL'
        | 'SG'
        | 'SK'
        | 'SI'
        | 'SB'
        | 'SO'
        | 'ZA'
        | 'GS'
        | 'ES'
        | 'LK'
        | 'SD'
        | 'SR'
        | 'SJ'
        | 'SZ'
        | 'SE'
        | 'CH'
        | 'SY'
        | 'TW'
        | 'TJ'
        | 'TZ'
        | 'TH'
        | 'TL'
        | 'TG'
        | 'TK'
        | 'TO'
        | 'TT'
        | 'TN'
        | 'TR'
        | 'TM'
        | 'TC'
        | 'TV'
        | 'UG'
        | 'UA'
        | 'AE'
        | 'GB'
        | 'UM'
        | 'UY'
        | 'UZ'
        | 'VU'
        | 'VE'
        | 'VN'
        | 'VG'
        | 'VI'
        | 'WF'
        | 'EH'
        | 'YE'
        | 'ZM'
        | 'ZW'
        | 'AX'
        | 'BQ'
        | 'CW'
        | 'GG'
        | 'IM'
        | 'JE'
        | 'ME'
        | 'BL'
        | 'MF'
        | 'RS'
        | 'SX'
        | 'SS'
        | 'XK';

      /**
       * Postal or ZIP code.
       */
      postal_code: string;

      /**
       * Primary street address.
       */
      street_line_1: string;

      /**
       * Secondary street address (apartment, suite, etc.).
       */
      street_line_2: string | null;
    }

    export interface EinIdentification {
      type: 'ein';

      value: string;
    }

    export interface SsnIdentification {
      type: 'ssn';

      value: string;
    }
  }
}

export interface AccountHolderCreateParams {
  /**
   * ID of the account program to create the account holder under.
   */
  account_program_id: string;

  /**
   * Personal information of the account holder.
   */
  beneficiary_data:
    | AccountHolderCreateParams.UsBeneficiaryData
    | AccountHolderCreateParams.NonUsBeneficiaryData
    | AccountHolderCreateParams.BusinessBeneficiaryData;

  /**
   * Type of the account holder.
   */
  holder_type: 'natural_person' | 'business';
}

export namespace AccountHolderCreateParams {
  export interface UsBeneficiaryData {
    /**
     * ISO 3166-1 alpha-2 country code of citizenship.
     */
    country_of_citizenship: 'US';

    /**
     * Date of birth as an ISO 8601 calendar date (YYYY-MM-DD).
     */
    date_of_birth: string;

    /**
     * Government-issued identification with type: "ssn" (Social Security Number,
     * format ###-##-####) or "itin" (Individual Taxpayer ID, format 9##-##-####).
     */
    identification: UsBeneficiaryData.SsnIdentification | UsBeneficiaryData.ItinIdentification;

    /**
     * Full legal name of the account holder.
     */
    legal_name: string;

    /**
     * Residential address of the account holder.
     */
    residential_address: UsBeneficiaryData.UsResidentialAddress | UsBeneficiaryData.NonUsResidentialAddress;
  }

  export namespace UsBeneficiaryData {
    export interface SsnIdentification {
      type: 'ssn';

      value: string;
    }

    export interface ItinIdentification {
      type: 'itin';

      value: string;
    }

    export interface UsResidentialAddress {
      /**
       * City name.
       */
      city: string;

      /**
       * ISO 3166-1 alpha-2 country code.
       */
      country: 'US';

      /**
       * Postal or ZIP code.
       */
      postal_code: string;

      /**
       * Two-letter state code.
       */
      state: string;

      /**
       * Primary street address.
       */
      street_line_1: string;

      /**
       * Secondary street address (apartment, suite, etc.).
       */
      street_line_2?: string;
    }

    export interface NonUsResidentialAddress {
      /**
       * City name.
       */
      city: string;

      /**
       * ISO 3166-1 alpha-2 country code.
       */
      country:
        | 'AF'
        | 'AL'
        | 'DZ'
        | 'AS'
        | 'AD'
        | 'AO'
        | 'AI'
        | 'AQ'
        | 'AG'
        | 'AR'
        | 'AM'
        | 'AW'
        | 'AU'
        | 'AT'
        | 'AZ'
        | 'BS'
        | 'BH'
        | 'BD'
        | 'BB'
        | 'BY'
        | 'BE'
        | 'BZ'
        | 'BJ'
        | 'BM'
        | 'BT'
        | 'BO'
        | 'BA'
        | 'BW'
        | 'BV'
        | 'BR'
        | 'IO'
        | 'BN'
        | 'BG'
        | 'BF'
        | 'BI'
        | 'KH'
        | 'CM'
        | 'CA'
        | 'CV'
        | 'KY'
        | 'CF'
        | 'TD'
        | 'CL'
        | 'CN'
        | 'CX'
        | 'CC'
        | 'CO'
        | 'KM'
        | 'CG'
        | 'CD'
        | 'CK'
        | 'CR'
        | 'CI'
        | 'HR'
        | 'CU'
        | 'CY'
        | 'CZ'
        | 'DK'
        | 'DJ'
        | 'DM'
        | 'DO'
        | 'EC'
        | 'EG'
        | 'SV'
        | 'GQ'
        | 'ER'
        | 'EE'
        | 'ET'
        | 'FK'
        | 'FO'
        | 'FJ'
        | 'FI'
        | 'FR'
        | 'GF'
        | 'PF'
        | 'TF'
        | 'GA'
        | 'GM'
        | 'GE'
        | 'DE'
        | 'GH'
        | 'GI'
        | 'GR'
        | 'GL'
        | 'GD'
        | 'GP'
        | 'GU'
        | 'GT'
        | 'GN'
        | 'GW'
        | 'GY'
        | 'HT'
        | 'HM'
        | 'VA'
        | 'HN'
        | 'HK'
        | 'HU'
        | 'IS'
        | 'IN'
        | 'ID'
        | 'IR'
        | 'IQ'
        | 'IE'
        | 'IL'
        | 'IT'
        | 'JM'
        | 'JP'
        | 'JO'
        | 'KZ'
        | 'KE'
        | 'KI'
        | 'KP'
        | 'KR'
        | 'KW'
        | 'KG'
        | 'LA'
        | 'LV'
        | 'LB'
        | 'LS'
        | 'LR'
        | 'LY'
        | 'LI'
        | 'LT'
        | 'LU'
        | 'MO'
        | 'MG'
        | 'MW'
        | 'MY'
        | 'MV'
        | 'ML'
        | 'MT'
        | 'MH'
        | 'MQ'
        | 'MR'
        | 'MU'
        | 'YT'
        | 'MX'
        | 'FM'
        | 'MD'
        | 'MC'
        | 'MN'
        | 'MS'
        | 'MA'
        | 'MZ'
        | 'MM'
        | 'NA'
        | 'NR'
        | 'NP'
        | 'NL'
        | 'NC'
        | 'NZ'
        | 'NI'
        | 'NE'
        | 'NG'
        | 'NU'
        | 'NF'
        | 'MP'
        | 'MK'
        | 'NO'
        | 'OM'
        | 'PK'
        | 'PW'
        | 'PS'
        | 'PA'
        | 'PG'
        | 'PY'
        | 'PE'
        | 'PH'
        | 'PN'
        | 'PL'
        | 'PT'
        | 'PR'
        | 'QA'
        | 'RE'
        | 'RO'
        | 'RU'
        | 'RW'
        | 'SH'
        | 'KN'
        | 'LC'
        | 'PM'
        | 'VC'
        | 'WS'
        | 'SM'
        | 'ST'
        | 'SA'
        | 'SN'
        | 'SC'
        | 'SL'
        | 'SG'
        | 'SK'
        | 'SI'
        | 'SB'
        | 'SO'
        | 'ZA'
        | 'GS'
        | 'ES'
        | 'LK'
        | 'SD'
        | 'SR'
        | 'SJ'
        | 'SZ'
        | 'SE'
        | 'CH'
        | 'SY'
        | 'TW'
        | 'TJ'
        | 'TZ'
        | 'TH'
        | 'TL'
        | 'TG'
        | 'TK'
        | 'TO'
        | 'TT'
        | 'TN'
        | 'TR'
        | 'TM'
        | 'TC'
        | 'TV'
        | 'UG'
        | 'UA'
        | 'AE'
        | 'GB'
        | 'UM'
        | 'UY'
        | 'UZ'
        | 'VU'
        | 'VE'
        | 'VN'
        | 'VG'
        | 'VI'
        | 'WF'
        | 'EH'
        | 'YE'
        | 'ZM'
        | 'ZW'
        | 'AX'
        | 'BQ'
        | 'CW'
        | 'GG'
        | 'IM'
        | 'JE'
        | 'ME'
        | 'BL'
        | 'MF'
        | 'RS'
        | 'SX'
        | 'SS'
        | 'XK';

      /**
       * Postal or ZIP code.
       */
      postal_code: string;

      /**
       * Primary street address.
       */
      street_line_1: string;

      /**
       * Secondary street address (apartment, suite, etc.).
       */
      street_line_2?: string;
    }
  }

  export interface NonUsBeneficiaryData {
    /**
     * ISO 3166-1 alpha-2 country code of citizenship.
     */
    country_of_citizenship:
      | 'AF'
      | 'AL'
      | 'DZ'
      | 'AS'
      | 'AD'
      | 'AO'
      | 'AI'
      | 'AQ'
      | 'AG'
      | 'AR'
      | 'AM'
      | 'AW'
      | 'AU'
      | 'AT'
      | 'AZ'
      | 'BS'
      | 'BH'
      | 'BD'
      | 'BB'
      | 'BY'
      | 'BE'
      | 'BZ'
      | 'BJ'
      | 'BM'
      | 'BT'
      | 'BO'
      | 'BA'
      | 'BW'
      | 'BV'
      | 'BR'
      | 'IO'
      | 'BN'
      | 'BG'
      | 'BF'
      | 'BI'
      | 'KH'
      | 'CM'
      | 'CA'
      | 'CV'
      | 'KY'
      | 'CF'
      | 'TD'
      | 'CL'
      | 'CN'
      | 'CX'
      | 'CC'
      | 'CO'
      | 'KM'
      | 'CG'
      | 'CD'
      | 'CK'
      | 'CR'
      | 'CI'
      | 'HR'
      | 'CU'
      | 'CY'
      | 'CZ'
      | 'DK'
      | 'DJ'
      | 'DM'
      | 'DO'
      | 'EC'
      | 'EG'
      | 'SV'
      | 'GQ'
      | 'ER'
      | 'EE'
      | 'ET'
      | 'FK'
      | 'FO'
      | 'FJ'
      | 'FI'
      | 'FR'
      | 'GF'
      | 'PF'
      | 'TF'
      | 'GA'
      | 'GM'
      | 'GE'
      | 'DE'
      | 'GH'
      | 'GI'
      | 'GR'
      | 'GL'
      | 'GD'
      | 'GP'
      | 'GU'
      | 'GT'
      | 'GN'
      | 'GW'
      | 'GY'
      | 'HT'
      | 'HM'
      | 'VA'
      | 'HN'
      | 'HK'
      | 'HU'
      | 'IS'
      | 'IN'
      | 'ID'
      | 'IR'
      | 'IQ'
      | 'IE'
      | 'IL'
      | 'IT'
      | 'JM'
      | 'JP'
      | 'JO'
      | 'KZ'
      | 'KE'
      | 'KI'
      | 'KP'
      | 'KR'
      | 'KW'
      | 'KG'
      | 'LA'
      | 'LV'
      | 'LB'
      | 'LS'
      | 'LR'
      | 'LY'
      | 'LI'
      | 'LT'
      | 'LU'
      | 'MO'
      | 'MG'
      | 'MW'
      | 'MY'
      | 'MV'
      | 'ML'
      | 'MT'
      | 'MH'
      | 'MQ'
      | 'MR'
      | 'MU'
      | 'YT'
      | 'MX'
      | 'FM'
      | 'MD'
      | 'MC'
      | 'MN'
      | 'MS'
      | 'MA'
      | 'MZ'
      | 'MM'
      | 'NA'
      | 'NR'
      | 'NP'
      | 'NL'
      | 'NC'
      | 'NZ'
      | 'NI'
      | 'NE'
      | 'NG'
      | 'NU'
      | 'NF'
      | 'MP'
      | 'MK'
      | 'NO'
      | 'OM'
      | 'PK'
      | 'PW'
      | 'PS'
      | 'PA'
      | 'PG'
      | 'PY'
      | 'PE'
      | 'PH'
      | 'PN'
      | 'PL'
      | 'PT'
      | 'PR'
      | 'QA'
      | 'RE'
      | 'RO'
      | 'RU'
      | 'RW'
      | 'SH'
      | 'KN'
      | 'LC'
      | 'PM'
      | 'VC'
      | 'WS'
      | 'SM'
      | 'ST'
      | 'SA'
      | 'SN'
      | 'SC'
      | 'SL'
      | 'SG'
      | 'SK'
      | 'SI'
      | 'SB'
      | 'SO'
      | 'ZA'
      | 'GS'
      | 'ES'
      | 'LK'
      | 'SD'
      | 'SR'
      | 'SJ'
      | 'SZ'
      | 'SE'
      | 'CH'
      | 'SY'
      | 'TW'
      | 'TJ'
      | 'TZ'
      | 'TH'
      | 'TL'
      | 'TG'
      | 'TK'
      | 'TO'
      | 'TT'
      | 'TN'
      | 'TR'
      | 'TM'
      | 'TC'
      | 'TV'
      | 'UG'
      | 'UA'
      | 'AE'
      | 'GB'
      | 'UM'
      | 'UY'
      | 'UZ'
      | 'VU'
      | 'VE'
      | 'VN'
      | 'VG'
      | 'VI'
      | 'WF'
      | 'EH'
      | 'YE'
      | 'ZM'
      | 'ZW'
      | 'AX'
      | 'BQ'
      | 'CW'
      | 'GG'
      | 'IM'
      | 'JE'
      | 'ME'
      | 'BL'
      | 'MF'
      | 'RS'
      | 'SX'
      | 'SS'
      | 'XK';

    /**
     * Date of birth as an ISO 8601 calendar date (YYYY-MM-DD).
     */
    date_of_birth: string;

    /**
     * Government-issued identification with type: "id" (generic government-issued ID).
     */
    identification: NonUsBeneficiaryData.Identification;

    /**
     * Full legal name of the account holder.
     */
    legal_name: string;

    /**
     * Residential address of the account holder.
     */
    residential_address:
      | NonUsBeneficiaryData.UsResidentialAddress
      | NonUsBeneficiaryData.NonUsResidentialAddress;
  }

  export namespace NonUsBeneficiaryData {
    /**
     * Government-issued identification with type: "id" (generic government-issued ID).
     */
    export interface Identification {
      type: 'id';

      value: string;
    }

    export interface UsResidentialAddress {
      /**
       * City name.
       */
      city: string;

      /**
       * ISO 3166-1 alpha-2 country code.
       */
      country: 'US';

      /**
       * Postal or ZIP code.
       */
      postal_code: string;

      /**
       * Two-letter state code.
       */
      state: string;

      /**
       * Primary street address.
       */
      street_line_1: string;

      /**
       * Secondary street address (apartment, suite, etc.).
       */
      street_line_2?: string;
    }

    export interface NonUsResidentialAddress {
      /**
       * City name.
       */
      city: string;

      /**
       * ISO 3166-1 alpha-2 country code.
       */
      country:
        | 'AF'
        | 'AL'
        | 'DZ'
        | 'AS'
        | 'AD'
        | 'AO'
        | 'AI'
        | 'AQ'
        | 'AG'
        | 'AR'
        | 'AM'
        | 'AW'
        | 'AU'
        | 'AT'
        | 'AZ'
        | 'BS'
        | 'BH'
        | 'BD'
        | 'BB'
        | 'BY'
        | 'BE'
        | 'BZ'
        | 'BJ'
        | 'BM'
        | 'BT'
        | 'BO'
        | 'BA'
        | 'BW'
        | 'BV'
        | 'BR'
        | 'IO'
        | 'BN'
        | 'BG'
        | 'BF'
        | 'BI'
        | 'KH'
        | 'CM'
        | 'CA'
        | 'CV'
        | 'KY'
        | 'CF'
        | 'TD'
        | 'CL'
        | 'CN'
        | 'CX'
        | 'CC'
        | 'CO'
        | 'KM'
        | 'CG'
        | 'CD'
        | 'CK'
        | 'CR'
        | 'CI'
        | 'HR'
        | 'CU'
        | 'CY'
        | 'CZ'
        | 'DK'
        | 'DJ'
        | 'DM'
        | 'DO'
        | 'EC'
        | 'EG'
        | 'SV'
        | 'GQ'
        | 'ER'
        | 'EE'
        | 'ET'
        | 'FK'
        | 'FO'
        | 'FJ'
        | 'FI'
        | 'FR'
        | 'GF'
        | 'PF'
        | 'TF'
        | 'GA'
        | 'GM'
        | 'GE'
        | 'DE'
        | 'GH'
        | 'GI'
        | 'GR'
        | 'GL'
        | 'GD'
        | 'GP'
        | 'GU'
        | 'GT'
        | 'GN'
        | 'GW'
        | 'GY'
        | 'HT'
        | 'HM'
        | 'VA'
        | 'HN'
        | 'HK'
        | 'HU'
        | 'IS'
        | 'IN'
        | 'ID'
        | 'IR'
        | 'IQ'
        | 'IE'
        | 'IL'
        | 'IT'
        | 'JM'
        | 'JP'
        | 'JO'
        | 'KZ'
        | 'KE'
        | 'KI'
        | 'KP'
        | 'KR'
        | 'KW'
        | 'KG'
        | 'LA'
        | 'LV'
        | 'LB'
        | 'LS'
        | 'LR'
        | 'LY'
        | 'LI'
        | 'LT'
        | 'LU'
        | 'MO'
        | 'MG'
        | 'MW'
        | 'MY'
        | 'MV'
        | 'ML'
        | 'MT'
        | 'MH'
        | 'MQ'
        | 'MR'
        | 'MU'
        | 'YT'
        | 'MX'
        | 'FM'
        | 'MD'
        | 'MC'
        | 'MN'
        | 'MS'
        | 'MA'
        | 'MZ'
        | 'MM'
        | 'NA'
        | 'NR'
        | 'NP'
        | 'NL'
        | 'NC'
        | 'NZ'
        | 'NI'
        | 'NE'
        | 'NG'
        | 'NU'
        | 'NF'
        | 'MP'
        | 'MK'
        | 'NO'
        | 'OM'
        | 'PK'
        | 'PW'
        | 'PS'
        | 'PA'
        | 'PG'
        | 'PY'
        | 'PE'
        | 'PH'
        | 'PN'
        | 'PL'
        | 'PT'
        | 'PR'
        | 'QA'
        | 'RE'
        | 'RO'
        | 'RU'
        | 'RW'
        | 'SH'
        | 'KN'
        | 'LC'
        | 'PM'
        | 'VC'
        | 'WS'
        | 'SM'
        | 'ST'
        | 'SA'
        | 'SN'
        | 'SC'
        | 'SL'
        | 'SG'
        | 'SK'
        | 'SI'
        | 'SB'
        | 'SO'
        | 'ZA'
        | 'GS'
        | 'ES'
        | 'LK'
        | 'SD'
        | 'SR'
        | 'SJ'
        | 'SZ'
        | 'SE'
        | 'CH'
        | 'SY'
        | 'TW'
        | 'TJ'
        | 'TZ'
        | 'TH'
        | 'TL'
        | 'TG'
        | 'TK'
        | 'TO'
        | 'TT'
        | 'TN'
        | 'TR'
        | 'TM'
        | 'TC'
        | 'TV'
        | 'UG'
        | 'UA'
        | 'AE'
        | 'GB'
        | 'UM'
        | 'UY'
        | 'UZ'
        | 'VU'
        | 'VE'
        | 'VN'
        | 'VG'
        | 'VI'
        | 'WF'
        | 'EH'
        | 'YE'
        | 'ZM'
        | 'ZW'
        | 'AX'
        | 'BQ'
        | 'CW'
        | 'GG'
        | 'IM'
        | 'JE'
        | 'ME'
        | 'BL'
        | 'MF'
        | 'RS'
        | 'SX'
        | 'SS'
        | 'XK';

      /**
       * Postal or ZIP code.
       */
      postal_code: string;

      /**
       * Primary street address.
       */
      street_line_1: string;

      /**
       * Secondary street address (apartment, suite, etc.).
       */
      street_line_2?: string;
    }
  }

  export interface BusinessBeneficiaryData {
    /**
     * Beneficial owners of the business. At least one required.
     */
    beneficial_owners: Array<
      BusinessBeneficiaryData.UsBeneficiaryData | BusinessBeneficiaryData.NonUsBeneficiaryData
    >;

    /**
     * Individual with primary responsibility for controlling, managing, or directing
     * the business.
     */
    control_person: BusinessBeneficiaryData.UnionMember0 | BusinessBeneficiaryData.UnionMember1;

    /**
     * ISO 3166-1 alpha-2 country code where the business is incorporated.
     */
    country_of_incorporation:
      | 'AF'
      | 'AL'
      | 'DZ'
      | 'AS'
      | 'AD'
      | 'AO'
      | 'AI'
      | 'AQ'
      | 'AG'
      | 'AR'
      | 'AM'
      | 'AW'
      | 'AU'
      | 'AT'
      | 'AZ'
      | 'BS'
      | 'BH'
      | 'BD'
      | 'BB'
      | 'BY'
      | 'BE'
      | 'BZ'
      | 'BJ'
      | 'BM'
      | 'BT'
      | 'BO'
      | 'BA'
      | 'BW'
      | 'BV'
      | 'BR'
      | 'IO'
      | 'BN'
      | 'BG'
      | 'BF'
      | 'BI'
      | 'KH'
      | 'CM'
      | 'CA'
      | 'CV'
      | 'KY'
      | 'CF'
      | 'TD'
      | 'CL'
      | 'CN'
      | 'CX'
      | 'CC'
      | 'CO'
      | 'KM'
      | 'CG'
      | 'CD'
      | 'CK'
      | 'CR'
      | 'CI'
      | 'HR'
      | 'CU'
      | 'CY'
      | 'CZ'
      | 'DK'
      | 'DJ'
      | 'DM'
      | 'DO'
      | 'EC'
      | 'EG'
      | 'SV'
      | 'GQ'
      | 'ER'
      | 'EE'
      | 'ET'
      | 'FK'
      | 'FO'
      | 'FJ'
      | 'FI'
      | 'FR'
      | 'GF'
      | 'PF'
      | 'TF'
      | 'GA'
      | 'GM'
      | 'GE'
      | 'DE'
      | 'GH'
      | 'GI'
      | 'GR'
      | 'GL'
      | 'GD'
      | 'GP'
      | 'GU'
      | 'GT'
      | 'GN'
      | 'GW'
      | 'GY'
      | 'HT'
      | 'HM'
      | 'VA'
      | 'HN'
      | 'HK'
      | 'HU'
      | 'IS'
      | 'IN'
      | 'ID'
      | 'IR'
      | 'IQ'
      | 'IE'
      | 'IL'
      | 'IT'
      | 'JM'
      | 'JP'
      | 'JO'
      | 'KZ'
      | 'KE'
      | 'KI'
      | 'KP'
      | 'KR'
      | 'KW'
      | 'KG'
      | 'LA'
      | 'LV'
      | 'LB'
      | 'LS'
      | 'LR'
      | 'LY'
      | 'LI'
      | 'LT'
      | 'LU'
      | 'MO'
      | 'MG'
      | 'MW'
      | 'MY'
      | 'MV'
      | 'ML'
      | 'MT'
      | 'MH'
      | 'MQ'
      | 'MR'
      | 'MU'
      | 'YT'
      | 'MX'
      | 'FM'
      | 'MD'
      | 'MC'
      | 'MN'
      | 'MS'
      | 'MA'
      | 'MZ'
      | 'MM'
      | 'NA'
      | 'NR'
      | 'NP'
      | 'NL'
      | 'NC'
      | 'NZ'
      | 'NI'
      | 'NE'
      | 'NG'
      | 'NU'
      | 'NF'
      | 'MP'
      | 'MK'
      | 'NO'
      | 'OM'
      | 'PK'
      | 'PW'
      | 'PS'
      | 'PA'
      | 'PG'
      | 'PY'
      | 'PE'
      | 'PH'
      | 'PN'
      | 'PL'
      | 'PT'
      | 'PR'
      | 'QA'
      | 'RE'
      | 'RO'
      | 'RU'
      | 'RW'
      | 'SH'
      | 'KN'
      | 'LC'
      | 'PM'
      | 'VC'
      | 'WS'
      | 'SM'
      | 'ST'
      | 'SA'
      | 'SN'
      | 'SC'
      | 'SL'
      | 'SG'
      | 'SK'
      | 'SI'
      | 'SB'
      | 'SO'
      | 'ZA'
      | 'GS'
      | 'ES'
      | 'LK'
      | 'SD'
      | 'SR'
      | 'SJ'
      | 'SZ'
      | 'SE'
      | 'CH'
      | 'SY'
      | 'TW'
      | 'TJ'
      | 'TZ'
      | 'TH'
      | 'TL'
      | 'TG'
      | 'TK'
      | 'TO'
      | 'TT'
      | 'TN'
      | 'TR'
      | 'TM'
      | 'TC'
      | 'TV'
      | 'UG'
      | 'UA'
      | 'AE'
      | 'GB'
      | 'US'
      | 'UM'
      | 'UY'
      | 'UZ'
      | 'VU'
      | 'VE'
      | 'VN'
      | 'VG'
      | 'VI'
      | 'WF'
      | 'EH'
      | 'YE'
      | 'ZM'
      | 'ZW'
      | 'AX'
      | 'BQ'
      | 'CW'
      | 'GG'
      | 'IM'
      | 'JE'
      | 'ME'
      | 'BL'
      | 'MF'
      | 'RS'
      | 'SX'
      | 'SS'
      | 'XK';

    /**
     * Full legal name of the business.
     */
    legal_business_name: string;

    /**
     * Physical operating address of the business.
     */
    physical_address:
      | BusinessBeneficiaryData.UsResidentialAddress
      | BusinessBeneficiaryData.NonUsResidentialAddress;

    /**
     * Registered legal address of the business.
     */
    registered_address:
      | BusinessBeneficiaryData.UsResidentialAddress
      | BusinessBeneficiaryData.NonUsResidentialAddress;

    /**
     * Business registration number: type "ein" (Employer Identification Number, format
     * ##-#######) or "ssn" (Social Security Number, format ###-##-####).
     */
    registration_number:
      | BusinessBeneficiaryData.EinIdentification
      | BusinessBeneficiaryData.SsnIdentification;

    /**
     * State or subdivision where the business is incorporated.
     */
    state_of_incorporation: string;

    /**
     * Four-digit year the business was incorporated.
     */
    year_of_incorporation: number;

    /**
     * Trade name the business operates under, if different from the legal name.
     */
    doing_business_as?: string;
  }

  export namespace BusinessBeneficiaryData {
    export interface UsBeneficiaryData {
      /**
       * ISO 3166-1 alpha-2 country code of citizenship.
       */
      country_of_citizenship: 'US';

      /**
       * Date of birth as an ISO 8601 calendar date (YYYY-MM-DD).
       */
      date_of_birth: string;

      /**
       * Government-issued identification with type: "ssn" (Social Security Number,
       * format ###-##-####) or "itin" (Individual Taxpayer ID, format 9##-##-####).
       */
      identification: UsBeneficiaryData.SsnIdentification | UsBeneficiaryData.ItinIdentification;

      /**
       * Full legal name of the account holder.
       */
      legal_name: string;

      /**
       * Residential address of the account holder.
       */
      residential_address: UsBeneficiaryData.UsResidentialAddress | UsBeneficiaryData.NonUsResidentialAddress;
    }

    export namespace UsBeneficiaryData {
      export interface SsnIdentification {
        type: 'ssn';

        value: string;
      }

      export interface ItinIdentification {
        type: 'itin';

        value: string;
      }

      export interface UsResidentialAddress {
        /**
         * City name.
         */
        city: string;

        /**
         * ISO 3166-1 alpha-2 country code.
         */
        country: 'US';

        /**
         * Postal or ZIP code.
         */
        postal_code: string;

        /**
         * Two-letter state code.
         */
        state: string;

        /**
         * Primary street address.
         */
        street_line_1: string;

        /**
         * Secondary street address (apartment, suite, etc.).
         */
        street_line_2?: string;
      }

      export interface NonUsResidentialAddress {
        /**
         * City name.
         */
        city: string;

        /**
         * ISO 3166-1 alpha-2 country code.
         */
        country:
          | 'AF'
          | 'AL'
          | 'DZ'
          | 'AS'
          | 'AD'
          | 'AO'
          | 'AI'
          | 'AQ'
          | 'AG'
          | 'AR'
          | 'AM'
          | 'AW'
          | 'AU'
          | 'AT'
          | 'AZ'
          | 'BS'
          | 'BH'
          | 'BD'
          | 'BB'
          | 'BY'
          | 'BE'
          | 'BZ'
          | 'BJ'
          | 'BM'
          | 'BT'
          | 'BO'
          | 'BA'
          | 'BW'
          | 'BV'
          | 'BR'
          | 'IO'
          | 'BN'
          | 'BG'
          | 'BF'
          | 'BI'
          | 'KH'
          | 'CM'
          | 'CA'
          | 'CV'
          | 'KY'
          | 'CF'
          | 'TD'
          | 'CL'
          | 'CN'
          | 'CX'
          | 'CC'
          | 'CO'
          | 'KM'
          | 'CG'
          | 'CD'
          | 'CK'
          | 'CR'
          | 'CI'
          | 'HR'
          | 'CU'
          | 'CY'
          | 'CZ'
          | 'DK'
          | 'DJ'
          | 'DM'
          | 'DO'
          | 'EC'
          | 'EG'
          | 'SV'
          | 'GQ'
          | 'ER'
          | 'EE'
          | 'ET'
          | 'FK'
          | 'FO'
          | 'FJ'
          | 'FI'
          | 'FR'
          | 'GF'
          | 'PF'
          | 'TF'
          | 'GA'
          | 'GM'
          | 'GE'
          | 'DE'
          | 'GH'
          | 'GI'
          | 'GR'
          | 'GL'
          | 'GD'
          | 'GP'
          | 'GU'
          | 'GT'
          | 'GN'
          | 'GW'
          | 'GY'
          | 'HT'
          | 'HM'
          | 'VA'
          | 'HN'
          | 'HK'
          | 'HU'
          | 'IS'
          | 'IN'
          | 'ID'
          | 'IR'
          | 'IQ'
          | 'IE'
          | 'IL'
          | 'IT'
          | 'JM'
          | 'JP'
          | 'JO'
          | 'KZ'
          | 'KE'
          | 'KI'
          | 'KP'
          | 'KR'
          | 'KW'
          | 'KG'
          | 'LA'
          | 'LV'
          | 'LB'
          | 'LS'
          | 'LR'
          | 'LY'
          | 'LI'
          | 'LT'
          | 'LU'
          | 'MO'
          | 'MG'
          | 'MW'
          | 'MY'
          | 'MV'
          | 'ML'
          | 'MT'
          | 'MH'
          | 'MQ'
          | 'MR'
          | 'MU'
          | 'YT'
          | 'MX'
          | 'FM'
          | 'MD'
          | 'MC'
          | 'MN'
          | 'MS'
          | 'MA'
          | 'MZ'
          | 'MM'
          | 'NA'
          | 'NR'
          | 'NP'
          | 'NL'
          | 'NC'
          | 'NZ'
          | 'NI'
          | 'NE'
          | 'NG'
          | 'NU'
          | 'NF'
          | 'MP'
          | 'MK'
          | 'NO'
          | 'OM'
          | 'PK'
          | 'PW'
          | 'PS'
          | 'PA'
          | 'PG'
          | 'PY'
          | 'PE'
          | 'PH'
          | 'PN'
          | 'PL'
          | 'PT'
          | 'PR'
          | 'QA'
          | 'RE'
          | 'RO'
          | 'RU'
          | 'RW'
          | 'SH'
          | 'KN'
          | 'LC'
          | 'PM'
          | 'VC'
          | 'WS'
          | 'SM'
          | 'ST'
          | 'SA'
          | 'SN'
          | 'SC'
          | 'SL'
          | 'SG'
          | 'SK'
          | 'SI'
          | 'SB'
          | 'SO'
          | 'ZA'
          | 'GS'
          | 'ES'
          | 'LK'
          | 'SD'
          | 'SR'
          | 'SJ'
          | 'SZ'
          | 'SE'
          | 'CH'
          | 'SY'
          | 'TW'
          | 'TJ'
          | 'TZ'
          | 'TH'
          | 'TL'
          | 'TG'
          | 'TK'
          | 'TO'
          | 'TT'
          | 'TN'
          | 'TR'
          | 'TM'
          | 'TC'
          | 'TV'
          | 'UG'
          | 'UA'
          | 'AE'
          | 'GB'
          | 'UM'
          | 'UY'
          | 'UZ'
          | 'VU'
          | 'VE'
          | 'VN'
          | 'VG'
          | 'VI'
          | 'WF'
          | 'EH'
          | 'YE'
          | 'ZM'
          | 'ZW'
          | 'AX'
          | 'BQ'
          | 'CW'
          | 'GG'
          | 'IM'
          | 'JE'
          | 'ME'
          | 'BL'
          | 'MF'
          | 'RS'
          | 'SX'
          | 'SS'
          | 'XK';

        /**
         * Postal or ZIP code.
         */
        postal_code: string;

        /**
         * Primary street address.
         */
        street_line_1: string;

        /**
         * Secondary street address (apartment, suite, etc.).
         */
        street_line_2?: string;
      }
    }

    export interface NonUsBeneficiaryData {
      /**
       * ISO 3166-1 alpha-2 country code of citizenship.
       */
      country_of_citizenship:
        | 'AF'
        | 'AL'
        | 'DZ'
        | 'AS'
        | 'AD'
        | 'AO'
        | 'AI'
        | 'AQ'
        | 'AG'
        | 'AR'
        | 'AM'
        | 'AW'
        | 'AU'
        | 'AT'
        | 'AZ'
        | 'BS'
        | 'BH'
        | 'BD'
        | 'BB'
        | 'BY'
        | 'BE'
        | 'BZ'
        | 'BJ'
        | 'BM'
        | 'BT'
        | 'BO'
        | 'BA'
        | 'BW'
        | 'BV'
        | 'BR'
        | 'IO'
        | 'BN'
        | 'BG'
        | 'BF'
        | 'BI'
        | 'KH'
        | 'CM'
        | 'CA'
        | 'CV'
        | 'KY'
        | 'CF'
        | 'TD'
        | 'CL'
        | 'CN'
        | 'CX'
        | 'CC'
        | 'CO'
        | 'KM'
        | 'CG'
        | 'CD'
        | 'CK'
        | 'CR'
        | 'CI'
        | 'HR'
        | 'CU'
        | 'CY'
        | 'CZ'
        | 'DK'
        | 'DJ'
        | 'DM'
        | 'DO'
        | 'EC'
        | 'EG'
        | 'SV'
        | 'GQ'
        | 'ER'
        | 'EE'
        | 'ET'
        | 'FK'
        | 'FO'
        | 'FJ'
        | 'FI'
        | 'FR'
        | 'GF'
        | 'PF'
        | 'TF'
        | 'GA'
        | 'GM'
        | 'GE'
        | 'DE'
        | 'GH'
        | 'GI'
        | 'GR'
        | 'GL'
        | 'GD'
        | 'GP'
        | 'GU'
        | 'GT'
        | 'GN'
        | 'GW'
        | 'GY'
        | 'HT'
        | 'HM'
        | 'VA'
        | 'HN'
        | 'HK'
        | 'HU'
        | 'IS'
        | 'IN'
        | 'ID'
        | 'IR'
        | 'IQ'
        | 'IE'
        | 'IL'
        | 'IT'
        | 'JM'
        | 'JP'
        | 'JO'
        | 'KZ'
        | 'KE'
        | 'KI'
        | 'KP'
        | 'KR'
        | 'KW'
        | 'KG'
        | 'LA'
        | 'LV'
        | 'LB'
        | 'LS'
        | 'LR'
        | 'LY'
        | 'LI'
        | 'LT'
        | 'LU'
        | 'MO'
        | 'MG'
        | 'MW'
        | 'MY'
        | 'MV'
        | 'ML'
        | 'MT'
        | 'MH'
        | 'MQ'
        | 'MR'
        | 'MU'
        | 'YT'
        | 'MX'
        | 'FM'
        | 'MD'
        | 'MC'
        | 'MN'
        | 'MS'
        | 'MA'
        | 'MZ'
        | 'MM'
        | 'NA'
        | 'NR'
        | 'NP'
        | 'NL'
        | 'NC'
        | 'NZ'
        | 'NI'
        | 'NE'
        | 'NG'
        | 'NU'
        | 'NF'
        | 'MP'
        | 'MK'
        | 'NO'
        | 'OM'
        | 'PK'
        | 'PW'
        | 'PS'
        | 'PA'
        | 'PG'
        | 'PY'
        | 'PE'
        | 'PH'
        | 'PN'
        | 'PL'
        | 'PT'
        | 'PR'
        | 'QA'
        | 'RE'
        | 'RO'
        | 'RU'
        | 'RW'
        | 'SH'
        | 'KN'
        | 'LC'
        | 'PM'
        | 'VC'
        | 'WS'
        | 'SM'
        | 'ST'
        | 'SA'
        | 'SN'
        | 'SC'
        | 'SL'
        | 'SG'
        | 'SK'
        | 'SI'
        | 'SB'
        | 'SO'
        | 'ZA'
        | 'GS'
        | 'ES'
        | 'LK'
        | 'SD'
        | 'SR'
        | 'SJ'
        | 'SZ'
        | 'SE'
        | 'CH'
        | 'SY'
        | 'TW'
        | 'TJ'
        | 'TZ'
        | 'TH'
        | 'TL'
        | 'TG'
        | 'TK'
        | 'TO'
        | 'TT'
        | 'TN'
        | 'TR'
        | 'TM'
        | 'TC'
        | 'TV'
        | 'UG'
        | 'UA'
        | 'AE'
        | 'GB'
        | 'UM'
        | 'UY'
        | 'UZ'
        | 'VU'
        | 'VE'
        | 'VN'
        | 'VG'
        | 'VI'
        | 'WF'
        | 'EH'
        | 'YE'
        | 'ZM'
        | 'ZW'
        | 'AX'
        | 'BQ'
        | 'CW'
        | 'GG'
        | 'IM'
        | 'JE'
        | 'ME'
        | 'BL'
        | 'MF'
        | 'RS'
        | 'SX'
        | 'SS'
        | 'XK';

      /**
       * Date of birth as an ISO 8601 calendar date (YYYY-MM-DD).
       */
      date_of_birth: string;

      /**
       * Government-issued identification with type: "id" (generic government-issued ID).
       */
      identification: NonUsBeneficiaryData.Identification;

      /**
       * Full legal name of the account holder.
       */
      legal_name: string;

      /**
       * Residential address of the account holder.
       */
      residential_address:
        | NonUsBeneficiaryData.UsResidentialAddress
        | NonUsBeneficiaryData.NonUsResidentialAddress;
    }

    export namespace NonUsBeneficiaryData {
      /**
       * Government-issued identification with type: "id" (generic government-issued ID).
       */
      export interface Identification {
        type: 'id';

        value: string;
      }

      export interface UsResidentialAddress {
        /**
         * City name.
         */
        city: string;

        /**
         * ISO 3166-1 alpha-2 country code.
         */
        country: 'US';

        /**
         * Postal or ZIP code.
         */
        postal_code: string;

        /**
         * Two-letter state code.
         */
        state: string;

        /**
         * Primary street address.
         */
        street_line_1: string;

        /**
         * Secondary street address (apartment, suite, etc.).
         */
        street_line_2?: string;
      }

      export interface NonUsResidentialAddress {
        /**
         * City name.
         */
        city: string;

        /**
         * ISO 3166-1 alpha-2 country code.
         */
        country:
          | 'AF'
          | 'AL'
          | 'DZ'
          | 'AS'
          | 'AD'
          | 'AO'
          | 'AI'
          | 'AQ'
          | 'AG'
          | 'AR'
          | 'AM'
          | 'AW'
          | 'AU'
          | 'AT'
          | 'AZ'
          | 'BS'
          | 'BH'
          | 'BD'
          | 'BB'
          | 'BY'
          | 'BE'
          | 'BZ'
          | 'BJ'
          | 'BM'
          | 'BT'
          | 'BO'
          | 'BA'
          | 'BW'
          | 'BV'
          | 'BR'
          | 'IO'
          | 'BN'
          | 'BG'
          | 'BF'
          | 'BI'
          | 'KH'
          | 'CM'
          | 'CA'
          | 'CV'
          | 'KY'
          | 'CF'
          | 'TD'
          | 'CL'
          | 'CN'
          | 'CX'
          | 'CC'
          | 'CO'
          | 'KM'
          | 'CG'
          | 'CD'
          | 'CK'
          | 'CR'
          | 'CI'
          | 'HR'
          | 'CU'
          | 'CY'
          | 'CZ'
          | 'DK'
          | 'DJ'
          | 'DM'
          | 'DO'
          | 'EC'
          | 'EG'
          | 'SV'
          | 'GQ'
          | 'ER'
          | 'EE'
          | 'ET'
          | 'FK'
          | 'FO'
          | 'FJ'
          | 'FI'
          | 'FR'
          | 'GF'
          | 'PF'
          | 'TF'
          | 'GA'
          | 'GM'
          | 'GE'
          | 'DE'
          | 'GH'
          | 'GI'
          | 'GR'
          | 'GL'
          | 'GD'
          | 'GP'
          | 'GU'
          | 'GT'
          | 'GN'
          | 'GW'
          | 'GY'
          | 'HT'
          | 'HM'
          | 'VA'
          | 'HN'
          | 'HK'
          | 'HU'
          | 'IS'
          | 'IN'
          | 'ID'
          | 'IR'
          | 'IQ'
          | 'IE'
          | 'IL'
          | 'IT'
          | 'JM'
          | 'JP'
          | 'JO'
          | 'KZ'
          | 'KE'
          | 'KI'
          | 'KP'
          | 'KR'
          | 'KW'
          | 'KG'
          | 'LA'
          | 'LV'
          | 'LB'
          | 'LS'
          | 'LR'
          | 'LY'
          | 'LI'
          | 'LT'
          | 'LU'
          | 'MO'
          | 'MG'
          | 'MW'
          | 'MY'
          | 'MV'
          | 'ML'
          | 'MT'
          | 'MH'
          | 'MQ'
          | 'MR'
          | 'MU'
          | 'YT'
          | 'MX'
          | 'FM'
          | 'MD'
          | 'MC'
          | 'MN'
          | 'MS'
          | 'MA'
          | 'MZ'
          | 'MM'
          | 'NA'
          | 'NR'
          | 'NP'
          | 'NL'
          | 'NC'
          | 'NZ'
          | 'NI'
          | 'NE'
          | 'NG'
          | 'NU'
          | 'NF'
          | 'MP'
          | 'MK'
          | 'NO'
          | 'OM'
          | 'PK'
          | 'PW'
          | 'PS'
          | 'PA'
          | 'PG'
          | 'PY'
          | 'PE'
          | 'PH'
          | 'PN'
          | 'PL'
          | 'PT'
          | 'PR'
          | 'QA'
          | 'RE'
          | 'RO'
          | 'RU'
          | 'RW'
          | 'SH'
          | 'KN'
          | 'LC'
          | 'PM'
          | 'VC'
          | 'WS'
          | 'SM'
          | 'ST'
          | 'SA'
          | 'SN'
          | 'SC'
          | 'SL'
          | 'SG'
          | 'SK'
          | 'SI'
          | 'SB'
          | 'SO'
          | 'ZA'
          | 'GS'
          | 'ES'
          | 'LK'
          | 'SD'
          | 'SR'
          | 'SJ'
          | 'SZ'
          | 'SE'
          | 'CH'
          | 'SY'
          | 'TW'
          | 'TJ'
          | 'TZ'
          | 'TH'
          | 'TL'
          | 'TG'
          | 'TK'
          | 'TO'
          | 'TT'
          | 'TN'
          | 'TR'
          | 'TM'
          | 'TC'
          | 'TV'
          | 'UG'
          | 'UA'
          | 'AE'
          | 'GB'
          | 'UM'
          | 'UY'
          | 'UZ'
          | 'VU'
          | 'VE'
          | 'VN'
          | 'VG'
          | 'VI'
          | 'WF'
          | 'EH'
          | 'YE'
          | 'ZM'
          | 'ZW'
          | 'AX'
          | 'BQ'
          | 'CW'
          | 'GG'
          | 'IM'
          | 'JE'
          | 'ME'
          | 'BL'
          | 'MF'
          | 'RS'
          | 'SX'
          | 'SS'
          | 'XK';

        /**
         * Postal or ZIP code.
         */
        postal_code: string;

        /**
         * Primary street address.
         */
        street_line_1: string;

        /**
         * Secondary street address (apartment, suite, etc.).
         */
        street_line_2?: string;
      }
    }

    export interface UnionMember0 {
      /**
       * ISO 3166-1 alpha-2 country code of citizenship.
       */
      country_of_citizenship: 'US';

      /**
       * Date of birth as an ISO 8601 calendar date (YYYY-MM-DD).
       */
      date_of_birth: string;

      /**
       * Government-issued identification with type: "ssn" (Social Security Number,
       * format ###-##-####) or "itin" (Individual Taxpayer ID, format 9##-##-####).
       */
      identification: UnionMember0.SsnIdentification | UnionMember0.ItinIdentification;

      /**
       * Full legal name of the account holder.
       */
      legal_name: string;

      /**
       * Residential address of the account holder.
       */
      residential_address: UnionMember0.UsResidentialAddress | UnionMember0.NonUsResidentialAddress;

      /**
       * Role of the control person at the business (e.g., "CEO", "President", "Managing
       * Director").
       */
      title: string;
    }

    export namespace UnionMember0 {
      export interface SsnIdentification {
        type: 'ssn';

        value: string;
      }

      export interface ItinIdentification {
        type: 'itin';

        value: string;
      }

      export interface UsResidentialAddress {
        /**
         * City name.
         */
        city: string;

        /**
         * ISO 3166-1 alpha-2 country code.
         */
        country: 'US';

        /**
         * Postal or ZIP code.
         */
        postal_code: string;

        /**
         * Two-letter state code.
         */
        state: string;

        /**
         * Primary street address.
         */
        street_line_1: string;

        /**
         * Secondary street address (apartment, suite, etc.).
         */
        street_line_2?: string;
      }

      export interface NonUsResidentialAddress {
        /**
         * City name.
         */
        city: string;

        /**
         * ISO 3166-1 alpha-2 country code.
         */
        country:
          | 'AF'
          | 'AL'
          | 'DZ'
          | 'AS'
          | 'AD'
          | 'AO'
          | 'AI'
          | 'AQ'
          | 'AG'
          | 'AR'
          | 'AM'
          | 'AW'
          | 'AU'
          | 'AT'
          | 'AZ'
          | 'BS'
          | 'BH'
          | 'BD'
          | 'BB'
          | 'BY'
          | 'BE'
          | 'BZ'
          | 'BJ'
          | 'BM'
          | 'BT'
          | 'BO'
          | 'BA'
          | 'BW'
          | 'BV'
          | 'BR'
          | 'IO'
          | 'BN'
          | 'BG'
          | 'BF'
          | 'BI'
          | 'KH'
          | 'CM'
          | 'CA'
          | 'CV'
          | 'KY'
          | 'CF'
          | 'TD'
          | 'CL'
          | 'CN'
          | 'CX'
          | 'CC'
          | 'CO'
          | 'KM'
          | 'CG'
          | 'CD'
          | 'CK'
          | 'CR'
          | 'CI'
          | 'HR'
          | 'CU'
          | 'CY'
          | 'CZ'
          | 'DK'
          | 'DJ'
          | 'DM'
          | 'DO'
          | 'EC'
          | 'EG'
          | 'SV'
          | 'GQ'
          | 'ER'
          | 'EE'
          | 'ET'
          | 'FK'
          | 'FO'
          | 'FJ'
          | 'FI'
          | 'FR'
          | 'GF'
          | 'PF'
          | 'TF'
          | 'GA'
          | 'GM'
          | 'GE'
          | 'DE'
          | 'GH'
          | 'GI'
          | 'GR'
          | 'GL'
          | 'GD'
          | 'GP'
          | 'GU'
          | 'GT'
          | 'GN'
          | 'GW'
          | 'GY'
          | 'HT'
          | 'HM'
          | 'VA'
          | 'HN'
          | 'HK'
          | 'HU'
          | 'IS'
          | 'IN'
          | 'ID'
          | 'IR'
          | 'IQ'
          | 'IE'
          | 'IL'
          | 'IT'
          | 'JM'
          | 'JP'
          | 'JO'
          | 'KZ'
          | 'KE'
          | 'KI'
          | 'KP'
          | 'KR'
          | 'KW'
          | 'KG'
          | 'LA'
          | 'LV'
          | 'LB'
          | 'LS'
          | 'LR'
          | 'LY'
          | 'LI'
          | 'LT'
          | 'LU'
          | 'MO'
          | 'MG'
          | 'MW'
          | 'MY'
          | 'MV'
          | 'ML'
          | 'MT'
          | 'MH'
          | 'MQ'
          | 'MR'
          | 'MU'
          | 'YT'
          | 'MX'
          | 'FM'
          | 'MD'
          | 'MC'
          | 'MN'
          | 'MS'
          | 'MA'
          | 'MZ'
          | 'MM'
          | 'NA'
          | 'NR'
          | 'NP'
          | 'NL'
          | 'NC'
          | 'NZ'
          | 'NI'
          | 'NE'
          | 'NG'
          | 'NU'
          | 'NF'
          | 'MP'
          | 'MK'
          | 'NO'
          | 'OM'
          | 'PK'
          | 'PW'
          | 'PS'
          | 'PA'
          | 'PG'
          | 'PY'
          | 'PE'
          | 'PH'
          | 'PN'
          | 'PL'
          | 'PT'
          | 'PR'
          | 'QA'
          | 'RE'
          | 'RO'
          | 'RU'
          | 'RW'
          | 'SH'
          | 'KN'
          | 'LC'
          | 'PM'
          | 'VC'
          | 'WS'
          | 'SM'
          | 'ST'
          | 'SA'
          | 'SN'
          | 'SC'
          | 'SL'
          | 'SG'
          | 'SK'
          | 'SI'
          | 'SB'
          | 'SO'
          | 'ZA'
          | 'GS'
          | 'ES'
          | 'LK'
          | 'SD'
          | 'SR'
          | 'SJ'
          | 'SZ'
          | 'SE'
          | 'CH'
          | 'SY'
          | 'TW'
          | 'TJ'
          | 'TZ'
          | 'TH'
          | 'TL'
          | 'TG'
          | 'TK'
          | 'TO'
          | 'TT'
          | 'TN'
          | 'TR'
          | 'TM'
          | 'TC'
          | 'TV'
          | 'UG'
          | 'UA'
          | 'AE'
          | 'GB'
          | 'UM'
          | 'UY'
          | 'UZ'
          | 'VU'
          | 'VE'
          | 'VN'
          | 'VG'
          | 'VI'
          | 'WF'
          | 'EH'
          | 'YE'
          | 'ZM'
          | 'ZW'
          | 'AX'
          | 'BQ'
          | 'CW'
          | 'GG'
          | 'IM'
          | 'JE'
          | 'ME'
          | 'BL'
          | 'MF'
          | 'RS'
          | 'SX'
          | 'SS'
          | 'XK';

        /**
         * Postal or ZIP code.
         */
        postal_code: string;

        /**
         * Primary street address.
         */
        street_line_1: string;

        /**
         * Secondary street address (apartment, suite, etc.).
         */
        street_line_2?: string;
      }
    }

    export interface UnionMember1 {
      /**
       * ISO 3166-1 alpha-2 country code of citizenship.
       */
      country_of_citizenship:
        | 'AF'
        | 'AL'
        | 'DZ'
        | 'AS'
        | 'AD'
        | 'AO'
        | 'AI'
        | 'AQ'
        | 'AG'
        | 'AR'
        | 'AM'
        | 'AW'
        | 'AU'
        | 'AT'
        | 'AZ'
        | 'BS'
        | 'BH'
        | 'BD'
        | 'BB'
        | 'BY'
        | 'BE'
        | 'BZ'
        | 'BJ'
        | 'BM'
        | 'BT'
        | 'BO'
        | 'BA'
        | 'BW'
        | 'BV'
        | 'BR'
        | 'IO'
        | 'BN'
        | 'BG'
        | 'BF'
        | 'BI'
        | 'KH'
        | 'CM'
        | 'CA'
        | 'CV'
        | 'KY'
        | 'CF'
        | 'TD'
        | 'CL'
        | 'CN'
        | 'CX'
        | 'CC'
        | 'CO'
        | 'KM'
        | 'CG'
        | 'CD'
        | 'CK'
        | 'CR'
        | 'CI'
        | 'HR'
        | 'CU'
        | 'CY'
        | 'CZ'
        | 'DK'
        | 'DJ'
        | 'DM'
        | 'DO'
        | 'EC'
        | 'EG'
        | 'SV'
        | 'GQ'
        | 'ER'
        | 'EE'
        | 'ET'
        | 'FK'
        | 'FO'
        | 'FJ'
        | 'FI'
        | 'FR'
        | 'GF'
        | 'PF'
        | 'TF'
        | 'GA'
        | 'GM'
        | 'GE'
        | 'DE'
        | 'GH'
        | 'GI'
        | 'GR'
        | 'GL'
        | 'GD'
        | 'GP'
        | 'GU'
        | 'GT'
        | 'GN'
        | 'GW'
        | 'GY'
        | 'HT'
        | 'HM'
        | 'VA'
        | 'HN'
        | 'HK'
        | 'HU'
        | 'IS'
        | 'IN'
        | 'ID'
        | 'IR'
        | 'IQ'
        | 'IE'
        | 'IL'
        | 'IT'
        | 'JM'
        | 'JP'
        | 'JO'
        | 'KZ'
        | 'KE'
        | 'KI'
        | 'KP'
        | 'KR'
        | 'KW'
        | 'KG'
        | 'LA'
        | 'LV'
        | 'LB'
        | 'LS'
        | 'LR'
        | 'LY'
        | 'LI'
        | 'LT'
        | 'LU'
        | 'MO'
        | 'MG'
        | 'MW'
        | 'MY'
        | 'MV'
        | 'ML'
        | 'MT'
        | 'MH'
        | 'MQ'
        | 'MR'
        | 'MU'
        | 'YT'
        | 'MX'
        | 'FM'
        | 'MD'
        | 'MC'
        | 'MN'
        | 'MS'
        | 'MA'
        | 'MZ'
        | 'MM'
        | 'NA'
        | 'NR'
        | 'NP'
        | 'NL'
        | 'NC'
        | 'NZ'
        | 'NI'
        | 'NE'
        | 'NG'
        | 'NU'
        | 'NF'
        | 'MP'
        | 'MK'
        | 'NO'
        | 'OM'
        | 'PK'
        | 'PW'
        | 'PS'
        | 'PA'
        | 'PG'
        | 'PY'
        | 'PE'
        | 'PH'
        | 'PN'
        | 'PL'
        | 'PT'
        | 'PR'
        | 'QA'
        | 'RE'
        | 'RO'
        | 'RU'
        | 'RW'
        | 'SH'
        | 'KN'
        | 'LC'
        | 'PM'
        | 'VC'
        | 'WS'
        | 'SM'
        | 'ST'
        | 'SA'
        | 'SN'
        | 'SC'
        | 'SL'
        | 'SG'
        | 'SK'
        | 'SI'
        | 'SB'
        | 'SO'
        | 'ZA'
        | 'GS'
        | 'ES'
        | 'LK'
        | 'SD'
        | 'SR'
        | 'SJ'
        | 'SZ'
        | 'SE'
        | 'CH'
        | 'SY'
        | 'TW'
        | 'TJ'
        | 'TZ'
        | 'TH'
        | 'TL'
        | 'TG'
        | 'TK'
        | 'TO'
        | 'TT'
        | 'TN'
        | 'TR'
        | 'TM'
        | 'TC'
        | 'TV'
        | 'UG'
        | 'UA'
        | 'AE'
        | 'GB'
        | 'UM'
        | 'UY'
        | 'UZ'
        | 'VU'
        | 'VE'
        | 'VN'
        | 'VG'
        | 'VI'
        | 'WF'
        | 'EH'
        | 'YE'
        | 'ZM'
        | 'ZW'
        | 'AX'
        | 'BQ'
        | 'CW'
        | 'GG'
        | 'IM'
        | 'JE'
        | 'ME'
        | 'BL'
        | 'MF'
        | 'RS'
        | 'SX'
        | 'SS'
        | 'XK';

      /**
       * Date of birth as an ISO 8601 calendar date (YYYY-MM-DD).
       */
      date_of_birth: string;

      /**
       * Government-issued identification with type: "id" (generic government-issued ID).
       */
      identification: UnionMember1.Identification;

      /**
       * Full legal name of the account holder.
       */
      legal_name: string;

      /**
       * Residential address of the account holder.
       */
      residential_address: UnionMember1.UsResidentialAddress | UnionMember1.NonUsResidentialAddress;

      /**
       * Role of the control person at the business (e.g., "CEO", "President", "Managing
       * Director").
       */
      title: string;
    }

    export namespace UnionMember1 {
      /**
       * Government-issued identification with type: "id" (generic government-issued ID).
       */
      export interface Identification {
        type: 'id';

        value: string;
      }

      export interface UsResidentialAddress {
        /**
         * City name.
         */
        city: string;

        /**
         * ISO 3166-1 alpha-2 country code.
         */
        country: 'US';

        /**
         * Postal or ZIP code.
         */
        postal_code: string;

        /**
         * Two-letter state code.
         */
        state: string;

        /**
         * Primary street address.
         */
        street_line_1: string;

        /**
         * Secondary street address (apartment, suite, etc.).
         */
        street_line_2?: string;
      }

      export interface NonUsResidentialAddress {
        /**
         * City name.
         */
        city: string;

        /**
         * ISO 3166-1 alpha-2 country code.
         */
        country:
          | 'AF'
          | 'AL'
          | 'DZ'
          | 'AS'
          | 'AD'
          | 'AO'
          | 'AI'
          | 'AQ'
          | 'AG'
          | 'AR'
          | 'AM'
          | 'AW'
          | 'AU'
          | 'AT'
          | 'AZ'
          | 'BS'
          | 'BH'
          | 'BD'
          | 'BB'
          | 'BY'
          | 'BE'
          | 'BZ'
          | 'BJ'
          | 'BM'
          | 'BT'
          | 'BO'
          | 'BA'
          | 'BW'
          | 'BV'
          | 'BR'
          | 'IO'
          | 'BN'
          | 'BG'
          | 'BF'
          | 'BI'
          | 'KH'
          | 'CM'
          | 'CA'
          | 'CV'
          | 'KY'
          | 'CF'
          | 'TD'
          | 'CL'
          | 'CN'
          | 'CX'
          | 'CC'
          | 'CO'
          | 'KM'
          | 'CG'
          | 'CD'
          | 'CK'
          | 'CR'
          | 'CI'
          | 'HR'
          | 'CU'
          | 'CY'
          | 'CZ'
          | 'DK'
          | 'DJ'
          | 'DM'
          | 'DO'
          | 'EC'
          | 'EG'
          | 'SV'
          | 'GQ'
          | 'ER'
          | 'EE'
          | 'ET'
          | 'FK'
          | 'FO'
          | 'FJ'
          | 'FI'
          | 'FR'
          | 'GF'
          | 'PF'
          | 'TF'
          | 'GA'
          | 'GM'
          | 'GE'
          | 'DE'
          | 'GH'
          | 'GI'
          | 'GR'
          | 'GL'
          | 'GD'
          | 'GP'
          | 'GU'
          | 'GT'
          | 'GN'
          | 'GW'
          | 'GY'
          | 'HT'
          | 'HM'
          | 'VA'
          | 'HN'
          | 'HK'
          | 'HU'
          | 'IS'
          | 'IN'
          | 'ID'
          | 'IR'
          | 'IQ'
          | 'IE'
          | 'IL'
          | 'IT'
          | 'JM'
          | 'JP'
          | 'JO'
          | 'KZ'
          | 'KE'
          | 'KI'
          | 'KP'
          | 'KR'
          | 'KW'
          | 'KG'
          | 'LA'
          | 'LV'
          | 'LB'
          | 'LS'
          | 'LR'
          | 'LY'
          | 'LI'
          | 'LT'
          | 'LU'
          | 'MO'
          | 'MG'
          | 'MW'
          | 'MY'
          | 'MV'
          | 'ML'
          | 'MT'
          | 'MH'
          | 'MQ'
          | 'MR'
          | 'MU'
          | 'YT'
          | 'MX'
          | 'FM'
          | 'MD'
          | 'MC'
          | 'MN'
          | 'MS'
          | 'MA'
          | 'MZ'
          | 'MM'
          | 'NA'
          | 'NR'
          | 'NP'
          | 'NL'
          | 'NC'
          | 'NZ'
          | 'NI'
          | 'NE'
          | 'NG'
          | 'NU'
          | 'NF'
          | 'MP'
          | 'MK'
          | 'NO'
          | 'OM'
          | 'PK'
          | 'PW'
          | 'PS'
          | 'PA'
          | 'PG'
          | 'PY'
          | 'PE'
          | 'PH'
          | 'PN'
          | 'PL'
          | 'PT'
          | 'PR'
          | 'QA'
          | 'RE'
          | 'RO'
          | 'RU'
          | 'RW'
          | 'SH'
          | 'KN'
          | 'LC'
          | 'PM'
          | 'VC'
          | 'WS'
          | 'SM'
          | 'ST'
          | 'SA'
          | 'SN'
          | 'SC'
          | 'SL'
          | 'SG'
          | 'SK'
          | 'SI'
          | 'SB'
          | 'SO'
          | 'ZA'
          | 'GS'
          | 'ES'
          | 'LK'
          | 'SD'
          | 'SR'
          | 'SJ'
          | 'SZ'
          | 'SE'
          | 'CH'
          | 'SY'
          | 'TW'
          | 'TJ'
          | 'TZ'
          | 'TH'
          | 'TL'
          | 'TG'
          | 'TK'
          | 'TO'
          | 'TT'
          | 'TN'
          | 'TR'
          | 'TM'
          | 'TC'
          | 'TV'
          | 'UG'
          | 'UA'
          | 'AE'
          | 'GB'
          | 'UM'
          | 'UY'
          | 'UZ'
          | 'VU'
          | 'VE'
          | 'VN'
          | 'VG'
          | 'VI'
          | 'WF'
          | 'EH'
          | 'YE'
          | 'ZM'
          | 'ZW'
          | 'AX'
          | 'BQ'
          | 'CW'
          | 'GG'
          | 'IM'
          | 'JE'
          | 'ME'
          | 'BL'
          | 'MF'
          | 'RS'
          | 'SX'
          | 'SS'
          | 'XK';

        /**
         * Postal or ZIP code.
         */
        postal_code: string;

        /**
         * Primary street address.
         */
        street_line_1: string;

        /**
         * Secondary street address (apartment, suite, etc.).
         */
        street_line_2?: string;
      }
    }

    export interface UsResidentialAddress {
      /**
       * City name.
       */
      city: string;

      /**
       * ISO 3166-1 alpha-2 country code.
       */
      country: 'US';

      /**
       * Postal or ZIP code.
       */
      postal_code: string;

      /**
       * Two-letter state code.
       */
      state: string;

      /**
       * Primary street address.
       */
      street_line_1: string;

      /**
       * Secondary street address (apartment, suite, etc.).
       */
      street_line_2?: string;
    }

    export interface NonUsResidentialAddress {
      /**
       * City name.
       */
      city: string;

      /**
       * ISO 3166-1 alpha-2 country code.
       */
      country:
        | 'AF'
        | 'AL'
        | 'DZ'
        | 'AS'
        | 'AD'
        | 'AO'
        | 'AI'
        | 'AQ'
        | 'AG'
        | 'AR'
        | 'AM'
        | 'AW'
        | 'AU'
        | 'AT'
        | 'AZ'
        | 'BS'
        | 'BH'
        | 'BD'
        | 'BB'
        | 'BY'
        | 'BE'
        | 'BZ'
        | 'BJ'
        | 'BM'
        | 'BT'
        | 'BO'
        | 'BA'
        | 'BW'
        | 'BV'
        | 'BR'
        | 'IO'
        | 'BN'
        | 'BG'
        | 'BF'
        | 'BI'
        | 'KH'
        | 'CM'
        | 'CA'
        | 'CV'
        | 'KY'
        | 'CF'
        | 'TD'
        | 'CL'
        | 'CN'
        | 'CX'
        | 'CC'
        | 'CO'
        | 'KM'
        | 'CG'
        | 'CD'
        | 'CK'
        | 'CR'
        | 'CI'
        | 'HR'
        | 'CU'
        | 'CY'
        | 'CZ'
        | 'DK'
        | 'DJ'
        | 'DM'
        | 'DO'
        | 'EC'
        | 'EG'
        | 'SV'
        | 'GQ'
        | 'ER'
        | 'EE'
        | 'ET'
        | 'FK'
        | 'FO'
        | 'FJ'
        | 'FI'
        | 'FR'
        | 'GF'
        | 'PF'
        | 'TF'
        | 'GA'
        | 'GM'
        | 'GE'
        | 'DE'
        | 'GH'
        | 'GI'
        | 'GR'
        | 'GL'
        | 'GD'
        | 'GP'
        | 'GU'
        | 'GT'
        | 'GN'
        | 'GW'
        | 'GY'
        | 'HT'
        | 'HM'
        | 'VA'
        | 'HN'
        | 'HK'
        | 'HU'
        | 'IS'
        | 'IN'
        | 'ID'
        | 'IR'
        | 'IQ'
        | 'IE'
        | 'IL'
        | 'IT'
        | 'JM'
        | 'JP'
        | 'JO'
        | 'KZ'
        | 'KE'
        | 'KI'
        | 'KP'
        | 'KR'
        | 'KW'
        | 'KG'
        | 'LA'
        | 'LV'
        | 'LB'
        | 'LS'
        | 'LR'
        | 'LY'
        | 'LI'
        | 'LT'
        | 'LU'
        | 'MO'
        | 'MG'
        | 'MW'
        | 'MY'
        | 'MV'
        | 'ML'
        | 'MT'
        | 'MH'
        | 'MQ'
        | 'MR'
        | 'MU'
        | 'YT'
        | 'MX'
        | 'FM'
        | 'MD'
        | 'MC'
        | 'MN'
        | 'MS'
        | 'MA'
        | 'MZ'
        | 'MM'
        | 'NA'
        | 'NR'
        | 'NP'
        | 'NL'
        | 'NC'
        | 'NZ'
        | 'NI'
        | 'NE'
        | 'NG'
        | 'NU'
        | 'NF'
        | 'MP'
        | 'MK'
        | 'NO'
        | 'OM'
        | 'PK'
        | 'PW'
        | 'PS'
        | 'PA'
        | 'PG'
        | 'PY'
        | 'PE'
        | 'PH'
        | 'PN'
        | 'PL'
        | 'PT'
        | 'PR'
        | 'QA'
        | 'RE'
        | 'RO'
        | 'RU'
        | 'RW'
        | 'SH'
        | 'KN'
        | 'LC'
        | 'PM'
        | 'VC'
        | 'WS'
        | 'SM'
        | 'ST'
        | 'SA'
        | 'SN'
        | 'SC'
        | 'SL'
        | 'SG'
        | 'SK'
        | 'SI'
        | 'SB'
        | 'SO'
        | 'ZA'
        | 'GS'
        | 'ES'
        | 'LK'
        | 'SD'
        | 'SR'
        | 'SJ'
        | 'SZ'
        | 'SE'
        | 'CH'
        | 'SY'
        | 'TW'
        | 'TJ'
        | 'TZ'
        | 'TH'
        | 'TL'
        | 'TG'
        | 'TK'
        | 'TO'
        | 'TT'
        | 'TN'
        | 'TR'
        | 'TM'
        | 'TC'
        | 'TV'
        | 'UG'
        | 'UA'
        | 'AE'
        | 'GB'
        | 'UM'
        | 'UY'
        | 'UZ'
        | 'VU'
        | 'VE'
        | 'VN'
        | 'VG'
        | 'VI'
        | 'WF'
        | 'EH'
        | 'YE'
        | 'ZM'
        | 'ZW'
        | 'AX'
        | 'BQ'
        | 'CW'
        | 'GG'
        | 'IM'
        | 'JE'
        | 'ME'
        | 'BL'
        | 'MF'
        | 'RS'
        | 'SX'
        | 'SS'
        | 'XK';

      /**
       * Postal or ZIP code.
       */
      postal_code: string;

      /**
       * Primary street address.
       */
      street_line_1: string;

      /**
       * Secondary street address (apartment, suite, etc.).
       */
      street_line_2?: string;
    }

    export interface UsResidentialAddress {
      /**
       * City name.
       */
      city: string;

      /**
       * ISO 3166-1 alpha-2 country code.
       */
      country: 'US';

      /**
       * Postal or ZIP code.
       */
      postal_code: string;

      /**
       * Two-letter state code.
       */
      state: string;

      /**
       * Primary street address.
       */
      street_line_1: string;

      /**
       * Secondary street address (apartment, suite, etc.).
       */
      street_line_2?: string;
    }

    export interface NonUsResidentialAddress {
      /**
       * City name.
       */
      city: string;

      /**
       * ISO 3166-1 alpha-2 country code.
       */
      country:
        | 'AF'
        | 'AL'
        | 'DZ'
        | 'AS'
        | 'AD'
        | 'AO'
        | 'AI'
        | 'AQ'
        | 'AG'
        | 'AR'
        | 'AM'
        | 'AW'
        | 'AU'
        | 'AT'
        | 'AZ'
        | 'BS'
        | 'BH'
        | 'BD'
        | 'BB'
        | 'BY'
        | 'BE'
        | 'BZ'
        | 'BJ'
        | 'BM'
        | 'BT'
        | 'BO'
        | 'BA'
        | 'BW'
        | 'BV'
        | 'BR'
        | 'IO'
        | 'BN'
        | 'BG'
        | 'BF'
        | 'BI'
        | 'KH'
        | 'CM'
        | 'CA'
        | 'CV'
        | 'KY'
        | 'CF'
        | 'TD'
        | 'CL'
        | 'CN'
        | 'CX'
        | 'CC'
        | 'CO'
        | 'KM'
        | 'CG'
        | 'CD'
        | 'CK'
        | 'CR'
        | 'CI'
        | 'HR'
        | 'CU'
        | 'CY'
        | 'CZ'
        | 'DK'
        | 'DJ'
        | 'DM'
        | 'DO'
        | 'EC'
        | 'EG'
        | 'SV'
        | 'GQ'
        | 'ER'
        | 'EE'
        | 'ET'
        | 'FK'
        | 'FO'
        | 'FJ'
        | 'FI'
        | 'FR'
        | 'GF'
        | 'PF'
        | 'TF'
        | 'GA'
        | 'GM'
        | 'GE'
        | 'DE'
        | 'GH'
        | 'GI'
        | 'GR'
        | 'GL'
        | 'GD'
        | 'GP'
        | 'GU'
        | 'GT'
        | 'GN'
        | 'GW'
        | 'GY'
        | 'HT'
        | 'HM'
        | 'VA'
        | 'HN'
        | 'HK'
        | 'HU'
        | 'IS'
        | 'IN'
        | 'ID'
        | 'IR'
        | 'IQ'
        | 'IE'
        | 'IL'
        | 'IT'
        | 'JM'
        | 'JP'
        | 'JO'
        | 'KZ'
        | 'KE'
        | 'KI'
        | 'KP'
        | 'KR'
        | 'KW'
        | 'KG'
        | 'LA'
        | 'LV'
        | 'LB'
        | 'LS'
        | 'LR'
        | 'LY'
        | 'LI'
        | 'LT'
        | 'LU'
        | 'MO'
        | 'MG'
        | 'MW'
        | 'MY'
        | 'MV'
        | 'ML'
        | 'MT'
        | 'MH'
        | 'MQ'
        | 'MR'
        | 'MU'
        | 'YT'
        | 'MX'
        | 'FM'
        | 'MD'
        | 'MC'
        | 'MN'
        | 'MS'
        | 'MA'
        | 'MZ'
        | 'MM'
        | 'NA'
        | 'NR'
        | 'NP'
        | 'NL'
        | 'NC'
        | 'NZ'
        | 'NI'
        | 'NE'
        | 'NG'
        | 'NU'
        | 'NF'
        | 'MP'
        | 'MK'
        | 'NO'
        | 'OM'
        | 'PK'
        | 'PW'
        | 'PS'
        | 'PA'
        | 'PG'
        | 'PY'
        | 'PE'
        | 'PH'
        | 'PN'
        | 'PL'
        | 'PT'
        | 'PR'
        | 'QA'
        | 'RE'
        | 'RO'
        | 'RU'
        | 'RW'
        | 'SH'
        | 'KN'
        | 'LC'
        | 'PM'
        | 'VC'
        | 'WS'
        | 'SM'
        | 'ST'
        | 'SA'
        | 'SN'
        | 'SC'
        | 'SL'
        | 'SG'
        | 'SK'
        | 'SI'
        | 'SB'
        | 'SO'
        | 'ZA'
        | 'GS'
        | 'ES'
        | 'LK'
        | 'SD'
        | 'SR'
        | 'SJ'
        | 'SZ'
        | 'SE'
        | 'CH'
        | 'SY'
        | 'TW'
        | 'TJ'
        | 'TZ'
        | 'TH'
        | 'TL'
        | 'TG'
        | 'TK'
        | 'TO'
        | 'TT'
        | 'TN'
        | 'TR'
        | 'TM'
        | 'TC'
        | 'TV'
        | 'UG'
        | 'UA'
        | 'AE'
        | 'GB'
        | 'UM'
        | 'UY'
        | 'UZ'
        | 'VU'
        | 'VE'
        | 'VN'
        | 'VG'
        | 'VI'
        | 'WF'
        | 'EH'
        | 'YE'
        | 'ZM'
        | 'ZW'
        | 'AX'
        | 'BQ'
        | 'CW'
        | 'GG'
        | 'IM'
        | 'JE'
        | 'ME'
        | 'BL'
        | 'MF'
        | 'RS'
        | 'SX'
        | 'SS'
        | 'XK';

      /**
       * Postal or ZIP code.
       */
      postal_code: string;

      /**
       * Primary street address.
       */
      street_line_1: string;

      /**
       * Secondary street address (apartment, suite, etc.).
       */
      street_line_2?: string;
    }

    export interface EinIdentification {
      type: 'ein';

      value: string;
    }

    export interface SsnIdentification {
      type: 'ssn';

      value: string;
    }
  }
}

export interface AccountHolderUpdateParams {
  /**
   * New beneficiary details replacing the current values.
   */
  beneficiary_data:
    | AccountHolderUpdateParams.UsBeneficiaryData
    | AccountHolderUpdateParams.NonUsBeneficiaryData
    | AccountHolderUpdateParams.BusinessBeneficiaryData;
}

export namespace AccountHolderUpdateParams {
  export interface UsBeneficiaryData {
    /**
     * ISO 3166-1 alpha-2 country code of citizenship.
     */
    country_of_citizenship: 'US';

    /**
     * Date of birth as an ISO 8601 calendar date (YYYY-MM-DD).
     */
    date_of_birth: string;

    /**
     * Government-issued identification with type: "ssn" (Social Security Number,
     * format ###-##-####) or "itin" (Individual Taxpayer ID, format 9##-##-####).
     */
    identification: UsBeneficiaryData.SsnIdentification | UsBeneficiaryData.ItinIdentification;

    /**
     * Full legal name of the account holder.
     */
    legal_name: string;

    /**
     * Residential address of the account holder.
     */
    residential_address: UsBeneficiaryData.UsResidentialAddress | UsBeneficiaryData.NonUsResidentialAddress;
  }

  export namespace UsBeneficiaryData {
    export interface SsnIdentification {
      type: 'ssn';

      value: string;
    }

    export interface ItinIdentification {
      type: 'itin';

      value: string;
    }

    export interface UsResidentialAddress {
      /**
       * City name.
       */
      city: string;

      /**
       * ISO 3166-1 alpha-2 country code.
       */
      country: 'US';

      /**
       * Postal or ZIP code.
       */
      postal_code: string;

      /**
       * Two-letter state code.
       */
      state: string;

      /**
       * Primary street address.
       */
      street_line_1: string;

      /**
       * Secondary street address (apartment, suite, etc.).
       */
      street_line_2?: string;
    }

    export interface NonUsResidentialAddress {
      /**
       * City name.
       */
      city: string;

      /**
       * ISO 3166-1 alpha-2 country code.
       */
      country:
        | 'AF'
        | 'AL'
        | 'DZ'
        | 'AS'
        | 'AD'
        | 'AO'
        | 'AI'
        | 'AQ'
        | 'AG'
        | 'AR'
        | 'AM'
        | 'AW'
        | 'AU'
        | 'AT'
        | 'AZ'
        | 'BS'
        | 'BH'
        | 'BD'
        | 'BB'
        | 'BY'
        | 'BE'
        | 'BZ'
        | 'BJ'
        | 'BM'
        | 'BT'
        | 'BO'
        | 'BA'
        | 'BW'
        | 'BV'
        | 'BR'
        | 'IO'
        | 'BN'
        | 'BG'
        | 'BF'
        | 'BI'
        | 'KH'
        | 'CM'
        | 'CA'
        | 'CV'
        | 'KY'
        | 'CF'
        | 'TD'
        | 'CL'
        | 'CN'
        | 'CX'
        | 'CC'
        | 'CO'
        | 'KM'
        | 'CG'
        | 'CD'
        | 'CK'
        | 'CR'
        | 'CI'
        | 'HR'
        | 'CU'
        | 'CY'
        | 'CZ'
        | 'DK'
        | 'DJ'
        | 'DM'
        | 'DO'
        | 'EC'
        | 'EG'
        | 'SV'
        | 'GQ'
        | 'ER'
        | 'EE'
        | 'ET'
        | 'FK'
        | 'FO'
        | 'FJ'
        | 'FI'
        | 'FR'
        | 'GF'
        | 'PF'
        | 'TF'
        | 'GA'
        | 'GM'
        | 'GE'
        | 'DE'
        | 'GH'
        | 'GI'
        | 'GR'
        | 'GL'
        | 'GD'
        | 'GP'
        | 'GU'
        | 'GT'
        | 'GN'
        | 'GW'
        | 'GY'
        | 'HT'
        | 'HM'
        | 'VA'
        | 'HN'
        | 'HK'
        | 'HU'
        | 'IS'
        | 'IN'
        | 'ID'
        | 'IR'
        | 'IQ'
        | 'IE'
        | 'IL'
        | 'IT'
        | 'JM'
        | 'JP'
        | 'JO'
        | 'KZ'
        | 'KE'
        | 'KI'
        | 'KP'
        | 'KR'
        | 'KW'
        | 'KG'
        | 'LA'
        | 'LV'
        | 'LB'
        | 'LS'
        | 'LR'
        | 'LY'
        | 'LI'
        | 'LT'
        | 'LU'
        | 'MO'
        | 'MG'
        | 'MW'
        | 'MY'
        | 'MV'
        | 'ML'
        | 'MT'
        | 'MH'
        | 'MQ'
        | 'MR'
        | 'MU'
        | 'YT'
        | 'MX'
        | 'FM'
        | 'MD'
        | 'MC'
        | 'MN'
        | 'MS'
        | 'MA'
        | 'MZ'
        | 'MM'
        | 'NA'
        | 'NR'
        | 'NP'
        | 'NL'
        | 'NC'
        | 'NZ'
        | 'NI'
        | 'NE'
        | 'NG'
        | 'NU'
        | 'NF'
        | 'MP'
        | 'MK'
        | 'NO'
        | 'OM'
        | 'PK'
        | 'PW'
        | 'PS'
        | 'PA'
        | 'PG'
        | 'PY'
        | 'PE'
        | 'PH'
        | 'PN'
        | 'PL'
        | 'PT'
        | 'PR'
        | 'QA'
        | 'RE'
        | 'RO'
        | 'RU'
        | 'RW'
        | 'SH'
        | 'KN'
        | 'LC'
        | 'PM'
        | 'VC'
        | 'WS'
        | 'SM'
        | 'ST'
        | 'SA'
        | 'SN'
        | 'SC'
        | 'SL'
        | 'SG'
        | 'SK'
        | 'SI'
        | 'SB'
        | 'SO'
        | 'ZA'
        | 'GS'
        | 'ES'
        | 'LK'
        | 'SD'
        | 'SR'
        | 'SJ'
        | 'SZ'
        | 'SE'
        | 'CH'
        | 'SY'
        | 'TW'
        | 'TJ'
        | 'TZ'
        | 'TH'
        | 'TL'
        | 'TG'
        | 'TK'
        | 'TO'
        | 'TT'
        | 'TN'
        | 'TR'
        | 'TM'
        | 'TC'
        | 'TV'
        | 'UG'
        | 'UA'
        | 'AE'
        | 'GB'
        | 'UM'
        | 'UY'
        | 'UZ'
        | 'VU'
        | 'VE'
        | 'VN'
        | 'VG'
        | 'VI'
        | 'WF'
        | 'EH'
        | 'YE'
        | 'ZM'
        | 'ZW'
        | 'AX'
        | 'BQ'
        | 'CW'
        | 'GG'
        | 'IM'
        | 'JE'
        | 'ME'
        | 'BL'
        | 'MF'
        | 'RS'
        | 'SX'
        | 'SS'
        | 'XK';

      /**
       * Postal or ZIP code.
       */
      postal_code: string;

      /**
       * Primary street address.
       */
      street_line_1: string;

      /**
       * Secondary street address (apartment, suite, etc.).
       */
      street_line_2?: string;
    }
  }

  export interface NonUsBeneficiaryData {
    /**
     * ISO 3166-1 alpha-2 country code of citizenship.
     */
    country_of_citizenship:
      | 'AF'
      | 'AL'
      | 'DZ'
      | 'AS'
      | 'AD'
      | 'AO'
      | 'AI'
      | 'AQ'
      | 'AG'
      | 'AR'
      | 'AM'
      | 'AW'
      | 'AU'
      | 'AT'
      | 'AZ'
      | 'BS'
      | 'BH'
      | 'BD'
      | 'BB'
      | 'BY'
      | 'BE'
      | 'BZ'
      | 'BJ'
      | 'BM'
      | 'BT'
      | 'BO'
      | 'BA'
      | 'BW'
      | 'BV'
      | 'BR'
      | 'IO'
      | 'BN'
      | 'BG'
      | 'BF'
      | 'BI'
      | 'KH'
      | 'CM'
      | 'CA'
      | 'CV'
      | 'KY'
      | 'CF'
      | 'TD'
      | 'CL'
      | 'CN'
      | 'CX'
      | 'CC'
      | 'CO'
      | 'KM'
      | 'CG'
      | 'CD'
      | 'CK'
      | 'CR'
      | 'CI'
      | 'HR'
      | 'CU'
      | 'CY'
      | 'CZ'
      | 'DK'
      | 'DJ'
      | 'DM'
      | 'DO'
      | 'EC'
      | 'EG'
      | 'SV'
      | 'GQ'
      | 'ER'
      | 'EE'
      | 'ET'
      | 'FK'
      | 'FO'
      | 'FJ'
      | 'FI'
      | 'FR'
      | 'GF'
      | 'PF'
      | 'TF'
      | 'GA'
      | 'GM'
      | 'GE'
      | 'DE'
      | 'GH'
      | 'GI'
      | 'GR'
      | 'GL'
      | 'GD'
      | 'GP'
      | 'GU'
      | 'GT'
      | 'GN'
      | 'GW'
      | 'GY'
      | 'HT'
      | 'HM'
      | 'VA'
      | 'HN'
      | 'HK'
      | 'HU'
      | 'IS'
      | 'IN'
      | 'ID'
      | 'IR'
      | 'IQ'
      | 'IE'
      | 'IL'
      | 'IT'
      | 'JM'
      | 'JP'
      | 'JO'
      | 'KZ'
      | 'KE'
      | 'KI'
      | 'KP'
      | 'KR'
      | 'KW'
      | 'KG'
      | 'LA'
      | 'LV'
      | 'LB'
      | 'LS'
      | 'LR'
      | 'LY'
      | 'LI'
      | 'LT'
      | 'LU'
      | 'MO'
      | 'MG'
      | 'MW'
      | 'MY'
      | 'MV'
      | 'ML'
      | 'MT'
      | 'MH'
      | 'MQ'
      | 'MR'
      | 'MU'
      | 'YT'
      | 'MX'
      | 'FM'
      | 'MD'
      | 'MC'
      | 'MN'
      | 'MS'
      | 'MA'
      | 'MZ'
      | 'MM'
      | 'NA'
      | 'NR'
      | 'NP'
      | 'NL'
      | 'NC'
      | 'NZ'
      | 'NI'
      | 'NE'
      | 'NG'
      | 'NU'
      | 'NF'
      | 'MP'
      | 'MK'
      | 'NO'
      | 'OM'
      | 'PK'
      | 'PW'
      | 'PS'
      | 'PA'
      | 'PG'
      | 'PY'
      | 'PE'
      | 'PH'
      | 'PN'
      | 'PL'
      | 'PT'
      | 'PR'
      | 'QA'
      | 'RE'
      | 'RO'
      | 'RU'
      | 'RW'
      | 'SH'
      | 'KN'
      | 'LC'
      | 'PM'
      | 'VC'
      | 'WS'
      | 'SM'
      | 'ST'
      | 'SA'
      | 'SN'
      | 'SC'
      | 'SL'
      | 'SG'
      | 'SK'
      | 'SI'
      | 'SB'
      | 'SO'
      | 'ZA'
      | 'GS'
      | 'ES'
      | 'LK'
      | 'SD'
      | 'SR'
      | 'SJ'
      | 'SZ'
      | 'SE'
      | 'CH'
      | 'SY'
      | 'TW'
      | 'TJ'
      | 'TZ'
      | 'TH'
      | 'TL'
      | 'TG'
      | 'TK'
      | 'TO'
      | 'TT'
      | 'TN'
      | 'TR'
      | 'TM'
      | 'TC'
      | 'TV'
      | 'UG'
      | 'UA'
      | 'AE'
      | 'GB'
      | 'UM'
      | 'UY'
      | 'UZ'
      | 'VU'
      | 'VE'
      | 'VN'
      | 'VG'
      | 'VI'
      | 'WF'
      | 'EH'
      | 'YE'
      | 'ZM'
      | 'ZW'
      | 'AX'
      | 'BQ'
      | 'CW'
      | 'GG'
      | 'IM'
      | 'JE'
      | 'ME'
      | 'BL'
      | 'MF'
      | 'RS'
      | 'SX'
      | 'SS'
      | 'XK';

    /**
     * Date of birth as an ISO 8601 calendar date (YYYY-MM-DD).
     */
    date_of_birth: string;

    /**
     * Government-issued identification with type: "id" (generic government-issued ID).
     */
    identification: NonUsBeneficiaryData.Identification;

    /**
     * Full legal name of the account holder.
     */
    legal_name: string;

    /**
     * Residential address of the account holder.
     */
    residential_address:
      | NonUsBeneficiaryData.UsResidentialAddress
      | NonUsBeneficiaryData.NonUsResidentialAddress;
  }

  export namespace NonUsBeneficiaryData {
    /**
     * Government-issued identification with type: "id" (generic government-issued ID).
     */
    export interface Identification {
      type: 'id';

      value: string;
    }

    export interface UsResidentialAddress {
      /**
       * City name.
       */
      city: string;

      /**
       * ISO 3166-1 alpha-2 country code.
       */
      country: 'US';

      /**
       * Postal or ZIP code.
       */
      postal_code: string;

      /**
       * Two-letter state code.
       */
      state: string;

      /**
       * Primary street address.
       */
      street_line_1: string;

      /**
       * Secondary street address (apartment, suite, etc.).
       */
      street_line_2?: string;
    }

    export interface NonUsResidentialAddress {
      /**
       * City name.
       */
      city: string;

      /**
       * ISO 3166-1 alpha-2 country code.
       */
      country:
        | 'AF'
        | 'AL'
        | 'DZ'
        | 'AS'
        | 'AD'
        | 'AO'
        | 'AI'
        | 'AQ'
        | 'AG'
        | 'AR'
        | 'AM'
        | 'AW'
        | 'AU'
        | 'AT'
        | 'AZ'
        | 'BS'
        | 'BH'
        | 'BD'
        | 'BB'
        | 'BY'
        | 'BE'
        | 'BZ'
        | 'BJ'
        | 'BM'
        | 'BT'
        | 'BO'
        | 'BA'
        | 'BW'
        | 'BV'
        | 'BR'
        | 'IO'
        | 'BN'
        | 'BG'
        | 'BF'
        | 'BI'
        | 'KH'
        | 'CM'
        | 'CA'
        | 'CV'
        | 'KY'
        | 'CF'
        | 'TD'
        | 'CL'
        | 'CN'
        | 'CX'
        | 'CC'
        | 'CO'
        | 'KM'
        | 'CG'
        | 'CD'
        | 'CK'
        | 'CR'
        | 'CI'
        | 'HR'
        | 'CU'
        | 'CY'
        | 'CZ'
        | 'DK'
        | 'DJ'
        | 'DM'
        | 'DO'
        | 'EC'
        | 'EG'
        | 'SV'
        | 'GQ'
        | 'ER'
        | 'EE'
        | 'ET'
        | 'FK'
        | 'FO'
        | 'FJ'
        | 'FI'
        | 'FR'
        | 'GF'
        | 'PF'
        | 'TF'
        | 'GA'
        | 'GM'
        | 'GE'
        | 'DE'
        | 'GH'
        | 'GI'
        | 'GR'
        | 'GL'
        | 'GD'
        | 'GP'
        | 'GU'
        | 'GT'
        | 'GN'
        | 'GW'
        | 'GY'
        | 'HT'
        | 'HM'
        | 'VA'
        | 'HN'
        | 'HK'
        | 'HU'
        | 'IS'
        | 'IN'
        | 'ID'
        | 'IR'
        | 'IQ'
        | 'IE'
        | 'IL'
        | 'IT'
        | 'JM'
        | 'JP'
        | 'JO'
        | 'KZ'
        | 'KE'
        | 'KI'
        | 'KP'
        | 'KR'
        | 'KW'
        | 'KG'
        | 'LA'
        | 'LV'
        | 'LB'
        | 'LS'
        | 'LR'
        | 'LY'
        | 'LI'
        | 'LT'
        | 'LU'
        | 'MO'
        | 'MG'
        | 'MW'
        | 'MY'
        | 'MV'
        | 'ML'
        | 'MT'
        | 'MH'
        | 'MQ'
        | 'MR'
        | 'MU'
        | 'YT'
        | 'MX'
        | 'FM'
        | 'MD'
        | 'MC'
        | 'MN'
        | 'MS'
        | 'MA'
        | 'MZ'
        | 'MM'
        | 'NA'
        | 'NR'
        | 'NP'
        | 'NL'
        | 'NC'
        | 'NZ'
        | 'NI'
        | 'NE'
        | 'NG'
        | 'NU'
        | 'NF'
        | 'MP'
        | 'MK'
        | 'NO'
        | 'OM'
        | 'PK'
        | 'PW'
        | 'PS'
        | 'PA'
        | 'PG'
        | 'PY'
        | 'PE'
        | 'PH'
        | 'PN'
        | 'PL'
        | 'PT'
        | 'PR'
        | 'QA'
        | 'RE'
        | 'RO'
        | 'RU'
        | 'RW'
        | 'SH'
        | 'KN'
        | 'LC'
        | 'PM'
        | 'VC'
        | 'WS'
        | 'SM'
        | 'ST'
        | 'SA'
        | 'SN'
        | 'SC'
        | 'SL'
        | 'SG'
        | 'SK'
        | 'SI'
        | 'SB'
        | 'SO'
        | 'ZA'
        | 'GS'
        | 'ES'
        | 'LK'
        | 'SD'
        | 'SR'
        | 'SJ'
        | 'SZ'
        | 'SE'
        | 'CH'
        | 'SY'
        | 'TW'
        | 'TJ'
        | 'TZ'
        | 'TH'
        | 'TL'
        | 'TG'
        | 'TK'
        | 'TO'
        | 'TT'
        | 'TN'
        | 'TR'
        | 'TM'
        | 'TC'
        | 'TV'
        | 'UG'
        | 'UA'
        | 'AE'
        | 'GB'
        | 'UM'
        | 'UY'
        | 'UZ'
        | 'VU'
        | 'VE'
        | 'VN'
        | 'VG'
        | 'VI'
        | 'WF'
        | 'EH'
        | 'YE'
        | 'ZM'
        | 'ZW'
        | 'AX'
        | 'BQ'
        | 'CW'
        | 'GG'
        | 'IM'
        | 'JE'
        | 'ME'
        | 'BL'
        | 'MF'
        | 'RS'
        | 'SX'
        | 'SS'
        | 'XK';

      /**
       * Postal or ZIP code.
       */
      postal_code: string;

      /**
       * Primary street address.
       */
      street_line_1: string;

      /**
       * Secondary street address (apartment, suite, etc.).
       */
      street_line_2?: string;
    }
  }

  export interface BusinessBeneficiaryData {
    /**
     * Beneficial owners of the business. At least one required.
     */
    beneficial_owners: Array<
      BusinessBeneficiaryData.UsBeneficiaryData | BusinessBeneficiaryData.NonUsBeneficiaryData
    >;

    /**
     * Individual with primary responsibility for controlling, managing, or directing
     * the business.
     */
    control_person: BusinessBeneficiaryData.UnionMember0 | BusinessBeneficiaryData.UnionMember1;

    /**
     * ISO 3166-1 alpha-2 country code where the business is incorporated.
     */
    country_of_incorporation:
      | 'AF'
      | 'AL'
      | 'DZ'
      | 'AS'
      | 'AD'
      | 'AO'
      | 'AI'
      | 'AQ'
      | 'AG'
      | 'AR'
      | 'AM'
      | 'AW'
      | 'AU'
      | 'AT'
      | 'AZ'
      | 'BS'
      | 'BH'
      | 'BD'
      | 'BB'
      | 'BY'
      | 'BE'
      | 'BZ'
      | 'BJ'
      | 'BM'
      | 'BT'
      | 'BO'
      | 'BA'
      | 'BW'
      | 'BV'
      | 'BR'
      | 'IO'
      | 'BN'
      | 'BG'
      | 'BF'
      | 'BI'
      | 'KH'
      | 'CM'
      | 'CA'
      | 'CV'
      | 'KY'
      | 'CF'
      | 'TD'
      | 'CL'
      | 'CN'
      | 'CX'
      | 'CC'
      | 'CO'
      | 'KM'
      | 'CG'
      | 'CD'
      | 'CK'
      | 'CR'
      | 'CI'
      | 'HR'
      | 'CU'
      | 'CY'
      | 'CZ'
      | 'DK'
      | 'DJ'
      | 'DM'
      | 'DO'
      | 'EC'
      | 'EG'
      | 'SV'
      | 'GQ'
      | 'ER'
      | 'EE'
      | 'ET'
      | 'FK'
      | 'FO'
      | 'FJ'
      | 'FI'
      | 'FR'
      | 'GF'
      | 'PF'
      | 'TF'
      | 'GA'
      | 'GM'
      | 'GE'
      | 'DE'
      | 'GH'
      | 'GI'
      | 'GR'
      | 'GL'
      | 'GD'
      | 'GP'
      | 'GU'
      | 'GT'
      | 'GN'
      | 'GW'
      | 'GY'
      | 'HT'
      | 'HM'
      | 'VA'
      | 'HN'
      | 'HK'
      | 'HU'
      | 'IS'
      | 'IN'
      | 'ID'
      | 'IR'
      | 'IQ'
      | 'IE'
      | 'IL'
      | 'IT'
      | 'JM'
      | 'JP'
      | 'JO'
      | 'KZ'
      | 'KE'
      | 'KI'
      | 'KP'
      | 'KR'
      | 'KW'
      | 'KG'
      | 'LA'
      | 'LV'
      | 'LB'
      | 'LS'
      | 'LR'
      | 'LY'
      | 'LI'
      | 'LT'
      | 'LU'
      | 'MO'
      | 'MG'
      | 'MW'
      | 'MY'
      | 'MV'
      | 'ML'
      | 'MT'
      | 'MH'
      | 'MQ'
      | 'MR'
      | 'MU'
      | 'YT'
      | 'MX'
      | 'FM'
      | 'MD'
      | 'MC'
      | 'MN'
      | 'MS'
      | 'MA'
      | 'MZ'
      | 'MM'
      | 'NA'
      | 'NR'
      | 'NP'
      | 'NL'
      | 'NC'
      | 'NZ'
      | 'NI'
      | 'NE'
      | 'NG'
      | 'NU'
      | 'NF'
      | 'MP'
      | 'MK'
      | 'NO'
      | 'OM'
      | 'PK'
      | 'PW'
      | 'PS'
      | 'PA'
      | 'PG'
      | 'PY'
      | 'PE'
      | 'PH'
      | 'PN'
      | 'PL'
      | 'PT'
      | 'PR'
      | 'QA'
      | 'RE'
      | 'RO'
      | 'RU'
      | 'RW'
      | 'SH'
      | 'KN'
      | 'LC'
      | 'PM'
      | 'VC'
      | 'WS'
      | 'SM'
      | 'ST'
      | 'SA'
      | 'SN'
      | 'SC'
      | 'SL'
      | 'SG'
      | 'SK'
      | 'SI'
      | 'SB'
      | 'SO'
      | 'ZA'
      | 'GS'
      | 'ES'
      | 'LK'
      | 'SD'
      | 'SR'
      | 'SJ'
      | 'SZ'
      | 'SE'
      | 'CH'
      | 'SY'
      | 'TW'
      | 'TJ'
      | 'TZ'
      | 'TH'
      | 'TL'
      | 'TG'
      | 'TK'
      | 'TO'
      | 'TT'
      | 'TN'
      | 'TR'
      | 'TM'
      | 'TC'
      | 'TV'
      | 'UG'
      | 'UA'
      | 'AE'
      | 'GB'
      | 'US'
      | 'UM'
      | 'UY'
      | 'UZ'
      | 'VU'
      | 'VE'
      | 'VN'
      | 'VG'
      | 'VI'
      | 'WF'
      | 'EH'
      | 'YE'
      | 'ZM'
      | 'ZW'
      | 'AX'
      | 'BQ'
      | 'CW'
      | 'GG'
      | 'IM'
      | 'JE'
      | 'ME'
      | 'BL'
      | 'MF'
      | 'RS'
      | 'SX'
      | 'SS'
      | 'XK';

    /**
     * Full legal name of the business.
     */
    legal_business_name: string;

    /**
     * Physical operating address of the business.
     */
    physical_address:
      | BusinessBeneficiaryData.UsResidentialAddress
      | BusinessBeneficiaryData.NonUsResidentialAddress;

    /**
     * Registered legal address of the business.
     */
    registered_address:
      | BusinessBeneficiaryData.UsResidentialAddress
      | BusinessBeneficiaryData.NonUsResidentialAddress;

    /**
     * Business registration number: type "ein" (Employer Identification Number, format
     * ##-#######) or "ssn" (Social Security Number, format ###-##-####).
     */
    registration_number:
      | BusinessBeneficiaryData.EinIdentification
      | BusinessBeneficiaryData.SsnIdentification;

    /**
     * State or subdivision where the business is incorporated.
     */
    state_of_incorporation: string;

    /**
     * Four-digit year the business was incorporated.
     */
    year_of_incorporation: number;

    /**
     * Trade name the business operates under, if different from the legal name.
     */
    doing_business_as?: string;
  }

  export namespace BusinessBeneficiaryData {
    export interface UsBeneficiaryData {
      /**
       * ISO 3166-1 alpha-2 country code of citizenship.
       */
      country_of_citizenship: 'US';

      /**
       * Date of birth as an ISO 8601 calendar date (YYYY-MM-DD).
       */
      date_of_birth: string;

      /**
       * Government-issued identification with type: "ssn" (Social Security Number,
       * format ###-##-####) or "itin" (Individual Taxpayer ID, format 9##-##-####).
       */
      identification: UsBeneficiaryData.SsnIdentification | UsBeneficiaryData.ItinIdentification;

      /**
       * Full legal name of the account holder.
       */
      legal_name: string;

      /**
       * Residential address of the account holder.
       */
      residential_address: UsBeneficiaryData.UsResidentialAddress | UsBeneficiaryData.NonUsResidentialAddress;
    }

    export namespace UsBeneficiaryData {
      export interface SsnIdentification {
        type: 'ssn';

        value: string;
      }

      export interface ItinIdentification {
        type: 'itin';

        value: string;
      }

      export interface UsResidentialAddress {
        /**
         * City name.
         */
        city: string;

        /**
         * ISO 3166-1 alpha-2 country code.
         */
        country: 'US';

        /**
         * Postal or ZIP code.
         */
        postal_code: string;

        /**
         * Two-letter state code.
         */
        state: string;

        /**
         * Primary street address.
         */
        street_line_1: string;

        /**
         * Secondary street address (apartment, suite, etc.).
         */
        street_line_2?: string;
      }

      export interface NonUsResidentialAddress {
        /**
         * City name.
         */
        city: string;

        /**
         * ISO 3166-1 alpha-2 country code.
         */
        country:
          | 'AF'
          | 'AL'
          | 'DZ'
          | 'AS'
          | 'AD'
          | 'AO'
          | 'AI'
          | 'AQ'
          | 'AG'
          | 'AR'
          | 'AM'
          | 'AW'
          | 'AU'
          | 'AT'
          | 'AZ'
          | 'BS'
          | 'BH'
          | 'BD'
          | 'BB'
          | 'BY'
          | 'BE'
          | 'BZ'
          | 'BJ'
          | 'BM'
          | 'BT'
          | 'BO'
          | 'BA'
          | 'BW'
          | 'BV'
          | 'BR'
          | 'IO'
          | 'BN'
          | 'BG'
          | 'BF'
          | 'BI'
          | 'KH'
          | 'CM'
          | 'CA'
          | 'CV'
          | 'KY'
          | 'CF'
          | 'TD'
          | 'CL'
          | 'CN'
          | 'CX'
          | 'CC'
          | 'CO'
          | 'KM'
          | 'CG'
          | 'CD'
          | 'CK'
          | 'CR'
          | 'CI'
          | 'HR'
          | 'CU'
          | 'CY'
          | 'CZ'
          | 'DK'
          | 'DJ'
          | 'DM'
          | 'DO'
          | 'EC'
          | 'EG'
          | 'SV'
          | 'GQ'
          | 'ER'
          | 'EE'
          | 'ET'
          | 'FK'
          | 'FO'
          | 'FJ'
          | 'FI'
          | 'FR'
          | 'GF'
          | 'PF'
          | 'TF'
          | 'GA'
          | 'GM'
          | 'GE'
          | 'DE'
          | 'GH'
          | 'GI'
          | 'GR'
          | 'GL'
          | 'GD'
          | 'GP'
          | 'GU'
          | 'GT'
          | 'GN'
          | 'GW'
          | 'GY'
          | 'HT'
          | 'HM'
          | 'VA'
          | 'HN'
          | 'HK'
          | 'HU'
          | 'IS'
          | 'IN'
          | 'ID'
          | 'IR'
          | 'IQ'
          | 'IE'
          | 'IL'
          | 'IT'
          | 'JM'
          | 'JP'
          | 'JO'
          | 'KZ'
          | 'KE'
          | 'KI'
          | 'KP'
          | 'KR'
          | 'KW'
          | 'KG'
          | 'LA'
          | 'LV'
          | 'LB'
          | 'LS'
          | 'LR'
          | 'LY'
          | 'LI'
          | 'LT'
          | 'LU'
          | 'MO'
          | 'MG'
          | 'MW'
          | 'MY'
          | 'MV'
          | 'ML'
          | 'MT'
          | 'MH'
          | 'MQ'
          | 'MR'
          | 'MU'
          | 'YT'
          | 'MX'
          | 'FM'
          | 'MD'
          | 'MC'
          | 'MN'
          | 'MS'
          | 'MA'
          | 'MZ'
          | 'MM'
          | 'NA'
          | 'NR'
          | 'NP'
          | 'NL'
          | 'NC'
          | 'NZ'
          | 'NI'
          | 'NE'
          | 'NG'
          | 'NU'
          | 'NF'
          | 'MP'
          | 'MK'
          | 'NO'
          | 'OM'
          | 'PK'
          | 'PW'
          | 'PS'
          | 'PA'
          | 'PG'
          | 'PY'
          | 'PE'
          | 'PH'
          | 'PN'
          | 'PL'
          | 'PT'
          | 'PR'
          | 'QA'
          | 'RE'
          | 'RO'
          | 'RU'
          | 'RW'
          | 'SH'
          | 'KN'
          | 'LC'
          | 'PM'
          | 'VC'
          | 'WS'
          | 'SM'
          | 'ST'
          | 'SA'
          | 'SN'
          | 'SC'
          | 'SL'
          | 'SG'
          | 'SK'
          | 'SI'
          | 'SB'
          | 'SO'
          | 'ZA'
          | 'GS'
          | 'ES'
          | 'LK'
          | 'SD'
          | 'SR'
          | 'SJ'
          | 'SZ'
          | 'SE'
          | 'CH'
          | 'SY'
          | 'TW'
          | 'TJ'
          | 'TZ'
          | 'TH'
          | 'TL'
          | 'TG'
          | 'TK'
          | 'TO'
          | 'TT'
          | 'TN'
          | 'TR'
          | 'TM'
          | 'TC'
          | 'TV'
          | 'UG'
          | 'UA'
          | 'AE'
          | 'GB'
          | 'UM'
          | 'UY'
          | 'UZ'
          | 'VU'
          | 'VE'
          | 'VN'
          | 'VG'
          | 'VI'
          | 'WF'
          | 'EH'
          | 'YE'
          | 'ZM'
          | 'ZW'
          | 'AX'
          | 'BQ'
          | 'CW'
          | 'GG'
          | 'IM'
          | 'JE'
          | 'ME'
          | 'BL'
          | 'MF'
          | 'RS'
          | 'SX'
          | 'SS'
          | 'XK';

        /**
         * Postal or ZIP code.
         */
        postal_code: string;

        /**
         * Primary street address.
         */
        street_line_1: string;

        /**
         * Secondary street address (apartment, suite, etc.).
         */
        street_line_2?: string;
      }
    }

    export interface NonUsBeneficiaryData {
      /**
       * ISO 3166-1 alpha-2 country code of citizenship.
       */
      country_of_citizenship:
        | 'AF'
        | 'AL'
        | 'DZ'
        | 'AS'
        | 'AD'
        | 'AO'
        | 'AI'
        | 'AQ'
        | 'AG'
        | 'AR'
        | 'AM'
        | 'AW'
        | 'AU'
        | 'AT'
        | 'AZ'
        | 'BS'
        | 'BH'
        | 'BD'
        | 'BB'
        | 'BY'
        | 'BE'
        | 'BZ'
        | 'BJ'
        | 'BM'
        | 'BT'
        | 'BO'
        | 'BA'
        | 'BW'
        | 'BV'
        | 'BR'
        | 'IO'
        | 'BN'
        | 'BG'
        | 'BF'
        | 'BI'
        | 'KH'
        | 'CM'
        | 'CA'
        | 'CV'
        | 'KY'
        | 'CF'
        | 'TD'
        | 'CL'
        | 'CN'
        | 'CX'
        | 'CC'
        | 'CO'
        | 'KM'
        | 'CG'
        | 'CD'
        | 'CK'
        | 'CR'
        | 'CI'
        | 'HR'
        | 'CU'
        | 'CY'
        | 'CZ'
        | 'DK'
        | 'DJ'
        | 'DM'
        | 'DO'
        | 'EC'
        | 'EG'
        | 'SV'
        | 'GQ'
        | 'ER'
        | 'EE'
        | 'ET'
        | 'FK'
        | 'FO'
        | 'FJ'
        | 'FI'
        | 'FR'
        | 'GF'
        | 'PF'
        | 'TF'
        | 'GA'
        | 'GM'
        | 'GE'
        | 'DE'
        | 'GH'
        | 'GI'
        | 'GR'
        | 'GL'
        | 'GD'
        | 'GP'
        | 'GU'
        | 'GT'
        | 'GN'
        | 'GW'
        | 'GY'
        | 'HT'
        | 'HM'
        | 'VA'
        | 'HN'
        | 'HK'
        | 'HU'
        | 'IS'
        | 'IN'
        | 'ID'
        | 'IR'
        | 'IQ'
        | 'IE'
        | 'IL'
        | 'IT'
        | 'JM'
        | 'JP'
        | 'JO'
        | 'KZ'
        | 'KE'
        | 'KI'
        | 'KP'
        | 'KR'
        | 'KW'
        | 'KG'
        | 'LA'
        | 'LV'
        | 'LB'
        | 'LS'
        | 'LR'
        | 'LY'
        | 'LI'
        | 'LT'
        | 'LU'
        | 'MO'
        | 'MG'
        | 'MW'
        | 'MY'
        | 'MV'
        | 'ML'
        | 'MT'
        | 'MH'
        | 'MQ'
        | 'MR'
        | 'MU'
        | 'YT'
        | 'MX'
        | 'FM'
        | 'MD'
        | 'MC'
        | 'MN'
        | 'MS'
        | 'MA'
        | 'MZ'
        | 'MM'
        | 'NA'
        | 'NR'
        | 'NP'
        | 'NL'
        | 'NC'
        | 'NZ'
        | 'NI'
        | 'NE'
        | 'NG'
        | 'NU'
        | 'NF'
        | 'MP'
        | 'MK'
        | 'NO'
        | 'OM'
        | 'PK'
        | 'PW'
        | 'PS'
        | 'PA'
        | 'PG'
        | 'PY'
        | 'PE'
        | 'PH'
        | 'PN'
        | 'PL'
        | 'PT'
        | 'PR'
        | 'QA'
        | 'RE'
        | 'RO'
        | 'RU'
        | 'RW'
        | 'SH'
        | 'KN'
        | 'LC'
        | 'PM'
        | 'VC'
        | 'WS'
        | 'SM'
        | 'ST'
        | 'SA'
        | 'SN'
        | 'SC'
        | 'SL'
        | 'SG'
        | 'SK'
        | 'SI'
        | 'SB'
        | 'SO'
        | 'ZA'
        | 'GS'
        | 'ES'
        | 'LK'
        | 'SD'
        | 'SR'
        | 'SJ'
        | 'SZ'
        | 'SE'
        | 'CH'
        | 'SY'
        | 'TW'
        | 'TJ'
        | 'TZ'
        | 'TH'
        | 'TL'
        | 'TG'
        | 'TK'
        | 'TO'
        | 'TT'
        | 'TN'
        | 'TR'
        | 'TM'
        | 'TC'
        | 'TV'
        | 'UG'
        | 'UA'
        | 'AE'
        | 'GB'
        | 'UM'
        | 'UY'
        | 'UZ'
        | 'VU'
        | 'VE'
        | 'VN'
        | 'VG'
        | 'VI'
        | 'WF'
        | 'EH'
        | 'YE'
        | 'ZM'
        | 'ZW'
        | 'AX'
        | 'BQ'
        | 'CW'
        | 'GG'
        | 'IM'
        | 'JE'
        | 'ME'
        | 'BL'
        | 'MF'
        | 'RS'
        | 'SX'
        | 'SS'
        | 'XK';

      /**
       * Date of birth as an ISO 8601 calendar date (YYYY-MM-DD).
       */
      date_of_birth: string;

      /**
       * Government-issued identification with type: "id" (generic government-issued ID).
       */
      identification: NonUsBeneficiaryData.Identification;

      /**
       * Full legal name of the account holder.
       */
      legal_name: string;

      /**
       * Residential address of the account holder.
       */
      residential_address:
        | NonUsBeneficiaryData.UsResidentialAddress
        | NonUsBeneficiaryData.NonUsResidentialAddress;
    }

    export namespace NonUsBeneficiaryData {
      /**
       * Government-issued identification with type: "id" (generic government-issued ID).
       */
      export interface Identification {
        type: 'id';

        value: string;
      }

      export interface UsResidentialAddress {
        /**
         * City name.
         */
        city: string;

        /**
         * ISO 3166-1 alpha-2 country code.
         */
        country: 'US';

        /**
         * Postal or ZIP code.
         */
        postal_code: string;

        /**
         * Two-letter state code.
         */
        state: string;

        /**
         * Primary street address.
         */
        street_line_1: string;

        /**
         * Secondary street address (apartment, suite, etc.).
         */
        street_line_2?: string;
      }

      export interface NonUsResidentialAddress {
        /**
         * City name.
         */
        city: string;

        /**
         * ISO 3166-1 alpha-2 country code.
         */
        country:
          | 'AF'
          | 'AL'
          | 'DZ'
          | 'AS'
          | 'AD'
          | 'AO'
          | 'AI'
          | 'AQ'
          | 'AG'
          | 'AR'
          | 'AM'
          | 'AW'
          | 'AU'
          | 'AT'
          | 'AZ'
          | 'BS'
          | 'BH'
          | 'BD'
          | 'BB'
          | 'BY'
          | 'BE'
          | 'BZ'
          | 'BJ'
          | 'BM'
          | 'BT'
          | 'BO'
          | 'BA'
          | 'BW'
          | 'BV'
          | 'BR'
          | 'IO'
          | 'BN'
          | 'BG'
          | 'BF'
          | 'BI'
          | 'KH'
          | 'CM'
          | 'CA'
          | 'CV'
          | 'KY'
          | 'CF'
          | 'TD'
          | 'CL'
          | 'CN'
          | 'CX'
          | 'CC'
          | 'CO'
          | 'KM'
          | 'CG'
          | 'CD'
          | 'CK'
          | 'CR'
          | 'CI'
          | 'HR'
          | 'CU'
          | 'CY'
          | 'CZ'
          | 'DK'
          | 'DJ'
          | 'DM'
          | 'DO'
          | 'EC'
          | 'EG'
          | 'SV'
          | 'GQ'
          | 'ER'
          | 'EE'
          | 'ET'
          | 'FK'
          | 'FO'
          | 'FJ'
          | 'FI'
          | 'FR'
          | 'GF'
          | 'PF'
          | 'TF'
          | 'GA'
          | 'GM'
          | 'GE'
          | 'DE'
          | 'GH'
          | 'GI'
          | 'GR'
          | 'GL'
          | 'GD'
          | 'GP'
          | 'GU'
          | 'GT'
          | 'GN'
          | 'GW'
          | 'GY'
          | 'HT'
          | 'HM'
          | 'VA'
          | 'HN'
          | 'HK'
          | 'HU'
          | 'IS'
          | 'IN'
          | 'ID'
          | 'IR'
          | 'IQ'
          | 'IE'
          | 'IL'
          | 'IT'
          | 'JM'
          | 'JP'
          | 'JO'
          | 'KZ'
          | 'KE'
          | 'KI'
          | 'KP'
          | 'KR'
          | 'KW'
          | 'KG'
          | 'LA'
          | 'LV'
          | 'LB'
          | 'LS'
          | 'LR'
          | 'LY'
          | 'LI'
          | 'LT'
          | 'LU'
          | 'MO'
          | 'MG'
          | 'MW'
          | 'MY'
          | 'MV'
          | 'ML'
          | 'MT'
          | 'MH'
          | 'MQ'
          | 'MR'
          | 'MU'
          | 'YT'
          | 'MX'
          | 'FM'
          | 'MD'
          | 'MC'
          | 'MN'
          | 'MS'
          | 'MA'
          | 'MZ'
          | 'MM'
          | 'NA'
          | 'NR'
          | 'NP'
          | 'NL'
          | 'NC'
          | 'NZ'
          | 'NI'
          | 'NE'
          | 'NG'
          | 'NU'
          | 'NF'
          | 'MP'
          | 'MK'
          | 'NO'
          | 'OM'
          | 'PK'
          | 'PW'
          | 'PS'
          | 'PA'
          | 'PG'
          | 'PY'
          | 'PE'
          | 'PH'
          | 'PN'
          | 'PL'
          | 'PT'
          | 'PR'
          | 'QA'
          | 'RE'
          | 'RO'
          | 'RU'
          | 'RW'
          | 'SH'
          | 'KN'
          | 'LC'
          | 'PM'
          | 'VC'
          | 'WS'
          | 'SM'
          | 'ST'
          | 'SA'
          | 'SN'
          | 'SC'
          | 'SL'
          | 'SG'
          | 'SK'
          | 'SI'
          | 'SB'
          | 'SO'
          | 'ZA'
          | 'GS'
          | 'ES'
          | 'LK'
          | 'SD'
          | 'SR'
          | 'SJ'
          | 'SZ'
          | 'SE'
          | 'CH'
          | 'SY'
          | 'TW'
          | 'TJ'
          | 'TZ'
          | 'TH'
          | 'TL'
          | 'TG'
          | 'TK'
          | 'TO'
          | 'TT'
          | 'TN'
          | 'TR'
          | 'TM'
          | 'TC'
          | 'TV'
          | 'UG'
          | 'UA'
          | 'AE'
          | 'GB'
          | 'UM'
          | 'UY'
          | 'UZ'
          | 'VU'
          | 'VE'
          | 'VN'
          | 'VG'
          | 'VI'
          | 'WF'
          | 'EH'
          | 'YE'
          | 'ZM'
          | 'ZW'
          | 'AX'
          | 'BQ'
          | 'CW'
          | 'GG'
          | 'IM'
          | 'JE'
          | 'ME'
          | 'BL'
          | 'MF'
          | 'RS'
          | 'SX'
          | 'SS'
          | 'XK';

        /**
         * Postal or ZIP code.
         */
        postal_code: string;

        /**
         * Primary street address.
         */
        street_line_1: string;

        /**
         * Secondary street address (apartment, suite, etc.).
         */
        street_line_2?: string;
      }
    }

    export interface UnionMember0 {
      /**
       * ISO 3166-1 alpha-2 country code of citizenship.
       */
      country_of_citizenship: 'US';

      /**
       * Date of birth as an ISO 8601 calendar date (YYYY-MM-DD).
       */
      date_of_birth: string;

      /**
       * Government-issued identification with type: "ssn" (Social Security Number,
       * format ###-##-####) or "itin" (Individual Taxpayer ID, format 9##-##-####).
       */
      identification: UnionMember0.SsnIdentification | UnionMember0.ItinIdentification;

      /**
       * Full legal name of the account holder.
       */
      legal_name: string;

      /**
       * Residential address of the account holder.
       */
      residential_address: UnionMember0.UsResidentialAddress | UnionMember0.NonUsResidentialAddress;

      /**
       * Role of the control person at the business (e.g., "CEO", "President", "Managing
       * Director").
       */
      title: string;
    }

    export namespace UnionMember0 {
      export interface SsnIdentification {
        type: 'ssn';

        value: string;
      }

      export interface ItinIdentification {
        type: 'itin';

        value: string;
      }

      export interface UsResidentialAddress {
        /**
         * City name.
         */
        city: string;

        /**
         * ISO 3166-1 alpha-2 country code.
         */
        country: 'US';

        /**
         * Postal or ZIP code.
         */
        postal_code: string;

        /**
         * Two-letter state code.
         */
        state: string;

        /**
         * Primary street address.
         */
        street_line_1: string;

        /**
         * Secondary street address (apartment, suite, etc.).
         */
        street_line_2?: string;
      }

      export interface NonUsResidentialAddress {
        /**
         * City name.
         */
        city: string;

        /**
         * ISO 3166-1 alpha-2 country code.
         */
        country:
          | 'AF'
          | 'AL'
          | 'DZ'
          | 'AS'
          | 'AD'
          | 'AO'
          | 'AI'
          | 'AQ'
          | 'AG'
          | 'AR'
          | 'AM'
          | 'AW'
          | 'AU'
          | 'AT'
          | 'AZ'
          | 'BS'
          | 'BH'
          | 'BD'
          | 'BB'
          | 'BY'
          | 'BE'
          | 'BZ'
          | 'BJ'
          | 'BM'
          | 'BT'
          | 'BO'
          | 'BA'
          | 'BW'
          | 'BV'
          | 'BR'
          | 'IO'
          | 'BN'
          | 'BG'
          | 'BF'
          | 'BI'
          | 'KH'
          | 'CM'
          | 'CA'
          | 'CV'
          | 'KY'
          | 'CF'
          | 'TD'
          | 'CL'
          | 'CN'
          | 'CX'
          | 'CC'
          | 'CO'
          | 'KM'
          | 'CG'
          | 'CD'
          | 'CK'
          | 'CR'
          | 'CI'
          | 'HR'
          | 'CU'
          | 'CY'
          | 'CZ'
          | 'DK'
          | 'DJ'
          | 'DM'
          | 'DO'
          | 'EC'
          | 'EG'
          | 'SV'
          | 'GQ'
          | 'ER'
          | 'EE'
          | 'ET'
          | 'FK'
          | 'FO'
          | 'FJ'
          | 'FI'
          | 'FR'
          | 'GF'
          | 'PF'
          | 'TF'
          | 'GA'
          | 'GM'
          | 'GE'
          | 'DE'
          | 'GH'
          | 'GI'
          | 'GR'
          | 'GL'
          | 'GD'
          | 'GP'
          | 'GU'
          | 'GT'
          | 'GN'
          | 'GW'
          | 'GY'
          | 'HT'
          | 'HM'
          | 'VA'
          | 'HN'
          | 'HK'
          | 'HU'
          | 'IS'
          | 'IN'
          | 'ID'
          | 'IR'
          | 'IQ'
          | 'IE'
          | 'IL'
          | 'IT'
          | 'JM'
          | 'JP'
          | 'JO'
          | 'KZ'
          | 'KE'
          | 'KI'
          | 'KP'
          | 'KR'
          | 'KW'
          | 'KG'
          | 'LA'
          | 'LV'
          | 'LB'
          | 'LS'
          | 'LR'
          | 'LY'
          | 'LI'
          | 'LT'
          | 'LU'
          | 'MO'
          | 'MG'
          | 'MW'
          | 'MY'
          | 'MV'
          | 'ML'
          | 'MT'
          | 'MH'
          | 'MQ'
          | 'MR'
          | 'MU'
          | 'YT'
          | 'MX'
          | 'FM'
          | 'MD'
          | 'MC'
          | 'MN'
          | 'MS'
          | 'MA'
          | 'MZ'
          | 'MM'
          | 'NA'
          | 'NR'
          | 'NP'
          | 'NL'
          | 'NC'
          | 'NZ'
          | 'NI'
          | 'NE'
          | 'NG'
          | 'NU'
          | 'NF'
          | 'MP'
          | 'MK'
          | 'NO'
          | 'OM'
          | 'PK'
          | 'PW'
          | 'PS'
          | 'PA'
          | 'PG'
          | 'PY'
          | 'PE'
          | 'PH'
          | 'PN'
          | 'PL'
          | 'PT'
          | 'PR'
          | 'QA'
          | 'RE'
          | 'RO'
          | 'RU'
          | 'RW'
          | 'SH'
          | 'KN'
          | 'LC'
          | 'PM'
          | 'VC'
          | 'WS'
          | 'SM'
          | 'ST'
          | 'SA'
          | 'SN'
          | 'SC'
          | 'SL'
          | 'SG'
          | 'SK'
          | 'SI'
          | 'SB'
          | 'SO'
          | 'ZA'
          | 'GS'
          | 'ES'
          | 'LK'
          | 'SD'
          | 'SR'
          | 'SJ'
          | 'SZ'
          | 'SE'
          | 'CH'
          | 'SY'
          | 'TW'
          | 'TJ'
          | 'TZ'
          | 'TH'
          | 'TL'
          | 'TG'
          | 'TK'
          | 'TO'
          | 'TT'
          | 'TN'
          | 'TR'
          | 'TM'
          | 'TC'
          | 'TV'
          | 'UG'
          | 'UA'
          | 'AE'
          | 'GB'
          | 'UM'
          | 'UY'
          | 'UZ'
          | 'VU'
          | 'VE'
          | 'VN'
          | 'VG'
          | 'VI'
          | 'WF'
          | 'EH'
          | 'YE'
          | 'ZM'
          | 'ZW'
          | 'AX'
          | 'BQ'
          | 'CW'
          | 'GG'
          | 'IM'
          | 'JE'
          | 'ME'
          | 'BL'
          | 'MF'
          | 'RS'
          | 'SX'
          | 'SS'
          | 'XK';

        /**
         * Postal or ZIP code.
         */
        postal_code: string;

        /**
         * Primary street address.
         */
        street_line_1: string;

        /**
         * Secondary street address (apartment, suite, etc.).
         */
        street_line_2?: string;
      }
    }

    export interface UnionMember1 {
      /**
       * ISO 3166-1 alpha-2 country code of citizenship.
       */
      country_of_citizenship:
        | 'AF'
        | 'AL'
        | 'DZ'
        | 'AS'
        | 'AD'
        | 'AO'
        | 'AI'
        | 'AQ'
        | 'AG'
        | 'AR'
        | 'AM'
        | 'AW'
        | 'AU'
        | 'AT'
        | 'AZ'
        | 'BS'
        | 'BH'
        | 'BD'
        | 'BB'
        | 'BY'
        | 'BE'
        | 'BZ'
        | 'BJ'
        | 'BM'
        | 'BT'
        | 'BO'
        | 'BA'
        | 'BW'
        | 'BV'
        | 'BR'
        | 'IO'
        | 'BN'
        | 'BG'
        | 'BF'
        | 'BI'
        | 'KH'
        | 'CM'
        | 'CA'
        | 'CV'
        | 'KY'
        | 'CF'
        | 'TD'
        | 'CL'
        | 'CN'
        | 'CX'
        | 'CC'
        | 'CO'
        | 'KM'
        | 'CG'
        | 'CD'
        | 'CK'
        | 'CR'
        | 'CI'
        | 'HR'
        | 'CU'
        | 'CY'
        | 'CZ'
        | 'DK'
        | 'DJ'
        | 'DM'
        | 'DO'
        | 'EC'
        | 'EG'
        | 'SV'
        | 'GQ'
        | 'ER'
        | 'EE'
        | 'ET'
        | 'FK'
        | 'FO'
        | 'FJ'
        | 'FI'
        | 'FR'
        | 'GF'
        | 'PF'
        | 'TF'
        | 'GA'
        | 'GM'
        | 'GE'
        | 'DE'
        | 'GH'
        | 'GI'
        | 'GR'
        | 'GL'
        | 'GD'
        | 'GP'
        | 'GU'
        | 'GT'
        | 'GN'
        | 'GW'
        | 'GY'
        | 'HT'
        | 'HM'
        | 'VA'
        | 'HN'
        | 'HK'
        | 'HU'
        | 'IS'
        | 'IN'
        | 'ID'
        | 'IR'
        | 'IQ'
        | 'IE'
        | 'IL'
        | 'IT'
        | 'JM'
        | 'JP'
        | 'JO'
        | 'KZ'
        | 'KE'
        | 'KI'
        | 'KP'
        | 'KR'
        | 'KW'
        | 'KG'
        | 'LA'
        | 'LV'
        | 'LB'
        | 'LS'
        | 'LR'
        | 'LY'
        | 'LI'
        | 'LT'
        | 'LU'
        | 'MO'
        | 'MG'
        | 'MW'
        | 'MY'
        | 'MV'
        | 'ML'
        | 'MT'
        | 'MH'
        | 'MQ'
        | 'MR'
        | 'MU'
        | 'YT'
        | 'MX'
        | 'FM'
        | 'MD'
        | 'MC'
        | 'MN'
        | 'MS'
        | 'MA'
        | 'MZ'
        | 'MM'
        | 'NA'
        | 'NR'
        | 'NP'
        | 'NL'
        | 'NC'
        | 'NZ'
        | 'NI'
        | 'NE'
        | 'NG'
        | 'NU'
        | 'NF'
        | 'MP'
        | 'MK'
        | 'NO'
        | 'OM'
        | 'PK'
        | 'PW'
        | 'PS'
        | 'PA'
        | 'PG'
        | 'PY'
        | 'PE'
        | 'PH'
        | 'PN'
        | 'PL'
        | 'PT'
        | 'PR'
        | 'QA'
        | 'RE'
        | 'RO'
        | 'RU'
        | 'RW'
        | 'SH'
        | 'KN'
        | 'LC'
        | 'PM'
        | 'VC'
        | 'WS'
        | 'SM'
        | 'ST'
        | 'SA'
        | 'SN'
        | 'SC'
        | 'SL'
        | 'SG'
        | 'SK'
        | 'SI'
        | 'SB'
        | 'SO'
        | 'ZA'
        | 'GS'
        | 'ES'
        | 'LK'
        | 'SD'
        | 'SR'
        | 'SJ'
        | 'SZ'
        | 'SE'
        | 'CH'
        | 'SY'
        | 'TW'
        | 'TJ'
        | 'TZ'
        | 'TH'
        | 'TL'
        | 'TG'
        | 'TK'
        | 'TO'
        | 'TT'
        | 'TN'
        | 'TR'
        | 'TM'
        | 'TC'
        | 'TV'
        | 'UG'
        | 'UA'
        | 'AE'
        | 'GB'
        | 'UM'
        | 'UY'
        | 'UZ'
        | 'VU'
        | 'VE'
        | 'VN'
        | 'VG'
        | 'VI'
        | 'WF'
        | 'EH'
        | 'YE'
        | 'ZM'
        | 'ZW'
        | 'AX'
        | 'BQ'
        | 'CW'
        | 'GG'
        | 'IM'
        | 'JE'
        | 'ME'
        | 'BL'
        | 'MF'
        | 'RS'
        | 'SX'
        | 'SS'
        | 'XK';

      /**
       * Date of birth as an ISO 8601 calendar date (YYYY-MM-DD).
       */
      date_of_birth: string;

      /**
       * Government-issued identification with type: "id" (generic government-issued ID).
       */
      identification: UnionMember1.Identification;

      /**
       * Full legal name of the account holder.
       */
      legal_name: string;

      /**
       * Residential address of the account holder.
       */
      residential_address: UnionMember1.UsResidentialAddress | UnionMember1.NonUsResidentialAddress;

      /**
       * Role of the control person at the business (e.g., "CEO", "President", "Managing
       * Director").
       */
      title: string;
    }

    export namespace UnionMember1 {
      /**
       * Government-issued identification with type: "id" (generic government-issued ID).
       */
      export interface Identification {
        type: 'id';

        value: string;
      }

      export interface UsResidentialAddress {
        /**
         * City name.
         */
        city: string;

        /**
         * ISO 3166-1 alpha-2 country code.
         */
        country: 'US';

        /**
         * Postal or ZIP code.
         */
        postal_code: string;

        /**
         * Two-letter state code.
         */
        state: string;

        /**
         * Primary street address.
         */
        street_line_1: string;

        /**
         * Secondary street address (apartment, suite, etc.).
         */
        street_line_2?: string;
      }

      export interface NonUsResidentialAddress {
        /**
         * City name.
         */
        city: string;

        /**
         * ISO 3166-1 alpha-2 country code.
         */
        country:
          | 'AF'
          | 'AL'
          | 'DZ'
          | 'AS'
          | 'AD'
          | 'AO'
          | 'AI'
          | 'AQ'
          | 'AG'
          | 'AR'
          | 'AM'
          | 'AW'
          | 'AU'
          | 'AT'
          | 'AZ'
          | 'BS'
          | 'BH'
          | 'BD'
          | 'BB'
          | 'BY'
          | 'BE'
          | 'BZ'
          | 'BJ'
          | 'BM'
          | 'BT'
          | 'BO'
          | 'BA'
          | 'BW'
          | 'BV'
          | 'BR'
          | 'IO'
          | 'BN'
          | 'BG'
          | 'BF'
          | 'BI'
          | 'KH'
          | 'CM'
          | 'CA'
          | 'CV'
          | 'KY'
          | 'CF'
          | 'TD'
          | 'CL'
          | 'CN'
          | 'CX'
          | 'CC'
          | 'CO'
          | 'KM'
          | 'CG'
          | 'CD'
          | 'CK'
          | 'CR'
          | 'CI'
          | 'HR'
          | 'CU'
          | 'CY'
          | 'CZ'
          | 'DK'
          | 'DJ'
          | 'DM'
          | 'DO'
          | 'EC'
          | 'EG'
          | 'SV'
          | 'GQ'
          | 'ER'
          | 'EE'
          | 'ET'
          | 'FK'
          | 'FO'
          | 'FJ'
          | 'FI'
          | 'FR'
          | 'GF'
          | 'PF'
          | 'TF'
          | 'GA'
          | 'GM'
          | 'GE'
          | 'DE'
          | 'GH'
          | 'GI'
          | 'GR'
          | 'GL'
          | 'GD'
          | 'GP'
          | 'GU'
          | 'GT'
          | 'GN'
          | 'GW'
          | 'GY'
          | 'HT'
          | 'HM'
          | 'VA'
          | 'HN'
          | 'HK'
          | 'HU'
          | 'IS'
          | 'IN'
          | 'ID'
          | 'IR'
          | 'IQ'
          | 'IE'
          | 'IL'
          | 'IT'
          | 'JM'
          | 'JP'
          | 'JO'
          | 'KZ'
          | 'KE'
          | 'KI'
          | 'KP'
          | 'KR'
          | 'KW'
          | 'KG'
          | 'LA'
          | 'LV'
          | 'LB'
          | 'LS'
          | 'LR'
          | 'LY'
          | 'LI'
          | 'LT'
          | 'LU'
          | 'MO'
          | 'MG'
          | 'MW'
          | 'MY'
          | 'MV'
          | 'ML'
          | 'MT'
          | 'MH'
          | 'MQ'
          | 'MR'
          | 'MU'
          | 'YT'
          | 'MX'
          | 'FM'
          | 'MD'
          | 'MC'
          | 'MN'
          | 'MS'
          | 'MA'
          | 'MZ'
          | 'MM'
          | 'NA'
          | 'NR'
          | 'NP'
          | 'NL'
          | 'NC'
          | 'NZ'
          | 'NI'
          | 'NE'
          | 'NG'
          | 'NU'
          | 'NF'
          | 'MP'
          | 'MK'
          | 'NO'
          | 'OM'
          | 'PK'
          | 'PW'
          | 'PS'
          | 'PA'
          | 'PG'
          | 'PY'
          | 'PE'
          | 'PH'
          | 'PN'
          | 'PL'
          | 'PT'
          | 'PR'
          | 'QA'
          | 'RE'
          | 'RO'
          | 'RU'
          | 'RW'
          | 'SH'
          | 'KN'
          | 'LC'
          | 'PM'
          | 'VC'
          | 'WS'
          | 'SM'
          | 'ST'
          | 'SA'
          | 'SN'
          | 'SC'
          | 'SL'
          | 'SG'
          | 'SK'
          | 'SI'
          | 'SB'
          | 'SO'
          | 'ZA'
          | 'GS'
          | 'ES'
          | 'LK'
          | 'SD'
          | 'SR'
          | 'SJ'
          | 'SZ'
          | 'SE'
          | 'CH'
          | 'SY'
          | 'TW'
          | 'TJ'
          | 'TZ'
          | 'TH'
          | 'TL'
          | 'TG'
          | 'TK'
          | 'TO'
          | 'TT'
          | 'TN'
          | 'TR'
          | 'TM'
          | 'TC'
          | 'TV'
          | 'UG'
          | 'UA'
          | 'AE'
          | 'GB'
          | 'UM'
          | 'UY'
          | 'UZ'
          | 'VU'
          | 'VE'
          | 'VN'
          | 'VG'
          | 'VI'
          | 'WF'
          | 'EH'
          | 'YE'
          | 'ZM'
          | 'ZW'
          | 'AX'
          | 'BQ'
          | 'CW'
          | 'GG'
          | 'IM'
          | 'JE'
          | 'ME'
          | 'BL'
          | 'MF'
          | 'RS'
          | 'SX'
          | 'SS'
          | 'XK';

        /**
         * Postal or ZIP code.
         */
        postal_code: string;

        /**
         * Primary street address.
         */
        street_line_1: string;

        /**
         * Secondary street address (apartment, suite, etc.).
         */
        street_line_2?: string;
      }
    }

    export interface UsResidentialAddress {
      /**
       * City name.
       */
      city: string;

      /**
       * ISO 3166-1 alpha-2 country code.
       */
      country: 'US';

      /**
       * Postal or ZIP code.
       */
      postal_code: string;

      /**
       * Two-letter state code.
       */
      state: string;

      /**
       * Primary street address.
       */
      street_line_1: string;

      /**
       * Secondary street address (apartment, suite, etc.).
       */
      street_line_2?: string;
    }

    export interface NonUsResidentialAddress {
      /**
       * City name.
       */
      city: string;

      /**
       * ISO 3166-1 alpha-2 country code.
       */
      country:
        | 'AF'
        | 'AL'
        | 'DZ'
        | 'AS'
        | 'AD'
        | 'AO'
        | 'AI'
        | 'AQ'
        | 'AG'
        | 'AR'
        | 'AM'
        | 'AW'
        | 'AU'
        | 'AT'
        | 'AZ'
        | 'BS'
        | 'BH'
        | 'BD'
        | 'BB'
        | 'BY'
        | 'BE'
        | 'BZ'
        | 'BJ'
        | 'BM'
        | 'BT'
        | 'BO'
        | 'BA'
        | 'BW'
        | 'BV'
        | 'BR'
        | 'IO'
        | 'BN'
        | 'BG'
        | 'BF'
        | 'BI'
        | 'KH'
        | 'CM'
        | 'CA'
        | 'CV'
        | 'KY'
        | 'CF'
        | 'TD'
        | 'CL'
        | 'CN'
        | 'CX'
        | 'CC'
        | 'CO'
        | 'KM'
        | 'CG'
        | 'CD'
        | 'CK'
        | 'CR'
        | 'CI'
        | 'HR'
        | 'CU'
        | 'CY'
        | 'CZ'
        | 'DK'
        | 'DJ'
        | 'DM'
        | 'DO'
        | 'EC'
        | 'EG'
        | 'SV'
        | 'GQ'
        | 'ER'
        | 'EE'
        | 'ET'
        | 'FK'
        | 'FO'
        | 'FJ'
        | 'FI'
        | 'FR'
        | 'GF'
        | 'PF'
        | 'TF'
        | 'GA'
        | 'GM'
        | 'GE'
        | 'DE'
        | 'GH'
        | 'GI'
        | 'GR'
        | 'GL'
        | 'GD'
        | 'GP'
        | 'GU'
        | 'GT'
        | 'GN'
        | 'GW'
        | 'GY'
        | 'HT'
        | 'HM'
        | 'VA'
        | 'HN'
        | 'HK'
        | 'HU'
        | 'IS'
        | 'IN'
        | 'ID'
        | 'IR'
        | 'IQ'
        | 'IE'
        | 'IL'
        | 'IT'
        | 'JM'
        | 'JP'
        | 'JO'
        | 'KZ'
        | 'KE'
        | 'KI'
        | 'KP'
        | 'KR'
        | 'KW'
        | 'KG'
        | 'LA'
        | 'LV'
        | 'LB'
        | 'LS'
        | 'LR'
        | 'LY'
        | 'LI'
        | 'LT'
        | 'LU'
        | 'MO'
        | 'MG'
        | 'MW'
        | 'MY'
        | 'MV'
        | 'ML'
        | 'MT'
        | 'MH'
        | 'MQ'
        | 'MR'
        | 'MU'
        | 'YT'
        | 'MX'
        | 'FM'
        | 'MD'
        | 'MC'
        | 'MN'
        | 'MS'
        | 'MA'
        | 'MZ'
        | 'MM'
        | 'NA'
        | 'NR'
        | 'NP'
        | 'NL'
        | 'NC'
        | 'NZ'
        | 'NI'
        | 'NE'
        | 'NG'
        | 'NU'
        | 'NF'
        | 'MP'
        | 'MK'
        | 'NO'
        | 'OM'
        | 'PK'
        | 'PW'
        | 'PS'
        | 'PA'
        | 'PG'
        | 'PY'
        | 'PE'
        | 'PH'
        | 'PN'
        | 'PL'
        | 'PT'
        | 'PR'
        | 'QA'
        | 'RE'
        | 'RO'
        | 'RU'
        | 'RW'
        | 'SH'
        | 'KN'
        | 'LC'
        | 'PM'
        | 'VC'
        | 'WS'
        | 'SM'
        | 'ST'
        | 'SA'
        | 'SN'
        | 'SC'
        | 'SL'
        | 'SG'
        | 'SK'
        | 'SI'
        | 'SB'
        | 'SO'
        | 'ZA'
        | 'GS'
        | 'ES'
        | 'LK'
        | 'SD'
        | 'SR'
        | 'SJ'
        | 'SZ'
        | 'SE'
        | 'CH'
        | 'SY'
        | 'TW'
        | 'TJ'
        | 'TZ'
        | 'TH'
        | 'TL'
        | 'TG'
        | 'TK'
        | 'TO'
        | 'TT'
        | 'TN'
        | 'TR'
        | 'TM'
        | 'TC'
        | 'TV'
        | 'UG'
        | 'UA'
        | 'AE'
        | 'GB'
        | 'UM'
        | 'UY'
        | 'UZ'
        | 'VU'
        | 'VE'
        | 'VN'
        | 'VG'
        | 'VI'
        | 'WF'
        | 'EH'
        | 'YE'
        | 'ZM'
        | 'ZW'
        | 'AX'
        | 'BQ'
        | 'CW'
        | 'GG'
        | 'IM'
        | 'JE'
        | 'ME'
        | 'BL'
        | 'MF'
        | 'RS'
        | 'SX'
        | 'SS'
        | 'XK';

      /**
       * Postal or ZIP code.
       */
      postal_code: string;

      /**
       * Primary street address.
       */
      street_line_1: string;

      /**
       * Secondary street address (apartment, suite, etc.).
       */
      street_line_2?: string;
    }

    export interface UsResidentialAddress {
      /**
       * City name.
       */
      city: string;

      /**
       * ISO 3166-1 alpha-2 country code.
       */
      country: 'US';

      /**
       * Postal or ZIP code.
       */
      postal_code: string;

      /**
       * Two-letter state code.
       */
      state: string;

      /**
       * Primary street address.
       */
      street_line_1: string;

      /**
       * Secondary street address (apartment, suite, etc.).
       */
      street_line_2?: string;
    }

    export interface NonUsResidentialAddress {
      /**
       * City name.
       */
      city: string;

      /**
       * ISO 3166-1 alpha-2 country code.
       */
      country:
        | 'AF'
        | 'AL'
        | 'DZ'
        | 'AS'
        | 'AD'
        | 'AO'
        | 'AI'
        | 'AQ'
        | 'AG'
        | 'AR'
        | 'AM'
        | 'AW'
        | 'AU'
        | 'AT'
        | 'AZ'
        | 'BS'
        | 'BH'
        | 'BD'
        | 'BB'
        | 'BY'
        | 'BE'
        | 'BZ'
        | 'BJ'
        | 'BM'
        | 'BT'
        | 'BO'
        | 'BA'
        | 'BW'
        | 'BV'
        | 'BR'
        | 'IO'
        | 'BN'
        | 'BG'
        | 'BF'
        | 'BI'
        | 'KH'
        | 'CM'
        | 'CA'
        | 'CV'
        | 'KY'
        | 'CF'
        | 'TD'
        | 'CL'
        | 'CN'
        | 'CX'
        | 'CC'
        | 'CO'
        | 'KM'
        | 'CG'
        | 'CD'
        | 'CK'
        | 'CR'
        | 'CI'
        | 'HR'
        | 'CU'
        | 'CY'
        | 'CZ'
        | 'DK'
        | 'DJ'
        | 'DM'
        | 'DO'
        | 'EC'
        | 'EG'
        | 'SV'
        | 'GQ'
        | 'ER'
        | 'EE'
        | 'ET'
        | 'FK'
        | 'FO'
        | 'FJ'
        | 'FI'
        | 'FR'
        | 'GF'
        | 'PF'
        | 'TF'
        | 'GA'
        | 'GM'
        | 'GE'
        | 'DE'
        | 'GH'
        | 'GI'
        | 'GR'
        | 'GL'
        | 'GD'
        | 'GP'
        | 'GU'
        | 'GT'
        | 'GN'
        | 'GW'
        | 'GY'
        | 'HT'
        | 'HM'
        | 'VA'
        | 'HN'
        | 'HK'
        | 'HU'
        | 'IS'
        | 'IN'
        | 'ID'
        | 'IR'
        | 'IQ'
        | 'IE'
        | 'IL'
        | 'IT'
        | 'JM'
        | 'JP'
        | 'JO'
        | 'KZ'
        | 'KE'
        | 'KI'
        | 'KP'
        | 'KR'
        | 'KW'
        | 'KG'
        | 'LA'
        | 'LV'
        | 'LB'
        | 'LS'
        | 'LR'
        | 'LY'
        | 'LI'
        | 'LT'
        | 'LU'
        | 'MO'
        | 'MG'
        | 'MW'
        | 'MY'
        | 'MV'
        | 'ML'
        | 'MT'
        | 'MH'
        | 'MQ'
        | 'MR'
        | 'MU'
        | 'YT'
        | 'MX'
        | 'FM'
        | 'MD'
        | 'MC'
        | 'MN'
        | 'MS'
        | 'MA'
        | 'MZ'
        | 'MM'
        | 'NA'
        | 'NR'
        | 'NP'
        | 'NL'
        | 'NC'
        | 'NZ'
        | 'NI'
        | 'NE'
        | 'NG'
        | 'NU'
        | 'NF'
        | 'MP'
        | 'MK'
        | 'NO'
        | 'OM'
        | 'PK'
        | 'PW'
        | 'PS'
        | 'PA'
        | 'PG'
        | 'PY'
        | 'PE'
        | 'PH'
        | 'PN'
        | 'PL'
        | 'PT'
        | 'PR'
        | 'QA'
        | 'RE'
        | 'RO'
        | 'RU'
        | 'RW'
        | 'SH'
        | 'KN'
        | 'LC'
        | 'PM'
        | 'VC'
        | 'WS'
        | 'SM'
        | 'ST'
        | 'SA'
        | 'SN'
        | 'SC'
        | 'SL'
        | 'SG'
        | 'SK'
        | 'SI'
        | 'SB'
        | 'SO'
        | 'ZA'
        | 'GS'
        | 'ES'
        | 'LK'
        | 'SD'
        | 'SR'
        | 'SJ'
        | 'SZ'
        | 'SE'
        | 'CH'
        | 'SY'
        | 'TW'
        | 'TJ'
        | 'TZ'
        | 'TH'
        | 'TL'
        | 'TG'
        | 'TK'
        | 'TO'
        | 'TT'
        | 'TN'
        | 'TR'
        | 'TM'
        | 'TC'
        | 'TV'
        | 'UG'
        | 'UA'
        | 'AE'
        | 'GB'
        | 'UM'
        | 'UY'
        | 'UZ'
        | 'VU'
        | 'VE'
        | 'VN'
        | 'VG'
        | 'VI'
        | 'WF'
        | 'EH'
        | 'YE'
        | 'ZM'
        | 'ZW'
        | 'AX'
        | 'BQ'
        | 'CW'
        | 'GG'
        | 'IM'
        | 'JE'
        | 'ME'
        | 'BL'
        | 'MF'
        | 'RS'
        | 'SX'
        | 'SS'
        | 'XK';

      /**
       * Postal or ZIP code.
       */
      postal_code: string;

      /**
       * Primary street address.
       */
      street_line_1: string;

      /**
       * Secondary street address (apartment, suite, etc.).
       */
      street_line_2?: string;
    }

    export interface EinIdentification {
      type: 'ein';

      value: string;
    }

    export interface SsnIdentification {
      type: 'ssn';

      value: string;
    }
  }
}

export interface AccountHolderListParams extends CursorPageParams {}

export declare namespace AccountHolders {
  export {
    type AccountHolderCreateResponse as AccountHolderCreateResponse,
    type AccountHolderRetrieveResponse as AccountHolderRetrieveResponse,
    type AccountHolderUpdateResponse as AccountHolderUpdateResponse,
    type AccountHolderListResponse as AccountHolderListResponse,
    type AccountHolderListResponsesCursorPage as AccountHolderListResponsesCursorPage,
    type AccountHolderCreateParams as AccountHolderCreateParams,
    type AccountHolderUpdateParams as AccountHolderUpdateParams,
    type AccountHolderListParams as AccountHolderListParams,
  };
}
