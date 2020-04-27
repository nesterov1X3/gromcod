const customers = {
    'customer-id-1': {
        name: 'William',
        age: 54,
    },

    'customer-id-2': {
        name: 'Tom',
        age: 17,
    },
}

const getCustomersList = customersGet => {
    // const getListArr = Object.entries(newCustom);
    const values = Object.values(customersGet);
    const keysCustom = Object.keys(customersGet);
   
    values.reduce((acc, element, index) => {
              return (acc = element.id = keysCustom[index]);
            }, {});
            values.sort((a, b) => a.age - b.age);
     return values;

}

const result = getCustomersList(customers);
console.log(result);
