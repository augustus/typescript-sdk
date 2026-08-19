// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Augustus from '@augustusbank/typescript-sdk';

const client = new Augustus({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource conversions', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.conversions.create({
      source_account_id: '550e8400-e29b-41d4-a716-44665544000b',
      source_amount: '100.50',
      target_account_id: '550e8400-e29b-41d4-a716-44665544000c',
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
    const response = await client.conversions.create({
      source_account_id: '550e8400-e29b-41d4-a716-44665544000b',
      source_amount: '100.50',
      target_account_id: '550e8400-e29b-41d4-a716-44665544000c',
      metadata: { invoice_id: 'INV-2026-0042' },
    });
  });

  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.conversions.retrieve('550e8400-e29b-41d4-a716-446655440006');
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
    const responsePromise = client.conversions.list();
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
      client.conversions.list(
        {
          cursor: 'cursor',
          limit: 1,
          source_currency: 'EUR',
          status: 'pending',
          target_currency: 'EUR',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Augustus.NotFoundError);
  });
});
