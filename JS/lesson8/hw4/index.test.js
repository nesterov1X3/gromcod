import {addPropertyV1} from './index.js'

it('should get addPropertyV1', () =>{
    const result = addPropertyV1({
        name: 'Sam'
    }, 4343);
    
    expect(result).toEqual({
        name: 'Sam', 
        id: 4343
    })
    });