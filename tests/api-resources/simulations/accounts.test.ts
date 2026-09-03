// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Augustus from '@augustusbank/typescript-sdk';

const client = new Augustus({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource accounts', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.simulations.accounts.create({ label: 'x' });
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
    const response = await client.simulations.accounts.create({ label: 'x' });
  });

  // Mock server tests are disabled
  test.skip('close: only required params', async () => {
    const responsePromise = client.simulations.accounts.close('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
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
    const response = await client.simulations.accounts.close('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      reason: 'aml_risk_fraud',
    });
  });

  // Mock server tests are disabled
  test.skip('drain: only required params', async () => {
    const responsePromise = client.simulations.accounts.drain('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      destination: {
        account_holder_name: 'Acme Sandbox Ltd.',
        iban: 'DE89370400440532013000',
        type: 'iban',
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
  test.skip('drain: required and optional params', async () => {
    const response = await client.simulations.accounts.drain('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      destination: {
        account_holder_name: 'Acme Sandbox Ltd.',
        iban: 'DE89370400440532013000',
        type: 'iban',
        bic: 'COBADEFFXXX',
      },
    });
  });

  // Mock server tests are disabled
  test.skip('freeze', async () => {
    const responsePromise = client.simulations.accounts.freeze('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
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
    const responsePromise = client.simulations.accounts.unfreeze('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
