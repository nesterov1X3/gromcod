import {getKeys} from './index.js'

it('should get getKeys', () =>{
    const result = getKeys({
            name: 'Bob',
            age: 17,
            hair: "black",
            hant: true,
        });
    
    expect(result).toEqual([4, 6, 2, 5])
    });