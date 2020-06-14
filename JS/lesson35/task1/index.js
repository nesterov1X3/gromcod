window.addEventListener("error", function onUnhandledError (err) {
  console.error("error", err.message);
});
// try {
//   const jsonString = '{name":"Tom"}';
//   throw new ReferenceError
//   const userData = JSON.parse(jsonString);
//   console.log(userData);
// } catch (err) {
//   if(err instanceof SyntaxError){
//     console.log('Handled')
//   }else {
//     throw err;
//   }
//   console.error(err.name)
// }
// finally {
//   console.log('Some actions');
// }

let userParsingResult;

try {
  const user = JSON.parse(/* валидный JSON c данными пользователя */'{"name":"Tom"}');
  console.log("User data: ", user);
  userParsingResult = "success";
} catch(e) {
  userParsingResult = "error";
} finally {
  console.log(`User parsing finished with ${userParsingResult}`);
}

let productParsingResult;

try {
  const product = JSON.parse(/* сломанный JSON c данными о продукте */'{"name":"Tom}');
  console.log("Product data: ", product);
  productParsingResult = "success";
} catch(e) {
  productParsingResult = "error";
} finally {
  console.log(`Product parsing finished with ${productParsingResult}`);
}


