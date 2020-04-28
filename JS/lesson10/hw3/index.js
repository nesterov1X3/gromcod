const superRound = ((num, kof) => 
[
    Math.floor(num * 100) / 100,
    Math.round(num * 100) / 100,
    Math.ceil(num * 100) / 100,
    Math.trunc(num * 100) / 100,
    +num.toFixed(kof),
]);

//  const result = superRound(-3.332, 2)
// console.log(result)