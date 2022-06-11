
 /* Game opdracht
   Informatica - Emmauscollege Rotterdam
   Template voor een game in JavaScript met de p5 library

   Begin met dit template voor je game opdracht,
   voeg er je eigen code aan toe.
 */

/* ********************************************* */
/* globale variabelen die je gebruikt in je game */
/* ********************************************* */

const SPELEN = 1;
const GAMEOVER = 2;
var spelStatus = SPELEN;

var spelerX = 100; // x-positie van speler
var spelerY = 600; // y-positie van speler

var spelerSpringt = false;
var springSnelheid = 0 ;
var springSnelheidStart = 10;
var zwaartekracht = 0.5 ;

var vijandX = 600;
var vijandY = 500;

var kogelX = 400;
var kogelY = 300;
var kogelVliegt = false;

var HP = 10;

/* ********************************************* */
/* functies die je gebruikt in je game           */
/* ********************************************* */

/**
 * Updatet globale variabelen met posities van speler, vijanden en kogels
 */
var beweegalles = function () {
  // speler lopen
  if (keyIsDown(RIGHT_ARROW)) {
  spelerX = spelerX + 7;
}
  if (keyIsDown(LEFT_ARROW)) {
    spelerX = spelerX - 7;
  }
  if (keyIsDown(DOWN_ARROW)) {
    spelerY = spelerY + 7;
  }
  if (keyIsDown(UP_ARROW)) {
    spelerY = spelerY - 7;
  }


  

  // start
  

// speler springen
if (spelerSpringt === false && keyIsDown(32)) { // spatie
    snelheid = 5; 
    spelerSpringt = true;
}
if (spelerSpringt === true) {
    spelerY = spelerY - snelheid;
    snelheid = snelheid - 0.18;
}

  // stopt
   if (spelerSpringt == true && spelerY > 610) {    spelerSpringt + false;
    spelerY = 600;
  }
  
  // vijand

  // kogel

  if (kogelVliegt == false && keyIsDown(13)) { // start schieten
    kogelVliegt = true;
    kogelX = spelerX;
    kogelY = spelerY;
  }
  if (kogelVliegt === true) { // kogel vliegt}
  kogelY = kogelY - 1;
  }
  if (kogelVliegt === true && kogelY < 0) { // kogel verdwijnt
  kogelVliegt = false;}
  };
  
/**
 * Checkt botsingen
 * Verwijdert neergeschoten dingen
 * Updatet globale variabelen punten en health
 */
var verwerkBotsing = function () {
  // botsing speler tegen vijand

  // botsing kogel tegen vijand

  // update punten en health

};

/**
 * Tekent spelscherm
 */
var tekenAlles = function () {
  // achtergrond
  fill("green");
  rect(0,0,1280,720);
  // vijand
  fill("red");
  rect(vijandX - 25, vijandY - 25, 50, 50);
  fill("black");
  ellipse(vijandX - vijandY, 10, 10);
  // kogel

  // speler
  fill("white");
  rect(spelerX - 25, spelerY - 25, 50, 50);
  fill("black");
  ellipse(spelerX, spelerY, 10, 10);

  // punten en health
  fill("yellow");
  textSize(50);
  text("HP = " + HP, 100, 200);
};

/**
 * return true als het gameover is
 * anders return false
 */
var checkGameOver = function () {
  // check of HP 0 is , of tijd op is, of ...
  if (HP <= 0 ) {
    return true;
  } else {
    return false;
  }
};

/* ********************************************* */
/* setup() en draw() functies / hoofdprogramma   */
/* ********************************************* */

/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);

  // Kleur de achtergrond blauw, zodat je het kunt zien
  background('pink');
}

/**
 * draw
 * de code in deze functie wordt 50 keer per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  if (spelStatus === SPELEN) {
    console.log("SPELEN");
    beweegalles();
    verwerkBotsing();
    tekenAlles();
    if ( checkGameOver() ) {
      spelStatus = GAMEOVER;
    }
  }

  
   if (spelStatus === GAMEOVER) {
    // teken game-over scherm 
     console.log("game over")
     image(img_lijst[0],0,0, 1100, 800);
     if(keyIsDown(R)) {
    
      spelStatus = UITLEG;
    }
  } 
}
