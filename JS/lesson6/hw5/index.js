const numbers = [2, 3, 4, 7];
function reverseArray(arr){
    if(!Array.isArray(arr)){
        return null;
    }
    const [a, b, c, d] = numbers;
    const rar = [d, c, b, a]
    return rar;
}
const arrSwap = reverseArray(numbers)
console.log(arrSwap)