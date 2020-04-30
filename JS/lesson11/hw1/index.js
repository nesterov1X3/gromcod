// const splitString = (text, len = 10) => {
//     if(typeof text !== 'string'){
//         return null;
//     }
//     const strArr = [];
//     let startPosition = 0;
//     while(true) {
//         let chunk = text.substr(startPosition, len); 
//         if(chunk.length === 0){
//             break;
//         } 
//          strArr.push(chunk.split(len) && chunk.padEnd(len, '.'))
//         startPosition += len;
//     }
//     return strArr.join('\n');
// }


const splitString = (str, len = 10) => {
    if (typeof str !== 'string') {
        return null;
    }
    let start = 0;
    const result = [];
    while (true) {
        let chunk = str.substr(start, len);
        if (chunk.length === 0) {
            break;
        }
        if (chunk.length < len) {
            chunk = chunk.concat('.'.repeat(len - chunk.length));
        }
        result.push(chunk);  
        start += len; 
    }
    return result.join('\n');
};
const result = splitString('some message with the text', 12)
// console.log(result)