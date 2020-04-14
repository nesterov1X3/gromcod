function increaseEvenEl(arr, delta){
    let sum = [];
    for(let i = 0; i <= arr.length; i++){
        if(arr[i] % 2 == 0){
            sum[i] = arr[i] + delta;
        }
    }
    return sum;
}
const arrIncrease = increaseEvenEl([2, 5, 6, 7], 3);
console.log(arrIncrease)