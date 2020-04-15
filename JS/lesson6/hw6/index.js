const numbers = [3, 5, 6, 4];

function cloneArr(arr){
    if(!Array.isArray(arr)){
        return null;
    }
    const [...rest] = numbers;
    const arrNum = rest
    return arrNum;
}
const arrCopy = cloneArr(numbers);
console.log(arrCopy)