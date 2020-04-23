const obj = {
    'John Doe': 19,
    'Tom': 17, 
    'Bob': 18,
    'Ol': 33,
};

function getAdults (obj){
    let copy= {}
    Object.assign(copy, obj)
 let getObjOld = {};
  for (let key in copy){
      if(copy[key] < 18){
         delete copy[key]
         getObjOld = copy;
      }
 }
 return getObjOld;
}

const result = getAdults(obj)
console.log(result)