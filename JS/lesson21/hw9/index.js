export function finishForm(){
     const findElement = document.querySelector('.login-form')
     const makeingLogForm = document.createElement('input')
     makeingLogForm.setAttribute('type', 'text')
     makeingLogForm.setAttribute('name', 'login')
     findElement.prepend(makeingLogForm)
     

     const findAnotherEl = document.querySelector('.title')
     findAnotherEl.setAttribute('type', 'password')
      
      
}
// finishForm()