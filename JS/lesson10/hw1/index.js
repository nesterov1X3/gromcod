const  arr = [4, 5.499, 54, 3]
function getTotalPrice(arr){
    const getSum = arr.reduce((acc, el) => acc + el);
    return Math.floor(getSum * 100) / 100
     
}
const result = getTotalPrice(arr);
console.log(result)