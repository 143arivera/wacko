var diam1 = 0;
var diam2 = 10;//The setup function only happens once
function setup() {
	createCanvas(500, 500);
    background(0);
}

//The draw function happens over and over again
function draw() {
  stroke(208,236,231);
  strokeWeight(5);
  fill(213,245,227);
  ellipse(50,100,diam1,diam1);
  diam = diam1+10;
  stroke(255,255);
  fill(108,52,131);
  ellipse(mouseX,mouseY,60,60);
    fill(0)
    strokeWeight(10)
  rect (300,300,diam2,diam2);
    diam2 = diam2+2;
}
function mousePressed(){
 if(diam1>=500){
    diam1=0;
  }else{
    diam1 =diam1+20
  }
 if(diam2>=150){
     diam2=0;
 }else{
     diam2 = diam2+2;
 }
}