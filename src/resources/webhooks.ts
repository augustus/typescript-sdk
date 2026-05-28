// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { Webhook } from 'standardwebhooks';

export class Webhooks extends APIResource {
  unwrap(
    body: string,
    { headers, key }: { headers: Record<string, string>; key?: string },
  ): UnwrapWebhookEvent {
    if (headers !== undefined) {
      const keyStr: string | null = key === undefined ? this._client.webhookKey : key;
      if (keyStr === null) throw new Error('Webhook key must not be null in order to unwrap');
      const wh = new Webhook(keyStr);
      wh.verify(body, headers);
    }
    return JSON.parse(body) as UnwrapWebhookEvent;
  }
}

export interface PayoutCreatedWebhookEvent {
  /**
   * Unique identifier for the event. Stable across retries.
   */
  id: string;

  /**
   * API version the payload was rendered at. Stable across retries and redeliveries.
   */
  api_version: string;

  /**
   * ISO 8601 UTC timestamp when the event was created.
   */
  date: string;

  /**
   * Full resource snapshot at the time of the event.
   */
  payload: PayoutCreatedWebhookEvent.Payload;

  /**
   * Event type in resource.action format.
   */
  type: 'payout.created';
}

export namespace PayoutCreatedWebhookEvent {
  /**
   * Full resource snapshot at the time of the event.
   */
  export interface Payload {
    /**
     * Unique identifier of the payout.
     */
    id: string;

    /**
     * Amount as a string decimal (e.g. "100.50").
     */
    amount: string;

    /**
     * ISO 8601 UTC timestamp when the payout was created.
     */
    created_at: string;

    /**
     * Currency code (ISO 4217 currency code or crypto currency code).
     */
    currency: 'EUR' | 'GBP' | 'USD' | 'USDC';

    /**
     * Bank account or crypto wallet the payout was sent to.
     */
    destination: Payload.UnionMember0 | Payload.UnionMember1 | Payload.UnionMember2 | Payload.UnionMember3;

    /**
     * Failure details when status is failed, otherwise null.
     */
    failure: Payload.Failure | null;

    /**
     * Key-value pairs stored with the payout.
     */
    metadata: { [key: string]: string };

    /**
     * Payment reference.
     */
    reference: string;

    /**
     * ID of the account that was debited.
     */
    source_account_id: string;

    /**
     * Current status of the payout.
     */
    status: 'pending' | 'paid' | 'failed' | 'returned';

    /**
     * Resource type discriminator.
     */
    type: 'payout';

    /**
     * ISO 8601 UTC timestamp when the payout was last updated.
     */
    updated_at: string;
  }

  export namespace Payload {
    export interface UnionMember0 {
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

    export interface UnionMember1 {
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

    export interface UnionMember2 {
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

    export interface UnionMember3 {
      /**
       * Wallet address on the specified blockchain.
       */
      address: string;

      /**
       * Blockchain network for the crypto wallet.
       */
      blockchain: 'ethereum' | 'solana' | 'polygon';

      /**
       * Discriminator for crypto wallet financial address.
       */
      type: 'crypto_wallet';
    }

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
}

export interface PayoutInitiatedWebhookEvent {
  /**
   * Unique identifier for the event. Stable across retries.
   */
  id: string;

  /**
   * API version the payload was rendered at. Stable across retries and redeliveries.
   */
  api_version: string;

  /**
   * ISO 8601 UTC timestamp when the event was created.
   */
  date: string;

  /**
   * Full resource snapshot at the time of the event.
   */
  payload: PayoutInitiatedWebhookEvent.Payload;

  /**
   * Event type in resource.action format.
   */
  type: 'payout.initiated';
}

export namespace PayoutInitiatedWebhookEvent {
  /**
   * Full resource snapshot at the time of the event.
   */
  export interface Payload {
    /**
     * Unique identifier of the payout.
     */
    id: string;

    /**
     * Amount as a string decimal (e.g. "100.50").
     */
    amount: string;

    /**
     * ISO 8601 UTC timestamp when the payout was created.
     */
    created_at: string;

    /**
     * Currency code (ISO 4217 currency code or crypto currency code).
     */
    currency: 'EUR' | 'GBP' | 'USD' | 'USDC';

