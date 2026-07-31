let compteur = localStorage.getItem("panier") || 0;

document.getElementById("compteur").textContent = compteur;

const boutons = document.querySelectorAll("button");

boutons.forEach((bouton) => {
    if (bouton.textContent.includes("Ajouter au panier")) {
        bouton.addEventListener("click", () => {
            compteur++;
            localStorage.setItem("panier", compteur);
            document.getElementById("compteur").textContent = compteur;
        });
    }
});

const liste = document.getElementById("liste-panier");

if (liste) {
    liste.innerHTML = `
        <div class="carte">
            <h3>Articles dans le panier</h3>
            <p>Nombre d'articles : ${compteur}</p>
        </div>
    `;
}
