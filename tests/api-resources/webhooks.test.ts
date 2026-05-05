// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Webhook } from 'standardwebhooks';

import Augustus from '@agsts/typescript-sdk';

const client = new Augustus({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource webhooks', () => {
  test.skip('unwrap', () => {
    const key = 'whsec_c2VjcmV0Cg==';
    const payload =
      '{"id":"id","api_version":"api_version","date":"2019-12-27T18:11:19.117Z","payload":{"id":"id","amount":"amount","created_at":"2019-12-27T18:11:19.117Z","currency":"EUR","destination":{"account_holder_name":"account_holder_name","bic":"bic","iban":"iban","type":"iban"},"failure":{"code":"account_closed","message":"message","retry":true},"metadata":{"foo":"string"},"reference":"reference","source_account_id":"source_account_id","status":"pending","type":"payout","updated_at":"2019-12-27T18:11:19.117Z"},"type":"payout.created"}';
    const msgID = '1';
    const timestamp = new Date();
    const wh = new Webhook('whsec_c2VjcmV0Cg==');
    const signature = wh.sign(msgID, timestamp, payload);
    const headers: Record<string, string> = {
      'webhook-signature': signature,
      'webhook-id': msgID,
      'webhook-timestamp': String(Math.floor(timestamp.getTime() / 1000)),
    };
    client.webhooks.unwrap(payload, { headers, key });
    client.withOptions({ webhookKey: key }).webhooks.unwrap(payload, { headers });
    client.withOptions({ webhookKey: 'whsec_aaaaaaaaaa==' }).webhooks.unwrap(payload, { headers, key });
    expect(() => {
      const wrongKey = 'whsec_aaaaaaaaaa==';
      client.webhooks.unwrap(payload, { headers, key: wrongKey });
    }).toThrow('No matching signature found');
    expect(() => {
      const wrongKey = 'whsec_aaaaaaaaaa==';
      client.withOptions({ webhookKey: wrongKey }).webhooks.unwrap(payload, { headers });
    }).toThrow('No matching signature found');
    expect(() => {
      const badSig = wh.sign(msgID, timestamp, 'some other payload');
      client.webhooks.unwrap(payload, { headers: { ...headers, 'webhook-signature': badSig }, key });
    }).toThrow('No matching signature found');
    expect(() => {
      const badSig = wh.sign(msgID, timestamp, 'some other payload');
      client
        .withOptions({ webhookKey: key })
        .webhooks.unwrap(payload, { headers: { ...headers, 'webhook-signature': badSig } });
    }).toThrow('No matching signature found');
    expect(() => {
      client.webhooks.unwrap(payload, { headers: { ...headers, 'webhook-timestamp': '5' }, key });
    }).toThrow('Message timestamp too old');
    expect(() => {
      client
        .withOptions({ webhookKey: key })
        .webhooks.unwrap(payload, { headers: { ...headers, 'webhook-timestamp': '5' } });
    }).toThrow('Message timestamp too old');
    expect(() => {
      client.webhooks.unwrap(payload, { headers: { ...headers, 'webhook-id': 'wrong' }, key });
    }).toThrow('No matching signature found');
    expect(() => {
      client
        .withOptions({ webhookKey: key })
        .webhooks.unwrap(payload, { headers: { ...headers, 'webhook-id': 'wrong' } });
    }).toThrow('No matching signature found');
  });
});