    /**
     * Bank account or crypto wallet the payout was sent to.
     */
    destination: Payload.UnionMember0 | Payload.UnionMember1 | Payload.UnionMember2 | Payload.UnionMember3;

    /**
     * Failure details when status is failed, otherwise null.
     */
    failure: Payload.Failure | null;

    /**
     * Key-value pairs stored with the payout.
     */
    metadata: { [key: string]: string };

    /**
     * Payment reference.
     */
    reference: string;

    /**
     * ID of the account that was debited.
     */
    source_account_id: string;

    /**
     * Current status of the payout.
     */
    status: 'pending' | 'paid' | 'failed' | 'returned';

    /**
     * Resource type discriminator.
     */
    type: 'payout';

    /**
     * ISO 8601 UTC timestamp when the payout was last updated.
     */
    updated_at: string;
  }

  export namespace Payload {
    export interface UnionMember0 {
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

    export interface UnionMember1 {
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

    export interface UnionMember2 {
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

    export interface UnionMember3 {
      /**
       * Wallet address on the specified blockchain.
       */
      address: string;

      /**
       * Blockchain network for the crypto wallet.
       */
      blockchain: 'ethereum' | 'solana' | 'polygon';

      /**
       * Discriminator for crypto wallet financial address.
       */
      type: 'crypto_wallet';
    }

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
}

export interface PayoutPaidWebhookEvent {
  /**
   * Unique identifier for the event. Stable across retries.
   */
  id: string;

  /**
   * API version the payload was rendered at. Stable across retries and redeliveries.
   */
  api_version: string;

  /**
   * ISO 8601 UTC timestamp when the event was created.
   */
  date: string;

  /**
   * Full resource snapshot at the time of the event.
   */
  payload: PayoutPaidWebhookEvent.Payload;

  /**
   * Event type in resource.action format.
   */
  type: 'payout.paid';
}

export namespace PayoutPaidWebhookEvent {
  /**
   * Full resource snapshot at the time of the event.
   */
  export interface Payload {
    /**
     * Unique identifier of the payout.
     */
    id: string;

    /**
     * Amount as a string decimal (e.g. "100.50").
     */
    amount: string;

    /**
     * ISO 8601 UTC timestamp when the payout was created.
     */
    created_at: string;

    /**
     * Currency code (ISO 4217 currency code or crypto currency code).
     */
    currency: 'EUR' | 'GBP' | 'USD' | 'USDC';

    /**
     * Bank account or crypto wallet the payout was sent to.
     */
    destination: Payload.UnionMember0 | Payload.UnionMember1 | Payload.UnionMember2 | Payload.UnionMember3;

    /**
     * Failure details when status is failed, otherwise null.
     */
    failure: Payload.Failure | null;

    /**
     * Key-value pairs stored with the payout.
     */
    metadata: { [key: string]: string };

    /**
     * Payment reference.
     */
    reference: string;

    /**
     * ID of the account that was debited.
     */
    source_account_id: string;

    /**
     * Current status of the payout.
     */
    status: 'pending' | 'paid' | 'failed' | 'returned';

    /**
     * Resource type discriminator.
     */
    type: 'payout';

    /**
     * ISO 8601 UTC timestamp when the payout was last updated.
     */
    updated_at: string;
  }

  export namespace Payload {
    export interface UnionMember0 {
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

    export interface UnionMember1 {
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

    export interface UnionMember2 {
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

    export interface UnionMember3 {
      /**
       * Wallet address on the specified blockchain.
       */
      address: string;

      /**
       * Blockchain network for the crypto wallet.
       */
      blockchain: 'ethereum' | 'solana' | 'polygon';

      /**
       * Discriminator for crypto wallet financial address.
       */
      type: 'crypto_wallet';
    }

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
}

export interface PayoutFailedWebhookEvent {
  /**
   * Unique identifier for the event. Stable across retries.
   */
  id: string;

  /**
   * API version the payload was rendered at. Stable across retries and redeliveries.
   */
  api_version: string;

  /**
   * ISO 8601 UTC timestamp when the event was created.
   */
  date: string;

  /**
   * Full resource snapshot at the time of the event.
   */
  payload: PayoutFailedWebhookEvent.Payload;

  /**
   * Event type in resource.action format.
   */
  type: 'payout.failed';
}

export namespace PayoutFailedWebhookEvent {
  /**
   * Full resource snapshot at the time of the event.
   */
  export interface Payload {
    /**
     * Unique identifier of the payout.
     */
    id: string;

