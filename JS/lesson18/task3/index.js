export function sumOfSquares(){
    return [...arguments].map(item => { 
        return item * item 
}).reduce((acc, element) => {
    return acc + element
})
}
console.log(sumOfSquares(3, 4, 5));
