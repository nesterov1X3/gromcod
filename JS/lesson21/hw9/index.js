export function finishForm(){
     const findAnotherEl = document.querySelector('input')
     findAnotherEl.setAttribute('type', 'password')  

     const findElement = document.querySelector('.login-form')
     const makeingLogForm = document.createElement('input')
     makeingLogForm.setAttribute('type', 'text')
     makeingLogForm.setAttribute('name', 'login')
     findElement.prepend(makeingLogForm)
     

    
      

      
}
finishForm()