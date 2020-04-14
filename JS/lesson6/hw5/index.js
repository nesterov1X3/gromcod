const numbers = [2, 3, 4, 7];
const [a, b, c, d] = numbers
function reverseArray(arr){
    if(!Array.isArray(arr)){
        return null;
    }
    return [d, c, b, a]
}
const arrSwap = reverseArray(5)
console.log(arrSwap)