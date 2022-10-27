function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEl = document.querySelector('input');
console.log('inputEl', inputEl.textContent);
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesEl = document.querySelector('#boxes');

const createBoxes =  amount => {
  const items = [];
  let width = 30;
  let height = 30;
  for (let i = 0; i < amount; i++) {
    const item = document.createElement("div");
    item.style.width = `${width}px`;
    item.style.height = `${height}px`;
    item.style.backgroundColor = getRandomHexColor();
    item.classList.add("item");
    items.push(item);
    width += 10;
    height += 10;
  }
  boxesEl.append(...items);
}

const destroyBoxes = () => {
  boxesEl.innerHTML = '';
}


createBtn.addEventListener('click', () => createBoxes(inputEl.value));
destroyBtn.addEventListener('click', destroyBoxes);