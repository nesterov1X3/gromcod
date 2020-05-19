export function createButton(buttonText){
      const findBody = document.querySelector('body')
    const makeSomeButton = document.createElement('button');
     findBody.append(makeSomeButton)
     makeSomeButton.textContent = buttonText
}
// createButton('sast')