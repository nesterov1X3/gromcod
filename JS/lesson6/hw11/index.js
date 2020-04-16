const numbers = [3, 5, 2, 7554];

function includes(arr, n){
    let bool = false;
    
    arr.forEach(function(value) {
        if(value == n){
           bool = true
        }

        // return false
        
    });
    return bool;
}
const arrayIncludes = includes(numbers, 22)
console.log(arrayIncludes)