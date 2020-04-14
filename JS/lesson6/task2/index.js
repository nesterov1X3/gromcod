const numbers = [2, 5, 63, 123]

function getSum(numbers){
    let sum = 0;
    if(!Array.isArray(numbers)){
        return null;
    }
    for(let i = 0; i < numbers.length; i++){
        sum += numbers[i];
    }
    return sum;
}
const sumArr = getSum(numbers);

console.log(sumArr);