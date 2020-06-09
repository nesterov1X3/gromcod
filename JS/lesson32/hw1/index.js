/*
 * ф-ция makePromise должна вернуть промис со значением переданным в ф-цию
 */

/* ...code here */
const makePromise = number =>  new Promise(resolve => {
   resolve(number)
})

/*
 * пример использования
 */
makePromise(17)
    .then(number => {
        console.log(number); // 17
    });