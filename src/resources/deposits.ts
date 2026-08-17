// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Deposits extends APIResource {
  /**
   * Retrieves a deposit by ID.
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<DepositRetrieveResponse> {
    return this._client.get(path`/v1/deposits/${id}`, options);
  }

  /**
   * Lists deposits for the merchant with cursor-based pagination.
   */
  list(
    query: DepositListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<DepositListResponsesCursorPage, DepositListResponse> {
    return this._client.getAPIList('/v1/deposits', CursorPage<DepositListResponse>, { query, ...options });
  }
}

export type DepositListResponsesCursorPage = CursorPage<DepositListResponse>;

export interface DepositRetrieveResponse {
  /**
   * Unique identifier of the deposit.
   */
  id: string;

  /**
   * Amount as a string decimal (e.g. "100.50").
   */
  amount: string;

  /**
   * Reference visible on the bank statement, or null when not applicable.
   */
  bank_statement_reference: string | null;

  /**
   * ISO 8601 UTC timestamp when the deposit was created.
   */
  created_at: string;

  /**
   * Supported fiat or crypto currency code for the deposit amount.
   */
  currency: 'EUR' | 'GBP' | 'USD' | 'USDC';

  /**
   * ID of the merchant account that received the deposit.
   */
  destination_account_id: string;

  /**
   * Payment rail or blockchain used for the deposit.
   */
  rail:
    | 'sepa_instant'
    | 'faster_payments'
    | 'sepa'
    | 'elixir'
    | 'express_elixir'
    | 'sek_account_to_account'
    | 'sumclearing'
    | 'straksclearing'
    | 'swift'
    | 'internal'
    | 'target'
    | 'ach'
    | 'fedwire'
    | 'btc'
    | 'btc_testnet4'
    | 'eth'
    | 'eth_sepolia'
    | 'sol'
    | 'sol_devnet'
    | 'matic'
    | 'matic_amoy'
    | null;

  /**
   * Array of deposit return IDs associated with this deposit.
   */
  returns: Array<string>;

  /**
   * Counterparty bank account or crypto wallet that sent the funds.
   */
  source:
    | DepositRetrieveResponse.UnionMember0
    | DepositRetrieveResponse.UnionMember1
    | DepositRetrieveResponse.UnionMember2
    | DepositRetrieveResponse.UnionMember3;

  /**
   * Current status of the deposit.
   */
  status: 'received' | 'in_return' | 'returned' | 'return_failed' | 'return_returned';

  /**
   * Transaction hash for crypto deposits, or null when not known.
   */
  tx_hash: string | null;

  /**
   * Resource type discriminator.
   */
  type: 'deposit';

  /**
   * ISO 8601 UTC timestamp when the deposit was last updated.
   */
  updated_at: string;
}

export namespace DepositRetrieveResponse {
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
     * Discriminator for IBAN source.
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
     * Discriminator for UK sort code source.
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
     * Discriminator for ABA wire source.
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
     * Discriminator for crypto wallet source.
     */
    type: 'crypto_wallet';
  }
}

export interface DepositListResponse {
  /**
   * Unique identifier of the deposit.
   */
  id: string;

  /**
   * Amount as a string decimal (e.g. "100.50").
   */
  amount: string;

  /**
   * Reference visible on the bank statement, or null when not applicable.
   */
  bank_statement_reference: string | null;

  /**
   * ISO 8601 UTC timestamp when the deposit was created.
   */
  created_at: string;

  /**
   * Supported fiat or crypto currency code for the deposit amount.
   */
  currency: 'EUR' | 'GBP' | 'USD' | 'USDC';

  /**
   * ID of the merchant account that received the deposit.
   */
  destination_account_id: string;

  /**
   * Payment rail or blockchain used for the deposit.
   */
  rail:
    | 'sepa_instant'
    | 'faster_payments'
    | 'sepa'
    | 'elixir'
    | 'express_elixir'
    | 'sek_account_to_account'
    | 'sumclearing'
    | 'straksclearing'
    | 'swift'
    | 'internal'
    | 'target'
    | 'ach'
    | 'fedwire'
    | 'btc'
    | 'btc_testnet4'
    | 'eth'
    | 'eth_sepolia'
    | 'sol'
    | 'sol_devnet'
    | 'matic'
    | 'matic_amoy'
    | null;

  /**
   * Array of deposit return IDs associated with this deposit.
   */
  returns: Array<string>;

  /**
   * Counterparty bank account or crypto wallet that sent the funds.
   */
  source:
    | DepositListResponse.UnionMember0
    | DepositListResponse.UnionMember1
    | DepositListResponse.UnionMember2
    | DepositListResponse.UnionMember3;

  /**
   * Current status of the deposit.
   */
  status: 'received' | 'in_return' | 'returned' | 'return_failed' | 'return_returned';

  /**
   * Transaction hash for crypto deposits, or null when not known.
   */
  tx_hash: string | null;

  /**
   * Resource type discriminator.
   */
  type: 'deposit';

  /**
   * ISO 8601 UTC timestamp when the deposit was last updated.
   */
  updated_at: string;
}

export namespace DepositListResponse {
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
     * Discriminator for IBAN source.
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
     * Discriminator for UK sort code source.
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
     * Discriminator for ABA wire source.
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
     * Discriminator for crypto wallet source.
     */
    type: 'crypto_wallet';
  }
}

export interface DepositListParams extends CursorPageParams {
  created_at?: DepositListParams.CreatedAt;

  /**
   * Filter by deposit status.
   */
  status?: 'received' | 'in_return' | 'returned' | 'return_failed' | 'return_returned';
}

export namespace DepositListParams {
  export interface CreatedAt {
    /**
     * Include deposits whose created_at is greater than or equal to this ISO 8601
     * timestamp.
     */
    gte?: string;

    /**
     * Include deposits whose created_at is less than or equal to this ISO 8601
     * timestamp.
     */
    lte?: string;
  }
}

export declare namespace Deposits {
  export {
    type DepositRetrieveResponse as DepositRetrieveResponse,
    type DepositListResponse as DepositListResponse,
    type DepositListResponsesCursorPage as DepositListResponsesCursorPage,
    type DepositListParams as DepositListParams,
  };
}
