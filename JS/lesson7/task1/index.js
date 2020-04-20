const getSpecialNumbers = numbers => 
     numbers.filter(num =>  num % 3 ===0
    );


const arr = [2, 4, 6, 7, 8, 8, 9]
console.log(getSpecialNumbers(arr))