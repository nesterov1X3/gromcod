import {compareObjects} from './index.js'

it('should get compareObjects', () =>{
    const result = compareObjects( {
        name: 'Tom', 
        age: 17
    },
    {
        name: 'Tom', 
        age: 17
    });
    
    expect(result).toEqual(true)
    });