    /**
     * Amount as a string decimal (e.g. "100.50").
     */
    amount: string;

    /**
     * ISO 8601 UTC timestamp when the payout was created.
     */
    created_at: string;

    /**
     * Currency code (ISO 4217 currency code or crypto currency code).
     */
    currency: 'EUR' | 'GBP' | 'USD' | 'USDC';

    /**
     * Bank account or crypto wallet the payout was sent to.
     */
    destination: Payload.UnionMember0 | Payload.UnionMember1 | Payload.UnionMember2 | Payload.UnionMember3;

    /**
     * Failure details when status is failed, otherwise null.
     */
    failure: Payload.Failure | null;

    /**
     * Key-value pairs stored with the payout.
     */
    metadata: { [key: string]: string };

    /**
     * Payment reference.
     */
    reference: string;

    /**
     * ID of the account that was debited.
     */
    source_account_id: string;

    /**
     * Current status of the payout.
     */
    status: 'pending' | 'paid' | 'failed' | 'returned';

    /**
     * Resource type discriminator.
     */
    type: 'payout';

    /**
     * ISO 8601 UTC timestamp when the payout was last updated.
     */
    updated_at: string;
  }

  export namespace Payload {
    export interface UnionMember0 {
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

    export interface UnionMember1 {
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

    export interface UnionMember2 {
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

    export interface UnionMember3 {
      /**
       * Wallet address on the specified blockchain.
       */
      address: string;

      /**
       * Blockchain network for the crypto wallet.
       */
      blockchain: 'ethereum' | 'solana' | 'polygon';

      /**
       * Discriminator for crypto wallet financial address.
       */
      type: 'crypto_wallet';
    }

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
}

export interface ReturnInitiatedWebhookEvent {
  /**
   * Unique identifier for the event. Stable across retries.
   */
  id: string;

  /**
   * API version the payload was rendered at. Stable across retries and redeliveries.
   */
  api_version: string;

  /**
   * ISO 8601 UTC timestamp when the event was created.
   */
  date: string;

  /**
   * Full resource snapshot at the time of the event.
   */
  payload: ReturnInitiatedWebhookEvent.Payload;

  /**
   * Event type in resource.action format.
   */
  type: 'return.initiated';
}

export namespace ReturnInitiatedWebhookEvent {
  /**
   * Full resource snapshot at the time of the event.
   */
  export interface Payload {
    /**
     * Unique identifier of the return.
     */
    id: string;

    /**
     * Amount as a string decimal (e.g. "100.50").
     */
    amount: string;

    /**
     * ISO 8601 UTC timestamp when the return was created.
     */
    created_at: string;

    /**
     * Currency code (ISO 4217 currency code or crypto currency code).
     */
    currency: 'EUR' | 'GBP' | 'USD' | 'USDC';

    /**
     * ID of the parent deposit.
     */
    deposit_id: string;

    /**
     * Failure details when status is failed, otherwise null.
     */
    failure: Payload.Failure | null;

    /**
     * Current status of the return.
     */
    status: 'pending' | 'paid' | 'failed' | 'returned';

    /**
     * Type of the resource.
     */
    type: 'return';

    /**
     * ISO 8601 UTC timestamp when the return was last updated.
     */
    updated_at: string;
  }

  export namespace Payload {
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
       * Whether the return can be retried.
       */
      retry: boolean;
    }
  }
}

export interface ReturnPaidWebhookEvent {
  /**
   * Unique identifier for the event. Stable across retries.
   */
  id: string;

  /**
   * API version the payload was rendered at. Stable across retries and redeliveries.
   */
  api_version: string;

  /**
   * ISO 8601 UTC timestamp when the event was created.
   */
  date: string;

  /**
   * Full resource snapshot at the time of the event.
   */
  payload: ReturnPaidWebhookEvent.Payload;

  /**
   * Event type in resource.action format.
   */
  type: 'return.paid';
}

export namespace ReturnPaidWebhookEvent {
  /**
   * Full resource snapshot at the time of the event.
   */
  export interface Payload {
    /**
     * Unique identifier of the return.
     */
    id: string;

    /**
     * Amount as a string decimal (e.g. "100.50").
     */
    amount: string;

