const user = {
    name: 'Sam'
}

//1
function addPropertyV1(userData, userld){
    userData.id = userld;
    return userData
}
addPropertyV1(user, 434343)

//2
function addPropertyV2(userData, userld){
    Object.assign(userData, userld)
    return userData;
}
addPropertyV2(user, 54356234343)

//3
function addPropertyV3(userData, userld){
    
    let obj = Object.assign(userData, userld)
    return obj;
}
addPropertyV3(user, 934343)

//4
function addPropertyV4(userData, userld){
    
    return userData;
}