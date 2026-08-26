// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class WebhookSubscriptions extends APIResource {
  /**
   * Creates a new webhook subscription.
   *
   * @example
   * ```ts
   * const webhookSubscription =
   *   await client.webhookSubscriptions.create({
   *     events: ['payout.paid'],
   *     url: 'https://sandbox.example.com/webhooks/augustus',
   *   });
   * ```
   */
  create(
    body: WebhookSubscriptionCreateParams,
    options?: RequestOptions,
  ): APIPromise<WebhookSubscriptionCreateResponse> {
    return this._client.post('/v1/webhook_subscriptions', { body, ...options });
  }

  /**
   * Retrieves a webhook subscription by ID.
   *
   * @example
   * ```ts
   * const webhookSubscription =
   *   await client.webhookSubscriptions.retrieve(
   *     '550e8400-e29b-41d4-a716-446655440009',
   *   );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<WebhookSubscriptionRetrieveResponse> {
    return this._client.get(path`/v1/webhook_subscriptions/${id}`, options);
  }

  /**
   * Updates the URL and/or subscribed events.
   *
   * @example
   * ```ts
   * const webhookSubscription =
   *   await client.webhookSubscriptions.update(
   *     '550e8400-e29b-41d4-a716-446655440009',
   *   );
   * ```
   */
  update(
    id: string,
    body: WebhookSubscriptionUpdateParams,
    options?: RequestOptions,
  ): APIPromise<WebhookSubscriptionUpdateResponse> {
    return this._client.post(path`/v1/webhook_subscriptions/${id}`, { body, ...options });
  }

  /**
   * Lists webhook subscriptions for the merchant with cursor-based pagination.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const webhookSubscriptionListResponse of client.webhookSubscriptions.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: WebhookSubscriptionListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<WebhookSubscriptionListResponsesCursorPage, WebhookSubscriptionListResponse> {
    return this._client.getAPIList('/v1/webhook_subscriptions', CursorPage<WebhookSubscriptionListResponse>, {
      query,
      ...options,
    });
  }

  /**
   * Permanently deletes a webhook subscription. This cannot be undone.
   *
   * @example
   * ```ts
   * const webhookSubscription =
   *   await client.webhookSubscriptions.delete(
   *     '550e8400-e29b-41d4-a716-446655440009',
   *   );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<WebhookSubscriptionDeleteResponse> {
    return this._client.delete(path`/v1/webhook_subscriptions/${id}`, options);
  }

  /**
   * Dispatches a signed `ping.test` event to this subscription's URL through the
   * same pipeline as real events. Useful for verifying your receiver's reachability
   * and signature verification in any environment without creating a real business
   * event. Test-event failures do not affect the subscription's health counters or
   * trigger failure-notification emails.
   *
   * @example
   * ```ts
   * const response =
   *   await client.webhookSubscriptions.sendTestEvent(
   *     '550e8400-e29b-41d4-a716-446655440009',
   *   );
   * ```
   */
  sendTestEvent(id: string, options?: RequestOptions): APIPromise<WebhookSubscriptionSendTestEventResponse> {
    return this._client.post(path`/v1/webhook_subscriptions/${id}/send_test_event`, options);
  }
}

export type WebhookSubscriptionListResponsesCursorPage = CursorPage<WebhookSubscriptionListResponse>;

export interface WebhookSubscriptionCreateResponse {
  /**
   * Unique identifier of the webhook subscription.
   */
  id: string;

  /**
   * ISO 8601 UTC timestamp when the subscription was created.
   */
  created_at: string;

  /**
   * Event types this subscription receives.
   */
  events: Array<
    | 'payout.created'
    | 'payout.initiated'
    | 'payout.paid'
    | 'payout.failed'
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
  >;

  /**
   * Resource type discriminator.
   */
  type: 'webhook_subscription';

  /**
   * ISO 8601 UTC timestamp when the subscription was last updated.
   */
  updated_at: string;

  /**
   * The HTTPS URL where webhook events are delivered.
   */
  url: string;
}

export interface WebhookSubscriptionRetrieveResponse {
  /**
   * Unique identifier of the webhook subscription.
   */
  id: string;

  /**
   * ISO 8601 UTC timestamp when the subscription was created.
   */
  created_at: string;

  /**
   * Event types this subscription receives.
   */
  events: Array<
    | 'payout.created'
    | 'payout.initiated'
    | 'payout.paid'
    | 'payout.failed'
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
  >;

