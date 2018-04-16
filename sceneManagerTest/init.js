var gameWidth;
var gameHeight;
var bkImage;
var hydra;
var worldsMap;
var worldMap1;
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
var button, fontRegular;
var R1;




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



class Puzzle
{
    constructor(questions)
    {
        this.currentNode;
        this.x = width/4;
        this.y = height/4;
        this.width = 700;
        this.height = 325;
        this.radius = 20;
        this.visible = true;
        this.questions = questions;
        this.currentQuestion;//stores the current question
        this.buttonArray = [];//stores adn array of buttons for current question
        this.nextButton;
        this.answer=[];
        this.showNextButton = true;
        this.correct = false;
        this.type = "1";
    }

    initializeQuestion(targetNode)
    {
        var n;
        if(targetNode > 19) {
            this.currentNode = targetNode;//set new current node

            console.log("initialize tutorial = "+ this.currentNode);
            this.currentQuestion = this.questions[0].tutorial[targetNode-20];
            n = 0;
        }

        else{
            console.log("initialize question = "+targetNode);
            this.currentNode = targetNode;
            this.currentQuestion = this.questions[this.currentNode].question;
            n = this.questions[this.currentNode].optionNum;
        }
        this.buttonArray = [];//clear the button array
        this.makePuzzleButtons();//fill the button array
        //push the next button


        var nodeNumber = this.currentNode;//current node number
        var buttonColumns;//holds puzzle divisions for buton placement
        var strLengthArr = [];//holds string lengths to be compaired
        var maxLength;//holds the largest string length of an answer button

        console.log("Make puzzle = "+ this.currentNode);
        //DIVIDE PUZZLE INTO COLUMNS FOR BUTTONS TO SIT IN
        buttonColumns = this.width/8;



        //PLACE BUTTONS DEPENDING ON IF THERE ARE 0, 2 OR 4 ANSWER OPTIONS
        //MAKE AND STORE BUTTON OBJECTS INTO buttonArr[]
        //push answer to asnwer array
        switch(n)
        {
            case 0:
                this.nextButton = new Button(this.x + this.width - 50, this.y + this.height - 30, 5, "NEXT");
                this.buttonArray.push(this.nextButton);

                break;
            case 2:
                strLengthArr.push(this.questions[nodeNumber].option1.length);
                strLengthArr.push(this.questions[nodeNumber].option2.length);
                maxLength = max(strLengthArr);

                this.answer = [];
                // this.buttonArray.push(new Button(this.x + buttonColumns*3, this.y + this.height/9*8, maxLength, this.questions[nodeNumber].option1));
                // this.buttonArray.push(new Button(this.x + buttonColumns*5, this.y + this.height/9*8, maxLength, this.questions[nodeNumber].option2));
                // this.nextButton = new Button(this.x + this.width - 60, this.y + this.height - 30, 7, "SUBMIT");
                // this.buttonArray.push(this.nextButton);
                this.buttonArray.push( new Button(this.x + this.width/2, this.y + this.height - 25, 7, "SUBMIT"));
                // this.buttonArray.push(this.nextButton)
                this.buttonArray.push(new Button(this.x + buttonColumns*3, this.y + this.height/9*8 - 40, maxLength, this.questions[nodeNumber].option1));
                this.buttonArray.push(new Button(this.x + buttonColumns*5, this.y + this.height/9*8 - 40, maxLength, this.questions[nodeNumber].option2));
                this.answer.push(this.questions[nodeNumber].answer);


                break;

            case 3:
                strLengthArr.push(this.questions[nodeNumber].option1.length);
                strLengthArr.push(this.questions[nodeNumber].option2.length);
                strLengthArr.push(this.questions[nodeNumber].option3.length);
                maxLength = max(strLengthArr);
                this.buttonArray.push(new Button(this.x + buttonColumns*2, this.y + this.height/9*8 - 30, maxLength, this.questions[nodeNumber].option1));
                this.buttonArray.push(new Button(this.x + buttonColumns*4, this.y + this.height/9*8 - 30, maxLength, this.questions[nodeNumber].option2));
                this.buttonArray.push(new Button(this.x + buttonColumns*6, this.y + this.height/9*8 - 30, maxLength, this.questions[nodeNumber].option3));
                this.nextButton = new Button(this.x + this.width/2, this.y + this.height - 25, 7, "SUBMIT");
                this.buttonArray.push(this.nextButton);
                this.answer = [];
                this.answer.push(this.questions[nodeNumber].answer1);
                this.answer.push(this.questions[nodeNumber].answer2);
                this.type=this.questions[nodeNumber].answer;
                break;

            case 4:
                strLengthArr.push(this.questions[nodeNumber].option1.length);
                strLengthArr.push(this.questions[nodeNumber].option2.length);
                strLengthArr.push(this.questions[nodeNumber].option3.length);
                strLengthArr.push(this.questions[nodeNumber].option4.length);
                maxLength = max(strLengthArr);
                this.buttonArray.push(new Button(this.x + buttonColumns*1, this.y + this.height/9*8 - 30, maxLength-2, this.questions[nodeNumber].option1));
                this.buttonArray.push(new Button(this.x + buttonColumns*3, this.y + this.height/9*8 - 30, maxLength-2, this.questions[nodeNumber].option2));
                this.buttonArray.push(new Button(this.x + buttonColumns*5, this.y + this.height/9*8 - 30, maxLength-2, this.questions[nodeNumber].option3));
                this.buttonArray.push(new Button(this.x + buttonColumns*7, this.y + this.height/9*8 - 30, maxLength-2, this.questions[nodeNumber].option4));
                this.nextButton = new Button(this.x + this.width/2, this.y + this.height - 25, 7, "SUBMIT");
                this.buttonArray.push(this.nextButton);
                this.answer = [];
                this.answer.push(this.questions[nodeNumber].answer1);
                this.answer.push(this.questions[nodeNumber].answer2);
                this.type=this.questions[nodeNumber].answer;
                break;
            default:
                break;
        }



    }

