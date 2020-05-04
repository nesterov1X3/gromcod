function reverseString(str){
    if (typeof str !== 'string') {
        return null;
    }
    // let newStr = '';
    // for (let i = str.length - 1; i >= 0; i--) {
    //     newStr += str.charAt(i);
    // }
    // return newStr;

    return str.split("").reverse().join("");

}
const result = reverseString(12345678);
// console.log(result)
