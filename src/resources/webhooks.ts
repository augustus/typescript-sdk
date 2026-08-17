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
      blockchain:
        | 'bitcoin'
        | 'ethereum'
        | 'solana'
        | 'polygon'
        | 'bitcoin_testnet4'
        | 'ethereum_sepolia'
        | 'solana_devnet'
        | 'polygon_amoy';

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
      blockchain:
        | 'bitcoin'
        | 'ethereum'
        | 'solana'
        | 'polygon'
        | 'bitcoin_testnet4'
        | 'ethereum_sepolia'
        | 'solana_devnet'
        | 'polygon_amoy';

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
      blockchain:
        | 'bitcoin'
        | 'ethereum'
        | 'solana'
        | 'polygon'
        | 'bitcoin_testnet4'
        | 'ethereum_sepolia'
        | 'solana_devnet'
        | 'polygon_amoy';

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
      blockchain:
        | 'bitcoin'
        | 'ethereum'
        | 'solana'
        | 'polygon'
        | 'bitcoin_testnet4'
        | 'ethereum_sepolia'
        | 'solana_devnet'
        | 'polygon_amoy';

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
      | 'btc'
      | 'btc_testnet4'
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
      blockchain:
        | 'bitcoin'
        | 'ethereum'
        | 'solana'
        | 'polygon'
        | 'bitcoin_testnet4'
        | 'ethereum_sepolia'
        | 'solana_devnet'
        | 'polygon_amoy';

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

export interface AccountHolderActiveWebhookEvent {
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
  payload: AccountHolderActiveWebhookEvent.Payload;

  /**
   * Event type in resource.action format.
   */
  type: 'account_holder.active';
}

export namespace AccountHolderActiveWebhookEvent {
  /**
   * Full resource snapshot at the time of the event.
   */
  export interface Payload {
    /**
     * Unique identifier of the account holder.
     */
    id: string;

    /**
     * Beneficiary details used to create this account holder.
     */
    beneficiary_data:
      | Payload.UsBeneficiaryDataResponse
      | Payload.NonUsBeneficiaryDataResponse
      | Payload.BusinessBeneficiaryDataResponse;

    /**
     * ISO 8601 UTC timestamp when the account holder was created.
     */
    created_at: string;

    /**
     * Type of the account holder.
     */
    holder_type: 'natural_person' | 'business';

    /**
     * Current account holder status.
     */
    status: 'pending' | 'active' | 'closed';

    /**
     * Resource type discriminator.
     */
    type: 'account_holder';
  }

  export namespace Payload {
    export interface UsBeneficiaryDataResponse {
      /**
       * ISO 3166-1 alpha-2 country code of citizenship.
       */
      country_of_citizenship: 'US';

      /**
       * Date of birth as an ISO 8601 calendar date (YYYY-MM-DD).
       */
      date_of_birth: string;

      /**
       * Government-issued identification with type: "ssn" (Social Security Number,
       * format ###-##-####) or "itin" (Individual Taxpayer ID, format 9##-##-####).
       */
      identification:
        | UsBeneficiaryDataResponse.SsnIdentification
        | UsBeneficiaryDataResponse.ItinIdentification;

      /**
       * Full legal name of the account holder.
       */
      legal_name: string;

      /**
       * Residential address of the account holder.
       */
      residential_address:
        | UsBeneficiaryDataResponse.UsResidentialAddressResponse
        | UsBeneficiaryDataResponse.NonUsResidentialAddressResponse;
    }

    export namespace UsBeneficiaryDataResponse {
      export interface SsnIdentification {
        type: 'ssn';

        value: string;
      }

      export interface ItinIdentification {
        type: 'itin';

        value: string;
      }

      export interface UsResidentialAddressResponse {
        /**
         * City name.
         */
        city: string;

        /**
         * ISO 3166-1 alpha-2 country code.
         */
        country: 'US';

        /**
         * Postal or ZIP code.
         */
        postal_code: string;

        /**
         * Two-letter state code.
         */
        state: string;

        /**
         * Primary street address.
         */
        street_line_1: string;

        /**
         * Secondary street address (apartment, suite, etc.).
         */
        street_line_2: string | null;
      }

      export interface NonUsResidentialAddressResponse {
        /**
         * City name.
         */
        city: string;

        /**
         * ISO 3166-1 alpha-2 country code.
         */
        country:
          | 'AF'
          | 'AL'
          | 'DZ'
          | 'AS'
          | 'AD'
          | 'AO'
          | 'AI'
          | 'AQ'
          | 'AG'
          | 'AR'
          | 'AM'
          | 'AW'
          | 'AU'
          | 'AT'
          | 'AZ'
          | 'BS'
          | 'BH'
          | 'BD'
          | 'BB'
          | 'BY'
          | 'BE'
          | 'BZ'
          | 'BJ'
          | 'BM'
          | 'BT'
          | 'BO'
          | 'BA'
          | 'BW'
          | 'BV'
          | 'BR'
          | 'IO'
          | 'BN'
          | 'BG'
          | 'BF'
          | 'BI'
          | 'KH'
          | 'CM'
          | 'CA'
          | 'CV'
          | 'KY'
          | 'CF'
          | 'TD'
          | 'CL'
          | 'CN'
          | 'CX'
          | 'CC'
          | 'CO'
          | 'KM'
          | 'CG'
          | 'CD'
          | 'CK'
          | 'CR'
          | 'CI'
          | 'HR'
          | 'CU'
          | 'CY'
          | 'CZ'
          | 'DK'
          | 'DJ'
          | 'DM'
          | 'DO'
          | 'EC'
          | 'EG'
          | 'SV'
          | 'GQ'
          | 'ER'
          | 'EE'
          | 'ET'
          | 'FK'
          | 'FO'
          | 'FJ'
          | 'FI'
          | 'FR'
          | 'GF'
          | 'PF'
          | 'TF'
          | 'GA'
          | 'GM'
          | 'GE'
          | 'DE'
          | 'GH'
          | 'GI'
          | 'GR'
          | 'GL'
          | 'GD'
          | 'GP'
          | 'GU'
          | 'GT'
          | 'GN'
          | 'GW'
          | 'GY'
          | 'HT'
          | 'HM'
          | 'VA'
          | 'HN'
          | 'HK'
          | 'HU'
          | 'IS'
          | 'IN'
          | 'ID'
          | 'IR'
          | 'IQ'
          | 'IE'
          | 'IL'
          | 'IT'
          | 'JM'
          | 'JP'
          | 'JO'
          | 'KZ'
          | 'KE'
          | 'KI'
          | 'KP'
          | 'KR'
          | 'KW'
          | 'KG'
          | 'LA'
          | 'LV'
          | 'LB'
          | 'LS'
          | 'LR'
          | 'LY'
          | 'LI'
          | 'LT'
          | 'LU'
          | 'MO'
          | 'MG'
          | 'MW'
          | 'MY'
          | 'MV'
          | 'ML'
          | 'MT'
          | 'MH'
          | 'MQ'
          | 'MR'
          | 'MU'
          | 'YT'
          | 'MX'
          | 'FM'
          | 'MD'
          | 'MC'
          | 'MN'
          | 'MS'
          | 'MA'
          | 'MZ'
          | 'MM'
          | 'NA'
          | 'NR'
          | 'NP'
          | 'NL'
          | 'NC'
          | 'NZ'
          | 'NI'
          | 'NE'
          | 'NG'
          | 'NU'
          | 'NF'
          | 'MP'
          | 'MK'
          | 'NO'
          | 'OM'
          | 'PK'
          | 'PW'
          | 'PS'
          | 'PA'
          | 'PG'
          | 'PY'
          | 'PE'
          | 'PH'
          | 'PN'
          | 'PL'
          | 'PT'
          | 'PR'
          | 'QA'
          | 'RE'
          | 'RO'
          | 'RU'
          | 'RW'
          | 'SH'
          | 'KN'
          | 'LC'
          | 'PM'
          | 'VC'
          | 'WS'
          | 'SM'
          | 'ST'
          | 'SA'
          | 'SN'
          | 'SC'
          | 'SL'
          | 'SG'
          | 'SK'
          | 'SI'
          | 'SB'
          | 'SO'
          | 'ZA'
          | 'GS'
          | 'ES'
          | 'LK'
          | 'SD'
          | 'SR'
          | 'SJ'
          | 'SZ'
          | 'SE'
          | 'CH'
          | 'SY'
          | 'TW'
          | 'TJ'
          | 'TZ'
          | 'TH'
          | 'TL'
          | 'TG'
          | 'TK'
          | 'TO'
          | 'TT'
          | 'TN'
          | 'TR'
          | 'TM'
          | 'TC'
          | 'TV'
          | 'UG'
          | 'UA'
          | 'AE'
          | 'GB'
          | 'UM'
          | 'UY'
          | 'UZ'
          | 'VU'
          | 'VE'
          | 'VN'
          | 'VG'
          | 'VI'
          | 'WF'
          | 'EH'
          | 'YE'
          | 'ZM'
          | 'ZW'
          | 'AX'
          | 'BQ'
          | 'CW'
          | 'GG'
          | 'IM'
          | 'JE'
          | 'ME'
          | 'BL'
          | 'MF'
          | 'RS'
          | 'SX'
          | 'SS'
          | 'XK';

        /**
         * Postal or ZIP code.
         */
        postal_code: string;

        /**
         * Primary street address.
         */
        street_line_1: string;

        /**
         * Secondary street address (apartment, suite, etc.).
         */
        street_line_2: string | null;
      }
    }

    export interface NonUsBeneficiaryDataResponse {
      /**
       * ISO 3166-1 alpha-2 country code of citizenship.
       */
      country_of_citizenship:
        | 'AF'
        | 'AL'
        | 'DZ'
        | 'AS'
        | 'AD'
        | 'AO'
        | 'AI'
        | 'AQ'
        | 'AG'
        | 'AR'
        | 'AM'
        | 'AW'
        | 'AU'
        | 'AT'
        | 'AZ'
        | 'BS'
        | 'BH'
        | 'BD'
        | 'BB'
        | 'BY'
        | 'BE'
        | 'BZ'
        | 'BJ'
        | 'BM'
        | 'BT'
        | 'BO'
        | 'BA'
        | 'BW'
        | 'BV'
        | 'BR'
        | 'IO'
        | 'BN'
        | 'BG'
        | 'BF'
        | 'BI'
        | 'KH'
        | 'CM'
        | 'CA'
        | 'CV'
        | 'KY'
        | 'CF'
        | 'TD'
        | 'CL'
        | 'CN'
        | 'CX'
        | 'CC'
        | 'CO'
        | 'KM'
        | 'CG'
        | 'CD'
        | 'CK'
        | 'CR'
        | 'CI'
        | 'HR'
        | 'CU'
        | 'CY'
        | 'CZ'
        | 'DK'
        | 'DJ'
        | 'DM'
        | 'DO'
        | 'EC'
        | 'EG'
        | 'SV'
        | 'GQ'
        | 'ER'
        | 'EE'
        | 'ET'
        | 'FK'
        | 'FO'
        | 'FJ'
        | 'FI'
        | 'FR'
        | 'GF'
        | 'PF'
        | 'TF'
        | 'GA'
        | 'GM'
        | 'GE'
        | 'DE'
        | 'GH'
        | 'GI'
        | 'GR'
        | 'GL'
        | 'GD'
        | 'GP'
        | 'GU'
        | 'GT'
        | 'GN'
        | 'GW'
        | 'GY'
        | 'HT'
        | 'HM'
        | 'VA'
        | 'HN'
        | 'HK'
        | 'HU'
        | 'IS'
        | 'IN'
        | 'ID'
        | 'IR'
        | 'IQ'
        | 'IE'
        | 'IL'
        | 'IT'
        | 'JM'
        | 'JP'
        | 'JO'
        | 'KZ'
        | 'KE'
        | 'KI'
        | 'KP'
        | 'KR'
        | 'KW'
        | 'KG'
        | 'LA'
        | 'LV'
        | 'LB'
        | 'LS'
        | 'LR'
        | 'LY'
        | 'LI'
        | 'LT'
        | 'LU'
        | 'MO'
        | 'MG'
        | 'MW'
        | 'MY'
        | 'MV'
        | 'ML'
        | 'MT'
        | 'MH'
        | 'MQ'
        | 'MR'
        | 'MU'
        | 'YT'
        | 'MX'
        | 'FM'
        | 'MD'
        | 'MC'
        | 'MN'
        | 'MS'
        | 'MA'
        | 'MZ'
        | 'MM'
        | 'NA'
        | 'NR'
        | 'NP'
        | 'NL'
        | 'NC'
        | 'NZ'
        | 'NI'
        | 'NE'
        | 'NG'
        | 'NU'
        | 'NF'
        | 'MP'
        | 'MK'
        | 'NO'
        | 'OM'
        | 'PK'
        | 'PW'
        | 'PS'
        | 'PA'
        | 'PG'
        | 'PY'
        | 'PE'
        | 'PH'
        | 'PN'
        | 'PL'
        | 'PT'
        | 'PR'
        | 'QA'
        | 'RE'
        | 'RO'
        | 'RU'
        | 'RW'
        | 'SH'
        | 'KN'
        | 'LC'
        | 'PM'
        | 'VC'
        | 'WS'
        | 'SM'
        | 'ST'
        | 'SA'
        | 'SN'
        | 'SC'
        | 'SL'
        | 'SG'
        | 'SK'
        | 'SI'
        | 'SB'
        | 'SO'
        | 'ZA'
        | 'GS'
        | 'ES'
        | 'LK'
        | 'SD'
        | 'SR'
        | 'SJ'
        | 'SZ'
        | 'SE'
        | 'CH'
        | 'SY'
        | 'TW'
        | 'TJ'
        | 'TZ'
        | 'TH'
        | 'TL'
        | 'TG'
        | 'TK'
        | 'TO'
        | 'TT'
        | 'TN'
        | 'TR'
        | 'TM'
        | 'TC'
        | 'TV'
        | 'UG'
        | 'UA'
        | 'AE'
        | 'GB'
        | 'UM'
        | 'UY'
        | 'UZ'
        | 'VU'
        | 'VE'
        | 'VN'
        | 'VG'
        | 'VI'
        | 'WF'
        | 'EH'
        | 'YE'
        | 'ZM'
        | 'ZW'
        | 'AX'
        | 'BQ'
        | 'CW'
        | 'GG'
        | 'IM'
        | 'JE'
        | 'ME'
        | 'BL'
        | 'MF'
        | 'RS'
        | 'SX'
        | 'SS'
        | 'XK';

      /**
       * Date of birth as an ISO 8601 calendar date (YYYY-MM-DD).
       */
      date_of_birth: string;

      /**
       * Government-issued identification with type: "id" (generic government-issued ID).
       */
      identification: NonUsBeneficiaryDataResponse.Identification;

      /**
       * Full legal name of the account holder.
       */
      legal_name: string;

      /**
       * Residential address of the account holder.
       */
      residential_address:
        | NonUsBeneficiaryDataResponse.UsResidentialAddressResponse
        | NonUsBeneficiaryDataResponse.NonUsResidentialAddressResponse;
    }

    export namespace NonUsBeneficiaryDataResponse {
      /**
       * Government-issued identification with type: "id" (generic government-issued ID).
       */
      export interface Identification {
        type: 'id';

        value: string;
      }

      export interface UsResidentialAddressResponse {
        /**
         * City name.
         */
        city: string;

        /**
         * ISO 3166-1 alpha-2 country code.
         */
        country: 'US';

        /**
         * Postal or ZIP code.
         */
        postal_code: string;

        /**
         * Two-letter state code.
         */
        state: string;

        /**
         * Primary street address.
         */
        street_line_1: string;

        /**
         * Secondary street address (apartment, suite, etc.).
         */
        street_line_2: string | null;
      }

      export interface NonUsResidentialAddressResponse {
        /**
         * City name.
         */
        city: string;

        /**
         * ISO 3166-1 alpha-2 country code.
         */
        country:
          | 'AF'
          | 'AL'
          | 'DZ'
          | 'AS'
          | 'AD'
          | 'AO'
          | 'AI'
          | 'AQ'
          | 'AG'
          | 'AR'
          | 'AM'
          | 'AW'
          | 'AU'
          | 'AT'
          | 'AZ'
          | 'BS'
          | 'BH'
          | 'BD'
          | 'BB'
          | 'BY'
          | 'BE'
          | 'BZ'
          | 'BJ'
          | 'BM'
          | 'BT'
          | 'BO'
          | 'BA'
          | 'BW'
          | 'BV'
          | 'BR'
          | 'IO'
          | 'BN'
          | 'BG'
          | 'BF'
          | 'BI'
          | 'KH'
          | 'CM'
          | 'CA'
          | 'CV'
          | 'KY'
          | 'CF'
          | 'TD'
          | 'CL'
          | 'CN'
          | 'CX'
          | 'CC'
          | 'CO'
          | 'KM'
          | 'CG'
          | 'CD'
          | 'CK'
          | 'CR'
          | 'CI'
          | 'HR'
          | 'CU'
          | 'CY'
          | 'CZ'
          | 'DK'
          | 'DJ'
          | 'DM'
          | 'DO'
          | 'EC'
          | 'EG'
          | 'SV'
          | 'GQ'
          | 'ER'
          | 'EE'
          | 'ET'
          | 'FK'
          | 'FO'
          | 'FJ'
          | 'FI'
          | 'FR'
          | 'GF'
          | 'PF'
          | 'TF'
          | 'GA'
          | 'GM'
          | 'GE'
          | 'DE'
          | 'GH'
          | 'GI'
          | 'GR'
          | 'GL'
          | 'GD'
          | 'GP'
          | 'GU'
          | 'GT'
          | 'GN'
          | 'GW'
          | 'GY'
          | 'HT'
          | 'HM'
          | 'VA'
          | 'HN'
          | 'HK'
          | 'HU'
          | 'IS'
          | 'IN'
          | 'ID'
          | 'IR'
          | 'IQ'
          | 'IE'
          | 'IL'
          | 'IT'
          | 'JM'
          | 'JP'
          | 'JO'
          | 'KZ'
          | 'KE'
          | 'KI'
          | 'KP'
          | 'KR'
          | 'KW'
          | 'KG'
          | 'LA'
          | 'LV'
          | 'LB'
          | 'LS'
          | 'LR'
          | 'LY'
          | 'LI'
          | 'LT'
          | 'LU'
          | 'MO'
          | 'MG'
          | 'MW'
          | 'MY'
          | 'MV'
          | 'ML'
          | 'MT'
          | 'MH'
          | 'MQ'
          | 'MR'
          | 'MU'
          | 'YT'
          | 'MX'
          | 'FM'
          | 'MD'
          | 'MC'
          | 'MN'
          | 'MS'
          | 'MA'
          | 'MZ'
          | 'MM'
          | 'NA'
          | 'NR'
          | 'NP'
          | 'NL'
          | 'NC'
          | 'NZ'
          | 'NI'
          | 'NE'
          | 'NG'
          | 'NU'
          | 'NF'
          | 'MP'
          | 'MK'
          | 'NO'
          | 'OM'
          | 'PK'
          | 'PW'
          | 'PS'
          | 'PA'
          | 'PG'
          | 'PY'
          | 'PE'
          | 'PH'
          | 'PN'
          | 'PL'
          | 'PT'
          | 'PR'
          | 'QA'
          | 'RE'
          | 'RO'
          | 'RU'
          | 'RW'
          | 'SH'
          | 'KN'
          | 'LC'
          | 'PM'
          | 'VC'
          | 'WS'
          | 'SM'
          | 'ST'
          | 'SA'
          | 'SN'
          | 'SC'
          | 'SL'
          | 'SG'
          | 'SK'
          | 'SI'
          | 'SB'
          | 'SO'
          | 'ZA'
          | 'GS'
          | 'ES'
          | 'LK'
          | 'SD'
          | 'SR'
          | 'SJ'
          | 'SZ'
          | 'SE'
          | 'CH'
          | 'SY'
          | 'TW'
          | 'TJ'
          | 'TZ'
          | 'TH'
          | 'TL'
          | 'TG'
          | 'TK'
          | 'TO'
          | 'TT'
          | 'TN'
          | 'TR'
          | 'TM'
          | 'TC'
          | 'TV'
          | 'UG'
          | 'UA'
          | 'AE'
          | 'GB'
          | 'UM'
          | 'UY'
          | 'UZ'
          | 'VU'
          | 'VE'
          | 'VN'
          | 'VG'
          | 'VI'
          | 'WF'
          | 'EH'
          | 'YE'
          | 'ZM'
          | 'ZW'
          | 'AX'
          | 'BQ'
          | 'CW'
          | 'GG'
          | 'IM'
          | 'JE'
          | 'ME'
          | 'BL'
          | 'MF'
          | 'RS'
          | 'SX'
          | 'SS'
          | 'XK';

