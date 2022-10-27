const inputEl = document.querySelector('#font-size-control');
const scaleTextEl = document.querySelector('#text');

const onSliderChange = (event) => {
    scaleTextEl.style.fontSize = `${event.currentTarget.value}px`;
}

inputEl.addEventListener('input', onSliderChange);




