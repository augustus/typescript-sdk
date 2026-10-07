// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Counterparties extends APIResource {
  /**
   * Creates a counterparty owned by the merchant.
   *
   * @example
   * ```ts
   * const counterparty = await client.counterparties.create({
   *   financial_address: {
   *     account_holder_name: 'Acme Sandbox Ltd.',
   *     account_number: '000123456789',
   *     routing_number: '110000000',
   *     type: 'aba',
   *   },
   * });
   * ```
   */
  create(body: CounterpartyCreateParams, options?: RequestOptions): APIPromise<CounterpartyCreateResponse> {
    return this._client.post('/v1/counterparties', { body, ...options });
  }

  /**
   * Retrieves a counterparty owned by the merchant.
   *
   * @example
   * ```ts
   * const counterparty = await client.counterparties.retrieve(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<CounterpartyRetrieveResponse> {
    return this._client.get(path`/v1/counterparties/${id}`, options);
  }

  /**
   * Updates the mutable details of a counterparty owned by the merchant.
   *
   * @example
   * ```ts
   * const counterparty = await client.counterparties.update(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  update(
    id: string,
    body: CounterpartyUpdateParams,
    options?: RequestOptions,
  ): APIPromise<CounterpartyUpdateResponse> {
    return this._client.post(path`/v1/counterparties/${id}`, { body, ...options });
  }

  /**
   * Lists counterparties owned by the merchant with cursor-based pagination.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const counterpartyListResponse of client.counterparties.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: CounterpartyListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<CounterpartyListResponsesCursorPage, CounterpartyListResponse> {
    return this._client.getAPIList('/v1/counterparties', CursorPage<CounterpartyListResponse>, {
      query,
      ...options,
    });
  }
}

export type CounterpartyListResponsesCursorPage = CursorPage<CounterpartyListResponse>;

export interface CounterpartyCreateResponse {
  /**
   * Unique identifier of the counterparty.
   */
  id: string;

  /**
   * Whether payments to or from this counterparty are currently blocked.
   */
  blocked: boolean;

  /**
   * Date of birth in YYYY-MM-DD format, or null if not recorded.
   */
  date_of_birth: string | null;

  /**
   * Email address of the counterparty, or null if not recorded.
   */
  email: string | null;

  /**
   * Whether the counterparty is a business or an individual.
   */
  entity_type: 'business' | 'individual';

  /**
   * Financial address of the counterparty.
   */
  financial_address:
    | CounterpartyCreateResponse.AbaFinancialAddress
    | CounterpartyCreateResponse.IbanFinancialAddress
    | CounterpartyCreateResponse.SortCodeFinancialAddress
    | CounterpartyCreateResponse.BicFinancialAddress
    | CounterpartyCreateResponse.CryptoWalletFinancialAddress;

  /**
   * Whether the counterparty is self-owned. `false` if the counterparty is not owned
   * by you, `true` if it is.
   */
  is_self_owned: boolean;

  /**
   * National tax or identity number of the counterparty, or null if not recorded.
   */
  legal_id: string | null;

  /**
   * Set of up to 50 key-value string pairs you can attach to store structured
   * information, such as correlating this resource with an object in your own
   * system. Keys may be up to 40 characters and values up to 500 characters.
   */
  metadata: { [key: string]: string };

  /**
   * Name of the counterparty, or null if not recorded.
   */
  name: string | null;

  /**
   * Phone number of the counterparty, or null if not recorded.
   */
  phone: string | null;

  /**
   * Physical address of the counterparty, or null if not recorded.
   */
  physical_address: CounterpartyCreateResponse.PhysicalAddress | null;

  /**
   * Counterparty lifecycle status. Blocking is separate.
   */
  status: 'pending' | 'active' | 'rejected';

  /**
   * Resource type discriminator.
   */
  type: 'counterparty';
}

export namespace CounterpartyCreateResponse {
  export interface AbaFinancialAddress {
    /**
     * Name of the account holder.
     */
    account_holder_name: string;

    /**
     * Bank account number.
     */
    account_number: string;

    /**
     * Whether the account is a checking or a savings account, or null if not provided.
     */
    account_type: 'checking' | 'savings' | null;

    /**
     * ABA routing number (9 digits).
     */
    routing_number: string;

    /**
     * Discriminator for ABA wire financial address.
     */
    type: 'aba';
  }

