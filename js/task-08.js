
// Задание 8
// Напиши скрипт управления формой логина.

// <form class="login-form">
//   <label>
//     Email
//     <input type="email" name="email" />
//   </label>
//   <label>
//     Password
//     <input type="password" name="password" />
//   </label>
//   <button type="submit">Login</button>
// </form>

// Обработка отправки формы form.login-form должна быть по событию submit.
// При отправке формы страница не должна перезагружаться.
// Если в форме есть незаполненные поля, выводи alert с предупреждением о том, что все поля должны быть заполнены.
// Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект, где имя поля будет именем свойства, а значение поля - значением свойства. Для доступа к элементам формы используй свойство elements.
// Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.
const form = document.querySelector('.login-form');
const input = document.querySelector('input');

form.addEventListener('submit', formSubmit);
function formSubmit(event) {
    event.preventDefault();
    
    const formEl = event.currentTarget.elements;

    const email = formEl.email.value;
    const password = formEl.password.value;

    const formData = {
        email,
        password,
    };
    
    if( input.value === "") {
        window.alert('Всі поля повінні бути заповнені')
    } else {
        console.log(formData);
        event.currentTarget.reset();
    };
};