var dog,dogImage,happyDogImage;
var database;
var foodStock,foodS;

function preload()
{
	dogImage=loadImage('images/dogImg.png');
  happyDogImage=loadImage('images/dogImg1.png');
}

function setup() {
	createCanvas(500,500);
  background(46,139,87);
  dog=createSprite(250,250);
  dog.addImage(dogImage);
  dog.scale=0.15;
  database=firebase.database();
  foodStock=database.ref('Food');
  foodStock.on('value',readStock);
}


function draw() { 
  
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDogImage);
  }

  drawSprites();
  

}

function readStock(data){
 foodS=data.val();
}

function writeStock(x){
 if(x<=0){
   x=0;
 }else{
   x=x-1;
 }

database.ref('/').update()({
  Food:x
})
}

