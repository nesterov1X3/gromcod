const concatProps = obj => {
    const result = [];
      for(let key in obj){
        result.push(obj[key]);
      }
      return result;
}

const user = {
    name: 'John Doe', 
    age: 17,
    interest: 'football',
};

console.log(concatProps(user));