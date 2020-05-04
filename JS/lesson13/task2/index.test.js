import {getSquarednumbers, getOddNumbers} from './index.js'

it('should get squared numbers', () =>{
const result = getSquarednumbers([1, 2, 3]);

expect(result).toEqual([1, 4, 9])
});