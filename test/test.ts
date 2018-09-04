import { expect, tap } from '@pushrocks/tapbundle';
import '../dist/index';

tap.test('first test', async () => {
  console.log('hey');
});

tap.start();
