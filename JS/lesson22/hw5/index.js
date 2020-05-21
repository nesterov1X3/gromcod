function makeClickOnlyOne(){
  console.log('clicked');
 
  
}
const buttonEl = document.querySelector('.single-use-btn');
buttonEl.addEventListener('click', makeClickOnlyOne, {once: true})