
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

var vijandX = 200;
var vijandY = 250;
var vijandX2 = 200;
var vijandY2 = 250;
var vijandX3 = 300;
var vijandY3 = 350;
var vijandX4 = 300;
var vijandY4 = 400;
var vijandX5 = 500;
var vijandY5 = 550;
var vijandX6 = 600;
var vijandY6 = 650;
var vijandX7 = 200;
var vijandY7 = 250;

var kogelY = 300;
var kogelVliegt = false;

var HP = 1000 ;


/* Hp en een kogel maken is ons niet goed gelukt. Voorderest hebben we ons best gedaan om er een goede game van te maken. De game zelf is ongeveer hetzelfde als wat we aan het begin van deze opdracht hoopten. Ons voortgang was af en toe moeilijk maar de laatste weken hebben we het goed opgepakt en we hebben geprobeeerd er een leuk spel van te maken. .********************************************* */ 
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
    keyIsDown(UP_ARROW)) { // start sprong
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
  vijandY = vijandY + 8;

  if (vijandY > 720) {
    vijandY = 0;
  }

  if (vijandY < 1) {
    vijandX = (100, 1100)
  };

  vijandY2 = vijandY2 + 8;

  if (vijandY2 > 720) {
    vijandY2 = 0;
  }

  if (vijandY2 < 1) {
    vijandX2 + (100, 1100)
  };

    vijandY3 = vijandY3 + 8;

  if (vijandY3 > 720) {
    vijandY3 = 0;
  }

  if (vijandY3 < 1) {
    vijandX3 = (100, 1100)
  };

  vijandY4 = vijandY4 + 8;

  if (vijandY4 > 720) {
    vijandY4 = 0;
  }

  if (vijandY4 < 1) {
    vijandX4 + (100, 1100)
  };

    vijandY5 = vijandY5 + 8;

  if (vijandY5 > 720) {
    vijandY5 = 0;
  }

  if (vijandY5 < 1) {
    vijandX5 = (100, 1100)
  };

  vijandY6 = vijandY6 + 8;

  if (vijandY6 > 720) {
    vijandY6 = 0;
  }

  if (vijandY6 < 1) {
    vijandX6 + (100, 1100)
  };

   vijandY7 = vijandY7 + 8;

  if (vijandY7 > 720) {
    vijandY7 = 0;
  }

  if (vijandY7 < 1) {
    vijandX7 = (100, 1100)
  };

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
if (vijandX - spelerX < 50 &&
   vijandX - spelerX > - 50 &&
   vijandY - spelerY < 75 &&
   vijandY - spelerY > - 75) {
  console.log("GAMEOVER");
  HP = HP-10;
   }


  
  if (vijandX2 - spelerX < 50 &&
    vijandX2 - spelerX > - 50 &&
    vijandY2 - spelerY < 75 &&
    vijandY2 - spelerY > - 75) {
    console.log("GAMEOVER");
    HP = HP-10;
    }

  if (vijandX3 - spelerX < 50 &&
    vijandX3 - spelerX > - 50 &&
    vijandY3 - spelerY < 75 &&
    vijandY3 - spelerY > - 75) {
    console.log("GAMEOVER");
    HP = HP-10;
    }

  if (vijandX4 - spelerX < 50 &&
    vijandX4 - spelerX > - 50 &&
    vijandY4 - spelerY < 75 &&
    vijandY4 - spelerY > - 75) {
    console.log("GAMEOVER");
    HP = HP-10;
    }

  if (vijandX5 - spelerX < 50 &&
    vijandX5 - spelerX > - 50 &&
    vijandY5 - spelerY < 75 &&
    vijandY5 - spelerY > - 75) {
    console.log("GAMEOVER");
    HP = HP-10;
    }

  if (vijandX6 - spelerX < 50 &&
    vijandX6 - spelerX > - 50 &&
    vijandY6 - spelerY < 75 &&
    vijandY6 - spelerY > - 75) {
    console.log("GAMEOVER");
    HP = HP-10;
    }

  if (vijandX7 - spelerX < 50 &&
    vijandX7 - spelerX > - 50 &&
    vijandY7 - spelerY < 75 &&
    vijandY7 - spelerY > - 75) {
    console.log("GAMEOVER");
    HP = HP-10;
    }

  
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

    fill("red");
  rect(vijandX2 - 25, vijandY2 - 25, 50, 50);
  fill("black");
  ellipse(vijandX2 - vijandY2, 10, 10);

    fill("red");
  rect(vijandX3 - 25, vijandY3 - 25, 50, 50);
  fill("black");
  ellipse(vijandX3 - vijandY3, 10, 10);

    fill("red");
  rect(vijandX4 - 25, vijandY4 - 25, 50, 50);
  fill("black");
  ellipse(vijandX4 - vijandY4, 10, 10);

      fill("red");
  rect(vijandX5 - 25, vijandY5 - 25, 50, 50);
  fill("black");
  ellipse(vijandX5 - vijandY5, 10, 10);

    fill("red");
  rect(vijandX6 - 25, vijandY6 - 25, 50, 50);
  fill("black");
  ellipse(vijandX6 - vijandY6, 10, 10);

    fill("red");
  rect(vijandX7 - 25, vijandY7 - 25, 50, 50);
  fill("black");
  ellipse(vijandX7 - vijandY7, 10, 10);

  
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
   if (spelerX - vijandX < 5 &&
      vijandX - spelerX < 5 &&
      spelerY - vijandY < 5 &&
      vijandY - spelerY < 5) {
     aantal = aantal + 1;
     console.log("botsing")
     return true;
      }

    if (spelerX - vijandX2 < 5 &&
      vijandX2 - spelerX < 5 &&
      spelerY - vijandY2 < 5 &&
      vijandY2 - spelerY < 5) {
     aantal = aantal + 1;
     console.log("botsing")
     return true;
      }

    if (spelerX - vijandX3 < 5 &&
      vijandX3 - spelerX < 5 &&
      spelerY - vijandY3 < 5 &&
      vijandY3 - spelerY < 5) {
     aantal = aantal + 1;
     console.log("botsing")
     return true;
      }

    if (spelerX - vijandX4 < 5 &&
      vijandX4 - spelerX < 5 &&
      spelerY - vijandY4 < 5 &&
      vijandY4 - spelerY < 5) {
     aantal = aantal + 1;
     console.log("botsing")
     return true;
      }

    if (spelerX - vijandX5 < 5 &&
      vijandX5 - spelerX < 5 &&
      spelerY - vijandY5 < 5 &&
      vijandY5 - spelerY < 5) {
     aantal = aantal + 1;
     console.log("botsing")
     return true;
      }

    if (spelerX - vijandX6 < 5 &&
      vijandX6 - spelerX < 5 &&
      spelerY - vijandY6 < 5 &&
      vijandY6 - spelerY < 5) {
     aantal = aantal + 1;
     console.log("botsing")
     return true;
      }

    if (spelerX - vijandX7 < 5 &&
      vijandX7 - spelerX < 5 &&
      spelerY - vijandY7 < 5 &&
      vijandY7 - spelerY < 5) {
     aantal = aantal + 1;
     console.log("botsing")
     return true;
      }
      }
  // check of HP 0 is , of tijd op is, of ...
    
 


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
  background('blue');
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
