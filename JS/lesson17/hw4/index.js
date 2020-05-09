export const user = {
  firstName: 'John',
  lastName: 'Doe'
}

const getFullName = {
  getName() {
    return `${this.firstName} ${this.lastName}`
  }
}
const getFullNameByUs = getFullName.getName.bind(user)()
console.log(getFullNameByUs);
