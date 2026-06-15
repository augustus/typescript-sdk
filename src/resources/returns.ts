// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Returns extends APIResource {
  /**
   * Retrieves a return by ID.
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<ReturnRetrieveResponse> {
    return this._client.get(path`/v1/returns/${id}`, options);
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
  currency: 'EUR' | 'GBP' | 'USD' | 'USDC' | 'BTC';

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

export declare namespace Returns {
  export { type ReturnRetrieveResponse as ReturnRetrieveResponse };
}
