//сигнатура parseUser(str)
//проверку на парсин json
//true return result
//false return null
const str = JSON.stringify('hello everybody')


export const parseUser = (str) => {
  let result = null;
  if(JSON.parse(str)) {
      result = str
      return result
    
  }else {
    return result
  } 
}
const res = parseUser(str)
// console.log(res);
