const InputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

InputEl.addEventListener('input', () => {
    console.log(InputEl.value)
   textEl.style.fontSize = InputEl.value + 'px'
  });