// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Augustus from '@augustusbank/typescript-sdk';

const client = new Augustus({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource accountHolders', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.accountHolders.create({
      account_program_id: '550e8400-e29b-41d4-a716-446655440002',
      beneficiary_data: {
        country_of_citizenship: 'US',
        date_of_birth: '1990-01-15',
        identification: { type: 'ssn', value: '123-45-6789' },
        legal_name: 'Jordan Rivera',
        residential_address: {
          city: 'San Francisco',
          country: 'US',
          postal_code: '94103',
          state: 'CA',
          street_line_1: '548 Market St',
        },
      },
      holder_type: 'natural_person',
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
    const response = await client.accountHolders.create({
      account_program_id: '550e8400-e29b-41d4-a716-446655440002',
      beneficiary_data: {
        country_of_citizenship: 'US',
        date_of_birth: '1990-01-15',
        identification: { type: 'ssn', value: '123-45-6789' },
        legal_name: 'Jordan Rivera',
        residential_address: {
          city: 'San Francisco',
          country: 'US',
          postal_code: '94103',
          state: 'CA',
          street_line_1: '548 Market St',
          street_line_2: 'Apartment 4B',
        },
      },
      holder_type: 'natural_person',
    });
  });

  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.accountHolders.retrieve('68e0a1b2c3d4e5f60718293a');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.accountHolders.update('68e0a1b2c3d4e5f60718293a', {
      beneficiary_data: {
        country_of_citizenship: 'US',
        date_of_birth: '1990-01-15',
        identification: { type: 'ssn', value: '123-45-6789' },
        legal_name: 'Jordan Rivera',
        residential_address: {
          city: 'San Francisco',
          country: 'US',
          postal_code: '94103',
          state: 'CA',
          street_line_1: '548 Market St',
        },
      },
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
  test.skip('update: required and optional params', async () => {
    const response = await client.accountHolders.update('68e0a1b2c3d4e5f60718293a', {
      beneficiary_data: {
        country_of_citizenship: 'US',
        date_of_birth: '1990-01-15',
        identification: { type: 'ssn', value: '123-45-6789' },
        legal_name: 'Jordan Rivera',
        residential_address: {
          city: 'San Francisco',
          country: 'US',
          postal_code: '94103',
          state: 'CA',
          street_line_1: '548 Market St',
          street_line_2: 'Apartment 4B',
        },
      },
    });
  });

  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.accountHolders.list();
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
      client.accountHolders.list({ cursor: 'cursor', limit: 1 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Augustus.NotFoundError);
  });
});
