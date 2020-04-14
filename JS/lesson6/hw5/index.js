const numbers = [2, 3, 4, 7];

function reverseArray(arr){
    if(!Array.isArray(arr)){
        return null;
    }
    const [a, b, c, d] = numbers
    return [d, c, b, a];
}
const arrSwap = reverseArray(numbers)
console.log(arrSwap)