  /**
   * Resource type discriminator.
   */
  type: 'webhook_subscription';

  /**
   * ISO 8601 UTC timestamp when the subscription was last updated.
   */
  updated_at: string;

  /**
   * The HTTPS URL where webhook events are delivered.
   */
  url: string;
}

export interface WebhookSubscriptionUpdateResponse {
  /**
   * Unique identifier of the webhook subscription.
   */
  id: string;

  /**
   * ISO 8601 UTC timestamp when the subscription was created.
   */
  created_at: string;

  /**
   * Event types this subscription receives.
   */
  events: Array<
    | 'payout.created'
    | 'payout.initiated'
    | 'payout.paid'
    | 'payout.failed'
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
  >;

  /**
   * Resource type discriminator.
   */
  type: 'webhook_subscription';

  /**
   * ISO 8601 UTC timestamp when the subscription was last updated.
   */
  updated_at: string;

  /**
   * The HTTPS URL where webhook events are delivered.
   */
  url: string;
}

export interface WebhookSubscriptionListResponse {
  /**
   * Unique identifier of the webhook subscription.
   */
  id: string;

  /**
   * ISO 8601 UTC timestamp when the subscription was created.
   */
  created_at: string;

  /**
   * Event types this subscription receives.
   */
  events: Array<
    | 'payout.created'
    | 'payout.initiated'
    | 'payout.paid'
    | 'payout.failed'
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
  >;

  /**
   * Resource type discriminator.
   */
  type: 'webhook_subscription';

  /**
   * ISO 8601 UTC timestamp when the subscription was last updated.
   */
  updated_at: string;

  /**
   * The HTTPS URL where webhook events are delivered.
   */
  url: string;
}

export interface WebhookSubscriptionDeleteResponse {
  /**
   * Unique identifier of the webhook subscription.
   */
  id: string;

  /**
   * ISO 8601 UTC timestamp when the subscription was created.
   */
  created_at: string;

  /**
   * Event types this subscription receives.
   */
  events: Array<
    | 'payout.created'
    | 'payout.initiated'
    | 'payout.paid'
    | 'payout.failed'
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
  >;

  /**
   * Resource type discriminator.
   */
  type: 'webhook_subscription';

  /**
   * ISO 8601 UTC timestamp when the subscription was last updated.
   */
  updated_at: string;

  /**
   * The HTTPS URL where webhook events are delivered.
   */
  url: string;
}

export interface WebhookSubscriptionSendTestEventResponse {
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
    | 'payout.paid'
    | 'payout.failed'
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

export interface WebhookSubscriptionCreateParams {
  /**
   * Event types to subscribe to. Use ["*"] for all events.
   */
  events: Array<
    | 'payout.created'
    | 'payout.initiated'
    | 'payout.paid'
    | 'payout.failed'
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
    | '*'
  >;

  /**
   * The HTTPS URL where webhook events will be delivered.
   */
  url: string;
}

export interface WebhookSubscriptionUpdateParams {
  /**
   * New event types. Omit or send null to keep the current events. Use ["*"] for all
   * events.
   */
  events?: Array<
    | 'payout.created'
    | 'payout.initiated'
    | 'payout.paid'
    | 'payout.failed'
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
    | '*'
  > | null;

  /**
   * The new HTTPS URL. Omit or send null to keep the current URL.
   */
  url?: string | null;
}

export interface WebhookSubscriptionListParams extends CursorPageParams {}

export declare namespace WebhookSubscriptions {
  export {
    type WebhookSubscriptionCreateResponse as WebhookSubscriptionCreateResponse,
    type WebhookSubscriptionRetrieveResponse as WebhookSubscriptionRetrieveResponse,
    type WebhookSubscriptionUpdateResponse as WebhookSubscriptionUpdateResponse,
    type WebhookSubscriptionListResponse as WebhookSubscriptionListResponse,
    type WebhookSubscriptionDeleteResponse as WebhookSubscriptionDeleteResponse,
    type WebhookSubscriptionSendTestEventResponse as WebhookSubscriptionSendTestEventResponse,
    type WebhookSubscriptionListResponsesCursorPage as WebhookSubscriptionListResponsesCursorPage,
    type WebhookSubscriptionCreateParams as WebhookSubscriptionCreateParams,
    type WebhookSubscriptionUpdateParams as WebhookSubscriptionUpdateParams,
    type WebhookSubscriptionListParams as WebhookSubscriptionListParams,
  };
}