        /**
         * Postal or ZIP code.
         */
        postal_code: string;

        /**
         * Primary street address.
         */
        street_line_1: string;

        /**
         * Secondary street address (apartment, suite, etc.).
         */
        street_line_2: string | null;
      }
    }

    export interface BusinessBeneficiaryDataResponse {
      /**
       * Beneficial owners of the business. At least one required.
       */
      beneficial_owners: Array<
        | BusinessBeneficiaryDataResponse.UsBeneficiaryDataResponse
        | BusinessBeneficiaryDataResponse.NonUsBeneficiaryDataResponse
      >;

      /**
       * Individual with primary responsibility for controlling, managing, or directing
       * the business.
       */
      control_person:
        | BusinessBeneficiaryDataResponse.UnionMember0
        | BusinessBeneficiaryDataResponse.UnionMember1;

      /**
       * ISO 3166-1 alpha-2 country code where the business is incorporated.
       */
      country_of_incorporation:
        | 'AF'
        | 'AL'
        | 'DZ'
        | 'AS'
        | 'AD'
        | 'AO'
        | 'AI'
        | 'AQ'
        | 'AG'
        | 'AR'
        | 'AM'
        | 'AW'
        | 'AU'
        | 'AT'
        | 'AZ'
        | 'BS'
        | 'BH'
        | 'BD'
        | 'BB'
        | 'BY'
        | 'BE'
        | 'BZ'
        | 'BJ'
        | 'BM'
        | 'BT'
        | 'BO'
        | 'BA'
        | 'BW'
        | 'BV'
        | 'BR'
        | 'IO'
        | 'BN'
        | 'BG'
        | 'BF'
        | 'BI'
        | 'KH'
        | 'CM'
        | 'CA'
        | 'CV'
        | 'KY'
        | 'CF'
        | 'TD'
        | 'CL'
        | 'CN'
        | 'CX'
        | 'CC'
        | 'CO'
        | 'KM'
        | 'CG'
        | 'CD'
        | 'CK'
        | 'CR'
        | 'CI'
        | 'HR'
        | 'CU'
        | 'CY'
        | 'CZ'
        | 'DK'
        | 'DJ'
        | 'DM'
        | 'DO'
        | 'EC'
        | 'EG'
        | 'SV'
        | 'GQ'
        | 'ER'
        | 'EE'
        | 'ET'
        | 'FK'
        | 'FO'
        | 'FJ'
        | 'FI'
        | 'FR'
        | 'GF'
        | 'PF'
        | 'TF'
        | 'GA'
        | 'GM'
        | 'GE'
        | 'DE'
        | 'GH'
        | 'GI'
        | 'GR'
        | 'GL'
        | 'GD'
        | 'GP'
        | 'GU'
        | 'GT'
        | 'GN'
        | 'GW'
        | 'GY'
        | 'HT'
        | 'HM'
        | 'VA'
        | 'HN'
        | 'HK'
        | 'HU'
        | 'IS'
        | 'IN'
        | 'ID'
        | 'IR'
        | 'IQ'
        | 'IE'
        | 'IL'
        | 'IT'
        | 'JM'
        | 'JP'
        | 'JO'
        | 'KZ'
        | 'KE'
        | 'KI'
        | 'KP'
        | 'KR'
        | 'KW'
        | 'KG'
        | 'LA'
        | 'LV'
        | 'LB'
        | 'LS'
        | 'LR'
        | 'LY'
        | 'LI'
        | 'LT'
        | 'LU'
        | 'MO'
        | 'MG'
        | 'MW'
        | 'MY'
        | 'MV'
        | 'ML'
        | 'MT'
        | 'MH'
        | 'MQ'
        | 'MR'
        | 'MU'
        | 'YT'
        | 'MX'
        | 'FM'
        | 'MD'
        | 'MC'
        | 'MN'
        | 'MS'
        | 'MA'
        | 'MZ'
        | 'MM'
        | 'NA'
        | 'NR'
        | 'NP'
        | 'NL'
        | 'NC'
        | 'NZ'
        | 'NI'
        | 'NE'
        | 'NG'
        | 'NU'
        | 'NF'
        | 'MP'
        | 'MK'
        | 'NO'
        | 'OM'
        | 'PK'
        | 'PW'
        | 'PS'
        | 'PA'
        | 'PG'
        | 'PY'
        | 'PE'
        | 'PH'
        | 'PN'
        | 'PL'
        | 'PT'
        | 'PR'
        | 'QA'
        | 'RE'
        | 'RO'
        | 'RU'
        | 'RW'
        | 'SH'
        | 'KN'
        | 'LC'
        | 'PM'
        | 'VC'
        | 'WS'
        | 'SM'
        | 'ST'
        | 'SA'
        | 'SN'
        | 'SC'
        | 'SL'
        | 'SG'
        | 'SK'
        | 'SI'
        | 'SB'
        | 'SO'
        | 'ZA'
        | 'GS'
        | 'ES'
        | 'LK'
        | 'SD'
        | 'SR'
        | 'SJ'
        | 'SZ'
        | 'SE'
        | 'CH'
        | 'SY'
        | 'TW'
        | 'TJ'
        | 'TZ'
        | 'TH'
        | 'TL'
        | 'TG'
        | 'TK'
        | 'TO'
        | 'TT'
        | 'TN'
        | 'TR'
        | 'TM'
        | 'TC'
        | 'TV'
        | 'UG'
        | 'UA'
        | 'AE'
        | 'GB'
        | 'US'
        | 'UM'
        | 'UY'
        | 'UZ'
        | 'VU'
        | 'VE'
        | 'VN'
        | 'VG'
        | 'VI'
        | 'WF'
        | 'EH'
        | 'YE'
        | 'ZM'
        | 'ZW'
        | 'AX'
        | 'BQ'
        | 'CW'
        | 'GG'
        | 'IM'
        | 'JE'
        | 'ME'
        | 'BL'
        | 'MF'
        | 'RS'
        | 'SX'
        | 'SS'
        | 'XK';

      /**
       * Trade name the business operates under, if different from the legal name.
       */
      doing_business_as: string | null;

      /**
       * Full legal name of the business.
       */
      legal_business_name: string;

      /**
       * Physical operating address of the business.
       */
      physical_address:
        | BusinessBeneficiaryDataResponse.UsResidentialAddressResponse
        | BusinessBeneficiaryDataResponse.NonUsResidentialAddressResponse;

      /**
       * Registered legal address of the business.
       */
      registered_address:
        | BusinessBeneficiaryDataResponse.UsResidentialAddressResponse
        | BusinessBeneficiaryDataResponse.NonUsResidentialAddressResponse;

      /**
       * Business registration number: type "ein" (Employer Identification Number, format
       * ##-#######) or "ssn" (Social Security Number, format ###-##-####).
       */
      registration_number:
        | BusinessBeneficiaryDataResponse.EinIdentification
        | BusinessBeneficiaryDataResponse.SsnIdentification;

      /**
       * State or subdivision where the business is incorporated.
       */
      state_of_incorporation: string;

      /**
       * Four-digit year the business was incorporated.
       */
      year_of_incorporation: number;
    }

    export namespace BusinessBeneficiaryDataResponse {
      export interface UsBeneficiaryDataResponse {
        /**
         * ISO 3166-1 alpha-2 country code of citizenship.
         */
        country_of_citizenship: 'US';

        /**
         * Date of birth as an ISO 8601 calendar date (YYYY-MM-DD).
         */
        date_of_birth: string;

        /**
         * Government-issued identification with type: "ssn" (Social Security Number,
         * format ###-##-####) or "itin" (Individual Taxpayer ID, format 9##-##-####).
         */
        identification:
          | UsBeneficiaryDataResponse.SsnIdentification
          | UsBeneficiaryDataResponse.ItinIdentification;

        /**
         * Full legal name of the account holder.
         */
        legal_name: string;

        /**
         * Residential address of the account holder.
         */
        residential_address:
          | UsBeneficiaryDataResponse.UsResidentialAddressResponse
          | UsBeneficiaryDataResponse.NonUsResidentialAddressResponse;
      }

      export namespace UsBeneficiaryDataResponse {
        export interface SsnIdentification {
          type: 'ssn';

          value: string;
        }

        export interface ItinIdentification {
          type: 'itin';

          value: string;
        }

        export interface UsResidentialAddressResponse {
          /**
           * City name.
           */
          city: string;

          /**
           * ISO 3166-1 alpha-2 country code.
           */
          country: 'US';

          /**
           * Postal or ZIP code.
           */
          postal_code: string;

          /**
           * Two-letter state code.
           */
          state: string;

          /**
           * Primary street address.
           */
          street_line_1: string;

          /**
           * Secondary street address (apartment, suite, etc.).
           */
          street_line_2: string | null;
        }

        export interface NonUsResidentialAddressResponse {
          /**
           * City name.
           */
          city: string;

          /**
           * ISO 3166-1 alpha-2 country code.
           */
          country:
            | 'AF'
            | 'AL'
            | 'DZ'
            | 'AS'
            | 'AD'
            | 'AO'
            | 'AI'
            | 'AQ'
            | 'AG'
            | 'AR'
            | 'AM'
            | 'AW'
            | 'AU'
            | 'AT'
            | 'AZ'
            | 'BS'
            | 'BH'
            | 'BD'
            | 'BB'
            | 'BY'
            | 'BE'
            | 'BZ'
            | 'BJ'
            | 'BM'
            | 'BT'
            | 'BO'
            | 'BA'
            | 'BW'
            | 'BV'
            | 'BR'
            | 'IO'
            | 'BN'
            | 'BG'
            | 'BF'
            | 'BI'
            | 'KH'
            | 'CM'
            | 'CA'
            | 'CV'
            | 'KY'
            | 'CF'
            | 'TD'
            | 'CL'
            | 'CN'
            | 'CX'
            | 'CC'
            | 'CO'
            | 'KM'
            | 'CG'
            | 'CD'
            | 'CK'
            | 'CR'
            | 'CI'
            | 'HR'
            | 'CU'
            | 'CY'
            | 'CZ'
            | 'DK'
            | 'DJ'
            | 'DM'
            | 'DO'
            | 'EC'
            | 'EG'
            | 'SV'
            | 'GQ'
            | 'ER'
            | 'EE'
            | 'ET'
            | 'FK'
            | 'FO'
            | 'FJ'
            | 'FI'
            | 'FR'
            | 'GF'
            | 'PF'
            | 'TF'
            | 'GA'
            | 'GM'
            | 'GE'
            | 'DE'
            | 'GH'
            | 'GI'
            | 'GR'
            | 'GL'
            | 'GD'
            | 'GP'
            | 'GU'
            | 'GT'
            | 'GN'
            | 'GW'
            | 'GY'
            | 'HT'
            | 'HM'
            | 'VA'
            | 'HN'
            | 'HK'
            | 'HU'
            | 'IS'
            | 'IN'
            | 'ID'
            | 'IR'
            | 'IQ'
            | 'IE'
            | 'IL'
            | 'IT'
            | 'JM'
            | 'JP'
            | 'JO'
            | 'KZ'
            | 'KE'
            | 'KI'
            | 'KP'
            | 'KR'
            | 'KW'
            | 'KG'
            | 'LA'
            | 'LV'
            | 'LB'
            | 'LS'
            | 'LR'
            | 'LY'
            | 'LI'
            | 'LT'
            | 'LU'
            | 'MO'
            | 'MG'
            | 'MW'
            | 'MY'
            | 'MV'
            | 'ML'
            | 'MT'
            | 'MH'
            | 'MQ'
            | 'MR'
            | 'MU'
            | 'YT'
            | 'MX'
            | 'FM'
            | 'MD'
            | 'MC'
            | 'MN'
            | 'MS'
            | 'MA'
            | 'MZ'
            | 'MM'
            | 'NA'
            | 'NR'
            | 'NP'
            | 'NL'
            | 'NC'
            | 'NZ'
            | 'NI'
            | 'NE'
            | 'NG'
            | 'NU'
            | 'NF'
            | 'MP'
            | 'MK'
            | 'NO'
            | 'OM'
            | 'PK'
            | 'PW'
            | 'PS'
            | 'PA'
            | 'PG'
            | 'PY'
            | 'PE'
            | 'PH'
            | 'PN'
            | 'PL'
            | 'PT'
            | 'PR'
            | 'QA'
            | 'RE'
            | 'RO'
            | 'RU'
            | 'RW'
            | 'SH'
            | 'KN'
            | 'LC'
            | 'PM'
            | 'VC'
            | 'WS'
            | 'SM'
            | 'ST'
            | 'SA'
            | 'SN'
            | 'SC'
            | 'SL'
            | 'SG'
            | 'SK'
            | 'SI'
            | 'SB'
            | 'SO'
            | 'ZA'
            | 'GS'
            | 'ES'
            | 'LK'
            | 'SD'
            | 'SR'
            | 'SJ'
            | 'SZ'
            | 'SE'
            | 'CH'
            | 'SY'
            | 'TW'
            | 'TJ'
            | 'TZ'
            | 'TH'
            | 'TL'
            | 'TG'
            | 'TK'
            | 'TO'
            | 'TT'
            | 'TN'
            | 'TR'
            | 'TM'
            | 'TC'
            | 'TV'
            | 'UG'
            | 'UA'
            | 'AE'
            | 'GB'
            | 'UM'
            | 'UY'
            | 'UZ'
            | 'VU'
            | 'VE'
            | 'VN'
            | 'VG'
            | 'VI'
            | 'WF'
            | 'EH'
            | 'YE'
            | 'ZM'
            | 'ZW'
            | 'AX'
            | 'BQ'
            | 'CW'
            | 'GG'
            | 'IM'
            | 'JE'
            | 'ME'
            | 'BL'
            | 'MF'
            | 'RS'
            | 'SX'
            | 'SS'
            | 'XK';

          /**
           * Postal or ZIP code.
           */
          postal_code: string;

          /**
           * Primary street address.
           */
          street_line_1: string;

          /**
           * Secondary street address (apartment, suite, etc.).
           */
          street_line_2: string | null;
        }
      }

      export interface NonUsBeneficiaryDataResponse {
        /**
         * ISO 3166-1 alpha-2 country code of citizenship.
         */
        country_of_citizenship:
          | 'AF'
          | 'AL'
          | 'DZ'
          | 'AS'
          | 'AD'
          | 'AO'
          | 'AI'
          | 'AQ'
          | 'AG'
          | 'AR'
          | 'AM'
          | 'AW'
          | 'AU'
          | 'AT'
          | 'AZ'
          | 'BS'
          | 'BH'
          | 'BD'
          | 'BB'
          | 'BY'
          | 'BE'
          | 'BZ'
          | 'BJ'
          | 'BM'
          | 'BT'
          | 'BO'
          | 'BA'
          | 'BW'
          | 'BV'
          | 'BR'
          | 'IO'
          | 'BN'
          | 'BG'
          | 'BF'
          | 'BI'
          | 'KH'
          | 'CM'
          | 'CA'
          | 'CV'
          | 'KY'
          | 'CF'
          | 'TD'
          | 'CL'
          | 'CN'
          | 'CX'
          | 'CC'
          | 'CO'
          | 'KM'
          | 'CG'
          | 'CD'
          | 'CK'
          | 'CR'
          | 'CI'
          | 'HR'
          | 'CU'
          | 'CY'
          | 'CZ'
          | 'DK'
          | 'DJ'
          | 'DM'
          | 'DO'
          | 'EC'
          | 'EG'
          | 'SV'
          | 'GQ'
          | 'ER'
          | 'EE'
          | 'ET'
          | 'FK'
          | 'FO'
          | 'FJ'
          | 'FI'
          | 'FR'
          | 'GF'
          | 'PF'
          | 'TF'
          | 'GA'
          | 'GM'
          | 'GE'
          | 'DE'
          | 'GH'
          | 'GI'
          | 'GR'
          | 'GL'
          | 'GD'
          | 'GP'
          | 'GU'
          | 'GT'
          | 'GN'
          | 'GW'
          | 'GY'
          | 'HT'
          | 'HM'
          | 'VA'
          | 'HN'
          | 'HK'
          | 'HU'
          | 'IS'
          | 'IN'
          | 'ID'
          | 'IR'
          | 'IQ'
          | 'IE'
          | 'IL'
          | 'IT'
          | 'JM'
          | 'JP'
          | 'JO'
          | 'KZ'
          | 'KE'
          | 'KI'
          | 'KP'
          | 'KR'
          | 'KW'
          | 'KG'
          | 'LA'
          | 'LV'
          | 'LB'
          | 'LS'
          | 'LR'
          | 'LY'
          | 'LI'
          | 'LT'
          | 'LU'
          | 'MO'
          | 'MG'
          | 'MW'
          | 'MY'
          | 'MV'
          | 'ML'
          | 'MT'
          | 'MH'
          | 'MQ'
          | 'MR'
          | 'MU'
          | 'YT'
          | 'MX'
          | 'FM'
          | 'MD'
          | 'MC'
          | 'MN'
          | 'MS'
          | 'MA'
          | 'MZ'
          | 'MM'
          | 'NA'
          | 'NR'
          | 'NP'
          | 'NL'
          | 'NC'
          | 'NZ'
          | 'NI'
          | 'NE'
          | 'NG'
          | 'NU'
          | 'NF'
          | 'MP'
          | 'MK'
          | 'NO'
          | 'OM'
          | 'PK'
          | 'PW'
          | 'PS'
          | 'PA'
          | 'PG'
          | 'PY'
          | 'PE'
          | 'PH'
          | 'PN'
          | 'PL'
          | 'PT'
          | 'PR'
          | 'QA'
          | 'RE'
          | 'RO'
          | 'RU'
          | 'RW'
          | 'SH'
          | 'KN'
          | 'LC'
          | 'PM'
          | 'VC'
          | 'WS'
          | 'SM'
          | 'ST'
          | 'SA'
          | 'SN'
          | 'SC'
          | 'SL'
          | 'SG'
          | 'SK'
          | 'SI'
          | 'SB'
          | 'SO'
          | 'ZA'
          | 'GS'
          | 'ES'
          | 'LK'
          | 'SD'
          | 'SR'
          | 'SJ'
          | 'SZ'
          | 'SE'
          | 'CH'
          | 'SY'
          | 'TW'
          | 'TJ'
          | 'TZ'
          | 'TH'
          | 'TL'
          | 'TG'
          | 'TK'
          | 'TO'
          | 'TT'
          | 'TN'
          | 'TR'
          | 'TM'
          | 'TC'
          | 'TV'
          | 'UG'
          | 'UA'
          | 'AE'
          | 'GB'
          | 'UM'
          | 'UY'
          | 'UZ'
          | 'VU'
          | 'VE'
          | 'VN'
          | 'VG'
          | 'VI'
          | 'WF'
          | 'EH'
          | 'YE'
          | 'ZM'
          | 'ZW'
          | 'AX'
          | 'BQ'
          | 'CW'
          | 'GG'
          | 'IM'
          | 'JE'
          | 'ME'
          | 'BL'
          | 'MF'
          | 'RS'
          | 'SX'
          | 'SS'
          | 'XK';

