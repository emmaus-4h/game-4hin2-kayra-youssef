
 /* Game opdracht
   Informatica - Emmauscollege Rotterdam
   Template voor een game in JavaScript met de p5 library

   Begin met dit template voor je game opdracht,
   voeg er je eigen code aan toe.
 */

/* ********************************************* */
/* globale variabelen die je gebruikt in je game */
/* ********************************************* */

const KEY_SPACE = 32; // keycode van spatie 

var aantal = 0;

const SPELEN = 1;
const GAMEOVER = 2;
const UITLEG = 8;
var spelStatus = UITLEG;

var spelerX = 100; // x-positie van speler
var spelerY = 600; // y-positie van speler

var spelerSpringt = false;
var springSnelheid = 0 ;
var springSnelheidStart = 15;
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
if (spelerSpringt === false &&
    keyIsDown(KEY_SPACE)) { // start sprong
   spelerSpringt = true;
  springSnelheid = springSnelheidStart;
}
if (spelerSpringt === true) { // sprong bezig
    spelerY = spelerY - springSnelheid;
    springSnelheid = springSnelheid - zwaartekracht;
}
if (spelerY > 610) { // sprong klaar
  spelerSpringt = false;
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
  fill("black");
  rect(0,0,1280,720);
  // vijand
  fill("red");
  rect(vijandX - 25, vijandY - 25, 50, 50);
  fill("black");
  ellipse(vijandX - vijandY, 10, 10);
  // kogel

  // speler
  fill("blue");
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
   if (spelerX - vijandX < 50 &&
      vijandX - spelerX < 50 &&
      spelerY - vijandY < 50 &&
      vijandY - spelerY < 50) {
     aantal = aantal + 1;
     console.log("botsing"+aantal)
     return true;
      }
  // check of HP 0 is , of tijd op is, of ...
    return false;
 
};

/* ********************************************* */
/* setup() en draw() functies / hoofdprogramma   */
/* ********************************************* */

/* preload
* deze functie wordt 1x uitgevoerd voor setup
* we laden hier de plaatjes
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
    beweegalles();
    verwerkBotsing();
    tekenAlles();
    if (checkGameOver()) {
      spelStatus = GAMEOVER;
    }
      console.log("spelen");
  }
  
   if (spelStatus === GAMEOVER) {
    // teken game-over scherm 
     console.log("game over");
    textSize(50);
    fill("white");
    text("Game over, druk spatie voor nieuw spel", 300, 300);
     if(keyIsDown(32)) { // spatie
    spelStatus = UITLEG;
     }
    }
  if (spelStatus === UITLEG) {
    // teken uitleg scherm
    console.log("uitleg");
    textSize(50);
    fill("red");
    rect(0, 0, 1280, 720);
    fill("white");
    text("Druk op enter en het spel start", 300, 300);
    if (keyIsDown(13)) { // enter
          spelerX = 100;
    spelStatus = SPELEN;
  }   
  } 
}
