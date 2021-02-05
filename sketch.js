var canvas,surface1,surface2,surface3,surface4,ball;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    surface1 = createSprite (100,595,150,10);
    surface1.shapeColor = "red";

    surface2 = createSprite (300,595,150,10);  
    surface2.shapeColor = "yellow";

    surface3 = createSprite (500,595,150,10);
    surface3.shapeColor = "blue";

    surface4 = createSprite (700,595,150,10);
    surface4.shapeColor = "pink";


    ball = createSprite(100,200,20,20);
    ball.velocityY = 20;
    

}

function draw() {
    background(rgb(169,169,169));
     
if(surface1.isTouching(ball)){

    surface1.shapeColor = "green";
    ball.shapeColor = rgb(255,128,0);
    ball.velocityY = 0;
}
  
if(surface2.isTouching(ball)){

    surface2.shapeColor = "cyan";
    ball.shapeColor = rgb(255,128,0);
    ball.velocityY = 0;
}

if(surface3.isTouching(ball)){

    surface3.shapeColor = "gray";
    ball.shapeColor = rgb(255,128,0);
    ball.velocityY = 0;
}

if(surface4.isTouching(ball)){

    surface4.shapeColor = "red";
    ball.shapeColor = rgb(255,128,0);
    ball.velocityY = 0;
}

 drawSprites();  
 
 
    //add condition to check if box touching surface and make it box
}

