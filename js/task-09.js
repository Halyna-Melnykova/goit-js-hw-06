const buttonEl = document.querySelector('.change-color');
const spanEl = document.querySelector('.color');
const bodyEl = document.querySelector('body');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const onButtonClick = event => {
  const color = getRandomHexColor();
  console.log(color)

  bodyEl.style.backgroundColor = color;

  spanEl.textContent = color;
}

buttonEl.addEventListener('click', onButtonClick);