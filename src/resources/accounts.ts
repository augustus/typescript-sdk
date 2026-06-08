// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Accounts extends APIResource {
  /**
   * Creates a new account.
   */
  create(body: AccountCreateParams, options?: RequestOptions): APIPromise<AccountCreateResponse> {
    return this._client.post('/v1/accounts', { body, ...options });
  }

  /**
   * Retrieves an account by ID.
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<AccountRetrieveResponse> {
    return this._client.get(path`/v1/accounts/${id}`, options);
  }

  /**
   * Returns a paginated list of accounts.
   */
  list(
    query: AccountListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<AccountListResponsesCursorPage, AccountListResponse> {
    return this._client.getAPIList('/v1/accounts', CursorPage<AccountListResponse>, { query, ...options });
  }

  /**
   * Closes an account
   */
  close(id: string, body: AccountCloseParams, options?: RequestOptions): APIPromise<AccountCloseResponse> {
    return this._client.post(path`/v1/accounts/${id}/close`, { body, ...options });
  }

  /**
   * Freezes an account
   */
  freeze(id: string, options?: RequestOptions): APIPromise<AccountFreezeResponse> {
    return this._client.post(path`/v1/accounts/${id}/freeze`, options);
  }

  /**
   * Retrieves the available balance for an account.
   */
  retrieveBalance(id: string, options?: RequestOptions): APIPromise<AccountRetrieveBalanceResponse> {
    return this._client.get(path`/v1/accounts/${id}/balance`, options);
  }

  /**
   * Unfreezes an account
   */
  unfreeze(id: string, options?: RequestOptions): APIPromise<AccountUnfreezeResponse> {
    return this._client.post(path`/v1/accounts/${id}/unfreeze`, options);
  }
}

export type AccountListResponsesCursorPage = CursorPage<AccountListResponse>;

export interface AccountCreateResponse {
  /**
   * Unique identifier of the account.
   */
  id: string;

  /**
   * Type of the account.
   */
  account_type: 'virtual_account' | 'payment_account';

  /**
   * Asset type of the account.
   */
  asset_type: 'fiat' | 'crypto';

  /**
   * ISO 8601 UTC timestamp when the account was created.
   */
  created_at: string;

  /**
   * ISO 4217 currency code for the account.
   */
  currency: 'EUR' | 'GBP' | 'USD' | 'USDC';

  /**
   * Payment identifiers (e.g. IBAN, account number, wallet address) through which
   * this account can send or receive funds.
   */
  financial_addresses: Array<
    | AccountCreateResponse.UnionMember0
    | AccountCreateResponse.UnionMember1
    | AccountCreateResponse.UnionMember2
    | AccountCreateResponse.UnionMember3
  >;

  /**
   * Human-readable label for the account.
   */
  label: string;

  /**
   * Current status of the account.
   */
  status: 'pending' | 'active' | 'frozen' | 'closed';

  /**
   * Resource type discriminator.
   */
  type: 'account';

  /**
   * ISO 8601 UTC timestamp when the account was last updated.
   */
  updated_at: string;
}

export namespace AccountCreateResponse {
  export interface UnionMember0 {
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

  export interface UnionMember1 {
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

  export interface UnionMember2 {
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

  export interface UnionMember3 {
    /**
     * Wallet address on the specified blockchain.
     */
    address: string;

    /**
     * Blockchain network for the crypto wallet.
     */
    blockchain: 'ethereum' | 'solana' | 'polygon' | 'ethereum_sepolia' | 'solana_devnet' | 'polygon_amoy';

    /**
     * Discriminator for crypto wallet financial address.
     */
    type: 'crypto_wallet';
  }
}

export interface AccountRetrieveResponse {
  /**
   * Unique identifier of the account.
   */
  id: string;

  /**
   * Type of the account.
   */
  account_type: 'virtual_account' | 'payment_account';

  /**
   * Asset type of the account.
   */
  asset_type: 'fiat' | 'crypto';

  /**
   * ISO 8601 UTC timestamp when the account was created.
   */
  created_at: string;

