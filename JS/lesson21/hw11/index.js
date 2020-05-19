export function squaredNumbers(){
   const findSomeEl = document.querySelector('.number')
   const someEl = findSomeEl.getAttribute('data-number')
//     console.log(someEl);
//    console.log(Array.from(findSomeEl).push(someEl));
//    console.log(someArr);
let makeArr = Array.from(findSomeEl)
makeArr.push(someEl)
findSomeEl.dataset.squaredNumbers = makeArr.map(item => item * item);


const findSomeEl2 = document.querySelector('ul > li:nth-child(2)')
const someEl2 = findSomeEl2.getAttribute('data-number')
let makeArr2 = Array.from(findSomeEl2)
makeArr2.push(someEl2)
findSomeEl2.dataset.squaredNumbers = makeArr2.map(item => item * item);


const findSomeEl3 = document.querySelector('ul > li:last-child')
const someEl3 = findSomeEl3.getAttribute('data-number')
let makeArr3 = Array.from(findSomeEl3)
makeArr3.push(someEl3)
findSomeEl3.dataset.squaredNumbers = makeArr3.map(item => item * item);
}
// squaredNumbers()