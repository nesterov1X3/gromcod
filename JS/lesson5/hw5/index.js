function findDivCount(a, b, n){
    let result = " ";
    for(let i= a; i<=b; i++){
        if(i % n ==0){
            result += i;
        }
    }
    return result;
}