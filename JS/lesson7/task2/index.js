const sortDesc = numbers =>
    numbers.slice().sort((a, b) => b - a);

const arr = [4, 6, 7, 24, 1, 6, 2 ]
console.log(sortDesc(arr))
console.log(arr)