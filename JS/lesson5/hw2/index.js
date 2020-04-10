// function getPrimes( n){
//     let result = 0;
//      for(let i = 2; i <= n; i++){
//          for(let k = 2; k < i; k++){
//             if(i % k == 0) {continue};
//             result += i;    
//     }
    
//     }
//     console.log(result)
// }

function getPrimes( n){
 outer: for (let i = 2; i <= n; i++) {
  for (let j = 2; j*j <= i; j++) {
    if (i % j == 0) {
      continue outer;
    }
  }
  console.log(i);

}
}
