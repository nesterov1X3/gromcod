
function getSum(a, b){
    let result = 0;
   for( let a = 1; a <= b; a++){
       if(a % 2 === 0){
        result += a;
       }
    }
    return result
}

getSum(1, 7)