const numbers = [3, 5, 6, 4];
const [...rest] = numbers;
function cloneArr(arr){
    if(!Array.isArray(arr)){
        return null;
    }
    return rest;
}
const arrCopy = cloneArr(5);
console.log(arrCopy)