    /**
     * ISO 8601 UTC timestamp when the return was created.
     */
    created_at: string;

    /**
     * Currency code (ISO 4217 currency code or crypto currency code).
     */
    currency: 'EUR' | 'GBP' | 'USD' | 'USDC';

    /**
     * ID of the parent deposit.
     */
    deposit_id: string;

    /**
     * Failure details when status is failed, otherwise null.
     */
    failure: Payload.Failure | null;

    /**
     * Current status of the return.
     */
    status: 'pending' | 'paid' | 'failed' | 'returned';

    /**
     * Type of the resource.
     */
    type: 'return';

    /**
     * ISO 8601 UTC timestamp when the return was last updated.
     */
    updated_at: string;
  }

  export namespace Payload {
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
       * Whether the return can be retried.
       */
      retry: boolean;
    }
  }
}

export interface ReturnFailedWebhookEvent {
  /**
   * Unique identifier for the event. Stable across retries.
   */
  id: string;

  /**
   * API version the payload was rendered at. Stable across retries and redeliveries.
   */
  api_version: string;

  /**
   * ISO 8601 UTC timestamp when the event was created.
   */
  date: string;

  /**
   * Full resource snapshot at the time of the event.
   */
  payload: ReturnFailedWebhookEvent.Payload;

  /**
   * Event type in resource.action format.
   */
  type: 'return.failed';
}

export namespace ReturnFailedWebhookEvent {
  /**
   * Full resource snapshot at the time of the event.
   */
  export interface Payload {
    /**
     * Unique identifier of the return.
     */
    id: string;

    /**
     * Amount as a string decimal (e.g. "100.50").
     */
    amount: string;

    /**
     * ISO 8601 UTC timestamp when the return was created.
     */
    created_at: string;

    /**
     * Currency code (ISO 4217 currency code or crypto currency code).
     */
    currency: 'EUR' | 'GBP' | 'USD' | 'USDC';

    /**
     * ID of the parent deposit.
     */
    deposit_id: string;

    /**
     * Failure details when status is failed, otherwise null.
     */
    failure: Payload.Failure | null;

    /**
     * Current status of the return.
     */
    status: 'pending' | 'paid' | 'failed' | 'returned';

    /**
     * Type of the resource.
     */
    type: 'return';

    /**
     * ISO 8601 UTC timestamp when the return was last updated.
     */
    updated_at: string;
  }

  export namespace Payload {
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
       * Whether the return can be retried.
       */
      retry: boolean;
    }
  }
}

export interface ReturnReturnedWebhookEvent {
  /**
   * Unique identifier for the event. Stable across retries.
   */
  id: string;

  /**
   * API version the payload was rendered at. Stable across retries and redeliveries.
   */
  api_version: string;

  /**
   * ISO 8601 UTC timestamp when the event was created.
   */
  date: string;

  /**
   * Full resource snapshot at the time of the event.
   */
  payload: ReturnReturnedWebhookEvent.Payload;

  /**
   * Event type in resource.action format.
   */
  type: 'return.returned';
}

export namespace ReturnReturnedWebhookEvent {
  /**
   * Full resource snapshot at the time of the event.
   */
  export interface Payload {
    /**
     * Unique identifier of the return.
     */
    id: string;

    /**
     * Amount as a string decimal (e.g. "100.50").
     */
    amount: string;

    /**
     * ISO 8601 UTC timestamp when the return was created.
     */
    created_at: string;

    /**
     * Currency code (ISO 4217 currency code or crypto currency code).
     */
    currency: 'EUR' | 'GBP' | 'USD' | 'USDC';

    /**
     * ID of the parent deposit.
     */
    deposit_id: string;

    /**
     * Failure details when status is failed, otherwise null.
     */
    failure: Payload.Failure | null;

    /**
     * Current status of the return.
     */
    status: 'pending' | 'paid' | 'failed' | 'returned';

    /**
     * Type of the resource.
     */
    type: 'return';

    /**
     * ISO 8601 UTC timestamp when the return was last updated.
     */
    updated_at: string;
  }

  export namespace Payload {
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
       * Whether the return can be retried.
       */
      retry: boolean;
    }
  }
}

export interface DepositReceivedWebhookEvent {
  /**
   * Unique identifier for the event. Stable across retries.
   */
  id: string;

