import {reverseArray} from './index.js'

it('should get reverseArray', () =>{
    const result = reverseArray([2, 3, 5]);
    
    expect(result).toEqual([5, 3, 2])
    });