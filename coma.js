function gestionRectangle(){
 var menu = "";
readline = require('readline-sync');
var aire = 0;
var peri = 0;

largeur = readline.questionInt("Quel est la longeur ? ");
longueur = readline.questionInt("Quel est la longueur ? ");

affichmenu(menu);





do {
  choix = readline.questionInt("Quel est votre choix ? ");
}
while (choix !== 1 && choix !== 2){
    if (choix===1){
        console.log("Le perimetre d'un rectangle de " + largeur + " par " + longueur + " est " + calculPeri(largeur, longueur));
    }else {(choix===2)
    console.log("Aire d'un rectangle de " + largeur + " par " + longueur + " est " +  calculAire(largeur, longueur));
    }
    
}

function affichmenu() {
  var msg = "----------------------\n";
  msg = msg + "***** Menu *********\n";
  msg = msg + "1. Perimetre\n";
  msg = msg + "2. Aire\n";
  msg = msg + "**************";
  console.log(msg);
}




var k = calculAire(largeur, longueur);
var q = calculPeri(largeur, longueur);


function calculAire() {
  aire = largeur * longueur;
  return aire;

}

function calculPeri() {
  peri = longueur + 2* largeur;
  return peri;

}   
}


