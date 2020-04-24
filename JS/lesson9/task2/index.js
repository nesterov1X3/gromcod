const user = {
    name: 'Bob',
    age: 18,
    father: {
        name: 'Tom'
    }
}
const copyObj = obj => {
    const copyObj = {...obj}
    return copyObj
}
const result = copyObj(user);
console.log(result)