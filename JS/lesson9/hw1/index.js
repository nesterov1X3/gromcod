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
const newObj = {...customers}

const getCustomersList = (obj) => {
    const arrUsers = Object.keys(newObj);
    const values = Object.values(newObj);
    values.reduce((acc, elm, index) => {
      return (acc = elm.id = arrUsers[index]);
    }, {});
    values.sort((a, b) => a.age - b.age);
    return values;
  };
  const result = getCustomersList(customers);
  console.log(result);

// const getCustomersList = customersGet => {

//     const getListArr = Object.entries(customersGet);
//     const copyCustumers = getListArr.slice()


//     const newArr = [];
//     const getSomeFind = copyCustumers.map(item => {
//         const getId1 = item.shift()
//         item[0].id = getId1
//         copyCustumers.sort((a, b) => a.age - b.age);

        // const getListValue = Object.values(item);
        // console.log(getListValue)
        // return getListValue.sort((a, b) => a - b);
    //     const result = {};
    //     item.forEach(el => {
    //       result[el] = el;
    //   });
    
    // });

    //  const getId1 = copyCustumers[0].shift()
    //  const getId2 = copyCustumers[1].shift()
    //  copyCustumers[0][0].id = getId1;
    //  copyCustumers[1][0].id = getId2;

//     return getListArr;

// }
// const result = getCustomersList(customers);
// console.log(result);