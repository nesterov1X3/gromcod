export const increaseEvenEl = (arr, delta) => {
    if(!Array.isArray(arr)){
        return null;
    }
    const arrIncreaser = arr.map(item => {
         return item + delta;
                     
    });
    return arrIncreaser;
}
const numbers  = [4, 6];
console.log(increaseEvenEl(numbers, 5))