// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class PayoutTrackingEvents extends APIResource {
  /**
   * Retrieves a payout tracking event by ID.
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<PayoutTrackingEventRetrieveResponse> {
    return this._client.get(path`/v1/payout_tracking_events/${id}`, options);
  }

  /**
   * Returns a paginated list of payout tracking events, newest first.
   */
  list(
    query: PayoutTrackingEventListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<PayoutTrackingEventListResponsesCursorPage, PayoutTrackingEventListResponse> {
    return this._client.getAPIList(
      '/v1/payout_tracking_events',
      CursorPage<PayoutTrackingEventListResponse>,
      { query, ...options },
    );
  }
}

export type PayoutTrackingEventListResponsesCursorPage = CursorPage<PayoutTrackingEventListResponse>;

export interface PayoutTrackingEventRetrieveResponse {
  /**
   * Unique identifier of the tracking event.
   */
  id: string;

  /**
   * Amount credited to the beneficiary. Set only on a credited event, otherwise
   * null.
   */
  beneficiary_amount: PayoutTrackingEventRetrieveResponse.BeneficiaryAmount | null;

  /**
   * ISO 8601 UTC timestamp when Augustus recorded the event.
   */
  created_at: string;

  /**
   * Fee deducted at this step. Null when none was reported.
   */
  fee: PayoutTrackingEventRetrieveResponse.Fee | null;

  /**
   * Institution that sent the payout in this step. Null when unknown or not reported
   * by the source.
   */
  from_institution: PayoutTrackingEventRetrieveResponse.FromInstitution | null;

  /**
   * Institution holding the payout after this step: the bank that received it, or
   * the bank that reported this status. Null when unknown.
   */
  institution: PayoutTrackingEventRetrieveResponse.Institution | null;

  /**
   * Whether Augustus considers delivery finished. A credit reported by a bank that
   * passes the payout on is a forwarded step and is not terminal. A later event,
   * such as returned, can still follow.
   */
  is_terminal: boolean;

  /**
   * Normalized point in the payout journey. New values may be added.
   */
  milestone:
    | 'initiated'
    | 'submitted'
    | 'sent'
    | 'failed'
    | 'returned'
    | 'accepted'
    | 'settled'
    | 'forwarded'
    | 'credited'
    | 'rejected'
    | 'returning'
    | 'visibility_lost'
    | 'other';

  /**
   * Raw network status. Null when the step has none.
   */
  network_status: PayoutTrackingEventRetrieveResponse.NetworkStatus | null;

  /**
   * ISO 8601 UTC timestamp when the step happened. Null when the source has no
   * timestamp. Can be out of order with sequence.
   */
  occurred_at: string | null;

  /**
   * ID of the payout this event belongs to.
   */
  payout_id: string;

  /**
   * How far Augustus can follow the payout: end_to_end when the rail confirms the
   * beneficiary credit, network when it only confirms settlement. New values may be
   * added.
   */
  scope: 'network' | 'end_to_end';

  /**
   * Gap-free counter per payout, in the order Augustus recorded the events. A gap
   * means you missed a recorded event, such as a dropped webhook. A sequence without
   * gaps does not mean every network step was observed.
   */
  sequence: number;

  /**
   * Where Augustus learned this step: augustus for steps Augustus records itself,
   * swift_gpi for SWIFT gpi statuses, other for any other source. New values may be
   * added.
   */
  source: 'augustus' | 'swift_gpi' | 'other';

  /**
   * Reason for the current state. Null when none applies.
   */
  status_reason: PayoutTrackingEventRetrieveResponse.StatusReason | null;

  /**
   * Resource type discriminator.
   */
  type: 'payout_tracking_event';
}

export namespace PayoutTrackingEventRetrieveResponse {
  /**
   * Amount credited to the beneficiary. Set only on a credited event, otherwise
   * null.
   */
  export interface BeneficiaryAmount {
    /**
     * Credited amount as a string decimal (e.g. "100.50").
     */
    amount: string;

    /**
     * ISO 4217 currency code of the credited amount.
     */
    currency: string;
  }

  /**
   * Fee deducted at this step. Null when none was reported.
   */
  export interface Fee {
    /**
     * Fee amount as a string decimal (e.g. "10.00").
     */
    amount: string;

    /**
     * Who bears the charges under the payment charge agreement: debtor (OUR), creditor
     * (BEN), shared (SHA), or other for any other agreement. New values may be added.
     */
    borne_by: 'debtor' | 'creditor' | 'shared' | 'other';

    /**
     * ISO 4217 currency code of the fee.
     */
    currency: string;
  }

  /**
   * Institution that sent the payout in this step. Null when unknown or not reported
   * by the source.
   */
  export interface FromInstitution {
    /**
     * Identifier of the institution, typed by scheme. Null when only its name is
     * known.
     */
    identifier: FromInstitution.Identifier | null;

