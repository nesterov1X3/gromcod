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
       };
        if(date == 'months'){
          result = new Date(result.setMonth(
            result.getMonth() + value))
       };
        if(date == 'days'){
        result = new Date(result.setDate(
          result.getDate() + value))
       };
        if(date == 'hours'){
        result = new Date(result.setHours(
          result.getHours() + value))
       };
        if(date == 'minutes'){
        result = new Date(result.setMinutes(
          result.getMinutes() + value))
       };
        if(date == 'seconds'){
        result = new Date(result.setSeconds(
          result.getSeconds() + value))
       };
        if(date == 'milliseconds'){
        result = new Date(result.setMilliseconds(
          result.getMilliseconds() + value))
       }
      return this;

    },
    subtract(date, value){
      if(date == 'years'){
        result = new Date(result.setFullYear
          (result.getFullYear() - value)) 
       };
        if(date == 'months'){
          result = new Date(result.setMonth(
            result.getMonth() - value))
       };
       if(date == 'days'){
        result = new Date(result.setDate(
          result.getDate() - value))
       };
       if(date == 'hours'){
        result = new Date(result.setHours(
          result.getHours() - value))
       };
        if(date == 'minutes'){
        result = new Date(result.setMinutes(
          result.getMinutes() - value))
       };
       if(date == 'seconds'){
        result = new Date(result.setSeconds(
          result.getSeconds() - value))
       };
       if(date == 'milliseconds'){
        result = new Date(result.setMilliseconds(
          result.getMilliseconds() - value))
       }
      return this;
    },
    result(){
      return result
    },

  };
  return calc;
}
const result = shmoment(new Date(2020, 0, 7, 17, 17, 17)).add('minutes', 2).add('days', 8).subtract('years', 1).result();
// console.log(result);
