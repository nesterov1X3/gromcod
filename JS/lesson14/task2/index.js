let sender = 'Gromcode';
let message = 'Just learn it!';
const createMesseger = () => {

    function sendMessage(name) {

        console.log(`${name}, ${message} Your ${sender}`);
    }

    function setMessage(text) {
        message = text + '!';
    }
    function setSender(send) {
        sender = send;
    }
    return {
        sendMessage,
        setMessage,
        setSender
    };
};

export default createMesseger;

const messenger1 = createMesseger();
messenger1.sendMessage('Bob');

let str1 = 'Hello!';
let boldd1 = str1.bold()

const messenger2 = createMesseger();
messenger2.setMessage(boldd1);


let str = 'Gromcode';
let boldd = str.bold()


const messenger3 = createMesseger();
messenger3.setSender(boldd);


messenger1.sendMessage('Bob');