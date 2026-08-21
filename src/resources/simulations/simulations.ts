// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as DepositsAPI from './deposits';
import { DepositCreateParams, DepositCreateResponse, Deposits } from './deposits';
import * as PayoutsAPI from './payouts';
import { PayoutRejectParams, PayoutRejectResponse, PayoutSendResponse, Payouts } from './payouts';

export class Simulations extends APIResource {
  deposits: DepositsAPI.Deposits = new DepositsAPI.Deposits(this._client);
  payouts: PayoutsAPI.Payouts = new PayoutsAPI.Payouts(this._client);
}

Simulations.Deposits = Deposits;
Simulations.Payouts = Payouts;

export declare namespace Simulations {
  export {
    Deposits as Deposits,
    type DepositCreateResponse as DepositCreateResponse,
    type DepositCreateParams as DepositCreateParams,
  };

  export {
    Payouts as Payouts,
    type PayoutRejectResponse as PayoutRejectResponse,
    type PayoutSendResponse as PayoutSendResponse,
    type PayoutRejectParams as PayoutRejectParams,
  };
}
