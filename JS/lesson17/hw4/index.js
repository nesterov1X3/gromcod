export const user = {
  firstName: 'John',
  lastName: 'Doe'
}

const getFullName = {
  getName() {
    return `${user.firstName} ${user.lastName}`
  }
}
console.log(getFullName.getName());

// const getFullNameByUs = getFullName.getName.bind(user)()
// console.log(getFullNameByUs);
