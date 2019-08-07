import { expect, tap } from '@pushrocks/tapbundle';
import '../ts/index';

tap.test('first test', async () => {
  console.log('hey');
});

tap.start();
