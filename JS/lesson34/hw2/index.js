//записать юрл
//найти  поля querySelector
//написать функцию которая отправляет данные на сервер
     //создать объект с данными которвые передаем
     //передать его в body метода fetch с настройками POST
     //повесить ивент на кнопку
//ответ вывести в alert
//очистить строку
// при ошибки вывести текст
const baseUrl = 'https://5ee639a552bb0500161fcc10.mockapi.io/api/v1/users'

const loginElem = document.querySelector('#email');
const nameElem = document.querySelector('#name');
const passwordElem = document.querySelector('#password');
const submitElem = document.querySelector('.submit-button')

const valLoginElem =loginElem.textContent;
const valNameElem = nameElem.textContent;
const valPassElem = passwordElem.textContent;

const user = {
    valLoginElem,
    valNameElem,
    valPassElem,
}
export const createUser = (user) => {
    return fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(user),
    });
  };
  createUser(user)
    .then(data =>  console.log(data))

submitElem.addEventListener('click', createUser)