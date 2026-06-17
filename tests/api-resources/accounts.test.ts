// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Augustus from '@augustusbank/typescript-sdk';

const client = new Augustus({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource accounts', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.accounts.create({
      account_program_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      account_type: 'virtual_account',
      beneficiary_data: {
        country_of_citizenship: 'US',
        date_of_birth: '2019-12-27',
        identification: { type: 'ssn', value: '732-66-9102' },
        legal_name: 'x',
        residential_address: {
          city: 'x',
          country: 'US',
          postal_code: 'x',
          state: 'xx',
          street_line_1: 'x',
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
  test.skip('create: required and optional params', async () => {
    const response = await client.accounts.create({
      account_program_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      account_type: 'virtual_account',
      beneficiary_data: {
        country_of_citizenship: 'US',
        date_of_birth: '2019-12-27',
        identification: { type: 'ssn', value: '732-66-9102' },
        legal_name: 'x',
        residential_address: {
          city: 'x',
          country: 'US',
          postal_code: 'x',
          state: 'xx',
          street_line_1: 'x',
          street_line_2: 'street_line_2',
        },
      },
    });
  });

  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.accounts.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
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
    const responsePromise = client.accounts.list();
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
      client.accounts.list(
        {
          account_holder_name: 'x',
          account_number: 'x',
          cursor: 'cursor',
          limit: 1,
          parent_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          status: 'pending',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Augustus.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('close: only required params', async () => {
    const responsePromise = client.accounts.close('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      reason: 'aml_risk_fraud',
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
  test.skip('close: required and optional params', async () => {
    const response = await client.accounts.close('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      reason: 'aml_risk_fraud',
    });
  });

  // Mock server tests are disabled
  test.skip('freeze', async () => {
    const responsePromise = client.accounts.freeze('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('retrieveBalance', async () => {
    const responsePromise = client.accounts.retrieveBalance('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('unfreeze', async () => {
    const responsePromise = client.accounts.unfreeze('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
