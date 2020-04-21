const getKeys = obj => {
    const keysToArr = Object.keys(obj)
    //  const result = [];
     keysToArr.forEach(item => {
        console.log(obj[item]);
    });
    // return result;
}
obj = {
    name: 'Bob',
    age: 17,
    hair: "black",
    hant: true,
};

const result = getKeys(obj);