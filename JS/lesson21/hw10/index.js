export function manageClasses(){
     const findFirstEl = document.querySelector('.one');
     findFirstEl.classList.add('selected')

     const findSecondEl = document.querySelector('.two');
     findSecondEl.classList.remove('selected')

     const findThirdEl = document.querySelector('.three');
     findThirdEl.classList.remove('three_done')

     const findFirthEl = document.querySelector('.four');
     findFirthEl.classList.add('another-class')

}
// manageClasses()