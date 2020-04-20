const arrAverage = arr => {
    if(!Array.isArray(arr)){
        return null;
    }
    const sumElement = arr.reduce((acc, num) => {
        return (acc + num) / arr.length;
    }, 0);
    return sumElement;
}
const numbers = [3, 5, 6, 43];
console.log(arrAverage(numbers));