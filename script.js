let panier = {
    pommes: 0,
    poires: 0,
    prunes: 0
}

// Pour afficher le nombre de pommes dans la facture détaillée
document.querySelector("#qtePommes").textContent = panier.pommes;

//Lié les bouttons à la fonction

document.getElementById("BTNPommes").onclick = function(){Ajouter("Pommes")};
document.getElementById("BTNPoires").onclick = function(){Ajouter("Poires")};
document.getElementById("BTNPrunes").onclick = function(){Ajouter("Prunes")};

function Ajouter(choix) {
    switch (choix) {
        case "Pommes":
            panier.pommes++;
            document.getElementById("qtePommes").innerText = panier.pommes;

            break;
    }
}