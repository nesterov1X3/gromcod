const flatArray = numbers => 
    numbers.reduce((acc, elem) => {
    return acc.concat(elem);
    }, []);


const arr = [3, [2, 5, 6], 5, [4, 7]];
console.log(flatArray(arr))