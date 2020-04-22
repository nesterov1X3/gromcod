const obj1 = {
    name: 'Tom', 
    age: 17
};
const obj2 = {
    name: 'Bob',
    student: false
};
//1
const mergeObjectsV1 = (obj1, obj2) => {
    const objMergeNumber1 = {};
    Object.assign(objMergeNumber1, obj1, obj2)
    return  objMergeNumber1;
}
const resultV1 = mergeObjectsV1(obj1, obj2);
// console.log(resultV1)
//2
const mergeObjectsV2 = (obj1, obj2) => {
    const objMergeNumber2 = {};
    Object.assign(objMergeNumber2, obj2, obj1)
    return  objMergeNumber2;
}
const resultV2 = mergeObjectsV2(obj1, obj2);
// console.log(resultV2)

//3
const mergeObjectsV3 = (obj1, obj2) => {
    const objMergeNumber3 = {...obj1, ...obj2};
    return  objMergeNumber3;
}
const resultV3 = mergeObjectsV3(obj1, obj2);
// console.log(resultV3)

//4
const mergeObjectsV4 = (obj1, obj2) => {
    const objMergeNumber4 = {...obj2, ...obj1};
    return  objMergeNumber4;
}
const resultV4 = mergeObjectsV4(obj1, obj2);
// console.log(resultV4)