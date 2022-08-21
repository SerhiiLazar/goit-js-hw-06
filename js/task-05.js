// Задание 5
// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>

const refs = {
    input: document.querySelector('#name-input'),
    output: document.querySelector('#name-output'),
};

refs.input.addEventListener('input', onInput);


function onInput(e) {
    console.log(e.currentTarget.value);
    refs.output.textContent = e.currentTarget.value;
    if(e.currentTarget.value === "") {
        refs.output.textContent = "Anonymous";
    }
}