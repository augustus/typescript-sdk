// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Returns extends APIResource {
  /**
   * Submits a network rejection for an existing return through the sandbox provider
   * pipeline. This endpoint is unavailable in live production.
   *
   * @example
   * ```ts
   * const response = await client.simulations.returns.reject(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   { reason: 'invalid_routing_number' },
   * );
   * ```
   */
  reject(id: string, body: ReturnRejectParams, options?: RequestOptions): APIPromise<ReturnRejectResponse> {
    return this._client.post(path`/v1/simulations/returns/${id}/reject`, { body, ...options });
  }

  /**
   * Submits an inbound return for a sent return through the sandbox provider
   * pipeline. The funds are credited back to the original deposit and the return
   * moves to `returned`. This endpoint is unavailable in live production.
   *
   * @example
   * ```ts
   * const response = await client.simulations.returns.return(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   { reason: 'account_closed' },
   * );
   * ```
   */
  return(id: string, body: ReturnReturnParams, options?: RequestOptions): APIPromise<ReturnReturnResponse> {
    return this._client.post(path`/v1/simulations/returns/${id}/return`, { body, ...options });
  }

  /**
   * Submits a successful send event for an existing return through the sandbox
   * provider pipeline. This endpoint is unavailable in live production.
   *
   * @example
   * ```ts
   * const response = await client.simulations.returns.send(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  send(id: string, options?: RequestOptions): APIPromise<ReturnSendResponse> {
    return this._client.post(path`/v1/simulations/returns/${id}/send`, options);
  }
}

export interface ReturnRejectResponse {
  /**
   * Return whose lifecycle is being simulated.
   */
  return_id: string;

  /**
   * Resource type discriminator.
   */
  type: 'return_simulation';
}

export interface ReturnReturnResponse {
  /**
   * Return whose lifecycle is being simulated.
   */
  return_id: string;

  /**
   * Resource type discriminator.
   */
  type: 'return_simulation';
}

export interface ReturnSendResponse {
  /**
   * Return whose lifecycle is being simulated.
   */
  return_id: string;

  /**
   * Resource type discriminator.
   */
  type: 'return_simulation';
}

export interface ReturnRejectParams {
  /**
   * Reason the sandbox provider rejects the return. Use `invalid_routing_number` for
   * domestic rails and `invalid_account_format` for a SWIFT correspondent rejecting
   * on the beneficiary details.
   */
  reason: 'invalid_routing_number' | 'invalid_account_format';
}

export interface ReturnReturnParams {
  /**
   * Reason the receiving bank returns the sent return.
   */
  reason:
    | 'account_closed'
    | 'invalid_account_format'
    | 'invalid_routing_number'
    | 'account_blocked'
    | 'unknown';
}

export declare namespace Returns {
  export {
    type ReturnRejectResponse as ReturnRejectResponse,
    type ReturnReturnResponse as ReturnReturnResponse,
    type ReturnSendResponse as ReturnSendResponse,
    type ReturnRejectParams as ReturnRejectParams,
    type ReturnReturnParams as ReturnReturnParams,
  };
}
