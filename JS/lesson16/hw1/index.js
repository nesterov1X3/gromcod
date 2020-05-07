
export function createArrayOfFunctions(len = 0) {
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
