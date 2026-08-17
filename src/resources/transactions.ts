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
   * ID of the merchant account this transaction settled on.
   */
  account_id: string;

  /**
   * Absolute amount as a string decimal (e.g. "100.50").
   */
  amount: string;

  /**
   * Reference visible on the bank statement, or null when not applicable.
   */
  bank_statement_reference: string | null;

  /**
   * Bank account or wallet of the other party, or null when not known.
   */
  counterparty:
    | TransactionRetrieveResponse.UnionMember0
    | TransactionRetrieveResponse.UnionMember1
    | TransactionRetrieveResponse.UnionMember2
    | TransactionRetrieveResponse.UnionMember3
    | null;

  /**
   * ISO 8601 UTC timestamp when the transaction was recorded.
   */
  created_at: string;

  /**
   * ISO 4217 fiat or crypto currency code of the amount.
   */
  currency: 'EUR' | 'GBP' | 'USD' | 'USDC';

  /**
   * The product that caused this transaction, or null when no product is linked.
   */
  product: TransactionRetrieveResponse.Product | null;

  /**
   * Direction of the movement relative to the merchant account.
   */
  side: 'credit' | 'debit';

  /**
   * Lifecycle state of the transaction.
   */
  status: 'pending' | 'completed' | 'failed';

  /**
   * Resource type discriminator.
   */
  type: 'transaction';
}

export namespace TransactionRetrieveResponse {
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
   * The product that caused this transaction, or null when no product is linked.
   */
  export interface Product {
    /**
     * Identifier of the product resource that caused this transaction.
     */
    id: string;

    /**
     * Type of the product that caused this transaction.
     */
    type: 'deposit' | 'deposit_return' | 'refund' | 'payout';
  }
}

export interface TransactionListResponse {
  /**
   * Unique identifier of the transaction.
   */
  id: string;

  /**
   * ID of the merchant account this transaction settled on.
   */
  account_id: string;

  /**
   * Absolute amount as a string decimal (e.g. "100.50").
   */
  amount: string;

  /**
   * Reference visible on the bank statement, or null when not applicable.
   */
  bank_statement_reference: string | null;

  /**
   * Bank account or wallet of the other party, or null when not known.
   */
  counterparty:
    | TransactionListResponse.UnionMember0
    | TransactionListResponse.UnionMember1
    | TransactionListResponse.UnionMember2
    | TransactionListResponse.UnionMember3
    | null;

  /**
   * ISO 8601 UTC timestamp when the transaction was recorded.
   */
  created_at: string;

  /**
   * ISO 4217 fiat or crypto currency code of the amount.
   */
  currency: 'EUR' | 'GBP' | 'USD' | 'USDC';

  /**
   * The product that caused this transaction, or null when no product is linked.
   */
  product: TransactionListResponse.Product | null;

  /**
   * Direction of the movement relative to the merchant account.
   */
  side: 'credit' | 'debit';

  /**
   * Lifecycle state of the transaction.
   */
  status: 'pending' | 'completed' | 'failed';

  /**
   * Resource type discriminator.
   */
  type: 'transaction';
}

export namespace TransactionListResponse {
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
   * The product that caused this transaction, or null when no product is linked.
   */
  export interface Product {
    /**
     * Identifier of the product resource that caused this transaction.
     */
    id: string;

    /**
     * Type of the product that caused this transaction.
     */
    type: 'deposit' | 'deposit_return' | 'refund' | 'payout';
  }
}

export interface TransactionListParams extends CursorPageParams {
  /**
   * Account to list transactions for.
   */
  account_id: string;

  created_at?: TransactionListParams.CreatedAt;
}

export namespace TransactionListParams {
  export interface CreatedAt {
    /**
     * Include transactions whose created_at is greater than or equal to this ISO 8601
     * timestamp.
     */
    gte?: string;

    /**
     * Include transactions whose created_at is less than or equal to this ISO 8601
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
