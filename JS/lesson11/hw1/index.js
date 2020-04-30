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
        startPosition += len;
        strArr.push(chunk.padEnd(len, '.'))
    }
    return strArr.join('\n');
}
const result = splitString('dsqchgfefefefgcsefwea', 6)
// console.log(result)

//chunk[0].toUpperCase() + chunk.slice(1) &&