  export interface IbanFinancialAddress {
    /**
     * Name of the account holder.
     */
    account_holder_name: string;

    /**
     * Whether the account is a checking or a savings account, or null if not provided.
     */
    account_type: 'checking' | 'savings' | null;

    /**
     * Bank Identifier Code, or null if not provided.
     */
    bic: string | null;

    /**
     * International Bank Account Number.
     */
    iban: string;

    /**
     * Discriminator for IBAN financial address.
     */
    type: 'iban';
  }

  export interface SortCodeFinancialAddress {
    /**
     * Name of the account holder.
     */
    account_holder_name: string;

    /**
     * UK account number (8 digits).
     */
    account_number: string;

    /**
     * UK sort code (6 digits).
     */
    sort_code: string;

    /**
     * Discriminator for UK sort code financial address.
     */
    type: 'sort_code';
  }

  export interface BicFinancialAddress {
    /**
     * Name of the account holder.
     */
    account_holder_name: string;

    /**
     * Local-format bank account number.
     */
    account_number: string;

    /**
     * Whether the account is a checking or a savings account, or null if not provided.
     */
    account_type: 'checking' | 'savings' | null;

    /**
     * ISO 9362 Bank Identifier Code (8 or 11 characters).
     */
    bic: string;

    /**
     * Domestic bank or branch code where the destination country uses one (for example
     * the BSB in Australia), or null.
     */
    local_bank_code: string | null;

    /**
     * Discriminator for BIC + local account financial address.
     */
    type: 'bic';
  }

  export interface CryptoWalletFinancialAddress {
    /**
     * Wallet address on the specified blockchain.
     */
    address: string;

    /**
     * Blockchain network for the crypto wallet.
     */
    blockchain:
      | 'bitcoin'
      | 'ethereum'
      | 'solana'
      | 'polygon'
      | 'bitcoin_testnet4'
      | 'ethereum_sepolia'
      | 'solana_devnet'
      | 'polygon_amoy';

    /**
     * Discriminator for crypto wallet financial address.
     */
    type: 'crypto_wallet';
  }

  /**
   * Physical address of the counterparty, or null if not recorded.
   */
  export interface PhysicalAddress {
    /**
     * City or locality.
     */
    city: string;

    /**
     * ISO 3166-1 alpha-2 country code.
     */
    country_code:
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
     * Primary street address, or null if not recorded.
     */
    line_1: string | null;

    /**
     * Secondary street address, or null if not recorded.
     */
    line_2: string | null;

    /**
     * Postal or ZIP code, or null if not recorded.
     */
    postal_code: string | null;

    /**
     * State, province, or region, or null if not recorded.
     */
    state: string | null;
  }
}

export interface CounterpartyRetrieveResponse {
  /**
   * Unique identifier of the counterparty.
   */
  id: string;

  /**
   * Whether payments to or from this counterparty are currently blocked.
   */
  blocked: boolean;

  /**
   * Date of birth in YYYY-MM-DD format, or null if not recorded.
   */
  date_of_birth: string | null;

  /**
   * Email address of the counterparty, or null if not recorded.
   */
  email: string | null;

  /**
   * Whether the counterparty is a business or an individual.
   */
  entity_type: 'business' | 'individual';

  /**
   * Financial address of the counterparty.
   */
  financial_address:
    | CounterpartyRetrieveResponse.AbaFinancialAddress
    | CounterpartyRetrieveResponse.IbanFinancialAddress
    | CounterpartyRetrieveResponse.SortCodeFinancialAddress
    | CounterpartyRetrieveResponse.BicFinancialAddress
    | CounterpartyRetrieveResponse.CryptoWalletFinancialAddress;

  /**
   * Whether the counterparty is self-owned. `false` if the counterparty is not owned
   * by you, `true` if it is.
   */
  is_self_owned: boolean;

  /**
   * National tax or identity number of the counterparty, or null if not recorded.
   */
  legal_id: string | null;

  /**
   * Set of up to 50 key-value string pairs you can attach to store structured
   * information, such as correlating this resource with an object in your own
   * system. Keys may be up to 40 characters and values up to 500 characters.
   */
  metadata: { [key: string]: string };

  /**
   * Name of the counterparty, or null if not recorded.
   */
  name: string | null;

  /**
   * Phone number of the counterparty, or null if not recorded.
   */
  phone: string | null;

  /**
   * Physical address of the counterparty, or null if not recorded.
   */
  physical_address: CounterpartyRetrieveResponse.PhysicalAddress | null;

