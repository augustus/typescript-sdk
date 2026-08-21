// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Indicative extends APIResource {
  /**
   * Returns an indicative quote for a currency pair. Not persisted or holdable.
   */
  retrieve(
    query: IndicativeRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<IndicativeRetrieveResponse> {
    return this._client.get('/v1/quotes/indicative', { query, ...options });
  }
}

export interface IndicativeRetrieveResponse {
  /**
   * Conversion fee, or null if no fee applies.
   */
  fee: IndicativeRetrieveResponse.Fee | null;

  /**
   * ISO 8601 UTC timestamp when the quote was fetched.
   */
  quoted_at: string;

  /**
   * Conversion rate applied.
   */
  rate: string;

  /**
   * Amount as a string decimal (e.g. "100.50").
   */
  source_amount: string;

  /**
   * Currency code (ISO 4217 or crypto).
   */
  source_currency: 'EUR' | 'GBP' | 'USD' | 'USDC' | 'BTC' | 'ETH' | 'SOL' | 'POL';

  /**
   * Amount as a string decimal (e.g. "100.50").
   */
  target_amount: string;

  /**
   * Currency code (ISO 4217 or crypto).
   */
  target_currency: 'EUR' | 'GBP' | 'USD' | 'USDC' | 'BTC' | 'ETH' | 'SOL' | 'POL';
}

export namespace IndicativeRetrieveResponse {
  /**
   * Conversion fee, or null if no fee applies.
   */
  export interface Fee {
    /**
     * Fee amount as a string decimal.
     */
    amount: string;

    /**
     * Fee currency code.
     */
    currency: 'EUR' | 'GBP' | 'USD' | 'USDC' | 'BTC' | 'ETH' | 'SOL' | 'POL';
  }
}

export interface IndicativeRetrieveParams {
  /**
   * Currency code (ISO 4217 or crypto).
   */
  source_currency: 'EUR' | 'GBP' | 'USD' | 'USDC' | 'BTC' | 'ETH' | 'SOL' | 'POL';

  /**
   * Currency code (ISO 4217 or crypto).
   */
  target_currency: 'EUR' | 'GBP' | 'USD' | 'USDC' | 'BTC' | 'ETH' | 'SOL' | 'POL';

  /**
   * Amount as a string decimal (e.g. "100.50").
   */
  source_amount?: string;
}

export declare namespace Indicative {
  export {
    type IndicativeRetrieveResponse as IndicativeRetrieveResponse,
    type IndicativeRetrieveParams as IndicativeRetrieveParams,
  };
}
