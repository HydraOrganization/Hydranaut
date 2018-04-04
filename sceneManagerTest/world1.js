var player,firstplayer;
//var map;
var xpos , ypos;
var playstate;
var a;
var i;
var imgLoc;
var dR,dB,dG,puzzle,ans,start;
var buttonArray;
var ask, questionState;


function World1()
{
    var nodesLocation = [];
    var me = this;

    this.enter = function()
    {
        textSize(12);
        textAlign(LEFT);
        initGame();
    }


    this.draw = function()
    {
        //DISPLAY BOARD
        player.visible=true;
        mouseIsPressed=false;
        image(this.sceneManager.worldMap1, 0, 0, width, height);



        if(dR.mouseIsOver && mouseIsPressed){
            console.log("dR mouse");
            dR.visible=false;
            ans = 3;
        }
        if(dB.mouseIsOver && mouseIsPressed){
            console.log("dB mouse");
            dB.visible=false;
            ans=1;

        }
        if(dG.mouseIsOver && mouseIsPressed){
            console.log("dG mouse");
            dG.visible=false;
        }

        checkoverlap();

        mouseIsPressed=false;
        drawSprites();
    }
    function initGame(){
        nodesLocation = [
            [200,423],
            [250,330],
            [290,229],
            [338,137],
            [599,155],
            [579,263],
            [570,395],
            [905,375],
            [860,225],
            [837,130],
            [960,125]
        ];


        start = 0;
        questionState = 0;

        playstate=0;
        mouseIsPressed=false;
        player = createSprite(200, 423);
        player.addAnimation("normal", p1);
        //set max speed for when sprite moves.
        player.maxSpeed = 5;
        player.scale = .5;
        //set velocity to 0 to make sure its not moving.
        player.velocity.y = 0;
        player.velocity.x = 0;


        dR=createSprite((width/2)-200,600);
        dR.addAnimation("normal",dRed);
        dR.scale=.3
        dR.mouseActive=true;
        dB=createSprite((width/2),600);
        dB.addAnimation("normal",dBlue);
        dB.scale=.3
        dB.mouseActive=true;

        dG=createSprite((width/2)+200,600);
        dG.addAnimation("normal",dGreen);
        dG.scale=.3
        dG.mouseActive=true;



        puzzle = new Puzzle(world1Questions);//gives the puzzle class the set of world questions
        //var closeButton = new Button(puzzle.x + puzzle.width/2, puzzle.y + puzzle.height/9*8, "close");
        buttonArray = [];
        ans = 0;
        xpos=nodesLocation[0][0];
        ypos=nodesLocation[0][1];
        player.visible=true;
        //playstate = 0;
        dR.visible = true;
        dB.visible= true;
        dG.visible = true;
        console.log("beginning world 1");
    }

    function Question(){

    }


    this.mousePressed = function(){
        if(playstate == 11 )
            finishedWorld();
        else {
            questionState++;
            //set new x and y coordinates
            setxy();
            movePlayer();
        }
    }

    //checks to see if player has reached coordinates and set velocity to 0 so that it can stop moving.
    function checkoverlap() {
        if (player.overlapPoint(xpos, ypos))
        {
           ask = 0;

            player.setVelocity(0, 0);
            puzzle.visible = true;
            //DISPLAY BUTTON
            buttonArray = me.puzzleButtons(puzzle, world1Questions);
            if(questionState == 0 || questionState == 1 || questionState == 5 || questionState == 8 || questionState == 11){
                if(questionState < 3){ask= questionState+20;}
                else if(questionState < 6) ask = 22;
                else if(questionState < 9) ask = 23;
                else ask = 24;
            }
            else if(questionState < 5){
                playstate = questionState-1;
                ask = playstate;
                //console.log("inside mousepressed increase playstate");
          //      playstate++;
                console.log("inside mousepressed increase playstate"+ playstate);
            }
            else if(questionState < 8){
                playstate=questionState-2;
             ask = playstate;}
            else if(questionState < 11){
                playstate=questionState-3;
                ask = playstate;
            }
            else{
                playstate=questionState-4;
             ask = playstate;
            }
            console.log("ask = "+ask);

            puzzle.display(ask);
            if(buttonArray.length !== 0)
            {
                for(i = 0; i < buttonArray.length; i++)
                {
                    buttonArray[i].display();
                }
            }


        }
    }
    //make player move to new attraction poing.
    function movePlayer()
    {
        player.attractionPoint(4, xpos, ypos);

    }
    //set x and y posing
    function setxy()
    {
        console.log(`playstate = ${playstate}`);
        xpos=nodesLocation[playstate][0];
        ypos=nodesLocation[playstate][1];

    }
    function finishedWorld(){
        mouseIsPressed=false;
        player.visible=false;
        playstate = 0;
        dR.visible = false;
        dB.visible= false;
        dG.visible = false;
        console.log("finishedWorld "+playstate);
        clear();//removes everything from the canvas
        //switch to worlds
        me.sceneManager.showScene(WorldPage)

    }




    //CREATES BUTTONS FOR QUESTIONS
    this.puzzleButtons = function(puzzle, world1Questions)
    {
        //GET CURRENT NODE NUMBER
        var nodeNumber = playstate;

        //GET NUMBEROF ANSWER OPTIONS FROM JSON
        var buttonNumber = world1Questions[playstate].optionNum;

        var buttonColumns;//holds puzzle divisions for buton placement
        var buttonArr = [];//array to hold button objects
        var strLengthArr = [];//holds string lengths to be compaired
        var maxLength;//holds the largest string length of an answer button

        //DIVIDE PUZZLE INTO COLUMNS FOR BUTTONS TO SIT IN
        buttonColumns = puzzle.width/8;

        //PLACE BUTTONS DEPENDING ON IF THERE ARE 0, 2 OR 4 ANSWER OPTIONS
        //MAKE AND STORE BUTTON OBJECTS INTO buttonArr[]
        switch(buttonNumber)
        {
            case 0:
                break;
            case 2:
                strLengthArr.push(world1Questions[playstate].option1.length);
                strLengthArr.push(world1Questions[playstate].option2.length);
                maxLength = max(strLengthArr);
                buttonArr.push(new Button(puzzle.x + buttonColumns*3, puzzle.y + puzzle.height/9*8, maxLength, world1Questions[nodeNumber].option1));
                buttonArr.push(new Button(puzzle.x + buttonColumns*5, puzzle.y + puzzle.height/9*8, maxLength, world1Questions[nodeNumber].option2));
                break;

            case 3:
                strLengthArr.push(world1Questions[playstate].option1.length);
                strLengthArr.push(world1Questions[playstate].option2.length);
                strLengthArr.push(world1Questions[playstate].option3.length);
                maxLength = max(strLengthArr);
                buttonArr.push(new Button(puzzle.x + buttonColumns*2, puzzle.y + puzzle.height/9*8, maxLength, world1Questions[nodeNumber].option1));
                buttonArr.push(new Button(puzzle.x + buttonColumns*4, puzzle.y + puzzle.height/9*8, maxLength, world1Questions[nodeNumber].option2));
                buttonArr.push(new Button(puzzle.x + buttonColumns*6, puzzle.y + puzzle.height/9*8, maxLength, world1Questions[nodeNumber].option3));
                break;

            case 4:
                strLengthArr.push(world1Questions[playstate].option1.length);
                strLengthArr.push(world1Questions[playstate].option2.length);
                strLengthArr.push(world1Questions[playstate].option3.length);
                strLengthArr.push(world1Questions[playstate].option4.length);
                maxLength = max(strLengthArr);
                buttonArr.push(new Button(puzzle.x + buttonColumns*1, puzzle.y + puzzle.height/9*8, maxLength, world1Questions[nodeNumber].option1));
                buttonArr.push(new Button(puzzle.x + buttonColumns*3, puzzle.y + puzzle.height/9*8, maxLength, world1Questions[nodeNumber].option2));
                buttonArr.push(new Button(puzzle.x + buttonColumns*5, puzzle.y + puzzle.height/9*8, maxLength, world1Questions[nodeNumber].option3));
                buttonArr.push(new Button(puzzle.x + buttonColumns*7, puzzle.y + puzzle.height/9*8, maxLength, world1Questions[nodeNumber].option4));
                break;
        }
        return buttonArr;

    }






}
