const arr = [3, 5, undefined, NaN, 7, 5.4];
//Number.isFinite
function getFiniteNumbers(getArr){
    const finitNum = getArr.filter(item => Number.isFinite(item));
    return finitNum;
}
const result = getFiniteNumbers(arr)
// console.log(result)

//isFinite
function getFiniteNumbersV2(getArr){
    const isFinitNum = getArr.filter(item => isFinite(item));
    return isFinitNum;
}
const result2 = getFiniteNumbersV2(arr)
// console.log(result2)

console.log(result == result2)

//  Number.isNaN
function getNaN(getArr){
    const getIsNaN = getArr.filter(item => Number.isNaN(item));
    return getIsNaN;
}
const result3 = getNaN(arr)
// console.log(result3)


//isNaN
function getNaNV2(getArr){
    const getIsNaN = getArr.filter(item => isNaN(item));
    return getIsNaN;
}

const result4 = getNaNV2(arr)
// console.log(result4)
console.log(result3 == result4)

//getInegers
function getInegers(getArr){
    const getInt = getArr.filter(item => Number.isInteger(item));
    return getInt;
}

const result5 = getInegers(arr)
// console.log(result5)
