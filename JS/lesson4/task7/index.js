let max = 1000;
let result = 0;

for(let min = 0; min <= max; min++){
    if(min % 2 === 1){
         result += min;
        console.log('Found');   
    }
   
}

if (result * 5 >  5000){
    console.log("Bigger")
}else{
    console.log('Smaller')
}