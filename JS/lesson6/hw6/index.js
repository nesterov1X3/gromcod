const numbers = [3, 5, 6, 4];
function cloneArr(arr){
    if(!Array.isArray(arr)){
        return null;
    }
    const [...rest] = numbers;
    return rest;
}
const arrCopy = cloneArr(arr);
console.log(arrCopy)