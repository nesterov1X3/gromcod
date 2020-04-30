const splitString = (text, len = 10) => {
    if(typeof text !== 'string'){
        return null;
    }
    const strArr = [];
    let partString = text.split(len)
    let startPosition = 0;
    while(true) {
        
        let chunk = text.substr(startPosition, len); 
        if(chunk.length === 0){
            break;
        } 
        
        partString.push( chunk.padEnd(len, '.'))
        startPosition += len;
        
    }
    return partString.join('\n');
}
const result = splitString('some message with the text', 12)
console.log(result)

