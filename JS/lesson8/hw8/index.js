const keys = ['name', 'address', 'age'];
const values = ['Bob', 'Ukraine', '18'];
function buildObject(keysList, valuesList){
    let obj = {};
     for(let i = 0; i <= keysList.length; i++){
      for(let j = 0; j <= valuesList.length; j++){
        if(i == j){
           obj[keysList[i]] = valuesList[j];
           obj[keysList[i+1]] = valuesList[j+1];
           obj[keysList[i+2]] = valuesList[j+2];
        }
      }
      return obj;
     }
  
  
  
  
  
  
  
  
  
    //   obj = keysList.reduce((acc, curent, index) => {
  //     //  if (index == acc) {
  //     valuesList.reduce((acc1, curent1, index1) => {
  //        return  acc1 + curent1
      
  //    });
  //  // }
  //  });
  //      return obj;
    }

const result = buildObject(keys, values);
// console.log(result)
