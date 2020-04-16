const a = [21, 13, 44, 70];
function sortAsc(array){
    let sorted = [];
       while (array.length) 
    sorted = sorted.concat(array.splice(array.indexOf(array.reduce((prev, cur) => prev < cur ? prev : cur)), 1));
    return sorted
}

const arrSort = sortAsc(a);

console.log(arrSort)