// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as IndicativeAPI from './indicative';
import { Indicative, IndicativeRetrieveParams, IndicativeRetrieveResponse } from './indicative';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Quotes extends APIResource {
  indicative: IndicativeAPI.Indicative = new IndicativeAPI.Indicative(this._client);

  /**
   * Retrieves a persisted quote by ID.
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<QuoteRetrieveResponse> {
    return this._client.get(path`/v1/quotes/${id}`, options);
  }
}

export interface QuoteRetrieveResponse {
  /**
   * Unique identifier of the quote.
   */
  id: string;

  /**
   * ISO 8601 UTC timestamp when the quote was created.
   */
  created_at: string;

  /**
   * Exchange rate applied.
   */
  exchange_rate: string;

  /**
   * ISO 8601 UTC timestamp when the quote expires.
   */
  expires_at: string;

  /**
   * Current funding status of the quote.
   */
  funding_status: 'pending' | 'sent' | 'completed' | 'failed' | 'on_hold';

  /**
   * Source amount as a string decimal.
   */
  source_amount: string;

  /**
   * Source currency code.
   */
  source_currency: 'EUR' | 'GBP' | 'USD' | 'USDC' | 'BTC' | 'ETH' | 'SOL' | 'POL';

  /**
   * Current status of the quote.
   */
  status:
    | 'pending'
    | 'quote_accepted'
    | 'order_pending'
    | 'order_failed'
    | 'order_completed'
    | 'withdrawal_pending'
    | 'withdrawal_failed'
    | 'withdrawal_completed'
    | 'completed'
    | 'failed';

  /**
   * Target amount as a string decimal.
   */
  target_amount: string;

  /**
   * Target currency code.
   */
  target_currency: 'EUR' | 'GBP' | 'USD' | 'USDC' | 'BTC' | 'ETH' | 'SOL' | 'POL';

  /**
   * Resource type discriminator.
   */
  type: 'quote';

  /**
   * ISO 8601 UTC timestamp when the quote was last updated.
   */
  updated_at: string;

  /**
   * Execution venue (e.g. "kraken").
   */
  venue: string;
}

Quotes.Indicative = Indicative;

export declare namespace Quotes {
  export { type QuoteRetrieveResponse as QuoteRetrieveResponse };

  export {
    Indicative as Indicative,
    type IndicativeRetrieveResponse as IndicativeRetrieveResponse,
    type IndicativeRetrieveParams as IndicativeRetrieveParams,
  };
}
