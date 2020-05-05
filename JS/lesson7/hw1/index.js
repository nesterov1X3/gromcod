export const squareArray = numbers => {
    if(!Array.isArray(numbers)){
        return null;
    }
    const arrSquare = numbers.map(function(item){
        return item * item
    });
    return arrSquare
}
// const arr = [2, 5, 6];
// console.log(squareArray(1))