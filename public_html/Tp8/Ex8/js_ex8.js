/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("openForm").addEventListener("click", function() {
        document.getElementById("formPopup").style.display = "flex";
    });

    document.querySelector(".close").addEventListener("click", function() {
        document.getElementById("formPopup").style.display = "none";
    });

    document.getElementById("devisForm").addEventListener("submit", function(event) {
        event.preventDefault();

        let longueur = parseFloat(document.getElementById("longueur").value);
        let largeur = parseFloat(document.getElementById("largeur").value);
        let epaisseur = parseFloat(document.getElementById("epaisseur").value) / 100;
        let volume = longueur * largeur * epaisseur;
        let cimentTonne = (volume * 350) / 1000;
        let nbCamions = Math.ceil(volume / 9);
        let prixBeton = volume * 91;
        let prixTransport = nbCamions * 140;
        let totalHT = prixBeton + prixTransport;
        let tva = totalHT * 0.20;
        let totalTTC = totalHT + tva;

        document.getElementById("nomEntreprise").textContent = document.getElementById("entreprise").value;
        document.getElementById("adresseEntreprise").textContent = document.getElementById("adresse").value;
        document.getElementById("emailEntreprise").textContent = document.getElementById("email").value;
        document.getElementById("telEntreprise").textContent = document.getElementById("telephone").value;
        document.getElementById("dateDevis").textContent = new Date().toLocaleDateString();

        let table = document.getElementById("tableDevis");
        table.innerHTML = `
            <tr>
                <th>Description</th>
                <th>Quantité</th>
                <th>Prix unitaire (€)</th>
                <th>Total (€)</th>
            </tr>
            <tr>
                <td>Béton</td>
                <td>${volume.toFixed(2)} m³</td>
                <td>91€</td>
                <td>${prixBeton.toFixed(2)}€</td>
            </tr>
            <tr>
                <td>Transport (${nbCamions} camions)</td>
                <td>${nbCamions}</td>
                <td>140€</td>
                <td>${prixTransport.toFixed(2)}€</td>
            </tr>
        `;

        document.getElementById("prixTotal").textContent = totalHT.toFixed(2);
        document.getElementById("tva").textContent = tva.toFixed(2);
        document.getElementById("totalTTC").textContent = totalTTC.toFixed(2);

        document.getElementById("formPopup").style.display = "none";
        document.getElementById("devis").style.display = "block";
    });
});
