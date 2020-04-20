const increaseEvenEl = (arr, delta) => {
    if(!Array.isArray(arr)){
        return null;
    }
    let sum = [];
    const arrIncreaser = arr.map(item => {
         return item + delta;
                     
    });
    return arrIncreaser;
}
const numbers  = [4, 6, 3, 7, 8, 3];
console.log(increaseEvenEl(numbers, 5))