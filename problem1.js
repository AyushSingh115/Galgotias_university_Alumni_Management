// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute('href'));

      if (target) {
          target.scrollIntoView({
              behavior: 'smooth'
          });
      }
  });
});

// Show alert on "Get Started" button click
const getStartedButton = document.querySelector('.btn-primary');
if (getStartedButton) {
  getStartedButton.addEventListener('click', function (e) {
      e.preventDefault();
      alert('Thank you for your interest! We will guide you to the next step.');
  });
}

// Show alert on "Book a Demo" button click
const bookDemoButton = document.querySelector('.btn');
if (bookDemoButton) {
  bookDemoButton.addEventListener('click', function (e) {
      e.preventDefault();
      alert('We will contact you shortly to schedule a demo!');
  });
}
