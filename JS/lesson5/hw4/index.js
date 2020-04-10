function compareSums(a, b, c, d){
    let result1 = 0;
    let result2 = 0;
    // function sum(from, to){
        
        for(let i=a; i<=b; i++){
            result1 += i;
            for(let k=c; k<=d; k++){
                result2 += k;
            }
        }
        
        if(result1 > result2){
            return true;
        }else{
            return false
        }
    // }
    
}