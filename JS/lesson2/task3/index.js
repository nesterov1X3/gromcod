const goodNumber = 17;
let anotherNumber = goodNumber;
anotherNumber = 77;

console.log(goodNumber);
console.log(anotherNumber);

const custumer = {
    name: "John",
    age: 17
};
const anotherCustumer = costumer;
anotherCustumer.age = 20;

console.log(custumer.age);
console.log(anotherCustumer.age);