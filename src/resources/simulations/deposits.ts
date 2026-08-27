// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Deposits extends APIResource {
  /**
   * Initiates an incoming deposit through the sandbox provider pipeline. This
   * endpoint is unavailable in live production.
   *
   * @example
   * ```ts
   * const deposit = await client.simulations.deposits.create({
   *   account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   amount: '869.225610155',
   *   currency: 'EUR',
   * });
   * ```
   */
  create(body: DepositCreateParams, options?: RequestOptions): APIPromise<DepositCreateResponse> {
    return this._client.post('/v1/simulations/deposits', { body, ...options });
  }
}

export interface DepositCreateResponse {
  /**
   * Account receiving the simulated deposit.
   */
  account_id: string;

  /**
   * Simulated amount as a decimal string.
   */
  amount: string;

  /**
   * Currency of the receiving account.
   */
  currency: 'EUR' | 'GBP' | 'USD' | 'USDC';

  /**
   * Payment rail used for the simulated deposit.
   */
  rail:
    | 'sepa_instant'
    | 'sepa_credit_transfer'
    | 't2'
    | 'ach'
    | 'fedwire'
    | 'swift'
    | 'faster_payments'
    | null;

  /**
   * Whether the simulation submission was successful.
   */
  success: boolean;

  /**
   * Resource type discriminator.
   */
  type: 'deposit_simulation';

  /**
   * ISO 20022 unstructured remittance information (<RmtInf>/<Ustrd>), or null when
   * omitted.
   */
  unstructured_remittance_information: string | null;
}

export interface DepositCreateParams {
  /**
   * ID of the account to credit with the simulated deposit.
   */
  account_id: string;

  /**
   * Amount as a decimal string in the account currency (e.g. "100.50").
   */
  amount: string;

  /**
   * Currency of the simulated deposit.
   */
  currency: 'EUR' | 'GBP' | 'USD' | 'USDC';

  /**
   * Sender of the simulated deposit.
   */
  counterparty?: DepositCreateParams.Counterparty;

  /**
   * Payment rail the simulated deposit arrives on.
   */
  rail?: 'sepa_instant' | 'sepa_credit_transfer' | 't2' | 'ach' | 'fedwire' | 'swift' | 'faster_payments';

  /**
   * Unstructured remittance information attached to the transfer. Not all rails
   * support this field.
   */
  unstructured_remittance_information?: string;
}

export namespace DepositCreateParams {
  /**
   * Sender of the simulated deposit.
   */
  export interface Counterparty {
    /**
     * Financial address of the counterparty.
     */
    financial_address:
      | Counterparty.IbanFinancialAddressRequest
      | Counterparty.SortCodeFinancialAddress
      | Counterparty.AbaFinancialAddress
      | Counterparty.CryptoWalletFinancialAddress;

    /**
     * Physical address of the counterparty.
     */
    physical_address?: Counterparty.PhysicalAddress | null;
  }

  export namespace Counterparty {
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

    export interface CryptoWalletFinancialAddress {
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
     * Physical address of the counterparty.
     */
    export interface PhysicalAddress {
      /**
       * City or locality.
       */
      city: string;

      /**
       * ISO 3166-1 alpha-2 country code.
       */
      country_code:
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
       * Primary street address.
       */
      line_1: string;

      /**
       * Secondary street address, or null if not recorded.
       */
      line_2: string | null;

      /**
       * Postal or ZIP code.
       */
      postal_code: string;

      /**
       * State, province, or region, or null if not recorded.
       */
      state: string | null;
    }
  }
}

export declare namespace Deposits {
  export {
    type DepositCreateResponse as DepositCreateResponse,
    type DepositCreateParams as DepositCreateParams,
  };
}
