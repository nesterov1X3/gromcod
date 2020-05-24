export const user = {
  firstName: 'John',
  lastName: 'Doe',
  getFullName(){
    return `${this.firstName} ${this.lastName}`
  },
  setFullName(full) {
    const fullName = full.split(' ')
    this.firstName = fullName[0]
    this.lastName = fullName[1]
}
}

const getFullNameByUs = user.getFullName.bind(user)()
console.log(getFullNameByUs);

// console.log(user.setFullName(user.firstName, user.lastName));

user.setFullName('Phil Jacksin')
console.log(user);