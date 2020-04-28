function getRandomNumbers(len, min, max){
    let arr = [];
    // arr[0] = min;
    // arr[arr.length - 1] = max;

    for( let i= min; i < max; i++){
        arr.push(random(min, max))
     }
     
     function random(){
        let rand = min - 0.5 + Math.random() * (max - min +1)
        rand = Math.round(rand)     
        return rand;
    }

    return arr
    // const fullNum = arr.map(item => Number.parseInt(item));
    // const randomNum = arr.map(item => 
    //     Number.parseInt(Math.random(item)));
     
    // return randomNum
    
}
const result = getRandomNumbers(4, 6, 15)
console.log(result)


