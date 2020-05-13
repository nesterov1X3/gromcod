export function User(name, age) {
    this.name = name;
    this.age = age;
}
User.prototype.sayHi = function () {
    console.log(`Hi, I am ${this.name}`);
}
User.prototype.requestNewPhoto = function() {
    console.log(`New photo request was sent for ${this.name}`); 
}
User.prototype.setAge = function() {
    this.age = 3;
    if(this.age >= 25){
      console.log(`New photo request was sent for ${this.name}`); 
    }
    if(this.age < 0){
        return false
    }else{
        return this.age
    }
}

const user1 = new User('Tom', 32)

console.log(user1.setAge())

// console.log(user1.age)