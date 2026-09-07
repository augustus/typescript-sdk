// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as IndicativeAPI from './indicative';
import { Indicative, IndicativeRetrieveParams, IndicativeRetrieveResponse } from './indicative';

export class Quotes extends APIResource {
  indicative: IndicativeAPI.Indicative = new IndicativeAPI.Indicative(this._client);
}

Quotes.Indicative = Indicative;

export declare namespace Quotes {
  export {
    Indicative as Indicative,
    type IndicativeRetrieveResponse as IndicativeRetrieveResponse,
    type IndicativeRetrieveParams as IndicativeRetrieveParams,
  };
}
