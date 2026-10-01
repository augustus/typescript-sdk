// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Accounts extends APIResource {
  /**
   * Creates a Mock-US USD account owned by the caller merchant. This endpoint is
   * unavailable in live production.
   *
   * @example
   * ```ts
   * const account = await client.simulations.accounts.create({
   *   label: 'Operating USD account',
   *   type: 'operating',
   * });
   * ```
   */
  create(body: AccountCreateParams, options?: RequestOptions): APIPromise<AccountCreateResponse> {
    return this._client.post('/v1/simulations/accounts', { body, ...options });
  }

  /**
   * Closes an operating (DDA) account. The account must be drained via the drain
   * endpoint first. This endpoint is unavailable in live production.
   *
   * @example
   * ```ts
   * const response = await client.simulations.accounts.close(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   { reason: 'aml_risk_fraud' },
   * );
   * ```
   */
  close(id: string, body: AccountCloseParams, options?: RequestOptions): APIPromise<AccountCloseResponse> {
    return this._client.post(path`/v1/simulations/accounts/${id}/close`, { body, ...options });
  }

  /**
   * Creates an outbound payout that drains the residual balance of a frozen
   * operating (DDA) account to the provided destination. The returned `payout_id`
   * must be settled via `POST /v1/simulations/payouts/{id}/send` for the account
   * balance to reach zero. This endpoint is unavailable in live production.
   *
   * @example
   * ```ts
   * const response = await client.simulations.accounts.drain(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   {
   *     destination: {
   *       account_holder_name: 'Acme Sandbox Ltd.',
   *       account_number: '000123456789',
   *       routing_number: '110000000',
   *       type: 'aba',
   *     },
   *   },
   * );
   * ```
   */
  drain(id: string, body: AccountDrainParams, options?: RequestOptions): APIPromise<AccountDrainResponse> {
    return this._client.post(path`/v1/simulations/accounts/${id}/drain`, { body, ...options });
  }

  /**
   * Freezes an existing operating (DDA) account. This endpoint is unavailable in
   * live production.
   *
   * @example
   * ```ts
   * const response = await client.simulations.accounts.freeze(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  freeze(id: string, options?: RequestOptions): APIPromise<AccountFreezeResponse> {
    return this._client.post(path`/v1/simulations/accounts/${id}/freeze`, options);
  }

  /**
   * Unfreezes an existing operating (DDA) account. This endpoint is unavailable in
   * live production.
   *
   * @example
   * ```ts
   * const response = await client.simulations.accounts.unfreeze(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  unfreeze(id: string, options?: RequestOptions): APIPromise<AccountUnfreezeResponse> {
    return this._client.post(path`/v1/simulations/accounts/${id}/unfreeze`, options);
  }
}

export interface AccountCreateResponse {
  /**
   * Account whose lifecycle is being simulated.
   */
  account_id: string;

  /**
   * Resource type discriminator.
   */
  type: 'account_simulation';
}

export interface AccountCloseResponse {
  /**
   * Account whose lifecycle is being simulated.
   */
  account_id: string;

  /**
   * Resource type discriminator.
   */
  type: 'account_simulation';
}

export interface AccountDrainResponse {
  /**
   * Account whose lifecycle is being simulated.
   */
  account_id: string;

  /**
   * Payout created by the drain. Feed to `POST /v1/simulations/payouts/{id}/send` to
   * settle.
   */
  payout_id: string;

  /**
   * Resource type discriminator.
   */
  type: 'account_simulation';
}

export interface AccountFreezeResponse {
  /**
   * Account whose lifecycle is being simulated.
   */
  account_id: string;

  /**
   * Resource type discriminator.
   */
  type: 'account_simulation';
}

export interface AccountUnfreezeResponse {
  /**
   * Account whose lifecycle is being simulated.
   */
  account_id: string;

  /**
   * Resource type discriminator.
   */
  type: 'account_simulation';
}

export interface AccountCreateParams {
  /**
   * Human-readable label for the operating account.
   */
  label: string;

  /**
   * Account type.
   */
  type: 'operating';
}

export interface AccountCloseParams {
  /**
   * Reason for closing the account.
   */
  reason: 'aml_risk_fraud' | 'client_request';
}

export interface AccountDrainParams {
  /**
   * Fiat financial address to which the residual balance of the frozen account is
   * drained.
   */
  destination:
    | AccountDrainParams.AbaFinancialAddressRequest
    | AccountDrainParams.IbanFinancialAddressRequest
    | AccountDrainParams.SortCodeFinancialAddressRequest;
}

export namespace AccountDrainParams {
  export interface AbaFinancialAddressRequest {
    /**
     * Name of the account holder.
     */
    account_holder_name: string;

    /**
     * Bank account number.
     */
    account_number: string;

    /**
     * ABA routing number (9 digits).
     */
    routing_number: string;

    /**
     * Discriminator for ABA wire financial address.
     */
    type: 'aba';

    /**
     * Whether the account is a checking or a savings account. Optional; omit or send
     * null if not provided. Some destination countries require it (for example the
     * Dominican Republic, Honduras and Jamaica) and ACH uses it for the transaction
     * code. A payment to an account without one is sent as checking.
     */
    account_type?: 'checking' | 'savings' | null;
  }

  export interface IbanFinancialAddressRequest {
    /**
     * Name of the account holder.
     */
    account_holder_name: string;

    /**
     * International Bank Account Number.
     */
    iban: string;

    /**
     * Discriminator for IBAN financial address.
     */
    type: 'iban';

    /**
     * Whether the account is a checking or a savings account. Optional; omit or send
     * null if not provided. Some destination countries require it (for example the
     * Dominican Republic, Honduras and Jamaica) and ACH uses it for the transaction
     * code. A payment to an account without one is sent as checking.
     */
    account_type?: 'checking' | 'savings' | null;

    /**
     * Bank Identifier Code. Optional; omit or send null if not provided.
     */
    bic?: string | null;
  }

  export interface SortCodeFinancialAddressRequest {
    /**
     * Name of the account holder.
     */
    account_holder_name: string;

    /**
     * UK account number (8 digits).
     */
    account_number: string;

    /**
     * UK sort code (6 digits).
     */
    sort_code: string;

    /**
     * Discriminator for UK sort code financial address.
     */
    type: 'sort_code';
  }
}

export declare namespace Accounts {
  export {
    type AccountCreateResponse as AccountCreateResponse,
    type AccountCloseResponse as AccountCloseResponse,
    type AccountDrainResponse as AccountDrainResponse,
    type AccountFreezeResponse as AccountFreezeResponse,
    type AccountUnfreezeResponse as AccountUnfreezeResponse,
    type AccountCreateParams as AccountCreateParams,
    type AccountCloseParams as AccountCloseParams,
    type AccountDrainParams as AccountDrainParams,
  };
}
