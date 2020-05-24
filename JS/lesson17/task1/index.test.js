import { user } from "./index.js"

it('should get fullName', () => {
    const result = user.getFullName();
    expect(result).toEqual('John Doe')
})