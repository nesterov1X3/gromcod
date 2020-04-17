const a = [21, 13, 44, 70];
function sortAsc(array){
    let sorted = [];
       while (array.length) 
    sorted = sorted.concat(array.splice(array.indexOf(array.reduce((prev, cur) => prev < cur ? prev : cur)), 1));
    return sorted
}

const arrSort = sortAsc(a);

console.log(arrSort)
// let sortAsc = (inputArr) => {
//     let len = inputArr.length;
//     for (let i = 0; i < len; i++) {
//         for (let j = 0; j < len; j++) {
//             if (inputArr[j] > inputArr[j + 1]) {
//                 let tmp = inputArr[j];
//                 inputArr[j] = inputArr[j + 1];
//                 inputArr[j + 1] = tmp;
//             }
//         }
//     }
//     return inputArr;
// };