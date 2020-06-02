const counterElem = document.querySelector('.counter');
// console.log(counterElem);
const counterValueElem = document.querySelector('.counter__value')


const onCounterChange = event => {
  const isButton = event.target.classList.contains('.counter__button');

  if (isButton) {
    return;
  }

  const action = event.target.dataset.action;
  // console.log(action);

  const oldValue = Number(counterValueElem.textContent);
  const newValue = action == 'decrease'
    ? oldValue - 1
    : oldValue + 1

  counterValueElem.textContent = newValue;

  localStorage.setItem('counterValue', newValue)
}


counterElem.addEventListener('click', onCounterChange)

function onStorageChange(e) {
  counterValueElem.textContent = e.newValue;
}

window.addEventListener('storage', onStorageChange)


const onDocumentLoaded = () => {
  counterValueElem.textContent = localStorage.getItem('counterValue') || 0;
}
document.addEventListener('DOMContentLoaded', onDocumentLoaded)