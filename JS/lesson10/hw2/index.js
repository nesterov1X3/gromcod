function getRandomNumbers(len, min, max) {
    let arr = new Array(len);
    if (min > max) {
        return null
    }
    for(let i =0 ; i <= arr.length; i++){
        if(!Number.isInteger(i)){
            return null
        }
    }
    const searchNum = arr.fill(len, 0, 4)
  
    const randomNum = searchNum.map(item =>
       (min + (max - min))  * Math.random(item));
    const intNum = randomNum.map(item =>
        Math.trunc(item));

    return intNum;
}
const result = getRandomNumbers(4, 6, 10)
console.log(result)


