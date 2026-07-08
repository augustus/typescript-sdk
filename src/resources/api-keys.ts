// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class APIKeys extends APIResource {
  /**
   * Returns the API key resource for the key authenticating this request. Useful for
   * verifying which key is in use and discovering its current authorization context
   * without inferring it from rejected requests.
   */
  introspect(options?: RequestOptions): APIPromise<APIKeyIntrospectResponse> {
    return this._client.get('/v1/api_key', options);
  }
}

export interface APIKeyIntrospectResponse {
  /**
   * Unique identifier of the API key.
   */
  id: string;

  /**
   * Effective API version for the request (header value or merchant pin).
   */
  api_version: string;

  /**
   * ISO 8601 UTC timestamp at which this key was created.
   */
  created_at: string;

  /**
   * ISO 8601 UTC timestamp at which this key expires. `null` if the key has no
   * expiry.
   */
  expires_at: string | null;

  /**
   * IP addresses or CIDR ranges this key is permitted to authenticate from. An empty
   * array means the key is not IP-restricted.
   */
  ip_allow_list: Array<string>;

  /**
   * Identifier of the merchant the key belongs to.
   */
  merchant_id: string;

  /**
   * The effective set of scopes for this key. Stored aliases (e.g. `full_access`,
   * `read_only`) are always expanded to concrete `resource:action` scopes against
   * the current registry before they appear here.
   */
  scopes: Array<
    | 'payouts:read'
    | 'payouts:write'
    | 'deposits:read'
    | 'returns:read'
    | 'returns:write'
    | 'conversions:read'
    | 'conversions:write'
    | 'quotes:read'
    | 'accounts:read'
    | 'accounts:write'
    | 'account_openings:write'
    | 'account_programs:read'
    | 'webhook_subscriptions:read'
    | 'webhook_subscriptions:write'
    | 'events:read'
    | 'webhook_deliveries:read'
    | 'webhook_deliveries:write'
  >;

  /**
   * Resource type discriminator.
   */
  type: 'api_key';

  /**
   * ISO 8601 UTC timestamp of the last update to this key (e.g. roll, IP allowlist
   * change, revoke). `null` if the key has not been updated since creation.
   */
  updated_at: string | null;
}

export declare namespace APIKeys {
  export { type APIKeyIntrospectResponse as APIKeyIntrospectResponse };
}
