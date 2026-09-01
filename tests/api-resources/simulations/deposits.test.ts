// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Augustus from '@augustusbank/typescript-sdk';

const client = new Augustus({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource deposits', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.simulations.deposits.create({
      account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      amount: '869.225610155',
      currency: 'EUR',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.simulations.deposits.create({
      account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      amount: '869.225610155',
      currency: 'EUR',
      counterparty: {
        financial_address: {
          account_holder_name: 'Acme Sandbox Ltd.',
          iban: 'DE89370400440532013000',
          type: 'iban',
          bic: 'COBADEFFXXX',
        },
        physical_address: {
          city: 'city',
          country_code: 'DE',
          line_1: 'line_1',
          line_2: 'line_2',
          postal_code: 'postal_code',
          state: 'state',
        },
      },
      rail: 'sepa',
      unstructured_remittance_information: 'x',
    });
  });
});
