const inputEl = document.querySelector('#font-size-control');
const scaleTextEl = document.querySelector('#text');

console.log(inputEl);
console.log(scaleTextEl.style.fontSize);

const onSliderChange = (event) => {
    console.log(event.currentTarget.value);
    scaleTextEl.style.fontSize = `${event.currentTarget.value}px`;
}

inputEl.addEventListener('input', onSliderChange);




