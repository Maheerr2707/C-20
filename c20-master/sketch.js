
var r = 0;
var g = 50;
var b = 255;

function setup(){
}


function draw(){
background="white"

createCanvas(1200,400);

ellipse(oval);
Mouse.x=ellipse.x

  if(ellipse<400){
    background = "r"
  }

  if(ellipse.x>400 || Mouse.x < 800){
    background = "g"
  }

  if(ellipse.x>800 || Mouse.x < 1200){
    background = "b"
  }
}