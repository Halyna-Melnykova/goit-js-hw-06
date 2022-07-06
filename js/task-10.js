const createBtnEl = document.querySelector('[data-create]');
const destroyBtnEl = document.querySelector('[data-destroy]');
const inputEl = document.querySelector('input');
// console.log(inputEl)
const newBoxesEl = document.querySelector('#boxes');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const createBoxes = amount => {
   
    // console.log(i)
    const color = getRandomHexColor();
    const boxEl = document.createElement('div');
    newBoxesEl.append(boxEl);
    
    boxEl.style.width = '30px';
    boxEl.style.height = '30px';
    boxEl.style.backgroundColor = color;
  }


createBtnEl.addEventListener('click', createBoxes)

// for (let i = 0; i < amount; i += 1)