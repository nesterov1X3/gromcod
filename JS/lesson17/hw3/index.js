// /* ===> 1 <=== */
// const student = {
//   name: 'Tom',
// };

// export function sayName() {
//   console.log(this.name);
// }

// // вызовите ф-цию sayName так, чтобы в консоль вывелось имя студента 
// // ... your code here
// sayName.bind(student)()
// // вызовите ф-цию sayName так, чтобы в консоль вывелось имя 'Bruce' (используйте другой объект)
// // ... your code here
// sayName.bind({name: 'Bruce'})()


// /* ===> 2 <=== */
// const company = {
//   companyName: 'Microsoft'
// };

// function greeting(firstName, lastName) {
//   console.log(`Hello, ${firstName} ${lastName}. Welcome to the ${this.companyName}`);
// }

// // вызовите ф-цию greeting так, чтобы в консоль вывелось 
// // 'Hello, Bob Marley. Welcome to the Microsoft'
// // используйте объект company
// // ... your code here
// greeting.bind(company, 'Bob', 'Marley')()

// /* ===> 3 <=== */
// const country = {
//   countryName: 'Ukraine',
//   capital: 'Kyiv'
// };

// function getPopulation(population) {
//   return `Population in ${this.countryName} is ${population}`;
// }

// // вызовите ф-цию getPopulation так, чтобы она вернула 
// // 'Population in Ukraine is 43000'
// // 43000 передавайте в виде числа
// // используйте объект country
// // результат работы ф-ции getPopulation присвойте в переменную и выведите в консоль
// // ... your code here
// const func = getPopulation.bind(country, 43000);
// console.log(func())


// /* ===> 4 <=== */
// const transaction = {
//   amount: 1200,
//   operation: 'sell',
//   currency: 'USD',
//   exchange: 'NYSE',
//   printTransaction() {
//       console.log(`${this.amount} ${this.currency} - ${this.operation} on ${this.exchange}`);
//   }
// }

// const anotherTransaction = {
//   amount: 400,
//   operation: 'buy',
//   currency: 'USD',
//   exchange: 'NASDAQ',
// };

// // вызовите метод transaction.printTransaction так, чтобы в консоль вывелось
// // '400 USD - buy on NASDAQ'
// // используйте объект anotherTransaction как контекст
// // ... your code here
// transaction.printTransaction.bind(anotherTransaction)()








/* ===> 1 <=== */
const student = {
  name: 'Tom',
};

function sayName() {
  console.log(this.name);
}

/*
* создайте ф-цию sayStudentName которая будет выводить в консоль имя студента 'Tom'
* используйте .bind и ф-цию sayName
*/
export function sayStudentName(){
  sayName.bind(student)()
}
console.log(sayStudentName())
/*
* создайте ф-цию sayBruceName которая будет выводить в консоль имя 'Bruce'
* используйте ф-цию sayName и .bind с нужным объектом
*/
export function sayBruceName(){
  console.log(sayName.bind({name: 'Bruce'})())
}
sayBruceName()
// const sayNameBr = sayBruceName();
// console.log(sayNameBr);


/* ===> 2 <=== */
const company = {
  companyName: 'Microsoft'
};

function greeting(firstName, lastName) {
  console.log(`Hello, ${firstName} ${lastName}. Welcome to the ${this.companyName}`);
}

/*
* создайте ф-цию specialGreeting которая будет выводить в консоль
* 'Hello, Bob Marley. Welcome to the Microsoft`
* используйте ф-цию greeting и .bind с нужным объектом и аргументами
* specialGreeting не должна принимать ни одного аргумента
*/
export function specialGreeting(){
  greeting.bind(company)()
}
console.log(specialGreeting())


/* ===> 3 <=== */
const country = {
  countryName: 'Ukraine',
  capital: 'Kyiv'
};

function getPopulation(population) {
  return `Population in ${this.countryName} is ${population}`;
}

/*
* создайте ф-цию getUkrainePopulation которая будет возвращать строку
* 'Population in Ukraine is 43000`
* 43000 передавайте в виде числа
* используйте ф-цию getPopulation и .bind с нужным объектом и аргументами
* getUkrainePopulation не должна принимать ни одного аргумента
*/



/* ===> 4 <=== */
const transaction = {
  amount: 1200,
  operation: 'sell',
  currency: 'USD',
  exchange: 'NYSE',
  printTransaction() {
      console.log(`${this.amount} ${this.currency} - ${this.operation} on ${this.exchange}`);
  }
}

const anotherTransaction = {
  amount: 400,
  operation: 'buy',
  currency: 'USD',
  exchange: 'NASDAQ',
};

/*
* создайте ф-цию printSpecialTransaction которая будет выводить в консоль
* '400 USD - buy on NASDAQ`
* используйте метод transaction.printTransaction и .bind с нужным объектом
* printSpecialTransaction не должна принимать ни одного аргумента
*/