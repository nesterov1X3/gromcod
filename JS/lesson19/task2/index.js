export const wallet = {
    transactions: [1, 4, 43, 324, -4],
    getMax() {
        return Math.max(...this.transactions)
    },
    getMin() {
        return Math.min(...this.transactions)
    },
} 
// console.log(wallet.getMax());
// console.log(wallet.getMin());

