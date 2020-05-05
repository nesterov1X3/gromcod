const message = 'Just learn it!';

export function  sendMessage(name) {
    const sender = "Gromcode";
    console.log(`${name}, ${message} You ${sender}`);
}

 function setMessage(text){
    message = text;
}

console.log(sendMessage('Tom'))
console.log(setMessage('Hello'))