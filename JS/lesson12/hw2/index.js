//input: arr;
//output: arr
const transactionList = ['1.954', '16.44 ', 7, '1']
function cleanTransactionList(arr){

    
    const makeTwoNum = arr.map(item => {
        return Number(item).toFixed(2)
     });

     const numToString = makeTwoNum.map(item =>{
        return  '$' + item 
     });
    
     const cleanProbel = numToString.map(item => {
        return  item.trim() 
     });

     

    return cleanProbel;
}

const result = cleanTransactionList(transactionList);
// console.log(result)