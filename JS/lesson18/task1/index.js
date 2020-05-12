export const event = {
    guests : [
        {name: 'John', age: 18, email: 'example@server.com'},
        {name: 'Bob', age: 17, email: 'b@gmail.com'}
    ],
    message: 'Welcome to the party!',
    getInvintations(){
        return this.guests
            .filter(({ age }) => age >= 18)
            .map(({name, email }) => ({
                text: `Hi ${name}. ${this.message}`,
                email
            }));
    }
}

console.log(event.getInvintations());
