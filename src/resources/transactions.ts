// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Transactions extends APIResource {
  /**
   * Retrieves a transaction by ID.
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<TransactionRetrieveResponse> {
    return this._client.get(path`/v1/transactions/${id}`, options);
  }

  /**
   * Lists transactions for an account with cursor-based pagination.
   */
  list(
    query: TransactionListParams,
    options?: RequestOptions,
  ): PagePromise<TransactionListResponsesCursorPage, TransactionListResponse> {
    return this._client.getAPIList('/v1/transactions', CursorPage<TransactionListResponse>, {
      query,
      ...options,
    });
  }
}

export type TransactionListResponsesCursorPage = CursorPage<TransactionListResponse>;

export interface TransactionRetrieveResponse {
  /**
   * Unique identifier of the transaction.
   */
  id: string;

  /**
   * ID of the merchant account this transaction was credited to or debited from.
   */
  account_id: string;

  /**
   * Absolute amount as a string decimal (e.g. "100.50").
   */
  amount: string;

  /**
   * ISO 8601 UTC timestamp when the transaction was recorded.
   */
  booked_at: string;

  /**
   * Counterparty of the transaction.
   */
  counterparty: TransactionRetrieveResponse.Counterparty | null;

  /**
   * ID of the counterparty this transaction is associated with, or null when none
   * was resolved. Correlates with the counterparties API and a payout's
   * counterparty_id.
   */
  counterparty_id: string | null;

  /**
   * Currency code (ISO 4217 or crypto).
   */
  currency: 'EUR' | 'GBP' | 'USD' | 'USDC';

  /**
   * Payment scheme or blockchain used for the transaction, or null when unknown.
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
   * Direction of the movement relative to the merchant account.
   */
  side: 'credit' | 'debit';

  /**
   * The resource that originated this transaction, or null when it does not map to a
   * retrievable resource.
   */
  source: TransactionRetrieveResponse.Source | null;

  /**
   * State of the transaction. Transactions are by definition booked.
   */
  status: 'booked';

  /**
   * Reference used to track the payment across the payment network, such as the UETR
   * for SWIFT payments.
   */
  tracking_reference: string | null;

  /**
   * Transaction hash for crypto transactions, or null when not known. Only
   * blockchain rails support this field.
   */
  tx_hash: string | null;

  /**
   * Resource type discriminator.
   */
  type: 'transaction';

  /**
   * Unstructured remittance information attached to the transfer. Not all rails
   * support this field.
   */
  unstructured_remittance_information: string | null;
}

export namespace TransactionRetrieveResponse {
  /**
   * Counterparty of the transaction.
   */
  export interface Counterparty {
    /**
     * Financial address of the counterparty.
     */
    financial_address:
      | Counterparty.IbanFinancialAddress
      | Counterparty.SortCodeFinancialAddress
      | Counterparty.AbaFinancialAddress
      | Counterparty.BicFinancialAddress
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

  /**
   * The resource that originated this transaction, or null when it does not map to a
   * retrievable resource.
   */
  export interface Source {
    /**
     * Identifier of the originating resource, retrievable on its own endpoint.
     */
    id: string;

    /**
     * Type of the resource that originated this transaction.
     */
    type: 'deposit' | 'payout' | 'return';
  }
}

export interface TransactionListResponse {
  /**
   * Unique identifier of the transaction.
   */
  id: string;

  /**
   * ID of the merchant account this transaction was credited to or debited from.
   */
  account_id: string;

  /**
   * Absolute amount as a string decimal (e.g. "100.50").
   */
  amount: string;

  /**
   * ISO 8601 UTC timestamp when the transaction was recorded.
   */
  booked_at: string;

  /**
   * Counterparty of the transaction.
   */
  counterparty: TransactionListResponse.Counterparty | null;

  /**
   * ID of the counterparty this transaction is associated with, or null when none
   * was resolved. Correlates with the counterparties API and a payout's
   * counterparty_id.
   */
  counterparty_id: string | null;

  /**
   * Currency code (ISO 4217 or crypto).
   */
  currency: 'EUR' | 'GBP' | 'USD' | 'USDC';

  /**
   * Payment scheme or blockchain used for the transaction, or null when unknown.
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
   * Direction of the movement relative to the merchant account.
   */
  side: 'credit' | 'debit';

  /**
   * The resource that originated this transaction, or null when it does not map to a
   * retrievable resource.
   */
  source: TransactionListResponse.Source | null;

  /**
   * State of the transaction. Transactions are by definition booked.
   */
  status: 'booked';

  /**
   * Reference used to track the payment across the payment network, such as the UETR
   * for SWIFT payments.
   */
  tracking_reference: string | null;

  /**
   * Transaction hash for crypto transactions, or null when not known. Only
   * blockchain rails support this field.
   */
  tx_hash: string | null;

  /**
   * Resource type discriminator.
   */
  type: 'transaction';

  /**
   * Unstructured remittance information attached to the transfer. Not all rails
   * support this field.
   */
  unstructured_remittance_information: string | null;
}

export namespace TransactionListResponse {
  /**
   * Counterparty of the transaction.
   */
  export interface Counterparty {
    /**
     * Financial address of the counterparty.
     */
    financial_address:
      | Counterparty.IbanFinancialAddress
      | Counterparty.SortCodeFinancialAddress
      | Counterparty.AbaFinancialAddress
      | Counterparty.BicFinancialAddress
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

  /**
   * The resource that originated this transaction, or null when it does not map to a
   * retrievable resource.
   */
  export interface Source {
    /**
     * Identifier of the originating resource, retrievable on its own endpoint.
     */
    id: string;

    /**
     * Type of the resource that originated this transaction.
     */
    type: 'deposit' | 'payout' | 'return';
  }
}

export interface TransactionListParams extends CursorPageParams {
  /**
   * Account to list transactions for.
   */
  account_id: string;

  booked_at?: TransactionListParams.BookedAt;
}

export namespace TransactionListParams {
  export interface BookedAt {
    /**
     * Include transactions whose booked_at is greater than or equal to this ISO 8601
     * timestamp.
     */
    gte?: string;

    /**
     * Include transactions whose booked_at is less than or equal to this ISO 8601
     * timestamp.
     */
    lte?: string;
  }
}

export declare namespace Transactions {
  export {
    type TransactionRetrieveResponse as TransactionRetrieveResponse,
    type TransactionListResponse as TransactionListResponse,
    type TransactionListResponsesCursorPage as TransactionListResponsesCursorPage,
    type TransactionListParams as TransactionListParams,
  };
}
