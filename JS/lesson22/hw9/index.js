const findSomeEl1 = document.querySelector('.pagination__page')
const findDataEl1 = findSomeEl1.getAttribute('data-page-number')
// console.log(findDataEl1);

const findSomeEl2 = document.querySelector('div > button:nth-child(2)')
const findDataEl2 = findSomeEl2.getAttribute('data-page-number')
// console.log(findDataEl2);

const findSomeEl3 = document.querySelector('div > button:nth-child(3)')
const findDataEl3 = findSomeEl3.getAttribute('data-page-number')
// console.log(findDataEl3);


function hadleClick(event){
    console.log(event.target.textContent);
}

findSomeEl1.addEventListener('click', hadleClick)
findSomeEl2.addEventListener('click', hadleClick)
findSomeEl3.addEventListener('click', hadleClick)