        /**
         * Date of birth as an ISO 8601 calendar date (YYYY-MM-DD).
         */
        date_of_birth: string;

        /**
         * Government-issued identification with type: "id" (generic government-issued ID).
         */
        identification: NonUsBeneficiaryDataResponse.Identification;

        /**
         * Full legal name of the account holder.
         */
        legal_name: string;

        /**
         * Residential address of the account holder.
         */
        residential_address:
          | NonUsBeneficiaryDataResponse.UsResidentialAddressResponse
          | NonUsBeneficiaryDataResponse.NonUsResidentialAddressResponse;
      }

      export namespace NonUsBeneficiaryDataResponse {
        /**
         * Government-issued identification with type: "id" (generic government-issued ID).
         */
        export interface Identification {
          type: 'id';

          value: string;
        }

        export interface UsResidentialAddressResponse {
          /**
           * City name.
           */
          city: string;

          /**
           * ISO 3166-1 alpha-2 country code.
           */
          country: 'US';

          /**
           * Postal or ZIP code.
           */
          postal_code: string;

          /**
           * Two-letter state code.
           */
          state: string;

          /**
           * Primary street address.
           */
          street_line_1: string;

          /**
           * Secondary street address (apartment, suite, etc.).
           */
          street_line_2: string | null;
        }

        export interface NonUsResidentialAddressResponse {
          /**
           * City name.
           */
          city: string;

          /**
           * ISO 3166-1 alpha-2 country code.
           */
          country:
            | 'AF'
            | 'AL'
            | 'DZ'
            | 'AS'
            | 'AD'
            | 'AO'
            | 'AI'
            | 'AQ'
            | 'AG'
            | 'AR'
            | 'AM'
            | 'AW'
            | 'AU'
            | 'AT'
            | 'AZ'
            | 'BS'
            | 'BH'
            | 'BD'
            | 'BB'
            | 'BY'
            | 'BE'
            | 'BZ'
            | 'BJ'
            | 'BM'
            | 'BT'
            | 'BO'
            | 'BA'
            | 'BW'
            | 'BV'
            | 'BR'
            | 'IO'
            | 'BN'
            | 'BG'
            | 'BF'
            | 'BI'
            | 'KH'
            | 'CM'
            | 'CA'
            | 'CV'
            | 'KY'
            | 'CF'
            | 'TD'
            | 'CL'
            | 'CN'
            | 'CX'
            | 'CC'
            | 'CO'
            | 'KM'
            | 'CG'
            | 'CD'
            | 'CK'
            | 'CR'
            | 'CI'
            | 'HR'
            | 'CU'
            | 'CY'
            | 'CZ'
            | 'DK'
            | 'DJ'
            | 'DM'
            | 'DO'
            | 'EC'
            | 'EG'
            | 'SV'
            | 'GQ'
            | 'ER'
            | 'EE'
            | 'ET'
            | 'FK'
            | 'FO'
            | 'FJ'
            | 'FI'
            | 'FR'
            | 'GF'
            | 'PF'
            | 'TF'
            | 'GA'
            | 'GM'
            | 'GE'
            | 'DE'
            | 'GH'
            | 'GI'
            | 'GR'
            | 'GL'
            | 'GD'
            | 'GP'
            | 'GU'
            | 'GT'
            | 'GN'
            | 'GW'
            | 'GY'
            | 'HT'
            | 'HM'
            | 'VA'
            | 'HN'
            | 'HK'
            | 'HU'
            | 'IS'
            | 'IN'
            | 'ID'
            | 'IR'
            | 'IQ'
            | 'IE'
            | 'IL'
            | 'IT'
            | 'JM'
            | 'JP'
            | 'JO'
            | 'KZ'
            | 'KE'
            | 'KI'
            | 'KP'
            | 'KR'
            | 'KW'
            | 'KG'
            | 'LA'
            | 'LV'
            | 'LB'
            | 'LS'
            | 'LR'
            | 'LY'
            | 'LI'
            | 'LT'
            | 'LU'
            | 'MO'
            | 'MG'
            | 'MW'
            | 'MY'
            | 'MV'
            | 'ML'
            | 'MT'
            | 'MH'
            | 'MQ'
            | 'MR'
            | 'MU'
            | 'YT'
            | 'MX'
            | 'FM'
            | 'MD'
            | 'MC'
            | 'MN'
            | 'MS'
            | 'MA'
            | 'MZ'
            | 'MM'
            | 'NA'
            | 'NR'
            | 'NP'
            | 'NL'
            | 'NC'
            | 'NZ'
            | 'NI'
            | 'NE'
            | 'NG'
            | 'NU'
            | 'NF'
            | 'MP'
            | 'MK'
            | 'NO'
            | 'OM'
            | 'PK'
            | 'PW'
            | 'PS'
            | 'PA'
            | 'PG'
            | 'PY'
            | 'PE'
            | 'PH'
            | 'PN'
            | 'PL'
            | 'PT'
            | 'PR'
            | 'QA'
            | 'RE'
            | 'RO'
            | 'RU'
            | 'RW'
            | 'SH'
            | 'KN'
            | 'LC'
            | 'PM'
            | 'VC'
            | 'WS'
            | 'SM'
            | 'ST'
            | 'SA'
            | 'SN'
            | 'SC'
            | 'SL'
            | 'SG'
            | 'SK'
            | 'SI'
            | 'SB'
            | 'SO'
            | 'ZA'
            | 'GS'
            | 'ES'
            | 'LK'
            | 'SD'
            | 'SR'
            | 'SJ'
            | 'SZ'
            | 'SE'
            | 'CH'
            | 'SY'
            | 'TW'
            | 'TJ'
            | 'TZ'
            | 'TH'
            | 'TL'
            | 'TG'
            | 'TK'
            | 'TO'
            | 'TT'
            | 'TN'
            | 'TR'
            | 'TM'
            | 'TC'
            | 'TV'
            | 'UG'
            | 'UA'
            | 'AE'
            | 'GB'
            | 'UM'
            | 'UY'
            | 'UZ'
            | 'VU'
            | 'VE'
            | 'VN'
            | 'VG'
            | 'VI'
            | 'WF'
            | 'EH'
            | 'YE'
            | 'ZM'
            | 'ZW'
            | 'AX'
            | 'BQ'
            | 'CW'
            | 'GG'
            | 'IM'
            | 'JE'
            | 'ME'
            | 'BL'
            | 'MF'
            | 'RS'
            | 'SX'
            | 'SS'
            | 'XK';

          /**
           * Postal or ZIP code.
           */
          postal_code: string;

          /**
           * Primary street address.
           */
          street_line_1: string;

          /**
           * Secondary street address (apartment, suite, etc.).
           */
          street_line_2: string | null;
        }
      }

      export interface UnionMember0 {
        /**
         * ISO 3166-1 alpha-2 country code of citizenship.
         */
        country_of_citizenship: 'US';

        /**
         * Date of birth as an ISO 8601 calendar date (YYYY-MM-DD).
         */
        date_of_birth: string;

        /**
         * Government-issued identification with type: "ssn" (Social Security Number,
         * format ###-##-####) or "itin" (Individual Taxpayer ID, format 9##-##-####).
         */
        identification: UnionMember0.SsnIdentification | UnionMember0.ItinIdentification;

        /**
         * Full legal name of the account holder.
         */
        legal_name: string;

        /**
         * Residential address of the account holder.
         */
        residential_address:
          | UnionMember0.UsResidentialAddressResponse
          | UnionMember0.NonUsResidentialAddressResponse;

        /**
         * Role of the control person at the business (e.g., "CEO", "President", "Managing
         * Director").
         */
        title: string;
      }

      export namespace UnionMember0 {
        export interface SsnIdentification {
          type: 'ssn';

          value: string;
        }

        export interface ItinIdentification {
          type: 'itin';

          value: string;
        }

        export interface UsResidentialAddressResponse {
          /**
           * City name.
           */
          city: string;

          /**
           * ISO 3166-1 alpha-2 country code.
           */
          country: 'US';

          /**
           * Postal or ZIP code.
           */
          postal_code: string;

          /**
           * Two-letter state code.
           */
          state: string;

          /**
           * Primary street address.
           */
          street_line_1: string;

          /**
           * Secondary street address (apartment, suite, etc.).
           */
          street_line_2: string | null;
        }

        export interface NonUsResidentialAddressResponse {
          /**
           * City name.
           */
          city: string;

          /**
           * ISO 3166-1 alpha-2 country code.
           */
          country:
            | 'AF'
            | 'AL'
            | 'DZ'
            | 'AS'
            | 'AD'
            | 'AO'
            | 'AI'
            | 'AQ'
            | 'AG'
            | 'AR'
            | 'AM'
            | 'AW'
            | 'AU'
            | 'AT'
            | 'AZ'
            | 'BS'
            | 'BH'
            | 'BD'
            | 'BB'
            | 'BY'
            | 'BE'
            | 'BZ'
            | 'BJ'
            | 'BM'
            | 'BT'
            | 'BO'
            | 'BA'
            | 'BW'
            | 'BV'
            | 'BR'
            | 'IO'
            | 'BN'
            | 'BG'
            | 'BF'
            | 'BI'
            | 'KH'
            | 'CM'
            | 'CA'
            | 'CV'
            | 'KY'
            | 'CF'
            | 'TD'
            | 'CL'
            | 'CN'
            | 'CX'
            | 'CC'
            | 'CO'
            | 'KM'
            | 'CG'
            | 'CD'
            | 'CK'
            | 'CR'
            | 'CI'
            | 'HR'
            | 'CU'
            | 'CY'
            | 'CZ'
            | 'DK'
            | 'DJ'
            | 'DM'
            | 'DO'
            | 'EC'
            | 'EG'
            | 'SV'
            | 'GQ'
            | 'ER'
            | 'EE'
            | 'ET'
            | 'FK'
            | 'FO'
            | 'FJ'
            | 'FI'
            | 'FR'
            | 'GF'
            | 'PF'
            | 'TF'
            | 'GA'
            | 'GM'
            | 'GE'
            | 'DE'
            | 'GH'
            | 'GI'
            | 'GR'
            | 'GL'
            | 'GD'
            | 'GP'
            | 'GU'
            | 'GT'
            | 'GN'
            | 'GW'
            | 'GY'
            | 'HT'
            | 'HM'
            | 'VA'
            | 'HN'
            | 'HK'
            | 'HU'
            | 'IS'
            | 'IN'
            | 'ID'
            | 'IR'
            | 'IQ'
            | 'IE'
            | 'IL'
            | 'IT'
            | 'JM'
            | 'JP'
            | 'JO'
            | 'KZ'
            | 'KE'
            | 'KI'
            | 'KP'
            | 'KR'
            | 'KW'
            | 'KG'
            | 'LA'
            | 'LV'
            | 'LB'
            | 'LS'
            | 'LR'
            | 'LY'
            | 'LI'
            | 'LT'
            | 'LU'
            | 'MO'
            | 'MG'
            | 'MW'
            | 'MY'
            | 'MV'
            | 'ML'
            | 'MT'
            | 'MH'
            | 'MQ'
            | 'MR'
            | 'MU'
            | 'YT'
            | 'MX'
            | 'FM'
            | 'MD'
            | 'MC'
            | 'MN'
            | 'MS'
            | 'MA'
            | 'MZ'
            | 'MM'
            | 'NA'
            | 'NR'
            | 'NP'
            | 'NL'
            | 'NC'
            | 'NZ'
            | 'NI'
            | 'NE'
            | 'NG'
            | 'NU'
            | 'NF'
            | 'MP'
            | 'MK'
            | 'NO'
            | 'OM'
            | 'PK'
            | 'PW'
            | 'PS'
            | 'PA'
            | 'PG'
            | 'PY'
            | 'PE'
            | 'PH'
            | 'PN'
            | 'PL'
            | 'PT'
            | 'PR'
            | 'QA'
            | 'RE'
            | 'RO'
            | 'RU'
            | 'RW'
            | 'SH'
            | 'KN'
            | 'LC'
            | 'PM'
            | 'VC'
            | 'WS'
            | 'SM'
            | 'ST'
            | 'SA'
            | 'SN'
            | 'SC'
            | 'SL'
            | 'SG'
            | 'SK'
            | 'SI'
            | 'SB'
            | 'SO'
            | 'ZA'
            | 'GS'
            | 'ES'
            | 'LK'
            | 'SD'
            | 'SR'
            | 'SJ'
            | 'SZ'
            | 'SE'
            | 'CH'
            | 'SY'
            | 'TW'
            | 'TJ'
            | 'TZ'
            | 'TH'
            | 'TL'
            | 'TG'
            | 'TK'
            | 'TO'
            | 'TT'
            | 'TN'
            | 'TR'
            | 'TM'
            | 'TC'
            | 'TV'
            | 'UG'
            | 'UA'
            | 'AE'
            | 'GB'
            | 'UM'
            | 'UY'
            | 'UZ'
            | 'VU'
            | 'VE'
            | 'VN'
            | 'VG'
            | 'VI'
            | 'WF'
            | 'EH'
            | 'YE'
            | 'ZM'
            | 'ZW'
            | 'AX'
            | 'BQ'
            | 'CW'
            | 'GG'
            | 'IM'
            | 'JE'
            | 'ME'
            | 'BL'
            | 'MF'
            | 'RS'
            | 'SX'
            | 'SS'
            | 'XK';

          /**
           * Postal or ZIP code.
           */
          postal_code: string;

          /**
           * Primary street address.
           */
          street_line_1: string;

          /**
           * Secondary street address (apartment, suite, etc.).
           */
          street_line_2: string | null;
        }
      }

      export interface UnionMember1 {
        /**
         * ISO 3166-1 alpha-2 country code of citizenship.
         */
        country_of_citizenship:
          | 'AF'
          | 'AL'
          | 'DZ'
          | 'AS'
          | 'AD'
          | 'AO'
          | 'AI'
          | 'AQ'
          | 'AG'
          | 'AR'
          | 'AM'
          | 'AW'
          | 'AU'
          | 'AT'
          | 'AZ'
          | 'BS'
          | 'BH'
          | 'BD'
          | 'BB'
          | 'BY'
          | 'BE'
          | 'BZ'
          | 'BJ'
          | 'BM'
          | 'BT'
          | 'BO'
          | 'BA'
          | 'BW'
          | 'BV'
          | 'BR'
          | 'IO'
          | 'BN'
          | 'BG'
          | 'BF'
          | 'BI'
          | 'KH'
          | 'CM'
          | 'CA'
          | 'CV'
          | 'KY'
          | 'CF'
          | 'TD'
          | 'CL'
          | 'CN'
          | 'CX'
          | 'CC'
          | 'CO'
          | 'KM'
          | 'CG'
          | 'CD'
          | 'CK'
          | 'CR'
          | 'CI'
          | 'HR'
          | 'CU'
          | 'CY'
          | 'CZ'
          | 'DK'
          | 'DJ'
          | 'DM'
          | 'DO'
          | 'EC'
          | 'EG'
          | 'SV'
          | 'GQ'
          | 'ER'
          | 'EE'
          | 'ET'
          | 'FK'
          | 'FO'
          | 'FJ'
          | 'FI'
          | 'FR'
          | 'GF'
          | 'PF'
          | 'TF'
          | 'GA'
          | 'GM'
          | 'GE'
          | 'DE'
          | 'GH'
          | 'GI'
          | 'GR'
          | 'GL'
          | 'GD'
          | 'GP'
          | 'GU'
          | 'GT'
          | 'GN'
          | 'GW'
          | 'GY'
          | 'HT'
          | 'HM'
          | 'VA'
          | 'HN'
          | 'HK'
          | 'HU'
          | 'IS'
          | 'IN'
          | 'ID'
          | 'IR'
          | 'IQ'
          | 'IE'
          | 'IL'
          | 'IT'
          | 'JM'
          | 'JP'
          | 'JO'
          | 'KZ'
          | 'KE'
          | 'KI'
          | 'KP'
          | 'KR'
          | 'KW'
          | 'KG'
          | 'LA'
          | 'LV'
          | 'LB'
          | 'LS'
          | 'LR'
          | 'LY'
          | 'LI'
          | 'LT'
          | 'LU'
          | 'MO'
          | 'MG'
          | 'MW'
          | 'MY'
          | 'MV'
          | 'ML'
          | 'MT'
          | 'MH'
          | 'MQ'
          | 'MR'
          | 'MU'
          | 'YT'
          | 'MX'
          | 'FM'
          | 'MD'
          | 'MC'
          | 'MN'
          | 'MS'
          | 'MA'
          | 'MZ'
          | 'MM'
          | 'NA'
          | 'NR'
          | 'NP'
          | 'NL'
          | 'NC'
          | 'NZ'
          | 'NI'
          | 'NE'
          | 'NG'
          | 'NU'
          | 'NF'
          | 'MP'
          | 'MK'
          | 'NO'
          | 'OM'
          | 'PK'
          | 'PW'
          | 'PS'
          | 'PA'
          | 'PG'
          | 'PY'
          | 'PE'
          | 'PH'
          | 'PN'
          | 'PL'
          | 'PT'
          | 'PR'
          | 'QA'
          | 'RE'
          | 'RO'
          | 'RU'
          | 'RW'
          | 'SH'
          | 'KN'
          | 'LC'
          | 'PM'
          | 'VC'
          | 'WS'
          | 'SM'
          | 'ST'
          | 'SA'
          | 'SN'
          | 'SC'
          | 'SL'
          | 'SG'
          | 'SK'
          | 'SI'
          | 'SB'
          | 'SO'
          | 'ZA'
          | 'GS'
          | 'ES'
          | 'LK'
          | 'SD'
          | 'SR'
          | 'SJ'
          | 'SZ'
          | 'SE'
          | 'CH'
          | 'SY'
          | 'TW'
          | 'TJ'
          | 'TZ'
          | 'TH'
          | 'TL'
          | 'TG'
          | 'TK'
          | 'TO'
          | 'TT'
          | 'TN'
          | 'TR'
          | 'TM'
          | 'TC'
          | 'TV'
          | 'UG'
          | 'UA'
          | 'AE'
          | 'GB'
          | 'UM'
          | 'UY'
          | 'UZ'
          | 'VU'
          | 'VE'
          | 'VN'
          | 'VG'
          | 'VI'
          | 'WF'
          | 'EH'
          | 'YE'
          | 'ZM'
          | 'ZW'
          | 'AX'
          | 'BQ'
          | 'CW'
          | 'GG'
          | 'IM'
          | 'JE'
          | 'ME'
          | 'BL'
          | 'MF'
          | 'RS'
          | 'SX'
          | 'SS'
          | 'XK';

