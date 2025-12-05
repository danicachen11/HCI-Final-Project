const contactForm = document.querySelector('.contact-form');
const nameInput = document.getElementById('name');
const subjectInput = document.getElementById('subject');
const messageInput = document.getElementById('message');
const formMessage = document.getElementById('formMessage');

contactForm.addEventListener('submit', e => {
  e.preventDefault();

  // Basic validations
  if (nameInput.value.trim() === "" || subjectInput.value.trim() === "" || messageInput.value.trim() === "") {
    formMessage.textContent = "Please fill out all fields.";
    formMessage.style.color = "red";
  } else {
    formMessage.textContent = "Thank you! Your message has been sent.";
    formMessage.style.color = "green";
    contactForm.reset();
  }
});