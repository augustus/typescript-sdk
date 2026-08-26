// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Payouts extends APIResource {
  /**
   * Creates a new payout.
   *
   * @example
   * ```ts
   * const payout = await client.payouts.create({
   *   account_id: '550e8400-e29b-41d4-a716-44665544000b',
   *   amount: '100.50',
   *   counterparty: {
   *     financial_address: {
   *       account_holder_name: 'Acme Sandbox Ltd.',
   *       bic: 'COBADEFFXXX',
   *       iban: 'DE89370400440532013000',
   *       type: 'iban',
   *     },
   *     physical_address: {
   *       city: 'city',
   *       country_code: 'DE',
   *       line_1: 'line_1',
   *       line_2: 'line_2',
   *       postal_code: 'postal_code',
   *       state: 'state',
   *     },
   *   },
   *   counterparty_id: '550e8400-e29b-41d4-a716-446655440000',
   *   currency: 'EUR',
   *   metadata: { invoice_id: 'INV-2026-0042' },
   *   rail: 'sepa',
   *   unstructured_remittance_information: 'INV-2026-0042',
   * });
   * ```
   */
  create(body: PayoutCreateParams, options?: RequestOptions): APIPromise<PayoutCreateResponse> {
    return this._client.post('/v1/payouts', { body, ...options });
  }

  /**
   * Retrieves a payout by ID.
   *
   * @example
   * ```ts
   * const payout = await client.payouts.retrieve(
   *   '550e8400-e29b-41d4-a716-446655440003',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<PayoutRetrieveResponse> {
    return this._client.get(path`/v1/payouts/${id}`, options);
  }

  /**
   * Lists payouts for the merchant with cursor-based pagination.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const payoutListResponse of client.payouts.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: PayoutListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<PayoutListResponsesCursorPage, PayoutListResponse> {
    return this._client.getAPIList('/v1/payouts', CursorPage<PayoutListResponse>, { query, ...options });
  }
}

export type PayoutListResponsesCursorPage = CursorPage<PayoutListResponse>;

export interface PayoutCreateResponse {
  /**
   * Unique identifier of the payout.
   */
  id: string;

  /**
   * ID of the account that was debited.
   */
  account_id: string;

  /**
   * Amount as a string decimal (e.g. "100.50").
   */
  amount: string;

  /**
   * ID of the counterparty that receives the money.
   */
  counterparty_id: string;

  /**
   * Currency code (ISO 4217 or crypto).
   */
  currency: 'EUR' | 'GBP' | 'USD' | 'USDC';

  /**
   * Failure details when status is failed, otherwise null.
   */
  failure: PayoutCreateResponse.Failure | null;

  /**
   * ISO 8601 UTC timestamp when the payout was initiated.
   */
  initiated_at: string;

  /**
   * Key-value pairs stored with the payout.
   */
  metadata: { [key: string]: string };

  /**
   * Payment scheme or blockchain used for the payout, or null when unknown.
   */
  rail:
    | 'sepa'
    | 'sepa_instant'
    | 'faster_payments'
    | 'swift'
    | 'internal'
    | 'target'
    | 'ach'
    | 'fedwire'
    | 'bitcoin'
    | 'bitcoin_testnet4'
    | 'ethereum'
    | 'ethereum_sepolia'
    | 'solana'
    | 'solana_devnet'
    | 'polygon'
    | 'polygon_amoy'
    | null;

  /**
   * ISO 8601 UTC timestamp when the payout was sent.
   */
  sent_at: string | null;

  /**
   * Current status of the payout. `initiated`: the payout has been initiated,
   * `submitted`: the payout was submitted to the rail, `sent`: the payout was
   * accepted and sent on the rail, `failed`: the payout failed after initiation or
   * submission, `returned`: the payout is returned, after it was sent.
   */
  status: 'initiated' | 'submitted' | 'sent' | 'failed' | 'returned';

  /**
   * Transaction hash for crypto payouts, or null when not known. Only blockchain
   * rails support this field.
   */
  tx_hash: string | null;

  /**
   * Resource type discriminator.
   */
  type: 'payout';

  /**
   * Unstructured remittance information attached to the transfer. Not all rails
   * support this field.
   */
  unstructured_remittance_information: string | null;
}

export namespace PayoutCreateResponse {
  /**
   * Failure details when status is failed, otherwise null.
   */
  export interface Failure {
    /**
     * Failure code.
     */
    code:
      | 'account_closed'
      | 'account_blocked'
      | 'insufficient_funds'
      | 'invalid_account_format'
      | 'invalid_routing_number'
      | 'invalid_instruction'
      | 'invalid_amount'
      | 'invalid_time'
      | 'duplicate_transaction'
      | 'payee_verification_failed'
      | 'system_error'
      | 'provider_system_error'
      | 'rejected_by_correspondent_bank'
      | 'blocked_by_review'
      | 'unknown';

    /**
     * Human-readable description of the failure.
     */
    message: string;

    /**
     * Whether the payout can be retried.
     */
    retry: boolean;
  }
}

