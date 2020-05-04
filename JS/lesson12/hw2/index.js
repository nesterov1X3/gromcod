//input: arr;
//output: arr

const cleanTransactionsList = (arr) => {
    const numbers = arr.filter((el) => Number(el));
    const deleteSpace = numbers.map((item) => Number.parseFloat(item));
    const plusZuro = deleteSpace.map((el) => `${"$".concat(el)}`);
    const res = plusZuro.map((el) => {
      if (el.length <= 3) {
        return `${el}.00`;
      }
      return `${el}0`;
    });
    return res;
  };
  const result = cleanTransactionsList(["  1.9 ", "16.4", 17, " 1 dollar "]);

// const transactionList = ['1.954', '16.44 ', 7, '1er']
// function cleanTransactionList(arr){

    
//     const makeTwoNum = arr.map(item => {
//         return Number(item)
//      });
   
//     const numbers = makeTwoNum.filter((el) => Number(el));
   

//      const numToString = numbers.map(item =>{
//         return  '$' + item 
//      });
    
//      const cleanProbel = numToString.map(item => {
//         return  item.trim() 
//      });

//      const cleanLetters = cleanProbel.filter (item => {
//           return Number.isInteger(item)
//      });

//     return cleanLetters;
// }

// const result = cleanTransactionList(transactionList);
// console.log(result)


// .toFixed(2)