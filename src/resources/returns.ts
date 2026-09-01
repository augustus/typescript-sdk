// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Returns extends APIResource {
  /**
   * Initiates a return of funds from a deposit to the source.
   *
   * @example
   * ```ts
   * const _return = await client.returns.create({
   *   deposit_id: '550e8400-e29b-41d4-a716-446655440004',
   * });
   * ```
   */
  create(body: ReturnCreateParams, options?: RequestOptions): APIPromise<ReturnCreateResponse> {
    return this._client.post('/v1/returns', { body, ...options });
  }

  /**
   * Retrieves a return by ID.
   *
   * @example
   * ```ts
   * const _return = await client.returns.retrieve(
   *   '550e8400-e29b-41d4-a716-446655440005',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<ReturnRetrieveResponse> {
    return this._client.get(path`/v1/returns/${id}`, options);
  }

  /**
   * Lists deposit returns for the merchant with cursor-based pagination.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const returnListResponse of client.returns.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: ReturnListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<ReturnListResponsesCursorPage, ReturnListResponse> {
    return this._client.getAPIList('/v1/returns', CursorPage<ReturnListResponse>, { query, ...options });
  }
}

export type ReturnListResponsesCursorPage = CursorPage<ReturnListResponse>;

export interface ReturnCreateResponse {
  /**
   * Unique identifier of the return.
   */
  id: string;

  /**
   * Amount as a string decimal (e.g. "100.50").
   */
  amount: string;

  /**
   * Currency code (ISO 4217 or crypto).
   */
  currency: 'EUR' | 'GBP' | 'USD' | 'USDC';

  /**
   * ID of the parent deposit.
   */
  deposit_id: string;

  /**
   * Failure details when status is failed, otherwise null.
   */
  failure: ReturnCreateResponse.Failure | null;

  /**
   * ISO 8601 UTC timestamp when the return was initiated.
   */
  initiated_at: string;

  /**
   * Payment scheme or blockchain used for the return, or null when unknown.
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
   * ISO 8601 UTC timestamp when the return was sent.
   */
  sent_at: string | null;

  /**
   * Current status of the return.
   */
  status: 'initiated' | 'submitted' | 'sent' | 'failed' | 'returned';

  /**
   * Transaction hash for crypto returns, or null when not known. Only blockchain
   * rails support this field.
   */
  tx_hash: string | null;

  /**
   * Resource type discriminator.
   */
  type: 'return';
}

export namespace ReturnCreateResponse {
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
     * Whether the return can be retried.
     */
    retry: boolean;
  }
}

export interface ReturnRetrieveResponse {
  /**
   * Unique identifier of the return.
   */
  id: string;

  /**
   * Amount as a string decimal (e.g. "100.50").
   */
  amount: string;

  /**
   * Currency code (ISO 4217 or crypto).
   */
  currency: 'EUR' | 'GBP' | 'USD' | 'USDC';

  /**
   * ID of the parent deposit.
   */
  deposit_id: string;

  /**
   * Failure details when status is failed, otherwise null.
   */
  failure: ReturnRetrieveResponse.Failure | null;

  /**
   * ISO 8601 UTC timestamp when the return was initiated.
   */
  initiated_at: string;

  /**
   * Payment scheme or blockchain used for the return, or null when unknown.
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
   * ISO 8601 UTC timestamp when the return was sent.
   */
  sent_at: string | null;

  /**
   * Current status of the return.
   */
  status: 'initiated' | 'submitted' | 'sent' | 'failed' | 'returned';

  /**
   * Transaction hash for crypto returns, or null when not known. Only blockchain
   * rails support this field.
   */
  tx_hash: string | null;

  /**
   * Resource type discriminator.
   */
  type: 'return';
}

export namespace ReturnRetrieveResponse {
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
     * Whether the return can be retried.
     */
    retry: boolean;
  }
}

export interface ReturnListResponse {
  /**
   * Unique identifier of the return.
   */
  id: string;

  /**
   * Amount as a string decimal (e.g. "100.50").
   */
  amount: string;

  /**
   * Currency code (ISO 4217 or crypto).
   */
  currency: 'EUR' | 'GBP' | 'USD' | 'USDC';

  /**
   * ID of the parent deposit.
   */
  deposit_id: string;

  /**
   * Failure details when status is failed, otherwise null.
   */
  failure: ReturnListResponse.Failure | null;

  /**
   * ISO 8601 UTC timestamp when the return was initiated.
   */
  initiated_at: string;

  /**
   * Payment scheme or blockchain used for the return, or null when unknown.
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
   * ISO 8601 UTC timestamp when the return was sent.
   */
  sent_at: string | null;

  /**
   * Current status of the return.
   */
  status: 'initiated' | 'submitted' | 'sent' | 'failed' | 'returned';

  /**
   * Transaction hash for crypto returns, or null when not known. Only blockchain
   * rails support this field.
   */
  tx_hash: string | null;

  /**
   * Resource type discriminator.
   */
  type: 'return';
}

export namespace ReturnListResponse {
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
     * Whether the return can be retried.
     */
    retry: boolean;
  }
}

export interface ReturnCreateParams {
  /**
   * Deposit to return funds from.
   */
  deposit_id: string;
}

export interface ReturnListParams extends CursorPageParams {
  created_at?: ReturnListParams.CreatedAt;

  /**
   * Filter returns belonging to this deposit.
   */
  deposit_id?: string;

  /**
   * Filter by return status.
   */
  status?: 'initiated' | 'submitted' | 'sent' | 'failed' | 'returned';
}

export namespace ReturnListParams {
  export interface CreatedAt {
    /**
     * Include returns whose created_at is greater than or equal to this ISO 8601
     * timestamp.
     */
    gte?: string;

    /**
     * Include returns whose created_at is less than or equal to this ISO 8601
     * timestamp.
     */
    lte?: string;
  }
}

export declare namespace Returns {
  export {
    type ReturnCreateResponse as ReturnCreateResponse,
    type ReturnRetrieveResponse as ReturnRetrieveResponse,
    type ReturnListResponse as ReturnListResponse,
    type ReturnListResponsesCursorPage as ReturnListResponsesCursorPage,
    type ReturnCreateParams as ReturnCreateParams,
    type ReturnListParams as ReturnListParams,
  };
}
