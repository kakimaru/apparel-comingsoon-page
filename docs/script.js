const button = document.querySelector('.button');

button.addEventListener('click', (event) => {
  event.preventDefault();

  const emailInput = document.querySelector('.js-mail');
  const email = emailInput.value.trim();
  const pattern = /^[a-zA-Z0-9_+-]+(\.[a-zA-Z0-9_+-]+)*@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/;

  const mailCheck = pattern.test(email);
  const errorElement = document.querySelector('#js-error');

  if (mailCheck) {
    errorElement.classList.add('hidden');
  } else {
    errorElement.classList.remove('hidden');
  }
});
