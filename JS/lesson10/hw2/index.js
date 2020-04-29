function getRandomNumbers(len, min, max) {
    let arr = new Array(len);
    if (min > max) {
        return null
    }
    const noNumbersBetween = to - from < 1 && Math.ceil(to) === Math.ceil(from);
  if (noNumbersBetween) {
    return null;
  }
    const searchNum = new Array(len).fill()

    const randomNum = searchNum.map(item =>
        min  + Math.random(item) * (max - min));
    //    (min + (max - min))  * Math.random(item));
    const intNum = randomNum.map(item =>
        Math.trunc(item));

    return intNum;
}
const result = getRandomNumbers(4, 6, 8)
// console.log(result)


