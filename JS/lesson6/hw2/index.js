const numbers = [3, 6, 8, 5];
function squareArray(arr){
    let muss = [];
    for(let i = 0; i < arr.length; i++){  
        if(!Array.isArray(arr)){
            return null;
        }
             muss[i] = arr[i] * arr[i];
      }
    
    return muss;
}
const arrayValue = squareArray(9)
console.log(arrayValue)
