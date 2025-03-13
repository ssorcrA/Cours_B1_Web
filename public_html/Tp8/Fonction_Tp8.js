/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 *
 * 
 */
// Exercice 1 : Calcul de la surface d'un rectangle
function exercice1() {
    let x = parseInt(prompt("Entrez la longueur du rectangle :"));
    let y = parseInt(prompt("Entrez la largeur du rectangle :"));
    let surface = x * y;
    console.log("La surface du rectangle est : " + surface);
    alert("La surface du rectangle est : " + surface);
}

// Exercice 2 : Confirmation de l'utilisation des valeurs
function exercice2() {
    let confirmation = false;
    let x, y, surface;
    
    while (!confirmation) {
        x = parseInt(prompt("Entrez la longueur du rectangle :"));
        y = parseInt(prompt("Entrez la largeur du rectangle :"));
        confirmation = confirm("Voulez-vous utiliser X = " + x + " et Y = " + y + " ?");
    }
    
    surface = x * y;
    console.log("La surface du rectangle est : " + surface);
    alert("La surface du rectangle est : " + surface);
}

// Exercice 3 : Vérification des valeurs
function exercice3() {
    let x, y, surface;
    do {
        x = parseInt(prompt("Entrez la longueur du rectangle :"));
        y = parseInt(prompt("Entrez la largeur du rectangle :"));
    } while (isNaN(x) || isNaN(y) || x <= 0 || y <= 0);
    
    surface = x * y;
    console.log("La surface du rectangle est : " + surface);
    alert("La surface du rectangle est : " + surface);
}

// Exercice 4 : Affichage dans la page web
function exercice4() {
    let x, y, surface;
    do {
        x = parseInt(prompt("Entrez la longueur du rectangle :"));
        y = parseInt(prompt("Entrez la largeur du rectangle :"));
    } while (isNaN(x) || isNaN(y) || x <= 0 || y <= 0);
    
    surface = x * y;
    document.write("<h2>La surface du rectangle est : " + surface + "</h2>");
}

// Exercice 5 : Utilisation d'une fonction rect()
function rect(x, y) {
    return x * y;
}

function exercice5() {
    let x, y;
    do {
        x = parseInt(prompt("Entrez la longueur du rectangle :"));
        y = parseInt(prompt("Entrez la largeur du rectangle :"));
    } while (isNaN(x) || isNaN(y) || x <= 0 || y <= 0);
    
    let surface = rect(x, y);
    document.write("<h2>La surface du rectangle est : " + surface + "</h2>");
}
