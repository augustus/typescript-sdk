// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Augustus from '@augustusbank/typescript-sdk';

const client = new Augustus({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource transactions', () => {
  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.transactions.retrieve('550e8400-e29b-41d4-a716-44665544000d');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list: only required params', async () => {
    const responsePromise = client.transactions.list({ account_id: '550e8400-e29b-41d4-a716-446655440001' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list: required and optional params', async () => {
    const response = await client.transactions.list({
      account_id: '550e8400-e29b-41d4-a716-446655440001',
      created_at: { gte: '2026-01-01T00:00:00Z', lte: '2026-02-01T00:00:00Z' },
      cursor: 'cursor',
      limit: 1,
    });
  });
});
