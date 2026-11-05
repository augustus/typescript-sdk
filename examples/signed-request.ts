import { readFile } from 'node:fs/promises';
import Augustus from '../src';

async function main(): Promise<void> {
  const keyPath = process.env['SIGNING_PRIVATE_KEY_PATH'];
  const apiKey = process.env['AUGUSTUS_API_KEY'];

  if (!keyPath || !apiKey) {
    throw new Error('Set SIGNING_PRIVATE_KEY_PATH and AUGUSTUS_API_KEY for a sandbox API key.');
  }

  const client = new Augustus({
    apiKey,
    signingPrivateKey: await readFile(keyPath, 'utf8'),
    environment: 'sandbox',
    maxRetries: 0,
    logLevel: 'off',
  });

  const response = await client.accountPrograms.list({ limit: 1 }).asResponse();

  console.log(`Signed sandbox request returned HTTP ${response.status}.`);
}

void main();
