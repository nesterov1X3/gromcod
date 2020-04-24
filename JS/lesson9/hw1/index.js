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
    
     const getList = Object.entries(customersGet)   
     const getId1 = getList[0].shift()
     const getId2 = getList[1].shift()
     getList[0][0].id = getId1;
     getList[1][0].id = getId2;

     const objValue = Object.values(getList)
     console.log(objValue)







    // result.forEach((item, ) => {
    //     if (item['age'] > item['age']) {
    //         const firstObj = result.shift()
    //         result.push(firstObj)
    //     }
    // });
    return getList;

}
const result = getCustomersList(customers);
console.log(result);