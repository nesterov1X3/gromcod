let memory = 0;


export function add(a){
   memory += a;
}


export function decrease(b){
      memory -= b;
  }

export function reset(){
    memory = 0;
  }

export function getMemo(){
    return memory ;
  }
add(43)
decrease(32)

reset()
//  console.log(getMemo())