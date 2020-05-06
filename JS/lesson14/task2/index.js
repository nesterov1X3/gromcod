let message = 'Hi';
const createMesseger = () => {
     function  sendMessage(name) {
        const sender = 'Gromcode';
        console.log(`${name}, ${message} Your ${sender}`);
    }
    
      function setMessage(text){
        message = text + '!';
    }
    return {
        sendMessage, 
        setMessage
    };
};
const messenger1 = createMesseger();

messenger1.sendMessage('Bob');

const messenger2 = createMesseger();

messenger2.sendMessage('Tom');

messenger2.setMessage('Hello!');

messenger1.sendMessage('Ann');
