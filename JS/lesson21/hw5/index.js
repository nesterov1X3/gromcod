export function setButton(buttonText){

  let getSomeEl = document.querySelector('body')
    let createElement =  document.createElement('button');
    getSomeEl.append(createElement)
    createElement.textContent = buttonText;

}
// setButton('we are ')