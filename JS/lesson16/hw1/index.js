
export function createArrayOfFunctions(len) {
  let arr = new Array(len)
  for (var i = 0; i < 10; i++) {
    arr[i] = function () {
      return i;
    }
  }
}


console.log(createArrayOfFunctions(4));
