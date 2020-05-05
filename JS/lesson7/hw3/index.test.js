import {increaseEvenEl} from './index.js'

it('should get increaseEvenEl', () =>{
    const result = increaseEvenEl([2, 3], 3);
    
    expect(result).toEqual([5, 6])
    });