// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Conversions extends APIResource {
  /**
   * Releases a controlled (sandbox) conversion paused at its first step so it runs
   * to completion normally. This endpoint is unavailable in live production.
   *
   * @example
   * ```ts
   * const response =
   *   await client.simulations.conversions.continue(
   *     '550e8400-e29b-41d4-a716-446655440006',
   *   );
   * ```
   */
  continue(id: string, options?: RequestOptions): APIPromise<ConversionContinueResponse> {
    return this._client.post(path`/v1/simulations/conversions/${id}/continue`, options);
  }

  /**
   * Fails a controlled (sandbox) conversion paused at its first step, before any
   * funds move. This endpoint is unavailable in live production.
   *
   * @example
   * ```ts
   * const response = await client.simulations.conversions.fail(
   *   '550e8400-e29b-41d4-a716-446655440006',
   * );
   * ```
   */
  fail(id: string, options?: RequestOptions): APIPromise<ConversionFailResponse> {
    return this._client.post(path`/v1/simulations/conversions/${id}/fail`, options);
  }
}

export interface ConversionContinueResponse {
  /**
   * Conversion whose execution is being simulated.
   */
  conversion_id: string;

  /**
   * Resource type discriminator.
   */
  type: 'conversion_simulation';
}

export interface ConversionFailResponse {
  /**
   * Conversion whose execution is being simulated.
   */
  conversion_id: string;

  /**
   * Resource type discriminator.
   */
  type: 'conversion_simulation';
}

export declare namespace Conversions {
  export {
    type ConversionContinueResponse as ConversionContinueResponse,
    type ConversionFailResponse as ConversionFailResponse,
  };
}
