const arr = [null, 6, '4rf', 54.54, 6,3, undefined, NaN, '43.43ew'];

//Number.parseInt
function getParsedIntegers(arr){
    const numParsed = arr.map(item => Number.parseInt(item));
    return numParsed;
}
// const result = getParsedIntegers(arr)
// console.log(result)

//parseInt
function getParsedIntegersV2(arr){
    const numParsedV2 = arr.map(item => parseInt(item));
    return numParsedV2;
}
// const result2 = getParsedIntegersV2(arr)
// console.log(result2)


//Number.parseFloat
function getParsedFloats(arr){
    const numParsedV3 = arr.map(item => Number.parseFloat(item));
    return numParsedV3;
}
// const result3 = getParsedFloats(arr)
// console.log(result3)



//Number.parseFloat
function getParsedFloatsV2(arr){
    const numParsedV4 = arr.map(item => parseFloat(item));
    return numParsedV4;
}
// const result4 = getParsedFloatsV2(arr)
// console.log(result4)