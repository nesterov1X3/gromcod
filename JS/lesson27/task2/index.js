const counterElem = document.querySelector('.counter');
// console.log(counterElem);

const counterValueElem = document.querySelector('.counter__value')


const onChangeCalck = event => {
  const isButton = event.target.classList.contains('.counter__button');
  
  if (!isButton) {
    return;
  }

  const action = event.target.dataset.action;
  // console.log(action);

  const oldValue = Number(counterValueElem.textContent);
  const  newValue =  action == 'decrease'
  ? oldValue - 1
  : oldValue + 1

  counterValueElem.textContent = newValue;

  localStorage.setItem('counterValue', newValue)


}

// const someBtnElem = document.querySelectorAll('.counter__button')
// console.log(someBtnElem);

counterElem.addEventListener('click', onChangeCalck)

function onStorageChange(e){
 
  counterValueElem.textContent = e.newValue;
}

window.addEventListener('storage', onStorageChange)

const onDocumentLoaded = () => {
  counterValueElem.textContent = localStorage.getItem('counterValue') || 0;
}
document.addEventListener('DOMContentLoaded', onDocumentLoaded)