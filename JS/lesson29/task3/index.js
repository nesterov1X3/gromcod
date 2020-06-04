export const printing = () => {
    console.log(1);
    setTimeout(function(){console.log(2); }, 0)
    setTimeout(function(){console.log(3); }, 10)
    setTimeout(function(){console.log(4); }, 1000)
    setTimeout(function(){console.log(5); }, 2000)
    
}

// printing()