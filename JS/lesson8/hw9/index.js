const obj = {
    a: 1, 
    b: 2, 
    c: 3,
};
const arr = ['a', 'c'];

const pickProps = (obj, arr) => {
    let result = {};
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] in obj) {
        result[arr[i]] = obj[arr[i]];
      }
    }
    return result;
  };
const result = pickProps(obj, arr)
console.log(result)