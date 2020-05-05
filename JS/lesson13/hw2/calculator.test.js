import {calc} from './calculator.js'

it('should get calculator options', () =>{
    const result = calc(3, '+', 3);
    
    expect(result).toEqual(6)
    });