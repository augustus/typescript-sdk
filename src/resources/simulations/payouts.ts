// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Payouts extends APIResource {
  /**
   * Submits a network rejection for an existing payout through the sandbox provider
   * pipeline. This endpoint is unavailable in live production.
   *
   * @example
   * ```ts
   * const response = await client.simulations.payouts.reject(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   { reason: 'invalid_routing_number' },
   * );
   * ```
   */
  reject(id: string, body: PayoutRejectParams, options?: RequestOptions): APIPromise<PayoutRejectResponse> {
    return this._client.post(path`/v1/simulations/payouts/${id}/reject`, { body, ...options });
  }

  /**
   * Submits an inbound return for a settled payout through the sandbox provider
   * pipeline. The original payout remains settled and a standalone deposit is
   * created. This endpoint is unavailable in live production.
   *
   * @example
   * ```ts
   * const response = await client.simulations.payouts.return(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   { reason: 'account_closed' },
   * );
   * ```
   */
  return(id: string, body: PayoutReturnParams, options?: RequestOptions): APIPromise<PayoutReturnResponse> {
    return this._client.post(path`/v1/simulations/payouts/${id}/return`, { body, ...options });
  }

  /**
   * Submits a successful send event for an existing payout through the sandbox
   * provider pipeline. This endpoint is unavailable in live production.
   *
   * @example
   * ```ts
   * const response = await client.simulations.payouts.send(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  send(id: string, options?: RequestOptions): APIPromise<PayoutSendResponse> {
    return this._client.post(path`/v1/simulations/payouts/${id}/send`, options);
  }
}

export interface PayoutRejectResponse {
  /**
   * Payout whose lifecycle is being simulated.
   */
  payout_id: string;

  /**
   * Resource type discriminator.
   */
  type: 'payout_simulation';
}

export interface PayoutReturnResponse {
  /**
   * Payout whose lifecycle is being simulated.
   */
  payout_id: string;

  /**
   * Resource type discriminator.
   */
  type: 'payout_simulation';
}

export interface PayoutSendResponse {
  /**
   * Payout whose lifecycle is being simulated.
   */
  payout_id: string;

  /**
   * Resource type discriminator.
   */
  type: 'payout_simulation';
}

export interface PayoutRejectParams {
  /**
   * Reason the sandbox provider rejects the payout. Use `invalid_routing_number` for
   * domestic rails and `invalid_account_format` for a SWIFT correspondent rejecting
   * on the beneficiary details.
   */
  reason: 'invalid_routing_number' | 'invalid_account_format';
}

export interface PayoutReturnParams {
  /**
   * Reason the receiving bank returns the settled payout.
   */
  reason:
    | 'account_closed'
    | 'invalid_account_format'
    | 'invalid_routing_number'
    | 'account_blocked'
    | 'unknown';
}

export declare namespace Payouts {
  export {
    type PayoutRejectResponse as PayoutRejectResponse,
    type PayoutReturnResponse as PayoutReturnResponse,
    type PayoutSendResponse as PayoutSendResponse,
    type PayoutRejectParams as PayoutRejectParams,
    type PayoutReturnParams as PayoutReturnParams,
  };
}
