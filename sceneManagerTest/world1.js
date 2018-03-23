//LAYERS:
// - board
// - nodes
// - puzzles
// - items
// - players

var node0;
var node1;
var node2;
var node3;
var node4;
var node5;
var node6;
var node7;
var node8;
var node9;
var node10;
var nodeArr;

//NODE CLASS
class Node{
    constructor(x, y, radius, num)
    {
        this.x = x;
        this.y = y;
        //this.radius = radius;
        this.fill = 0;
        this.nodeNum = num;

    }

    //SHOW THE NODE IN THE CANVAS
    display()
    {
        //noStroke();
        noFill();
        ellipse(this.x, this.y, this.radius);

    }

    //CHECK IF CLICK WAS MADE INSIDE THIS NODE
    clicked(x, y)
    {
        var d = dist(x, y, this.x, this.y);
        if(d < this.radius)
        {
            return true;
        }
    }
}

var player,firstplayer;
//var map;
var xpos , ypos;
var playstate;
var a;
var i;
//WORLD1 FUNCTION
function World1() {
    var me = this;

    mouseIsPressed=false;
    player = createSprite(200, 423);
    player.addAnimation("normal", p1);
    //set max speed for when sprite moves.
    player.maxSpeed = 5;
    player.scale = .5;
    //set velocity to 0 to make sure its not moving.
    player.velocity.y = 0;
    player.velocity.x = 0;

    playstate = 0;

    this.draw = function () {

        background(51);
        //make player visible for when moving
        player.visible = true;
        //back ground image.
        image(this.sceneManager.worldMap1, 0, 0, width, height);//display the board image
        //checks to see of player has reach x and y position
        checkoverlap();

        drawSprites();
    }
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
    //checks to see if player has reached coordinates and set velocity to 0 so that it can stop moving.
    function checkoverlap() {
        if (player.overlapPoint(xpos, ypos))
        {
            console.log(`x = ${xpos} thispos = ${player.position.x} y = ${ypos} thisposy = ${player.position.y} playstate= ${playstate}`);
            player.setVelocity(0, 0);
        }
    }
    //make player move to new attraction poing.
    function movePlayer()
    {
        player.attractionPoint(4, xpos, ypos);
        console.log(`playstate = ${playstate}`);

    }
    //set x and y posing
    function setxy()
    {
        switch(playstate){
            //case for player node position.
            case 0:
                xpos = 200;
                ypos = 423;
                break;
            case 1:
                xpos = 250;
                ypos = 330;
                break;
            case 2:
                xpos = 290;
                ypos = 229;
                break;
            case 3:
                xpos = 338;
                ypos = 137;
                break;
            case 4:
                xpos = 599;
                ypos = 155;
                break;
            case 5:
                xpos = 579;
                ypos = 263;
                break;
            case 6:
                xpos = 570;
                ypos = 395;
                break;
            case 7:
                xpos = 905;
                ypos = 375;
                break;
            case 8:
                xpos = 860;
                ypos = 225;
                break;
            case 9:
                xpos = 837;
                ypos = 130;
                break;
            case 10:
                xpos = 960;
                ypos = 125;
                break;
            default:
                xpos = 200;
                ypos = 423;
                break;
        }

    }

}

