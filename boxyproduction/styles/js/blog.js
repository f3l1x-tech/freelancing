document.getElementById('articleForm').addEventListener('submit', function(e) {
  e.preventDefault();
  document.getElementById('articleMessage').textContent = "Article publié (simulation) !";
  this.reset();
});

document.querySelectorAll('.commentForm').forEach(form => {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    this.nextElementSibling.textContent = "Commentaire envoyé (simulation) !";
    this.reset();
  });
});