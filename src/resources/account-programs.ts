// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class AccountPrograms extends APIResource {
  /**
   * Retrieves an account program by ID.
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<AccountProgramRetrieveResponse> {
    return this._client.get(path`/v1/account_programs/${id}`, options);
  }

  /**
   * Lists account programs for the merchant with cursor-based pagination.
   */
  list(
    query: AccountProgramListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<AccountProgramListResponsesCursorPage, AccountProgramListResponse> {
    return this._client.getAPIList('/v1/account_programs', CursorPage<AccountProgramListResponse>, {
      query,
      ...options,
    });
  }

  /**
   * Returns the aggregated available balance for all virtual accounts under the
   * account program.
   */
  retrieveBalance(
    id: string,
    query: AccountProgramRetrieveBalanceParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AccountProgramRetrieveBalanceResponse> {
    return this._client.get(path`/v1/account_programs/${id}/balance`, { query, ...options });
  }
}

export type AccountProgramListResponsesCursorPage = CursorPage<AccountProgramListResponse>;

export interface AccountProgramRetrieveResponse {
  /**
   * Unique identifier of the account program.
   */
  id: string;

  /**
   * Which for-benefit-of (FBO) program model applies: `fbo_program` (merchant
   * program) or `fbo_sponsored` (sponsored program).
   */
  account_program_type: 'fbo_program' | 'fbo_sponsored';

  /**
   * ISO 8601 UTC timestamp when the account program was created.
   */
  created_at: string;

  /**
   * Human-readable label for the account program.
   */
  label: string;

  /**
   * Account program lifecycle status. Closed programs are not returned by this
   * endpoint.
   */
  status: 'active' | 'frozen';

  /**
   * Resource type discriminator.
   */
  type: 'account_program';

  /**
   * ISO 8601 UTC timestamp when the account program was last updated.
   */
  updated_at: string;
}

export interface AccountProgramListResponse {
  /**
   * Unique identifier of the account program.
   */
  id: string;

  /**
   * Which for-benefit-of (FBO) program model applies: `fbo_program` (merchant
   * program) or `fbo_sponsored` (sponsored program).
   */
  account_program_type: 'fbo_program' | 'fbo_sponsored';

  /**
   * ISO 8601 UTC timestamp when the account program was created.
   */
  created_at: string;

  /**
   * Human-readable label for the account program.
   */
  label: string;

  /**
   * Account program lifecycle status. Closed programs are not returned by this
   * endpoint.
   */
  status: 'active' | 'frozen';

  /**
   * Resource type discriminator.
   */
  type: 'account_program';

  /**
   * ISO 8601 UTC timestamp when the account program was last updated.
   */
  updated_at: string;
}

export interface AccountProgramRetrieveBalanceResponse {
  /**
   * Unique identifier of the account program.
   */
  id: string;

  amount: AccountProgramRetrieveBalanceResponse.Amount;

  /**
   * ISO 8601 UTC timestamp when this balance snapshot was produced.
   */
  as_of: string;

  /**
   * ISO 4217 currency code.
   */
  currency: 'EUR' | 'GBP' | 'USD';

  /**
   * Resource type discriminator.
   */
  type: 'account_program_balance';
}

export namespace AccountProgramRetrieveBalanceResponse {
  export interface Amount {
    /**
     * Available balance as a string decimal (e.g. "100.50").
     */
    available: string;

    /**
     * Pending balance as a string decimal (e.g. "100.50").
     */
    pending: string;
  }
}

export interface AccountProgramListParams extends CursorPageParams {}

export interface AccountProgramRetrieveBalanceParams {
  /**
   * ISO 8601 UTC timestamp to retrieve balance at.
   */
  as_of?: string;
}

export declare namespace AccountPrograms {
  export {
    type AccountProgramRetrieveResponse as AccountProgramRetrieveResponse,
    type AccountProgramListResponse as AccountProgramListResponse,
    type AccountProgramRetrieveBalanceResponse as AccountProgramRetrieveBalanceResponse,
    type AccountProgramListResponsesCursorPage as AccountProgramListResponsesCursorPage,
    type AccountProgramListParams as AccountProgramListParams,
    type AccountProgramRetrieveBalanceParams as AccountProgramRetrieveBalanceParams,
  };
}
