/*
 * ф-ция makePromise должна вернуть промис со значением переданным в ф-цию
 */

/* ...code here */
export const makePromise = number => Promise.resolve(number)
/*
 * пример использования
 */
makePromise(17)
    .then(number => {
        console.log(number); // 17
    });