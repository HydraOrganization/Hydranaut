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
var map;
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
    player.maxSpeed = 5;
    player.scale = .5;
    //set the location depth
    //player.depth(1);
    //activate sprite clickable
    //player.mouseActive=true;

    player.velocity.y = 0;
    player.velocity.x = 0;

    playstate = 0;

    this.draw = function () {
        background(51);
        player.visible = true;
        map = image(this.sceneManager.worldMap1, 0, 0, width, height);//display the board image

        checkoverlap();
        drawSprites();
    }

    this.mousePressed = function(){
        if(playstate == 11){
        playstate =0;
        }
        else
        playstate++;
        setxy();
        console.log(` mouse x = ${mouseX}  y = ${mouseY} playstate = ${playstate}`);
        movePlayer();


    }

    function checkoverlap() {
        if (player.overlapPoint(xpos, ypos))
        {
            console.log(`x = ${xpos} thispos = ${player.position.x} y = ${ypos} thisposy = ${player.position.y} playstate= ${playstate}`);
            player.setVelocity(0, 0);
        }
    }

    function movePlayer()
    {
        player.attractionPoint(4, xpos, ypos);
        console.log(`playstate = ${playstate}`);

    }

    function setxy()
    {
        switch(playstate){
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

