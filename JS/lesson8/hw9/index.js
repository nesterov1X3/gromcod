const obj = {
    a: 1, 
    b: 2, 
    c: 3,
};
const arr = ['a', 'c'];

function pickProps(obj, arr){
    let copy= {}
    Object.assign(copy, obj)
    
  for (let key in copy){
    for (let el of arr){
      if(key !== el){
         delete key
         copy = obj;
      }
    }
 }
 return copy;
}
const result = pickProps(obj, arr)
console.log(result)