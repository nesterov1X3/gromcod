export function createCalculator(){
    let memory = 0;

 function add(a){
   memory += a;
}

 function decrease(b){
      memory -= b;
  }

 function reset(v){
    memory = 0;
  }

 function getMemo(){
    return memory ;
  }

  return {
    add,
    decrease,
    reset,
    getMemo,
  }
}