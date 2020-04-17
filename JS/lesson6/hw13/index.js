const numbers = [1, 4, 5, 4, 2, 1];

function uniqueCount(array) {
    let result = [];
    let unical = 0; 
    if (!Array.isArray(array)) {
        return null;
      }
  for (let item of array) {
    if (!result.includes(item)) {
      result.push(item);
    }
  }
  unical = result.length;
  return unical;
  }
  const result = uniqueCount(numbers);
  console.log(result);