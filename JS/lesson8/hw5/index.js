const transition = {
    value: 170,
}
 
//1
function addPropertyV1(obj, key, value){
    obj[key] = value;
    return obj
}
addPropertyV1(transition, 'currency', 'USD')

//2
function addPropertyV2(obj, key, value){
    Object.assign(obj, { key: value });
    return obj;
}
addPropertyV2(transition, 'currency', 'EURO')

//3
function addPropertyV3(obj, key, value){
    let objNew = {};
    Object.assign( objNew, obj, { key: value })
    return objNew;
}
addPropertyV3(transition, 'currency', 'grivasik')

//4
function addPropertyV4(obj, key, value){
    let objNew = {};
    Object.assign( objNew, obj, { key: value })
    return objNew;
}
addPropertyV4(transition, 'currency', 'grivasik')