//сигнатура parseUser(str)
//проверку на парсин json
//true return result
//false return null


//   let result = null;
//   if(JSON.parse(str)) {
//       result = str
//       return result
    
//   }else {
//     return result
//   } 
// }
// const res = parseUser(str)
// console.log(res);

export const parseUser = (str) => {
try {
   JSON.parse(str);
    
} catch(err) {
  return null
} 
return str
}
const res = parseUser('{"name":"Tom"}')
// console.log(res);


