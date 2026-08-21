// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Conversions extends APIResource {
  /**
   * Starts a conversion.
   *
   * @example
   * ```ts
   * const conversion = await client.conversions.create({
   *   metadata: { invoice_id: 'INV-2026-0042' },
   *   source_account_id: '550e8400-e29b-41d4-a716-44665544000b',
   *   source_amount: '100.50',
   *   target_account_id: '550e8400-e29b-41d4-a716-44665544000c',
   * });
   * ```
   */
  create(body: ConversionCreateParams, options?: RequestOptions): APIPromise<ConversionCreateResponse> {
    return this._client.post('/v1/conversions', { body, ...options });
  }

  /**
   * Retrieves a conversion by ID.
   *
   * @example
   * ```ts
   * const conversion = await client.conversions.retrieve(
   *   '550e8400-e29b-41d4-a716-446655440006',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<ConversionRetrieveResponse> {
    return this._client.get(path`/v1/conversions/${id}`, options);
  }

  /**
   * Returns a paginated list of conversions.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const conversionListResponse of client.conversions.list()) {
   *   // ...
   * }
   * ```
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
   * Key-value pairs stored with the conversion.
   */
  metadata: { [key: string]: string };

  /**
   * ID of the source account, or null.
   */
  source_account_id: string | null;

  /**
   * Amount as a string decimal (e.g. "100.50").
   */
  source_amount: string;

  /**
   * Current status of the conversion.
   */
  status: 'pending' | 'completed' | 'failed';

  /**
   * ID of the target account, or null.
   */
  target_account_id: string | null;

  /**
   * Amount as a string decimal (e.g. "100.50").
   */
  target_amount: string;

  /**
   * Resource type discriminator.
   */
  type: 'conversion';

  /**
   * ISO 8601 UTC timestamp when the conversion was last updated.
   */
  updated_at: string;
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
   * Key-value pairs stored with the conversion.
   */
  metadata: { [key: string]: string };

  /**
   * ID of the source account, or null.
   */
  source_account_id: string | null;

  /**
   * Amount as a string decimal (e.g. "100.50").
   */
  source_amount: string;

  /**
   * Current status of the conversion.
   */
  status: 'pending' | 'completed' | 'failed';

  /**
   * ID of the target account, or null.
   */
  target_account_id: string | null;

  /**
   * Amount as a string decimal (e.g. "100.50").
   */
  target_amount: string;

  /**
   * Resource type discriminator.
   */
  type: 'conversion';

  /**
   * ISO 8601 UTC timestamp when the conversion was last updated.
   */
  updated_at: string;
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
   * Key-value pairs stored with the conversion.
   */
  metadata: { [key: string]: string };

  /**
   * ID of the source account, or null.
   */
  source_account_id: string | null;

  /**
   * Amount as a string decimal (e.g. "100.50").
   */
  source_amount: string;

  /**
   * Current status of the conversion.
   */
  status: 'pending' | 'completed' | 'failed';

  /**
   * ID of the target account, or null.
   */
  target_account_id: string | null;

  /**
   * Amount as a string decimal (e.g. "100.50").
   */
  target_amount: string;

  /**
   * Resource type discriminator.
   */
  type: 'conversion';

  /**
   * ISO 8601 UTC timestamp when the conversion was last updated.
   */
  updated_at: string;
}

export interface ConversionCreateParams {
  /**
   * Key-value pairs stored with the conversion.
   */
  metadata: { [key: string]: string } | null;

  /**
   * ID of the source account to debit.
   */
  source_account_id: string;

  /**
   * Amount as a string decimal (e.g. "100.50").
   */
  source_amount: string;

  /**
   * ID of the target account to credit.
   */
  target_account_id: string;
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
