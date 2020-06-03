import {compose, doEverything} from './index.js'

it('should be done multiplate operations', () => {
  const  result = doEverything(4)


  expect(result).toEqual(18)
})