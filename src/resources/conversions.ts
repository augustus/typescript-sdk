// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Conversions extends APIResource {
  /**
   * Creates and executes a conversion.
   */
  create(body: ConversionCreateParams, options?: RequestOptions): APIPromise<ConversionCreateResponse> {
    return this._client.post('/v1/conversions', { body, ...options });
  }

  /**
   * Retrieves a conversion by ID.
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<ConversionRetrieveResponse> {
    return this._client.get(path`/v1/conversions/${id}`, options);
  }

  /**
   * Returns a paginated list of conversions.
   */
  list(
    query: ConversionListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<ConversionListResponsesCursorPage, ConversionListResponse> {
    return this._client.getAPIList('/v1/conversions', CursorPage<ConversionListResponse>, {
      query,
      ...options,
    });
  }
}

export type ConversionListResponsesCursorPage = CursorPage<ConversionListResponse>;

export interface ConversionCreateResponse {
  /**
   * Unique identifier of the conversion.
   */
  id: string;

  /**
   * ISO 8601 UTC timestamp when the conversion completed, or null.
   */
  completed_at: string | null;

  /**
   * ISO 8601 UTC timestamp when the conversion was created.
   */
  created_at: string;

  /**
   * Failure details when status is failed, otherwise null.
   */
  failure: ConversionCreateResponse.Failure | null;

  /**
   * Key-value pairs stored with the conversion.
   */
  metadata: { [key: string]: string };

  /**
   * ID of the associated quote, or null.
   */
  quote_id: string | null;

  /**
   * ID of the source account, or null.
   */
  source_account_id: string | null;

  /**
   * Source amount as a string decimal.
   */
  source_amount: string;

  /**
   * Source currency code.
   */
  source_currency: 'EUR' | 'GBP' | 'USD' | 'USDC';

  /**
   * Current status of the conversion.
   */
  status: 'pending' | 'completed' | 'failed';

  /**
   * ID of the target account, or null.
   */
  target_account_id: string | null;

  /**
   * Target currency code.
   */
  target_currency: 'EUR' | 'GBP' | 'USD' | 'USDC';

  /**
   * Resource type discriminator.
   */
  type: 'conversion';

  /**
   * ISO 8601 UTC timestamp when the conversion was last updated.
   */
  updated_at: string;
}

export namespace ConversionCreateResponse {
  /**
   * Failure details when status is failed, otherwise null.
   */
  export interface Failure {
    /**
     * Human-readable description of the failure.
     */
    message: string;
  }
}

export interface ConversionRetrieveResponse {
  /**
   * Unique identifier of the conversion.
   */
  id: string;

  /**
   * ISO 8601 UTC timestamp when the conversion completed, or null.
   */
  completed_at: string | null;

  /**
   * ISO 8601 UTC timestamp when the conversion was created.
   */
  created_at: string;

  /**
   * Failure details when status is failed, otherwise null.
   */
  failure: ConversionRetrieveResponse.Failure | null;

  /**
   * Key-value pairs stored with the conversion.
   */
  metadata: { [key: string]: string };

  /**
   * ID of the associated quote, or null.
   */
  quote_id: string | null;

  /**
   * ID of the source account, or null.
   */
  source_account_id: string | null;

  /**
   * Source amount as a string decimal.
   */
  source_amount: string;

  /**
   * Source currency code.
   */
  source_currency: 'EUR' | 'GBP' | 'USD' | 'USDC';

  /**
   * Current status of the conversion.
   */
  status: 'pending' | 'completed' | 'failed';

  /**
   * ID of the target account, or null.
   */
  target_account_id: string | null;

  /**
   * Target currency code.
   */
  target_currency: 'EUR' | 'GBP' | 'USD' | 'USDC';

  /**
   * Resource type discriminator.
   */
  type: 'conversion';

  /**
   * ISO 8601 UTC timestamp when the conversion was last updated.
   */
  updated_at: string;
}

export namespace ConversionRetrieveResponse {
  /**
   * Failure details when status is failed, otherwise null.
   */
  export interface Failure {
    /**
     * Human-readable description of the failure.
     */
    message: string;
  }
}

export interface ConversionListResponse {
  /**
   * Unique identifier of the conversion.
   */
  id: string;

  /**
   * ISO 8601 UTC timestamp when the conversion completed, or null.
   */
  completed_at: string | null;

  /**
   * ISO 8601 UTC timestamp when the conversion was created.
   */
  created_at: string;

  /**
   * Failure details when status is failed, otherwise null.
   */
  failure: ConversionListResponse.Failure | null;

  /**
   * Key-value pairs stored with the conversion.
   */
  metadata: { [key: string]: string };

  /**
   * ID of the associated quote, or null.
   */
  quote_id: string | null;

  /**
   * ID of the source account, or null.
   */
  source_account_id: string | null;

  /**
   * Source amount as a string decimal.
   */
  source_amount: string;

  /**
   * Source currency code.
   */
  source_currency: 'EUR' | 'GBP' | 'USD' | 'USDC';

  /**
   * Current status of the conversion.
   */
  status: 'pending' | 'completed' | 'failed';

  /**
   * ID of the target account, or null.
   */
  target_account_id: string | null;

  /**
   * Target currency code.
   */
  target_currency: 'EUR' | 'GBP' | 'USD' | 'USDC';

  /**
   * Resource type discriminator.
   */
  type: 'conversion';

  /**
   * ISO 8601 UTC timestamp when the conversion was last updated.
   */
  updated_at: string;
}

export namespace ConversionListResponse {
  /**
   * Failure details when status is failed, otherwise null.
   */
  export interface Failure {
    /**
     * Human-readable description of the failure.
     */
    message: string;
  }
}

export interface ConversionCreateParams {
  /**
   * ID of the source account to debit.
   */
  source_account_id: string;

  /**
   * Amount to convert as a string decimal (e.g. "100.50").
   */
  source_amount: string;

  /**
   * ID of the target account to credit.
   */
  target_account_id: string;

  /**
   * Key-value pairs stored with the conversion.
   */
  metadata?: { [key: string]: string };
}

export interface ConversionListParams extends CursorPageParams {
  /**
   * Filter by source currency code.
   */
  source_currency?: 'EUR' | 'GBP' | 'USD' | 'USDC';

  /**
   * Filter by conversion status.
   */
  status?: 'pending' | 'completed' | 'failed';

  /**
   * Filter by target currency code.
   */
  target_currency?: 'EUR' | 'GBP' | 'USD' | 'USDC';
}

export declare namespace Conversions {
  export {
    type ConversionCreateResponse as ConversionCreateResponse,
    type ConversionRetrieveResponse as ConversionRetrieveResponse,
    type ConversionListResponse as ConversionListResponse,
    type ConversionListResponsesCursorPage as ConversionListResponsesCursorPage,
    type ConversionCreateParams as ConversionCreateParams,
    type ConversionListParams as ConversionListParams,
  };
}
