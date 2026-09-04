// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class AccountPrograms extends APIResource {
  /**
   * Creates a Mock-US USD account program owned by the caller merchant. This
   * endpoint is unavailable in live production.
   *
   * @example
   * ```ts
   * const accountProgram =
   *   await client.simulations.accountPrograms.create({
   *     label: 'x',
   *   });
   * ```
   */
  create(
    body: AccountProgramCreateParams,
    options?: RequestOptions,
  ): APIPromise<AccountProgramCreateResponse> {
    return this._client.post('/v1/simulations/account_programs', { body, ...options });
  }

  /**
   * Closes an account program. All child accounts must be drained via the drain
   * endpoint first. This endpoint is unavailable in live production.
   *
   * @example
   * ```ts
   * const response =
   *   await client.simulations.accountPrograms.close(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { reason: 'aml_risk_fraud' },
   *   );
   * ```
   */
  close(
    id: string,
    body: AccountProgramCloseParams,
    options?: RequestOptions,
  ): APIPromise<AccountProgramCloseResponse> {
    return this._client.post(path`/v1/simulations/account_programs/${id}/close`, { body, ...options });
  }

  /**
   * Creates outbound payouts that drain the residual balance of every frozen account
   * under the program to the provided destination. The program must be frozen. Every
   * returned `payout_ids[i]` must be settled via
   * `POST /v1/simulations/payouts/{id}/send` for the program balance to reach zero.
   * This endpoint is unavailable in live production.
   *
   * @example
   * ```ts
   * const response =
   *   await client.simulations.accountPrograms.drain(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     {
   *       destination: {
   *         account_holder_name: 'Acme Sandbox Ltd.',
   *         iban: 'DE89370400440532013000',
   *         type: 'iban',
   *       },
   *     },
   *   );
   * ```
   */
  drain(
    id: string,
    body: AccountProgramDrainParams,
    options?: RequestOptions,
  ): APIPromise<AccountProgramDrainResponse> {
    return this._client.post(path`/v1/simulations/account_programs/${id}/drain`, { body, ...options });
  }

  /**
   * Freezes an existing account program and its virtual accounts. This endpoint is
   * unavailable in live production.
   *
   * @example
   * ```ts
   * const response =
   *   await client.simulations.accountPrograms.freeze(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   );
   * ```
   */
  freeze(id: string, options?: RequestOptions): APIPromise<AccountProgramFreezeResponse> {
    return this._client.post(path`/v1/simulations/account_programs/${id}/freeze`, options);
  }

  /**
   * Unfreezes an existing account program and its virtual accounts. This endpoint is
   * unavailable in live production.
   *
   * @example
   * ```ts
   * const response =
   *   await client.simulations.accountPrograms.unfreeze(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   );
   * ```
   */
  unfreeze(id: string, options?: RequestOptions): APIPromise<AccountProgramUnfreezeResponse> {
    return this._client.post(path`/v1/simulations/account_programs/${id}/unfreeze`, options);
  }
}

export interface AccountProgramCreateResponse {
  /**
   * Account program whose lifecycle is being simulated.
   */
  account_program_id: string;

  /**
   * Resource type discriminator.
   */
  type: 'account_program_simulation';
}

export interface AccountProgramCloseResponse {
  /**
   * Account program whose lifecycle is being simulated.
   */
  account_program_id: string;

  /**
   * Resource type discriminator.
   */
  type: 'account_program_simulation';
}

export interface AccountProgramDrainResponse {
  /**
   * Account program whose lifecycle is being simulated.
   */
  account_program_id: string;

  /**
   * Payouts created by the drain. Feed each id to
   * `POST /v1/simulations/payouts/{id}/send` to settle.
   */
  payout_ids: Array<string>;

  /**
   * Resource type discriminator.
   */
  type: 'account_program_simulation';
}

export interface AccountProgramFreezeResponse {
  /**
   * Account program whose lifecycle is being simulated.
   */
  account_program_id: string;

  /**
   * Resource type discriminator.
   */
  type: 'account_program_simulation';
}

export interface AccountProgramUnfreezeResponse {
  /**
   * Account program whose lifecycle is being simulated.
   */
  account_program_id: string;

  /**
   * Resource type discriminator.
   */
  type: 'account_program_simulation';
}

export interface AccountProgramCreateParams {
  /**
   * Human-readable label for the account program.
   */
  label: string;
}

export interface AccountProgramCloseParams {
  /**
   * Reason for closing the account program.
   */
  reason: 'aml_risk_fraud' | 'client_request';
}

export interface AccountProgramDrainParams {
  /**
   * Fiat financial address to which the residual balance of every frozen account
   * under the program is drained.
   */
  destination:
    | AccountProgramDrainParams.IbanFinancialAddressRequest
    | AccountProgramDrainParams.SortCodeFinancialAddress
    | AccountProgramDrainParams.AbaFinancialAddress;
}

export namespace AccountProgramDrainParams {
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
     * Bank Identifier Code. Optional; omit or send null if not provided.
     */
    bic?: string | null;
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

export declare namespace AccountPrograms {
  export {
    type AccountProgramCreateResponse as AccountProgramCreateResponse,
    type AccountProgramCloseResponse as AccountProgramCloseResponse,
    type AccountProgramDrainResponse as AccountProgramDrainResponse,
    type AccountProgramFreezeResponse as AccountProgramFreezeResponse,
    type AccountProgramUnfreezeResponse as AccountProgramUnfreezeResponse,
    type AccountProgramCreateParams as AccountProgramCreateParams,
    type AccountProgramCloseParams as AccountProgramCloseParams,
    type AccountProgramDrainParams as AccountProgramDrainParams,
  };
}
