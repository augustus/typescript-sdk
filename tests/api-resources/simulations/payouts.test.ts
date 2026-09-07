// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Augustus from '@augustusbank/typescript-sdk';

const client = new Augustus({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource payouts', () => {
  // Mock server tests are disabled
  test.skip('reject: only required params', async () => {
    const responsePromise = client.simulations.payouts.reject('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      reason: 'invalid_routing_number',
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
  test.skip('reject: required and optional params', async () => {
    const response = await client.simulations.payouts.reject('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      reason: 'invalid_routing_number',
    });
  });

  // Mock server tests are disabled
  test.skip('return: only required params', async () => {
    const responsePromise = client.simulations.payouts.return('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      reason: 'account_closed',
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
  test.skip('return: required and optional params', async () => {
    const response = await client.simulations.payouts.return('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      reason: 'account_closed',
    });
  });

  // Mock server tests are disabled
  test.skip('send', async () => {
    const responsePromise = client.simulations.payouts.send('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
