let message = 'Just learn it';
let st = '!'

export function  sendMessage(name) {
    const sender = 'Gromcode';
    console.log(`${name}, ${message}${st} Your ${sender}`);
}

 export function setMessage(text){
    message = text;
}
sendMessage('Ann')

setMessage('Good job')
sendMessage('Ann')