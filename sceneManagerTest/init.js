var gameWidth;
var gameHeight;
var bkImage;
var hydra;
var worldsMap;
var worldMap1,worldMap2,worldMap3,worldMap4;
var player1Piece;//temp player token
var nodeImageArr;
var world1Questions;
var planet1;
var planet2;
var planet3;
var planet4;
var p1;
var spaceShadows;
var diamonds;
var button;
var dRed,dGreen,dOrange,dBlue,hRed,hBlue,fontRegular;
var questionNumber;


class Node
{
    constructor(x, y, radius, number)
    {
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.number = number
    }

    display()
    {
      noStroke();
      noFill();
      ellipse(this.x, this.y, this.radius);
    }

    //CHECK IF CLICK WAS MADE INSIDE THE CIRCLE
    clicked(x, y)
    {
      let d = dist(x, y, this.x, this.y);
      if(d < this.radius)
      {
        return true;
      }
    }
}


//PLAYER CLASS
// class Player
// {
//   constructor(currentNode, player1Piece)
//   {
//     this.x = currentNode.x - 15;
//     this.y = currentNode.y - 50;
//     this.width = 30;
//     this.height = 50;
//     this.piece = player1Piece;
//     this.currentNode = currentNode;
//   }
//
//   display()
//   {
//
//     image(this.piece,this.x, this.y, this.width, this.height);
//   }
//
//   move(targetNode)
//   {
//
//     this.currentNode = targetNode;
//     this.x = targetNode.x - 15;
//     this.y = targetNode.y - 50;
//     this.display();
//   }
// }

class Puzzle
{
  constructor(questions)
  {
    this.currentNode;
    this.x = width/4;
    this.y = height/4;
    this.width = 700;
    this.height = 300;
    this.radius = 20;
    this.visible = true;
    this.questions = questions;
    this.answered = false;
    this.first=-1;//has the question been answered correctly?
  }

  setPosition(targetNode)
  {
    this.currentNode = targetNode;
  }

  display(currentNode)
  {
    this.currentNode = currentNode;

    if(this.visible)
    {

      //POP UP
      fill(10, 10, 10, 200);
      stroke(0, 100, 150);
      strokeWeight(3);
      rect(this.x, this.y, this.width, this.height, this.radius);
        strokeWeight(0);
        fill(255);
        textSize(20);
        textFont(fontRegular);
      if(currentNode >19){
          console.log("tutorial node "+currentNode);


          text(this.questions[0].tutorial[currentNode-20], this.x + 10, this.y + 25, 700, 300);
      }
     else{
         // console.log("inside else c");
         // do
         //  {
        //  questionNumber=int(random(1,5));
        //  console.log("random = " + questionNumber);


          //currentNode=questionNumber;
         // } while(this.questions[questionNumber].asked)
          //this.answered = true;
          text(this.questions[currentNode].question, this.x + 10, this.y + 25, 700, 300);
      }
      //PUZZLE TEXT
     //return(currentNode);
    }
  }

  dismiss()
  {
    clear();
    this.visible = false;
  }

}

class Button
{
  constructor(x, y, width, str)
  {
    //BUTTON LOCATION
    this.buttonX = x;
    this.buttonY = y;

    //BUTTON SIZE
    this.buttonWidth = width/2*24 + 10;
    this.buttonHeight = 30;
    this.buttonRadius = 5;

    //BUTTON TEXT
    this.str = str;

    //BUTTON VISIBILITY
    this.visible = true;

    //BUTTON SELECTED STATE
    this.selected = false;
  }

  display()
  {
    if(this.visible)
    {
      //this.setButtonStyle();
      this.setButtonStyle();
      rect(this.buttonX, this.buttonY, this.buttonWidth, this.buttonHeight, this.buttonRadius);
      this.setTextStyle();
      text(this.str, this.buttonX, this.buttonY + 9);
    }
  }

  //CHECK IF CLICK WAS MADE INSIDE THE BUTTON
  clicked(x, y)
  {
    var dx = abs(x - this.buttonX);
    var dy = abs(y - this.buttonY);
    if(dx <= this.buttonWidth && dy <= this.buttonHeight)
    {
      return true;
    }
  }

  setButtonStyle()
  {
    if(this.selected)
    {
      fill(0, 100, 150);
      stroke(0, 100, 150);
      strokeWeight(3);
      rectMode(CENTER);
      //rect(this.buttonX, this.buttonY, this.buttonWidth, this.buttonHeight, this.buttonRadius);
    }
    else
    {
      fill(10, 10, 10, 200);
      stroke(0, 100, 150);
      strokeWeight(3);
      rectMode(CENTER);
      //rect(this.buttonX, this.buttonY, this.buttonWidth, this.buttonHeight, this.buttonRadius);
    }
  }