        /**
         * Date of birth as an ISO 8601 calendar date (YYYY-MM-DD).
         */
        date_of_birth: string;

        /**
         * Government-issued identification with type: "id" (generic government-issued ID).
         */
        identification: UnionMember1.Identification;

        /**
         * Full legal name of the account holder.
         */
        legal_name: string;

        /**
         * Residential address of the account holder.
         */
        residential_address:
          | UnionMember1.UsResidentialAddressResponse
          | UnionMember1.NonUsResidentialAddressResponse;

        /**
         * Role of the control person at the business (e.g., "CEO", "President", "Managing
         * Director").
         */
        title: string;
      }

      export namespace UnionMember1 {
        /**
         * Government-issued identification with type: "id" (generic government-issued ID).
         */
        export interface Identification {
          type: 'id';

          value: string;
        }

        export interface UsResidentialAddressResponse {
          /**
           * City name.
           */
          city: string;

          /**
           * ISO 3166-1 alpha-2 country code.
           */
          country: 'US';

          /**
           * Postal or ZIP code.
           */
          postal_code: string;

          /**
           * Two-letter state code.
           */
          state: string;

          /**
           * Primary street address.
           */
          street_line_1: string;

          /**
           * Secondary street address (apartment, suite, etc.).
           */
          street_line_2: string | null;
        }

        export interface NonUsResidentialAddressResponse {
          /**
           * City name.
           */
          city: string;

          /**
           * ISO 3166-1 alpha-2 country code.
           */
          country:
            | 'AF'
            | 'AL'
            | 'DZ'
            | 'AS'
            | 'AD'
            | 'AO'
            | 'AI'
            | 'AQ'
            | 'AG'
            | 'AR'
            | 'AM'
            | 'AW'
            | 'AU'
            | 'AT'
            | 'AZ'
            | 'BS'
            | 'BH'
            | 'BD'
            | 'BB'
            | 'BY'
            | 'BE'
            | 'BZ'
            | 'BJ'
            | 'BM'
            | 'BT'
            | 'BO'
            | 'BA'
            | 'BW'
            | 'BV'
            | 'BR'
            | 'IO'
            | 'BN'
            | 'BG'
            | 'BF'
            | 'BI'
            | 'KH'
            | 'CM'
            | 'CA'
            | 'CV'
            | 'KY'
            | 'CF'
            | 'TD'
            | 'CL'
            | 'CN'
            | 'CX'
            | 'CC'
            | 'CO'
            | 'KM'
            | 'CG'
            | 'CD'
            | 'CK'
            | 'CR'
            | 'CI'
            | 'HR'
            | 'CU'
            | 'CY'
            | 'CZ'
            | 'DK'
            | 'DJ'
            | 'DM'
            | 'DO'
            | 'EC'
            | 'EG'
            | 'SV'
            | 'GQ'
            | 'ER'
            | 'EE'
            | 'ET'
            | 'FK'
            | 'FO'
            | 'FJ'
            | 'FI'
            | 'FR'
            | 'GF'
            | 'PF'
            | 'TF'
            | 'GA'
            | 'GM'
            | 'GE'
            | 'DE'
            | 'GH'
            | 'GI'
            | 'GR'
            | 'GL'
            | 'GD'
            | 'GP'
            | 'GU'
            | 'GT'
            | 'GN'
            | 'GW'
            | 'GY'
            | 'HT'
            | 'HM'
            | 'VA'
            | 'HN'
            | 'HK'
            | 'HU'
            | 'IS'
            | 'IN'
            | 'ID'
            | 'IR'
            | 'IQ'
            | 'IE'
            | 'IL'
            | 'IT'
            | 'JM'
            | 'JP'
            | 'JO'
            | 'KZ'
            | 'KE'
            | 'KI'
            | 'KP'
            | 'KR'
            | 'KW'
            | 'KG'
            | 'LA'
            | 'LV'
            | 'LB'
            | 'LS'
            | 'LR'
            | 'LY'
            | 'LI'
            | 'LT'
            | 'LU'
            | 'MO'
            | 'MG'
            | 'MW'
            | 'MY'
            | 'MV'
            | 'ML'
            | 'MT'
            | 'MH'
            | 'MQ'
            | 'MR'
            | 'MU'
            | 'YT'
            | 'MX'
            | 'FM'
            | 'MD'
            | 'MC'
            | 'MN'
            | 'MS'
            | 'MA'
            | 'MZ'
            | 'MM'
            | 'NA'
            | 'NR'
            | 'NP'
            | 'NL'
            | 'NC'
            | 'NZ'
            | 'NI'
            | 'NE'
            | 'NG'
            | 'NU'
            | 'NF'
            | 'MP'
            | 'MK'
            | 'NO'
            | 'OM'
            | 'PK'
            | 'PW'
            | 'PS'
            | 'PA'
            | 'PG'
            | 'PY'
            | 'PE'
            | 'PH'
            | 'PN'
            | 'PL'
            | 'PT'
            | 'PR'
            | 'QA'
            | 'RE'
            | 'RO'
            | 'RU'
            | 'RW'
            | 'SH'
            | 'KN'
            | 'LC'
            | 'PM'
            | 'VC'
            | 'WS'
            | 'SM'
            | 'ST'
            | 'SA'
            | 'SN'
            | 'SC'
            | 'SL'
            | 'SG'
            | 'SK'
            | 'SI'
            | 'SB'
            | 'SO'
            | 'ZA'
            | 'GS'
            | 'ES'
            | 'LK'
            | 'SD'
            | 'SR'
            | 'SJ'
            | 'SZ'
            | 'SE'
            | 'CH'
            | 'SY'
            | 'TW'
            | 'TJ'
            | 'TZ'
            | 'TH'
            | 'TL'
            | 'TG'
            | 'TK'
            | 'TO'
            | 'TT'
            | 'TN'
            | 'TR'
            | 'TM'
            | 'TC'
            | 'TV'
            | 'UG'
            | 'UA'
            | 'AE'
            | 'GB'
            | 'UM'
            | 'UY'
            | 'UZ'
            | 'VU'
            | 'VE'
            | 'VN'
            | 'VG'
            | 'VI'
            | 'WF'
            | 'EH'
            | 'YE'
            | 'ZM'
            | 'ZW'
            | 'AX'
            | 'BQ'
            | 'CW'
            | 'GG'
            | 'IM'
            | 'JE'
            | 'ME'
            | 'BL'
            | 'MF'
            | 'RS'
            | 'SX'
            | 'SS'
            | 'XK';

          /**
           * Postal or ZIP code.
           */
          postal_code: string;

          /**
           * Primary street address.
           */
          street_line_1: string;

          /**
           * Secondary street address (apartment, suite, etc.).
           */
          street_line_2: string | null;
        }
      }

      export interface UsResidentialAddressResponse {
        /**
         * City name.
         */
        city: string;

        /**
         * ISO 3166-1 alpha-2 country code.
         */
        country: 'US';

        /**
         * Postal or ZIP code.
         */
        postal_code: string;

        /**
         * Two-letter state code.
         */
        state: string;

        /**
         * Primary street address.
         */
        street_line_1: string;

        /**
         * Secondary street address (apartment, suite, etc.).
         */
        street_line_2: string | null;
      }

      export interface NonUsResidentialAddressResponse {
        /**
         * City name.
         */
        city: string;

        /**
         * ISO 3166-1 alpha-2 country code.
         */
        country:
          | 'AF'
          | 'AL'
          | 'DZ'
          | 'AS'
          | 'AD'
          | 'AO'
          | 'AI'
          | 'AQ'
          | 'AG'
          | 'AR'
          | 'AM'
          | 'AW'
          | 'AU'
          | 'AT'
          | 'AZ'
          | 'BS'
          | 'BH'
          | 'BD'
          | 'BB'
          | 'BY'
          | 'BE'
          | 'BZ'
          | 'BJ'
          | 'BM'
          | 'BT'
          | 'BO'
          | 'BA'
          | 'BW'
          | 'BV'
          | 'BR'
          | 'IO'
          | 'BN'
          | 'BG'
          | 'BF'
          | 'BI'
          | 'KH'
          | 'CM'
          | 'CA'
          | 'CV'
          | 'KY'
          | 'CF'
          | 'TD'
          | 'CL'
          | 'CN'
          | 'CX'
          | 'CC'
          | 'CO'
          | 'KM'
          | 'CG'
          | 'CD'
          | 'CK'
          | 'CR'
          | 'CI'
          | 'HR'
          | 'CU'
          | 'CY'
          | 'CZ'
          | 'DK'
          | 'DJ'
          | 'DM'
          | 'DO'
          | 'EC'
          | 'EG'
          | 'SV'
          | 'GQ'
          | 'ER'
          | 'EE'
          | 'ET'
          | 'FK'
          | 'FO'
          | 'FJ'
          | 'FI'
          | 'FR'
          | 'GF'
          | 'PF'
          | 'TF'
          | 'GA'
          | 'GM'
          | 'GE'
          | 'DE'
          | 'GH'
          | 'GI'
          | 'GR'
          | 'GL'
          | 'GD'
          | 'GP'
          | 'GU'
          | 'GT'
          | 'GN'
          | 'GW'
          | 'GY'
          | 'HT'
          | 'HM'
          | 'VA'
          | 'HN'
          | 'HK'
          | 'HU'
          | 'IS'
          | 'IN'
          | 'ID'
          | 'IR'
          | 'IQ'
          | 'IE'
          | 'IL'
          | 'IT'
          | 'JM'
          | 'JP'
          | 'JO'
          | 'KZ'
          | 'KE'
          | 'KI'
          | 'KP'
          | 'KR'
          | 'KW'
          | 'KG'
          | 'LA'
          | 'LV'
          | 'LB'
          | 'LS'
          | 'LR'
          | 'LY'
          | 'LI'
          | 'LT'
          | 'LU'
          | 'MO'
          | 'MG'
          | 'MW'
          | 'MY'
          | 'MV'
          | 'ML'
          | 'MT'
          | 'MH'
          | 'MQ'
          | 'MR'
          | 'MU'
          | 'YT'
          | 'MX'
          | 'FM'
          | 'MD'
          | 'MC'
          | 'MN'
          | 'MS'
          | 'MA'
          | 'MZ'
          | 'MM'
          | 'NA'
          | 'NR'
          | 'NP'
          | 'NL'
          | 'NC'
          | 'NZ'
          | 'NI'
          | 'NE'
          | 'NG'
          | 'NU'
          | 'NF'
          | 'MP'
          | 'MK'
          | 'NO'
          | 'OM'
          | 'PK'
          | 'PW'
          | 'PS'
          | 'PA'
          | 'PG'
          | 'PY'
          | 'PE'
          | 'PH'
          | 'PN'
          | 'PL'
          | 'PT'
          | 'PR'
          | 'QA'
          | 'RE'
          | 'RO'
          | 'RU'
          | 'RW'
          | 'SH'
          | 'KN'
          | 'LC'
          | 'PM'
          | 'VC'
          | 'WS'
          | 'SM'
          | 'ST'
          | 'SA'
          | 'SN'
          | 'SC'
          | 'SL'
          | 'SG'
          | 'SK'
          | 'SI'
          | 'SB'
          | 'SO'
          | 'ZA'
          | 'GS'
          | 'ES'
          | 'LK'
          | 'SD'
          | 'SR'
          | 'SJ'
          | 'SZ'
          | 'SE'
          | 'CH'
          | 'SY'
          | 'TW'
          | 'TJ'
          | 'TZ'
          | 'TH'
          | 'TL'
          | 'TG'
          | 'TK'
          | 'TO'
          | 'TT'
          | 'TN'
          | 'TR'
          | 'TM'
          | 'TC'
          | 'TV'
          | 'UG'
          | 'UA'
          | 'AE'
          | 'GB'
          | 'UM'
          | 'UY'
          | 'UZ'
          | 'VU'
          | 'VE'
          | 'VN'
          | 'VG'
          | 'VI'
          | 'WF'
          | 'EH'
          | 'YE'
          | 'ZM'
          | 'ZW'
          | 'AX'
          | 'BQ'
          | 'CW'
          | 'GG'
          | 'IM'
          | 'JE'
          | 'ME'
          | 'BL'
          | 'MF'
          | 'RS'
          | 'SX'
          | 'SS'
          | 'XK';

        /**
         * Postal or ZIP code.
         */
        postal_code: string;

        /**
         * Primary street address.
         */
        street_line_1: string;

        /**
         * Secondary street address (apartment, suite, etc.).
         */
        street_line_2: string | null;
      }

      export interface UsResidentialAddressResponse {
        /**
         * City name.
         */
        city: string;

        /**
         * ISO 3166-1 alpha-2 country code.
         */
        country: 'US';

        /**
         * Postal or ZIP code.
         */
        postal_code: string;

        /**
         * Two-letter state code.
         */
        state: string;

        /**
         * Primary street address.
         */
        street_line_1: string;

        /**
         * Secondary street address (apartment, suite, etc.).
         */
        street_line_2: string | null;
      }

      export interface NonUsResidentialAddressResponse {
        /**
         * City name.
         */
        city: string;

        /**
         * ISO 3166-1 alpha-2 country code.
         */
        country:
          | 'AF'
          | 'AL'
          | 'DZ'
          | 'AS'
          | 'AD'
          | 'AO'
          | 'AI'
          | 'AQ'
          | 'AG'
          | 'AR'
          | 'AM'
          | 'AW'
          | 'AU'
          | 'AT'
          | 'AZ'
          | 'BS'
          | 'BH'
          | 'BD'
          | 'BB'
          | 'BY'
          | 'BE'
          | 'BZ'
          | 'BJ'
          | 'BM'
          | 'BT'
          | 'BO'
          | 'BA'
          | 'BW'
          | 'BV'
          | 'BR'
          | 'IO'
          | 'BN'
          | 'BG'
          | 'BF'
          | 'BI'
          | 'KH'
          | 'CM'
          | 'CA'
          | 'CV'
          | 'KY'
          | 'CF'
          | 'TD'
          | 'CL'
          | 'CN'
          | 'CX'
          | 'CC'
          | 'CO'
          | 'KM'
          | 'CG'
          | 'CD'
          | 'CK'
          | 'CR'
          | 'CI'
          | 'HR'
          | 'CU'
          | 'CY'
          | 'CZ'
          | 'DK'
          | 'DJ'
          | 'DM'
          | 'DO'
          | 'EC'
          | 'EG'
          | 'SV'
          | 'GQ'
          | 'ER'
          | 'EE'
          | 'ET'
          | 'FK'
          | 'FO'
          | 'FJ'
          | 'FI'
          | 'FR'
          | 'GF'
          | 'PF'
          | 'TF'
          | 'GA'
          | 'GM'
          | 'GE'
          | 'DE'
          | 'GH'
          | 'GI'
          | 'GR'
          | 'GL'
          | 'GD'
          | 'GP'
          | 'GU'
          | 'GT'
          | 'GN'
          | 'GW'
          | 'GY'
          | 'HT'
          | 'HM'
          | 'VA'
          | 'HN'
          | 'HK'
          | 'HU'
          | 'IS'
          | 'IN'
          | 'ID'
          | 'IR'
          | 'IQ'
          | 'IE'
          | 'IL'
          | 'IT'
          | 'JM'
          | 'JP'
          | 'JO'
          | 'KZ'
          | 'KE'
          | 'KI'
          | 'KP'
          | 'KR'
          | 'KW'
          | 'KG'
          | 'LA'
          | 'LV'
          | 'LB'
          | 'LS'
          | 'LR'
          | 'LY'
          | 'LI'
          | 'LT'
          | 'LU'
          | 'MO'
          | 'MG'
          | 'MW'
          | 'MY'
          | 'MV'
          | 'ML'
          | 'MT'
          | 'MH'
          | 'MQ'
          | 'MR'
          | 'MU'
          | 'YT'
          | 'MX'
          | 'FM'
          | 'MD'
          | 'MC'
          | 'MN'
          | 'MS'
          | 'MA'
          | 'MZ'
          | 'MM'
          | 'NA'
          | 'NR'
          | 'NP'
          | 'NL'
          | 'NC'
          | 'NZ'
          | 'NI'
          | 'NE'
          | 'NG'
          | 'NU'
          | 'NF'
          | 'MP'
          | 'MK'
          | 'NO'
          | 'OM'
          | 'PK'
          | 'PW'
          | 'PS'
          | 'PA'
          | 'PG'
          | 'PY'
          | 'PE'
          | 'PH'
          | 'PN'
          | 'PL'
          | 'PT'
          | 'PR'
          | 'QA'
          | 'RE'
          | 'RO'
          | 'RU'
          | 'RW'
          | 'SH'
          | 'KN'
          | 'LC'
          | 'PM'
          | 'VC'
          | 'WS'
          | 'SM'
          | 'ST'
          | 'SA'
          | 'SN'
          | 'SC'
          | 'SL'
          | 'SG'
          | 'SK'
          | 'SI'
          | 'SB'
          | 'SO'
          | 'ZA'
          | 'GS'
          | 'ES'
          | 'LK'
          | 'SD'
          | 'SR'
          | 'SJ'
          | 'SZ'
          | 'SE'
          | 'CH'
          | 'SY'
          | 'TW'
          | 'TJ'
          | 'TZ'
          | 'TH'
          | 'TL'
          | 'TG'
          | 'TK'
          | 'TO'
          | 'TT'
          | 'TN'
          | 'TR'
          | 'TM'
          | 'TC'
          | 'TV'
          | 'UG'
          | 'UA'
          | 'AE'
          | 'GB'
          | 'UM'
          | 'UY'
          | 'UZ'
          | 'VU'
          | 'VE'
          | 'VN'
          | 'VG'
          | 'VI'
          | 'WF'
          | 'EH'
          | 'YE'
          | 'ZM'
          | 'ZW'
          | 'AX'
          | 'BQ'
          | 'CW'
          | 'GG'
          | 'IM'
          | 'JE'
          | 'ME'
          | 'BL'
          | 'MF'
          | 'RS'
          | 'SX'
          | 'SS'
          | 'XK';

