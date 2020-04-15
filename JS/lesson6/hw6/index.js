const numbers = [3, 5, 6, 4];
const [...rest] = numbers;

function cloneArr(arr){
    if(!Array.isArray(arr)){
        return null;
    }
    const arrNum = rest;
    return arrNum;
}
const arrCopy = cloneArr(rest);
console.log(arrCopy)