// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AccountProgramsAPI from './account-programs';
import {
  AccountProgramCloseParams,
  AccountProgramCloseResponse,
  AccountProgramCreateParams,
  AccountProgramCreateResponse,
  AccountProgramDrainParams,
  AccountProgramDrainResponse,
  AccountProgramFreezeResponse,
  AccountProgramUnfreezeResponse,
  AccountPrograms,
} from './account-programs';
import * as AccountsAPI from './accounts';
import {
  AccountCloseParams,
  AccountCloseResponse,
  AccountCreateParams,
  AccountCreateResponse,
  AccountDrainParams,
  AccountDrainResponse,
  AccountFreezeResponse,
  AccountUnfreezeResponse,
  Accounts,
} from './accounts';
import * as ConversionsAPI from './conversions';
import { ConversionCompleteResponse, ConversionFailResponse, Conversions } from './conversions';
import * as DepositsAPI from './deposits';
import { DepositCreateParams, DepositCreateResponse, Deposits } from './deposits';
import * as PayoutsAPI from './payouts';
import { PayoutRejectParams, PayoutRejectResponse, PayoutSendResponse, Payouts } from './payouts';

export class Simulations extends APIResource {
  deposits: DepositsAPI.Deposits = new DepositsAPI.Deposits(this._client);
  conversions: ConversionsAPI.Conversions = new ConversionsAPI.Conversions(this._client);
  payouts: PayoutsAPI.Payouts = new PayoutsAPI.Payouts(this._client);
  accountPrograms: AccountProgramsAPI.AccountPrograms = new AccountProgramsAPI.AccountPrograms(this._client);
  accounts: AccountsAPI.Accounts = new AccountsAPI.Accounts(this._client);
}

Simulations.Deposits = Deposits;
Simulations.Conversions = Conversions;
Simulations.Payouts = Payouts;
Simulations.AccountPrograms = AccountPrograms;
Simulations.Accounts = Accounts;

export declare namespace Simulations {
  export {
    Deposits as Deposits,
    type DepositCreateResponse as DepositCreateResponse,
    type DepositCreateParams as DepositCreateParams,
  };

  export {
    Conversions as Conversions,
    type ConversionCompleteResponse as ConversionCompleteResponse,
    type ConversionFailResponse as ConversionFailResponse,
  };

  export {
    Payouts as Payouts,
    type PayoutRejectResponse as PayoutRejectResponse,
    type PayoutSendResponse as PayoutSendResponse,
    type PayoutRejectParams as PayoutRejectParams,
  };

  export {
    AccountPrograms as AccountPrograms,
    type AccountProgramCreateResponse as AccountProgramCreateResponse,
    type AccountProgramCloseResponse as AccountProgramCloseResponse,
    type AccountProgramDrainResponse as AccountProgramDrainResponse,
    type AccountProgramFreezeResponse as AccountProgramFreezeResponse,
    type AccountProgramUnfreezeResponse as AccountProgramUnfreezeResponse,
    type AccountProgramCreateParams as AccountProgramCreateParams,
    type AccountProgramCloseParams as AccountProgramCloseParams,
    type AccountProgramDrainParams as AccountProgramDrainParams,
  };

  export {
    Accounts as Accounts,
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
