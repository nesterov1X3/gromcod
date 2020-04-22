const user = {
    name: 'Sam'
}
userld = {
   id: 4356234343,
}
//1
function addPropertyV1(userData, userld){
    userData.id = userld;
    return userData
}
addPropertyV1(user, userld)

//2
function addPropertyV2(userData, userld){
    Object.assign(userData, userld)
    return userData;
}
// console.log(addPropertyV2(user, userld ))

//3
function addPropertyV3(userData, userld){
    let
    let obj = Object.assign(userData, userld)
    return obj;
}
console.log(addPropertyV3(user, userld))

//4
function addPropertyV4(userData, userld){
    
    return userData;
}