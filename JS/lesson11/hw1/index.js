const splitString = (text, len = 10) => {
    if(typeof text !== 'string'){
        return null;
    }
    const strArr = [];
    let startPosition = 0;
    while(true) {
        let chunk = text.substr(startPosition, len); 
        if(chunk.length === 0){
            break;
        } 
         strArr.push(chunk.split(len) && chunk.padEnd(len, '.'))
        startPosition += len;

    }
    
    return strArr.join('\n');
}
const result = splitString('some message with the text', 12)
console.log(result)

