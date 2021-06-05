var readline = require("readline-sync");
rayon  = 0;
longueur = 0;
largeur = 0; 
aire = 0;
Peri = 0;
menu = "";

function affichmenuP(txt) {
    txt = "---------------\n";
    txt = "-------Menu principal---------\n";
    txt = txt + "A : Cercle\n";
    txt = txt + "B : Rectangle\n";
    txt = txt + "Q : Quitter\n";
    console.log(txt);

}

// var k = calculAire(aire);
// calculAire(k);
// var q = calculPeri(peri);
// calculPeri(q);
// var n = calculAireRec(largeur, longueur);
// calculAireRec(n);
// var s = calculPeriRec(largeur, longueur);
// calculPeriRec(s);



// function calculAire() {
//     aire = p * (rayon ** 2);
//     return aire;

// }

// function calculPeri() {
//     peri = p * rayon * 2;
//     return peri;

// }


// function calculAireRec() {
//     aire = largeur * longueur;
//     return aire;

// }

// function calculPeriRec() {
//     peri = longueur + 2 * largeur;
//     return peri;

// }

do {

    affichmenuP();
    choixPrincipal = readline.question("Quel est votre choixPrincipal : A ou B ou Q ? ");


    switch (choixPrincipal) {
        case "A":
            gestionCercle();
            break;
        case "B":
            gestionRectangle();
            break;
        case "Q":
            console.log(" A + ");
            break;
        default:
            console.log("Cas non prise en compte. Recommencez ! ");
    }
} while (choixPrincipal != "Q");

function affichmenu() {
    var msg = "----------------------\n";
    msg = msg + "***** Menu *********\n";
    msg = msg + "1. Perimetre\n";
    msg = msg + "2. Aire\n";
    msg = msg + "**************";
    console.log(msg);
  }
  
 
function gestionCercle() {
  
rayon = 0;
    var rayon = readline.questionInt("Quel est le rayon du cercle ? ");
    affichmenu(menu);

    choix = 0;
    do {
        choix = readline.questionInt("Quel est votre choix ? ");
    }
    while (choix !== 1 && choix !== 2) {

        if (choix === 1) {
            console.log("Le perimetre d'un cercle de rayon " + rayon + " est " + calculPeri(q));
        } else {
            (choix === 2)
            console.log("Aire d'un cercle de rayon" + rayon + " est " + calculAire(K));
        }


    }


}

function gestionRectangle() {
    

    largeur = readline.questionInt("Quel est la longeur ? ");
    longueur = readline.questionInt("Quel est la longueur ? ");
    affichmenu(menu);


    choix = 0;
    do {
        choix = readline.questionInt("Quel est votre choix ? ");
    }
    while (choix !== 1 && choix !== 2) {
        if (choix === 1) {
            console.log("Le perimetre d'un rectangle de " + largeur + " par " + longueur + " est " + calculPeriRec(s));
        } else {
            (choix === 2)
            console.log("Aire d'un rectangle de " + largeur + " par " + longueur + " est " + calculAireRec(n));
        }

    }  


}