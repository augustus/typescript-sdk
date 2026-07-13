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
   * Source amount as a string decimal.
   */
  source_amount: string;

  /**
   * Source currency code.
   */
  source_currency: 'EUR' | 'GBP' | 'USD' | 'USDC' | 'BTC' | 'ETH' | 'SOL' | 'POL';

  /**
   * Target amount as a string decimal.
   */
  target_amount: string;

  /**
   * Target currency code.
   */
  target_currency: 'EUR' | 'GBP' | 'USD' | 'USDC' | 'BTC' | 'ETH' | 'SOL' | 'POL';

  /**
   * Venue the quote was fetched from.
   */
  venue: string;
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
   * Source currency code.
   */
  source_currency: 'EUR' | 'GBP' | 'USD' | 'USDC' | 'BTC' | 'ETH' | 'SOL' | 'POL';

  /**
   * Target currency code.
   */
  target_currency: 'EUR' | 'GBP' | 'USD' | 'USDC' | 'BTC' | 'ETH' | 'SOL' | 'POL';

  /**
   * Source amount as a string decimal. Defaults to 1 unit if omitted.
   */
  source_amount?: string;
}

export declare namespace Indicative {
  export {
    type IndicativeRetrieveResponse as IndicativeRetrieveResponse,
    type IndicativeRetrieveParams as IndicativeRetrieveParams,
  };
}