  /**
   * API version the payload was rendered at. Stable across retries and redeliveries.
   */
  api_version: string;

  /**
   * ISO 8601 UTC timestamp when the event was created.
   */
  date: string;

  /**
   * Full resource snapshot at the time of the event.
   */
  payload: DepositReceivedWebhookEvent.Payload;

  /**
   * Event type in resource.action format.
   */
  type: 'deposit.received';
}

export namespace DepositReceivedWebhookEvent {
  /**
   * Full resource snapshot at the time of the event.
   */
  export interface Payload {
    /**
     * Unique identifier of the deposit.
     */
    id: string;

    /**
     * Amount as a string decimal (e.g. "100.50").
     */
    amount: string;

    /**
     * Reference visible on the bank statement, or null when not applicable.
     */
    bank_statement_reference: string | null;

    /**
     * ISO 8601 UTC timestamp when the deposit was created.
     */
    created_at: string;

    /**
     * Supported fiat or crypto currency code for the deposit amount.
     */
    currency: 'EUR' | 'GBP' | 'USD' | 'USDC';

    /**
     * ID of the merchant account that received the deposit.
     */
    destination_account_id: string;

    /**
     * Payment rail or blockchain used for the deposit.
     */
    rail:
      | 'sepa_instant'
      | 'faster_payments'
      | 'sepa'
      | 'elixir'
      | 'express_elixir'
      | 'sek_account_to_account'
      | 'sumclearing'
      | 'straksclearing'
      | 'swift'
      | 'internal'
      | 'target'
      | 'ach'
      | 'fedwire'
      | 'eth'
      | 'eth_sepolia'
      | 'sol'
      | 'sol_devnet'
      | 'matic'
      | 'matic_amoy'
      | null;

    /**
     * Array of deposit return IDs associated with this deposit.
     */
    returns: Array<string>;

    /**
     * Counterparty bank account or crypto wallet that sent the funds.
     */
    source: Payload.UnionMember0 | Payload.UnionMember1 | Payload.UnionMember2 | Payload.UnionMember3;

    /**
     * Current status of the deposit.
     */
    status: 'received' | 'in_return' | 'returned' | 'return_failed' | 'return_returned';

    /**
     * Transaction hash for crypto deposits, or null when not known.
     */
    tx_hash: string | null;

    /**
     * Resource type discriminator.
     */
    type: 'deposit';

    /**
     * ISO 8601 UTC timestamp when the deposit was last updated.
     */
    updated_at: string;
  }

  export namespace Payload {
    export interface UnionMember0 {
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
       * Discriminator for IBAN source.
       */
      type: 'iban';
    }

    export interface UnionMember1 {
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
       * Discriminator for UK sort code source.
       */
      type: 'sort_code';
    }

    export interface UnionMember2 {
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
       * Discriminator for ABA wire source.
       */
      type: 'aba';
    }

    export interface UnionMember3 {
      /**
       * Wallet address on the specified blockchain.
       */
      address: string;

      /**
       * Blockchain network for the crypto wallet.
       */
      blockchain: 'ethereum' | 'solana' | 'polygon';

      /**
       * Discriminator for crypto wallet source.
       */
      type: 'crypto_wallet';
    }
  }
}

export interface ConversionCreatedWebhookEvent {
  /**
   * Unique identifier for the event. Stable across retries.
   */
  id: string;

  /**
   * API version the payload was rendered at. Stable across retries and redeliveries.
   */
  api_version: string;

  /**
   * ISO 8601 UTC timestamp when the event was created.
   */
  date: string;

  /**
   * Full resource snapshot at the time of the event.
   */
  payload: ConversionCreatedWebhookEvent.Payload;

  /**
   * Event type in resource.action format.
   */
  type: 'conversion.created';
}

export namespace ConversionCreatedWebhookEvent {
  /**
   * Full resource snapshot at the time of the event.
   */
  export interface Payload {
    /**
     * Unique identifier of the conversion.
     */
    id: string;

    /**
     * ISO 8601 UTC timestamp when the conversion completed, or null.
     */
    completed_at: string | null;

    /**
     * ISO 8601 UTC timestamp when the conversion was created.
     */
    created_at: string;

    /**
     * Failure details when status is failed, otherwise null.
     */
    failure: Payload.Failure | null;

