import {squareArray } from './index.js'

it('should get squareArray', () =>{
    const result = squareArray([2, 3, 5]);
    
    expect(result).toEqual([4, 9 ,25])
    });