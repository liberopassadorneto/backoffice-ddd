import { join } from 'node:path';

export const entitiesPaths = {
  chatbooster: join(
    __dirname,
    '../',
    'domain',
    'chatbooster',
    'entities',
    '*.{ts,js}',
  ),
  esignature: join(
    __dirname,
    '../',
    'domain',
    'esignature',
    'entities',
    '*.{ts,js}',
  ),
  whatsapp: join(
    __dirname,
    '../',
    'domain',
    'whatsapp',
    'entities',
    '*.{ts,js}',
  ),
};
