const numbers = [2, 3, 7];
function reverseArray(arr){
    if(!Array.isArray(arr)){
        return null;
    }
    const [a, b, ...rest ] = arr;
    return [...rest, b, a]
}
const arrSwap = reverseArray(numbers)
console.log(arrSwap)

