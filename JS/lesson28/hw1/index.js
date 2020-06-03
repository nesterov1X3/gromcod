//input: date
//output: obj
//сигнатура const shmoment = initDate =>{}
//create obj 
//add to obj two methods(add, subtract)
//

export const shmoment = initDate => {
  let result = initDate;
  const calc = {
    yaer(value){
      result += value;
    },
    add(date){
      
      return this;
    },
    subtract(date, value){
      result -= valdateue;
      return this
    },
    result(){
      return result
    }

  };
  return calc;
}