  /**
   * ISO 4217 currency code for the account.
   */
  currency: 'EUR' | 'GBP' | 'USD' | 'USDC';

  /**
   * Payment identifiers (e.g. IBAN, account number, wallet address) through which
   * this account can send or receive funds.
   */
  financial_addresses: Array<
    | AccountRetrieveResponse.UnionMember0
    | AccountRetrieveResponse.UnionMember1
    | AccountRetrieveResponse.UnionMember2
    | AccountRetrieveResponse.UnionMember3
  >;

  /**
   * Human-readable label for the account.
   */
  label: string;

  /**
   * Current status of the account.
   */
  status: 'pending' | 'active' | 'frozen' | 'closed';

  /**
   * Resource type discriminator.
   */
  type: 'account';

  /**
   * ISO 8601 UTC timestamp when the account was last updated.
   */
  updated_at: string;
}

export namespace AccountRetrieveResponse {
  export interface UnionMember0 {
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

  export interface UnionMember1 {
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

  export interface UnionMember2 {
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

  export interface UnionMember3 {
    /**
     * Wallet address on the specified blockchain.
     */
    address: string;

    /**
     * Blockchain network for the crypto wallet.
     */
    blockchain: 'ethereum' | 'solana' | 'polygon' | 'ethereum_sepolia' | 'solana_devnet' | 'polygon_amoy';

    /**
     * Discriminator for crypto wallet financial address.
     */
    type: 'crypto_wallet';
  }
}

export interface AccountListResponse {
  /**
   * Unique identifier of the account.
   */
  id: string;

  /**
   * Type of the account.
   */
  account_type: 'virtual_account' | 'payment_account';

  /**
   * Asset type of the account.
   */
  asset_type: 'fiat' | 'crypto';

  /**
   * ISO 8601 UTC timestamp when the account was created.
   */
  created_at: string;

  /**
   * ISO 4217 currency code for the account.
   */
  currency: 'EUR' | 'GBP' | 'USD' | 'USDC';

  /**
   * Payment identifiers (e.g. IBAN, account number, wallet address) through which
   * this account can send or receive funds.
   */
  financial_addresses: Array<
    | AccountListResponse.UnionMember0
    | AccountListResponse.UnionMember1
    | AccountListResponse.UnionMember2
    | AccountListResponse.UnionMember3
  >;

  /**
   * Human-readable label for the account.
   */
  label: string;

  /**
   * Current status of the account.
   */
  status: 'pending' | 'active' | 'frozen' | 'closed';

  /**
   * Resource type discriminator.
   */
  type: 'account';

  /**
   * ISO 8601 UTC timestamp when the account was last updated.
   */
  updated_at: string;
}

export namespace AccountListResponse {
  export interface UnionMember0 {
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

  export interface UnionMember1 {
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

  export interface UnionMember2 {
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

  export interface UnionMember3 {
    /**
     * Wallet address on the specified blockchain.
     */
    address: string;

    /**
     * Blockchain network for the crypto wallet.
     */
    blockchain: 'ethereum' | 'solana' | 'polygon' | 'ethereum_sepolia' | 'solana_devnet' | 'polygon_amoy';

    /**
     * Discriminator for crypto wallet financial address.
     */
    type: 'crypto_wallet';
  }
}

export interface AccountCloseResponse {
  /**
   * Unique identifier of the account.
   */
  id: string;

  /**
   * Type of the account.
   */
  account_type: 'virtual_account' | 'payment_account';

  /**
   * Asset type of the account.
   */
  asset_type: 'fiat' | 'crypto';

  /**
   * ISO 8601 UTC timestamp when the account was created.
   */
  created_at: string;

  /**
   * ISO 4217 currency code for the account.
   */
  currency: 'EUR' | 'GBP' | 'USD' | 'USDC';

  /**
   * Payment identifiers (e.g. IBAN, account number, wallet address) through which
   * this account can send or receive funds.
   */
  financial_addresses: Array<
    | AccountCloseResponse.UnionMember0
    | AccountCloseResponse.UnionMember1
    | AccountCloseResponse.UnionMember2
    | AccountCloseResponse.UnionMember3
  >;

