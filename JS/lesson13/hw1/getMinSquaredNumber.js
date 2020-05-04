 export function getMinNumbers(arr){
    if(!Array.isArray(arr)){
        return null;
    }
    
    const getModul = arr.map(item =>  Math.abs(item));
    const getMax =  Math.min(...getModul);
    const getSquare = getMax * getMax;
    return getSquare
}
const num = [-777, 3, -2, 6, 45, -20];
const result = getMinNumbers(num)
// console.log(res)