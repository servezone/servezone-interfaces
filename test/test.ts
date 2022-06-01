import { expect, tap } from '@pushrocks/tapbundle';
import * as servezoneInterfaces from '../ts/index.js';

tap.test('first test', async () => {
  console.log('hey');
  const versionData = servezoneInterfaces;
});

tap.start();