export interface PayoutRetrieveResponse {
  /**
   * Unique identifier of the payout.
   */
  id: string;

  /**
   * ID of the account that was debited.
   */
  account_id: string;

  /**
   * Amount as a string decimal (e.g. "100.50").
   */
  amount: string;

  /**
   * ID of the counterparty that receives the money.
   */
  counterparty_id: string;

  /**
   * Currency code (ISO 4217 or crypto).
   */
  currency: 'EUR' | 'GBP' | 'USD' | 'USDC';

  /**
   * Failure details when status is failed, otherwise null.
   */
  failure: PayoutRetrieveResponse.Failure | null;

  /**
   * ISO 8601 UTC timestamp when the payout was initiated.
   */
  initiated_at: string;

  /**
   * Key-value pairs stored with the payout.
   */
  metadata: { [key: string]: string };

  /**
   * Payment scheme or blockchain used for the payout, or null when unknown.
   */
  rail:
    | 'sepa'
    | 'sepa_instant'
    | 'faster_payments'
    | 'swift'
    | 'internal'
    | 'target'
    | 'ach'
    | 'fedwire'
    | 'bitcoin'
    | 'bitcoin_testnet4'
    | 'ethereum'
    | 'ethereum_sepolia'
    | 'solana'
    | 'solana_devnet'
    | 'polygon'
    | 'polygon_amoy'
    | null;

  /**
   * ISO 8601 UTC timestamp when the payout was sent.
   */
  sent_at: string | null;

  /**
   * Current status of the payout. `initiated`: the payout has been initiated,
   * `submitted`: the payout was submitted to the rail, `sent`: the payout was
   * accepted and sent on the rail, `failed`: the payout failed after initiation or
   * submission, `returned`: the payout is returned, after it was sent.
   */
  status: 'initiated' | 'submitted' | 'sent' | 'failed' | 'returned';

  /**
   * Transaction hash for crypto payouts, or null when not known. Only blockchain
   * rails support this field.
   */
  tx_hash: string | null;

  /**
   * Resource type discriminator.
   */
  type: 'payout';

  /**
   * Unstructured remittance information attached to the transfer. Not all rails
   * support this field.
   */
  unstructured_remittance_information: string | null;
}

export namespace PayoutRetrieveResponse {
  /**
   * Failure details when status is failed, otherwise null.
   */
  export interface Failure {
    /**
     * Failure code.
     */
    code:
      | 'account_closed'
      | 'account_blocked'
      | 'insufficient_funds'
      | 'invalid_account_format'
      | 'invalid_routing_number'
      | 'invalid_instruction'
      | 'invalid_amount'
      | 'invalid_time'
      | 'duplicate_transaction'
      | 'payee_verification_failed'
      | 'system_error'
      | 'provider_system_error'
      | 'rejected_by_correspondent_bank'
      | 'blocked_by_review'
      | 'unknown';

    /**
     * Human-readable description of the failure.
     */
    message: string;

    /**
     * Whether the payout can be retried.
     */
    retry: boolean;
  }
}

export interface PayoutListResponse {
  /**
   * Unique identifier of the payout.
   */
  id: string;

  /**
   * ID of the account that was debited.
   */
  account_id: string;

  /**
   * Amount as a string decimal (e.g. "100.50").
   */
  amount: string;

  /**
   * ID of the counterparty that receives the money.
   */
  counterparty_id: string;

  /**
   * Currency code (ISO 4217 or crypto).
   */
  currency: 'EUR' | 'GBP' | 'USD' | 'USDC';

  /**
   * Failure details when status is failed, otherwise null.
   */
  failure: PayoutListResponse.Failure | null;

  /**
   * ISO 8601 UTC timestamp when the payout was initiated.
   */
  initiated_at: string;

  /**
   * Key-value pairs stored with the payout.
   */
  metadata: { [key: string]: string };

  /**
   * Payment scheme or blockchain used for the payout, or null when unknown.
   */
  rail:
    | 'sepa'
    | 'sepa_instant'
    | 'faster_payments'
    | 'swift'
    | 'internal'
    | 'target'
    | 'ach'
    | 'fedwire'
    | 'bitcoin'
    | 'bitcoin_testnet4'
    | 'ethereum'
    | 'ethereum_sepolia'
    | 'solana'
    | 'solana_devnet'
    | 'polygon'
    | 'polygon_amoy'
    | null;

  /**
   * ISO 8601 UTC timestamp when the payout was sent.
   */
  sent_at: string | null;

  /**
   * Current status of the payout. `initiated`: the payout has been initiated,
   * `submitted`: the payout was submitted to the rail, `sent`: the payout was
   * accepted and sent on the rail, `failed`: the payout failed after initiation or
   * submission, `returned`: the payout is returned, after it was sent.
   */
  status: 'initiated' | 'submitted' | 'sent' | 'failed' | 'returned';

  /**
   * Transaction hash for crypto payouts, or null when not known. Only blockchain
   * rails support this field.
   */
  tx_hash: string | null;

  /**
   * Resource type discriminator.
   */
  type: 'payout';

