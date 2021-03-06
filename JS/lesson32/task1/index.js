const getValueWithDaley = (value, delay) => new Promise(resolve => {
  setTimeout(() => {
    console.log(value);
    resolve(value);
  }, delay)
});

const asyncNum1 = getValueWithDaley(56, 1000)
const asyncNum2 = getValueWithDaley(undefined, 2000)
const asyncNum3 = getValueWithDaley('6', 3000)


// const getSum = numbers =>
//  numbers
//  .filter(value => !isNaN(value))
//  .reduce((acc, num) => acc + Number(num), 0)

export const asyncSum = (...asyncNumbers) => {
  return Promise.allSettled(asyncNumbers)
    // .then(numbers => getSum(numbers))
    .then(numbers => console.log(numbers))
    // .catch(() => Promise.reject(new Error('Can\'t calculate')))
}

asyncSum(asyncNum1, Promise.reject(new Error('err')), asyncNum3)
  .then(result => console.log(result))