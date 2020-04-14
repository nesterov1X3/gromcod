let numbers = [3, 5, 7, 2, 6]
function swap(arr){
    const [first, ...oth] = arr;
    return [...oth, first];
}
const arraySwich = swap(numbers);
console.log(arraySwich);