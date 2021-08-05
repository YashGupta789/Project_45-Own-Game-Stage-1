var bg;
var tank,tankImage;
var armybase,armybaseImage;
var truck,truck1Image,truck2Image,truck3Image,truck4Image,truck5Image;

function preload(){
    bg = loadImage("images/bg.jpg");
    tankImage = loadImage("images/tank1.png");
    truck1Image = loadImage("images/truck1.png");
    truck2Image = loadImage("images/truck2.png");
    truck3Image = loadImage("images/truck3.png");
    truck4Image = loadImage("images/truck4.png");
    truck5Image = loadImage("images/truck5.png");
    armybaseImage  = loadImage("images/armybase1.png");
}

function setup(){
    createCanvas(displayWidth,displayHeight-143);

    tank = createSprite(750,500);
    tank.addImage(tankImage);
    tank.scale = 0.4;
    
}

function draw(){
    camera.position.x = displayWidth/2;
    camera.position.y = tank.y;

    background(bg);
    image(bg,0,-displayHeight,displayWidth,displayHeight*2);

    if(keyIsDown(UP_ARROW)){
        tank.y = tank.y-5;
    }
    if(keyIsDown(RIGHT_ARROW)){
        tank.x = tank.x+5;
    }

    if(keyIsDown(LEFT_ARROW)){
        tank.x = tank.x-5;
    }

    base();
    armyTruck();

    drawSprites();
}

function base(){
    if(frameCount%450 ===0 ){
        armybase = createSprite(random(200,1200),camera.position.y-200,25,25);
        armybase.addImage(armybaseImage);
        armybase.scale = 0.2;
        r1 = Math.round(random(1,5));
    }
}

function armyTruck(){
    if(frameCount%300 === 0){
        truck = createSprite(random(150,1300),camera.position.y-200,30,30);
        truck.addImage(truck1Image);
        truck.scale = 0.2;
        r2 = Math.round(random(1,5));
        switch(r2){
            case 1 : truck.addImage(truck1Image);
            break;
            case 2 : truck.addImage(truck2Image);
            break;
            case 3 : truck.addImage(truck3Image);
            break;
            case 4 : truck.addImage(truck4Image);
            break;
            case 5 : truck.addImage(truck5Image);
            break;
        }
    }
}