  /**
   * Counterparty lifecycle status. Blocking is separate.
   */
  status: 'pending' | 'active' | 'rejected';

  /**
   * Resource type discriminator.
   */
  type: 'counterparty';
}

export namespace CounterpartyRetrieveResponse {
  export interface AbaFinancialAddress {
    /**
     * Name of the account holder.
     */
    account_holder_name: string;

    /**
     * Bank account number.
     */
    account_number: string;

    /**
     * Whether the account is a checking or a savings account, or null if not provided.
     */
    account_type: 'checking' | 'savings' | null;

    /**
     * ABA routing number (9 digits).
     */
    routing_number: string;

    /**
     * Discriminator for ABA wire financial address.
     */
    type: 'aba';
  }

  export interface IbanFinancialAddress {
    /**
     * Name of the account holder.
     */
    account_holder_name: string;

    /**
     * Whether the account is a checking or a savings account, or null if not provided.
     */
    account_type: 'checking' | 'savings' | null;

    /**
     * Bank Identifier Code, or null if not provided.
     */
    bic: string | null;

    /**
     * International Bank Account Number.
     */
    iban: string;

    /**
     * Discriminator for IBAN financial address.
     */
    type: 'iban';
  }

  export interface SortCodeFinancialAddress {
    /**
     * Name of the account holder.
     */
    account_holder_name: string;

    /**
     * UK account number (8 digits).
     */
    account_number: string;

    /**
     * UK sort code (6 digits).
     */
    sort_code: string;

    /**
     * Discriminator for UK sort code financial address.
     */
    type: 'sort_code';
  }

  export interface BicFinancialAddress {
    /**
     * Name of the account holder.
     */
    account_holder_name: string;

    /**
     * Local-format bank account number.
     */
    account_number: string;

    /**
     * Whether the account is a checking or a savings account, or null if not provided.
     */
    account_type: 'checking' | 'savings' | null;

    /**
     * ISO 9362 Bank Identifier Code (8 or 11 characters).
     */
    bic: string;

    /**
     * Domestic bank or branch code where the destination country uses one (for example
     * the BSB in Australia), or null.
     */
    local_bank_code: string | null;

    /**
     * Discriminator for BIC + local account financial address.
     */
    type: 'bic';
  }

  export interface CryptoWalletFinancialAddress {
    /**
     * Wallet address on the specified blockchain.
     */
    address: string;

    /**
     * Blockchain network for the crypto wallet.
     */
    blockchain:
      | 'bitcoin'
      | 'ethereum'
      | 'solana'
      | 'polygon'
      | 'bitcoin_testnet4'
      | 'ethereum_sepolia'
      | 'solana_devnet'
      | 'polygon_amoy';

    /**
     * Discriminator for crypto wallet financial address.
     */
    type: 'crypto_wallet';
  }

  /**
   * Physical address of the counterparty, or null if not recorded.
   */
  export interface PhysicalAddress {
    /**
     * City or locality.
     */
    city: string;

    /**
     * ISO 3166-1 alpha-2 country code.
     */
    country_code:
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
     * Primary street address, or null if not recorded.
     */
    line_1: string | null;

    /**
     * Secondary street address, or null if not recorded.
     */
    line_2: string | null;

    /**
     * Postal or ZIP code, or null if not recorded.
     */
    postal_code: string | null;

    /**
     * State, province, or region, or null if not recorded.
     */
    state: string | null;
  }
}

export interface CounterpartyUpdateResponse {
  /**
   * Unique identifier of the counterparty.
   */
  id: string;

  /**
   * Whether payments to or from this counterparty are currently blocked.
   */
  blocked: boolean;

  /**
   * Date of birth in YYYY-MM-DD format, or null if not recorded.
   */
  date_of_birth: string | null;

  /**
   * Email address of the counterparty, or null if not recorded.
   */
  email: string | null;

  /**
   * Whether the counterparty is a business or an individual.
   */
  entity_type: 'business' | 'individual';

  /**
   * Financial address of the counterparty.
   */
  financial_address:
    | CounterpartyUpdateResponse.AbaFinancialAddress
    | CounterpartyUpdateResponse.IbanFinancialAddress
    | CounterpartyUpdateResponse.SortCodeFinancialAddress
    | CounterpartyUpdateResponse.BicFinancialAddress
    | CounterpartyUpdateResponse.CryptoWalletFinancialAddress;

