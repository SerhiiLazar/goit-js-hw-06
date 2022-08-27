// Задание 10 (выполнять не обязательно)
// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>

// Создай функцию createBoxes(amount), которая принимает один параметр - число. Функция создает столько <div>, сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX. Используй готовую функцию getRandomHexColor для получения цвета.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

const inputEl = document.querySelector('input');
const btnCreat = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');
const boxesElem = document.querySelector('#boxes');


btnCreat.addEventListener('click', createBoxes);

btnDestroy.addEventListener('click', () => { 
    boxesElem.innerHTML = "";
    inputEl.value = "";
    
});

let size = 30;


function createBoxes(amount) {
  const boxes = [];
  amount = inputEl.value;
  size += 10;
  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement('div');
   
    
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = getRandomHexColor();
    

    boxes.push(div);
    
  }
  boxesElem.append(...boxes);
  
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
};