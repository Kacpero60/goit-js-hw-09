const form = document.querySelector('.feedback-form');
const emailInput = form.elements.email;
const messageInput = form.elements.message;
const STORAGE_KEY = 'feedback-form-state';


loadFormData();


form.addEventListener('input', onFormInput);
form.addEventListener('submit', onFormSubmit);

function onFormInput() {
  const formData = {
    email: emailInput.value.trim(),
    message: messageInput.value.trim(),
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(event) {
  event.preventDefault();

  if (!emailInput.value || !messageInput.value) {
    alert('Proszę wypełnić oba pola formularza!');
    return;
  }

  console.log({
    email: emailInput.value,
    message: messageInput.value,
  });

  localStorage.removeItem(STORAGE_KEY);
  form.reset();
}

function loadFormData() {
  const savedData = localStorage.getItem(STORAGE_KEY);

  if (savedData) {
    const { email, message } = JSON.parse(savedData);
    emailInput.value = email || '';
    messageInput.value = message || '';
  }
}