  /**
   * Whether the counterparty is self-owned. `false` if the counterparty is not owned
   * by you, `true` if it is.
   */
  is_self_owned: boolean;

  /**
   * National tax or identity number of the counterparty, or null if not recorded.
   */
  legal_id: string | null;

  /**
   * Set of up to 50 key-value string pairs you can attach to store structured
   * information, such as correlating this resource with an object in your own
   * system. Keys may be up to 40 characters and values up to 500 characters.
   */
  metadata: { [key: string]: string };

  /**
   * Name of the counterparty, or null if not recorded.
   */
  name: string | null;

  /**
   * Phone number of the counterparty, or null if not recorded.
   */
  phone: string | null;

  /**
   * Physical address of the counterparty, or null if not recorded.
   */
  physical_address: CounterpartyUpdateResponse.PhysicalAddress | null;

  /**
   * Counterparty lifecycle status. Blocking is separate.
   */
  status: 'pending' | 'active' | 'rejected';

  /**
   * Resource type discriminator.
   */
  type: 'counterparty';
}

export namespace CounterpartyUpdateResponse {
  export interface AbaFinancialAddress {
    /**
     * Name of the account holder.
     */
    account_holder_name: string;

    /**
     * Bank account number.
     */
    account_number: string;

    /**
     * Whether the account is a checking or a savings account, or null if not provided.
     */
    account_type: 'checking' | 'savings' | null;

    /**
     * ABA routing number (9 digits).
     */
    routing_number: string;

    /**
     * Discriminator for ABA wire financial address.
     */
    type: 'aba';
  }

  export interface IbanFinancialAddress {
    /**
     * Name of the account holder.
     */
    account_holder_name: string;

    /**
     * Whether the account is a checking or a savings account, or null if not provided.
     */
    account_type: 'checking' | 'savings' | null;

    /**
     * Bank Identifier Code, or null if not provided.
     */
    bic: string | null;

    /**
     * International Bank Account Number.
     */
    iban: string;

    /**
     * Discriminator for IBAN financial address.
     */
    type: 'iban';
  }

  export interface SortCodeFinancialAddress {
    /**
     * Name of the account holder.
     */
    account_holder_name: string;

    /**
     * UK account number (8 digits).
     */
    account_number: string;

    /**
     * UK sort code (6 digits).
     */
    sort_code: string;

    /**
     * Discriminator for UK sort code financial address.
     */
    type: 'sort_code';
  }

  export interface BicFinancialAddress {
    /**
     * Name of the account holder.
     */
    account_holder_name: string;

    /**
     * Local-format bank account number.
     */
    account_number: string;

    /**
     * Whether the account is a checking or a savings account, or null if not provided.
     */
    account_type: 'checking' | 'savings' | null;

    /**
     * ISO 9362 Bank Identifier Code (8 or 11 characters).
     */
    bic: string;

    /**
     * Domestic bank or branch code where the destination country uses one (for example
     * the BSB in Australia), or null.
     */
    local_bank_code: string | null;

    /**
     * Discriminator for BIC + local account financial address.
     */
    type: 'bic';
  }

  export interface CryptoWalletFinancialAddress {
    /**
     * Wallet address on the specified blockchain.
     */
    address: string;

    /**
     * Blockchain network for the crypto wallet.
     */
    blockchain:
      | 'bitcoin'
      | 'ethereum'
      | 'solana'
      | 'polygon'
      | 'bitcoin_testnet4'
      | 'ethereum_sepolia'
      | 'solana_devnet'
      | 'polygon_amoy';

    /**
     * Discriminator for crypto wallet financial address.
     */
    type: 'crypto_wallet';
  }

  /**
   * Physical address of the counterparty, or null if not recorded.
   */
  export interface PhysicalAddress {
    /**
     * City or locality.
     */
    city: string;

    /**
     * ISO 3166-1 alpha-2 country code.
     */
    country_code:
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
     * Primary street address, or null if not recorded.
     */
    line_1: string | null;

    /**
     * Secondary street address, or null if not recorded.
     */
    line_2: string | null;

    /**
     * Postal or ZIP code, or null if not recorded.
     */
    postal_code: string | null;

    /**
     * State, province, or region, or null if not recorded.
     */
    state: string | null;
  }
}

export interface CounterpartyListResponse {
  /**
   * Unique identifier of the counterparty.
   */
  id: string;

