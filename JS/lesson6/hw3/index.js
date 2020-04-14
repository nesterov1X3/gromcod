const numbers = [3, 5, 64, 7, 4];

function checkSum(arr){
    let sum = 0;
    if(!Array.isArray(arr)){
        return null;
    }
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];

    }
    if(sum > 100){
        return true
    }else{
        return false
    }
}
const arraySum = checkSum(9);
console.log(arraySum)
