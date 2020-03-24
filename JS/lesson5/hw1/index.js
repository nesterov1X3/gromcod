
function getSum(a, b){
    
    for( let i = a ; i <= b; i++){
        let result = 0;
       if(i % 2 === 0){
        result += i;
       }
    }
    return result;
}
getSum(4, 6)
