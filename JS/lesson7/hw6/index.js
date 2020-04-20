const sum = arr => {
    if(!Array.isArray(arr)){
        return null;
    }
    const sumElement = arr.reduce((acc, num) => {
        return acc + num;
    }, 0);
    return sumElement;
}
const numbers = [3, 5, 6, 43];
console.log(sum(numbers));