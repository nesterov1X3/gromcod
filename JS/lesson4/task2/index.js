const m = 2;
const n = 9;
let result = 1;
let i = 2;

do {
  if(i % 2 === 1){
      result *= i;
  }
     i++;
 } while( i <= n)

console.log('Result: ' + result);