function hadleClick(event){
    console.log(event.target.textContent);
    
}
const makeSomeBtn = document.querySelector('.btn')
const makeSomeBtn1 = document.querySelector('.btn').nextElementSibling
// const upgradeBtn = Array.from(makeSomeBtn)
// const makeSomeBtn1 = document.querySelector('body > button:nth-child(2)');

makeSomeBtn.addEventListener('click', hadleClick)
makeSomeBtn1.addEventListener('click', hadleClick)