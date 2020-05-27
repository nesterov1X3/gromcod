const dayWeeks = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'St', 'Su']
export function dayOfWeek(date, days){
  const day = new Date(date).getDate();
  const dateInFuture = new Date(date).setDate(day + days);


  return  dayWeeks[new Date(dateInFuture).getDay()]
  // return new Date(dateInFuture)
}

const result = dayOfWeek(new Date(2321, 2, 21), 401)
// console.log(result);
