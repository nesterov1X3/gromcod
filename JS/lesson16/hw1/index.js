
export function createArrayOfFunctions(len) {
  let arr = new Array(len)
  for (let i = 0; i < len; i++) {
    arr[i] = function () {
      return i;
    }
  }
  return arr
}


// console.log(createArrayOfFunctions(4));
