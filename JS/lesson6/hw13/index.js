const numbers = [1, 4, 5, 4, 2, 1];

function uniqueCount(array) {
    let result = [];

  for (let str of array) {
    if (!result.includes(str)) {
      result +=(str);
    }
  }
  return result;
  }
  const result = uniqueCount(numbers);
  console.log(result);