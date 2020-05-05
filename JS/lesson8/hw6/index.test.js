import {mergeObjectsV1} from './index.js'

it('should get mergeObjectsV1', () =>{
    const result = mergeObjectsV1( {
        name: 'Tom', 
        age: 17
    },
     {
        name: 'Bob',
        student: false
    });
    
    expect(result).toEqual({
        age: 17,
        name: 'Bob',
        student: false
    })
    });