  /**
   * Human-readable label for the account.
   */
  label: string;

  /**
   * Current status of the account.
   */
  status: 'pending' | 'active' | 'frozen' | 'closed';

  /**
   * Resource type discriminator.
   */
  type: 'account';

  /**
   * ISO 8601 UTC timestamp when the account was last updated.
   */
  updated_at: string;
}

export namespace AccountCloseResponse {
  export interface UnionMember0 {
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

  export interface UnionMember1 {
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

  export interface UnionMember2 {
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

  export interface UnionMember3 {
    /**
     * Wallet address on the specified blockchain.
     */
    address: string;

    /**
     * Blockchain network for the crypto wallet.
     */
    blockchain: 'ethereum' | 'solana' | 'polygon' | 'ethereum_sepolia' | 'solana_devnet' | 'polygon_amoy';

    /**
     * Discriminator for crypto wallet financial address.
     */
    type: 'crypto_wallet';
  }
}

export interface AccountFreezeResponse {
  /**
   * Unique identifier of the account.
   */
  id: string;

  /**
   * Type of the account.
   */
  account_type: 'virtual_account' | 'payment_account';

  /**
   * Asset type of the account.
   */
  asset_type: 'fiat' | 'crypto';

  /**
   * ISO 8601 UTC timestamp when the account was created.
   */
  created_at: string;

  /**
   * ISO 4217 currency code for the account.
   */
  currency: 'EUR' | 'GBP' | 'USD' | 'USDC';

  /**
   * Payment identifiers (e.g. IBAN, account number, wallet address) through which
   * this account can send or receive funds.
   */
  financial_addresses: Array<
    | AccountFreezeResponse.UnionMember0
    | AccountFreezeResponse.UnionMember1
    | AccountFreezeResponse.UnionMember2
    | AccountFreezeResponse.UnionMember3
  >;

  /**
   * Human-readable label for the account.
   */
  label: string;

  /**
   * Current status of the account.
   */
  status: 'pending' | 'active' | 'frozen' | 'closed';

  /**
   * Resource type discriminator.
   */
  type: 'account';

  /**
   * ISO 8601 UTC timestamp when the account was last updated.
   */
  updated_at: string;
}

export namespace AccountFreezeResponse {
  export interface UnionMember0 {
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

  export interface UnionMember1 {
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

  export interface UnionMember2 {
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

  export interface UnionMember3 {
    /**
     * Wallet address on the specified blockchain.
     */
    address: string;

    /**
     * Blockchain network for the crypto wallet.
     */
    blockchain: 'ethereum' | 'solana' | 'polygon' | 'ethereum_sepolia' | 'solana_devnet' | 'polygon_amoy';

    /**
     * Discriminator for crypto wallet financial address.
     */
    type: 'crypto_wallet';
  }
}

export interface AccountRetrieveBalanceResponse {
  /**
   * Unique identifier of the account.
   */
  account_id: string;

  /**
   * Available balance amount as a decimal string.
   */
  amount: string;

  /**
   * ISO 8601 UTC timestamp when the balance was retrieved.
   */
  as_of: string;

  /**
   * ISO 4217 currency code for the balance.
   */
  currency: 'EUR' | 'GBP' | 'USD' | 'USDC';

  /**
   * Resource type discriminator.
   */
  type: 'account_balance';
}

export interface AccountUnfreezeResponse {
  /**
   * Unique identifier of the account.
   */
  id: string;

  /**
   * Type of the account.
   */
  account_type: 'virtual_account' | 'payment_account';

  /**
   * Asset type of the account.
   */
  asset_type: 'fiat' | 'crypto';

  /**
   * ISO 8601 UTC timestamp when the account was created.
   */
  created_at: string;

  /**
   * ISO 4217 currency code for the account.
   */
  currency: 'EUR' | 'GBP' | 'USD' | 'USDC';

