
export function createArrayOfFunctions(len = new Array()) {
  if (!Number.isInteger(len)) {
    return null;
  }
  let arr = new Array(len)
  for (let i = 0; i < len; i++) {
    arr[i] = function () {
      return i;
    }
  }
  return arr
}


// console.log(createArrayOfFunctions());
