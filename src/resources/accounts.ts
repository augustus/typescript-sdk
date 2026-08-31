// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Accounts extends APIResource {
  /**
   * Creates a new account.
   *
   * @example
   * ```ts
   * const account = await client.accounts.create({
   *   account_holder_id: '68e0a1b2c3d4e5f60718293a',
   *   account_program_id:
   *     '550e8400-e29b-41d4-a716-446655440002',
   * });
   * ```
   */
  create(body: AccountCreateParams, options?: RequestOptions): APIPromise<AccountCreateResponse> {
    return this._client.post('/v1/accounts', { body, ...options });
  }

  /**
   * Retrieves an account by ID.
   *
   * @example
   * ```ts
   * const account = await client.accounts.retrieve(
   *   '550e8400-e29b-41d4-a716-446655440001',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<AccountRetrieveResponse> {
    return this._client.get(path`/v1/accounts/${id}`, options);
  }

  /**
   * Returns a paginated list of accounts.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const accountListResponse of client.accounts.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: AccountListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<AccountListResponsesCursorPage, AccountListResponse> {
    return this._client.getAPIList('/v1/accounts', CursorPage<AccountListResponse>, { query, ...options });
  }

  /**
   * Closes an account
   *
   * @example
   * ```ts
   * const response = await client.accounts.close(
   *   '550e8400-e29b-41d4-a716-446655440001',
   *   { reason: 'aml_risk_fraud' },
   * );
   * ```
   */
  close(id: string, body: AccountCloseParams, options?: RequestOptions): APIPromise<AccountCloseResponse> {
    return this._client.post(path`/v1/accounts/${id}/close`, { body, ...options });
  }

  /**
   * Freezes an account
   *
   * @example
   * ```ts
   * const response = await client.accounts.freeze(
   *   '550e8400-e29b-41d4-a716-446655440001',
   * );
   * ```
   */
  freeze(id: string, options?: RequestOptions): APIPromise<AccountFreezeResponse> {
    return this._client.post(path`/v1/accounts/${id}/freeze`, options);
  }

  /**
   * Retrieves the available balance for an account.
   *
   * @example
   * ```ts
   * const response = await client.accounts.retrieveBalance(
   *   '550e8400-e29b-41d4-a716-446655440001',
   * );
   * ```
   */
  retrieveBalance(id: string, options?: RequestOptions): APIPromise<AccountRetrieveBalanceResponse> {
    return this._client.get(path`/v1/accounts/${id}/balance`, options);
  }

  /**
   * Unfreezes an account
   *
   * @example
   * ```ts
   * const response = await client.accounts.unfreeze(
   *   '550e8400-e29b-41d4-a716-446655440001',
   * );
   * ```
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
   * Asset type of the account.
   */
  asset_type: 'fiat' | 'crypto';

  /**
   * ISO 8601 UTC timestamp when the account was created.
   */
  created_at: string;

  /**
   * Currency code (ISO 4217 or crypto).
   */
  currency: 'EUR' | 'GBP' | 'USD' | 'USDC';

  /**
   * Payment identifiers (e.g. IBAN, account number, wallet address) through which
   * this account can send or receive funds.
   */
  financial_addresses: Array<
    | AccountCreateResponse.IbanFinancialAddress
    | AccountCreateResponse.SortCodeFinancialAddress
    | AccountCreateResponse.AbaFinancialAddress
    | AccountCreateResponse.BicFinancialAddress
    | AccountCreateResponse.CryptoWalletFinancialAddress
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
}

export interface AccountRetrieveResponse {
  /**
   * Unique identifier of the account.
   */
  id: string;

  /**
   * Asset type of the account.
   */
  asset_type: 'fiat' | 'crypto';

  /**
   * ISO 8601 UTC timestamp when the account was created.
   */
  created_at: string;

  /**
   * Currency code (ISO 4217 or crypto).
   */
  currency: 'EUR' | 'GBP' | 'USD' | 'USDC';

  /**
   * Payment identifiers (e.g. IBAN, account number, wallet address) through which
   * this account can send or receive funds.
   */
  financial_addresses: Array<
    | AccountRetrieveResponse.IbanFinancialAddress
    | AccountRetrieveResponse.SortCodeFinancialAddress
    | AccountRetrieveResponse.AbaFinancialAddress
    | AccountRetrieveResponse.BicFinancialAddress
    | AccountRetrieveResponse.CryptoWalletFinancialAddress
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
}

