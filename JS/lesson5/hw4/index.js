export function compareSums(a, b, c, d){
    let result1 = 0;
    let result2 = 0;
        
        for(let i=a; i<=b; i++){
            result1 += i;
            for(let k=c; k<=d; k++){
                result2 += k;
            }
        }
        
        if(result1 > result2){
            return true;
        }else{
            return false;
        }
    
    
}
// console.log(compareSums(3, 4 , 5, 3))