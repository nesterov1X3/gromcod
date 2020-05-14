 const user = {
    firstName: 'John',
    lastName: 'Doe',
    get fullName(){ return `${this.firstName} ${this.lastName}` },
    set fullName(value) {
        const [firstName, lastName] = value.split(' ');
        this.firstName = firstName;
        this.lastName = lastName;

    }
}
export default user;
// console.log(user.fullName = 'tom grey')
// console.log(user1.fullName())











// export function User(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.getFullName = function(){return `${this.firstName} ${this.lastName}`}
//     this.setFullName = function(value) {
//         const [firstName, lastName] = value.split(' ');
//         this.firstName = firstName;
//         this.lastName = lastName;

//     }
// }

// export const user1 = new User('John', 'Doe')
// console.log(user1.getFullName())







