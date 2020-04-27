function getMaxAbsoluteNumber(arr){
    if(!Array.isArray(arr)){
        return null;
    }
    if(arr.length == 0){
        return null;
    }

    const getModul = arr.map(item =>  Math.abs(item));
    const getMax =  Math.max(...getModul);
    return getMax
    
}
const arr = [4, -54, 6 , -4];
const result = getMaxAbsoluteNumber(arr)
