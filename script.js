document.addEventListener("DOMContentLoaded", () => {
  // --------Contact form ----- //
  const contactForm = document.querySelector('.contact-form');
  const nameInput = document.getElementById('name');
  const subjectInput = document.getElementById('subject');
  const messageInput = document.getElementById('message');
  const formMessage = document.getElementById('formMessage');

  contactForm?.addEventListener('submit', e => {
    e.preventDefault();
		// basic form validation
    if (nameInput.value.trim() === "" || subjectInput.value.trim() === "" || messageInput.value.trim() === "") {
      formMessage.textContent = "Please fill out all fields.";
      formMessage.style.color = "red";
    } else {
      formMessage.textContent = "Thank you! Your message has been sent.";
      formMessage.style.color = "green";
      contactForm.reset();
    }
  });

  // ----------- Modal popup --- // 
	const modal = document.getElementById("modal");
  const closeBtn = document.getElementById("closeModal");
  const modalImg = document.getElementById("modalImg");
  const modalTriggers = document.querySelectorAll(".openModal");

  modalTriggers.forEach(trigger => {
    trigger.addEventListener("click", () => {
      // grab the img inside the clicked card
      const imgElement = trigger.querySelector("img");
      modalImg.src = imgElement.src;
      modalImg.alt = imgElement.alt;
			// will open modal
      modal.classList.add("show"); 
    });
  });

  closeBtn.addEventListener("click", () => modal.classList.remove("show"));
  window.addEventListener("click", e => {
    if (e.target === modal) modal.classList.remove("show");
  });
});