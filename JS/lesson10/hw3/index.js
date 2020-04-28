const superRound = ((num, kof) => 
[
    Math.floor(num * Math.pow(10, kof)) / Math.pow(10, kof),
    Math.round(num * Math.pow(10, kof)) / Math.pow(10, kof),
    Math.ceil(num * Math.pow(10, kof)) / Math.pow(10, kof),
    Math.trunc(num * Math.pow(10, kof)) / Math.pow(10, kof),
    +num.toFixed(kof),
]);

 const result = superRound(-3.332, 2)
// console.log(result)