const arrAverage = arr => {
    if(!Array.isArray(arr)){
        return null;
    }
    return arr.reduce((acc, num) =>   (acc + num)) / arr.length;
        
    
}
const numbers = [4, 5, 6];
console.log(arrAverage(numbers));