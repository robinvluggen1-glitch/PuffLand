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
