const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});


const contactForm = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const formObject = {};

    formData.forEach((value, key) => {
        formObject[key] = value;
    });

    console.log('Form Submitted', formObject);

    formMessage.textContent = 'Your message has been sent successfully!';
    formMessage.style.color = 'green';
    formMessage.classList.remove('hidden');

    contactForm.reset();

    setTimeout(() => {
        formMessage.classList.add('hidden');
    }, 3000);
});

const scrollLinks = document.querySelectorAll('a[href^="#"]');

scrollLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 60,
                behavior: 'smooth'
            });
        }
    });
});
