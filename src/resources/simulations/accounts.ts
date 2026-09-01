// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Accounts extends APIResource {
  /**
   * Creates a Mock-US USD operating (DDA) account owned by the caller merchant. This
   * endpoint is unavailable in live production.
   *
   * @example
   * ```ts
   * const account = await client.simulations.accounts.create({
   *   label: 'x',
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
   *       bic: 'COBADEFFXXX',
   *       iban: 'DE89370400440532013000',
   *       type: 'iban',
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
   * Account lifecycle event submitted to the sandbox.
   */
  event: 'create' | 'freeze' | 'unfreeze' | 'close' | 'drain';

  /**
   * Payout created by a drain event. Feed to
   * `POST /v1/simulations/payouts/{id}/send` to settle. `null` for non-drain events.
   */
  payout_id: string | null;

  /**
   * Whether the simulation submission was successful.
   */
  success: boolean;

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
   * Account lifecycle event submitted to the sandbox.
   */
  event: 'create' | 'freeze' | 'unfreeze' | 'close' | 'drain';

  /**
   * Payout created by a drain event. Feed to
   * `POST /v1/simulations/payouts/{id}/send` to settle. `null` for non-drain events.
   */
  payout_id: string | null;

  /**
   * Whether the simulation submission was successful.
   */
  success: boolean;

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
   * Account lifecycle event submitted to the sandbox.
   */
  event: 'create' | 'freeze' | 'unfreeze' | 'close' | 'drain';

  /**
   * Payout created by a drain event. Feed to
   * `POST /v1/simulations/payouts/{id}/send` to settle. `null` for non-drain events.
   */
  payout_id: string | null;

  /**
   * Whether the simulation submission was successful.
   */
  success: boolean;

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
   * Account lifecycle event submitted to the sandbox.
   */
  event: 'create' | 'freeze' | 'unfreeze' | 'close' | 'drain';

  /**
   * Payout created by a drain event. Feed to
   * `POST /v1/simulations/payouts/{id}/send` to settle. `null` for non-drain events.
   */
  payout_id: string | null;

  /**
   * Whether the simulation submission was successful.
   */
  success: boolean;

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
   * Account lifecycle event submitted to the sandbox.
   */
  event: 'create' | 'freeze' | 'unfreeze' | 'close' | 'drain';

  /**
   * Payout created by a drain event. Feed to
   * `POST /v1/simulations/payouts/{id}/send` to settle. `null` for non-drain events.
   */
  payout_id: string | null;

  /**
   * Whether the simulation submission was successful.
   */
  success: boolean;

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
    | AccountDrainParams.IbanFinancialAddress
    | AccountDrainParams.SortCodeFinancialAddress
    | AccountDrainParams.AbaFinancialAddress;
}

export namespace AccountDrainParams {
  export interface IbanFinancialAddress {
    /**
     * Name of the account holder.
     */
    account_holder_name: string;

    /**
     * Bank Identifier Code, or null if not provided.
     */
    bic: string | null;

    /**
     * International Bank Account Number.
     */
    iban: string;

    /**
     * Discriminator for IBAN financial address.
     */
    type: 'iban';
  }

  export interface SortCodeFinancialAddress {
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

  export interface AbaFinancialAddress {
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
