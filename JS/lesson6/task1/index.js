const numbers = [1, 2, 3, 4, 5, 8]
function getArrayBounds(arr){
    if(!Array.isArray(arr)){
        return null;
    }
      return [arr.length, arr[0], arr[arr.length - 1]];
}
const arrayBounds = getArrayBounds(numbers)
console.log(arrayBounds)