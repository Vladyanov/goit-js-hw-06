const blurInputEl = document.querySelector('#validation-input');

const onInputBlur = event => {
    const symbolsCount = event.currentTarget.value.trim().length;
    const dataLength = Number(event.currentTarget.dataset.length);
    

    if (dataLength === symbolsCount) {
        if (event.currentTarget.classList.contains('invalid')) {
            event.currentTarget.classList.remove('invalid');
        }
        event.currentTarget.classList.add('valid'); 
    } else {
        if (event.currentTarget.classList.contains('valid')) {
            event.currentTarget.classList.remove('valid');
        }
        event.currentTarget.classList.add('invalid');
    }
}

blurInputEl.addEventListener('blur', onInputBlur);