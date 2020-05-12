export function sumOfSquares(){
    return [...arguments].map(item => { 
        return item * item 
})
}
// console.log(sumOfSquares(3, 4, 5, 32));