  /**
   * Payment identifiers (e.g. IBAN, account number, wallet address) through which
   * this account can send or receive funds.
   */
  financial_addresses: Array<
    | AccountUnfreezeResponse.UnionMember0
    | AccountUnfreezeResponse.UnionMember1
    | AccountUnfreezeResponse.UnionMember2
    | AccountUnfreezeResponse.UnionMember3
  >;

  /**
   * Human-readable label for the account.
   */
  label: string;

  /**
   * Current status of the account.
   */
  status: 'pending' | 'active' | 'frozen' | 'closed';

  /**
   * Resource type discriminator.
   */
  type: 'account';

  /**
   * ISO 8601 UTC timestamp when the account was last updated.
   */
  updated_at: string;
}

export namespace AccountUnfreezeResponse {
  export interface UnionMember0 {
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

  export interface UnionMember1 {
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

  export interface UnionMember2 {
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

  export interface UnionMember3 {
    /**
     * Wallet address on the specified blockchain.
     */
    address: string;

    /**
     * Blockchain network for the crypto wallet.
     */
    blockchain: 'ethereum' | 'solana' | 'polygon' | 'ethereum_sepolia' | 'solana_devnet' | 'polygon_amoy';

    /**
     * Discriminator for crypto wallet financial address.
     */
    type: 'crypto_wallet';
  }
}

export interface AccountCreateParams {
  /**
   * ID of the account program to create the account under.
   */
  account_program_id: string;

  /**
   * Type of account. Currently only virtual account.
   */
  account_type: 'virtual_account';

  /**
   * Personal information of the account beneficiary.
   */
  beneficiary_data: AccountCreateParams.UnionMember0 | AccountCreateParams.UnionMember1;
}

export namespace AccountCreateParams {
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
    identification: UnionMember0.UnionMember0 | UnionMember0.UnionMember1;

    /**
     * Full legal name of the account holder.
     */
    legal_name: string;

    /**
     * Residential address of the account holder.
     */
    residential_address: UnionMember0.UnionMember0 | UnionMember0.UnionMember1;
  }

  export namespace UnionMember0 {
    export interface UnionMember0 {
      type: 'ssn';

      value: string;
    }

    export interface UnionMember1 {
      type: 'itin';

      value: string;
    }

    export interface UnionMember0 {
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

    export interface UnionMember1 {
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
    residential_address: UnionMember1.UnionMember0 | UnionMember1.UnionMember1;
  }

  export namespace UnionMember1 {
    /**
     * Government-issued identification with type: "id" (generic government-issued ID).
     */
    export interface Identification {
      type: 'id';

      value: string;
    }

    export interface UnionMember0 {
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

    export interface UnionMember1 {
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
}

export interface AccountListParams extends CursorPageParams {
  /**
   * Filter by account holder name (case-insensitive phrase match). Crypto wallets
   * are excluded when set.
   */
  account_holder_name?: string;

  /**
   * Filter by exact fiat account number. Crypto wallets are excluded when set.
   */
  account_number?: string;

  /**
   * ID of the account program to list virtual accounts for.
   */
  parent_id?: string;

  /**
   * Filter by account status.
   */
  status?: 'pending' | 'active' | 'frozen';
}

export interface AccountCloseParams {
  /**
   * Reason for closing the account.
   */
  reason: 'aml_risk_fraud' | 'client_request';
}

export declare namespace Accounts {
  export {
    type AccountCreateResponse as AccountCreateResponse,
    type AccountRetrieveResponse as AccountRetrieveResponse,
    type AccountListResponse as AccountListResponse,
    type AccountCloseResponse as AccountCloseResponse,
    type AccountFreezeResponse as AccountFreezeResponse,
    type AccountRetrieveBalanceResponse as AccountRetrieveBalanceResponse,
    type AccountUnfreezeResponse as AccountUnfreezeResponse,
    type AccountListResponsesCursorPage as AccountListResponsesCursorPage,
    type AccountCreateParams as AccountCreateParams,
    type AccountListParams as AccountListParams,
    type AccountCloseParams as AccountCloseParams,
  };
}
