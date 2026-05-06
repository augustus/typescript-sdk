// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class APIVersions extends APIResource {
  /**
   * Returns the catalogue of publicly available Augustus Banking API versions,
   * ordered oldest to newest. New accounts and unpinned merchants resolve to the
   * entry with `is_latest: true`. Public: no authentication required.
   */
  list(options?: RequestOptions): APIPromise<APIVersionListResponse> {
    return this._client.get('/v1/api_versions', options);
  }
}

export interface APIVersionListResponse {
  data: Array<APIVersionListResponse.Data>;

  has_more: boolean;

  next_cursor: string | null;
}

export namespace APIVersionListResponse {
  export interface Data {
    /**
     * When this version was marked deprecated, ISO 8601 UTC. Null if not deprecated.
     */
    deprecated_at: string | null;

    /**
     * True for the most recently published version. New accounts and unpinned
     * merchants resolve to this version.
     */
    is_latest: boolean;

    /**
     * Version identifier as sent in the `api-version` request header.
     */
    name: string;

    /**
     * When this version became publicly available, ISO 8601 UTC.
     */
    released_at: string;

    /**
     * When this version will stop being served, ISO 8601 UTC. Null if no sunset is
     * scheduled.
     */
    sunset_at: string | null;

    type: 'api_version';
  }
}

export declare namespace APIVersions {
  export { type APIVersionListResponse as APIVersionListResponse };
}
