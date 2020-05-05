import {addPropertyV4} from './index.js'

it('should get addPropertyV4', () =>{
    const result = addPropertyV4({ value: 170, }, 'currency', 'EURO');
    
    expect(result).toEqual({
        value: 170, 
        currency: 'EURO',
    })
    });