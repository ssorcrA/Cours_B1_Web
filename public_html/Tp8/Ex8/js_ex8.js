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
        
        let surface = parseFloat(document.getElementById("surface").value);
        let epaisseur = parseFloat(document.getElementById("epaisseur").value);
        let prixBase = 50;
        let prixTotal = surface * epaisseur * prixBase;
        let tva = prixTotal * 0.20;
        let totalTTC = prixTotal + tva;

        document.getElementById("nomEntreprise").textContent = document.getElementById("entreprise").value;
        document.getElementById("adresseEntreprise").textContent = document.getElementById("adresse").value;
        document.getElementById("emailEntreprise").textContent = document.getElementById("email").value;
        document.getElementById("telEntreprise").textContent = document.getElementById("telephone").value;
        document.getElementById("devisSurface").textContent = surface;
        document.getElementById("devisEpaisseur").textContent = epaisseur;
        
        document.getElementById("dateDevis").textContent = new Date().toLocaleDateString();
        
        document.getElementById("prixTotal").textContent = prixTotal.toFixed(2) + " €";
        document.getElementById("tva").textContent = tva.toFixed(2) + " €";
        document.getElementById("totalTTC").textContent = totalTTC.toFixed(2) + " €";
        
        document.getElementById("formPopup").style.display = "none";
        document.getElementById("devis").style.display = "block";
    });
});