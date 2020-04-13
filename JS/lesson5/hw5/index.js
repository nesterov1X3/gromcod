// function findDivCount(a, b, n){
//     let result = 0;
    
//     for(let i= a; i<=b; i++){
//         if(i % n ==0){ ;
//            result += i;
//            return result;
           
//         }else
//            return 0;
        
// } 
// }
function findDivCount(a, b, n) {
    let result = 0;
    for (let i = a; i <= b; i++) {
      if (i % n === 0) {
        result += 1;
      }
    }
    return result;
  }
