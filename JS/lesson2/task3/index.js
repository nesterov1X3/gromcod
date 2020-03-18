const goodNumber = 17;
let anotherNumber = goodNumber;
anotherNumber = 77;

console.log(goodNumber);
console.log(anotherNumber);

const costumer = {
    name: "John",
    age: 17,
};
const anotherCostumer = costumer;
anotherCostumer.age = 20;

console.log(costumer.age);
console.log(anotherCostumer.age);