// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Scopes extends APIResource {
  /**
   * Returns the catalogue of scopes available to API keys. The list is filtered by
   * the `Api-Version` request header and defaults to the latest version when the
   * header is omitted. Public: no authentication required.
   */
  list(options?: RequestOptions): APIPromise<ScopeListResponse> {
    return this._client.get('/v1/scopes', options);
  }
}

export interface ScopeListResponse {
  data: Array<ScopeListResponse.Data>;

  has_more: boolean;

  next_cursor: string | null;
}

export namespace ScopeListResponse {
  export interface Data {
    /**
     * Scope identifier in `resource:action` format.
     */
    id:
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
      | 'webhook_deliveries:write';

    /**
     * Action category.
     */
    action: 'read' | 'write';

    /**
     * First API version that exposes this scope.
     */
    available_from: string;

    /**
     * API version in which this scope was deprecated; null if not deprecated.
     */
    deprecated_in: string | null;

    /**
     * Human-readable description of the scope.
     */
    description: string;

    /**
     * Resource the scope applies to.
     */
    resource: string;

    type: 'scope';
  }
}

export declare namespace Scopes {
  export { type ScopeListResponse as ScopeListResponse };
}
