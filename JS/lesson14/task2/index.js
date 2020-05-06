
 const createMesseger = () => {
    let message = 'Just learn it!';
      function  sendMessage(name) {
        const sender = 'Gromcode';
        console.log(`${name}, ${message} Your ${sender}`);
    }
    
      function setMessage(text){
        message = text + '!';
    }
    function setSender(send){
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

// const messenger2 = createMesseger();

// messenger2.sendMessage('Tom');

// messenger2.setMessage('Hello!');

// messenger1.sendMessage('Ann');
