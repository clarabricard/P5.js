var rectangle1 = (0);
var rectangle2 = (0);
var rectangle22 = (0,315);
var rectangle3 = 222;
var line1 = 215;
var line2 = 0;
var line3 = 0;
var line4 = 47;
var line5 = 355;
var line6 = 220;

var xspeed = 5;
var yspeed = 4;
var xspeed1=-2
 
function setup() {
  createCanvas(480, 480);
  background(255, 255, 255);
}

function draw() {
  background(255, 255, 255);
 noStroke();
 
 fill(193, 25, 25); 
 rect(rectangle1,0,215,197);
 
 rectangle1=rectangle1+xspeed;
 
   var d = dist(windowWidth/2, windowHeight/2, mouseX, mouseY);
 if (rectangle1 > windowWidth || rectangle1 < 0)  {
     	xspeed = -xspeed;
   
   
 }
 
 
 
 fill(242, 222, 64);
 rect(rectangle2, rectangle22, 47 , 200);
 //rotate(rectangle22 * 1)
 
 rectangle22 = rectangle22 + yspeed;

  	if (rectangle22 > windowHeight || rectangle22 < 0) {
	 	  yspeed = -yspeed;
	 	  
 

 
   
   
 }
 fill(23, 41, 103);
 rect(rectangle3, 319, 133, 137);
 rectangle3 = rectangle3 
 
 if (mouseX<rectangle3){
 fill(random(0),0, random(203));
 rect(rectangle3, 319, 133, 137);
   yspeed
   push();
  
   
  
 }
 

 
 noStroke();
 
 fill(0);
rect(line1, 0, 7, 480);
line1=line1+xspeed1;
if (line1 > windowHeight || line1 < 0 ){
  xspeed1 = -xspeed1
}
rect(line2, 197, 480, 10);
rect(line3, 309, 480, 10);
rect(line4, 315, 6, 200);
rect(line5, 319, 7, 200);
line5=line5-xspeed1;
if(line5>windowHeight||line5<0){
xspeed1=-xspeed1
 }
 rect(line6, 452, 140, 9);


	}
  	

