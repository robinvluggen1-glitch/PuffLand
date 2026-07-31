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

let panier = JSON.parse(localStorage.getItem("panier")) || [];

if (panier.length === 0) {

liste.innerHTML = "<p>Votre panier est vide.</p>";

} else {

let html = "";
let total = 0;

panier.forEach((article) => {

html += `
<div class="carte">
<h3>${article.modele}</h3>
<p><strong>Goût :</strong> ${article.gout}</p>
<p><strong>Prix :</strong> ${article.prix} €</p>
</div>
`;

total += article.prix;

});

html += `
<div class="carte">
<h2>Total : ${total} €</h2>
</div>
`;

liste.innerHTML = html;

}

}