  /**
   * Whether payments to or from this counterparty are currently blocked.
   */
  blocked: boolean;

  /**
   * Date of birth in YYYY-MM-DD format, or null if not recorded.
   */
  date_of_birth: string | null;

  /**
   * Email address of the counterparty, or null if not recorded.
   */
  email: string | null;

  /**
   * Whether the counterparty is a business or an individual.
   */
  entity_type: 'business' | 'individual';

  /**
   * Financial address of the counterparty.
   */
  financial_address:
    | CounterpartyListResponse.AbaFinancialAddress
    | CounterpartyListResponse.IbanFinancialAddress
    | CounterpartyListResponse.SortCodeFinancialAddress
    | CounterpartyListResponse.BicFinancialAddress
    | CounterpartyListResponse.CryptoWalletFinancialAddress;

  /**
   * Whether the counterparty is self-owned. `false` if the counterparty is not owned
   * by you, `true` if it is.
   */
  is_self_owned: boolean;

  /**
   * National tax or identity number of the counterparty, or null if not recorded.
   */
  legal_id: string | null;

  /**
   * Set of up to 50 key-value string pairs you can attach to store structured
   * information, such as correlating this resource with an object in your own
   * system. Keys may be up to 40 characters and values up to 500 characters.
   */
  metadata: { [key: string]: string };

  /**
   * Name of the counterparty, or null if not recorded.
   */
  name: string | null;

  /**
   * Phone number of the counterparty, or null if not recorded.
   */
  phone: string | null;

  /**
   * Physical address of the counterparty, or null if not recorded.
   */
  physical_address: CounterpartyListResponse.PhysicalAddress | null;

  /**
   * Counterparty lifecycle status. Blocking is separate.
   */
  status: 'pending' | 'active' | 'rejected';

  /**
   * Resource type discriminator.
   */
  type: 'counterparty';
}

export namespace CounterpartyListResponse {
  export interface AbaFinancialAddress {
    /**
     * Name of the account holder.
     */
    account_holder_name: string;

    /**
     * Bank account number.
     */
    account_number: string;

    /**
     * Whether the account is a checking or a savings account, or null if not provided.
     */
    account_type: 'checking' | 'savings' | null;

    /**
     * ABA routing number (9 digits).
     */
    routing_number: string;

    /**
     * Discriminator for ABA wire financial address.
     */
    type: 'aba';
  }

  export interface IbanFinancialAddress {
    /**
     * Name of the account holder.
     */
    account_holder_name: string;

    /**
     * Whether the account is a checking or a savings account, or null if not provided.
     */
    account_type: 'checking' | 'savings' | null;

    /**
     * Bank Identifier Code, or null if not provided.
     */
    bic: string | null;

    /**
     * International Bank Account Number.
     */
    iban: string;

    /**
     * Discriminator for IBAN financial address.
     */
    type: 'iban';
  }

  export interface SortCodeFinancialAddress {
    /**
     * Name of the account holder.
     */
    account_holder_name: string;

    /**
     * UK account number (8 digits).
     */
    account_number: string;

    /**
     * UK sort code (6 digits).
     */
    sort_code: string;

    /**
     * Discriminator for UK sort code financial address.
     */
    type: 'sort_code';
  }

  export interface BicFinancialAddress {
    /**
     * Name of the account holder.
     */
    account_holder_name: string;

    /**
     * Local-format bank account number.
     */
    account_number: string;

    /**
     * Whether the account is a checking or a savings account, or null if not provided.
     */
    account_type: 'checking' | 'savings' | null;

    /**
     * ISO 9362 Bank Identifier Code (8 or 11 characters).
     */
    bic: string;

    /**
     * Domestic bank or branch code where the destination country uses one (for example
     * the BSB in Australia), or null.
     */
    local_bank_code: string | null;

    /**
     * Discriminator for BIC + local account financial address.
     */
    type: 'bic';
  }

  export interface CryptoWalletFinancialAddress {
    /**
     * Wallet address on the specified blockchain.
     */
    address: string;

    /**
     * Blockchain network for the crypto wallet.
     */
    blockchain:
      | 'bitcoin'
      | 'ethereum'
      | 'solana'
      | 'polygon'
      | 'bitcoin_testnet4'
      | 'ethereum_sepolia'
      | 'solana_devnet'
      | 'polygon_amoy';

    /**
     * Discriminator for crypto wallet financial address.
     */
    type: 'crypto_wallet';
  }

