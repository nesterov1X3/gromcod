const numbers = [2, 3, 4, 7000];
const getBool = checker(numbers);
function checker(arr){
    let max = arr[0];
    let min = arr[0];
    if(!Array.isArray(arr)){
        return null;
    }
    for(let i = 0; i < arr.length; i++ ){
          if( min > arr[i]){
            min = arr[i]
          } 

          if( max < arr[i]){
            max = arr[i]
          } 
    }
    if(max + min > 1000){
        return true
    }else{
        return false
    }
}
console.log(getBool)




