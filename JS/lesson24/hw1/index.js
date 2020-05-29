//algo
//input: 2 obj;
//output: 1 obj;
//subtract one argument from another (module)
//make true format
export function getDiff(startDate, endDate){
const diffTime = startDate - endDate;
const diffMode = Math.abs(diffTime)

const seconds = 1000;
const minutes = seconds * 60;
const hours = minutes * 60;
const days = hours * 24;

const dayRes = Math.floor((diffMode /  days))
// console.log(dayRes);

const hourRes = Math.floor((diffMode %  days)  / hours)
// console.log(hourRes)

const minutesRes = Math.floor((diffMode %  hours)  / minutes)
// console.log(minutesRes);

const secondsRes = Math.floor((diffMode %  minutes)  / seconds)
// console.log(secondsRes);

  return `${dayRes}d, ${hourRes}h, ${minutesRes}m, ${secondsRes}s`

  


}
const result = getDiff(new Date(1943, 21, 15, 5, 29), new Date(1942, 21, 17, 37, 1))
// console.log(result);
















// function test(){
//   const g = new Date;
//   return g.getDate()
// }
// console.log(test());

