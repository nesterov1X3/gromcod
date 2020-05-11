export const user = {
  firstName: 'John',
  lastName: 'Doe',
  getFullName(){
    return `${this.firstName} ${this.lastName}`
  }
}


const getFullNameByUs = user.getFullName.bind(user)()
console.log(getFullNameByUs);
