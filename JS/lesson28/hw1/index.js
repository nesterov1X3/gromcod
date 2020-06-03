//input: number
//output: obj
//сигнатура const shmoment = initDate =>{}
//create obj 
//add to obj two methods(add, subtract)
//

export const shmoment = initDate => {
  let result = initDate;
  const calc = {
    add(date, value){
      result +=value;
      return this;
    },
    subtract(date, value){
      result -= value;
      return this
    },
    result(){
      return result
    }

  };
  return calc;
}