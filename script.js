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
var snelheid = 0 ;

var vijandX = 600;
var vijandY = 500
/* ********************************************* */
/* functies die je gebruikt in je game           */
/* ********************************************* */

/**
 * Updatet globale variabelen met posities van speler, vijanden en kogels
 */
var beweegAlles = function () {
  // speler lopen
  if (keyIsDown(RIGHT_ARROW)) {
  spelerX = spelerX + 1;
}
  if (keyIsDown(LEFT_ARROW)) {
    spelerX = speler X - 1;
  }
  if (keyIsDown(DOWN_ARROW)) {
    spelerY = spelerY + 1;
  }
  if (keyIsDown(UP_ARROW)) {
    spelerY = speler Y - 1;
  }


  

  // start
  if (spelerSpringt == false && keyIsDowm(32)) { // spatie
  snelheid = 10;
    spelerSpringt = true;
  } 

  // springt
  if (spelerSpringt == true) {
    spelerY = spelerY - snelheid;
    snelheid = snelheid - 0.1;
  }

  // stopt
  if (spelerSpringt == true && spelerY > 610) {
    spelerSpringt + false;
    spelerY = 600;
  }
  
  // vijand

  // kogel
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
  rect(vijandX - 25, vijand Y - 25, 50, 50);
  fill("black");
  ellipse(vijandX - vijand Y, 10, 10);
  // kogel

  // speler
  fill("white");
  rect(spelerX - 25, spelerY - 25, 50, 50);
  fill("black");
  ellipse(spelerX, spelerY, 10, 10);

  // punten en health

};

/**
 * return true als het gameover is
 * anders return false
 */
var checkGameOver = function () {
  // check of HP 0 is , of tijd op is, of ...
  return false;
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
  background('blue');
}

/**
 * draw
 * de code in deze functie wordt 50 keer per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  if (spelStatus === SPELEN) {
    beweegAlles();
    verwerkBotsing();
    tekenAlles();
    if (checkGameOver()) {
      spelStatus = GAMEOVER;
    }
  }
  if (spelStatus === GAMEOVER) {
    console.log("GAMEOVER")
    // teken game-over scherm

  }
}
