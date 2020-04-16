const numbers = [2, 5, 3, 1];

function getSubArray(arr, n){
    let num = [];
    for( let a of arr) {
        if (a <= n){
            num.push(a)
        }
    }
    return num;
}
const subArray = getSubArray(numbers, 2)
console.log(subArray)