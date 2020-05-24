import {add, decrease, reset, getMemo} from './index.js'


it('should get calc option', () =>{
    const result = getMemo();
    expect(result).toEqual(11)
});


it('should get calc option', () =>{
    const result = getMemo();
    expect(result).toEqual(0)
})