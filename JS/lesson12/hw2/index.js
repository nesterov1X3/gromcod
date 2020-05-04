//input: arr;
//output: arr
const transactionList = ['1,9', '16,44 ', 7, '1 dollar']
function cleanTransactionList(arr){
     const numToString = arr.map(item =>{
        return  '$' + item 
     });
    
     const cleanProbel = numToString.map(item => {
        return  item.trim() 
     });

     const cleanLetters = cleanProbel.filter(item => {
        
     });

    return cleanProbel;
}

const result = cleanTransactionList(transactionList);
// console.log(result)