const toggleButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');
const yearSpan = document.getElementById('year');
const contactForm = document.getElementById('contactForm');
const formNote = document.getElementById('formNote');

if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

if (toggleButton && nav) {
  toggleButton.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggleButton.setAttribute('aria-expanded', String(isOpen));
  });
}

if (contactForm && formNote) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    formNote.textContent = 'Thanks! Your message has been received and will be reviewed soon.';
    contactForm.reset();
  });
}
