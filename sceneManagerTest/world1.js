var player;
//var map;
var xpos , ypos;
var playstate;
var a;
var i;
var imgLoc;


function World1()
{
    var nodesLocation;
    var correct;
    var puzzle;
    var buttonArray = [];
    var display;
    player = createSprite(200, 423);
    var me = this;
    var rocket;
    var world;
    var wm;
    //console.log(w);

    //this is the first function that runs. it is needed when player comes back to this world it clear states.
    this.enter = function()
    {
        textSize(12);
        textAlign(LEFT);
        initGame();
    }

    this.draw = function()
    {
        //DISPLAY BOARD
        clear();
        image(wm, 0, 0, width, height);

        var val = slider.value();
        this.sceneManager.worldMusic.setVolume(val);
        if(nodesLocation[playstate][2]==10){
            console.log("MOVING ROCKET MOVING ROCKET MOVING ROCKET");
            moveRocket();
            //endGame();
        }

        //incorrect = false;
        //check to see if sprite is at node
        checkoverlap();
        //check to see if mouse over button
        changeColor();
        //check to see if rocket has launched
        if(rocket.position.y < 0)
            endGame();
            //cloud.position.x = 0;

        mouseIsPressed=false;
        drawSprites();

        //display question.
        puzzle.display(nodesLocation[playstate][2]);
    }

    //checks to see of mouse is over
    function changeColor(){
        for(i = 0; i < puzzle.buttonArray.length; i++) {
            var c = false;
            c = puzzle.buttonArray[i].mouseover(mouseX,mouseY)
            if(c){
                puzzle.buttonArray[i].over = true;
                break;
            }
            else{
                puzzle.buttonArray[i].over = false;
            }
        }
    }

    this.mousePressed = function()
    {

       // var c = false;
        //CHECKS IF CLICKED INSIDE A BUTTON
        for(i = 0; i < puzzle.buttonArray.length; i++)
        {
            //CHECKS IF CLICKED INSIDE A BUTTON
            if(puzzle.buttonArray[i].clicked(mouseX, mouseY))
            {
                //make button selected (change color tp blue)
                puzzle.buttonArray[i].setSelected();

                //CHECK TO SEE IF ITS A TUTORIAL ONLY ONE BUTTON = NEXT
                if(1 == puzzle.buttonArray.length){
                   // if player has finished
                   // if(playstate == 14  ){
                    console.log("STATE = "+nodesLocation[playstate][2]);
                    if(nodesLocation[playstate][2]==10){
                        console.log("MOVING ROCKET MOVING ROCKET MOVING ROCKET");
                        moveRocket();
                        //endGame();
                    }


                   else if(correct)
                        goToNextNode();//move player to next node
                    //SHOW PREVIOUSQUESTION.
                    else
                    puzzle.initializeQuestion(nodesLocation[playstate][2]);

                    break;
                }
                //MORE THAN ONE BUTTON = QUESTION
                else{
                    //CHECK IF THE BUTTON CLICKED IS THE NEXT BUTTON
                    if(puzzle.buttonArray[i].str == "SUBMIT"){
                        correct = false;
                        var count = puzzle.selectcount();
                        console.log("count of selected buttons = "+ count);
                        if(count >1)
                        correct=puzzle.checkanswer(puzzle.buttonArray);

                        console.log(correct);

                        //console.log("count of selected buttons = "+ count);


                      // RESET EACH BUTTON TO NOT SELECTED.
                        if(correct == false){
                            for(x = 0; x < puzzle.buttonArray.length; x++){
                                console.log("selected = false;");
                                puzzle.buttonArray[x].selected=false;
                            }

                            //no answer was selected don't show wrong
                            if(count > 1)
                            puzzle.initializeQuestion(11);
                        }
                        else{
                            goToNextNode();
                        }
                    }
                }

            }

        }
    }



//checks to see if player has reached coordinates and set velocity to 0 so that it can stop moving.
    function checkoverlap() {
        if (player.overlapPoint(xpos, ypos))
        {
            player.setVelocity(0, 0);
            //puzzle.depth = -2;
           // console.log("STATE = "+nodesLocation[playstate][2]);
            if(nodesLocation[playstate][2]==10)
                puzzle.visible = false;
            else
            puzzle.visible = true;//show next puzzle

        }
    }
//make player move to new attraction poing.
    function movePlayer()
    {
        player.attractionPoint(2, xpos, ypos);
    }
//set x and y posing
    function setxy()
    {
        // player.position.x = nodesLocation[playstate-1][0];
        // player.position.y = nodesLocation[playstate-1][1];
        xpos=nodesLocation[playstate][0];
        ypos=nodesLocation[playstate][1];

    }

    //MOVE PLAYER TO NEXT NODE. UPDATE X ANDY , CREATE NEW PUZZLE.
    function goToNextNode()
    {
        puzzle.visible = false;
        playstate++;
        setxy();
        movePlayer();
        puzzle.initializeQuestion(nodesLocation[playstate][2]);

    }

    function moveRocket(){
        player.visible=false;
        rocket.visible=true;
        puzzle.visible=false;
        rocket.velocity.y = -2;
    }

    //endGame takes you back to the world game. makes player invisible.
    function endGame(){
        puzzle.visible=false;
        player.visible=false;
        rocket.visible=false;
        mouseIsPressed=false;
        playstate = 0;
        me.sceneManager.worldMusic.stop();
        clear();//removes everything from the canvas
        me.sceneManager.showScene(WorldPage);
        me.sceneManager.worldSelectMusic.play();
        me.sceneManager.worldSelectMusic.setLoop(true);

    }
    //initialize game this is needed if player comes back to game multiple times. it resets the game.
    function initGame(){
        nodesLocation = [
            [200,410,20],
            [200,410,21],
            [250,330,1],
            [290,229,2],
            [338,137,3],
            [599,155,4],
            [579,263,23],
            [579,263,5],
            [570,395,6],
            [905,375,7],
            [860,225,8],
            [837,130,9],
            [960,130,10]
        ];

       // world = me.sceneArgs;
       // console.log(world);

        rocket = createSprite(960,130);
        rocket.addAnimation("rocket3", R1);
        //check to see which world was passed and load correct questions, board, and rocket.
        if(me.sceneArgs == "World3"){
           // rocket.addAnimation("rocket1", R3);
            puzzle = new Puzzle(world3Questions);
            wm = me.sceneManager.worldMap3;
        }
        else if(me.sceneArgs == "World2"){
            //rocket.addAnimation("rocket2", R2);
            puzzle = new Puzzle(world2Questions);
           wm = me.sceneManager.worldMap2;
        }
        else{
            console.log("wrold1 was selected");
            nodesLocation = [
                [200,410,20],
                [200,410,21],
                [250,330,1],
                [290,229,22],
                [290,229,2],
                [338,137,3],
                [599,155,4],
                [579,263,23],
                [579,263,5],
                [570,395,6],
                [905,375,24],
                [905,375,7],
                [860,225,8],
                [837,130,9],
                [960,130,10]
            ];
            puzzle = new Puzzle(world1Questions);
            wm = me.sceneManager.worldMap1;
        }

        correct=true;



        mouseIsPressed=false;
        player.visible=true;
        rocket.visible = true;


        player.addAnimation("normal", p1);

        rocket.scale = .25;
        //set max speed for when sprite moves.
        player.maxSpeed = 5;
        player.scale = 1.2;
        player.depth=2;
        rocket.depth = 1;
        //sets player collition detection point to be smaller then the actual sprite to.
        player.setCollider("circle", 0,0,15);
        rocket.setCollider("circle",0,0,1);
        playstate = 0;
       // playstate = 10;

        //set velocity to 0 to make sure its not moving.

        player.velocity.y = 0;
        player.velocity.x = 0;
        player.position.x = nodesLocation[playstate][0];
        player.position.y = nodesLocation[playstate][1];



        //puzzle = new Puzzle(world1Questions);//gives the puzzle class the set of world questions
        var buttonArray = [];

        //console.log("init "+nodesLocation[playstate][2]);
        xpos=nodesLocation[playstate][0];
        ypos=nodesLocation[playstate][1];
        puzzle.initializeQuestion(nodesLocation[playstate][2]);
        //puzzle.initializeQuestion(nodesLocation[playstate+20][2]);//tells puzzle what question to display
        display = false;
    }
}
