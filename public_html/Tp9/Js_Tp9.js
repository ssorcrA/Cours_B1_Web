/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */
// EXERCICE 1
const definitions = new Map([
    ["html", {
    titre: "HTML",
    texte: "HTML (HyperText Markup Language) est le langage standard utilisé pour créer la structure des pages web.",
    image: "Images/HMTL.png"
    }],
    ["css", {
    titre: "CSS",
    texte: "CSS (Cascading Style Sheets) permet de styliser les éléments HTML en définissant couleurs, tailles, positions, etc."
    }],
    ["javascript", {
    titre: "JavaScript",
    texte: "JavaScript est un langage de programmation qui permet de rendre les pages web interactives et dynamiques."
    }],
    ["dom", {
    titre: "DOM",
    texte: "Le DOM (Document Object Model) représente la structure hiérarchique d'une page HTML que JavaScript peut manipuler."
    }],
    ["spa", {
    titre: "Application web monopage",
    texte: "Une SPA (Single Page Application) est une application web qui se charge une seule fois et met à jour dynamiquement le contenu."
    }],
    ["react", {
    titre: "React",
    texte: "React est une bibliothèque JavaScript développée par Meta pour construire des interfaces utilisateur réactives."
    }],
    ["vue", {
    titre: "Vue.js",
    texte: "Vue.js est un framework progressif JavaScript pour construire des interfaces utilisateurs intuitives et modulaires."
    }],
    ["webapi", {
    titre: "Web API",
    texte: "Les Web APIs permettent d'accéder à des fonctions avancées du navigateur comme la géolocalisation, le stockage local ou les capteurs."
    }],
    ["accessibilite", {
    titre: "Accessibilité",
    texte: "L'accessibilité web vise à rendre les contenus et services web utilisables par tous, y compris les personnes en situation de handicap."
    }]



]);

document.querySelectorAll(".mot-def").forEach(mot => {
    mot.addEventListener("mouseenter", e => {
        const def = definitions.get(e.target.dataset.mot);
        const popup = document.getElementById("popup-def");
        document.getElementById("popup-title").innerText = def.titre;
        document.getElementById("popup-text").innerText = def.texte;
        popup.style.left = e.pageX + "px";
        popup.style.top = e.pageY + "px";
        popup.classList.remove("hidden");
    });
    mot.addEventListener("mouseleave", () => {
        document.getElementById("popup-def").classList.add("hidden");
    });
});

// EXERCICE 2
document.getElementById("form-visite").addEventListener("submit", e => {
    e.preventDefault();
    const nom = document.getElementById("nom").value;
    const prenom = document.getElementById("prenom").value;
    const bac = document.getElementById("bac").value;
    const tbody = document.querySelector("#table-visiteurs tbody");
    const row = `<tr><td>${nom}</td><td>${prenom}</td><td>${bac}</td></tr>`;
    tbody.innerHTML += row;
    e.target.reset();
});

// EXERCICE 3
function miseAJourRebours() {
    const evenement = new Date("2025-05-31T21:00:00");
    const maintenant = new Date();
    const diff = evenement - maintenant;

    if (diff <= 0) {
        document.getElementById("compte-rebours").innerText = "Évènement atteint !";
        return;
    }

    const jours = Math.floor(diff / (1000 * 60 * 60 * 24));
    const heures = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const secondes = Math.floor((diff / 1000) % 60);

    document.getElementById("compte-rebours").innerText = 
        `${jours}j ${heures}h ${minutes}m ${secondes}s`;

    setTimeout(miseAJourRebours, 1000);
}
miseAJourRebours();

// EXERCICE 4
function genererCalendrier() {
    const premierJour = parseInt(document.getElementById("jour").value);
    const mois = parseInt(document.getElementById("mois").value);
    const annee = parseInt(document.getElementById("annee").value);
    const taille = document.getElementById("taille").value;
    const couleur = document.getElementById("couleur").value;

    const tailles = { petit: "10px", moyen: "14px", grand: "18px" };
    const jours = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];
    const nbJours = new Date(annee, mois, 0).getDate();
    
    let html = `<div class="calendrier" style="font-size:${tailles[taille]}; color:${couleur};"><table><tr>`;
    jours.forEach(j => html += `<th>${j}</th>`);
    html += "</tr><tr>";

    let i;
    for (i = 1; i < premierJour; i++) html += "<td></td>";

    for (let j = 1; j <= nbJours; j++) {
        html += `<td>${j}</td>`;
        if ((i + j - 1) % 7 === 0) html += "</tr><tr>";
    }
    html += "</tr></table></div>";

    document.getElementById("calendrier").innerHTML = html;
}


