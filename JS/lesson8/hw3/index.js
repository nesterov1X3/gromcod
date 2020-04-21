const getKeys = obj => {
    const keysToArr = Object.keys(obj)
     let result = [];
     keysToArr.forEach(item => {
        result.push(obj[item])
    });
    return result;
}
obj = {
    name: 'Bob',
    age: 17,
    hair: "black",
    hant: true,
};

console.log(getKeys(obj));