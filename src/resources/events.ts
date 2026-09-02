// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Events extends APIResource {
  /**
   * Retrieves a webhook event by ID.
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<EventRetrieveResponse> {
    return this._client.get(path`/v1/events/${id}`, options);
  }

  /**
   * Lists webhook events for the merchant with cursor-based pagination. Events are
   * retained for 30 days.
   */
  list(
    query: EventListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<EventListResponsesCursorPage, EventListResponse> {
    return this._client.getAPIList('/v1/events', CursorPage<EventListResponse>, { query, ...options });
  }
}

export type EventListResponsesCursorPage = CursorPage<EventListResponse>;

export interface EventRetrieveResponse {
  /**
   * Unique identifier of the event. Matches the envelope `id` delivered in the
   * webhook payload and is stable across subscription fan-out and retries.
   */
  id: string;

  /**
   * API version the event payload was rendered at. Stable across retries and
   * redeliveries, and mirrored in the webhook envelope `api_version` field.
   */
  api_version: string;

  /**
   * ISO 8601 UTC timestamp when the event was created.
   */
  created_at: string;

  /**
   * Event payload. Shape matches the resource schema for `event_type`.
   */
  data: { [key: string]: unknown };

  /**
   * Event type.
   */
  event_type:
    | 'payout.created'
    | 'payout.initiated'
    | 'payout.submitted'
    | 'payout.paid'
    | 'payout.sent'
    | 'payout.failed'
    | 'payout.returned'
    | 'return.initiated'
    | 'return.paid'
    | 'return.failed'
    | 'return.returned'
    | 'deposit.received'
    | 'conversion.created'
    | 'conversion.completed'
    | 'conversion.failed'
    | 'account_holder.active'
    | 'account_holder.closed'
    | 'ping.test';

  /**
   * Resource type discriminator.
   */
  type: 'event';
}

export interface EventListResponse {
  /**
   * Unique identifier of the event. Matches the envelope `id` delivered in the
   * webhook payload and is stable across subscription fan-out and retries.
   */
  id: string;

  /**
   * API version the event payload was rendered at. Stable across retries and
   * redeliveries, and mirrored in the webhook envelope `api_version` field.
   */
  api_version: string;

  /**
   * ISO 8601 UTC timestamp when the event was created.
   */
  created_at: string;

  /**
   * Event payload. Shape matches the resource schema for `event_type`.
   */
  data: { [key: string]: unknown };

  /**
   * Event type.
   */
  event_type:
    | 'payout.created'
    | 'payout.initiated'
    | 'payout.submitted'
    | 'payout.paid'
    | 'payout.sent'
    | 'payout.failed'
    | 'payout.returned'
    | 'return.initiated'
    | 'return.paid'
    | 'return.failed'
    | 'return.returned'
    | 'deposit.received'
    | 'conversion.created'
    | 'conversion.completed'
    | 'conversion.failed'
    | 'account_holder.active'
    | 'account_holder.closed'
    | 'ping.test';

  /**
   * Resource type discriminator.
   */
  type: 'event';
}

export interface EventListParams extends CursorPageParams {
  created_at?: EventListParams.CreatedAt;

  /**
   * Filter by event type.
   */
  event_type?:
    | 'payout.created'
    | 'payout.initiated'
    | 'payout.submitted'
    | 'payout.paid'
    | 'payout.sent'
    | 'payout.failed'
    | 'payout.returned'
    | 'return.initiated'
    | 'return.paid'
    | 'return.failed'
    | 'return.returned'
    | 'deposit.received'
    | 'conversion.created'
    | 'conversion.completed'
    | 'conversion.failed'
    | 'account_holder.active'
    | 'account_holder.closed'
    | 'ping.test';
}

export namespace EventListParams {
  export interface CreatedAt {
    /**
     * Include events whose created_at is greater than or equal to this ISO 8601
     * timestamp.
     */
    gte?: string;

    /**
     * Include events whose created_at is less than or equal to this ISO 8601
     * timestamp.
     */
    lte?: string;
  }
}

export declare namespace Events {
  export {
    type EventRetrieveResponse as EventRetrieveResponse,
    type EventListResponse as EventListResponse,
    type EventListResponsesCursorPage as EventListResponsesCursorPage,
    type EventListParams as EventListParams,
  };
}
