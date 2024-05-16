const button = document.getElementById('button');

button.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent default form submission

  const emailInput = document.querySelector('.js-mail');
  const email = emailInput.value.trim();
  const pattern = /^[a-zA-Z0-9_+-]+(\.[a-zA-Z0-9_+-]+)*@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/;

  const mailCheck = pattern.test(email);
  const errorElement = document.getElementById('js-error');

  if (mailCheck) {
    errorElement.classList.add('hidden'); // Hide error message
  } else {
    errorElement.classList.remove('hidden'); // Show error message
  }
});