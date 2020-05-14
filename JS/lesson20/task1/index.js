export class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    static createEmpty(name, age) {
        const user = {
            name: '',
            age: null
        }
        return user
    }
    sayHi() {
        console.log(`Hi, I am ${this.name}`);

    }
    requestNewPhoto() {
        console.log(`New photo request was sent for ${this.name}`);
    }
    setAge(value) {
        if (value < 0) {
            return false
        }
        this.age = value

        if (value >= 25) {
            this.requestNewPhoto()
        }
        return value
    }
}

const user1 = new User('Kevin', 20)
// user1.setAge(63)















// export function User(name, age) {
//     this.name = name;
//     this.age = age;
// }
// User.prototype.sayHi = function () {
//     console.log(`Hi, I am ${this.name}`);
// }
// User.prototype.requestNewPhoto = function() {
//     console.log(`New photo request was sent for ${this.name}`); 
// }
// User.prototype.setAge = function(age) {
//     this.age = age;
//     if(this.age >= 25){
//       console.log(`New photo request was sent for ${this.name}`); 
//     }
//     if(this.age < 0){
//         return false
//     }else{
//         return this.age
//     }
// }

// const user1 = new User('Tom', 32)

// console.log(user1.setAge(4))

// console.log(user1.age)