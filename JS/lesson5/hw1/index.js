let result = 0;
function getSum(a, b){
    while(a <= b) {
        a++
       if(a % 2 === 0){
        result += a;
       }
    }
    return result
}
getSum(1, 4)
