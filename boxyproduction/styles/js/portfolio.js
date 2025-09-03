const portfolioList = document.getElementById('portfolioList');
const portfolioForm = document.getElementById('portfolioForm');
const portfolioMessage = document.getElementById('portfolioMessage');

// Stockage temporaire en mémoire (simulation)
let projets = [];

portfolioForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const nom = this.querySelector('input[type="text"]').value;
  const desc = this.querySelector('textarea').value;
  const lien = this.querySelector('input[type="url"]').value;

  // Ajout du projet
  projets.push({ nom, desc, lien });
  afficherProjets();
  portfolioMessage.textContent = "Projet enregistré (simulation) !";
  this.reset();
});

function afficherProjets() {
  portfolioList.innerHTML = '';
  projets.forEach(projet => {
    const div = document.createElement('div');
    div.className = 'portfolio-item';
    div.innerHTML = `<h3>${projet.nom}</h3>
      <p>${projet.desc}</p>
      ${projet.lien ? `<a href="${projet.lien}" target="_blank">Voir le projet</a>` : ''}`;
    portfolioList.appendChild(div);
  });
}

// Initialisation
afficherProjets();