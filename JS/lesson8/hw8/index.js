const keys = ['name', 'address', 'age'];
const values = ['name', 'Ukraine', 'age'];
function buildObject(keysList, valuesList){
    const obj = {};
    keysList.reduce((acc, curent) => {
       return  acc + curent
    });

    valuesList.reduce((acc1, curent1) => {
        return  acc1 + curent1
        
     });


    
}
const result = buildObject(keys, values);
console.log(result)
