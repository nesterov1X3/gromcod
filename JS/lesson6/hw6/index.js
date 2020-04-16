const numbers = [3, 5, 6, 4];
function cloneArr(arr){
    if(!Array.isArray(arr)){
        return null;
    }
    let clone = [];
    clone = arr;
  
    // const [...rest] = numbers;
    return clone;
}
const arrCopy = cloneArr(numbers);
console.log(arrCopy)