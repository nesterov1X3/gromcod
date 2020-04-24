const customers = {
    'customer-id-1': {
        name: 'William',
        age: 54
    },

    'customer-id-2': {
        name: 'Tom',
        age: 17
    },
}

const getCustomersList = customersGet => {
    const result = [];
    for (let key in customersGet) {
        result.push(customersGet[key]);
    }
    // const findLowerValue = Object.value(customersGet)
    result.forEach((item, ) => {
        if (item['age'] > item['age']) {
            const firstObj = result.shift()
            result.push(firstObj)
        }
    });
    return result;

}
const result = getCustomersList(customers);
console.log(result);