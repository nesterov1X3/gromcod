const obj1 = {
    name: 'Tom', 
    age: 17
};
const obj2 = {
    name: 'Tom', 
    age: 17
};

function compareObjects(obj1, obj2){
    return obj1.keys === obj2.keys
}

const result = compareObjects(obj1, obj2)
// console.log(result)