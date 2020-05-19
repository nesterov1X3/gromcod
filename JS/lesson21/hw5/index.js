export function setButton(buttonText){

  let getSomeEl = document.querySelector('body')
    getSomeEl.innerHTML = document.createElement('button');
    // document.createElement('button') = element.textContent ;
    return document.createElement('button').textContent = buttonText;
}
console.log(setButton('we are stupid'))