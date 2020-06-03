//input: date
//output: obj
//сигнатура const shmoment = initDate =>{}
//create obj 
//add to obj two methods(add, subtract)
//

export const shmoment = initDate => {
  let result = new Date(initDate);
  const calc = {
    add(date, value){
       if(date == 'years'){
        result = new Date(result.setFullYear
          (result.getFullYear() + value)) 
       }else if(date == 'months'){
          result = new Date(result.setMonth(
            result.getMonth() + value))
       }else if(date == 'days'){
        result = new Date(result.setDay(
          result.getDay() + value))
       }else if(date == 'hours'){
        result = new Date(result.setHours(
          result.getHours() + value))
       }else if(date == 'minute'){
        result = new Date(result.setMinutes(
          result.getMinutes() + value))
       }else if(date == 'seconds'){
        result = new Date(result.setSeconds(
          result.getSeconds() + value))
       }else if(date == 'milliseconds'){
        result = new Date(result.setMilliseconds(
          result.getMilliseconds() + value))
       }
      return result;

    },
    subtract(date, value){
      if(date == 'years'){
        result = new Date(result.setFullYear
          (result.getFullYear() - value)) 
       }else if(date == 'months'){
          result = new Date(result.setMonth(
            result.getMonth() - value))
       }else if(date == 'days'){
        result = new Date(result.setDay(
          result.getDay() - value))
       }else if(date == 'hours'){
        result = new Date(result.setHours(
          result.getHours() - value))
       }else if(date == 'minute'){
        result = new Date(result.setMinutes(
          result.getMinutes() - value))
       }else if(date == 'seconds'){
        result = new Date(result.setSeconds(
          result.getSeconds() - value))
       }else if(date == 'milliseconds'){
        result = new Date(result.setMilliseconds(
          result.getMilliseconds() - value))
       }
      return result
    },
    result(){
      return result
    },

  };
  return calc;
}
const result = shmoment(new Date(2020, 0, 6, 43, 41, 55).add('minutes', 2).add('days', 43).result())
// console.log(result);
