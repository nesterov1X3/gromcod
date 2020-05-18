export function getTitle(){
     let getSomeTitle = document.querySelector('.title')
     return getSomeTitle.textContent
}
// console.log(getTitle())
export function getDescription(){
     let getSomeDescription = document.querySelector('.about')
     return getSomeDescription.innerText
}
// console.log(getDescription())

export function getPlans(){
     let getSomePlans = document.querySelector('.plans')
     return getSomePlans.innerHTML
}

export function getGoal(){
     let getSomeGoal = document.querySelector('.goal')
     return getSomeGoal.outerHTML
}