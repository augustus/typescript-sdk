// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Augustus from '@augustusbank/typescript-sdk';

const client = new Augustus({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource accountOpenings', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.accountOpenings.create({
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
    const response = await client.accountOpenings.create({
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
});
