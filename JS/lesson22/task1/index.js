const divElem = document.querySelector('.rect_div')
const pElem = document.querySelector('.rect_p')
const spanElem = document.querySelector('.rect_span')

const logTarget = (text, color) =>{
    const evenListElem = document.querySelector('.events-list');

    evenListElem.innerHTML += `<span style = "color: ${color}; margin-left: 8px;"> ${text} </span>`
}

const logGreenDiv = logTarget.bind(null, 'DIV', 'green')
const logGreenP = logTarget.bind(null, 'P', 'green')
const logGreenSpan = logTarget.bind(null, 'Span', 'green')

const logGreyDiv = logTarget.bind(null, 'DIV', 'grey')
const logGreyP = logTarget.bind(null, 'P', 'grey')
const logGreySpan = logTarget.bind(null, 'Span', 'grey')


divElem.addEventListener('click', logGreyDiv , true)
divElem.addEventListener('click', logGreenDiv)

pElem.addEventListener('click', logGreyP , true)
pElem.addEventListener('click',logGreenP )


spanElem.addEventListener('click',logGreySpan , true)
spanElem.addEventListener('click', logGreenSpan)




function someClear(){
  form.innerHTML = null;
}

let btnClear = document.querySelector('.clear-btn');
let form = document.querySelector('.events-list');

btnClear.addEventListener('click', someClear)

// let btnClear = document.querySelector('.clear-btn');
// let form = document.querySelector('.events-list');
// btnClear.addEventListener('click', function () {
//   form.reset();
// });

// const logGreenDiv = logTarget.bind(null, 'DIV', 'green')
// const logGreenP = logTarget.bind(null, 'P', 'green')
// const logGreenSpan = logTarget.bind(null, 'Span', 'green')

// const logGreenDiv = logTarget.bind(null, 'DIV', 'grey')
// const logGreenP = logTarget.bind(null, 'P', 'grey')
// const logGreenSpan = logTarget.bind(null, 'Span', 'grey')