    /**
     * Name of the institution. Null when unknown.
     */
    name: string | null;
  }

  export namespace FromInstitution {
    /**
     * Identifier of the institution, typed by scheme. Null when only its name is
     * known.
     */
    export interface Identifier {
      /**
       * Identifier scheme. Only bic today.
       */
      type: 'bic';

      /**
       * ISO 9362 Bank Identifier Code, always 11 characters. An 8-character BIC is
       * padded with the XXX head office branch code.
       */
      value: string;
    }
  }

  /**
   * Institution holding the payout after this step: the bank that received it, or
   * the bank that reported this status. Null when unknown.
   */
  export interface Institution {
    /**
     * Identifier of the institution, typed by scheme. Null when only its name is
     * known.
     */
    identifier: Institution.Identifier | null;

    /**
     * Name of the institution. Null when unknown.
     */
    name: string | null;
  }

  export namespace Institution {
    /**
     * Identifier of the institution, typed by scheme. Null when only its name is
     * known.
     */
    export interface Identifier {
      /**
       * Identifier scheme. Only bic today.
       */
      type: 'bic';

      /**
       * ISO 9362 Bank Identifier Code, always 11 characters. An 8-character BIC is
       * padded with the XXX head office branch code.
       */
      value: string;
    }
  }

  /**
   * Raw network status. Null when the step has none.
   */
  export interface NetworkStatus {
    /**
     * Status code reported by the network, such as ACSP, ACSC, ACCC or RJCT.
     */
    code: string;

    /**
     * Reason code for the status, such as G000. Null when the network reports none.
     */
    reason_code: string | null;
  }

  /**
   * Reason for the current state. Null when none applies.
   */
  export interface StatusReason {
    /**
     * Normalized reason code assigned by Augustus. Current codes: `CREDIT_PENDING`
     * (the beneficiary bank reported the credit as pending). New codes may be added.
     */
    code: string;

    /**
     * Explanation of the reason code, written by Augustus.
     */
    description: string;
  }
}

export interface PayoutTrackingEventListResponse {
  /**
   * Unique identifier of the tracking event.
   */
  id: string;

  /**
   * Amount credited to the beneficiary. Set only on a credited event, otherwise
   * null.
   */
  beneficiary_amount: PayoutTrackingEventListResponse.BeneficiaryAmount | null;

  /**
   * ISO 8601 UTC timestamp when Augustus recorded the event.
   */
  created_at: string;

  /**
   * Fee deducted at this step. Null when none was reported.
   */
  fee: PayoutTrackingEventListResponse.Fee | null;

  /**
   * Institution that sent the payout in this step. Null when unknown or not reported
   * by the source.
   */
  from_institution: PayoutTrackingEventListResponse.FromInstitution | null;

  /**
   * Institution holding the payout after this step: the bank that received it, or
   * the bank that reported this status. Null when unknown.
   */
  institution: PayoutTrackingEventListResponse.Institution | null;

  /**
   * Whether Augustus considers delivery finished. A credit reported by a bank that
   * passes the payout on is a forwarded step and is not terminal. A later event,
   * such as returned, can still follow.
   */
  is_terminal: boolean;

  /**
   * Normalized point in the payout journey. New values may be added.
   */
  milestone:
    | 'initiated'
    | 'submitted'
    | 'sent'
    | 'failed'
    | 'returned'
    | 'accepted'
    | 'settled'
    | 'forwarded'
    | 'credited'
    | 'rejected'
    | 'returning'
    | 'visibility_lost'
    | 'other';

  /**
   * Raw network status. Null when the step has none.
   */
  network_status: PayoutTrackingEventListResponse.NetworkStatus | null;

  /**
   * ISO 8601 UTC timestamp when the step happened. Null when the source has no
   * timestamp. Can be out of order with sequence.
   */
  occurred_at: string | null;

  /**
   * ID of the payout this event belongs to.
   */
  payout_id: string;

  /**
   * How far Augustus can follow the payout: end_to_end when the rail confirms the
   * beneficiary credit, network when it only confirms settlement. New values may be
   * added.
   */
  scope: 'network' | 'end_to_end';

  /**
   * Gap-free counter per payout, in the order Augustus recorded the events. A gap
   * means you missed a recorded event, such as a dropped webhook. A sequence without
   * gaps does not mean every network step was observed.
   */
  sequence: number;

  /**
   * Where Augustus learned this step: augustus for steps Augustus records itself,
   * swift_gpi for SWIFT gpi statuses, other for any other source. New values may be
   * added.
   */
  source: 'augustus' | 'swift_gpi' | 'other';

  /**
   * Reason for the current state. Null when none applies.
   */
  status_reason: PayoutTrackingEventListResponse.StatusReason | null;

