const numbers = [2, 3, 4, 7];
function reverseArray(arr){
    if(!Array.isArray(arr)){
        return null;
    }
    const a = numbers;
    const b = a.reverse()
    return b;
        
}
const arrSwap = reverseArray(numbers)
console.log(arrSwap)