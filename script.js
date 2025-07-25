// Smooth scroll & section show/hide
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    // Remove active from all links
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    this.classList.add('active');

    // Hide all sections
    document.querySelectorAll('.section').forEach(section => section.classList.remove('active'));

    // Show clicked section
    const id = this.getAttribute('href').substring(1);
    document.getElementById(id).classList.add('active');

    // Close mobile nav
    document.querySelector('.nav-links').classList.remove('show');
    document.getElementById('menu-toggle').setAttribute('aria-expanded', 'false');
  });
});

// Mobile menu toggle
document.getElementById('menu-toggle').addEventListener('click', () => {
  const navLinks = document.querySelector('.nav-links');
  const isOpen = navLinks.classList.toggle('show');
  document.getElementById('menu-toggle').setAttribute('aria-expanded', isOpen.toString());
});

// Contact form validation
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = this.name;
  const email = this.email;
  const message = this.message;

  let hasError = false;

  // Reset error messages
  this.querySelectorAll('.error-message').forEach(el => (el.style.display = 'none'));

  if (name.value.trim().length < 2) {
    name.nextElementSibling.textContent = 'Name must be at least 2 characters.';
    name.nextElementSibling.style.display = 'block';
    hasError = true;
  }

  if (!email.value.includes('@') || !email.value.includes('.')) {
    email.nextElementSibling.textContent = 'Enter a valid email address.';
    email.nextElementSibling.style.display = 'block';
    hasError = true;
  }

  if (message.value.trim().length < 10) {
    message.nextElementSibling.textContent = 'Message must be at least 10 characters.';
    message.nextElementSibling.style.display = 'block';
    hasError = true;
  }

  if (!hasError) {
    alert('Thanks! Your message was sent (not really, this is a demo).');
    this.reset();
  }
});
