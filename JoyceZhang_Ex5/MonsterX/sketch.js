//global variables
var headX = -15;
var headSpeed = 0.8;
var armsY = 0;
var armsSpeed = 5;
var feetY = 0;
var feetSpeed = 3;
var angle = 0.0;
var spinSpeed = 0.02;

function setup(){
	createCanvas(1000,1000);
}

function draw(){
	background(255);	//resets the background every time draw() runs
	
	push();		//saves normal coordinates
	scale(0.5);
	appleHead(500,360,headX,color(255,100,0));		//orange head that moves side to side
	appleBody(500,360,armsY,feetY,color(0,200,165));	//body with waving arms and green moving feet
	pop();		//sets coordinates back to normal

	push();		//saves normal coordinates
	scale(0.45);
	appleHead(650,970,headX,color(255,250,70));		//yellow head that moves side to side
	appleBody(650,970,armsY,feetY,color(125,165,185));		//body with waving arms and grey-blue moving feet
	pop();		//sets coordinates back to normal

	push();		//saves normal coordinates
	scale(0.7);
	robotLimbs(700,500);	//robot limbs
	robotHalf(700,500,randomColor());		//robot half that has flashing colors
	normalLimbs(700,500,color(180,255,140));	//light green normal limbs	
	normalHalf(700,500,color(180,255,140));		//light green normal half
	pop();		//sets coordinates back to normal

	push();		//saves normal coordinates
	scale(0.4);
	robotLimbs(mouseX*2.5,mouseY*2.5);		//robot limbs that move with mouse
	normalLimbs(mouseX*2.5,mouseY*2.5);		//default normal limbs that move with mouse
	pop();		//sets coordinates back to normal

	push();		//saves normal coordinates
	scale(0.92);
	appleHead(mouseX*1.087-8,mouseY*1.087+64);		//apple head that moves with mouse
	pop();		//sets coordinates back to normal

	push();		//saves normal coordinates
	scale(0.7);
	translate(700,500);		//sets (0,0) to the center of the big half robot
	rotate(angle);		//makes the pink head rotate around the big half robot
	appleHead(0,-400,0,color(255,195,205));		//pink apple head
	rotate(angle);		//makes the blue head rotate around the big half robot at twice the speed
	appleHead(0,600,0,color(185,255,255));		//blue apple head
	pop();		//sets coordinates back to normal

	headX+=headSpeed;		//changes where the heads are each time draw() runs
	if ((headX>15) || (headX<-15)) {	//reverses heads' directions at a certain point
		headSpeed*=-1;
	}

	armsY+=armsSpeed;		//changes where the arms are each time draw() runs
	feetY+=feetSpeed;		//changes where the feet are each time draw() runs
	if ((armsY>20) || (armsY<0)) {		//reverses arms' directions at a certain point
		armsSpeed*=-1;
	}
	if ((feetY>15) || (feetY<0)) {		//reverses feet's directions at a certain point
		feetSpeed*=-1;
	}

	angle+=spinSpeed;		//increases the angle each time draw() runs
}

//ALICE'S CODE
//creates an apple head, adjustable side-to-side movement and head color
//default: no movemment, red head
function appleHead(x,y,head=0,col=color(255,0,0)) {
	stroke(0);	//black outline
	fill(col);	//colors head
	ellipse((x+5)+head,(y-65),130,130);		//head (circle)
	fill(30,30,30);	//dark brown
	rect(x+head,(y-175),15,45);	//antenna on top of the head
	fill(90,100,30);	//dark green
	triangle((x-25)+head,(y-88),(x-37)+head,(y-75),(x-13)+head,(y-75));	//left eye
	triangle((x+20)+head,(y-87),(x+12)+head,(y-75),(x+28)+head,(y-75));	//right eye
	fill(30,135,200);		//sky blue
	arc((x-5)+head,(y-40),30,30,0,PI+QUARTER_PI, CHORD);	//mouth
}

