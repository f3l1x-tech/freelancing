document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  document.getElementById('formMessage').textContent = "Merci pour votre message ! Je vous répondrai rapidement.";
  this.reset();
});