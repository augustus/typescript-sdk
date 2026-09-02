// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Payouts extends APIResource {
  /**
   * Creates a new payout.
   *
   * @example
   * ```ts
   * const payout = await client.payouts.create({
   *   account_id: '550e8400-e29b-41d4-a716-44665544000b',
   *   amount: '100.50',
   *   counterparty_id: '550e8400-e29b-41d4-a716-446655440000',
   *   currency: 'EUR',
   * });
   * ```
   */
  create(body: PayoutCreateParams, options?: RequestOptions): APIPromise<PayoutCreateResponse> {
    return this._client.post('/v1/payouts', { body, ...options });
  }

  /**
   * Retrieves a payout by ID.
   *
   * @example
   * ```ts
   * const payout = await client.payouts.retrieve(
   *   '550e8400-e29b-41d4-a716-446655440003',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<PayoutRetrieveResponse> {
    return this._client.get(path`/v1/payouts/${id}`, options);
  }

  /**
   * Lists payouts for the merchant with cursor-based pagination.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const payoutListResponse of client.payouts.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: PayoutListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<PayoutListResponsesCursorPage, PayoutListResponse> {
    return this._client.getAPIList('/v1/payouts', CursorPage<PayoutListResponse>, { query, ...options });
  }
}

export type PayoutListResponsesCursorPage = CursorPage<PayoutListResponse>;

export interface PayoutCreateResponse {
  /**
   * Unique identifier of the payout.
   */
  id: string;

  /**
   * ID of the account that was debited.
   */
  account_id: string;

  /**
   * Amount as a string decimal (e.g. "100.50").
   */
  amount: string;

  /**
   * ID of the counterparty that receives the money.
   */
  counterparty_id: string;

  /**
   * Currency code (ISO 4217 or crypto).
   */
  currency: 'EUR' | 'GBP' | 'USD' | 'USDC';

  /**
   * Failure details when status is failed, otherwise null.
   */
  failure: PayoutCreateResponse.Failure | null;

  /**
   * ISO 8601 UTC timestamp when the payout was initiated.
   */
  initiated_at: string;

  /**
   * Key-value pairs stored with the payout.
   */
  metadata: { [key: string]: string };

  /**
   * Payment scheme or blockchain used for the payout, or null when unknown.
   */
  rail:
    | 'sepa'
    | 'sepa_instant'
    | 'faster_payments'
    | 'swift'
    | 'internal'
    | 'target'
    | 'ach'
    | 'fedwire'
    | 'bitcoin'
    | 'bitcoin_testnet4'
    | 'ethereum'
    | 'ethereum_sepolia'
    | 'solana'
    | 'solana_devnet'
    | 'polygon'
    | 'polygon_amoy'
    | null;

  /**
   * ISO 8601 UTC timestamp when the payout was sent.
   */
  sent_at: string | null;

  /**
   * Current status of the payout.
   */
  status: 'initiated' | 'submitted' | 'sent' | 'failed' | 'returned';

  /**
   * Reference used to track the payment across the payment network, such as the UETR
   * for SWIFT payments.
   */
  tracking_reference: string | null;

  /**
   * Transaction hash for crypto payouts, or null when not known. Only blockchain
   * rails support this field.
   */
  tx_hash: string | null;

  /**
   * Resource type discriminator.
   */
  type: 'payout';

  /**
   * Unstructured remittance information attached to the transfer. Not all rails
   * support this field.
   */
  unstructured_remittance_information: string | null;
}

export namespace PayoutCreateResponse {
  /**
   * Failure details when status is failed, otherwise null.
   */
  export interface Failure {
    /**
     * Failure code.
     */
    code:
      | 'account_closed'
      | 'account_blocked'
      | 'insufficient_funds'
      | 'invalid_account_format'
      | 'invalid_routing_number'
      | 'invalid_instruction'
      | 'invalid_amount'
      | 'invalid_time'
      | 'duplicate_transaction'
      | 'payee_verification_failed'
      | 'system_error'
      | 'provider_system_error'
      | 'rejected_by_correspondent_bank'
      | 'blocked_by_review'
      | 'unknown';

    /**
     * Human-readable description of the failure.
     */
    message: string;