        /**
         * Postal or ZIP code.
         */
        postal_code: string;

        /**
         * Primary street address.
         */
        street_line_1: string;

        /**
         * Secondary street address (apartment, suite, etc.).
         */
        street_line_2: string | null;
      }

      export interface EinIdentification {
        type: 'ein';

        value: string;
      }

      export interface SsnIdentification {
        type: 'ssn';

        value: string;
      }
    }
  }
}

export interface AccountHolderClosedWebhookEvent {
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
  payload: AccountHolderClosedWebhookEvent.Payload;

  /**
   * Event type in resource.action format.
   */
  type: 'account_holder.closed';
}

export namespace AccountHolderClosedWebhookEvent {
  /**
   * Full resource snapshot at the time of the event.
   */
  export interface Payload {
    /**
     * Unique identifier of the account holder.
     */
    id: string;

    /**
     * Beneficiary details used to create this account holder.
     */
    beneficiary_data:
      | Payload.UsBeneficiaryDataResponse
      | Payload.NonUsBeneficiaryDataResponse
      | Payload.BusinessBeneficiaryDataResponse;

    /**
     * ISO 8601 UTC timestamp when the account holder was created.
     */
    created_at: string;

    /**
     * Type of the account holder.
     */
    holder_type: 'natural_person' | 'business';

    /**
     * Current account holder status.
     */
    status: 'pending' | 'active' | 'closed';

    /**
     * Resource type discriminator.
     */
    type: 'account_holder';
  }

  export namespace Payload {
    export interface UsBeneficiaryDataResponse {
      /**
       * ISO 3166-1 alpha-2 country code of citizenship.
       */
      country_of_citizenship: 'US';

      /**
       * Date of birth as an ISO 8601 calendar date (YYYY-MM-DD).
       */
      date_of_birth: string;

      /**
       * Government-issued identification with type: "ssn" (Social Security Number,
       * format ###-##-####) or "itin" (Individual Taxpayer ID, format 9##-##-####).
       */
      identification:
        | UsBeneficiaryDataResponse.SsnIdentification
        | UsBeneficiaryDataResponse.ItinIdentification;

      /**
       * Full legal name of the account holder.
       */
      legal_name: string;

      /**
       * Residential address of the account holder.
       */
      residential_address:
        | UsBeneficiaryDataResponse.UsResidentialAddressResponse
        | UsBeneficiaryDataResponse.NonUsResidentialAddressResponse;
    }

    export namespace UsBeneficiaryDataResponse {
      export interface SsnIdentification {
        type: 'ssn';

        value: string;
      }

      export interface ItinIdentification {
        type: 'itin';

        value: string;
      }

      export interface UsResidentialAddressResponse {
        /**
         * City name.
         */
        city: string;

        /**
         * ISO 3166-1 alpha-2 country code.
         */
        country: 'US';

        /**
         * Postal or ZIP code.
         */
        postal_code: string;

        /**
         * Two-letter state code.
         */
        state: string;

        /**
         * Primary street address.
         */
        street_line_1: string;

        /**
         * Secondary street address (apartment, suite, etc.).
         */
        street_line_2: string | null;
      }

      export interface NonUsResidentialAddressResponse {
        /**
         * City name.
         */
        city: string;

        /**
         * ISO 3166-1 alpha-2 country code.
         */
        country:
          | 'AF'
          | 'AL'
          | 'DZ'
          | 'AS'
          | 'AD'
          | 'AO'
          | 'AI'
          | 'AQ'
          | 'AG'
          | 'AR'
          | 'AM'
          | 'AW'
          | 'AU'
          | 'AT'
          | 'AZ'
          | 'BS'
          | 'BH'
          | 'BD'
          | 'BB'
          | 'BY'
          | 'BE'
          | 'BZ'
          | 'BJ'
          | 'BM'
          | 'BT'
          | 'BO'
          | 'BA'
          | 'BW'
          | 'BV'
          | 'BR'
          | 'IO'
          | 'BN'
          | 'BG'
          | 'BF'
          | 'BI'
          | 'KH'
          | 'CM'
          | 'CA'
          | 'CV'
          | 'KY'
          | 'CF'
          | 'TD'
          | 'CL'
          | 'CN'
          | 'CX'
          | 'CC'
          | 'CO'
          | 'KM'
          | 'CG'
          | 'CD'
          | 'CK'
          | 'CR'
          | 'CI'
          | 'HR'
          | 'CU'
          | 'CY'
          | 'CZ'
          | 'DK'
          | 'DJ'
          | 'DM'
          | 'DO'
          | 'EC'
          | 'EG'
          | 'SV'
          | 'GQ'
          | 'ER'
          | 'EE'
          | 'ET'
          | 'FK'
          | 'FO'
          | 'FJ'
          | 'FI'
          | 'FR'
          | 'GF'
          | 'PF'
          | 'TF'
          | 'GA'
          | 'GM'
          | 'GE'
          | 'DE'
          | 'GH'
          | 'GI'
          | 'GR'
          | 'GL'
          | 'GD'
          | 'GP'
          | 'GU'
          | 'GT'
          | 'GN'
          | 'GW'
          | 'GY'
          | 'HT'
          | 'HM'
          | 'VA'
          | 'HN'
          | 'HK'
          | 'HU'
          | 'IS'
          | 'IN'
          | 'ID'
          | 'IR'
          | 'IQ'
          | 'IE'
          | 'IL'
          | 'IT'
          | 'JM'
          | 'JP'
          | 'JO'
          | 'KZ'
          | 'KE'
          | 'KI'
          | 'KP'
          | 'KR'
          | 'KW'
          | 'KG'
          | 'LA'
          | 'LV'
          | 'LB'
          | 'LS'
          | 'LR'
          | 'LY'
          | 'LI'
          | 'LT'
          | 'LU'
          | 'MO'
          | 'MG'
          | 'MW'
          | 'MY'
          | 'MV'
          | 'ML'
          | 'MT'
          | 'MH'
          | 'MQ'
          | 'MR'
          | 'MU'
          | 'YT'
          | 'MX'
          | 'FM'
          | 'MD'
          | 'MC'
          | 'MN'
          | 'MS'
          | 'MA'
          | 'MZ'
          | 'MM'
          | 'NA'
          | 'NR'
          | 'NP'
          | 'NL'
          | 'NC'
          | 'NZ'
          | 'NI'
          | 'NE'
          | 'NG'
          | 'NU'
          | 'NF'
          | 'MP'
          | 'MK'
          | 'NO'
          | 'OM'
          | 'PK'
          | 'PW'
          | 'PS'
          | 'PA'
          | 'PG'
          | 'PY'
          | 'PE'
          | 'PH'
          | 'PN'
          | 'PL'
          | 'PT'
          | 'PR'
          | 'QA'
          | 'RE'
          | 'RO'
          | 'RU'
          | 'RW'
          | 'SH'
          | 'KN'
          | 'LC'
          | 'PM'
          | 'VC'
          | 'WS'
          | 'SM'
          | 'ST'
          | 'SA'
          | 'SN'
          | 'SC'
          | 'SL'
          | 'SG'
          | 'SK'
          | 'SI'
          | 'SB'
          | 'SO'
          | 'ZA'
          | 'GS'
          | 'ES'
          | 'LK'
          | 'SD'
          | 'SR'
          | 'SJ'
          | 'SZ'
          | 'SE'
          | 'CH'
          | 'SY'
          | 'TW'
          | 'TJ'
          | 'TZ'
          | 'TH'
          | 'TL'
          | 'TG'
          | 'TK'
          | 'TO'
          | 'TT'
          | 'TN'
          | 'TR'
          | 'TM'
          | 'TC'
          | 'TV'
          | 'UG'
          | 'UA'
          | 'AE'
          | 'GB'
          | 'UM'
          | 'UY'
          | 'UZ'
          | 'VU'
          | 'VE'
          | 'VN'
          | 'VG'
          | 'VI'
          | 'WF'
          | 'EH'
          | 'YE'
          | 'ZM'
          | 'ZW'
          | 'AX'
          | 'BQ'
          | 'CW'
          | 'GG'
          | 'IM'
          | 'JE'
          | 'ME'
          | 'BL'
          | 'MF'
          | 'RS'
          | 'SX'
          | 'SS'
          | 'XK';

        /**
         * Postal or ZIP code.
         */
        postal_code: string;

        /**
         * Primary street address.
         */
        street_line_1: string;

        /**
         * Secondary street address (apartment, suite, etc.).
         */
        street_line_2: string | null;
      }
    }

    export interface NonUsBeneficiaryDataResponse {
      /**
       * ISO 3166-1 alpha-2 country code of citizenship.
       */
      country_of_citizenship:
        | 'AF'
        | 'AL'
        | 'DZ'
        | 'AS'
        | 'AD'
        | 'AO'
        | 'AI'
        | 'AQ'
        | 'AG'
        | 'AR'
        | 'AM'
        | 'AW'
        | 'AU'
        | 'AT'
        | 'AZ'
        | 'BS'
        | 'BH'
        | 'BD'
        | 'BB'
        | 'BY'
        | 'BE'
        | 'BZ'
        | 'BJ'
        | 'BM'
        | 'BT'
        | 'BO'
        | 'BA'
        | 'BW'
        | 'BV'
        | 'BR'
        | 'IO'
        | 'BN'
        | 'BG'
        | 'BF'
        | 'BI'
        | 'KH'
        | 'CM'
        | 'CA'
        | 'CV'
        | 'KY'
        | 'CF'
        | 'TD'
        | 'CL'
        | 'CN'
        | 'CX'
        | 'CC'
        | 'CO'
        | 'KM'
        | 'CG'
        | 'CD'
        | 'CK'
        | 'CR'
        | 'CI'
        | 'HR'
        | 'CU'
        | 'CY'
        | 'CZ'
        | 'DK'
        | 'DJ'
        | 'DM'
        | 'DO'
        | 'EC'
        | 'EG'
        | 'SV'
        | 'GQ'
        | 'ER'
        | 'EE'
        | 'ET'
        | 'FK'
        | 'FO'
        | 'FJ'
        | 'FI'
        | 'FR'
        | 'GF'
        | 'PF'
        | 'TF'
        | 'GA'
        | 'GM'
        | 'GE'
        | 'DE'
        | 'GH'
        | 'GI'
        | 'GR'
        | 'GL'
        | 'GD'
        | 'GP'
        | 'GU'
        | 'GT'
        | 'GN'
        | 'GW'
        | 'GY'
        | 'HT'
        | 'HM'
        | 'VA'
        | 'HN'
        | 'HK'
        | 'HU'
        | 'IS'
        | 'IN'
        | 'ID'
        | 'IR'
        | 'IQ'
        | 'IE'
        | 'IL'
        | 'IT'
        | 'JM'
        | 'JP'
        | 'JO'
        | 'KZ'
        | 'KE'
        | 'KI'
        | 'KP'
        | 'KR'
        | 'KW'
        | 'KG'
        | 'LA'
        | 'LV'
        | 'LB'
        | 'LS'
        | 'LR'
        | 'LY'
        | 'LI'
        | 'LT'
        | 'LU'
        | 'MO'
        | 'MG'
        | 'MW'
        | 'MY'
        | 'MV'
        | 'ML'
        | 'MT'
        | 'MH'
        | 'MQ'
        | 'MR'
        | 'MU'
        | 'YT'
        | 'MX'
        | 'FM'
        | 'MD'
        | 'MC'
        | 'MN'
        | 'MS'
        | 'MA'
        | 'MZ'
        | 'MM'
        | 'NA'
        | 'NR'
        | 'NP'
        | 'NL'
        | 'NC'
        | 'NZ'
        | 'NI'
        | 'NE'
        | 'NG'
        | 'NU'
        | 'NF'
        | 'MP'
        | 'MK'
        | 'NO'
        | 'OM'
        | 'PK'
        | 'PW'
        | 'PS'
        | 'PA'
        | 'PG'
        | 'PY'
        | 'PE'
        | 'PH'
        | 'PN'
        | 'PL'
        | 'PT'
        | 'PR'
        | 'QA'
        | 'RE'
        | 'RO'
        | 'RU'
        | 'RW'
        | 'SH'
        | 'KN'
        | 'LC'
        | 'PM'
        | 'VC'
        | 'WS'
        | 'SM'
        | 'ST'
        | 'SA'
        | 'SN'
        | 'SC'
        | 'SL'
        | 'SG'
        | 'SK'
        | 'SI'
        | 'SB'
        | 'SO'
        | 'ZA'
        | 'GS'
        | 'ES'
        | 'LK'
        | 'SD'
        | 'SR'
        | 'SJ'
        | 'SZ'
        | 'SE'
        | 'CH'
        | 'SY'
        | 'TW'
        | 'TJ'
        | 'TZ'
        | 'TH'
        | 'TL'
        | 'TG'
        | 'TK'
        | 'TO'
        | 'TT'
        | 'TN'
        | 'TR'
        | 'TM'
        | 'TC'
        | 'TV'
        | 'UG'
        | 'UA'
        | 'AE'
        | 'GB'
        | 'UM'
        | 'UY'
        | 'UZ'
        | 'VU'
        | 'VE'
        | 'VN'
        | 'VG'
        | 'VI'
        | 'WF'
        | 'EH'
        | 'YE'
        | 'ZM'
        | 'ZW'
        | 'AX'
        | 'BQ'
        | 'CW'
        | 'GG'
        | 'IM'
        | 'JE'
        | 'ME'
        | 'BL'
        | 'MF'
        | 'RS'
        | 'SX'
        | 'SS'
        | 'XK';

      /**
       * Date of birth as an ISO 8601 calendar date (YYYY-MM-DD).
       */
      date_of_birth: string;

      /**
       * Government-issued identification with type: "id" (generic government-issued ID).
       */
      identification: NonUsBeneficiaryDataResponse.Identification;

      /**
       * Full legal name of the account holder.
       */
      legal_name: string;

      /**
       * Residential address of the account holder.
       */
      residential_address:
        | NonUsBeneficiaryDataResponse.UsResidentialAddressResponse
        | NonUsBeneficiaryDataResponse.NonUsResidentialAddressResponse;
    }

    export namespace NonUsBeneficiaryDataResponse {
      /**
       * Government-issued identification with type: "id" (generic government-issued ID).
       */
      export interface Identification {
        type: 'id';

        value: string;
      }

      export interface UsResidentialAddressResponse {
        /**
         * City name.
         */
        city: string;

        /**
         * ISO 3166-1 alpha-2 country code.
         */
        country: 'US';

        /**
         * Postal or ZIP code.
         */
        postal_code: string;

        /**
         * Two-letter state code.
         */
        state: string;

        /**
         * Primary street address.
         */
        street_line_1: string;

        /**
         * Secondary street address (apartment, suite, etc.).
         */
        street_line_2: string | null;
      }

      export interface NonUsResidentialAddressResponse {
        /**
         * City name.
         */
        city: string;

        /**
         * ISO 3166-1 alpha-2 country code.
         */
        country:
          | 'AF'
          | 'AL'
          | 'DZ'
          | 'AS'
          | 'AD'
          | 'AO'
          | 'AI'
          | 'AQ'
          | 'AG'
          | 'AR'
          | 'AM'
          | 'AW'
          | 'AU'
          | 'AT'
          | 'AZ'
          | 'BS'
          | 'BH'
          | 'BD'
          | 'BB'
          | 'BY'
          | 'BE'
          | 'BZ'
          | 'BJ'
          | 'BM'
          | 'BT'
          | 'BO'
          | 'BA'
          | 'BW'
          | 'BV'
          | 'BR'
          | 'IO'
          | 'BN'
          | 'BG'
          | 'BF'
          | 'BI'
          | 'KH'
          | 'CM'
          | 'CA'
          | 'CV'
          | 'KY'
          | 'CF'
          | 'TD'
          | 'CL'
          | 'CN'
          | 'CX'
          | 'CC'
          | 'CO'
          | 'KM'
          | 'CG'
          | 'CD'
          | 'CK'
          | 'CR'
          | 'CI'
          | 'HR'
          | 'CU'
          | 'CY'
          | 'CZ'
          | 'DK'
          | 'DJ'
          | 'DM'
          | 'DO'
          | 'EC'
          | 'EG'
          | 'SV'
          | 'GQ'
          | 'ER'
          | 'EE'
          | 'ET'
          | 'FK'
          | 'FO'
          | 'FJ'
          | 'FI'
          | 'FR'
          | 'GF'
          | 'PF'
          | 'TF'
          | 'GA'
          | 'GM'
          | 'GE'
          | 'DE'
          | 'GH'
          | 'GI'
          | 'GR'
          | 'GL'
          | 'GD'
          | 'GP'
          | 'GU'
          | 'GT'
          | 'GN'
          | 'GW'
          | 'GY'
          | 'HT'
          | 'HM'
          | 'VA'
          | 'HN'
          | 'HK'
          | 'HU'
          | 'IS'
          | 'IN'
          | 'ID'
          | 'IR'
          | 'IQ'
          | 'IE'
          | 'IL'
          | 'IT'
          | 'JM'
          | 'JP'
          | 'JO'
          | 'KZ'
          | 'KE'
          | 'KI'
          | 'KP'
          | 'KR'
          | 'KW'
          | 'KG'
          | 'LA'
          | 'LV'
          | 'LB'
          | 'LS'
          | 'LR'
          | 'LY'
          | 'LI'
          | 'LT'
          | 'LU'
          | 'MO'
          | 'MG'
          | 'MW'
          | 'MY'
          | 'MV'
          | 'ML'
          | 'MT'
          | 'MH'
          | 'MQ'
          | 'MR'
          | 'MU'
          | 'YT'
          | 'MX'
          | 'FM'
          | 'MD'
          | 'MC'
          | 'MN'
          | 'MS'
          | 'MA'
          | 'MZ'
          | 'MM'
          | 'NA'
          | 'NR'
          | 'NP'
          | 'NL'
          | 'NC'
          | 'NZ'
          | 'NI'
          | 'NE'
          | 'NG'
          | 'NU'
          | 'NF'
          | 'MP'
          | 'MK'
          | 'NO'
          | 'OM'
          | 'PK'
          | 'PW'
          | 'PS'
          | 'PA'
          | 'PG'
          | 'PY'
          | 'PE'
          | 'PH'
          | 'PN'
          | 'PL'
          | 'PT'
          | 'PR'
          | 'QA'
          | 'RE'
          | 'RO'
          | 'RU'
          | 'RW'
          | 'SH'
          | 'KN'
          | 'LC'
          | 'PM'
          | 'VC'
          | 'WS'
          | 'SM'
          | 'ST'
          | 'SA'
          | 'SN'
          | 'SC'
          | 'SL'
          | 'SG'
          | 'SK'
          | 'SI'
          | 'SB'
          | 'SO'
          | 'ZA'
          | 'GS'
          | 'ES'
          | 'LK'
          | 'SD'
          | 'SR'
          | 'SJ'
          | 'SZ'
          | 'SE'
          | 'CH'
          | 'SY'
          | 'TW'
          | 'TJ'
          | 'TZ'
          | 'TH'
          | 'TL'
          | 'TG'
          | 'TK'
          | 'TO'
          | 'TT'
          | 'TN'
          | 'TR'
          | 'TM'
          | 'TC'
          | 'TV'
          | 'UG'
          | 'UA'
          | 'AE'
          | 'GB'
          | 'UM'
          | 'UY'
          | 'UZ'
          | 'VU'
          | 'VE'
          | 'VN'
          | 'VG'
          | 'VI'
          | 'WF'
          | 'EH'
          | 'YE'
          | 'ZM'
          | 'ZW'
          | 'AX'
          | 'BQ'
          | 'CW'
          | 'GG'
          | 'IM'
          | 'JE'
          | 'ME'
          | 'BL'
          | 'MF'
          | 'RS'
          | 'SX'
          | 'SS'
          | 'XK';

