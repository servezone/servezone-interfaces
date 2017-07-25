import { expect, tap } from 'tapbundle'
import '../dist/index'

tap.test('first test', async () => {
  console.log('hey')
})

tap.start()
