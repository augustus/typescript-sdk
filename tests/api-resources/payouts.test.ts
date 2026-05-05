// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Augustus from '@agsts/typescript-sdk';

const client = new Augustus({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource payouts', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.payouts.create({
      amount: 'amount',
      currency: 'EUR',
      destination: {
        account_holder_name: 'account_holder_name',
        iban: 'iban',
        type: 'iban',
      },
      reference: 'reference',
      source_account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
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
    const response = await client.payouts.create({
      amount: 'amount',
      currency: 'EUR',
      destination: {
        account_holder_name: 'account_holder_name',
        iban: 'iban',
        type: 'iban',
        bic: 'bic',
      },
      reference: 'reference',
      source_account_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      metadata: { foo: 'string' },
      rail: 'sepa_instant',
    });
  });

  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.payouts.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.payouts.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.payouts.list(
        {
          created_at: { gte: '2019-12-27T18:11:19.117Z', lte: '2019-12-27T18:11:19.117Z' },
          currencies: ['EUR'],
          cursor: 'cursor',
          limit: 2,
          status: 'pending',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Augustus.NotFoundError);
  });
});