        /**
         * Postal or ZIP code.
         */
        postal_code: string;

        /**
         * Primary street address.
         */
        street_line_1: string;

        /**
         * Secondary street address (apartment, suite, etc.).
         */
        street_line_2: string | null;
      }
    }

    export interface BusinessBeneficiaryDataResponse {
      /**
       * Beneficial owners of the business. At least one required.
       */
      beneficial_owners: Array<
        | BusinessBeneficiaryDataResponse.UsBeneficiaryDataResponse
        | BusinessBeneficiaryDataResponse.NonUsBeneficiaryDataResponse
      >;

      /**
       * Individual with primary responsibility for controlling, managing, or directing
       * the business.
       */
      control_person:
        | BusinessBeneficiaryDataResponse.UnionMember0
        | BusinessBeneficiaryDataResponse.UnionMember1;

      /**
       * ISO 3166-1 alpha-2 country code where the business is incorporated.
       */
      country_of_incorporation:
        | 'AF'
        | 'AL'
        | 'DZ'
        | 'AS'
        | 'AD'
        | 'AO'
        | 'AI'
        | 'AQ'
        | 'AG'
        | 'AR'
        | 'AM'
        | 'AW'
        | 'AU'
        | 'AT'
        | 'AZ'
        | 'BS'
        | 'BH'
        | 'BD'
        | 'BB'
        | 'BY'
        | 'BE'
        | 'BZ'
        | 'BJ'
        | 'BM'
        | 'BT'
        | 'BO'
        | 'BA'
        | 'BW'
        | 'BV'
        | 'BR'
        | 'IO'
        | 'BN'
        | 'BG'
        | 'BF'
        | 'BI'
        | 'KH'
        | 'CM'
        | 'CA'
        | 'CV'
        | 'KY'
        | 'CF'
        | 'TD'
        | 'CL'
        | 'CN'
        | 'CX'
        | 'CC'
        | 'CO'
        | 'KM'
        | 'CG'
        | 'CD'
        | 'CK'
        | 'CR'
        | 'CI'
        | 'HR'
        | 'CU'
        | 'CY'
        | 'CZ'
        | 'DK'
        | 'DJ'
        | 'DM'
        | 'DO'
        | 'EC'
        | 'EG'
        | 'SV'
        | 'GQ'
        | 'ER'
        | 'EE'
        | 'ET'
        | 'FK'
        | 'FO'
        | 'FJ'
        | 'FI'
        | 'FR'
        | 'GF'
        | 'PF'
        | 'TF'
        | 'GA'
        | 'GM'
        | 'GE'
        | 'DE'
        | 'GH'
        | 'GI'
        | 'GR'
        | 'GL'
        | 'GD'
        | 'GP'
        | 'GU'
        | 'GT'
        | 'GN'
        | 'GW'
        | 'GY'
        | 'HT'
        | 'HM'
        | 'VA'
        | 'HN'
        | 'HK'
        | 'HU'
        | 'IS'
        | 'IN'
        | 'ID'
        | 'IR'
        | 'IQ'
        | 'IE'
        | 'IL'
        | 'IT'
        | 'JM'
        | 'JP'
        | 'JO'
        | 'KZ'
        | 'KE'
        | 'KI'
        | 'KP'
        | 'KR'
        | 'KW'
        | 'KG'
        | 'LA'
        | 'LV'
        | 'LB'
        | 'LS'
        | 'LR'
        | 'LY'
        | 'LI'
        | 'LT'
        | 'LU'
        | 'MO'
        | 'MG'
        | 'MW'
        | 'MY'
        | 'MV'
        | 'ML'
        | 'MT'
        | 'MH'
        | 'MQ'
        | 'MR'
        | 'MU'
        | 'YT'
        | 'MX'
        | 'FM'
        | 'MD'
        | 'MC'
        | 'MN'
        | 'MS'
        | 'MA'
        | 'MZ'
        | 'MM'
        | 'NA'
        | 'NR'
        | 'NP'
        | 'NL'
        | 'NC'
        | 'NZ'
        | 'NI'
        | 'NE'
        | 'NG'
        | 'NU'
        | 'NF'
        | 'MP'
        | 'MK'
        | 'NO'
        | 'OM'
        | 'PK'
        | 'PW'
        | 'PS'
        | 'PA'
        | 'PG'
        | 'PY'
        | 'PE'
        | 'PH'
        | 'PN'
        | 'PL'
        | 'PT'
        | 'PR'
        | 'QA'
        | 'RE'
        | 'RO'
        | 'RU'
        | 'RW'
        | 'SH'
        | 'KN'
        | 'LC'
        | 'PM'
        | 'VC'
        | 'WS'
        | 'SM'
        | 'ST'
        | 'SA'
        | 'SN'
        | 'SC'
        | 'SL'
        | 'SG'
        | 'SK'
        | 'SI'
        | 'SB'
        | 'SO'
        | 'ZA'
        | 'GS'
        | 'ES'
        | 'LK'
        | 'SD'
        | 'SR'
        | 'SJ'
        | 'SZ'
        | 'SE'
        | 'CH'
        | 'SY'
        | 'TW'
        | 'TJ'
        | 'TZ'
        | 'TH'
        | 'TL'
        | 'TG'
        | 'TK'
        | 'TO'
        | 'TT'
        | 'TN'
        | 'TR'
        | 'TM'
        | 'TC'
        | 'TV'
        | 'UG'
        | 'UA'
        | 'AE'
        | 'GB'
        | 'US'
        | 'UM'
        | 'UY'
        | 'UZ'
        | 'VU'
        | 'VE'
        | 'VN'
        | 'VG'
        | 'VI'
        | 'WF'
        | 'EH'
        | 'YE'
        | 'ZM'
        | 'ZW'
        | 'AX'
        | 'BQ'
        | 'CW'
        | 'GG'
        | 'IM'
        | 'JE'
        | 'ME'
        | 'BL'
        | 'MF'
        | 'RS'
        | 'SX'
        | 'SS'
        | 'XK';

      /**
       * Trade name the business operates under, if different from the legal name.
       */
      doing_business_as: string | null;

      /**
       * Full legal name of the business.
       */
      legal_business_name: string;

      /**
       * Physical operating address of the business.
       */
      physical_address:
        | BusinessBeneficiaryDataResponse.UsResidentialAddressResponse
        | BusinessBeneficiaryDataResponse.NonUsResidentialAddressResponse;

      /**
       * Registered legal address of the business.
       */
      registered_address:
        | BusinessBeneficiaryDataResponse.UsResidentialAddressResponse
        | BusinessBeneficiaryDataResponse.NonUsResidentialAddressResponse;

      /**
       * Business registration number: type "ein" (Employer Identification Number, format
       * ##-#######) or "ssn" (Social Security Number, format ###-##-####).
       */
      registration_number:
        | BusinessBeneficiaryDataResponse.EinIdentification
        | BusinessBeneficiaryDataResponse.SsnIdentification;

      /**
       * State or subdivision where the business is incorporated.
       */
      state_of_incorporation: string;

      /**
       * Four-digit year the business was incorporated.
       */
      year_of_incorporation: number;
    }

    export namespace BusinessBeneficiaryDataResponse {
      export interface UsBeneficiaryDataResponse {
        /**
         * ISO 3166-1 alpha-2 country code of citizenship.
         */
        country_of_citizenship: 'US';

        /**
         * Date of birth as an ISO 8601 calendar date (YYYY-MM-DD).
         */
        date_of_birth: string;

        /**
         * Government-issued identification with type: "ssn" (Social Security Number,
         * format ###-##-####) or "itin" (Individual Taxpayer ID, format 9##-##-####).
         */
        identification:
          | UsBeneficiaryDataResponse.SsnIdentification
          | UsBeneficiaryDataResponse.ItinIdentification;

        /**
         * Full legal name of the account holder.
         */
        legal_name: string;

        /**
         * Residential address of the account holder.
         */
        residential_address:
          | UsBeneficiaryDataResponse.UsResidentialAddressResponse
          | UsBeneficiaryDataResponse.NonUsResidentialAddressResponse;
      }

      export namespace UsBeneficiaryDataResponse {
        export interface SsnIdentification {
          type: 'ssn';

          value: string;
        }

        export interface ItinIdentification {
          type: 'itin';

          value: string;
        }

        export interface UsResidentialAddressResponse {
          /**
           * City name.
           */
          city: string;

          /**
           * ISO 3166-1 alpha-2 country code.
           */
          country: 'US';

          /**
           * Postal or ZIP code.
           */
          postal_code: string;

          /**
           * Two-letter state code.
           */
          state: string;

          /**
           * Primary street address.
           */
          street_line_1: string;

          /**
           * Secondary street address (apartment, suite, etc.).
           */
          street_line_2: string | null;
        }

        export interface NonUsResidentialAddressResponse {
          /**
           * City name.
           */
          city: string;

          /**
           * ISO 3166-1 alpha-2 country code.
           */
          country:
            | 'AF'
            | 'AL'
            | 'DZ'
            | 'AS'
            | 'AD'
            | 'AO'
            | 'AI'
            | 'AQ'
            | 'AG'
            | 'AR'
            | 'AM'
            | 'AW'
            | 'AU'
            | 'AT'
            | 'AZ'
            | 'BS'
            | 'BH'
            | 'BD'
            | 'BB'
            | 'BY'
            | 'BE'
            | 'BZ'
            | 'BJ'
            | 'BM'
            | 'BT'
            | 'BO'
            | 'BA'
            | 'BW'
            | 'BV'
            | 'BR'
            | 'IO'
            | 'BN'
            | 'BG'
            | 'BF'
            | 'BI'
            | 'KH'
            | 'CM'
            | 'CA'
            | 'CV'
            | 'KY'
            | 'CF'
            | 'TD'
            | 'CL'
            | 'CN'
            | 'CX'
            | 'CC'
            | 'CO'
            | 'KM'
            | 'CG'
            | 'CD'
            | 'CK'
            | 'CR'
            | 'CI'
            | 'HR'
            | 'CU'
            | 'CY'
            | 'CZ'
            | 'DK'
            | 'DJ'
            | 'DM'
            | 'DO'
            | 'EC'
            | 'EG'
            | 'SV'
            | 'GQ'
            | 'ER'
            | 'EE'
            | 'ET'
            | 'FK'
            | 'FO'
            | 'FJ'
            | 'FI'
            | 'FR'
            | 'GF'
            | 'PF'
            | 'TF'
            | 'GA'
            | 'GM'
            | 'GE'
            | 'DE'
            | 'GH'
            | 'GI'
            | 'GR'
            | 'GL'
            | 'GD'
            | 'GP'
            | 'GU'
            | 'GT'
            | 'GN'
            | 'GW'
            | 'GY'
            | 'HT'
            | 'HM'
            | 'VA'
            | 'HN'
            | 'HK'
            | 'HU'
            | 'IS'
            | 'IN'
            | 'ID'
            | 'IR'
            | 'IQ'
            | 'IE'
            | 'IL'
            | 'IT'
            | 'JM'
            | 'JP'
            | 'JO'
            | 'KZ'
            | 'KE'
            | 'KI'
            | 'KP'
            | 'KR'
            | 'KW'
            | 'KG'
            | 'LA'
            | 'LV'
            | 'LB'
            | 'LS'
            | 'LR'
            | 'LY'
            | 'LI'
            | 'LT'
            | 'LU'
            | 'MO'
            | 'MG'
            | 'MW'
            | 'MY'
            | 'MV'
            | 'ML'
            | 'MT'
            | 'MH'
            | 'MQ'
            | 'MR'
            | 'MU'
            | 'YT'
            | 'MX'
            | 'FM'
            | 'MD'
            | 'MC'
            | 'MN'
            | 'MS'
            | 'MA'
            | 'MZ'
            | 'MM'
            | 'NA'
            | 'NR'
            | 'NP'
            | 'NL'
            | 'NC'
            | 'NZ'
            | 'NI'
            | 'NE'
            | 'NG'
            | 'NU'
            | 'NF'
            | 'MP'
            | 'MK'
            | 'NO'
            | 'OM'
            | 'PK'
            | 'PW'
            | 'PS'
            | 'PA'
            | 'PG'
            | 'PY'
            | 'PE'
            | 'PH'
            | 'PN'
            | 'PL'
            | 'PT'
            | 'PR'
            | 'QA'
            | 'RE'
            | 'RO'
            | 'RU'
            | 'RW'
            | 'SH'
            | 'KN'
            | 'LC'
            | 'PM'
            | 'VC'
            | 'WS'
            | 'SM'
            | 'ST'
            | 'SA'
            | 'SN'
            | 'SC'
            | 'SL'
            | 'SG'
            | 'SK'
            | 'SI'
            | 'SB'
            | 'SO'
            | 'ZA'
            | 'GS'
            | 'ES'
            | 'LK'
            | 'SD'
            | 'SR'
            | 'SJ'
            | 'SZ'
            | 'SE'
            | 'CH'
            | 'SY'
            | 'TW'
            | 'TJ'
            | 'TZ'
            | 'TH'
            | 'TL'
            | 'TG'
            | 'TK'
            | 'TO'
            | 'TT'
            | 'TN'
            | 'TR'
            | 'TM'
            | 'TC'
            | 'TV'
            | 'UG'
            | 'UA'
            | 'AE'
            | 'GB'
            | 'UM'
            | 'UY'
            | 'UZ'
            | 'VU'
            | 'VE'
            | 'VN'
            | 'VG'
            | 'VI'
            | 'WF'
            | 'EH'
            | 'YE'
            | 'ZM'
            | 'ZW'
            | 'AX'
            | 'BQ'
            | 'CW'
            | 'GG'
            | 'IM'
            | 'JE'
            | 'ME'
            | 'BL'
            | 'MF'
            | 'RS'
            | 'SX'
            | 'SS'
            | 'XK';

          /**
           * Postal or ZIP code.
           */
          postal_code: string;

          /**
           * Primary street address.
           */
          street_line_1: string;

          /**
           * Secondary street address (apartment, suite, etc.).
           */
          street_line_2: string | null;
        }
      }

      export interface NonUsBeneficiaryDataResponse {
        /**
         * ISO 3166-1 alpha-2 country code of citizenship.
         */
        country_of_citizenship:
          | 'AF'
          | 'AL'
          | 'DZ'
          | 'AS'
          | 'AD'
          | 'AO'
          | 'AI'
          | 'AQ'
          | 'AG'
          | 'AR'
          | 'AM'
          | 'AW'
          | 'AU'
          | 'AT'
          | 'AZ'
          | 'BS'
          | 'BH'
          | 'BD'
          | 'BB'
          | 'BY'
          | 'BE'
          | 'BZ'
          | 'BJ'
          | 'BM'
          | 'BT'
          | 'BO'
          | 'BA'
          | 'BW'
          | 'BV'
          | 'BR'
          | 'IO'
          | 'BN'
          | 'BG'
          | 'BF'
          | 'BI'
          | 'KH'
          | 'CM'
          | 'CA'
          | 'CV'
          | 'KY'
          | 'CF'
          | 'TD'
          | 'CL'
          | 'CN'
          | 'CX'
          | 'CC'
          | 'CO'
          | 'KM'
          | 'CG'
          | 'CD'
          | 'CK'
          | 'CR'
          | 'CI'
          | 'HR'
          | 'CU'
          | 'CY'
          | 'CZ'
          | 'DK'
          | 'DJ'
          | 'DM'
          | 'DO'
          | 'EC'
          | 'EG'
          | 'SV'
          | 'GQ'
          | 'ER'
          | 'EE'
          | 'ET'
          | 'FK'
          | 'FO'
          | 'FJ'
          | 'FI'
          | 'FR'
          | 'GF'
          | 'PF'
          | 'TF'
          | 'GA'
          | 'GM'
          | 'GE'
          | 'DE'
          | 'GH'
          | 'GI'
          | 'GR'
          | 'GL'
          | 'GD'
          | 'GP'
          | 'GU'
          | 'GT'
          | 'GN'
          | 'GW'
          | 'GY'
          | 'HT'
          | 'HM'
          | 'VA'
          | 'HN'
          | 'HK'
          | 'HU'
          | 'IS'
          | 'IN'
          | 'ID'
          | 'IR'
          | 'IQ'
          | 'IE'
          | 'IL'
          | 'IT'
          | 'JM'
          | 'JP'
          | 'JO'
          | 'KZ'
          | 'KE'
          | 'KI'
          | 'KP'
          | 'KR'
          | 'KW'
          | 'KG'
          | 'LA'
          | 'LV'
          | 'LB'
          | 'LS'
          | 'LR'
          | 'LY'
          | 'LI'
          | 'LT'
          | 'LU'
          | 'MO'
          | 'MG'
          | 'MW'
          | 'MY'
          | 'MV'
          | 'ML'
          | 'MT'
          | 'MH'
          | 'MQ'
          | 'MR'
          | 'MU'
          | 'YT'
          | 'MX'
          | 'FM'
          | 'MD'
          | 'MC'
          | 'MN'
          | 'MS'
          | 'MA'
          | 'MZ'
          | 'MM'
          | 'NA'
          | 'NR'
          | 'NP'
          | 'NL'
          | 'NC'
          | 'NZ'
          | 'NI'
          | 'NE'
          | 'NG'
          | 'NU'
          | 'NF'
          | 'MP'
          | 'MK'
          | 'NO'
          | 'OM'
          | 'PK'
          | 'PW'
          | 'PS'
          | 'PA'
          | 'PG'
          | 'PY'
          | 'PE'
          | 'PH'
          | 'PN'
          | 'PL'
          | 'PT'
          | 'PR'
          | 'QA'
          | 'RE'
          | 'RO'
          | 'RU'
          | 'RW'
          | 'SH'
          | 'KN'
          | 'LC'
          | 'PM'
          | 'VC'
          | 'WS'
          | 'SM'
          | 'ST'
          | 'SA'
          | 'SN'
          | 'SC'
          | 'SL'
          | 'SG'
          | 'SK'
          | 'SI'
          | 'SB'
          | 'SO'
          | 'ZA'
          | 'GS'
          | 'ES'
          | 'LK'
          | 'SD'
          | 'SR'
          | 'SJ'
          | 'SZ'
          | 'SE'
          | 'CH'
          | 'SY'
          | 'TW'
          | 'TJ'
          | 'TZ'
          | 'TH'
          | 'TL'
          | 'TG'
          | 'TK'
          | 'TO'
          | 'TT'
          | 'TN'
          | 'TR'
          | 'TM'
          | 'TC'
          | 'TV'
          | 'UG'
          | 'UA'
          | 'AE'
          | 'GB'
          | 'UM'
          | 'UY'
          | 'UZ'
          | 'VU'
          | 'VE'
          | 'VN'
          | 'VG'
          | 'VI'
          | 'WF'
          | 'EH'
          | 'YE'
          | 'ZM'
          | 'ZW'
          | 'AX'
          | 'BQ'
          | 'CW'
          | 'GG'
          | 'IM'
          | 'JE'
          | 'ME'
          | 'BL'
          | 'MF'
          | 'RS'
          | 'SX'
          | 'SS'
          | 'XK';

