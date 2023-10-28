


//variables for the movement of the ghosts// 
var y;
var Ah;
var x; 
var changeDirection;
var changeDirectionAh;
var changeDirectionX; 
//variables for the movement of PAC// 
var circleX = 200;
var circleY = 200;


function setup() {
  createCanvas(600, 600);
  //var things for movement of ghost// 
    y = 75;
    Ah = 132; 
    x = 23; 
	changeDirection = false;
    changeDirectionAh = false; 
    changeDirectionX - false; 
  //var things for movement of PAC// 
  ellipse(circleX-10,circleY-10, 8)
  fill (200,200,50);
  ellipse(circleX, circleY, 50, 50);
}

function draw() {
  background(0);
  
  
  
  
  //stroke// 
  strokeWeight(0);
  
  // pellets // or whatever you call the white/orange things. i can't remember right now //
  fill (250,216,172); 
  //on top of trapper box// 
  ellipse ( 250, 0, 10);
  ellipse ( 300, 0, 10);
  ellipse ( 350, 0, 10);
  ellipse ( 400, 0, 25);
  ellipse ( 450, 0, 10);
  ellipse ( 500, 0, 10);
  ellipse ( 550, 0, 10);
  //Mid// in front Pac // 
  ellipse ( 250, 200, 10);
  ellipse ( 300, 200, 10);
  ellipse ( 350, 200, 10);
  ellipse ( 400, 200, 25);
  ellipse ( 450, 200, 10);
  ellipse ( 500, 200, 10);
  ellipse ( 550, 200, 10);
  ellipse ( 600, 200, 10);
  //side of O// right side// 
  ellipse ( 600, 0, 10);
  ellipse ( 600, 50, 10);
  ellipse ( 600, 100, 10);
  ellipse ( 600, 150, 10);
  ellipse ( 600, 250, 10);
  ellipse ( 600, 300, 10);
  ellipse ( 600, 350, 25);
  ellipse ( 600, 400, 10); 
  // mid of O O// below captur box thingy// 
  ellipse ( 400, 250, 10);
  ellipse ( 400, 300, 10);
  ellipse ( 400, 350, 10);
  ellipse ( 400, 400, 10);
  ellipse ( 400, 450, 10);
  ellipse ( 400, 500, 10);
  ellipse ( 400, 550, 10); 
  ellipse ( 400, 600, 10);
  //mid of B O// above and below Pac// 
  ellipse ( 200, 0, 10);
  ellipse ( 200, 50, 10);
  ellipse ( 200, 100, 10);
  ellipse ( 200, 150, 10);
  ellipse ( 200, 250, 10);
  ellipse ( 200, 300, 10);
  ellipse ( 200, 350, 10);
  ellipse ( 200, 400, 10);
  ellipse ( 200, 450, 25);
  ellipse ( 200, 500, 10);
  ellipse ( 200, 550, 10); 
  ellipse ( 200, 600, 10);
  //side of B// left side// 
  ellipse (0, 200, 10);
  ellipse (0, 250, 10);
  ellipse (0, 300, 10);
  ellipse (0, 350, 25);
  ellipse (0, 400, 10);
 //below B O O// 
  ellipse ( 0, 450, 10);
  ellipse ( 50, 450, 10);
  ellipse ( 100, 450, 10);
  ellipse ( 150, 450, 10);
  ellipse ( 200, 450, 10);
  ellipse ( 250, 450, 10);
  ellipse ( 300, 450, 10);
  ellipse ( 350, 450, 10);
  ellipse ( 400, 450, 10);
  ellipse ( 450, 450, 10);
  ellipse ( 500, 450, 10);
  ellipse ( 550, 450, 10);
  ellipse ( 600, 450, 10);
  // random ones// 
  ellipse ( 0, 600, 25); 
  ellipse ( 300 ,600, 10); 
  ellipse ( 450, 560, 25)
  ellipse ( 500, 560, 10)
  ellipse ( 550, 560, 10)
  ellipse ( 600, 560, 10)
  
  //glow// 
  //pellets// 
  strokeWeight (0) 
  fill (255); 
   //on top of trapper box// 
  ellipse ( 250, 0, 5);
  ellipse ( 300, 0, 5);
  ellipse ( 350, 0, 5);
  ellipse ( 400, 0, 5);
  ellipse ( 450, 0, 5);
  ellipse ( 500, 0, 5);
  ellipse ( 550, 0, 5);
  //Mid// in front Pac // 
  ellipse ( 250, 200, 5);
  ellipse ( 300, 200, 5);
  ellipse ( 350, 200, 5);
  ellipse ( 400, 200, 5);
  ellipse ( 450, 200, 5);
  ellipse ( 500, 200, 5);
  ellipse ( 550, 200, 5);
  ellipse ( 600, 200, 5);
  //side of O// right side// 
  ellipse ( 600, 0, 5);
  ellipse ( 600, 50, 5);
  ellipse ( 600, 100, 5);
  ellipse ( 600, 150, 5);
  ellipse ( 600, 250, 5);
  ellipse ( 600, 300, 5);
  ellipse ( 600, 350, 5);
  ellipse ( 600, 400, 5); 
  // mid of O O// below captur box thingy// 
  ellipse ( 400, 250, 5);
  ellipse ( 400, 300, 5);
  ellipse ( 400, 350, 5);
  ellipse ( 400, 400, 5);
  ellipse ( 400, 450, 5);
  ellipse ( 400, 500, 5);
  ellipse ( 400, 550, 5); 
  ellipse ( 400, 600, 5);
  //mid of B O// above and below Pac// 
  ellipse ( 200, 0, 5);
  ellipse ( 200, 50, 5);
  ellipse ( 200, 100, 5);
  ellipse ( 200, 150, 5);
  ellipse ( 200, 250, 5);
  ellipse ( 200, 300, 5);
  ellipse ( 200, 350, 5);
  ellipse ( 200, 400, 5);
  ellipse ( 200, 450, 5);
  ellipse ( 200, 500, 5);
  ellipse ( 200, 550, 5); 
  ellipse (200, 600, 5); 
  //side of B// left side// 
  ellipse (0, 200, 5);
  ellipse (0, 250, 5);
  ellipse (0, 300, 5);
  ellipse (0, 350, 5);
  ellipse (0, 400, 5);
 //below B O O// 
  ellipse ( 0, 450, 5);
  ellipse ( 50, 450, 5);
  ellipse ( 100, 450, 5);
  ellipse ( 150, 450, 5);
  ellipse ( 200, 450, 5);
  ellipse ( 250, 450, 5);
  ellipse ( 300, 450, 5);
  ellipse ( 350, 450, 5);
  ellipse ( 400, 450, 5);
  ellipse ( 450, 450, 5);
  ellipse ( 500, 450, 5);
  ellipse ( 550, 450, 5);
  ellipse ( 600, 450, 5);
  // random ones// 
  ellipse ( 0, 600, 5)
  ellipse ( 300 ,600, 5); 
  ellipse ( 450, 560, 5)
  ellipse ( 500, 560, 5)
  ellipse ( 550, 560, 5)
  ellipse ( 600, 560, 5)
  
  
  
  
  
  //now this ghost was made for no reason :D I am going to make it easy and just move it but I might do this orginal one later // 
  // Inky - ghost blue// bruh I thought about making the ghost move but this was so much pain idk even more //
  fill(0, 238, 255);
  strokeWeight(0);
  ellipse(300, y, 45, 30);
  //triangles suck so here are some notes for me brain// 
  //t (x1,y1, x2,y2, x3,y3) //
  //x is horizonal |  y is vertical // 
  // x/v high number moves -> | <- low number moves// 
  // y/h high numner moves down | low number moves up ///
  triangle(277, y, 277, y+24, 310, y);
  triangle(277, y, 323, y, 300, y+24);
  triangle(290, y, 323, y, 323, y+24); 
  //eyes// 
  fill(255); 
  ellipse(290, y, 10, 15); 
  ellipse(310, y, 10, 15); 
  fill(100,100,250)
  ellipse(289, y+5, 8, 8); 
  ellipse(309, y+5, 8, 8); 
  //bruh this ghost was so much pain I hate it // Now time to make two more :D // 
  
  // Pinky - ghost pink// 
  fill(255, 179, 246);
  strokeWeight(0);
  ellipse(400, Ah, 45, 30);
  //triangles suck so here are some notes for me brain// 
  //t (x1,y1, x2,y2, x3,y3) //
  //x is horizonal |  y is vertical // 
  // x/v high number moves -> | <- low number moves// 
  // y/h high numner moves down | low number moves up ///
  triangle(377, Ah, 377, Ah+24, 410, Ah);
  triangle(377, Ah, 423, Ah, 400, Ah+24);
  triangle(390, Ah, 423, Ah, 423, Ah+24); 
  //eyes// 
  fill(255); 
  ellipse(390, Ah, 10, 15); 
  ellipse(410, Ah, 10, 15); 
  fill(100,100,250)
  ellipse(389, Ah+4, 8, 8); 
  ellipse(409, Ah+4, 8, 8); 
  
  // Blinky - ghost red// 
  fill(242, 27, 27);
  strokeWeight(0);
  ellipse(500, y, 45, 30);
  //triangles suck so here are some notes for me brain// 
  //t (x1,y1, x2,y2, x3,y3) //
  //x is horizonal |  y is vertical // 
  // x/v high number moves -> | <- low number moves// 
  // y/h high numner moves down | low number moves up ///
  triangle(477, y, 477, y+24, 510, y);
  triangle(477, y, 523, y, 500, y+24);
  triangle(490, y, 523, y, 523, y+24); 
  //eyes// 
  fill(255); 
  ellipse(490, y, 10, 15); 
  ellipse(510, y, 10, 15); 
  fill(100,100,250)
  ellipse(489, y+3, 8, 8); 
  ellipse(509, y+3, 8, 8);
  
  // Clyde - ghost orange// 
  fill(255, 148, 33);
  strokeWeight(0);
  ellipse(x, 440, 45, 30);
  //triangles suck so here are some notes for me brain// 
  //t (x1,y1, x2,y2, x3,y3) //
  //x is horizonal |  y is vertical // 
  // x/v high number moves -> | <- low number moves// 
  // y/h high numner moves down | low number moves up ///
  triangle(x-23, 440, x-23, 464, x+10, 440);
  triangle(x-23, 440, x+23, 440, x, 464);
  triangle(x-10, 440, x+23, 440, x+23, 464); 
  //eyes// A
  fill(255); 
  ellipse(x-10, 440, 10, 15); 
  ellipse(x+10, 440, 10, 15); 
  fill(100,100,250)
  ellipse(x-12, 438, 8, 8); 
  ellipse(x+12, 438, 8, 8);
  
  
  
//the movement for inky and blinky // 
  if(y>132){
		changeDirection=true} 
  else if (y<=75){
		changeDirection=false}
  
  if (y>=0 && changeDirection == false){
		y=y+1}
	else if(changeDirection == true){
		y=y-1}
  
  //the movement for pinky// 
  if(Ah<=75){
		changeDirectionAh=false}
	else if (Ah>132){
		changeDirectionAh=true}
	
	if (Ah>=0 && changeDirectionAh == false){
		Ah=Ah+1}
	else if(changeDirectionAh == true){
		Ah=Ah-1}
  
  //the movement for clyde// 
  if(x>577){
		changeDirectionX=true} 
  else if (x<=23){
		changeDirectionX=false}
  
  if (x>=0 && changeDirectionX == false){
		x=x+1}
	else if(changeDirectionX == true){
		x=x-1}
  
  
  
  
  //PAC// 
  // fill (200,200,50);
  // ellipse (200,200,50);
  
  
  //lines// bruh I just finished the main box and that was pain // not as painful as the stupid triangles but bruh come on // 
  strokeWeight(4)
  stroke (5, 0, 255)
  //ghost trapper box thingy idk what to call it// 
  //bottom//
  line (250, 170, 550, 170);
  line (257, 163, 543, 163);
  //left// 
  line (250, 170, 250, 50);
  line (257, 163, 257, 57);
  //right// 
  line (550, 50, 550, 170);
  line (543, 57, 543, 163);
  //top L// 
  line (250, 50, 350, 50);
  line (257, 57, 350, 57);
  //top R// 
  line (450, 50, 550, 50);
  line (450, 57, 543, 57)
  //top orange// mid//
  strokeWeight(6); 
  stroke (250,216,172)
  line(350, 53, 450, 53)
  
  
  //top left side// box// 
  strokeWeight(4); 
  stroke (5, 0, 255)
  //right//
  line ( 11, 0, 11, 150);
  line ( 4, 0, 4, 143);
  //bottom//
  line (0, 150, 11, 150);
  line ( 0, 143, 4, 143);
  
  
  //ah// skinny box//  
  //left// 
  line (111, 0, 111, 150)
  line (118, 0, 118, 143)
  //right// 
  line ( 150, 0, 150, 150)
  line ( 143, 0, 143, 143)
  //bottom//
  line (150, 150, 111, 150)
  line (143, 143, 118, 143)
  
  
  // B // 
  strokeWeight(4); 
  stroke (5, 0, 255)
  //top// 
  line (50, 230, 150, 230);
  line (57, 237, 143, 237)
  //left// 
  line ( 50, 230, 50, 400);
  line (57, 237, 57, 393);
  //bottom// 
  line (50, 400, 150, 400);
  line ( 57, 393, 143, 393) ;
  //right T// 
  line ( 150, 230, 150, 295)
  line( 143, 237, 143, 290)
  //right MID T// 
  line (100, 315, 143, 290)
  line ( 110, 315, 150, 295)
  //right MID B// 
  line ( 110, 315, 150, 335)
  line ( 100, 315, 143, 340)
  //right B// 
  line ( 150, 400, 150, 335)
  line (143, 393, 143, 340)
  
  // O // MID // near pac // 
  strokeWeight(4); 
  stroke (5, 0, 255)
  //top//
  line (250, 230, 350, 230);
  line (257, 237, 343, 237); 
  //Left// 
  line (250, 230, 250, 400);
  line (257, 237, 257, 393);
  //right// 
  line (350, 230, 350, 400); 
  line (343, 237, 343, 393); 
  //bottom// 
  line (250, 400, 350, 400)
  line (257, 393, 343, 393)
  
  // O // right // away //
  strokeWeight(4); 
  stroke (5, 0, 255)
  //top// 
  line (450, 230, 550, 230);
  line (457, 237, 543, 237);
  //LEFT// 
  line ( 450, 230, 450, 400)
  line (457, 237, 457, 393)
  //right// 
  line(550, 230, 550, 400)
  line (543, 237, 543, 393)
  //bottom// 
  line (450, 400, 550, 400)
  line (457, 393, 543, 393)
  
  //bottom boxes below B O O // 
  //Left box//
  //top// 
  line (0,480,150, 480)
  line (0, 487,143, 487)
  //right// 
  line (150, 480, 150, 600)
  line (143, 487, 143, 600)
  //left // 
  line (0, 550, 65, 550)
  line ( 0, 557, 58, 557)
  line ( 65, 550, 65, 600)
  line ( 58, 557, 58, 600)
  //MID box// 
  //top// 
  line (250, 480, 350, 480)
  line (257, 487, 343, 487)
  //left// 
  line (250, 480, 250, 550)
  line (257, 487, 257, 543)
  //right// 
  line (350, 480, 350, 550)
  line (343, 487, 343, 543)
  //bottom// 
  line (250, 550, 350, 550)
  line (257, 543, 343, 543)
  //T Right box// 
  //top// 
  line (450, 480, 600, 480)
  line (457, 487, 600, 487)
  //left//
  line ( 450, 480, 450, 525)
  line ( 457, 487, 457, 518)
  //bottom// 
  line (450, 525, 600, 525)
  line ( 457, 518, 600, 518)
  //B Right// 
  //top// 
  line (450, 600, 600, 600)
  
  
  
  
  
 //glow//
  //might try to make thinner lines in the lines to make it look like they are glowing but that would be kind of pain but not that bad I would hope// That is if I like the way it looks// 
  //Yeah it was pretty easy to do and looks pretty nice I will do it at the very end// 
  //bruh why did my thing get all weird now if I try to type something over something else it pushes everything back or erases it// fixed it I guess I presed the insert key on the keyboard and it messed everything up// 
  //Glow// 
  //ghost trapper box //
  strokeWeight(1)
  stroke(255)
  //bottom//
  line (250, 170, 550, 170);
  line (257, 163, 543, 163);
  //left// 
  line (250, 170, 250, 50);
  line (257, 163, 257, 57);
  //right// 
  line (550, 50, 550, 170);
  line (543, 57, 543, 163);
  //top L// 
  line (250, 50, 350, 50);
  line (257, 57, 350, 57);
  //top R// 
  line (450, 50, 550, 50);
  line (450, 57, 543, 57)
  //top orange// mid//
  line(350, 53, 450, 53)
  //top left side// box// 
  //right//
  line ( 11, 0, 11, 150);
  line ( 4, 0, 4, 143);
  //bottom//
  line (0, 150, 11, 150);
  line ( 0, 143, 4, 143);
  
  //ah// skinny box//  
  //left// 
  line (111, 0, 111, 150)
  line (118, 0, 118, 143)
  //right// 
  line ( 150, 0, 150, 150)
  line ( 143, 0, 143, 143)
  //bottom//
  line (150, 150, 111, 150)
  line (143, 143, 118, 143)
  
  // B // 
  //top// 
  line (50, 230, 150, 230);
  line (57, 237, 143, 237)
  //left// 
  line ( 50, 230, 50, 400);
  line (57, 237, 57, 393);
  //bottom// 
  line (50, 400, 150, 400);
  line ( 57, 393, 143, 393) ;
  //right T// 
  line ( 150, 230, 150, 295)
  line( 143, 237, 143, 290)
  //right MID T// 
  line (100, 315, 143, 290)
  line ( 110, 315, 150, 295)
  //right MID B// 
  line ( 110, 315, 150, 335)
  line ( 100, 315, 143, 340)
  //right B// 
  line ( 150, 400, 150, 335)
  line (143, 393, 143, 340)
  
  // O // MID // near pac // 
  //top//
  line (250, 230, 350, 230);
  line (257, 237, 343, 237); 
  //Left// 
  line (250, 230, 250, 400);
  line (257, 237, 257, 393);
  //right// 
  line (350, 230, 350, 400); 
  line (343, 237, 343, 393); 
  //bottom// 
  line (250, 400, 350, 400)
  line (257, 393, 343, 393)
  
  // O // right // away //
  //top// 
  line (450, 230, 550, 230);
  line (457, 237, 543, 237);
  //LEFT// 
  line ( 450, 230, 450, 400)
  line (457, 237, 457, 393)
  //right// 
  line(550, 230, 550, 400)
  line (543, 237, 543, 393)
  //bottom// 
  line (450, 400, 550, 400)
  line (457, 393, 543, 393)
  
  //bottom boxes below B O O // 
  //Left box//
  //top// 
  line (0,480,150, 480)
  line (0, 487,143, 487)
  //right// 
  line (150, 480, 150, 600)
  line (143, 487, 143, 600)
  //left // 
  line (0, 550, 65, 550)
  line ( 0, 557, 58, 557)
  line ( 65, 550, 65, 600)
  line ( 58, 557, 58, 600)
  //MID box// 
  //top// 
  line (250, 480, 350, 480)
  line (257, 487, 343, 487)
  //left// 
  line (250, 480, 250, 550)
  line (257, 487, 257, 543)
  //right// 
  line (350, 480, 350, 550)
  line (343, 487, 343, 543)
  //bottom// 
  line (250, 550, 350, 550)
  line (257, 543, 343, 543)
  //T Right box// 
  //top// 
  line (450, 480, 600, 480)
  line (457, 487, 600, 487)
  //left//
  line ( 450, 480, 450, 525)
  line ( 457, 487, 457, 518)
  //bottom// 
  line (450, 525, 600, 525)
  line ( 457, 518, 600, 518)
  //B Right// 
  //top// 
  strokeWeight (2)
  line (450, 600, 600, 600)
  
  
  
  //stroke// 
  strokeWeight(0);
//   if (keyIsPressed === true){
//  fill (0); 
// } else { 
// fill (255);
// }
  
  //the pac is back// clap // clap // back again // clap // clap // the pac is back // clap // clap // tell ur friends //
  //this is the chomper button // 
  // if (keyIsPressed === true){ 
  // fill(200,200,50);
  // ellipse (200,200,50); 
  // fill (0);
  // triangle(230, 175, 190, 200, 230, 235); 
  // strokeWeight(4)
  // stroke(0)
  // line(189,190,192,190)    
  // } else { 
  //   fill(200,200,50);
  //   ellipse (200,200,50);
  //   fill (0)
  //   ellipse(190,190, 8)
  // }

  
//I want the open and close mouth to loop but idk how to do that :/ // welp I tried to do it but it didn't work so whatever // 
  
  //movement for PAC// 
  fill (200,200,50);
  ellipse(circleX, circleY, 50, 50);
  
  
  
  
  // the circleX and circleY are 200// 
   if (keyIsPressed) {
   if (keyCode == RIGHT_ARROW) { 
    circleX +=5; 
    strokeWeight(0); 
    fill (0);
    triangle(circleX+30, circleY-25, circleX-10, circleY, circleX+30, circleY+30); 
    strokeWeight(4)
    stroke(0)
    line(circleX-12,circleY-10, circleX-6,circleY-10)  
    // strokeWeight(0)
    // fill (200,200,50);
    // ellipse(circleX, circleY, 50, 50);
    // fill (0); 
    // ellipse(circleX-10,circleY-10, 8);
                                
   }  else if (keyCode == LEFT_ARROW) {
     circleX -= 5;
     strokeWeight(0); 
    fill (0);
    triangle(circleX-25, circleY-12, circleX+10, circleY, circleX-25, circleY+30); 
    strokeWeight(4)
    stroke(0)
    line(circleX+12,circleY-10,circleX+6,circleY-10)
   } else if (keyCode == UP_ARROW) {
     circleY -= 5; 
    strokeWeight(0); 
    fill (0);
    triangle(circleX-10, circleY-25, circleX, circleY+10, circleX+30, circleY-25); 
    strokeWeight(4)
    stroke(0)
    line(circleX-10,circleY+12,circleX-10,circleY+6)  
   } else if (keyCode == DOWN_ARROW) {
     circleY +=5; 
     strokeWeight(0);  
    fill (0);
    triangle(circleX-20, circleY+25, circleX, circleY-10, circleX+20, circleY+25); 
    strokeWeight(4)
    stroke(0)
    line(circleX+12,circleY-12,circleX+12,circleY-16) 
   }
  }  
  
  
  
  
  
  
  
//console log// NuMbErS // 
  if (keyIsPressed === true ) {
      console.log ('key is pressed');
      } else { 
      console.log ('key is NOT pressed');
      }
  
}