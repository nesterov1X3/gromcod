const numbers = [3, 5, 2, 7554];

function includes(arr, n){
    let bool;
    
    arr.forEach(function(value) {
        if(value == n){
            bool = true;
        }else 
        return false
        
    });
    return bool;
}
const arrayIncludes = includes(numbers, 754)
console.log(arrayIncludes)