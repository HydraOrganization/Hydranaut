var bkImage;
var hydra;
var board;

function preload()
{
    //load all images
    bkImage = loadImage('images/indexBG.jpg');
   hydra = loadAnimation('images/hydra2.png','images/hydra3.png')
    //hydra = loadImage("images/hydra.png");
    board = loadImage('images/spaceBG.png');
}

function setup()
{
    createCanvas(window.displayWidth,window.displayHeight);

    //CREATE THE SCENE MANAGER
    var mgr = new SceneManager();

    //LOAD ALL IMAGES INTO THE SCENE MANAGER
    //mgr.bkImage = bkImage;
    mgr.hydra = hydra;
    mgr.board = board;

    //DONT KNOW WHAT THIS DOES
    mgr.wire();

    //SWITCH TO THE FRONT PAGE
    mgr.showScene(FrontPage);
}
