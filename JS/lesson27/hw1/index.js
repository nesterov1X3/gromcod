//getLoscalStorage
localStorage.clear()
localStorage.setItem('numbers', JSON.stringify({ name: "Sasa" }))
localStorage.setItem('age', JSON.stringify(43))
localStorage.setItem('character', 'Bad')

// console.log(JSON.parse(localStorage.getItem('numbers')))

const getLocalStorageData = () => {
 return Object.entries(localStorage)
        .reduce((acc, [key, value])=>{
          let newValue;
          try{
            newValue = JSON.parse(value)
          } catch(e){
            newValue = value;
          }
         return { ...acc,
             [key]: newValue
         };
        }, {});
}


// console.log(getLocalStorageData())