  /**
   * Unstructured remittance information attached to the transfer. Not all rails
   * support this field.
   */
  unstructured_remittance_information: string | null;
}

export namespace PayoutListResponse {
  /**
   * Failure details when status is failed, otherwise null.
   */
  export interface Failure {
    /**
     * Failure code.
     */
    code:
      | 'account_closed'
      | 'account_blocked'
      | 'insufficient_funds'
      | 'invalid_account_format'
      | 'invalid_routing_number'
      | 'invalid_instruction'
      | 'invalid_amount'
      | 'invalid_time'
      | 'duplicate_transaction'
      | 'payee_verification_failed'
      | 'system_error'
      | 'provider_system_error'
      | 'rejected_by_correspondent_bank'
      | 'blocked_by_review'
      | 'unknown';

    /**
     * Human-readable description of the failure.
     */
    message: string;

    /**
     * Whether the payout can be retried.
     */
    retry: boolean;
  }
}

export interface PayoutCreateParams {
  /**
   * ID of the account to debit.
   */
  account_id: string;

  /**
   * Amount as a string decimal (e.g. "100.50").
   */
  amount: string;

  /**
   * Counterparty that receives the money. Either the `counterparty_id` or the
   * `counterparty` object must be provided. When providing the `counterparty`
   * object, a new counterparty is created automatically.
   */
  counterparty: PayoutCreateParams.Counterparty | null;

  /**
   * ID of the counterparty that receives the money. Either the `counterparty_id` or
   * the `counterparty` object must be provided. When providing the `counterparty`
   * object, a new counterparty is created automatically.
   */
  counterparty_id: string | null;

  /**
   * Currency code (ISO 4217 or crypto).
   */
  currency: 'EUR' | 'GBP' | 'USD' | 'USDC';

  /**
   * Key-value pairs stored with the payout.
   */
  metadata: { [key: string]: string } | null;

  /**
   * Payment scheme or blockchain used for the payout, or null when unknown.
   */
  rail:
    | 'sepa'
    | 'sepa_instant'
    | 'faster_payments'
    | 'swift'
    | 'internal'
    | 'target'
    | 'ach'
    | 'fedwire'
    | 'bitcoin'
    | 'bitcoin_testnet4'
    | 'ethereum'
    | 'ethereum_sepolia'
    | 'solana'
    | 'solana_devnet'
    | 'polygon'
    | 'polygon_amoy'
    | null;

  /**
   * Unstructured remittance information attached to the transfer. This appears on
   * the counterparty's bank statement. Not supported by blockchain rails.
   */
  unstructured_remittance_information: string | null;
}

export namespace PayoutCreateParams {
  /**
   * Counterparty that receives the money. Either the `counterparty_id` or the
   * `counterparty` object must be provided. When providing the `counterparty`
   * object, a new counterparty is created automatically.
   */
  export interface Counterparty {
    /**
     * Financial address of the counterparty.
     */
    financial_address:
      | Counterparty.IbanFinancialAddress
      | Counterparty.SortCodeFinancialAddress
      | Counterparty.AbaFinancialAddress
      | Counterparty.CryptoWalletFinancialAddress;

    /**
     * Physical address of the counterparty.
     */
    physical_address: Counterparty.PhysicalAddress | null;
  }

  export namespace Counterparty {
    export interface IbanFinancialAddress {
      /**
       * Name of the account holder.
       */
      account_holder_name: string;

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
       * ABA routing number (9 digits).
       */
      routing_number: string;

      /**
       * Discriminator for ABA wire financial address.
       */
      type: 'aba';
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
       * Primary street address.
       */
      line_1: string;

      /**
       * Secondary street address, or null if not recorded.
       */
      line_2: string | null;

      /**
       * Postal or ZIP code.
       */
      postal_code: string;

      /**
       * State, province, or region, or null if not recorded.
       */
      state: string | null;
    }
  }
}

export interface PayoutListParams extends CursorPageParams {
  created_at?: PayoutListParams.CreatedAt;

  /**
   * Filter to these currency codes. Use a separate `currencies` query parameter for
   * each value (e.g. `?currencies=EUR&currencies=USD`).
   */
  currencies?: Array<'EUR' | 'GBP' | 'USD' | 'USDC'>;

  /**
   * Filter by payout status.
   */
  status?: 'initiated' | 'submitted' | 'sent' | 'failed' | 'returned';
}

export namespace PayoutListParams {
  export interface CreatedAt {
    /**
     * Include payouts whose created_at is greater than or equal to this ISO 8601
     * timestamp.
     */
    gte?: string;

    /**
     * Include payouts whose created_at is less than or equal to this ISO 8601
     * timestamp.
     */
    lte?: string;
  }
}

export declare namespace Payouts {
  export {
    type PayoutCreateResponse as PayoutCreateResponse,
    type PayoutRetrieveResponse as PayoutRetrieveResponse,
    type PayoutListResponse as PayoutListResponse,
    type PayoutListResponsesCursorPage as PayoutListResponsesCursorPage,
    type PayoutCreateParams as PayoutCreateParams,
    type PayoutListParams as PayoutListParams,
  };
}
