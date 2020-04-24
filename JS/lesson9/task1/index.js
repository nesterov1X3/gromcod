const user = {
    'John Doe': 19,
    'Tom': 17,
    'Bob': 18,
};

const getAdults = obj =>   Object.entries(obj)
    .filter(user => user[1] >= 18)
    .map(user => user[0]);
        
     


const result = getAdults(user);
console.log(result)