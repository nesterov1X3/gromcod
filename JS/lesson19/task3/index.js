export function user(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = function(){return `${this.firstName} ${this.lastName}`}
    this.fullName = function(value) {
        const [firstName, lastName] = value.split(' ');
        this.firstName = firstName;
        this.lastName = lastName;
    
    }
}

const user1 = new user('John', 'Doe')

console.log(user1.fullName);



