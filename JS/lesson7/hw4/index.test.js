import {cloneArr} from './index.js'

it('should get cloneArr', () =>{
    const result = cloneArr([4, 6, 2, 5]);
    
    expect(result).toEqual([4, 6, 2, 5])
    });