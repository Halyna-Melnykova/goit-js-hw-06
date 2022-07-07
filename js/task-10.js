const createBtnEl = document.querySelector('[data-create]');
const destroyBtnEl = document.querySelector('[data-destroy]');
const inputEl = document.querySelector('input');
const newBoxesEl = document.querySelector('#boxes');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes(amount) {
    // let size = 30;
    amount = Number(inputEl.value);

    for (let i = 0; i < amount; i += 1) {

      const color = getRandomHexColor();

      const boxEl = document.createElement('div');
      const size = 30 + i * 10;
      
      boxEl.style.width = size + 'px';
      boxEl.style.height = size + 'px';
      boxEl.style.backgroundColor = color;

      newBoxesEl.append(boxEl);
    }
  }

function destroyBoxes() {
  newBoxesEl.innerHTML = '';
}
createBtnEl.addEventListener('click', createBoxes);
destroyBtnEl.addEventListener('click', destroyBoxes);

