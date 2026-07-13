// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Returns extends APIResource {
  /**
   * Initiates a return of funds from a deposit to the source.
   */
  create(body: ReturnCreateParams, options?: RequestOptions): APIPromise<ReturnCreateResponse> {
    return this._client.post('/v1/returns', { body, ...options });
  }

  /**
   * Retrieves a return by ID.
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<ReturnRetrieveResponse> {
    return this._client.get(path`/v1/returns/${id}`, options);
  }

  /**
   * Lists deposit returns for the merchant with cursor-based pagination.
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
   * ISO 8601 UTC timestamp when the return was created.
   */
  created_at: string;

  /**
   * Currency code (ISO 4217 currency code or crypto currency code).
   */
  currency: 'EUR' | 'GBP' | 'USD' | 'USDC' | 'BTC' | 'ETH' | 'SOL' | 'POL';

  /**
   * ID of the parent deposit.
   */
  deposit_id: string;

  /**
   * Failure details when status is failed, otherwise null.
   */
  failure: ReturnCreateResponse.Failure | null;

  /**
   * Current status of the return.
   */
  status: 'pending' | 'paid' | 'failed' | 'returned';

  /**
   * Type of the resource.
   */
  type: 'return';

  /**
   * ISO 8601 UTC timestamp when the return was last updated.
   */
  updated_at: string;
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
   * ISO 8601 UTC timestamp when the return was created.
   */
  created_at: string;

  /**
   * Currency code (ISO 4217 currency code or crypto currency code).
   */
  currency: 'EUR' | 'GBP' | 'USD' | 'USDC' | 'BTC' | 'ETH' | 'SOL' | 'POL';

  /**
   * ID of the parent deposit.
   */
  deposit_id: string;

  /**
   * Failure details when status is failed, otherwise null.
   */
  failure: ReturnRetrieveResponse.Failure | null;

  /**
   * Current status of the return.
   */
  status: 'pending' | 'paid' | 'failed' | 'returned';

  /**
   * Type of the resource.
   */
  type: 'return';

  /**
   * ISO 8601 UTC timestamp when the return was last updated.
   */
  updated_at: string;
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
   * ISO 8601 UTC timestamp when the return was created.
   */
  created_at: string;

  /**
   * Currency code (ISO 4217 currency code or crypto currency code).
   */
  currency: 'EUR' | 'GBP' | 'USD' | 'USDC' | 'BTC' | 'ETH' | 'SOL' | 'POL';

  /**
   * ID of the parent deposit.
   */
  deposit_id: string;

  /**
   * Failure details when status is failed, otherwise null.
   */
  failure: ReturnListResponse.Failure | null;

  /**
   * Current status of the return.
   */
  status: 'pending' | 'paid' | 'failed' | 'returned';

  /**
   * Type of the resource.
   */
  type: 'return';

  /**
   * ISO 8601 UTC timestamp when the return was last updated.
   */
  updated_at: string;
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

  /**
   * Payment rail when the deposit allows multiple schemes.
   */
  rail?: 'sepa_instant' | 'sepa' | 'faster_payments';
}

export interface ReturnListParams extends CursorPageParams {
  created_at?: ReturnListParams.CreatedAt;

  /**
   * Filter returns belonging to this deposit.
   */
  deposit_id?: string;

  /**
   * Current status of the return.
   */
  status?: 'pending' | 'paid' | 'failed' | 'returned';
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
