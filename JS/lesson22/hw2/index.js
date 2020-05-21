function changeSomeMean(){
     console.log(inputElem);
     
}
const findSomeEl = document.querySelector('.text-input');
const inputElem = findSomeEl.value


findSomeEl.addEventListener('change', changeSomeMean)