  /**
   * Physical address of the counterparty, or null if not recorded.
   */
  export interface PhysicalAddress {
    /**
     * City or locality.
     */
    city: string;

    /**
     * ISO 3166-1 alpha-2 country code.
     */
    country_code:
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
     * Primary street address, or null if not recorded.
     */
    line_1: string | null;

    /**
     * Secondary street address, or null if not recorded.
     */
    line_2: string | null;

    /**
     * Postal or ZIP code, or null if not recorded.
     */
    postal_code: string | null;

    /**
     * State, province, or region, or null if not recorded.
     */
    state: string | null;
  }
}

export interface CounterpartyCreateParams {
  /**
   * Financial address of the counterparty.
   */
  financial_address:
    | CounterpartyCreateParams.AbaFinancialAddressRequest
    | CounterpartyCreateParams.IbanFinancialAddressRequest
    | CounterpartyCreateParams.SortCodeFinancialAddressRequest
    | CounterpartyCreateParams.BicFinancialAddressRequest
    | CounterpartyCreateParams.CryptoWalletFinancialAddress;

  /**
   * Date of birth in YYYY-MM-DD format.
   */
  date_of_birth?: string;

  /**
   * Email address of the counterparty. Stored for operational contact only; it is
   * not sent with payments.
   */
  email?: string;

  /**
   * Whether the counterparty is a business or an individual. Defaults to business.
   */
  entity_type?: 'business' | 'individual';

  /**
   * Whether the counterparty is self-owned. `false` if the counterparty is not owned
   * by you, `true` if it is.
   */
  is_self_owned?: boolean;

  /**
   * National tax or identity number of the counterparty, as issued in its country:
   * CPF or CNPJ in Brazil, Cédula or NIT in Colombia, CUIL or CUIT in Argentina, DNI
   * or RUC in Peru, RUT in Chile. Free text, up to 127 characters.
   */
  legal_id?: string;

  /**
   * Set of up to 50 key-value string pairs you can attach to store structured
   * information, such as correlating this resource with an object in your own
   * system. Keys may be up to 40 characters and values up to 500 characters.
   */
  metadata?: { [key: string]: string } | null;

  /**
   * Name of the counterparty.
   */
  name?: string;

  /**
   * Phone number of the counterparty. Stored for operational contact only; it is not
   * sent with payments.
   */
  phone?: string;

  /**
   * Physical address of the counterparty.
   */
  physical_address?: CounterpartyCreateParams.PhysicalAddress;
}

export namespace CounterpartyCreateParams {
  export interface AbaFinancialAddressRequest {
    /**
     * Name of the account holder.
     */
    account_holder_name: string;

    /**
     * Bank account number.
     */
    account_number: string;

    /**
     * ABA routing number (9 digits).
     */
    routing_number: string;

    /**
     * Discriminator for ABA wire financial address.
     */
    type: 'aba';

    /**
     * Whether the account is a checking or a savings account. Optional; omit or send
     * null if not provided. Some destination countries require it (for example the
     * Dominican Republic, Honduras and Jamaica) and ACH uses it for the transaction
     * code. A payment to an account without one is sent as checking.
     */
    account_type?: 'checking' | 'savings' | null;
  }

  export interface IbanFinancialAddressRequest {
    /**
     * Name of the account holder.
     */
    account_holder_name: string;

    /**
     * International Bank Account Number.
     */
    iban: string;

    /**
     * Discriminator for IBAN financial address.
     */
    type: 'iban';

    /**
     * Whether the account is a checking or a savings account. Optional; omit or send
     * null if not provided. Some destination countries require it (for example the
     * Dominican Republic, Honduras and Jamaica) and ACH uses it for the transaction
     * code. A payment to an account without one is sent as checking.
     */
    account_type?: 'checking' | 'savings' | null;

    /**
     * Bank Identifier Code. Optional; omit or send null if not provided.
     */
    bic?: string | null;
  }

  export interface SortCodeFinancialAddressRequest {
    /**
     * Name of the account holder.
     */
    account_holder_name: string;

    /**
     * UK account number (8 digits).
     */
    account_number: string;

    /**
     * UK sort code (6 digits).
     */
    sort_code: string;

    /**
     * Discriminator for UK sort code financial address.
     */
    type: 'sort_code';
  }

  export interface BicFinancialAddressRequest {
    /**
     * Name of the account holder.
     */
    account_holder_name: string;

