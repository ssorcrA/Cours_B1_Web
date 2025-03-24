/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

/* Style général */
document.addEventListener("DOMContentLoaded", function() {
    // Ouvrir le formulaire
    document.getElementById("openForm").addEventListener("click", function() {
        document.getElementById("formPopup").style.display = "flex";
    });

    // Fermer le formulaire
    document.querySelector(".close").addEventListener("click", function() {
        document.getElementById("formPopup").style.display = "none";
    });

    // Gestion du formulaire
    document.getElementById("devisForm").addEventListener("submit", function(event) {
        event.preventDefault();

        // Récupération des valeurs
        let longueur = parseFloat(document.getElementById("longueur").value);
        let largeur = parseFloat(document.getElementById("largeur").value);
        let epaisseur = parseFloat(document.getElementById("epaisseur").value);
        let surfaceTotale = longueur * largeur;

        // Remplir les infos
        document.getElementById("nomEntreprise").textContent = document.getElementById("entreprise").value;
        document.getElementById("adresseEntreprise").textContent = document.getElementById("adresse").value;
        document.getElementById("emailEntreprise").textContent = document.getElementById("email").value;
        document.getElementById("telEntreprise").textContent = document.getElementById("telephone").value;
        document.getElementById("dateDevis").textContent = new Date().toLocaleDateString();
        document.getElementById("surfaceTotale").textContent = surfaceTotale.toFixed(2);

        // Calcul du devis
        let table = document.getElementById("tableDevis");
        table.innerHTML = `
            <tr>
                <th>Matériau</th>
                <th>Quantité</th>
                <th>Prix unitaire (€)</th>
                <th>Total (€)</th>
            </tr>
        `;

        let prixUnitaire = 50;
        let totalHT = surfaceTotale * epaisseur * prixUnitaire;
        let tva = totalHT * 0.20;
        let totalTTC = totalHT + tva;

        table.innerHTML += `<tr><td>Fourniture et pose</td><td>${surfaceTotale.toFixed(2)} m²</td><td>${prixUnitaire}€</td><td>${totalHT.toFixed(2)}€</td></tr>`;
        document.getElementById("prixTotal").textContent = totalHT.toFixed(2);
        document.getElementById("tva").textContent = tva.toFixed(2);
        document.getElementById("totalTTC").textContent = totalTTC.toFixed(2);

        document.getElementById("formPopup").style.display = "none";
        document.getElementById("devis").style.display = "block";
    });
});
