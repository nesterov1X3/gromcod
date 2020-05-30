//algo
//input: 2 obj;
//output: 1 obj;
//subtract one argument from another (module)
//make true format
const seconds = 1000;
const minutes = seconds * 60;
const hours = minutes * 60;
const days = hours * 24;

export function getDiff(startDate, endDate){
// const diffTime = endDate - startDate;
const diffMode = Math.abs(endDate - startDate)

// const seconds = 1000;
// const minutes = seconds * 60;
// const hours = minutes * 60;
// const days = hours * 24;

const dayRes = Math.floor((diffMode /  days))
// console.log(dayRes);

const hourRes = Math.floor((diffMode %  days)  / hours)
// console.log(hourRes)

const minutesRes = Math.floor((diffMode %  hours)  / minutes)
console.log(minutesRes);

const secondsRes = Math.floor((diffMode %  minutes)  / seconds)
console.log(secondsRes);

  return `${dayRes}d ${hourRes}h ${minutesRes}m ${secondsRes}s`



}
// const result = getDiff(new Date(1943, 21, 1, 5, 19), new Date(1944, 21, 17, 3, 17))
// console.log(result);
















// function test(){
//   const g = new Date;
//   return g.getDate()
// }
// console.log(test());

