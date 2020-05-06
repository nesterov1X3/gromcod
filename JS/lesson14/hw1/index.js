let memory = 0;


export function add(a){
   memory += a;
}


export function decrease(b){
      memory -= b;
  }

export function reset(v){
    memory = 0;
  }

export function getMemo(){
    return memory ;
  }