const superRound = ((num, kof) => 
[
    Math.floor(num * 50 * kof) / 100,
    Math.round(num * 50 * kof) / 100,
    Math.ceil(num * 50 * kof) / 100,
    Math.trunc(num * 50 * kof) / 100,
    +num.toFixed(kof),
]);

const result = superRound(-Math.PI, 2)
// console.log(result)