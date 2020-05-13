export function User(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.getFullName = function(){return `${this.firstName} ${this.lastName}`}
    this.setFullName = function(value) {
        const [firstName, lastName] = value.split(' ');
        this.firstName = firstName;
        this.lastName = lastName;
    
    }
}

const user1 = new User('John', 'Doe')

// console.log(user1.setFullName());



