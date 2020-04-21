const transformToObject = arr => {
    const result = {};
      arr.forEach(el => {
          result[el] = el;
      });
      return result;
}
const numbers = [1, 'text'];
const objRes = transformToObject(numbers);
console.log(objRes);