    /**
     * Local-format bank account number (1-34 alphanumeric characters).
     */
    account_number: string;

    /**
     * ISO 9362 Bank Identifier Code (8 or 11 characters).
     */
    bic: string;

    /**
     * Discriminator for BIC + local account financial address.
     */
    type: 'bic';

    /**
     * Whether the account is a checking or a savings account. Optional; omit or send
     * null if not provided. Some destination countries require it (for example the
     * Dominican Republic, Honduras and Jamaica) and ACH uses it for the transaction
     * code. A payment to an account without one is sent as checking.
     */
    account_type?: 'checking' | 'savings' | null;

    /**
     * Domestic bank or branch code where the destination country uses one (for example
     * the BSB in Australia). Optional; omit or send null where the country has none.
     */
    local_bank_code?: string | null;
  }

  export interface CryptoWalletFinancialAddress {
    /**
     * Wallet address on the specified blockchain.
     */
    address: string;

    /**
     * Blockchain network for the crypto wallet.
     */
    blockchain:
      | 'bitcoin'
      | 'ethereum'
      | 'solana'
      | 'polygon'
      | 'bitcoin_testnet4'
      | 'ethereum_sepolia'
      | 'solana_devnet'
      | 'polygon_amoy';

    /**
     * Discriminator for crypto wallet financial address.
     */
    type: 'crypto_wallet';
  }

  /**
   * Physical address of the counterparty.
   */
  export interface PhysicalAddress {
    /**
     * City or locality.
     */
    city: string;

    /**
     * ISO 3166-1 alpha-2 country code.
     */
    country_code:
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
     * Primary street address. Optional; omit or send null if not recorded.
     */
    line_1?: string | null;

    /**
     * Secondary street address. Optional; omit or send null if not recorded.
     */
    line_2?: string | null;

    /**
     * Postal or ZIP code. Optional; omit or send null if not recorded.
     */
    postal_code?: string | null;

    /**
     * State, province, or region. Optional; omit or send null if not recorded.
     */
    state?: string | null;
  }
}

export interface CounterpartyUpdateParams {
  /**
   * New date of birth in YYYY-MM-DD format, or null to clear the current date of
   * birth.
   */
  date_of_birth?: string | null;

  /**
   * New email address, or null to clear the current email address.
   */
  email?: string | null;

  /**
   * New entity type. Omit to keep the current entity type.
   */
  entity_type?: 'business' | 'individual';

  /**
   * New ownership status. Omit to keep the current ownership status.
   */
  is_self_owned?: boolean;

  /**
   * New legal identifier, or null to clear the current legal identifier.
   */
  legal_id?: string | null;

  /**
   * New name, or null to clear the current name.
   */
  name?: string | null;

  /**
   * New phone number, or null to clear the current phone number.
   */
  phone?: string | null;

  /**
   * New physical address, or null to clear the current physical address.
   */
  physical_address?: CounterpartyUpdateParams.PhysicalAddress | null;
}

export namespace CounterpartyUpdateParams {
  /**
   * New physical address, or null to clear the current physical address.
   */
  export interface PhysicalAddress {
    /**
     * City or locality.
     */
    city: string;

    /**
     * ISO 3166-1 alpha-2 country code.
     */
    country_code:
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
     * Primary street address. Optional; omit or send null if not recorded.
     */
    line_1?: string | null;

    /**
     * Secondary street address. Optional; omit or send null if not recorded.
     */
    line_2?: string | null;

    /**
     * Postal or ZIP code. Optional; omit or send null if not recorded.
     */
    postal_code?: string | null;

    /**
     * State, province, or region. Optional; omit or send null if not recorded.
     */
    state?: string | null;
  }
}

export interface CounterpartyListParams extends CursorPageParams {}

export declare namespace Counterparties {
  export {
    type CounterpartyCreateResponse as CounterpartyCreateResponse,
    type CounterpartyRetrieveResponse as CounterpartyRetrieveResponse,
    type CounterpartyUpdateResponse as CounterpartyUpdateResponse,
    type CounterpartyListResponse as CounterpartyListResponse,
    type CounterpartyListResponsesCursorPage as CounterpartyListResponsesCursorPage,
    type CounterpartyCreateParams as CounterpartyCreateParams,
    type CounterpartyUpdateParams as CounterpartyUpdateParams,
    type CounterpartyListParams as CounterpartyListParams,
  };
}
