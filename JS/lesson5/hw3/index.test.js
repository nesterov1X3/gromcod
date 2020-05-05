import {increaser} from './index.js'

it('should get increaser', () =>{
    const result = increaser(2, 6);
    
    expect(result).toEqual(2)
    });