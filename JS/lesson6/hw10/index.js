const numbers = [2, 5, 3, 1];

function getSubArray(arr, n){
    let num = [];
    arr.forEach(function(a, index) {
        if (index < n){
            num.push(a)
        }
    });
    return num;
    
}
const subArray = getSubArray(numbers, 4)

console.log(subArray)