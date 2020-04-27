function getMaxAbsoluteNumber(arr){
    const getModul = arr.map(item =>  Math.abs(item));
    const getMax =  Math.max(...getModul);
    return getMax
}

const arr = [4, -54, 6 , -4];
const result = getMaxAbsoluteNumber(arr)
console.log(result)