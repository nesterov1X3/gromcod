export function finishList(){
     const findList1 = document.querySelector('.list')
     const makeFirstEl = document.createElement('li')
     makeFirstEl.textContent = '1';
     findList1.prepend(makeFirstEl)

     const findList2= document.querySelector('.special')
     const makeSecondEl = document.createElement('li')
     makeSecondEl.textContent = '4';
     findList2.before(makeSecondEl)


     const findList3= document.querySelector('.special')
     const makeThirdEl = document.createElement('li')
     makeThirdEl.textContent = '6';
     findList3.after(makeThirdEl)
     

     const findList4= document.querySelector('.list')
     const makeFoughtEl = document.createElement('li')
     makeFoughtEl.textContent = '8';
     findList4.append(makeFoughtEl)

}
// finishList()