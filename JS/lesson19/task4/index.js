export function User(name, age) {
    this.name = name;
    this.age = age;
}
User.prototype.sayHi = function () {
    console.log(`Hi, I am ${this.name}`);
}
User.prototype.requestNewPhoto = function() {
    console.log(`New photo request was enter for ${this.name}`); 
}
User.prototype.setAge = function() {
    this.age = 33;
    if(this.age >= 25){
    console.log(`New photo request was enter for ${this.name}`); 
    }
    if(this.age < 0){
        return false
    }
}

const user1 = new User('Tom', 32)

// user1.setAge()

// console.log(user1.age)