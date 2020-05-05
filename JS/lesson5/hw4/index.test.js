import {compareSums} from './index.js'

it('should get increaser', () =>{
    const result = compareSums(3, 4, 5, 3);
    
    expect(result).not.toEqual(true)
    });