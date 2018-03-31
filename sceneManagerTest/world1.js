
var player,firstplayer;
//var map;
var xpos , ypos;
var playstate;
var a;
var i;

function World1()
{
  //MAKE NODES AND PLACE THEM (X, Y, RADIUS, NODE NUMBER)
  // var node0 = new Node(200, 435, 75, 0);
  // var node1 = new Node(238, 360, 50, 1);
  // var node2 = new Node(283, 257, 50, 2);
  // var node3 = new Node(330, 167, 50, 3);
  // var node4 = new Node(588, 165, 50, 4);
  // var node5 = new Node(581, 258, 50, 5);
  // var node6 = new Node(569, 387, 50, 6);
  // var node7 = new Node(896, 387, 50, 7);
  // var node8 = new Node(862, 257, 50, 8);
  // var node9 = new Node(839, 165, 50, 9);
  // var node10 = new Node(952, 139, 75, 10);
  // var nodeArray = [node0, node1, node2,
  //                  node3, node4, node5,
  //                  node6, node7, node8,
  //                  node9, node10];


  //
  // var adjMatrix = [
  //   [0, 1],
  //   [1, 0, 2],
  //   [2, 1, 3],
  //   [3, 2, 4],
  //   [4, 3, 5],
  //   [5, 4, 6],
  //   [6, 5, 7],
  //   [7, 6, 8],
  //   [8, 7, 9],
  //   [9, 8, 10],
  //   [10, 9]
  // ];
  var nodesLocation = [
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
    var me = this;

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

  // var player = new Player(node0, player1Piece);
   var puzzle = new Puzzle();

  this.draw = function()
  {
    //DISPLAY BOARD
    image(this.sceneManager.worldMap1, 0, 0, width, height);
      background(51);
      //make player visible for when moving
      player.visible = true;
      //back ground image.
      image(this.sceneManager.worldMap1, 0, 0, width, height);//display the board image
      //checks to see of player has reach x and y position
      checkoverlap();


      drawSprites();
    // PLACE NODES
    // for(i = 0; i < nodeArray.length; i++)
    // {
    //   nodeArray[i].display();
    // }

    //DISPLAY PLAYER
    //  player.display();

    //DISPLAY POP-UP
     // puzzle.display(playstate);

  }

  // this.mousePressed = function()
  // {
  //   //CHECKS ALL NODES FOR A CLICK
  //   for(i = 0; i < nodeArray.length; i++)
  //   {
  //     //CHECK IF CLICKED INSIDE OF A NODE
  //     if(nodeArray[i].clicked(mouseX, mouseY))
  //     {
  //       this.adjSearch(nodeArray[i]);
  //       return;
  //     }
  //   }
  //
  //   //CHECK IFBUTTON IN PUZZLE IS CLICKED
  //   if(puzzle.clicked(mouseX, mouseY))
  //   {
  //     puzzle.dismiss();
  //   }
  // }
  //
  // this.adjSearch = function(targetNode)
  // {
  //
  //   //TRAVERSE THE ADJACENCY MATRIX AT THE
  //   //PLAYERS CURRENT NODE INDEX,
  //   //IF TARGET NODE IS ADJACENT, MOVE THE PLAYER
  //   let r = player.currentNode.number;
  //   let c = targetNode.number;
  //
  //   for(i = 1; i < adjMatrix[r].length; i++)
  //   {
  //     if(adjMatrix[r][i] == c)
  //     {
  //       player.move(targetNode);
  //       this.currentNode = targetNode;
  //       puzzle.setPosition(targetNode);
  //       puzzle.visible = true;
  //       clear();
  //       return;
  //     }
  //   }
  // }

//if mouse pressed
    this.mousePressed = function(){
        //if state is at last node reset it. (we can have this to move to next world)
        if(playstate == 11){
            playstate =0;
        }
        //increase state
        else
            playstate++;
        //set new x and y coordinates
        setxy();
        //console.log(` mouse x = ${mouseX}  y = ${mouseY} playstate = ${playstate}`);
        //set new attraction point for player to move to new x and y coordinates
        movePlayer();


    }


    function question(){
        var c = color(255, 204,0); // Define color 'c'
        fill(c); // Use color variable 'c' as fill color
        noStroke(); // Don't draw a stroke around shapes
       rect(30, 20, width/2, height/2); // Draw rectangle
    }
    //checks to see if player has reached coordinates and set velocity to 0 so that it can stop moving.
    function checkoverlap() {
        if (player.overlapPoint(xpos, ypos))
        {
           // console.log(`x = ${xpos} thispos = ${player.position.x} y = ${ypos} thisposy = ${player.position.y} playstate= ${playstate}`);
            player.setVelocity(0, 0);
           // question();
            puzzle.display(playstate);
        }
    }
    //make player move to new attraction poing.
    function movePlayer()
    {
        player.attractionPoint(4, xpos, ypos);
       // console.log(`playstate = ${playstate}`);

    }
    //set x and y posing
    function setxy()
    {
       // console.log(`playstate = ${playstate}`);
        xpos=nodesLocation[playstate][0];
       ypos=nodesLocation[playstate][1];

    }



}
