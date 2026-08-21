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
   * Payout lifecycle event submitted to the sandbox provider.
   */
  event: 'send' | 'reject' | 'return';

  /**
   * Payout whose lifecycle is being simulated.
   */
  payout_id: string;

  /**
   * Whether the simulation submission was successful.
   */
  success: boolean;

  /**
   * Resource type discriminator.
   */
  type: 'payout_simulation';
}

export interface PayoutSendResponse {
  /**
   * Payout lifecycle event submitted to the sandbox provider.
   */
  event: 'send' | 'reject' | 'return';

  /**
   * Payout whose lifecycle is being simulated.
   */
  payout_id: string;

  /**
   * Whether the simulation submission was successful.
   */
  success: boolean;

  /**
   * Resource type discriminator.
   */
  type: 'payout_simulation';
}

export interface PayoutRejectParams {
  /**
   * Reason the sandbox provider rejects the payout.
   */
  reason: 'invalid_routing_number';
}

export declare namespace Payouts {
  export {
    type PayoutRejectResponse as PayoutRejectResponse,
    type PayoutSendResponse as PayoutSendResponse,
    type PayoutRejectParams as PayoutRejectParams,
  };
}
