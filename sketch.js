var turtle, car, turtleImg;
var gameState;
var score = 0;
var bgImg1;
var gameState= "begin";
var car1, car2, car3, car4;

function preload(){
    turtleImg = loadImage("Images/turtle.png");
    bgImg1 = loadImage("Images/road.png")
    car1 = loadImage("Images/car1.png")
    car2 = loadImage("Images/car2.png")
    car3 = loadImage("Images/car3.png")
    car4 = loadImage("Images/car4.png")

}

function setup(){
   createCanvas(displayWidth, displayHeight);
   turtle = createSprite(displayWidth/2, displayHeight/2+400);
   turtle.addImage("running", turtleImg);
    turtle.scale = 0.2;


}

function draw(){
    background(bgImg1);
    //background(224, 142, 0);
    //camera.position.y = displayWidth/2;

    if(gameState === "begin"){
        
        turtleMovement();
        if (turtle.y<600){
            gameState === "play"
        }
    }
        
        if(gameState === "play")
        {
            spawnCars();
        }
        

    drawSprites();
}   

function turtleMovement(){
    if (keyWentDown(UP_ARROW)) {
        turtle.velocityY=-5;
    }
    if (keyWentUp(UP_ARROW)) {
        turtle.velocityY=0;
    }
    if (keyWentDown(DOWN_ARROW)) {
        turtle.velocityY=5;
    }
    if (keyWentUp(DOWN_ARROW)) {
        turtle.velocityY=0;
    }
    if (keyWentDown(LEFT_ARROW)) {
        turtle.velocityX=-5;
    }
    if (keyWentUp(LEFT_ARROW)) {
        turtle.velocityX=0;
    }
    if (keyWentDown(RIGHT_ARROW)) {
        turtle.velocityX=5;
    }
    if (keyWentUp(RIGHT_ARROW)) {
        turtle.velocityX=0;
    }
    
}

function spawnCars(){

        if (frameCount %80===0){
            var car = createSprite(100,100,)
            
        }
}