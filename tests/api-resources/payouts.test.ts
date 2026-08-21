// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Augustus from '@augustusbank/typescript-sdk';

const client = new Augustus({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource payouts', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.payouts.create({
      account_id: '550e8400-e29b-41d4-a716-44665544000b',
      amount: '100.50',
      counterparty: {
        financial_address: {
          account_holder_name: 'Acme Sandbox Ltd.',
          bic: 'COBADEFFXXX',
          iban: 'DE89370400440532013000',
          type: 'iban',
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
      counterparty_id: '550e8400-e29b-41d4-a716-446655440000',
      currency: 'EUR',
      metadata: { invoice_id: 'INV-2026-0042' },
      rail: 'sepa',
      unstructured_remittance_information: 'INV-2026-0042',
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
      account_id: '550e8400-e29b-41d4-a716-44665544000b',
      amount: '100.50',
      counterparty: {
        financial_address: {
          account_holder_name: 'Acme Sandbox Ltd.',
          bic: 'COBADEFFXXX',
          iban: 'DE89370400440532013000',
          type: 'iban',
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
      counterparty_id: '550e8400-e29b-41d4-a716-446655440000',
      currency: 'EUR',
      metadata: { invoice_id: 'INV-2026-0042' },
      rail: 'sepa',
      unstructured_remittance_information: 'INV-2026-0042',
    });
  });

  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.payouts.retrieve('550e8400-e29b-41d4-a716-446655440003');
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
          created_at: { gte: '2026-01-01T00:00:00Z', lte: '2026-02-01T00:00:00Z' },
          currencies: ['EUR'],
          cursor: 'cursor',
          limit: 1,
          status: 'initiated',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Augustus.NotFoundError);
  });
});
