function getRandomNumbers(len, min, max){
    let arr = [];
    // arr[0] = min;
    // arr[arr.length - 1] = max;
    if(min > max) {
        return null
    }
    
    for( let i= min; i < max; i++){
        arr.push(random(min, max))
     }
     
     function random(){
        let rand = min - 0.5 + Math.random() * (len)
        rand = Math.round(rand)     
        return rand;
    }
    return arr
}
const result = getRandomNumbers(4, 6, 14)
console.log(result)


