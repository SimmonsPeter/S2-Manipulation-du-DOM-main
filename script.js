let panier = {
    pommes: 0,
    poires: 0,
    prunes: 0,
    pommesPrix: 0,
    poiresPrix: 0,
    prunesPrix: 0,
    pommesPoids: 0,
    poiresPoids: 0,
    prunesPoids: 0,
    total: 0,
    totalPrix: 0,
    totalPoids: 0
}
let sacDePommes = {
    prix: parseFloat(document.getElementById("prixSacDePommes").innerText),
    poids: parseInt(document.getElementById("poidsSacDePommes").innerText)
}
let sacDePoires = {
    prix: parseFloat(document.getElementById("prixSacDePoires").innerText),
    poids: parseInt(document.getElementById("poidsSacDePoires").innerText)
}
let sacDePrunes = {
    prix: parseFloat(document.getElementById("prixSacDePrunes").innerText),
    poids: parseInt(document.getElementById("poidsSacDePrunes").innerText)
}

document.getElementById("BTNPommes").onclick = function () {
    Ajouter("Pommes")
};
document.getElementById("BTNPoires").onclick = function () {
    Ajouter("Poires")
};
document.getElementById("BTNPrunes").onclick = function () {
    Ajouter("Prunes")
};

function Ajouter(choix) {
    switch (choix) {
        case "Pommes":
            panier.pommes++;
            panier.pommesPrix += sacDePommes.prix;
            panier.pommesPoids += sacDePommes.poids;
            document.querySelector("#qtePommes").textContent = panier.pommes;
            document.querySelector("#prixPommes").textContent = panier.pommesPrix.toFixed(2);
            document.querySelector("#poidsPommes").textContent = panier.pommesPoids;
            break;
        case "Poires":
            panier.poires++;
            panier.poiresPrix += sacDePoires.prix;
            panier.poiresPoids += sacDePoires.poids;
            document.querySelector("#qtePoires").textContent = panier.poires;
            document.querySelector("#prixPoires").textContent = panier.poiresPrix.toFixed(2);
            document.querySelector("#poidsPoires").textContent = panier.poiresPoids;
            break;
        case "Prunes":
            panier.prunes++;
            panier.prunesPrix += sacDePrunes.prix;
            panier.prunesPoids += sacDePrunes.poids;
            document.querySelector("#qtePrunes").textContent = panier.prunes;
            document.querySelector("#prixPrunes").textContent = panier.prunesPrix.toFixed(2);
            document.querySelector("#poidsPrunes").textContent = panier.prunesPoids;
            break;
    }
    panier.total = panier.pommes + panier.poires + panier.prunes;
    panier.totalPrix = panier.pommesPrix + panier.poiresPrix + panier.prunesPrix;
    panier.totalPoids = panier.pommesPoids + panier.poiresPoids + panier.prunesPoids;
    document.querySelector("#qteTotal").textContent = panier.total;
    document.querySelector("#prixTotal").textContent = panier.totalPrix.toFixed(2);
    document.querySelector("#poidsTotal").textContent = panier.totalPoids;
}