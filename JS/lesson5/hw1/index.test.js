import {getSum} from './index.js'

it('should get sum evens', () =>{
    const result = getSum(2, 6);
    
    expect(result).toEqual(12)
    });