//creates a parallelogram body, adjustable arm movement, feet movement, and feet color
//default: no movement, green feet
function appleBody(x,y,arms=0,feet=0,feetCol=color(0,255,0)) {
	stroke(0);	//black outline
	//outline of body (parallelogram)
	line((x-45),y,(x+45),y);
	line((x-75),(y+110),(x+15),(y+110));
	line((x-45),y,(x-75),(y+110));
	line((x+45),y,(x+15),(y+110));
	fill(feetCol);	//colors feet
	ellipse((x-50),(y+110)+feet,30,40); 	//left foot
	ellipse((x-5),(y+110)-feet,30,40);	//right foot
	line((x-55),(y+40),(x-85),(y+55)-arms);	//left arm	
	line((x+35),(y+40),(x+55),(y+55)-arms);	//right arm
}


//JOYCE'S CODE
//creates half a robot, adjustable eye and mouth color
//default: red eye and mouth
function robotHalf(x,y,col=color(200,0,0)) {
	stroke(0);
	//face
	fill(180);
	arc(x,y,305,305,radians(110),radians(290),CHORD);
	//outer eye
	fill(100);
	ellipse((x-80),(y-30),60,60);
	//inner eye
	strokeWeight(2);
	fill(col);	//colors eyes and mouth
	ellipse((x-80),(y-30),30,30);
	//mouth
	rect((x-80),(y+50),100,30);
	line((x-60),(y+50),(x-60),(y+80));	//left line
	line((x-40),(y+50),(x-40),(y+80));  //right line
}

//creates half a normal creature, adjustable skin color
//default: light purple
function normalHalf(x,y,col=color(215,200,230)) {
	stroke(0);
	//face
	strokeWeight(1);
	arc(x,y,300,300,radians(-70),radians(110),CHORD);
	//eye
	noFill();
	strokeWeight(4);
	arc((x+80),(y-10),60,60,radians(200),radians(340));
	//mouth
	strokeWeight(3);
	arc(x,y,180,180,radians(30),radians(110));
	//blush
	strokeWeight(1);
	stroke(235,150,190);
	line((x+60),(y+20),(x+80),y);	//left
	line((x+80),(y+20),(x+100),y);	//middle
	line((x+100),(y+20),(x+120),y);	//right
}

function robotLimbs(x,y) {
	//spikes
	fill(125,90,165);	//dark purple
	triangle((x-120),(y-70),(x-160),(y-150),(x-80),(y-110));  //bottom
	triangle((x-80),(y-110),(x-80),(y-190),(x-20),(y-130));  //middle
	triangle((x-20),(y-130),x,(y-230),(x+20),(y-130));  //top
	//foot
	fill(140);
	triangle((x-80),(y+90),(x-180),(y+150),(x-40),(y+130));    
	//upper arm
	noFill();
	strokeWeight(15);
	curve((x-160),(y-30),(x-160),(y-30),(x-240),(y-70),(x-280),(y-150)); 
	curve((x-160),(y-30),(x-240),(y-70),(x-280),(y-150),(x-280),(y-150));
	//shoulder
	fill(100); 
	strokeWeight(1);
	ellipse((x-160),(y-30),(30),30);
	//hand
	fill(180);
	quad((x-280),(y-150),(x-300),(y-150),(x-340),(y-210),(x-280),(y-170)); 
	//lower arm
	noFill();
	strokeWeight(15);
	curve((x-160),(y+30),(x-160),(y+30),(x-360),(y-30),(x-360),(y+90));
	curve((x-160),(y+30),(x-360),(y-30),(x-360),(y+90),(x-360),(y+90)); 
	//shoulder
	fill(100);
	strokeWeight(1);
	ellipse((x-160),(y+30),30,30);
	//hand
	fill(180);
	quad((x-360),(y+90),(x-360),(y+110),(x-300),(y+150),(x-340),(y+90));
}

function normalLimbs(x,y,col=color(215,200,230)) {
	stroke(0);
	//antenna
	noFill();
	strokeWeight(10);
	arc((x+180),(y-110),160,160,radians(180),radians(270));  //bendy thing
	fill(135,215,255);		//light blue
	strokeWeight(1);
	ellipse((x+180),(y-190),40,40);  //ball
	//feet
	fill(col);
	ellipse((x+100),(y+140),120,40);
	//arm
	arc((x+140),(y+30),100,100,radians(-135),radians(45),CHORD);
}

//randomly returns green, red, or blue
function randomColor() {
	//array with red, green, and blue
	var colors = [color(255,0,0),color(0,255,0),color(0,0,255)];
	return random(colors);		//returns a random color from the array
}