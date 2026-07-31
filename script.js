// Mise à jour du compteur du panier
function mettreAJourCompteur() {
    const panier = JSON.parse(localStorage.getItem("panier")) || [];
    const compteur = panier.reduce((total, article) => total + article.quantite, 0);

    const element = document.getElementById("compteur");
    if (element) {
        element.textContent = compteur;
    }
}

mettreAJourCompteur();

// Ajouter un produit au panier
function ajouterPanier(modele, gout, prix) {

    let panier = JSON.parse(localStorage.getItem("panier")) || [];

    const article = panier.find(
        p => p.modele === modele && p.gout === gout
    );

    if (article) {
        article.quantite++;
    } else {
        panier.push({
            modele: modele,
            gout: gout,
            prix: prix,
            quantite: 1
        });
    }

    localStorage.setItem("panier", JSON.stringify(panier));

    mettreAJourCompteur();

    alert(gout + " ajouté au panier !");
}

// Affichage du panier
const liste = document.getElementById("liste-panier");

if (liste) {

    const panier = JSON.parse(localStorage.getItem("panier")) || [];

    if (panier.length === 0) {

        liste.innerHTML = "<p>Votre panier est vide.</p>";

    } else {

        let html = "";
        let total = 0;

        panier.forEach((article, index) => {

            const sousTotal = article.prix * article.quantite;
            total += sousTotal;

            html += `
            <div class="carte">
                <h3>${article.modele}</h3>
                <p><strong>Goût :</strong> ${article.gout}</p>
                <p><strong>Quantité :</strong> ${article.quantite}</p>
                <p><strong>Prix :</strong> ${article.prix} €</p>
                <p><strong>Sous-total :</strong> ${sousTotal} €</p>

                <button onclick="supprimerArticle(${index})">
                    🗑️ Supprimer
                </button>
            </div>
            `;

        });

        html += `
        <div class="carte">
            <h2>Total : ${total} €</h2>

            <button onclick="viderPanier()">
                Vider le panier
            </button>
        </div>
        `;

        liste.innerHTML = html;
    }
}

// Supprimer un article
function supprimerArticle(index){

    let panier = JSON.parse(localStorage.getItem("panier")) || [];

    panier.splice(index,1);

    localStorage.setItem("panier", JSON.stringify(panier));

    location.reload();
}

// Vider le panier
function viderPanier(){

    localStorage.removeItem("panier");

    location.reload();
}
