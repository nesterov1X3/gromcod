import {getMinNumbers} from './getMinSquaredNumber.js'

it('should get squared min abs numbers', () =>{
    const result = getMinNumbers([-777, 3, -2, 6, 45, -20]);
    
    expect(result).toEqual(4)
    });