    display(currentNode)
    {
        if(this.currentNode > 19) {
            this.currentNode = currentNode;//set new current node

        }
        else{

            this.currentNode = currentNode-20;}

        if(this.visible)
        {
            //POP UP
            fill(10, 10, 10, 200);
            stroke(0, 100, 150);
            strokeWeight(3);
            rect(this.x, this.y, this.width, this.height, this.radius);

            //PUZZLE TEXT
            strokeWeight(0);
            fill(255);
            textSize(20);
            textFont(fontRegular);
            text(this.currentQuestion, this.x + 10, this.y + 25, 700, 300);

            //BUTTONS
            for(i = 0; i < this.buttonArray.length; i++)
            {
                //console.log("inside display "+ this.buttonArray.length);
                this.buttonArray[i].display();
            }
        }


    }

    dismiss()
    {
        clear();
        this.visible = false;
    }

    selectcount(){
        var count = 0;
        this.buttonArray.forEach(function(b){
            //console.log("FOREACH = "+answer);
            if(b.selected==true){
                console.log("count incremented");
                count++;
            }
        });
        return count;
    }
//CHECK TO SEE IF CHOSEN BUTTON IS CORRECT C = STRING OF BUTTON
    checkanswer(a){
        var count = 0;

        var t = this.type;
        console.log("type = "+t);


        var b = true;
        for(var x = 0; x < a.length && b == true; x++){
            if(a[x].selected==true){
                console.log("selected answersss 1111= "+ this.buttonArray[x].str);
                if( this.buttonArray[x].str != "SUBMIT"){
                    b = false;
                    //console.log("selected answersss222222 = "+ this.buttonArray[x].str);
                    for(var y=0;y<this.answer.length;y++){
                        if(this.buttonArray[x].str==this.answer[y]){
                            b=true;
                            console.log("SELECTED CORRECT");
                            console.log(this.buttonArray[x].str + this.answer[y] +" correct");
                            count++;
                            break;
                        }
                    }
                    //b = false;
                }
            }
            else{
                if(this.buttonArray[x].str != "SUBMIT"){
                    b = false;
                    for(var y=0;y<this.answer.length;y++){
                        if(a[x].str==this.answer[y]){
                            if(t == "AND"){
                            count--;
                            b=false;
                            console.log("NOT SELECTED INCORRECT T = ===="+t);
                            return b;
                            break;
                            }
                        }
                        // else {
                        //     console.log("NOT SELECTED CORRECT");
                             b = true;
                        //
                        // }
                    }
                }
            }
        }
        if(t=="AND"){
            console.log("type = " + t + " count = " + count +"answers length =  "+this.answer.length);
            if(this.answer.length == count){
            b = true;
            }
            else
                b = false;
        }
        else if(t=="OR" && b == true){
            if(count > 0 ){
                b = true;
            }
            else
                b = false;
        }

        console.log("returning "+ b);
        return b;

    }
    //CREATE BUTTONS FOR PUZZLES
    makePuzzleButtons()
    {
        var nodeNumber = this.currentNode;//current node number
        var buttonColumns;//holds puzzle divisions for buton placement
        var strLengthArr = [];//holds string lengths to be compaired
        var maxLength;//holds the largest string length of an answer button

        console.log("Make puzzle = "+ this.currentNode);
        //DIVIDE PUZZLE INTO COLUMNS FOR BUTTONS TO SIT IN
        buttonColumns = this.width/8;



        //PLACE BUTTONS DEPENDING ON IF THERE ARE 0, 2 OR 4 ANSWER OPTIONS
        //MAKE AND STORE BUTTON OBJECTS INTO buttonArr[]
        var n;
        if(this.currentNode >19){
            n = 0;
        }
        else
            n = this.questions[nodeNumber].optionNum;
    }
}

