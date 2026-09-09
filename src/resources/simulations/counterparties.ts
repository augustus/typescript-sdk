// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Counterparties extends APIResource {
  /**
   * Submits a rejected provider decision for an existing counterparty with a pending
   * verification attempt. This endpoint is unavailable in live production.
   *
   * @example
   * ```ts
   * const response =
   *   await client.simulations.counterparties.reject(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   );
   * ```
   */
  reject(id: string, options?: RequestOptions): APIPromise<CounterpartyRejectResponse> {
    return this._client.post(path`/v1/simulations/counterparties/${id}/reject`, options);
  }
}

export interface CounterpartyRejectResponse {
  /**
   * Counterparty whose verification is being simulated.
   */
  counterparty_id: string;

  /**
   * Resource type discriminator.
   */
  type: 'counterparty_simulation';
}

export declare namespace Counterparties {
  export { type CounterpartyRejectResponse as CounterpartyRejectResponse };
}
