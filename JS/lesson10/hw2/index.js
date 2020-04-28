function getRandomNumbers(len, min, max) {
    let arr = new Array(len);
    // arr[0] = min;
    // arr[arr.length - 1] = max;

    if (min > max) {
        return null
    }
    for(let i =0 ; i <= arr.length; i++){
        if(!Number.isInteger(i)){
            return null
        }
    }
     
    
    arr = [4, 6, 1, 3];
    const randomNum = arr.map(item =>
       (min +(max - min))  * Math.random(item));
    const intNum = randomNum.map(item =>
        Math.trunc(item));

    return intNum




    // const randomNum = arr.map(item =>
    //     Math.random(item) * (max - min) + min);
    // const intNum = randomNum.map(item =>
    //     Math.trunc(item));

    // return intNum
    


   
}
const result = getRandomNumbers(4, 6, 10)
console.log(result)