        /**
         * Date of birth as an ISO 8601 calendar date (YYYY-MM-DD).
         */
        date_of_birth: string;

        /**
         * Government-issued identification with type: "id" (generic government-issued ID).
         */
        identification: NonUsBeneficiaryDataResponse.Identification;

        /**
         * Full legal name of the account holder.
         */
        legal_name: string;

        /**
         * Residential address of the account holder.
         */
        residential_address:
          | NonUsBeneficiaryDataResponse.UsResidentialAddressResponse
          | NonUsBeneficiaryDataResponse.NonUsResidentialAddressResponse;
      }

      export namespace NonUsBeneficiaryDataResponse {
        /**
         * Government-issued identification with type: "id" (generic government-issued ID).
         */
        export interface Identification {
          type: 'id';

          value: string;
        }

        export interface UsResidentialAddressResponse {
          /**
           * City name.
           */
          city: string;

          /**
           * ISO 3166-1 alpha-2 country code.
           */
          country: 'US';

          /**
           * Postal or ZIP code.
           */
          postal_code: string;

          /**
           * Two-letter state code.
           */
          state: string;

          /**
           * Primary street address.
           */
          street_line_1: string;

          /**
           * Secondary street address (apartment, suite, etc.).
           */
          street_line_2: string | null;
        }

        export interface NonUsResidentialAddressResponse {
          /**
           * City name.
           */
          city: string;

          /**
           * ISO 3166-1 alpha-2 country code.
           */
          country:
            | 'AF'
            | 'AL'
            | 'DZ'
            | 'AS'
            | 'AD'
            | 'AO'
            | 'AI'
            | 'AQ'
            | 'AG'
            | 'AR'
            | 'AM'
            | 'AW'
            | 'AU'
            | 'AT'
            | 'AZ'
            | 'BS'
            | 'BH'
            | 'BD'
            | 'BB'
            | 'BY'
            | 'BE'
            | 'BZ'
            | 'BJ'
            | 'BM'
            | 'BT'
            | 'BO'
            | 'BA'
            | 'BW'
            | 'BV'
            | 'BR'
            | 'IO'
            | 'BN'
            | 'BG'
            | 'BF'
            | 'BI'
            | 'KH'
            | 'CM'
            | 'CA'
            | 'CV'
            | 'KY'
            | 'CF'
            | 'TD'
            | 'CL'
            | 'CN'
            | 'CX'
            | 'CC'
            | 'CO'
            | 'KM'
            | 'CG'
            | 'CD'
            | 'CK'
            | 'CR'
            | 'CI'
            | 'HR'
            | 'CU'
            | 'CY'
            | 'CZ'
            | 'DK'
            | 'DJ'
            | 'DM'
            | 'DO'
            | 'EC'
            | 'EG'
            | 'SV'
            | 'GQ'
            | 'ER'
            | 'EE'
            | 'ET'
            | 'FK'
            | 'FO'
            | 'FJ'
            | 'FI'
            | 'FR'
            | 'GF'
            | 'PF'
            | 'TF'
            | 'GA'
            | 'GM'
            | 'GE'
            | 'DE'
            | 'GH'
            | 'GI'
            | 'GR'
            | 'GL'
            | 'GD'
            | 'GP'
            | 'GU'
            | 'GT'
            | 'GN'
            | 'GW'
            | 'GY'
            | 'HT'
            | 'HM'
            | 'VA'
            | 'HN'
            | 'HK'
            | 'HU'
            | 'IS'
            | 'IN'
            | 'ID'
            | 'IR'
            | 'IQ'
            | 'IE'
            | 'IL'
            | 'IT'
            | 'JM'
            | 'JP'
            | 'JO'
            | 'KZ'
            | 'KE'
            | 'KI'
            | 'KP'
            | 'KR'
            | 'KW'
            | 'KG'
            | 'LA'
            | 'LV'
            | 'LB'
            | 'LS'
            | 'LR'
            | 'LY'
            | 'LI'
            | 'LT'
            | 'LU'
            | 'MO'
            | 'MG'
            | 'MW'
            | 'MY'
            | 'MV'
            | 'ML'
            | 'MT'
            | 'MH'
            | 'MQ'
            | 'MR'
            | 'MU'
            | 'YT'
            | 'MX'
            | 'FM'
            | 'MD'
            | 'MC'
            | 'MN'
            | 'MS'
            | 'MA'
            | 'MZ'
            | 'MM'
            | 'NA'
            | 'NR'
            | 'NP'
            | 'NL'
            | 'NC'
            | 'NZ'
            | 'NI'
            | 'NE'
            | 'NG'
            | 'NU'
            | 'NF'
            | 'MP'
            | 'MK'
            | 'NO'
            | 'OM'
            | 'PK'
            | 'PW'
            | 'PS'
            | 'PA'
            | 'PG'
            | 'PY'
            | 'PE'
            | 'PH'
            | 'PN'
            | 'PL'
            | 'PT'
            | 'PR'
            | 'QA'
            | 'RE'
            | 'RO'
            | 'RU'
            | 'RW'
            | 'SH'
            | 'KN'
            | 'LC'
            | 'PM'
            | 'VC'
            | 'WS'
            | 'SM'
            | 'ST'
            | 'SA'
            | 'SN'
            | 'SC'
            | 'SL'
            | 'SG'
            | 'SK'
            | 'SI'
            | 'SB'
            | 'SO'
            | 'ZA'
            | 'GS'
            | 'ES'
            | 'LK'
            | 'SD'
            | 'SR'
            | 'SJ'
            | 'SZ'
            | 'SE'
            | 'CH'
            | 'SY'
            | 'TW'
            | 'TJ'
            | 'TZ'
            | 'TH'
            | 'TL'
            | 'TG'
            | 'TK'
            | 'TO'
            | 'TT'
            | 'TN'
            | 'TR'
            | 'TM'
            | 'TC'
            | 'TV'
            | 'UG'
            | 'UA'
            | 'AE'
            | 'GB'
            | 'UM'
            | 'UY'
            | 'UZ'
            | 'VU'
            | 'VE'
            | 'VN'
            | 'VG'
            | 'VI'
            | 'WF'
            | 'EH'
            | 'YE'
            | 'ZM'
            | 'ZW'
            | 'AX'
            | 'BQ'
            | 'CW'
            | 'GG'
            | 'IM'
            | 'JE'
            | 'ME'
            | 'BL'
            | 'MF'
            | 'RS'
            | 'SX'
            | 'SS'
            | 'XK';

          /**
           * Postal or ZIP code.
           */
          postal_code: string;

          /**
           * Primary street address.
           */
          street_line_1: string;

          /**
           * Secondary street address (apartment, suite, etc.).
           */
          street_line_2: string | null;
        }
      }

      export interface UnionMember0 {
        /**
         * ISO 3166-1 alpha-2 country code of citizenship.
         */
        country_of_citizenship: 'US';

        /**
         * Date of birth as an ISO 8601 calendar date (YYYY-MM-DD).
         */
        date_of_birth: string;

        /**
         * Government-issued identification with type: "ssn" (Social Security Number,
         * format ###-##-####) or "itin" (Individual Taxpayer ID, format 9##-##-####).
         */
        identification: UnionMember0.SsnIdentification | UnionMember0.ItinIdentification;

        /**
         * Full legal name of the account holder.
         */
        legal_name: string;

        /**
         * Residential address of the account holder.
         */
        residential_address:
          | UnionMember0.UsResidentialAddressResponse
          | UnionMember0.NonUsResidentialAddressResponse;

        /**
         * Role of the control person at the business (e.g., "CEO", "President", "Managing
         * Director").
         */
        title: string;
      }

      export namespace UnionMember0 {
        export interface SsnIdentification {
          type: 'ssn';

          value: string;
        }

        export interface ItinIdentification {
          type: 'itin';

          value: string;
        }

        export interface UsResidentialAddressResponse {
          /**
           * City name.
           */
          city: string;

          /**
           * ISO 3166-1 alpha-2 country code.
           */
          country: 'US';

          /**
           * Postal or ZIP code.
           */
          postal_code: string;

          /**
           * Two-letter state code.
           */
          state: string;

          /**
           * Primary street address.
           */
          street_line_1: string;

          /**
           * Secondary street address (apartment, suite, etc.).
           */
          street_line_2: string | null;
        }

        export interface NonUsResidentialAddressResponse {
          /**
           * City name.
           */
          city: string;

          /**
           * ISO 3166-1 alpha-2 country code.
           */
          country:
            | 'AF'
            | 'AL'
            | 'DZ'
            | 'AS'
            | 'AD'
            | 'AO'
            | 'AI'
            | 'AQ'
            | 'AG'
            | 'AR'
            | 'AM'
            | 'AW'
            | 'AU'
            | 'AT'
            | 'AZ'
            | 'BS'
            | 'BH'
            | 'BD'
            | 'BB'
            | 'BY'
            | 'BE'
            | 'BZ'
            | 'BJ'
            | 'BM'
            | 'BT'
            | 'BO'
            | 'BA'
            | 'BW'
            | 'BV'
            | 'BR'
            | 'IO'
            | 'BN'
            | 'BG'
            | 'BF'
            | 'BI'
            | 'KH'
            | 'CM'
            | 'CA'
            | 'CV'
            | 'KY'
            | 'CF'
            | 'TD'
            | 'CL'
            | 'CN'
            | 'CX'
            | 'CC'
            | 'CO'
            | 'KM'
            | 'CG'
            | 'CD'
            | 'CK'
            | 'CR'
            | 'CI'
            | 'HR'
            | 'CU'
            | 'CY'
            | 'CZ'
            | 'DK'
            | 'DJ'
            | 'DM'
            | 'DO'
            | 'EC'
            | 'EG'
            | 'SV'
            | 'GQ'
            | 'ER'
            | 'EE'
            | 'ET'
            | 'FK'
            | 'FO'
            | 'FJ'
            | 'FI'
            | 'FR'
            | 'GF'
            | 'PF'
            | 'TF'
            | 'GA'
            | 'GM'
            | 'GE'
            | 'DE'
            | 'GH'
            | 'GI'
            | 'GR'
            | 'GL'
            | 'GD'
            | 'GP'
            | 'GU'
            | 'GT'
            | 'GN'
            | 'GW'
            | 'GY'
            | 'HT'
            | 'HM'
            | 'VA'
            | 'HN'
            | 'HK'
            | 'HU'
            | 'IS'
            | 'IN'
            | 'ID'
            | 'IR'
            | 'IQ'
            | 'IE'
            | 'IL'
            | 'IT'
            | 'JM'
            | 'JP'
            | 'JO'
            | 'KZ'
            | 'KE'
            | 'KI'
            | 'KP'
            | 'KR'
            | 'KW'
            | 'KG'
            | 'LA'
            | 'LV'
            | 'LB'
            | 'LS'
            | 'LR'
            | 'LY'
            | 'LI'
            | 'LT'
            | 'LU'
            | 'MO'
            | 'MG'
            | 'MW'
            | 'MY'
            | 'MV'
            | 'ML'
            | 'MT'
            | 'MH'
            | 'MQ'
            | 'MR'
            | 'MU'
            | 'YT'
            | 'MX'
            | 'FM'
            | 'MD'
            | 'MC'
            | 'MN'
            | 'MS'
            | 'MA'
            | 'MZ'
            | 'MM'
            | 'NA'
            | 'NR'
            | 'NP'
            | 'NL'
            | 'NC'
            | 'NZ'
            | 'NI'
            | 'NE'
            | 'NG'
            | 'NU'
            | 'NF'
            | 'MP'
            | 'MK'
            | 'NO'
            | 'OM'
            | 'PK'
            | 'PW'
            | 'PS'
            | 'PA'
            | 'PG'
            | 'PY'
            | 'PE'
            | 'PH'
            | 'PN'
            | 'PL'
            | 'PT'
            | 'PR'
            | 'QA'
            | 'RE'
            | 'RO'
            | 'RU'
            | 'RW'
            | 'SH'
            | 'KN'
            | 'LC'
            | 'PM'
            | 'VC'
            | 'WS'
            | 'SM'
            | 'ST'
            | 'SA'
            | 'SN'
            | 'SC'
            | 'SL'
            | 'SG'
            | 'SK'
            | 'SI'
            | 'SB'
            | 'SO'
            | 'ZA'
            | 'GS'
            | 'ES'
            | 'LK'
            | 'SD'
            | 'SR'
            | 'SJ'
            | 'SZ'
            | 'SE'
            | 'CH'
            | 'SY'
            | 'TW'
            | 'TJ'
            | 'TZ'
            | 'TH'
            | 'TL'
            | 'TG'
            | 'TK'
            | 'TO'
            | 'TT'
            | 'TN'
            | 'TR'
            | 'TM'
            | 'TC'
            | 'TV'
            | 'UG'
            | 'UA'
            | 'AE'
            | 'GB'
            | 'UM'
            | 'UY'
            | 'UZ'
            | 'VU'
            | 'VE'
            | 'VN'
            | 'VG'
            | 'VI'
            | 'WF'
            | 'EH'
            | 'YE'
            | 'ZM'
            | 'ZW'
            | 'AX'
            | 'BQ'
            | 'CW'
            | 'GG'
            | 'IM'
            | 'JE'
            | 'ME'
            | 'BL'
            | 'MF'
            | 'RS'
            | 'SX'
            | 'SS'
            | 'XK';

          /**
           * Postal or ZIP code.
           */
          postal_code: string;

          /**
           * Primary street address.
           */
          street_line_1: string;

          /**
           * Secondary street address (apartment, suite, etc.).
           */
          street_line_2: string | null;
        }
      }

      export interface UnionMember1 {
        /**
         * ISO 3166-1 alpha-2 country code of citizenship.
         */
        country_of_citizenship:
          | 'AF'
          | 'AL'
          | 'DZ'
          | 'AS'
          | 'AD'
          | 'AO'
          | 'AI'
          | 'AQ'
          | 'AG'
          | 'AR'
          | 'AM'
          | 'AW'
          | 'AU'
          | 'AT'
          | 'AZ'
          | 'BS'
          | 'BH'
          | 'BD'
          | 'BB'
          | 'BY'
          | 'BE'
          | 'BZ'
          | 'BJ'
          | 'BM'
          | 'BT'
          | 'BO'
          | 'BA'
          | 'BW'
          | 'BV'
          | 'BR'
          | 'IO'
          | 'BN'
          | 'BG'
          | 'BF'
          | 'BI'
          | 'KH'
          | 'CM'
          | 'CA'
          | 'CV'
          | 'KY'
          | 'CF'
          | 'TD'
          | 'CL'
          | 'CN'
          | 'CX'
          | 'CC'
          | 'CO'
          | 'KM'
          | 'CG'
          | 'CD'
          | 'CK'
          | 'CR'
          | 'CI'
          | 'HR'
          | 'CU'
          | 'CY'
          | 'CZ'
          | 'DK'
          | 'DJ'
          | 'DM'
          | 'DO'
          | 'EC'
          | 'EG'
          | 'SV'
          | 'GQ'
          | 'ER'
          | 'EE'
          | 'ET'
          | 'FK'
          | 'FO'
          | 'FJ'
          | 'FI'
          | 'FR'
          | 'GF'
          | 'PF'
          | 'TF'
          | 'GA'
          | 'GM'
          | 'GE'
          | 'DE'
          | 'GH'
          | 'GI'
          | 'GR'
          | 'GL'
          | 'GD'
          | 'GP'
          | 'GU'
          | 'GT'
          | 'GN'
          | 'GW'
          | 'GY'
          | 'HT'
          | 'HM'
          | 'VA'
          | 'HN'
          | 'HK'
          | 'HU'
          | 'IS'
          | 'IN'
          | 'ID'
          | 'IR'
          | 'IQ'
          | 'IE'
          | 'IL'
          | 'IT'
          | 'JM'
          | 'JP'
          | 'JO'
          | 'KZ'
          | 'KE'
          | 'KI'
          | 'KP'
          | 'KR'
          | 'KW'
          | 'KG'
          | 'LA'
          | 'LV'
          | 'LB'
          | 'LS'
          | 'LR'
          | 'LY'
          | 'LI'
          | 'LT'
          | 'LU'
          | 'MO'
          | 'MG'
          | 'MW'
          | 'MY'
          | 'MV'
          | 'ML'
          | 'MT'
          | 'MH'
          | 'MQ'
          | 'MR'
          | 'MU'
          | 'YT'
          | 'MX'
          | 'FM'
          | 'MD'
          | 'MC'
          | 'MN'
          | 'MS'
          | 'MA'
          | 'MZ'
          | 'MM'
          | 'NA'
          | 'NR'
          | 'NP'
          | 'NL'
          | 'NC'
          | 'NZ'
          | 'NI'
          | 'NE'
          | 'NG'
          | 'NU'
          | 'NF'
          | 'MP'
          | 'MK'
          | 'NO'
          | 'OM'
          | 'PK'
          | 'PW'
          | 'PS'
          | 'PA'
          | 'PG'
          | 'PY'
          | 'PE'
          | 'PH'
          | 'PN'
          | 'PL'
          | 'PT'
          | 'PR'
          | 'QA'
          | 'RE'
          | 'RO'
          | 'RU'
          | 'RW'
          | 'SH'
          | 'KN'
          | 'LC'
          | 'PM'
          | 'VC'
          | 'WS'
          | 'SM'
          | 'ST'
          | 'SA'
          | 'SN'
          | 'SC'
          | 'SL'
          | 'SG'
          | 'SK'
          | 'SI'
          | 'SB'
          | 'SO'
          | 'ZA'
          | 'GS'
          | 'ES'
          | 'LK'
          | 'SD'
          | 'SR'
          | 'SJ'
          | 'SZ'
          | 'SE'
          | 'CH'
          | 'SY'
          | 'TW'
          | 'TJ'
          | 'TZ'
          | 'TH'
          | 'TL'
          | 'TG'
          | 'TK'
          | 'TO'
          | 'TT'
          | 'TN'
          | 'TR'
          | 'TM'
          | 'TC'
          | 'TV'
          | 'UG'
          | 'UA'
          | 'AE'
          | 'GB'
          | 'UM'
          | 'UY'
          | 'UZ'
          | 'VU'
          | 'VE'
          | 'VN'
          | 'VG'
          | 'VI'
          | 'WF'
          | 'EH'
          | 'YE'
          | 'ZM'
          | 'ZW'
          | 'AX'
          | 'BQ'
          | 'CW'
          | 'GG'
          | 'IM'
          | 'JE'
          | 'ME'
          | 'BL'
          | 'MF'
          | 'RS'
          | 'SX'
          | 'SS'
          | 'XK';

