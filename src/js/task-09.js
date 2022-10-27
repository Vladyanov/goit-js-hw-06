function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const colorInfoEl = document.querySelector('.color');
const buttonEl = document.querySelector('.change-color');

const onClick = () => {
  const bgdColor = getRandomHexColor();
  document.body.style.backgroundColor = bgdColor;
  colorInfoEl.textContent = bgdColor;
}

buttonEl.addEventListener('click', onClick);

