let counterValue = 0;

const incrementBtn = document.querySelector('[data-action=increment]');
const decrementBtn = document.querySelector('[data-action=decrement]');
const valueEl = document.querySelector('#value');

function increment () {
    counterValue += 1;
    valueEl.textContent = counterValue;
}

function decrement () {
    counterValue -= 1;
    valueEl.textContent = counterValue;
}

incrementBtn.addEventListener('click', increment);
decrementBtn.addEventListener('click', decrement);