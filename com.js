


function gestionRectangle() {
  const p = 3.14;
  var menu = "";
  readline = require('readline-sync');
  var aire = 0;
  var peri = 0;
  
  rayon = readline.questionInt("Quel est le rayon du cercle ? ");
  
  affichmenu(menu);
  
  
  
  
  
  choix = 0;
  do {
    choix = readline.questionInt("Quel est votre choix ? ");
  }
  while (choix !== 1 && choix !== 2)
  {
  
    if (choix===1){
      console.log("Le perimetre d'un cercle de rayon " + rayon + " est " + calculPeri(peri));
  }else {(choix===2)
  console.log("Aire d'un cercle de rayon" + rayon +  " est " +  calculAire(aire));
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
  
  
  var k = calculAire(aire);
  var q = calculPeri(peri);
  
  
  
  
  function calculAire() {
    aire = p * (rayon ** 2);
    return aire;
  
  }
  
  function calculPeri() {
    peri = p * rayon * 2;
    return peri;
  
  }
  
  

}
