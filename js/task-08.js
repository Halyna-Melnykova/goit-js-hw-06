const formEl = document.querySelector('.login-form');
const inputEmailEl = document.querySelector('[name="email"]');
const inputPasswordEl = document.querySelector('[name="password"]');

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password }
  } = event.currentTarget;

  if (inputEmailEl.value === '' || inputPasswordEl.value === '') {
    return alert("Please fill in all the fields!");
  }

  console.log({Name: email.value, Password: password.value});
  event.currentTarget.reset();
}
