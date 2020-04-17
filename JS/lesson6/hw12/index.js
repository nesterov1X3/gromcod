const numbers = [1, 4, 5, 4, 2, 1];

// function removeDuplicates(array){
//     let upGrade =[];
//     for(let i = 0; i < array.length; i++){
//         for(let j = 0; i < i; j++){
//             if(array[i] != array[j]) {
//              upGrade = array;
//           }
// }
//     }
//     return upGrade;
// }
// const arrRemove = removeDuplicates(numbers);
// console.log(arrRemove);

function removeDuplicates(array) {
    let res = [];
    if (!Array.isArray(array)) {
      return null;
    }
    for (let number of array) {
      if (!~res.indexOf(number)) {
        res.push(number);
      }
    }
    return res;
  }
  const result = removeDuplicates(numbers);
  console.log(result);

