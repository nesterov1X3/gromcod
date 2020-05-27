const generateNumberRange = (from, to) =>{
  const result = [];

  for(let i = from; i <= to; i++){
    result.push(i);
  }

  return result;
}

const getLineSeats = () => generateNumberRange(1, 10)
  .map(seatNumber => `
        <div
           class="sector__seat"
           data-sector-number ="${seatNumber}"
       ></div>
        `).join('');

        

const getSectorLines = () => {
  const seatsString = getLineSeats()

  return generateNumberRange(1, 10)
  .map(lineNumber => `
        <div
           class="sector__line"
           data-sector-number ="${lineNumber}"
       >${seatsString}</div>
        `).join('');
};

const arenaElem = document.querySelector('.arena');

const sectorsString =() => {
    const linesString = getSectorLines();

    const sectorsString = generateNumberRange(1, 3)
       .map(sectorNumber => `
        <div
           class="sector"
           data-sector-number ="${sectorNumber}"
       >${linesString()}</div>
        `).join('');

        arenaElem.innerHTML = sectorsString;
};

const OnSeatSelect = event => {
  const isSeat = event.target.classList.contains('sector__seat')

  if(!isSeat){
    return
  }
  const seatNumber = event.target.dataset.seatNumber;
  const lineNumber = event.target.closest('.sector__line').dataset.lineNumber;
  const lineNumber = event.target.closest('.sector').dataset.sectorNumber;

 const selectedSeatElem = document.querySelector('.board__selected-seat')
 selectedSeatElem.textContent = `S ${sectorNumber} - L ${lineNumber} - S ${seatNumber}`
};


arenaElem.addEventListener('click', OnSeatSelect)

renderArena()