        /**
         * Date of birth as an ISO 8601 calendar date (YYYY-MM-DD).
         */
        date_of_birth: string;

        /**
         * Government-issued identification with type: "id" (generic government-issued ID).
         */
        identification: UnionMember1.Identification;

        /**
         * Full legal name of the account holder.
         */
        legal_name: string;

        /**
         * Residential address of the account holder.
         */
        residential_address:
          | UnionMember1.UsResidentialAddressResponse
          | UnionMember1.NonUsResidentialAddressResponse;

        /**
         * Role of the control person at the business (e.g., "CEO", "President", "Managing
         * Director").
         */
        title: string;
      }

      export namespace UnionMember1 {
        /**
         * Government-issued identification with type: "id" (generic government-issued ID).
         */
        export interface Identification {
          type: 'id';

          value: string;
        }

        export interface UsResidentialAddressResponse {
          /**
           * City name.
           */
          city: string;

          /**
           * ISO 3166-1 alpha-2 country code.
           */
          country: 'US';

          /**
           * Postal or ZIP code.
           */
          postal_code: string;

          /**
           * Two-letter state code.
           */
          state: string;

          /**
           * Primary street address.
           */
          street_line_1: string;

          /**
           * Secondary street address (apartment, suite, etc.).
           */
          street_line_2: string | null;
        }

        export interface NonUsResidentialAddressResponse {
          /**
           * City name.
           */
          city: string;

          /**
           * ISO 3166-1 alpha-2 country code.
           */
          country:
            | 'AF'
            | 'AL'
            | 'DZ'
            | 'AS'
            | 'AD'
            | 'AO'
            | 'AI'
            | 'AQ'
            | 'AG'
            | 'AR'
            | 'AM'
            | 'AW'
            | 'AU'
            | 'AT'
            | 'AZ'
            | 'BS'
            | 'BH'
            | 'BD'
            | 'BB'
            | 'BY'
            | 'BE'
            | 'BZ'
            | 'BJ'
            | 'BM'
            | 'BT'
            | 'BO'
            | 'BA'
            | 'BW'
            | 'BV'
            | 'BR'
            | 'IO'
            | 'BN'
            | 'BG'
            | 'BF'
            | 'BI'
            | 'KH'
            | 'CM'
            | 'CA'
            | 'CV'
            | 'KY'
            | 'CF'
            | 'TD'
            | 'CL'
            | 'CN'
            | 'CX'
            | 'CC'
            | 'CO'
            | 'KM'
            | 'CG'
            | 'CD'
            | 'CK'
            | 'CR'
            | 'CI'
            | 'HR'
            | 'CU'
            | 'CY'
            | 'CZ'
            | 'DK'
            | 'DJ'
            | 'DM'
            | 'DO'
            | 'EC'
            | 'EG'
            | 'SV'
            | 'GQ'
            | 'ER'
            | 'EE'
            | 'ET'
            | 'FK'
            | 'FO'
            | 'FJ'
            | 'FI'
            | 'FR'
            | 'GF'
            | 'PF'
            | 'TF'
            | 'GA'
            | 'GM'
            | 'GE'
            | 'DE'
            | 'GH'
            | 'GI'
            | 'GR'
            | 'GL'
            | 'GD'
            | 'GP'
            | 'GU'
            | 'GT'
            | 'GN'
            | 'GW'
            | 'GY'
            | 'HT'
            | 'HM'
            | 'VA'
            | 'HN'
            | 'HK'
            | 'HU'
            | 'IS'
            | 'IN'
            | 'ID'
            | 'IR'
            | 'IQ'
            | 'IE'
            | 'IL'
            | 'IT'
            | 'JM'
            | 'JP'
            | 'JO'
            | 'KZ'
            | 'KE'
            | 'KI'
            | 'KP'
            | 'KR'
            | 'KW'
            | 'KG'
            | 'LA'
            | 'LV'
            | 'LB'
            | 'LS'
            | 'LR'
            | 'LY'
            | 'LI'
            | 'LT'
            | 'LU'
            | 'MO'
            | 'MG'
            | 'MW'
            | 'MY'
            | 'MV'
            | 'ML'
            | 'MT'
            | 'MH'
            | 'MQ'
            | 'MR'
            | 'MU'
            | 'YT'
            | 'MX'
            | 'FM'
            | 'MD'
            | 'MC'
            | 'MN'
            | 'MS'
            | 'MA'
            | 'MZ'
            | 'MM'
            | 'NA'
            | 'NR'
            | 'NP'
            | 'NL'
            | 'NC'
            | 'NZ'
            | 'NI'
            | 'NE'
            | 'NG'
            | 'NU'
            | 'NF'
            | 'MP'
            | 'MK'
            | 'NO'
            | 'OM'
            | 'PK'
            | 'PW'
            | 'PS'
            | 'PA'
            | 'PG'
            | 'PY'
            | 'PE'
            | 'PH'
            | 'PN'
            | 'PL'
            | 'PT'
            | 'PR'
            | 'QA'
            | 'RE'
            | 'RO'
            | 'RU'
            | 'RW'
            | 'SH'
            | 'KN'
            | 'LC'
            | 'PM'
            | 'VC'
            | 'WS'
            | 'SM'
            | 'ST'
            | 'SA'
            | 'SN'
            | 'SC'
            | 'SL'
            | 'SG'
            | 'SK'
            | 'SI'
            | 'SB'
            | 'SO'
            | 'ZA'
            | 'GS'
            | 'ES'
            | 'LK'
            | 'SD'
            | 'SR'
            | 'SJ'
            | 'SZ'
            | 'SE'
            | 'CH'
            | 'SY'
            | 'TW'
            | 'TJ'
            | 'TZ'
            | 'TH'
            | 'TL'
            | 'TG'
            | 'TK'
            | 'TO'
            | 'TT'
            | 'TN'
            | 'TR'
            | 'TM'
            | 'TC'
            | 'TV'
            | 'UG'
            | 'UA'
            | 'AE'
            | 'GB'
            | 'UM'
            | 'UY'
            | 'UZ'
            | 'VU'
            | 'VE'
            | 'VN'
            | 'VG'
            | 'VI'
            | 'WF'
            | 'EH'
            | 'YE'
            | 'ZM'
            | 'ZW'
            | 'AX'
            | 'BQ'
            | 'CW'
            | 'GG'
            | 'IM'
            | 'JE'
            | 'ME'
            | 'BL'
            | 'MF'
            | 'RS'
            | 'SX'
            | 'SS'
            | 'XK';

          /**
           * Postal or ZIP code.
           */
          postal_code: string;

          /**
           * Primary street address.
           */
          street_line_1: string;

          /**
           * Secondary street address (apartment, suite, etc.).
           */
          street_line_2: string | null;
        }
      }

      export interface UsResidentialAddressResponse {
        /**
         * City name.
         */
        city: string;

        /**
         * ISO 3166-1 alpha-2 country code.
         */
        country: 'US';

        /**
         * Postal or ZIP code.
         */
        postal_code: string;

        /**
         * Two-letter state code.
         */
        state: string;

        /**
         * Primary street address.
         */
        street_line_1: string;

        /**
         * Secondary street address (apartment, suite, etc.).
         */
        street_line_2: string | null;
      }

      export interface NonUsResidentialAddressResponse {
        /**
         * City name.
         */
        city: string;

        /**
         * ISO 3166-1 alpha-2 country code.
         */
        country:
          | 'AF'
          | 'AL'
          | 'DZ'
          | 'AS'
          | 'AD'
          | 'AO'
          | 'AI'
          | 'AQ'
          | 'AG'
          | 'AR'
          | 'AM'
          | 'AW'
          | 'AU'
          | 'AT'
          | 'AZ'
          | 'BS'
          | 'BH'
          | 'BD'
          | 'BB'
          | 'BY'
          | 'BE'
          | 'BZ'
          | 'BJ'
          | 'BM'
          | 'BT'
          | 'BO'
          | 'BA'
          | 'BW'
          | 'BV'
          | 'BR'
          | 'IO'
          | 'BN'
          | 'BG'
          | 'BF'
          | 'BI'
          | 'KH'
          | 'CM'
          | 'CA'
          | 'CV'
          | 'KY'
          | 'CF'
          | 'TD'
          | 'CL'
          | 'CN'
          | 'CX'
          | 'CC'
          | 'CO'
          | 'KM'
          | 'CG'
          | 'CD'
          | 'CK'
          | 'CR'
          | 'CI'
          | 'HR'
          | 'CU'
          | 'CY'
          | 'CZ'
          | 'DK'
          | 'DJ'
          | 'DM'
          | 'DO'
          | 'EC'
          | 'EG'
          | 'SV'
          | 'GQ'
          | 'ER'
          | 'EE'
          | 'ET'
          | 'FK'
          | 'FO'
          | 'FJ'
          | 'FI'
          | 'FR'
          | 'GF'
          | 'PF'
          | 'TF'
          | 'GA'
          | 'GM'
          | 'GE'
          | 'DE'
          | 'GH'
          | 'GI'
          | 'GR'
          | 'GL'
          | 'GD'
          | 'GP'
          | 'GU'
          | 'GT'
          | 'GN'
          | 'GW'
          | 'GY'
          | 'HT'
          | 'HM'
          | 'VA'
          | 'HN'
          | 'HK'
          | 'HU'
          | 'IS'
          | 'IN'
          | 'ID'
          | 'IR'
          | 'IQ'
          | 'IE'
          | 'IL'
          | 'IT'
          | 'JM'
          | 'JP'
          | 'JO'
          | 'KZ'
          | 'KE'
          | 'KI'
          | 'KP'
          | 'KR'
          | 'KW'
          | 'KG'
          | 'LA'
          | 'LV'
          | 'LB'
          | 'LS'
          | 'LR'
          | 'LY'
          | 'LI'
          | 'LT'
          | 'LU'
          | 'MO'
          | 'MG'
          | 'MW'
          | 'MY'
          | 'MV'
          | 'ML'
          | 'MT'
          | 'MH'
          | 'MQ'
          | 'MR'
          | 'MU'
          | 'YT'
          | 'MX'
          | 'FM'
          | 'MD'
          | 'MC'
          | 'MN'
          | 'MS'
          | 'MA'
          | 'MZ'
          | 'MM'
          | 'NA'
          | 'NR'
          | 'NP'
          | 'NL'
          | 'NC'
          | 'NZ'
          | 'NI'
          | 'NE'
          | 'NG'
          | 'NU'
          | 'NF'
          | 'MP'
          | 'MK'
          | 'NO'
          | 'OM'
          | 'PK'
          | 'PW'
          | 'PS'
          | 'PA'
          | 'PG'
          | 'PY'
          | 'PE'
          | 'PH'
          | 'PN'
          | 'PL'
          | 'PT'
          | 'PR'
          | 'QA'
          | 'RE'
          | 'RO'
          | 'RU'
          | 'RW'
          | 'SH'
          | 'KN'
          | 'LC'
          | 'PM'
          | 'VC'
          | 'WS'
          | 'SM'
          | 'ST'
          | 'SA'
          | 'SN'
          | 'SC'
          | 'SL'
          | 'SG'
          | 'SK'
          | 'SI'
          | 'SB'
          | 'SO'
          | 'ZA'
          | 'GS'
          | 'ES'
          | 'LK'
          | 'SD'
          | 'SR'
          | 'SJ'
          | 'SZ'
          | 'SE'
          | 'CH'
          | 'SY'
          | 'TW'
          | 'TJ'
          | 'TZ'
          | 'TH'
          | 'TL'
          | 'TG'
          | 'TK'
          | 'TO'
          | 'TT'
          | 'TN'
          | 'TR'
          | 'TM'
          | 'TC'
          | 'TV'
          | 'UG'
          | 'UA'
          | 'AE'
          | 'GB'
          | 'UM'
          | 'UY'
          | 'UZ'
          | 'VU'
          | 'VE'
          | 'VN'
          | 'VG'
          | 'VI'
          | 'WF'
          | 'EH'
          | 'YE'
          | 'ZM'
          | 'ZW'
          | 'AX'
          | 'BQ'
          | 'CW'
          | 'GG'
          | 'IM'
          | 'JE'
          | 'ME'
          | 'BL'
          | 'MF'
          | 'RS'
          | 'SX'
          | 'SS'
          | 'XK';

        /**
         * Postal or ZIP code.
         */
        postal_code: string;

        /**
         * Primary street address.
         */
        street_line_1: string;

        /**
         * Secondary street address (apartment, suite, etc.).
         */
        street_line_2: string | null;
      }

      export interface UsResidentialAddressResponse {
        /**
         * City name.
         */
        city: string;

        /**
         * ISO 3166-1 alpha-2 country code.
         */
        country: 'US';

        /**
         * Postal or ZIP code.
         */
        postal_code: string;

        /**
         * Two-letter state code.
         */
        state: string;

        /**
         * Primary street address.
         */
        street_line_1: string;

        /**
         * Secondary street address (apartment, suite, etc.).
         */
        street_line_2: string | null;
      }

      export interface NonUsResidentialAddressResponse {
        /**
         * City name.
         */
        city: string;

        /**
         * ISO 3166-1 alpha-2 country code.
         */
        country:
          | 'AF'
          | 'AL'
          | 'DZ'
          | 'AS'
          | 'AD'
          | 'AO'
          | 'AI'
          | 'AQ'
          | 'AG'
          | 'AR'
          | 'AM'
          | 'AW'
          | 'AU'
          | 'AT'
          | 'AZ'
          | 'BS'
          | 'BH'
          | 'BD'
          | 'BB'
          | 'BY'
          | 'BE'
          | 'BZ'
          | 'BJ'
          | 'BM'
          | 'BT'
          | 'BO'
          | 'BA'
          | 'BW'
          | 'BV'
          | 'BR'
          | 'IO'
          | 'BN'
          | 'BG'
          | 'BF'
          | 'BI'
          | 'KH'
          | 'CM'
          | 'CA'
          | 'CV'
          | 'KY'
          | 'CF'
          | 'TD'
          | 'CL'
          | 'CN'
          | 'CX'
          | 'CC'
          | 'CO'
          | 'KM'
          | 'CG'
          | 'CD'
          | 'CK'
          | 'CR'
          | 'CI'
          | 'HR'
          | 'CU'
          | 'CY'
          | 'CZ'
          | 'DK'
          | 'DJ'
          | 'DM'
          | 'DO'
          | 'EC'
          | 'EG'
          | 'SV'
          | 'GQ'
          | 'ER'
          | 'EE'
          | 'ET'
          | 'FK'
          | 'FO'
          | 'FJ'
          | 'FI'
          | 'FR'
          | 'GF'
          | 'PF'
          | 'TF'
          | 'GA'
          | 'GM'
          | 'GE'
          | 'DE'
          | 'GH'
          | 'GI'
          | 'GR'
          | 'GL'
          | 'GD'
          | 'GP'
          | 'GU'
          | 'GT'
          | 'GN'
          | 'GW'
          | 'GY'
          | 'HT'
          | 'HM'
          | 'VA'
          | 'HN'
          | 'HK'
          | 'HU'
          | 'IS'
          | 'IN'
          | 'ID'
          | 'IR'
          | 'IQ'
          | 'IE'
          | 'IL'
          | 'IT'
          | 'JM'
          | 'JP'
          | 'JO'
          | 'KZ'
          | 'KE'
          | 'KI'
          | 'KP'
          | 'KR'
          | 'KW'
          | 'KG'
          | 'LA'
          | 'LV'
          | 'LB'
          | 'LS'
          | 'LR'
          | 'LY'
          | 'LI'
          | 'LT'
          | 'LU'
          | 'MO'
          | 'MG'
          | 'MW'
          | 'MY'
          | 'MV'
          | 'ML'
          | 'MT'
          | 'MH'
          | 'MQ'
          | 'MR'
          | 'MU'
          | 'YT'
          | 'MX'
          | 'FM'
          | 'MD'
          | 'MC'
          | 'MN'
          | 'MS'
          | 'MA'
          | 'MZ'
          | 'MM'
          | 'NA'
          | 'NR'
          | 'NP'
          | 'NL'
          | 'NC'
          | 'NZ'
          | 'NI'
          | 'NE'
          | 'NG'
          | 'NU'
          | 'NF'
          | 'MP'
          | 'MK'
          | 'NO'
          | 'OM'
          | 'PK'
          | 'PW'
          | 'PS'
          | 'PA'
          | 'PG'
          | 'PY'
          | 'PE'
          | 'PH'
          | 'PN'
          | 'PL'
          | 'PT'
          | 'PR'
          | 'QA'
          | 'RE'
          | 'RO'
          | 'RU'
          | 'RW'
          | 'SH'
          | 'KN'
          | 'LC'
          | 'PM'
          | 'VC'
          | 'WS'
          | 'SM'
          | 'ST'
          | 'SA'
          | 'SN'
          | 'SC'
          | 'SL'
          | 'SG'
          | 'SK'
          | 'SI'
          | 'SB'
          | 'SO'
          | 'ZA'
          | 'GS'
          | 'ES'
          | 'LK'
          | 'SD'
          | 'SR'
          | 'SJ'
          | 'SZ'
          | 'SE'
          | 'CH'
          | 'SY'
          | 'TW'
          | 'TJ'
          | 'TZ'
          | 'TH'
          | 'TL'
          | 'TG'
          | 'TK'
          | 'TO'
          | 'TT'
          | 'TN'
          | 'TR'
          | 'TM'
          | 'TC'
          | 'TV'
          | 'UG'
          | 'UA'
          | 'AE'
          | 'GB'
          | 'UM'
          | 'UY'
          | 'UZ'
          | 'VU'
          | 'VE'
          | 'VN'
          | 'VG'
          | 'VI'
          | 'WF'
          | 'EH'
          | 'YE'
          | 'ZM'
          | 'ZW'
          | 'AX'
          | 'BQ'
          | 'CW'
          | 'GG'
          | 'IM'
          | 'JE'
          | 'ME'
          | 'BL'
          | 'MF'
          | 'RS'
          | 'SX'
          | 'SS'
          | 'XK';

        /**
         * Postal or ZIP code.
         */
        postal_code: string;

        /**
         * Primary street address.
         */
        street_line_1: string;

        /**
         * Secondary street address (apartment, suite, etc.).
         */
        street_line_2: string | null;
      }

      export interface EinIdentification {
        type: 'ein';

        value: string;
      }

      export interface SsnIdentification {
        type: 'ssn';

        value: string;
      }
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
  | AccountHolderActiveWebhookEvent
  | AccountHolderClosedWebhookEvent
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
    type AccountHolderActiveWebhookEvent as AccountHolderActiveWebhookEvent,
    type AccountHolderClosedWebhookEvent as AccountHolderClosedWebhookEvent,
    type PingTestWebhookEvent as PingTestWebhookEvent,
    type UnwrapWebhookEvent as UnwrapWebhookEvent,
  };
}