export interface AccountListResponse {
  /**
   * Unique identifier of the account.
   */
  id: string;

  /**
   * Asset type of the account.
   */
  asset_type: 'fiat' | 'crypto';

  /**
   * ISO 8601 UTC timestamp when the account was created.
   */
  created_at: string;

  /**
   * Currency code (ISO 4217 or crypto).
   */
  currency: 'EUR' | 'GBP' | 'USD' | 'USDC';

  /**
   * Payment identifiers (e.g. IBAN, account number, wallet address) through which
   * this account can send or receive funds.
   */
  financial_addresses: Array<
    | AccountListResponse.IbanFinancialAddress
    | AccountListResponse.SortCodeFinancialAddress
    | AccountListResponse.AbaFinancialAddress
    | AccountListResponse.BicFinancialAddress
    | AccountListResponse.CryptoWalletFinancialAddress
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
}

export interface AccountCloseResponse {
  /**
   * Unique identifier of the account.
   */
  id: string;

  /**
   * Asset type of the account.
   */
  asset_type: 'fiat' | 'crypto';

  /**
   * ISO 8601 UTC timestamp when the account was created.
   */
  created_at: string;

  /**
   * Currency code (ISO 4217 or crypto).
   */
  currency: 'EUR' | 'GBP' | 'USD' | 'USDC';

  /**
   * Payment identifiers (e.g. IBAN, account number, wallet address) through which
   * this account can send or receive funds.
   */
  financial_addresses: Array<
    | AccountCloseResponse.IbanFinancialAddress
    | AccountCloseResponse.SortCodeFinancialAddress
    | AccountCloseResponse.AbaFinancialAddress
    | AccountCloseResponse.BicFinancialAddress
    | AccountCloseResponse.CryptoWalletFinancialAddress
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
}

export interface AccountFreezeResponse {
  /**
   * Unique identifier of the account.
   */
  id: string;

  /**
   * Asset type of the account.
   */
  asset_type: 'fiat' | 'crypto';

  /**
   * ISO 8601 UTC timestamp when the account was created.
   */
  created_at: string;

  /**
   * Currency code (ISO 4217 or crypto).
   */
  currency: 'EUR' | 'GBP' | 'USD' | 'USDC';

  /**
   * Payment identifiers (e.g. IBAN, account number, wallet address) through which
   * this account can send or receive funds.
   */
  financial_addresses: Array<
    | AccountFreezeResponse.IbanFinancialAddress
    | AccountFreezeResponse.SortCodeFinancialAddress
    | AccountFreezeResponse.AbaFinancialAddress
    | AccountFreezeResponse.BicFinancialAddress
    | AccountFreezeResponse.CryptoWalletFinancialAddress
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
}

export interface AccountRetrieveBalanceResponse {
  /**
   * Unique identifier of the account.
   */
  account_id: string;

  /**
   * Available balance as a string decimal (e.g. "100.50").
   */
  amount: string;

  /**
   * ISO 8601 UTC timestamp when the balance was retrieved.
   */
  as_of: string;

  /**
   * Currency code (ISO 4217 or crypto).
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
   * Asset type of the account.
   */
  asset_type: 'fiat' | 'crypto';

  /**
   * ISO 8601 UTC timestamp when the account was created.
   */
  created_at: string;

  /**
   * Currency code (ISO 4217 or crypto).
   */
  currency: 'EUR' | 'GBP' | 'USD' | 'USDC';

  /**
   * Payment identifiers (e.g. IBAN, account number, wallet address) through which
   * this account can send or receive funds.
   */
  financial_addresses: Array<
    | AccountUnfreezeResponse.IbanFinancialAddress
    | AccountUnfreezeResponse.SortCodeFinancialAddress
    | AccountUnfreezeResponse.AbaFinancialAddress
    | AccountUnfreezeResponse.BicFinancialAddress
    | AccountUnfreezeResponse.CryptoWalletFinancialAddress
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
}

export interface AccountCreateParams {
  /**
   * ID of an existing virtual account holder to provision the account for.
   */
  account_holder_id: string;

  /**
   * ID of the account program to create the account under.
   */
  account_program_id: string;
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
  account_program_id?: string;

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
