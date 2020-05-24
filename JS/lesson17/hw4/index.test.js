import {user} from './index.js'

it('should get fullName', () =>{
const result = user.setFullName('Stiv Nash')
expect(result).toEqual('Stiv Nash')
});