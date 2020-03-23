let result = 0;
function getSum(a, b){
   for( let a = 1; a <= b; a++){
       if(a % 2 === 1){
        result += a;
       }
    }
    return result
}

getSum(1, 7)