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

// const newCustom = Object.assign({}, customers)
// let newCustom = customers;
//  const newCustom = {...customers}
let newCustom = JSON.parse(JSON.stringify(customers));

function copy(customers) {
    let objCopy = {}; // objCopy будет хранить копию mainObj
    let key;
  
    for (key in customers) {
      objCopy[key] = customers[key]; // копирует каждое свойство objCopy
    }
  }

const getCustomersList = customersGet => {
    // const getListArr = Object.entries(newCustom);
    const values = Object.values(newCustom);
    const keysCustom = Object.keys(newCustom);
   
    values.reduce((acc, element, index) => {
              return (acc = element.id = keysCustom[index]);
            }, {});
            values.sort((a, b) => a.age - b.age);
     return values;

}


// const getCustomersList = (obj) => {
//     const arrUsers = Object.keys(newObj);
//     const values = Object.values(newObj);
//     values.reduce((acc, elm, index) => {
//       return (acc = elm.id = arrUsers[index]);
//     }, {});
//     values.sort((a, b) => a.age - b.age);
//     return values;
//   };
//   const result = getCustomersList(newObj);
//   console.log(result);

//     const getListArr = Object.entries(customersGet);
//     const copyCustumers = getListArr.slice()

//     const values = Object.values(customersGet);
//     const keysCustom = Object.keys(customersGet);

//     const newArr = []
//      values.reduce((acc, element, index) => {
//       return (acc = element.id = keysCustom[index]);
//     }, {});
//     values.sort((a, b) => a.age - b.age);
//     return values;
//   };

    // const newArr = [];
    // const getSomeFind = copyCustumers.map(item => {
    //     const getId1 = item.shift()
    //     item[0].id = getId1
       
        
    //   });
    

    //  const getId1 = copyCustumers[0].shift()
    //  const getId2 = copyCustumers[1].shift()
    //  copyCustumers[0][0].id = getId1;
    //  copyCustumers[1][0].id = getId2;

    // return getListArr;

const result = getCustomersList(customers);
console.log(result);
// console.log(customers)