let memory = 0;


export function add(a){
   memory += a;
}


export function decrease(b){
     b -= memory ;
  }

export function reset(v){
    memory = v;
  }

export function getMemo(){
    return memory ;
  }