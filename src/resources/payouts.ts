// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Payouts extends APIResource {
  /**
   * Creates a new payout.
   */
  create(body: PayoutCreateParams, options?: RequestOptions): APIPromise<PayoutCreateResponse> {
    return this._client.post('/v1/payouts', { body, ...options });
  }

  /**
   * Retrieves a payout by ID.
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<PayoutRetrieveResponse> {
    return this._client.get(path`/v1/payouts/${id}`, options);
  }

  /**
   * Lists payouts for the merchant with cursor-based pagination.
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
   * Amount as a string decimal (e.g. "100.50").
   */
  amount: string;

  /**
   * ISO 8601 UTC timestamp when the payout was created.
   */
  created_at: string;

  /**
   * Currency code (ISO 4217 currency code or crypto currency code).
   */
  currency: 'EUR' | 'GBP' | 'USD' | 'USDC';

  /**
   * Bank account or crypto wallet the payout was sent to.
   */
  destination:
    | PayoutCreateResponse.IbanFinancialAddress
    | PayoutCreateResponse.SortCodeFinancialAddress
    | PayoutCreateResponse.AbaFinancialAddress
    | PayoutCreateResponse.CryptoWalletFinancialAddress;

  /**
   * Failure details when status is failed, otherwise null.
   */
  failure: PayoutCreateResponse.Failure | null;

  /**
   * Key-value pairs stored with the payout.
   */
  metadata: { [key: string]: string };

  /**
   * Payment reference.
   */
  reference: string;

  /**
   * ID of the account that was debited.
   */
  source_account_id: string;

  /**
   * Current status of the payout.
   */
  status: 'pending' | 'paid' | 'failed' | 'returned';

  /**
   * Resource type discriminator.
   */
  type: 'payout';

  /**
   * ISO 8601 UTC timestamp when the payout was last updated.
   */
  updated_at: string;
}

export namespace PayoutCreateResponse {
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
   * Amount as a string decimal (e.g. "100.50").
   */
  amount: string;

  /**
   * ISO 8601 UTC timestamp when the payout was created.
   */
  created_at: string;

  /**
   * Currency code (ISO 4217 currency code or crypto currency code).
   */
  currency: 'EUR' | 'GBP' | 'USD' | 'USDC';

  /**
   * Bank account or crypto wallet the payout was sent to.
   */
  destination:
    | PayoutRetrieveResponse.IbanFinancialAddress
    | PayoutRetrieveResponse.SortCodeFinancialAddress
    | PayoutRetrieveResponse.AbaFinancialAddress
    | PayoutRetrieveResponse.CryptoWalletFinancialAddress;

  /**
   * Failure details when status is failed, otherwise null.
   */
  failure: PayoutRetrieveResponse.Failure | null;

  /**
   * Key-value pairs stored with the payout.
   */
  metadata: { [key: string]: string };

  /**
   * Payment reference.
   */
  reference: string;

  /**
   * ID of the account that was debited.
   */
  source_account_id: string;

  /**
   * Current status of the payout.
   */
  status: 'pending' | 'paid' | 'failed' | 'returned';

  /**
   * Resource type discriminator.
   */
  type: 'payout';

  /**
   * ISO 8601 UTC timestamp when the payout was last updated.
   */
  updated_at: string;
}

export namespace PayoutRetrieveResponse {
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
   * Amount as a string decimal (e.g. "100.50").
   */
  amount: string;

  /**
   * ISO 8601 UTC timestamp when the payout was created.
   */
  created_at: string;

  /**
   * Currency code (ISO 4217 currency code or crypto currency code).
   */
  currency: 'EUR' | 'GBP' | 'USD' | 'USDC';

  /**
   * Bank account or crypto wallet the payout was sent to.
   */
  destination:
    | PayoutListResponse.IbanFinancialAddress
    | PayoutListResponse.SortCodeFinancialAddress
    | PayoutListResponse.AbaFinancialAddress
    | PayoutListResponse.CryptoWalletFinancialAddress;

  /**
   * Failure details when status is failed, otherwise null.
   */
  failure: PayoutListResponse.Failure | null;

  /**
   * Key-value pairs stored with the payout.
   */
  metadata: { [key: string]: string };

  /**
   * Payment reference.
   */
  reference: string;

  /**
   * ID of the account that was debited.
   */
  source_account_id: string;

  /**
   * Current status of the payout.
   */
  status: 'pending' | 'paid' | 'failed' | 'returned';

  /**
   * Resource type discriminator.
   */
  type: 'payout';

  /**
   * ISO 8601 UTC timestamp when the payout was last updated.
   */
  updated_at: string;
}

export namespace PayoutListResponse {
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
   * Amount as a string decimal (e.g. "100.50").
   */
  amount: string;

  /**
   * Currency for the payout.
   */
  currency: 'EUR' | 'GBP' | 'USD' | 'USDC';

  /**
   * Bank account or crypto wallet to send funds to.
   */
  destination:
    | PayoutCreateParams.Iban
    | PayoutCreateParams.SortCodeFinancialAddress
    | PayoutCreateParams.AbaFinancialAddress
    | PayoutCreateParams.CryptoWalletFinancialAddress;

  /**
   * Payment reference.
   */
  reference: string;

  /**
   * ID of the account to debit.
   */
  source_account_id: string;

  /**
   * Key-value pairs stored with the payout.
   */
  metadata?: { [key: string]: string };

  /**
   * Payment rail. It is enforced when provided, otherwise auto-selected.
   */
  rail?: 'sepa_instant' | 'sepa' | 'faster_payments';
}

export namespace PayoutCreateParams {
  export interface Iban {
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
     * Bank Identifier Code.
     */
    bic?: string;
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
  status?: 'pending' | 'paid' | 'failed';
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
