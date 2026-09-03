// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Deposits extends APIResource {
  /**
   * Retrieves a deposit by ID.
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<DepositRetrieveResponse> {
    return this._client.get(path`/v1/deposits/${id}`, options);
  }

  /**
   * Lists deposits for the merchant with cursor-based pagination.
   */
  list(
    query: DepositListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<DepositListResponsesCursorPage, DepositListResponse> {
    return this._client.getAPIList('/v1/deposits', CursorPage<DepositListResponse>, { query, ...options });
  }
}

export type DepositListResponsesCursorPage = CursorPage<DepositListResponse>;

export interface DepositRetrieveResponse {
  /**
   * Unique identifier of the deposit.
   */
  id: string;

  /**
   * ID of the account that was credited with the deposit.
   */
  account_id: string;

  /**
   * Amount as a string decimal (e.g. "100.50").
   */
  amount: string;

  /**
   * ID of the counterparty that sent the money, or null when not known.
   */
  counterparty_id: string | null;

  /**
   * Currency code (ISO 4217 or crypto).
   */
  currency: 'EUR' | 'GBP' | 'USD' | 'USDC';

  /**
   * Payment scheme or blockchain used for the deposit, or null when unknown.
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
   * Array of deposit return IDs associated with this deposit.
   */
  returns: Array<string>;

  /**
   * ISO 8601 UTC timestamp when the deposit was settled.
   */
  settled_at: string;

  /**
   * Current status of the deposit.
   */
  status: 'settled';

  /**
   * Reference used to track the payment across the payment network, such as the UETR
   * for SWIFT payments.
   */
  tracking_reference: string | null;

  /**
   * Transaction hash for crypto deposits, or null when not known. Only blockchain
   * rails support this field.
   */
  tx_hash: string | null;

  /**
   * Resource type discriminator.
   */
  type: 'deposit';

  /**
   * Unstructured remittance information attached to the transfer. Not all rails
   * support this field.
   */
  unstructured_remittance_information: string | null;
}

export interface DepositListResponse {
  /**
   * Unique identifier of the deposit.
   */
  id: string;

  /**
   * ID of the account that was credited with the deposit.
   */
  account_id: string;

  /**
   * Amount as a string decimal (e.g. "100.50").
   */
  amount: string;

  /**
   * ID of the counterparty that sent the money, or null when not known.
   */
  counterparty_id: string | null;

  /**
   * Currency code (ISO 4217 or crypto).
   */
  currency: 'EUR' | 'GBP' | 'USD' | 'USDC';

  /**
   * Payment scheme or blockchain used for the deposit, or null when unknown.
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
   * Array of deposit return IDs associated with this deposit.
   */
  returns: Array<string>;

  /**
   * ISO 8601 UTC timestamp when the deposit was settled.
   */
  settled_at: string;

  /**
   * Current status of the deposit.
   */
  status: 'settled';

  /**
   * Reference used to track the payment across the payment network, such as the UETR
   * for SWIFT payments.
   */
  tracking_reference: string | null;

  /**
   * Transaction hash for crypto deposits, or null when not known. Only blockchain
   * rails support this field.
   */
  tx_hash: string | null;

  /**
   * Resource type discriminator.
   */
  type: 'deposit';

  /**
   * Unstructured remittance information attached to the transfer. Not all rails
   * support this field.
   */
  unstructured_remittance_information: string | null;
}

export interface DepositListParams extends CursorPageParams {
  settled_at?: DepositListParams.SettledAt;
}

export namespace DepositListParams {
  export interface SettledAt {
    /**
     * Include deposits whose settled_at is greater than or equal to this ISO 8601
     * timestamp.
     */
    gte?: string;

    /**
     * Include deposits whose settled_at is less than or equal to this ISO 8601
     * timestamp.
     */
    lte?: string;
  }
}

export declare namespace Deposits {
  export {
    type DepositRetrieveResponse as DepositRetrieveResponse,
    type DepositListResponse as DepositListResponse,
    type DepositListResponsesCursorPage as DepositListResponsesCursorPage,
    type DepositListParams as DepositListParams,
  };
}