class Button
{
    constructor(x, y, w, str)
    {
        //BUTTON LOCATION
        this.buttonX = x;
        this.buttonY = y;

        //BUTTON SIZE
        this.buttonWidth = w*18;
        this.buttonHeight = 23;
        this.buttonRadius = 5;

        //BUTTON TEXT
        this.str = str;

        //BUTTON VISIBILITY
        this.visible = true;
        //MOUSE IS OVER;
        this.over = false;

        //BUTTON SELECTED STATE
        this.selected = false;
    }

    display()
    {
        if(this.visible)
        {
            if(this.selected)
            {
                fill(0, 100, 150, 200);
                stroke(0, 100, 150);
                strokeWeight(3);
                rectMode(CENTER);
                rect(this.buttonX, this.buttonY, this.buttonWidth, this.buttonHeight, this.buttonRadius);

                strokeWeight(0);
                fill(255, 255, 255);
                textSize(24);
                textAlign(CENTER);
                text(this.str, this.buttonX, this.buttonY + 9);
            }
            else
            {
                fill(10, 10, 10, 200);
                stroke(0, 100, 150);
                strokeWeight(3);
                rectMode(CENTER);
                rect(this.buttonX, this.buttonY, this.buttonWidth, this.buttonHeight, this.buttonRadius);

                strokeWeight(0);
                fill(0, 100, 150);
                textSize(24);
                textAlign(CENTER);
                text(this.str, this.buttonX, this.buttonY + 9);
            }
            //MOUSE IS OVER BUTTON CHANGE COLOR.
            if(this.over){
                fill(10, 10, 10, 200);
                stroke(0, 100, 150);
                strokeWeight(3);
                rectMode(CENTER);
                rect(this.buttonX, this.buttonY, this.buttonWidth, this.buttonHeight, this.buttonRadius);

                strokeWeight(0);
                fill(46, 206, 245);
                textSize(24);
                textAlign(CENTER);
                text(this.str, this.buttonX, this.buttonY + 9);
            }
        }
    }
    //check to see if mouse is over button.
    mouseover(x,y){
        var dx = abs(x - this.buttonX);
        var dy = abs(y - this.buttonY);
        if(dx <= this.buttonWidth && dy <= this.buttonHeight)
        {
            return true;
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


    dismiss()
    {
        clear();
        this.visible = false;
    }

    setSelected()
    {
        if(this.selected)
        {
            this.selected = false;
        }
        else
        {
            this.selected = true;
        }
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
    worldMap1 = loadImage('images/World2.png');
    player1Piece = loadImage('images/gamePiece.png');//load player piece (434X720)
    spaceShadows = loadImage('images/spaceShadows.png');
    diamonds = loadImage('images/diamonds1.png');



    //load all sprites images.
    p1 = loadAnimation('images/player-piece2.png','images/player-piece3.png');
    planet1=loadAnimation("images/planet1.png");
    planet2=loadAnimation("images/planet2.png");
    planet3=loadAnimation("images/planet3.png");
    planet4=loadAnimation("images/planet4.png");


    R1=loadAnimation("images/ROCKIT-World1.png");
    //rocket=loadAnimation("rocket1","images/ROCKIT-Wold1.png");
    // rocket=loadAnimation("rocket2","images/ROCKIT-Wold2.png");
    // rocket=loadAnimation("rocket3","images/ROCKIT-Wold3.png");
    // dGreen=loadAnimation("images/DG2.png");
    // dOrange==loadAnimation("images/DY2.png");
    // dBlue=loadAnimation("images/DB2.png");
    // hRed=loadAnimation("images/R1.png");
    // hBlue=loadAnimation("images/BH1.png");

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
    mgr.fontRegular=fontRegular;
    mgr.bkImage = bkImage;
    mgr.hydra = hydra;
    mgr.worldsMap = worldsMap;
    mgr.worldMap1 = worldMap1;
    mgr.player1Piece = player1Piece;

    mgr.planet1=planet1;
    mgr.planet2=planet2;
    mgr.planet3=planet3;
    mgr.planet4=planet4;

    mgr.R1=R1;
    // mgr.dGreen=dGreen;
    // mgr.dOrange=dOrange;
    // mgr.dBlue=dBlue;
    // mgr.hRed=hRed;
    // mgr.hBlue=hBlue;

    mgr.spaceShadows=spaceShadows;
    mgr.diamonds = diamonds;
    mgr.p1=p1;


    //DONT KNOW WHAT THIS DOES
    mgr.wire();

    //SWITCH TO THE FRONT PAGE
    mgr.showScene(FrontPage);
}

function windowResized() {
    // centerCanvas();
}
