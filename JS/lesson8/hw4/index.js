const user = {
    name: 'Sam'
}
 
//1
function addPropertyV1(userData, userId){
    userData.id = userId;
    return userData
}
addPropertyV1(user, 6234343)

//2
function addPropertyV2(userData, userId){
    Object.assign(userData, { id: userId });
    return userData;
}
addPropertyV2(user, 4356234343 )

//3
function addPropertyV3(userData, userId){
    let obj = {};
    Object.assign( obj, userData, { id: userId })
    return obj;
}
addPropertyV3(user, 9999234343)

//4
function addPropertyV4(userData, userId){
    const {...rest} = userId;
    userData.id = {...rest};
    return userData;
}
console.log(addPropertyV4(user, 545))