    /**
     * Key-value pairs stored with the conversion.
     */
    metadata: { [key: string]: string };

    /**
     * ID of the associated quote, or null.
     */
    quote_id: string | null;

    /**
     * ID of the source account, or null.
     */
    source_account_id: string | null;

    /**
     * Source amount as a string decimal.
     */
    source_amount: string;

    /**
     * Source currency code.
     */
    source_currency: 'EUR' | 'GBP' | 'USD' | 'USDC';

    /**
     * Current status of the conversion.
     */
    status: 'pending' | 'completed' | 'failed';

    /**
     * ID of the target account, or null.
     */
    target_account_id: string | null;

    /**
     * Target currency code.
     */
    target_currency: 'EUR' | 'GBP' | 'USD' | 'USDC';

    /**
     * Resource type discriminator.
     */
    type: 'conversion';

    /**
     * ISO 8601 UTC timestamp when the conversion was last updated.
     */
    updated_at: string;
  }

  export namespace Payload {
    /**
     * Failure details when status is failed, otherwise null.
     */
    export interface Failure {
      /**
       * Human-readable description of the failure.
       */
      message: string;
    }
  }
}

export interface ConversionCompletedWebhookEvent {
  /**
   * Unique identifier for the event. Stable across retries.
   */
  id: string;

  /**
   * API version the payload was rendered at. Stable across retries and redeliveries.
   */
  api_version: string;

  /**
   * ISO 8601 UTC timestamp when the event was created.
   */
  date: string;

  /**
   * Full resource snapshot at the time of the event.
   */
  payload: ConversionCompletedWebhookEvent.Payload;

  /**
   * Event type in resource.action format.
   */
  type: 'conversion.completed';
}

export namespace ConversionCompletedWebhookEvent {
  /**
   * Full resource snapshot at the time of the event.
   */
  export interface Payload {
    /**
     * Unique identifier of the conversion.
     */
    id: string;

    /**
     * ISO 8601 UTC timestamp when the conversion completed, or null.
     */
    completed_at: string | null;

    /**
     * ISO 8601 UTC timestamp when the conversion was created.
     */
    created_at: string;

    /**
     * Failure details when status is failed, otherwise null.
     */
    failure: Payload.Failure | null;

    /**
     * Key-value pairs stored with the conversion.
     */
    metadata: { [key: string]: string };

    /**
     * ID of the associated quote, or null.
     */
    quote_id: string | null;

    /**
     * ID of the source account, or null.
     */
    source_account_id: string | null;

    /**
     * Source amount as a string decimal.
     */
    source_amount: string;

    /**
     * Source currency code.
     */
    source_currency: 'EUR' | 'GBP' | 'USD' | 'USDC';

    /**
     * Current status of the conversion.
     */
    status: 'pending' | 'completed' | 'failed';

    /**
     * ID of the target account, or null.
     */
    target_account_id: string | null;

    /**
     * Target currency code.
     */
    target_currency: 'EUR' | 'GBP' | 'USD' | 'USDC';

    /**
     * Resource type discriminator.
     */
    type: 'conversion';

    /**
     * ISO 8601 UTC timestamp when the conversion was last updated.
     */
    updated_at: string;
  }

  export namespace Payload {
    /**
     * Failure details when status is failed, otherwise null.
     */
    export interface Failure {
      /**
       * Human-readable description of the failure.
       */
      message: string;
    }
  }
}

export interface ConversionFailedWebhookEvent {
  /**
   * Unique identifier for the event. Stable across retries.
   */
  id: string;

  /**
   * API version the payload was rendered at. Stable across retries and redeliveries.
   */
  api_version: string;

  /**
   * ISO 8601 UTC timestamp when the event was created.
   */
  date: string;

  /**
   * Full resource snapshot at the time of the event.
   */
  payload: ConversionFailedWebhookEvent.Payload;

  /**
   * Event type in resource.action format.
   */
  type: 'conversion.failed';
}

export namespace ConversionFailedWebhookEvent {
  /**
   * Full resource snapshot at the time of the event.
   */
  export interface Payload {
    /**
     * Unique identifier of the conversion.
     */
    id: string;

    /**
     * ISO 8601 UTC timestamp when the conversion completed, or null.
     */
    completed_at: string | null;

    /**
     * ISO 8601 UTC timestamp when the conversion was created.
     */
    created_at: string;

