
function getSpecialNumbers(m, n){
  let specialNumbers = [];
  for(let i = m; i <= n; i++){
      if(i % 3 ===0){
        specialNumbers.push(i);
      }
  }
  return specialNumbers
}
const specialNumbers = getSpecialNumbers(32, 72);
console.log(specialNumbers)