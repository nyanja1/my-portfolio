// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const sectionId = this.getAttribute('href');
      document.querySelector(sectionId).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Contact form submission
  document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    alert(`Thank you, ${name}! Your message has been sent.\n\nEmail: ${email}\nMessage: ${message}`);
    this.reset();
  });