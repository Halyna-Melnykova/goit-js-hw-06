const InputEl = document.querySelector('#validation-input');

InputEl.addEventListener('blur', () => {
  if (InputEl.value.length === Number(InputEl.dataset.length)) {
    InputEl.classList.add('valid');
    InputEl.classList.remove('invalid');
  } else {
    InputEl.classList.add('invalid');
    InputEl.classList.remove('valid');
  }
});