import {getSquaredArray, getOddNumbers} from './calculator.js'

it('should get squared numbers', () =>{
const result = getSquaredArray([1, 2, 3]);

expect(result).toEqual([1, 4, 9])
});