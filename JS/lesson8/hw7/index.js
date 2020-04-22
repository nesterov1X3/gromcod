const obj1 = {
    name: 'Tom', 
    age: 17
};
const obj2 = {
    name: 'Tom', 
    age: 174
};

function compareObjects(obj1, obj2){
    let bool = false;
    if(obj1.keys == obj2.keys){
        return true;
    }

    return false;
}

const result = compareObjects(obj1, obj2)
console.log(result)