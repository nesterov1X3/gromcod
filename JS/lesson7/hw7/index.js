const filterNames = (arr, text) => {
    const specialNames = arr.filter(item => {
        return item.includes(text) && item.length > 5;
    });
    return specialNames;
}

const numbers = ['Naiken', 'Kairlan', 'Adam', 'Mask'];
console.log(filterNames(numbers, 'ai'));