    /**
     * Whether the payout can be retried.
     */
    retry: boolean;
  }
}

export interface PayoutRetrieveResponse {
  /**
   * Unique identifier of the payout.
   */
  id: string;

  /**
   * ID of the account that was debited.
   */
  account_id: string;

  /**
   * Amount as a string decimal (e.g. "100.50").
   */
  amount: string;

  /**
   * ID of the counterparty that receives the money.
   */
  counterparty_id: string;

  /**
   * Currency code (ISO 4217 or crypto).
   */
  currency: 'EUR' | 'GBP' | 'USD' | 'USDC';

  /**
   * Failure details when status is failed, otherwise null.
   */
  failure: PayoutRetrieveResponse.Failure | null;

  /**
   * ISO 8601 UTC timestamp when the payout was initiated.
   */
  initiated_at: string;

  /**
   * Key-value pairs stored with the payout.
   */
  metadata: { [key: string]: string };

  /**
   * Payment scheme or blockchain used for the payout, or null when unknown.
   */
  rail:
    | 'sepa'
    | 'sepa_instant'
    | 'faster_payments'
    | 'swift'
    | 'internal'
    | 'target'
    | 'ach'
    | 'fedwire'
    | 'bitcoin'
    | 'bitcoin_testnet4'
    | 'ethereum'
    | 'ethereum_sepolia'
    | 'solana'
    | 'solana_devnet'
    | 'polygon'
    | 'polygon_amoy'
    | null;

  /**
   * ISO 8601 UTC timestamp when the payout was sent.
   */
  sent_at: string | null;

  /**
   * Current status of the payout.
   */
  status: 'initiated' | 'submitted' | 'sent' | 'failed' | 'returned';

  /**
   * Reference used to track the payment across the payment network, such as the UETR
   * for SWIFT payments.
   */
  tracking_reference: string | null;

  /**
   * Transaction hash for crypto payouts, or null when not known. Only blockchain
   * rails support this field.
   */
  tx_hash: string | null;

  /**
   * Resource type discriminator.
   */
  type: 'payout';

  /**
   * Unstructured remittance information attached to the transfer. Not all rails
   * support this field.
   */
  unstructured_remittance_information: string | null;
}

export namespace PayoutRetrieveResponse {
  /**
   * Failure details when status is failed, otherwise null.
   */
  export interface Failure {
    /**
     * Failure code.
     */
    code:
      | 'account_closed'
      | 'account_blocked'
      | 'insufficient_funds'
      | 'invalid_account_format'
      | 'invalid_routing_number'
      | 'invalid_instruction'
      | 'invalid_amount'
      | 'invalid_time'
      | 'duplicate_transaction'
      | 'payee_verification_failed'
      | 'system_error'
      | 'provider_system_error'
      | 'rejected_by_correspondent_bank'
      | 'blocked_by_review'
      | 'unknown';

    /**
     * Human-readable description of the failure.
     */
    message: string;

    /**
     * Whether the payout can be retried.
     */
    retry: boolean;
  }
}

export interface PayoutListResponse {
  /**
   * Unique identifier of the payout.
   */
  id: string;

  /**
   * ID of the account that was debited.
   */
  account_id: string;

  /**
   * Amount as a string decimal (e.g. "100.50").
   */
  amount: string;

  /**
   * ID of the counterparty that receives the money.
   */
  counterparty_id: string;

  /**
   * Currency code (ISO 4217 or crypto).
   */
  currency: 'EUR' | 'GBP' | 'USD' | 'USDC';

  /**
   * Failure details when status is failed, otherwise null.
   */
  failure: PayoutListResponse.Failure | null;

  /**
   * ISO 8601 UTC timestamp when the payout was initiated.
   */
  initiated_at: string;

  /**
   * Key-value pairs stored with the payout.
   */
  metadata: { [key: string]: string };

  /**
   * Payment scheme or blockchain used for the payout, or null when unknown.
   */
  rail:
    | 'sepa'
    | 'sepa_instant'
    | 'faster_payments'
    | 'swift'
    | 'internal'
    | 'target'
    | 'ach'
    | 'fedwire'
    | 'bitcoin'
    | 'bitcoin_testnet4'
    | 'ethereum'
    | 'ethereum_sepolia'
    | 'solana'
    | 'solana_devnet'
    | 'polygon'
    | 'polygon_amoy'
    | null;