  setTextStyle()
  {
    if(this.selected)
    {
      strokeWeight(0);
      fill(10, 10, 10);
      textSize(24);
      textAlign(CENTER);
      //text(this.str, this.buttonX, this.buttonY + 9);
    }
    else
    {
      strokeWeight(0);
      fill(0, 100, 150);
      textSize(24);
      textAlign(CENTER);
    //  text(this.str, this.buttonX, this.buttonY + 9);
    }
  }


  //SETS THE STYLE OF THE BUTTON DEPENDING IN IF HAS BEEN SELECTED
  //DRAWS THE BUTTON AND TEXT TO THE CANVAS
  // setButtonStyle()
  // {
  //   if(this.selected)
  //   {
  //     print("selected");
  //     fill(0, 100, 150);
  //     stroke(0, 100, 150);
  //     strokeWeight(3);
  //     rectMode(CENTER);
  //     rect(this.buttonX, this.buttonY, this.buttonWidth, this.buttonHeight, this.buttonRadius);
  //
  //     strokeWeight(0);
  //     fill(10, 10, 10);
  //     textSize(24);
  //     textAlign(CENTER);
  //     text(this.str, this.buttonX, this.buttonY + 9);
  //   }
  //   else
  //   {
  //     print("not selected");
  //     fill(10, 10, 10, 200);
  //     stroke(0, 100, 150);
  //     strokeWeight(3);
  //     rectMode(CENTER);
  //     rect(this.buttonX, this.buttonY, this.buttonWidth, this.buttonHeight, this.buttonRadius);
  //
  //     strokeWeight(0);
  //     fill(0, 100, 150);
  //     textSize(24);
  //     textAlign(CENTER);
  //     text(this.str, this.buttonX, this.buttonY + 9);
  //   }
  //
  // }



  dismiss()
  {
    clear();
    this.visible = false;
  }

}



function preload()
{

    //load font
    //fontRegular = loadFont('font/VT323-Regular.ttf');
    fontRegular = loadFont('font/OverpassMono-Regular.ttf');
    //fontRegular = loadFont('font/Combo-Regular.ttf');
    //load all images
    bkImage = loadImage('images/indexBG.jpg');
    hydra = loadImage('images/hydra.png');
    worldsMap = loadImage('images/worldsMap.png');
    worldMap1 = loadImage('images/World1.png');
    worldMap2 = loadImage('images/World2.png');
    worldMap3 = loadImage('images/World3.png');
    worldMap4 = loadImage('images/World4.png');
    player1Piece = loadImage('images/gamePiece.png');//load player piece (434X720)
    spaceShadows = loadImage('images/spaceShadows.png');
    diamonds = loadImage('images/diamonds1.png');



    //load all sprites images.
    p1 = loadAnimation('images/gamePieceSmall.png');//load player piece (48x80)
    planet1=loadAnimation("images/planet1.png");
    planet2=loadAnimation("images/planet2.png");
    planet3=loadAnimation("images/planet3.png");
    planet4=loadAnimation("images/planet4.png");

    dRed=loadAnimation("images/DR2.png");
    dGreen=loadAnimation("images/DG2.png");
    dOrange==loadAnimation("images/DY2.png");
    dBlue=loadAnimation("images/DB2.png");
    hRed=loadAnimation("images/R1.png");
    hBlue=loadAnimation("images/BH1.png");

    //LOAD WORLD QUESTIONS FROM JSON FILE
    world1Questions = loadJSON("world1Questions.json");
}

function setup()
{
    var cnv = createCanvas(1280,720);
    var windowCenterX = (windowWidth - width) / 2;
    var windowCenterY = (windowHeight - height) / 2;
    cnv.position(windowCenterX, windowCenterY);


    //CREATE THE SCENE MANAGER
    var mgr = new SceneManager();

    //LOAD ALL IMAGES INTO THE SCENE MANAGER
    mgr.bkImage = bkImage;
    mgr.hydra = hydra;
    mgr.worldsMap = worldsMap;
    mgr.worldMap1 = worldMap1;
    mgr.worldMap2 = worldMap2;
    mgr.worldMap3 = worldMap3;
    mgr.worldMap4 = worldMap4;
    mgr.player1Piece = player1Piece;

    mgr.planet1=planet1;
    mgr.planet2=planet2;
    mgr.planet3=planet3;
    mgr.planet4=planet4;

    mgr.dRed=dRed;
    mgr.dGreen=dGreen;
    mgr.dOrange=dOrange;
    mgr.dBlue=dBlue;
    mgr.hRed=hRed;
    mgr.hBlue=hBlue;

    mgr.spaceShadows=spaceShadows;
    mgr.diamonds = diamonds;
    mgr.p1=p1;
    mgr.fontRegular=fontRegular;

    //DONT KNOW WHAT THIS DOES
    mgr.wire();

    //SWITCH TO THE FRONT PAGE
    mgr.showScene(FrontPage);
}

function windowResized() {
  // centerCanvas();
}
