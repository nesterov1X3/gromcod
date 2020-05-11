export const user = {
  firstName: 'John',
  lastName: 'Doe',
  getFullName(){
    return `${this.firstName} ${this.lastName}`
  },
  setFullName(firstName, lastName ){
       this.firstName = firstName,  this.lastName = lastName;
  }
}


// const getFullNameByUs = user.getFullName.bind(user)()
// console.log(getFullNameByUs);

console.log(user.setFullName(user.firstName, user.lastName));
// console.log(user);
