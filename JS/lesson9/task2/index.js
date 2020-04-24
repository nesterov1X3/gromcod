const user = {
    name: 'Bob',
    age: 18,
    father: {
        name: 'Tom'
    }
}
const copyObj = obj => {
    const copy = {...obj}
    return copy;
}
const result = copyObj(user);
console.log(result)