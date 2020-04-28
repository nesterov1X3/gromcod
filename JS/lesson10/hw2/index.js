function getRandomNumbers(len, start, end){
    let arr = new Array(len);
    arr[0] = start;
    arr[arr.length - 1] = end;
    return Math.random(arr);
}
const result = getRandomNumbers(4, 6, 15)
console.log(result)