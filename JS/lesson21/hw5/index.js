export function setButton(buttonText){
   let getSomeEl = document.querySelector('body')
  getSomeEl.innerHTML = document.createElement('button');
  getSomeEl.textContent = buttonText
}
// console.log(setButton('we are stupid'))