  /**
   * Resource type discriminator.
   */
  type: 'payout_tracking_event';
}

export namespace PayoutTrackingEventListResponse {
  /**
   * Amount credited to the beneficiary. Set only on a credited event, otherwise
   * null.
   */
  export interface BeneficiaryAmount {
    /**
     * Credited amount as a string decimal (e.g. "100.50").
     */
    amount: string;

    /**
     * ISO 4217 currency code of the credited amount.
     */
    currency: string;
  }

  /**
   * Fee deducted at this step. Null when none was reported.
   */
  export interface Fee {
    /**
     * Fee amount as a string decimal (e.g. "10.00").
     */
    amount: string;

    /**
     * Who bears the charges under the payment charge agreement: debtor (OUR), creditor
     * (BEN), shared (SHA), or other for any other agreement. New values may be added.
     */
    borne_by: 'debtor' | 'creditor' | 'shared' | 'other';

    /**
     * ISO 4217 currency code of the fee.
     */
    currency: string;
  }

  /**
   * Institution that sent the payout in this step. Null when unknown or not reported
   * by the source.
   */
  export interface FromInstitution {
    /**
     * Identifier of the institution, typed by scheme. Null when only its name is
     * known.
     */
    identifier: FromInstitution.Identifier | null;

    /**
     * Name of the institution. Null when unknown.
     */
    name: string | null;
  }

  export namespace FromInstitution {
    /**
     * Identifier of the institution, typed by scheme. Null when only its name is
     * known.
     */
    export interface Identifier {
      /**
       * Identifier scheme. Only bic today.
       */
      type: 'bic';

      /**
       * ISO 9362 Bank Identifier Code, always 11 characters. An 8-character BIC is
       * padded with the XXX head office branch code.
       */
      value: string;
    }
  }

  /**
   * Institution holding the payout after this step: the bank that received it, or
   * the bank that reported this status. Null when unknown.
   */
  export interface Institution {
    /**
     * Identifier of the institution, typed by scheme. Null when only its name is
     * known.
     */
    identifier: Institution.Identifier | null;

    /**
     * Name of the institution. Null when unknown.
     */
    name: string | null;
  }

  export namespace Institution {
    /**
     * Identifier of the institution, typed by scheme. Null when only its name is
     * known.
     */
    export interface Identifier {
      /**
       * Identifier scheme. Only bic today.
       */
      type: 'bic';

      /**
       * ISO 9362 Bank Identifier Code, always 11 characters. An 8-character BIC is
       * padded with the XXX head office branch code.
       */
      value: string;
    }
  }

  /**
   * Raw network status. Null when the step has none.
   */
  export interface NetworkStatus {
    /**
     * Status code reported by the network, such as ACSP, ACSC, ACCC or RJCT.
     */
    code: string;

    /**
     * Reason code for the status, such as G000. Null when the network reports none.
     */
    reason_code: string | null;
  }

  /**
   * Reason for the current state. Null when none applies.
   */
  export interface StatusReason {
    /**
     * Normalized reason code assigned by Augustus. Current codes: `CREDIT_PENDING`
     * (the beneficiary bank reported the credit as pending). New codes may be added.
     */
    code: string;

    /**
     * Explanation of the reason code, written by Augustus.
     */
    description: string;
  }
}

export interface PayoutTrackingEventListParams extends CursorPageParams {
  created_at?: PayoutTrackingEventListParams.CreatedAt;

  /**
   * Filter by whether Augustus considers delivery finished.
   */
  is_terminal?: boolean;

  /**
   * Filter by milestone.
   */
  milestone?:
    | 'initiated'
    | 'submitted'
    | 'sent'
    | 'failed'
    | 'returned'
    | 'accepted'
    | 'settled'
    | 'forwarded'
    | 'credited'
    | 'rejected'
    | 'returning'
    | 'visibility_lost'
    | 'other';

  /**
   * Filter tracking events belonging to this payout.
   */
  payout_id?: string;
}

export namespace PayoutTrackingEventListParams {
  export interface CreatedAt {
    /**
     * Include tracking events whose created_at is greater than or equal to this ISO
     * 8601 timestamp.
     */
    gte?: string;

    /**
     * Include tracking events whose created_at is less than or equal to this ISO 8601
     * timestamp.
     */
    lte?: string;
  }
}

export declare namespace PayoutTrackingEvents {
  export {
    type PayoutTrackingEventRetrieveResponse as PayoutTrackingEventRetrieveResponse,
    type PayoutTrackingEventListResponse as PayoutTrackingEventListResponse,
    type PayoutTrackingEventListResponsesCursorPage as PayoutTrackingEventListResponsesCursorPage,
    type PayoutTrackingEventListParams as PayoutTrackingEventListParams,
  };
}