    /**
     * Failure details when status is failed, otherwise null.
     */
    failure: Payload.Failure | null;

    /**
     * Key-value pairs stored with the conversion.
     */
    metadata: { [key: string]: string };

    /**
     * ID of the associated quote, or null.
     */
    quote_id: string | null;

    /**
     * ID of the source account, or null.
     */
    source_account_id: string | null;

    /**
     * Source amount as a string decimal.
     */
    source_amount: string;

    /**
     * Source currency code.
     */
    source_currency: 'EUR' | 'GBP' | 'USD' | 'USDC';

    /**
     * Current status of the conversion.
     */
    status: 'pending' | 'completed' | 'failed';

    /**
     * ID of the target account, or null.
     */
    target_account_id: string | null;

    /**
     * Target currency code.
     */
    target_currency: 'EUR' | 'GBP' | 'USD' | 'USDC';

    /**
     * Resource type discriminator.
     */
    type: 'conversion';

    /**
     * ISO 8601 UTC timestamp when the conversion was last updated.
     */
    updated_at: string;
  }

  export namespace Payload {
    /**
     * Failure details when status is failed, otherwise null.
     */
    export interface Failure {
      /**
       * Human-readable description of the failure.
       */
      message: string;
    }
  }
}

export interface PingTestWebhookEvent {
  /**
   * Unique identifier for the event. Stable across retries.
   */
  id: string;

  /**
   * API version the payload was rendered at. Stable across retries and redeliveries.
   */
  api_version: string;

  /**
   * ISO 8601 UTC timestamp when the event was created.
   */
  date: string;

  /**
   * Full resource snapshot at the time of the event.
   */
  payload: PingTestWebhookEvent.Payload;

  /**
   * Event type in resource.action format.
   */
  type: 'ping.test';
}

export namespace PingTestWebhookEvent {
  /**
   * Full resource snapshot at the time of the event.
   */
  export interface Payload {
    /**
     * Unique identifier of the ping event.
     */
    id: string;

    /**
     * ISO 8601 UTC timestamp when the ping was dispatched.
     */
    dispatched_at: string;

    /**
     * Identifier of the merchant the ping was dispatched for.
     */
    merchant_id: string;

    /**
     * Human-readable notice that this event was generated by the test endpoint and
     * does not reflect any real business activity.
     */
    message: string;

    /**
     * Resource type discriminator.
     */
    type: 'ping';
  }
}

export type UnwrapWebhookEvent =
  | PayoutCreatedWebhookEvent
  | PayoutInitiatedWebhookEvent
  | PayoutPaidWebhookEvent
  | PayoutFailedWebhookEvent
  | ReturnInitiatedWebhookEvent
  | ReturnPaidWebhookEvent
  | ReturnFailedWebhookEvent
  | ReturnReturnedWebhookEvent
  | DepositReceivedWebhookEvent
  | ConversionCreatedWebhookEvent
  | ConversionCompletedWebhookEvent
  | ConversionFailedWebhookEvent
  | PingTestWebhookEvent;

export declare namespace Webhooks {
  export {
    type PayoutCreatedWebhookEvent as PayoutCreatedWebhookEvent,
    type PayoutInitiatedWebhookEvent as PayoutInitiatedWebhookEvent,
    type PayoutPaidWebhookEvent as PayoutPaidWebhookEvent,
    type PayoutFailedWebhookEvent as PayoutFailedWebhookEvent,
    type ReturnInitiatedWebhookEvent as ReturnInitiatedWebhookEvent,
    type ReturnPaidWebhookEvent as ReturnPaidWebhookEvent,
    type ReturnFailedWebhookEvent as ReturnFailedWebhookEvent,
    type ReturnReturnedWebhookEvent as ReturnReturnedWebhookEvent,
    type DepositReceivedWebhookEvent as DepositReceivedWebhookEvent,
    type ConversionCreatedWebhookEvent as ConversionCreatedWebhookEvent,
    type ConversionCompletedWebhookEvent as ConversionCompletedWebhookEvent,
    type ConversionFailedWebhookEvent as ConversionFailedWebhookEvent,
    type PingTestWebhookEvent as PingTestWebhookEvent,
    type UnwrapWebhookEvent as UnwrapWebhookEvent,
  };
}
