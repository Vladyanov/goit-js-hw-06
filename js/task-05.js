const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

const onInputWriting = event => {
    outputEl.textContent =
    event.currentTarget.value.trim() !== '' 
    ? event.currentTarget.value
    : 'Anonymous';
}

inputEl.addEventListener('input', onInputWriting);