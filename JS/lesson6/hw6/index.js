const numbers = [3, 5, 6, 4];
let arrNum = numbers.slice(0)
function cloneArr(arr){
    if(!Array.isArray(arr)){
        return null;
    }
    // let arrNum = numbers.slice(0)
    // const [...rest] = numbers;
    return arrNum;
}
const arrCopy = cloneArr(arrNum);
console.log(arrCopy)