  /**
   * ISO 8601 UTC timestamp when the payout was sent.
   */
  sent_at: string | null;

  /**
   * Current status of the payout.
   */
  status: 'initiated' | 'submitted' | 'sent' | 'failed' | 'returned';

  /**
   * Reference used to track the payment across the payment network, such as the UETR
   * for SWIFT payments.
   */
  tracking_reference: string | null;

  /**
   * Transaction hash for crypto payouts, or null when not known. Only blockchain
   * rails support this field.
   */
  tx_hash: string | null;

  /**
   * Resource type discriminator.
   */
  type: 'payout';

  /**
   * Unstructured remittance information attached to the transfer. Not all rails
   * support this field.
   */
  unstructured_remittance_information: string | null;
}

export namespace PayoutListResponse {
  /**
   * Failure details when status is failed, otherwise null.
   */
  export interface Failure {
    /**
     * Failure code.
     */
    code:
      | 'account_closed'
      | 'account_blocked'
      | 'insufficient_funds'
      | 'invalid_account_format'
      | 'invalid_routing_number'
      | 'invalid_instruction'
      | 'invalid_amount'
      | 'invalid_time'
      | 'duplicate_transaction'
      | 'payee_verification_failed'
      | 'system_error'
      | 'provider_system_error'
      | 'rejected_by_correspondent_bank'
      | 'blocked_by_review'
      | 'unknown';

    /**
     * Human-readable description of the failure.
     */
    message: string;

    /**
     * Whether the payout can be retried.
     */
    retry: boolean;
  }
}

export interface PayoutCreateParams {
  /**
   * ID of the account to debit.
   */
  account_id: string;

  /**
   * Amount as a string decimal (e.g. "100.50").
   */
  amount: string;

  /**
   * ID of the saved counterparty that receives the money.
   */
  counterparty_id: string;

  /**
   * Currency code (ISO 4217 or crypto).
   */
  currency: 'EUR' | 'GBP' | 'USD' | 'USDC';

  /**
   * Key-value pairs stored with the payout.
   */
  metadata?: { [key: string]: string } | null;

  /**
   * Settlement rail the counterparty is reachable on. Selected automatically when
   * omitted. Validated against the counterparty financial address at runtime.
   */
  rail?:
    | 'sepa'
    | 'sepa_instant'
    | 'faster_payments'
    | 'swift'
    | 'ach'
    | 'fedwire'
    | 'ethereum'
    | 'ethereum_sepolia'
    | 'solana'
    | 'solana_devnet'
    | 'polygon'
    | 'polygon_amoy';

  /**
   * Unstructured remittance information attached to the transfer. This appears on
   * the counterparty's bank statement. Not supported by blockchain rails.
   */
  unstructured_remittance_information?: string | null;
}

export interface PayoutListParams extends CursorPageParams {
  created_at?: PayoutListParams.CreatedAt;

  /**
   * Filter to these currency codes. Use a separate `currencies` query parameter for
   * each value (e.g. `?currencies=EUR&currencies=USD`).
   */
  currencies?: Array<'EUR' | 'GBP' | 'USD' | 'USDC'>;

  /**
   * Filter by payout status.
   */
  status?: 'initiated' | 'submitted' | 'sent' | 'failed' | 'returned';
}

export namespace PayoutListParams {
  export interface CreatedAt {
    /**
     * Include payouts whose created_at is greater than or equal to this ISO 8601
     * timestamp.
     */
    gte?: string;

    /**
     * Include payouts whose created_at is less than or equal to this ISO 8601
     * timestamp.
     */
    lte?: string;
  }
}

export declare namespace Payouts {
  export {
    type PayoutCreateResponse as PayoutCreateResponse,
    type PayoutRetrieveResponse as PayoutRetrieveResponse,
    type PayoutListResponse as PayoutListResponse,
    type PayoutListResponsesCursorPage as PayoutListResponsesCursorPage,
    type PayoutCreateParams as PayoutCreateParams,
    type PayoutListParams as PayoutListParams,
  };
}
