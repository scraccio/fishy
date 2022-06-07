///<reference path="./TSDef/p5.global-mode.d.ts" />

class fish{

  constructor(x, y, sx, sy, size, enemy, c, last){
    this.x=x;
    this.y=y;
    this.sx=sx;
    this.sy=sy;
    this.size=size;
    this.enemy = enemy;
    this.c=c;
    this.lastDirection = last;
    this.alive = true;
  }

  display(){
    if(this.alive == true){

      ellipseMode(CENTER);
      fill(255);
      noStroke();
      ellipse(this.x,this.y,this.size*4,this.size*2);

      fill(this.c);
      noStroke();
      ellipse(this.x,this.y,this.size*4-1,this.size*2-2);

        
      if(this.lastDirection == 1){
        fill(0);
        circle(this.x-this.size*1.5,this.y,this.size/2);
        fill(255);
        circle(this.x-this.size*1.5,this.y-this.size/6,this.size/6);
      }
      else{
        fill(0);
        circle(this.x+this.size*1.5,this.y,this.size/2);
        fill(255);
        circle(this.x+this.size*1.5,this.y-this.size/6,this.size/6);
      }
      /*stroke(255);
      line(this.x-this.size/1.2,this.y-this.size/1.1,this.x,this.y-this.size);
      line(this.x,this.y-this.size,this.x+this.size/1.2,this.y-this.size/1.1);
      line(this.x-this.size*1.5, this.y-this.size/1.5, this.x-this.size/1.2,this.y-this.size/1.1);
      line(this.x+this.size/1.2,this.y-this.size/1.1, this.x+this.size*1.5, this.y-this.size/1.5);

      line(this.x-this.size*1.9, this.y-this.size/3.1, this.x-this.size*1.5, this.y-this.size/1.5);
      line(this.x+this.size*1.9, this.y-this.size/3.1, this.x+this.size*1.5, this.y-this.size/1.5);
      line(this.x-this.size*2, this.y+this.size/118, this.x-this.size*1.9, this.y-this.size/3.1);
      line(this.x+this.size*2.5, this.y-this.size, this.x+this.size*1.9, this.y-this.size/3.1);

      line(this.x-this.size/1.2,this.y+this.size/1.1,this.x,this.y+this.size);
      line(this.x,this.y+this.size,this.x+this.size/1.2,this.y+this.size/1.1);
      line(this.x-this.size*1.5, this.y+this.size/1.5, this.x-this.size/1.2,this.y+this.size/1.1);
      line(this.x+this.size/1.2,this.y+this.size/1.1, this.x+this.size*1.5, this.y+this.size/1.5);

      line(this.x-this.size*1.9, this.y+this.size/3.1, this.x-this.size*1.5, this.y+this.size/1.5);
      line(this.x+this.size*1.9, this.y+this.size/3.1, this.x+this.size*1.5, this.y+this.size/1.5);
      line(this.x-this.size*2, this.y+this.size/118, this.x-this.size*1.9, this.y+this.size/3.1);
      line(this.x+this.size*2.5, this.y+this.size, this.x+this.size*1.9, this.y+this.size/3.1);

      
      line(this.x+this.size*2.5, this.y+this.size, this.x+this.size*2.2, this.y);
      line(this.x+this.size*2.2, this.y, this.x+this.size*2.5, this.y-this.size);
      */
      fill(this.c); 

      if(this.lastDirection == 1){
        beginShape();
          vertex(this.x+this.size*2.5, this.y-this.size);
          vertex(this.x+this.size*2.2, this.y);
          vertex(this.x+this.size*2.5, this.y+this.size);
          vertex(this.x+this.size*1.9, this.y+this.size/3.1);
          vertex(this.x+this.size*1.9, this.y-this.size/3.1);
        endShape();
      }
      else{
        beginShape();
          vertex(this.x-this.size*2.5, this.y-this.size);
          vertex(this.x-this.size*2.2, this.y);
          vertex(this.x-this.size*2.5, this.y+this.size);
          vertex(this.x-this.size*1.9, this.y+this.size/3.1);
          vertex(this.x-this.size*1.9, this.y-this.size/3.1);
        endShape();
      }
      line(this.x+this.size*2.5, this.y+this.size, this.x+this.size*2.2, this.y);
      line(this.x+this.size*2.2, this.y, this.x+this.size*2.5, this.y-this.size);
    }
  }

  move(){
    if(this.enemy == false && this.x+this.sx > 0 && this.x+this.sx < width ){
      this.x+=this.sx;
    }
    else if(this.x+this.sx <= 0 && this.x+this.sx >= width){
      this.sx=0;
    }
    else{
      this.x+=this.sx;
    }
    if(this.y+this.sy > 0 && this.y+this.sy < height){
      this.y+=this.sy;
    }
    else{
      this.sy=0;
    }
    
    if(this.enemy == false){
      if(right){
        this.sx+=0.12;
        this.lastDirection = 0;
      }
      if(left){
        this.sx-=0.12;
        this.lastDirection = 1;
      }
      if(up){
        this.sy-=0.12;
      }
      if(down){
        this.sy+=0.12;
      }
      this.sx /= 1.02;
      this.sy /= 1.02;
    }
  }

  run(){
    this.display();
    this.move();
  }
}

let nemo;
let up, down, left, right;
let score;
let fishes;
let rand;
let t;
let h;
let fishNum;
let lost;

function setup() {
  createCanvas(windowWidth, windowHeight);

  nemo = new fish(width/2, height/2, 0, 0, 10, false, color(190,0,255), 1);

  up = false;
  down = false;
  right = false;
  left = false;
  t = false;
  h = false;
  fishNum = 0;
  lost = false;

  fishes = [];

  score = 0;
}

function draw() {
  background(50,140,200);

  if((Math.random()*100) >= 98){
    rand = Math.random();
    randSize = Math.random();
    fishes.push(new fish((rand>=0.5) ? -500 : width+500 , Math.random()*(height-20 - 20)+20, (rand>=0.5) ? Math.random()*(3-1+1)+1 : Math.random()*(-1+3+1)-1, 0, (randSize<0.8) ? Math.random()*(20-3+1)+3 : Math.random()*(50-20+1)+20, true, color(Math.random()*256,0,Math.random()*256), (rand>=0.5)?0:1));
    fishNum+=1;
  }
  
  nemo.run();
  
  for(let i=0; i<fishes.length; i++){

    if(fishes[i].alive == true){
      fishes[i].run();
    }
    

    if(fishes[i].alive == true && fishes[i].x > width + 500 || fishes[i].x < - 500){
      fishes[i].alive = false;
      fishNum-=1;
    }

    h = false;

    if(fishes[i].alive == true){
      h = h || collideLineLine(fishes[i].x-fishes[i].size/1.2, fishes[i].y-fishes[i].size/1.1, fishes[i].x,fishes[i].y-fishes[i].size, nemo.x-nemo.size/1.2,nemo.y-nemo.size/1.1,nemo.x,nemo.y-nemo.size);
      h = h || collideLineLine(fishes[i].x,fishes[i].y-fishes[i].size,fishes[i].x+fishes[i].size/1.2,fishes[i].y-fishes[i].size/1.1, nemo.x-nemo.size/1.2,nemo.y-nemo.size/1.1,nemo.x,nemo.y-nemo.size);
      h = h || collideLineLine(fishes[i].x-fishes[i].size*1.5, fishes[i].y-fishes[i].size/1.5, fishes[i].x-fishes[i].size/1.2,fishes[i].y-fishes[i].size/1.1, nemo.x-nemo.size/1.2,nemo.y-nemo.size/1.1,nemo.x,nemo.y-nemo.size);
      h = h || collideLineLine(fishes[i].x+fishes[i].size/1.2,fishes[i].y-fishes[i].size/1.1, fishes[i].x+fishes[i].size*1.5, fishes[i].y-fishes[i].size/1.5, nemo.x-nemo.size/1.2,nemo.y-nemo.size/1.1,nemo.x,nemo.y-nemo.size);

      h = h || collideLineLine(fishes[i].x-fishes[i].size*1.9, fishes[i].y-fishes[i].size/3.1, fishes[i].x-fishes[i].size*1.5, fishes[i].y-fishes[i].size/1.5, nemo.x-nemo.size/1.2,nemo.y-nemo.size/1.1,nemo.x,nemo.y-nemo.size);
      h = h || collideLineLine(fishes[i].x+fishes[i].size*1.9, fishes[i].y-fishes[i].size/3.1, fishes[i].x+fishes[i].size*1.5, fishes[i].y-fishes[i].size/1.5, nemo.x-nemo.size/1.2,nemo.y-nemo.size/1.1,nemo.x,nemo.y-nemo.size);
      h = h || collideLineLine(fishes[i].x-fishes[i].size*2, fishes[i].y+fishes[i].size/118, fishes[i].x-fishes[i].size*1.9, fishes[i].y-fishes[i].size/3.1,nemo.y-nemo.size/1.1,nemo.x,nemo.y-nemo.size);
      h = h || collideLineLine(fishes[i].x+fishes[i].size*2, fishes[i].y+fishes[i].size/118, fishes[i].x+fishes[i].size*1.9, fishes[i].y-fishes[i].size/3.1,nemo.y-nemo.size/1.1,nemo.x,nemo.y-nemo.size);

      h = h || collideLineLine(fishes[i].x-fishes[i].size/1.2,fishes[i].y+fishes[i].size/1.1,fishes[i].x,fishes[i].y+fishes[i].size,nemo.y-nemo.size/1.1,nemo.x,nemo.y-nemo.size);
      h = h || collideLineLine(fishes[i].x,fishes[i].y+fishes[i].size,fishes[i].x+fishes[i].size/1.2,fishes[i].y+fishes[i].size/1.1,nemo.y-nemo.size/1.1,nemo.x,nemo.y-nemo.size);
      h = h || collideLineLine(fishes[i].x-fishes[i].size*1.5, fishes[i].y+fishes[i].size/1.5, fishes[i].x-fishes[i].size/1.2,fishes[i].y+fishes[i].size/1.1,nemo.y-nemo.size/1.1,nemo.x,nemo.y-nemo.size);
      h = h || collideLineLine(fishes[i].x+fishes[i].size/1.2,fishes[i].y+fishes[i].size/1.1, fishes[i].x+fishes[i].size*1.5, fishes[i].y+fishes[i].size/1.5,nemo.y-nemo.size/1.1,nemo.x,nemo.y-nemo.size);

      h = h || collideLineLine(fishes[i].x-fishes[i].size*1.9, fishes[i].y+fishes[i].size/3.1, fishes[i].x-fishes[i].size*1.5, fishes[i].y+fishes[i].size/1.5,nemo.y-nemo.size/1.1,nemo.x,nemo.y-nemo.size);
      h = h || collideLineLine(fishes[i].x+fishes[i].size*1.9, fishes[i].y+fishes[i].size/3.1, fishes[i].x+fishes[i].size*1.5, fishes[i].y+fishes[i].size/1.5,nemo.y-nemo.size/1.1,nemo.x,nemo.y-nemo.size);
      h = h || collideLineLine(fishes[i].x-fishes[i].size*2, fishes[i].y+fishes[i].size/118, fishes[i].x-fishes[i].size*1.9, fishes[i].y+fishes[i].size/3.1,nemo.y-nemo.size/1.1,nemo.x,nemo.y-nemo.size);
      h = h || collideLineLine(fishes[i].x+fishes[i].size*2, fishes[i].y+fishes[i].size/118, fishes[i].x+fishes[i].size*1.9, fishes[i].y+fishes[i].size/3.1,nemo.y-nemo.size/1.1,nemo.x,nemo.y-nemo.size);



      h = h || collideLineLine(fishes[i].x-fishes[i].size/1.2, fishes[i].y-fishes[i].size/1.1, fishes[i].x,fishes[i].y-fishes[i].size, nemo.x,nemo.y-nemo.size,nemo.x+nemo.size/1.2,nemo.y-nemo.size/1.1);
      h = h || collideLineLine(fishes[i].x,fishes[i].y-fishes[i].size,fishes[i].x+fishes[i].size/1.2,fishes[i].y-fishes[i].size/1.1, nemo.x,nemo.y-nemo.size,nemo.x+nemo.size/1.2,nemo.y-nemo.size/1.1);
      h = h || collideLineLine(fishes[i].x-fishes[i].size*1.5, fishes[i].y-fishes[i].size/1.5, fishes[i].x-fishes[i].size/1.2,fishes[i].y-fishes[i].size/1.1, nemo.x,nemo.y-nemo.size,nemo.x+nemo.size/1.2,nemo.y-nemo.size/1.1);
      h = h || collideLineLine(fishes[i].x+fishes[i].size/1.2,fishes[i].y-fishes[i].size/1.1, fishes[i].x+fishes[i].size*1.5, fishes[i].y-fishes[i].size/1.5, nemo.x,nemo.y-nemo.size,nemo.x+nemo.size/1.2,nemo.y-nemo.size/1.1);

      h = h || collideLineLine(fishes[i].x-fishes[i].size*1.9, fishes[i].y-fishes[i].size/3.1, fishes[i].x-fishes[i].size*1.5, fishes[i].y-fishes[i].size/1.5, nemo.x,nemo.y-nemo.size,nemo.x+nemo.size/1.2,nemo.y-nemo.size/1.1);
      h = h || collideLineLine(fishes[i].x+fishes[i].size*1.9, fishes[i].y-fishes[i].size/3.1, fishes[i].x+fishes[i].size*1.5, fishes[i].y-fishes[i].size/1.5, nemo.x,nemo.y-nemo.size,nemo.x+nemo.size/1.2,nemo.y-nemo.size/1.1);
      h = h || collideLineLine(fishes[i].x-fishes[i].size*2, fishes[i].y+fishes[i].size/118, fishes[i].x-fishes[i].size*1.9, fishes[i].y-fishes[i].size/3.1,nemo.x,nemo.y-nemo.size,nemo.x+nemo.size/1.2,nemo.y-nemo.size/1.1);
      h = h || collideLineLine(fishes[i].x+fishes[i].size*2, fishes[i].y+fishes[i].size/118, fishes[i].x+fishes[i].size*1.9, fishes[i].y-fishes[i].size/3.1,nemo.x,nemo.y-nemo.size,nemo.x+nemo.size/1.2,nemo.y-nemo.size/1.1);

      h = h || collideLineLine(fishes[i].x-fishes[i].size/1.2,fishes[i].y+fishes[i].size/1.1,fishes[i].x,fishes[i].y+fishes[i].size,nemo.x,nemo.y-nemo.size,nemo.x+nemo.size/1.2,nemo.y-nemo.size/1.1);
      h = h || collideLineLine(fishes[i].x,fishes[i].y+fishes[i].size,fishes[i].x+fishes[i].size/1.2,fishes[i].y+fishes[i].size/1.1,nemo.x,nemo.y-nemo.size,nemo.x+nemo.size/1.2,nemo.y-nemo.size/1.1);
      h = h || collideLineLine(fishes[i].x-fishes[i].size*1.5, fishes[i].y+fishes[i].size/1.5, fishes[i].x-fishes[i].size/1.2,fishes[i].y+fishes[i].size/1.1,nemo.x,nemo.y-nemo.size,nemo.x+nemo.size/1.2,nemo.y-nemo.size/1.1);
      h = h || collideLineLine(fishes[i].x+fishes[i].size/1.2,fishes[i].y+fishes[i].size/1.1, fishes[i].x+fishes[i].size*1.5, fishes[i].y+fishes[i].size/1.5,nemo.x,nemo.y-nemo.size,nemo.x+nemo.size/1.2,nemo.y-nemo.size/1.1);

      h = h || collideLineLine(fishes[i].x-fishes[i].size*1.9, fishes[i].y+fishes[i].size/3.1, fishes[i].x-fishes[i].size*1.5, fishes[i].y+fishes[i].size/1.5,nemo.x,nemo.y-nemo.size,nemo.x+nemo.size/1.2,nemo.y-nemo.size/1.1);
      h = h || collideLineLine(fishes[i].x+fishes[i].size*1.9, fishes[i].y+fishes[i].size/3.1, fishes[i].x+fishes[i].size*1.5, fishes[i].y+fishes[i].size/1.5,nemo.x,nemo.y-nemo.size,nemo.x+nemo.size/1.2,nemo.y-nemo.size/1.1);
      h = h || collideLineLine(fishes[i].x-fishes[i].size*2, fishes[i].y+fishes[i].size/118, fishes[i].x-fishes[i].size*1.9, fishes[i].y+fishes[i].size/3.1,nemo.x,nemo.y-nemo.size,nemo.x+nemo.size/1.2,nemo.y-nemo.size/1.1);
      h = h || collideLineLine(fishes[i].x+fishes[i].size*2, fishes[i].y+fishes[i].size/118, fishes[i].x+fishes[i].size*1.9, fishes[i].y+fishes[i].size/3.1,nemo.x,nemo.y-nemo.size,nemo.x+nemo.size/1.2,nemo.y-nemo.size/1.1);


      h = h || collideLineLine(fishes[i].x-fishes[i].size/1.2, fishes[i].y-fishes[i].size/1.1, fishes[i].x,fishes[i].y-fishes[i].size, nemo.x-nemo.size*1.5,nemo.y-nemo.size/1.5,nemo.x-nemo.size/1.2,nemo.y-nemo.size/1.1);
      h = h || collideLineLine(fishes[i].x,fishes[i].y-fishes[i].size,fishes[i].x+fishes[i].size/1.2,fishes[i].y-fishes[i].size/1.1, nemo.x-nemo.size*1.5,nemo.y-nemo.size/1.5,nemo.x-nemo.size/1.2,nemo.y-nemo.size/1.1);
      h = h || collideLineLine(fishes[i].x-fishes[i].size*1.5, fishes[i].y-fishes[i].size/1.5, fishes[i].x-fishes[i].size/1.2,fishes[i].y-fishes[i].size/1.1, nemo.x-nemo.size*1.5,nemo.y-nemo.size/1.5,nemo.x-nemo.size/1.2,nemo.y-nemo.size/1.1);
      h = h || collideLineLine(fishes[i].x+fishes[i].size/1.2,fishes[i].y-fishes[i].size/1.1, fishes[i].x+fishes[i].size*1.5, fishes[i].y-fishes[i].size/1.5, nemo.x-nemo.size*1.5,nemo.y-nemo.size/1.5,nemo.x-nemo.size/1.2,nemo.y-nemo.size/1.1);

      h = h || collideLineLine(fishes[i].x-fishes[i].size*1.9, fishes[i].y-fishes[i].size/3.1, fishes[i].x-fishes[i].size*1.5, fishes[i].y-fishes[i].size/1.5, nemo.x-nemo.size*1.5,nemo.y-nemo.size/1.5,nemo.x-nemo.size/1.2,nemo.y-nemo.size/1.1);
      h = h || collideLineLine(fishes[i].x+fishes[i].size*1.9, fishes[i].y-fishes[i].size/3.1, fishes[i].x+fishes[i].size*1.5, fishes[i].y-fishes[i].size/1.5, nemo.x-nemo.size*1.5,nemo.y-nemo.size/1.5,nemo.x-nemo.size/1.2,nemo.y-nemo.size/1.1);
      h = h || collideLineLine(fishes[i].x-fishes[i].size*2, fishes[i].y+fishes[i].size/118, fishes[i].x-fishes[i].size*1.9, fishes[i].y-fishes[i].size/3.1,nemo.x-nemo.size*1.5,nemo.y-nemo.size/1.5,nemo.x-nemo.size/1.2,nemo.y-nemo.size/1.1);
      h = h || collideLineLine(fishes[i].x+fishes[i].size*2, fishes[i].y+fishes[i].size/118, fishes[i].x+fishes[i].size*1.9, fishes[i].y-fishes[i].size/3.1,nemo.x-nemo.size*1.5,nemo.y-nemo.size/1.5,nemo.x-nemo.size/1.2,nemo.y-nemo.size/1.1);

      h = h || collideLineLine(fishes[i].x-fishes[i].size/1.2,fishes[i].y+fishes[i].size/1.1,fishes[i].x,fishes[i].y+fishes[i].size,nemo.x-nemo.size*1.5,nemo.y-nemo.size/1.5,nemo.x-nemo.size/1.2,nemo.y-nemo.size/1.1);
      h = h || collideLineLine(fishes[i].x,fishes[i].y+fishes[i].size,fishes[i].x+fishes[i].size/1.2,fishes[i].y+fishes[i].size/1.1,nemo.x-nemo.size*1.5,nemo.y-nemo.size/1.5,nemo.x-nemo.size/1.2,nemo.y-nemo.size/1.1);
      h = h || collideLineLine(fishes[i].x-fishes[i].size*1.5, fishes[i].y+fishes[i].size/1.5, fishes[i].x-fishes[i].size/1.2,fishes[i].y+fishes[i].size/1.1,nemo.x-nemo.size*1.5,nemo.y-nemo.size/1.5,nemo.x-nemo.size/1.2,nemo.y-nemo.size/1.1);
      h = h || collideLineLine(fishes[i].x+fishes[i].size/1.2,fishes[i].y+fishes[i].size/1.1, fishes[i].x+fishes[i].size*1.5, fishes[i].y+fishes[i].size/1.5,nemo.x-nemo.size*1.5,nemo.y-nemo.size/1.5,nemo.x-nemo.size/1.2,nemo.y-nemo.size/1.1);

      h = h || collideLineLine(fishes[i].x-fishes[i].size*1.9, fishes[i].y+fishes[i].size/3.1, fishes[i].x-fishes[i].size*1.5, fishes[i].y+fishes[i].size/1.5,nemo.x-nemo.size*1.5,nemo.y-nemo.size/1.5,nemo.x-nemo.size/1.2,nemo.y-nemo.size/1.1);
      h = h || collideLineLine(fishes[i].x+fishes[i].size*1.9, fishes[i].y+fishes[i].size/3.1, fishes[i].x+fishes[i].size*1.5, fishes[i].y+fishes[i].size/1.5,nemo.x-nemo.size*1.5,nemo.y-nemo.size/1.5,nemo.x-nemo.size/1.2,nemo.y-nemo.size/1.1);
      h = h || collideLineLine(fishes[i].x-fishes[i].size*2, fishes[i].y+fishes[i].size/118, fishes[i].x-fishes[i].size*1.9, fishes[i].y+fishes[i].size/3.1,nemo.x-nemo.size*1.5,nemo.y-nemo.size/1.5,nemo.x-nemo.size/1.2,nemo.y-nemo.size/1.1);
      h = h || collideLineLine(fishes[i].x+fishes[i].size*2, fishes[i].y+fishes[i].size/118, fishes[i].x+fishes[i].size*1.9, fishes[i].y+fishes[i].size/3.1,nemo.x-nemo.size*1.5,nemo.y-nemo.size/1.5,nemo.x-nemo.size/1.2,nemo.y-nemo.size/1.1);


      h = h || collideLineLine(fishes[i].x-fishes[i].size/1.2, fishes[i].y-fishes[i].size/1.1, fishes[i].x,fishes[i].y-fishes[i].size, nemo.x+nemo.size/1.2,nemo.y-nemo.size/1.1,nemo.x+nemo.size*1.5,nemo.y-nemo.size/1.5);
      h = h || collideLineLine(fishes[i].x,fishes[i].y-fishes[i].size,fishes[i].x+fishes[i].size/1.2,fishes[i].y-fishes[i].size/1.1, nemo.x+nemo.size/1.2,nemo.y-nemo.size/1.1,nemo.x+nemo.size*1.5,nemo.y-nemo.size/1.5);
      h = h || collideLineLine(fishes[i].x-fishes[i].size*1.5, fishes[i].y-fishes[i].size/1.5, fishes[i].x-fishes[i].size/1.2,fishes[i].y-fishes[i].size/1.1, nemo.x+nemo.size/1.2,nemo.y-nemo.size/1.1,nemo.x+nemo.size*1.5,nemo.y-nemo.size/1.5);
      h = h || collideLineLine(fishes[i].x+fishes[i].size/1.2,fishes[i].y-fishes[i].size/1.1, fishes[i].x+fishes[i].size*1.5, fishes[i].y-fishes[i].size/1.5, nemo.x+nemo.size/1.2,nemo.y-nemo.size/1.1,nemo.x+nemo.size*1.5,nemo.y-nemo.size/1.5);

      h = h || collideLineLine(fishes[i].x-fishes[i].size*1.9, fishes[i].y-fishes[i].size/3.1, fishes[i].x-fishes[i].size*1.5, fishes[i].y-fishes[i].size/1.5, nemo.x+nemo.size/1.2,nemo.y-nemo.size/1.1,nemo.x+nemo.size*1.5,nemo.y-nemo.size/1.5);
      h = h || collideLineLine(fishes[i].x+fishes[i].size*1.9, fishes[i].y-fishes[i].size/3.1, fishes[i].x+fishes[i].size*1.5, fishes[i].y-fishes[i].size/1.5, nemo.x+nemo.size/1.2,nemo.y-nemo.size/1.1,nemo.x+nemo.size*1.5,nemo.y-nemo.size/1.5);
      h = h || collideLineLine(fishes[i].x-fishes[i].size*2, fishes[i].y+fishes[i].size/118, fishes[i].x-fishes[i].size*1.9, fishes[i].y-fishes[i].size/3.1,nemo.x+nemo.size/1.2,nemo.y-nemo.size/1.1,nemo.x+nemo.size*1.5,nemo.y-nemo.size/1.5);
      h = h || collideLineLine(fishes[i].x+fishes[i].size*2, fishes[i].y+fishes[i].size/118, fishes[i].x+fishes[i].size*1.9, fishes[i].y-fishes[i].size/3.1,nemo.x+nemo.size/1.2,nemo.y-nemo.size/1.1,nemo.x+nemo.size*1.5,nemo.y-nemo.size/1.5);

      h = h || collideLineLine(fishes[i].x-fishes[i].size/1.2,fishes[i].y+fishes[i].size/1.1,fishes[i].x,fishes[i].y+fishes[i].size,nemo.x+nemo.size/1.2,nemo.y-nemo.size/1.1,nemo.x+nemo.size*1.5,nemo.y-nemo.size/1.5);
      h = h || collideLineLine(fishes[i].x,fishes[i].y+fishes[i].size,fishes[i].x+fishes[i].size/1.2,fishes[i].y+fishes[i].size/1.1,nemo.x+nemo.size/1.2,nemo.y-nemo.size/1.1,nemo.x+nemo.size*1.5,nemo.y-nemo.size/1.5);
      h = h || collideLineLine(fishes[i].x-fishes[i].size*1.5, fishes[i].y+fishes[i].size/1.5, fishes[i].x-fishes[i].size/1.2,fishes[i].y+fishes[i].size/1.1,nemo.x+nemo.size/1.2,nemo.y-nemo.size/1.1,nemo.x+nemo.size*1.5,nemo.y-nemo.size/1.5);
      h = h || collideLineLine(fishes[i].x+fishes[i].size/1.2,fishes[i].y+fishes[i].size/1.1, fishes[i].x+fishes[i].size*1.5, fishes[i].y+fishes[i].size/1.5,nemo.x+nemo.size/1.2,nemo.y-nemo.size/1.1,nemo.x+nemo.size*1.5,nemo.y-nemo.size/1.5);

      h = h || collideLineLine(fishes[i].x-fishes[i].size*1.9, fishes[i].y+fishes[i].size/3.1, fishes[i].x-fishes[i].size*1.5, fishes[i].y+fishes[i].size/1.5,nemo.x+nemo.size/1.2,nemo.y-nemo.size/1.1,nemo.x+nemo.size*1.5,nemo.y-nemo.size/1.5);
      h = h || collideLineLine(fishes[i].x+fishes[i].size*1.9, fishes[i].y+fishes[i].size/3.1, fishes[i].x+fishes[i].size*1.5, fishes[i].y+fishes[i].size/1.5,nemo.x+nemo.size/1.2,nemo.y-nemo.size/1.1,nemo.x+nemo.size*1.5,nemo.y-nemo.size/1.5);
      h = h || collideLineLine(fishes[i].x-fishes[i].size*2, fishes[i].y+fishes[i].size/118, fishes[i].x-fishes[i].size*1.9, fishes[i].y+fishes[i].size/3.1,nemo.x+nemo.size/1.2,nemo.y-nemo.size/1.1,nemo.x+nemo.size*1.5,nemo.y-nemo.size/1.5);
      h = h || collideLineLine(fishes[i].x+fishes[i].size*2, fishes[i].y+fishes[i].size/118, fishes[i].x+fishes[i].size*1.9, fishes[i].y+fishes[i].size/3.1,nemo.x+nemo.size/1.2,nemo.y-nemo.size/1.1,nemo.x+nemo.size*1.5,nemo.y-nemo.size/1.5);


      h = h || collideLineLine(fishes[i].x-fishes[i].size/1.2, fishes[i].y-fishes[i].size/1.1, fishes[i].x,fishes[i].y-fishes[i].size, nemo.x-nemo.size*1.9, nemo.y-nemo.size/3.1, nemo.x-nemo.size*1.5, nemo.y-nemo.size/1.5);
      h = h || collideLineLine(fishes[i].x,fishes[i].y-fishes[i].size,fishes[i].x+fishes[i].size/1.2,fishes[i].y-fishes[i].size/1.1, nemo.x-nemo.size*1.9, nemo.y-nemo.size/3.1, nemo.x-nemo.size*1.5, nemo.y-nemo.size/1.5);
      h = h || collideLineLine(fishes[i].x-fishes[i].size*1.5, fishes[i].y-fishes[i].size/1.5, fishes[i].x-fishes[i].size/1.2,fishes[i].y-fishes[i].size/1.1, nemo.x-nemo.size*1.9, nemo.y-nemo.size/3.1, nemo.x-nemo.size*1.5, nemo.y-nemo.size/1.5);
      h = h || collideLineLine(fishes[i].x+fishes[i].size/1.2,fishes[i].y-fishes[i].size/1.1, fishes[i].x+fishes[i].size*1.5, fishes[i].y-fishes[i].size/1.5, nemo.x-nemo.size*1.9, nemo.y-nemo.size/3.1, nemo.x-nemo.size*1.5, nemo.y-nemo.size/1.5);

      h = h || collideLineLine(fishes[i].x-fishes[i].size*1.9, fishes[i].y-fishes[i].size/3.1, fishes[i].x-fishes[i].size*1.5, fishes[i].y-fishes[i].size/1.5, nemo.x-nemo.size*1.9, nemo.y-nemo.size/3.1, nemo.x-nemo.size*1.5, nemo.y-nemo.size/1.5);
      h = h || collideLineLine(fishes[i].x+fishes[i].size*1.9, fishes[i].y-fishes[i].size/3.1, fishes[i].x+fishes[i].size*1.5, fishes[i].y-fishes[i].size/1.5, nemo.x-nemo.size*1.9, nemo.y-nemo.size/3.1, nemo.x-nemo.size*1.5, nemo.y-nemo.size/1.5);
      h = h || collideLineLine(fishes[i].x-fishes[i].size*2, fishes[i].y+fishes[i].size/118, fishes[i].x-fishes[i].size*1.9, fishes[i].y-fishes[i].size/3.1,nemo.x-nemo.size*1.9, nemo.y-nemo.size/3.1, nemo.x-nemo.size*1.5, nemo.y-nemo.size/1.5);
      h = h || collideLineLine(fishes[i].x+fishes[i].size*2, fishes[i].y+fishes[i].size/118, fishes[i].x+fishes[i].size*1.9, fishes[i].y-fishes[i].size/3.1,nemo.x-nemo.size*1.9, nemo.y-nemo.size/3.1, nemo.x-nemo.size*1.5, nemo.y-nemo.size/1.5);

      h = h || collideLineLine(fishes[i].x-fishes[i].size/1.2,fishes[i].y+fishes[i].size/1.1,fishes[i].x,fishes[i].y+fishes[i].size,nemo.x-nemo.size*1.9, nemo.y-nemo.size/3.1, nemo.x-nemo.size*1.5, nemo.y-nemo.size/1.5);
      h = h || collideLineLine(fishes[i].x,fishes[i].y+fishes[i].size,fishes[i].x+fishes[i].size/1.2,fishes[i].y+fishes[i].size/1.1,nemo.x-nemo.size*1.9, nemo.y-nemo.size/3.1, nemo.x-nemo.size*1.5, nemo.y-nemo.size/1.5);
      h = h || collideLineLine(fishes[i].x-fishes[i].size*1.5, fishes[i].y+fishes[i].size/1.5, fishes[i].x-fishes[i].size/1.2,fishes[i].y+fishes[i].size/1.1,nemo.x-nemo.size*1.9, nemo.y-nemo.size/3.1, nemo.x-nemo.size*1.5, nemo.y-nemo.size/1.5);
      h = h || collideLineLine(fishes[i].x+fishes[i].size/1.2,fishes[i].y+fishes[i].size/1.1, fishes[i].x+fishes[i].size*1.5, fishes[i].y+fishes[i].size/1.5,nemo.x-nemo.size*1.9, nemo.y-nemo.size/3.1, nemo.x-nemo.size*1.5, nemo.y-nemo.size/1.5);

      h = h || collideLineLine(fishes[i].x-fishes[i].size*1.9, fishes[i].y+fishes[i].size/3.1, fishes[i].x-fishes[i].size*1.5, fishes[i].y+fishes[i].size/1.5,nemo.x-nemo.size*1.9, nemo.y-nemo.size/3.1, nemo.x-nemo.size*1.5, nemo.y-nemo.size/1.5);
      h = h || collideLineLine(fishes[i].x+fishes[i].size*1.9, fishes[i].y+fishes[i].size/3.1, fishes[i].x+fishes[i].size*1.5, fishes[i].y+fishes[i].size/1.5,nemo.x-nemo.size*1.9, nemo.y-nemo.size/3.1, nemo.x-nemo.size*1.5, nemo.y-nemo.size/1.5);
      h = h || collideLineLine(fishes[i].x-fishes[i].size*2, fishes[i].y+fishes[i].size/118, fishes[i].x-fishes[i].size*1.9, fishes[i].y+fishes[i].size/3.1,nemo.x-nemo.size*1.9, nemo.y-nemo.size/3.1, nemo.x-nemo.size*1.5, nemo.y-nemo.size/1.5);
      h = h || collideLineLine(fishes[i].x+fishes[i].size*2, fishes[i].y+fishes[i].size/118, fishes[i].x+fishes[i].size*1.9, fishes[i].y+fishes[i].size/3.1,nemo.x-nemo.size*1.9, nemo.y-nemo.size/3.1, nemo.x-nemo.size*1.5, nemo.y-nemo.size/1.5);
      

      h = h || collideLineLine(fishes[i].x-fishes[i].size/1.2, fishes[i].y-fishes[i].size/1.1, fishes[i].x,fishes[i].y-fishes[i].size, nemo.x+nemo.size*1.9, nemo.y-nemo.size/3.1, nemo.x+nemo.size*1.5, nemo.y-nemo.size/1.5);
      h = h || collideLineLine(fishes[i].x,fishes[i].y-fishes[i].size,fishes[i].x+fishes[i].size/1.2,fishes[i].y-fishes[i].size/1.1, nemo.x+nemo.size*1.9, nemo.y-nemo.size/3.1, nemo.x+nemo.size*1.5, nemo.y-nemo.size/1.5);
      h = h || collideLineLine(fishes[i].x-fishes[i].size*1.5, fishes[i].y-fishes[i].size/1.5, fishes[i].x-fishes[i].size/1.2,fishes[i].y-fishes[i].size/1.1, nemo.x+nemo.size*1.9, nemo.y-nemo.size/3.1, nemo.x+nemo.size*1.5, nemo.y-nemo.size/1.5);
      h = h || collideLineLine(fishes[i].x+fishes[i].size/1.2,fishes[i].y-fishes[i].size/1.1, fishes[i].x+fishes[i].size*1.5, fishes[i].y-fishes[i].size/1.5, nemo.x+nemo.size*1.9, nemo.y-nemo.size/3.1, nemo.x+nemo.size*1.5, nemo.y-nemo.size/1.5);

      h = h || collideLineLine(fishes[i].x-fishes[i].size*1.9, fishes[i].y-fishes[i].size/3.1, fishes[i].x-fishes[i].size*1.5, fishes[i].y-fishes[i].size/1.5, nemo.x+nemo.size*1.9, nemo.y-nemo.size/3.1, nemo.x+nemo.size*1.5, nemo.y-nemo.size/1.5);
      h = h || collideLineLine(fishes[i].x+fishes[i].size*1.9, fishes[i].y-fishes[i].size/3.1, fishes[i].x+fishes[i].size*1.5, fishes[i].y-fishes[i].size/1.5, nemo.x+nemo.size*1.9, nemo.y-nemo.size/3.1, nemo.x+nemo.size*1.5, nemo.y-nemo.size/1.5);
      h = h || collideLineLine(fishes[i].x-fishes[i].size*2, fishes[i].y+fishes[i].size/118, fishes[i].x-fishes[i].size*1.9, fishes[i].y-fishes[i].size/3.1,nemo.x+nemo.size*1.9, nemo.y-nemo.size/3.1, nemo.x+nemo.size*1.5, nemo.y-nemo.size/1.5);
      h = h || collideLineLine(fishes[i].x+fishes[i].size*2, fishes[i].y+fishes[i].size/118, fishes[i].x+fishes[i].size*1.9, fishes[i].y-fishes[i].size/3.1,nemo.x+nemo.size*1.9, nemo.y-nemo.size/3.1, nemo.x+nemo.size*1.5, nemo.y-nemo.size/1.5);

      h = h || collideLineLine(fishes[i].x-fishes[i].size/1.2,fishes[i].y+fishes[i].size/1.1,fishes[i].x,fishes[i].y+fishes[i].size,nemo.x+nemo.size*1.9, nemo.y-nemo.size/3.1, nemo.x+nemo.size*1.5, nemo.y-nemo.size/1.5);
      h = h || collideLineLine(fishes[i].x,fishes[i].y+fishes[i].size,fishes[i].x+fishes[i].size/1.2,fishes[i].y+fishes[i].size/1.1,nemo.x+nemo.size*1.9, nemo.y-nemo.size/3.1, nemo.x+nemo.size*1.5, nemo.y-nemo.size/1.5);
      h = h || collideLineLine(fishes[i].x-fishes[i].size*1.5, fishes[i].y+fishes[i].size/1.5, fishes[i].x-fishes[i].size/1.2,fishes[i].y+fishes[i].size/1.1,nemo.x+nemo.size*1.9, nemo.y-nemo.size/3.1, nemo.x+nemo.size*1.5, nemo.y-nemo.size/1.5);
      h = h || collideLineLine(fishes[i].x+fishes[i].size/1.2,fishes[i].y+fishes[i].size/1.1, fishes[i].x+fishes[i].size*1.5, fishes[i].y+fishes[i].size/1.5,nemo.x+nemo.size*1.9, nemo.y-nemo.size/3.1, nemo.x+nemo.size*1.5, nemo.y-nemo.size/1.5);

      h = h || collideLineLine(fishes[i].x-fishes[i].size*1.9, fishes[i].y+fishes[i].size/3.1, fishes[i].x-fishes[i].size*1.5, fishes[i].y+fishes[i].size/1.5,nemo.x+nemo.size*1.9, nemo.y-nemo.size/3.1, nemo.x+nemo.size*1.5, nemo.y-nemo.size/1.5);
      h = h || collideLineLine(fishes[i].x+fishes[i].size*1.9, fishes[i].y+fishes[i].size/3.1, fishes[i].x+fishes[i].size*1.5, fishes[i].y+fishes[i].size/1.5,nemo.x+nemo.size*1.9, nemo.y-nemo.size/3.1, nemo.x+nemo.size*1.5, nemo.y-nemo.size/1.5);
      h = h || collideLineLine(fishes[i].x-fishes[i].size*2, fishes[i].y+fishes[i].size/118, fishes[i].x-fishes[i].size*1.9, fishes[i].y+fishes[i].size/3.1,nemo.x+nemo.size*1.9, nemo.y-nemo.size/3.1, nemo.x+nemo.size*1.5, nemo.y-nemo.size/1.5);
      h = h || collideLineLine(fishes[i].x+fishes[i].size*2, fishes[i].y+fishes[i].size/118, fishes[i].x+fishes[i].size*1.9, fishes[i].y+fishes[i].size/3.1,nemo.x+nemo.size*1.9, nemo.y-nemo.size/3.1, nemo.x+nemo.size*1.5, nemo.y-nemo.size/1.5);


      h = h || collideLineLine(fishes[i].x-fishes[i].size/1.2, fishes[i].y-fishes[i].size/1.1, fishes[i].x,fishes[i].y-fishes[i].size, nemo.x-nemo.size*2, nemo.y+nemo.size/118, nemo.x-nemo.size*1.9, nemo.y-nemo.size/3.1);
      h = h || collideLineLine(fishes[i].x,fishes[i].y-fishes[i].size,fishes[i].x+fishes[i].size/1.2,fishes[i].y-fishes[i].size/1.1, nemo.x-nemo.size*2, nemo.y+nemo.size/118, nemo.x-nemo.size*1.9, nemo.y-nemo.size/3.1);
      h = h || collideLineLine(fishes[i].x-fishes[i].size*1.5, fishes[i].y-fishes[i].size/1.5, fishes[i].x-fishes[i].size/1.2,fishes[i].y-fishes[i].size/1.1, nemo.x-nemo.size*2, nemo.y+nemo.size/118, nemo.x-nemo.size*1.9, nemo.y-nemo.size/3.1);
      h = h || collideLineLine(fishes[i].x+fishes[i].size/1.2,fishes[i].y-fishes[i].size/1.1, fishes[i].x+fishes[i].size*1.5, fishes[i].y-fishes[i].size/1.5, nemo.x-nemo.size*2, nemo.y+nemo.size/118, nemo.x-nemo.size*1.9, nemo.y-nemo.size/3.1);

      h = h || collideLineLine(fishes[i].x-fishes[i].size*1.9, fishes[i].y-fishes[i].size/3.1, fishes[i].x-fishes[i].size*1.5, fishes[i].y-fishes[i].size/1.5, nemo.x-nemo.size*2, nemo.y+nemo.size/118, nemo.x-nemo.size*1.9, nemo.y-nemo.size/3.1);
      h = h || collideLineLine(fishes[i].x+fishes[i].size*1.9, fishes[i].y-fishes[i].size/3.1, fishes[i].x+fishes[i].size*1.5, fishes[i].y-fishes[i].size/1.5, nemo.x-nemo.size*2, nemo.y+nemo.size/118, nemo.x-nemo.size*1.9, nemo.y-nemo.size/3.1);
      h = h || collideLineLine(fishes[i].x-fishes[i].size*2, fishes[i].y+fishes[i].size/118, fishes[i].x-fishes[i].size*1.9, fishes[i].y-fishes[i].size/3.1,nemo.x-nemo.size*2, nemo.y+nemo.size/118, nemo.x-nemo.size*1.9, nemo.y-nemo.size/3.1);
      h = h || collideLineLine(fishes[i].x+fishes[i].size*2, fishes[i].y+fishes[i].size/118, fishes[i].x+fishes[i].size*1.9, fishes[i].y-fishes[i].size/3.1,nemo.x-nemo.size*2, nemo.y+nemo.size/118, nemo.x-nemo.size*1.9, nemo.y-nemo.size/3.1);

      h = h || collideLineLine(fishes[i].x-fishes[i].size/1.2,fishes[i].y+fishes[i].size/1.1,fishes[i].x,fishes[i].y+fishes[i].size,nemo.x-nemo.size*2, nemo.y+nemo.size/118, nemo.x-nemo.size*1.9, nemo.y-nemo.size/3.1);
      h = h || collideLineLine(fishes[i].x,fishes[i].y+fishes[i].size,fishes[i].x+fishes[i].size/1.2,fishes[i].y+fishes[i].size/1.1,nemo.x-nemo.size*2, nemo.y+nemo.size/118, nemo.x-nemo.size*1.9, nemo.y-nemo.size/3.1);
      h = h || collideLineLine(fishes[i].x-fishes[i].size*1.5, fishes[i].y+fishes[i].size/1.5, fishes[i].x-fishes[i].size/1.2,fishes[i].y+fishes[i].size/1.1,nemo.x-nemo.size*2, nemo.y+nemo.size/118, nemo.x-nemo.size*1.9, nemo.y-nemo.size/3.1);
      h = h || collideLineLine(fishes[i].x+fishes[i].size/1.2,fishes[i].y+fishes[i].size/1.1, fishes[i].x+fishes[i].size*1.5, fishes[i].y+fishes[i].size/1.5,nemo.x-nemo.size*2, nemo.y+nemo.size/118, nemo.x-nemo.size*1.9, nemo.y-nemo.size/3.1);

      h = h || collideLineLine(fishes[i].x-fishes[i].size*1.9, fishes[i].y+fishes[i].size/3.1, fishes[i].x-fishes[i].size*1.5, fishes[i].y+fishes[i].size/1.5,nemo.x-nemo.size*2, nemo.y+nemo.size/118, nemo.x-nemo.size*1.9, nemo.y-nemo.size/3.1);
      h = h || collideLineLine(fishes[i].x+fishes[i].size*1.9, fishes[i].y+fishes[i].size/3.1, fishes[i].x+fishes[i].size*1.5, fishes[i].y+fishes[i].size/1.5,nemo.x-nemo.size*2, nemo.y+nemo.size/118, nemo.x-nemo.size*1.9, nemo.y-nemo.size/3.1);
      h = h || collideLineLine(fishes[i].x-fishes[i].size*2, fishes[i].y+fishes[i].size/118, fishes[i].x-fishes[i].size*1.9, fishes[i].y+fishes[i].size/3.1,nemo.x-nemo.size*2, nemo.y+nemo.size/118, nemo.x-nemo.size*1.9, nemo.y-nemo.size/3.1);
      h = h || collideLineLine(fishes[i].x+fishes[i].size*2, fishes[i].y+fishes[i].size/118, fishes[i].x+fishes[i].size*1.9, fishes[i].y+fishes[i].size/3.1,nemo.x-nemo.size*2, nemo.y+nemo.size/118, nemo.x-nemo.size*1.9, nemo.y-nemo.size/3.1);


      h = h || collideLineLine(fishes[i].x-fishes[i].size/1.2, fishes[i].y-fishes[i].size/1.1, fishes[i].x,fishes[i].y-fishes[i].size, nemo.x-nemo.size/1.2,nemo.y+nemo.size/1.1,nemo.x,nemo.y+nemo.size);
      h = h || collideLineLine(fishes[i].x,fishes[i].y-fishes[i].size,fishes[i].x+fishes[i].size/1.2,fishes[i].y-fishes[i].size/1.1, nemo.x-nemo.size/1.2,nemo.y+nemo.size/1.1,nemo.x,nemo.y+nemo.size);
      h = h || collideLineLine(fishes[i].x-fishes[i].size*1.5, fishes[i].y-fishes[i].size/1.5, fishes[i].x-fishes[i].size/1.2,fishes[i].y-fishes[i].size/1.1, nemo.x-nemo.size/1.2,nemo.y+nemo.size/1.1,nemo.x,nemo.y+nemo.size);
      h = h || collideLineLine(fishes[i].x+fishes[i].size/1.2,fishes[i].y-fishes[i].size/1.1, fishes[i].x+fishes[i].size*1.5, fishes[i].y-fishes[i].size/1.5, nemo.x-nemo.size/1.2,nemo.y+nemo.size/1.1,nemo.x,nemo.y+nemo.size);

      h = h || collideLineLine(fishes[i].x-fishes[i].size*1.9, fishes[i].y-fishes[i].size/3.1, fishes[i].x-fishes[i].size*1.5, fishes[i].y-fishes[i].size/1.5, nemo.x-nemo.size/1.2,nemo.y+nemo.size/1.1,nemo.x,nemo.y+nemo.size);
      h = h || collideLineLine(fishes[i].x+fishes[i].size*1.9, fishes[i].y-fishes[i].size/3.1, fishes[i].x+fishes[i].size*1.5, fishes[i].y-fishes[i].size/1.5, nemo.x-nemo.size/1.2,nemo.y+nemo.size/1.1,nemo.x,nemo.y+nemo.size);
      h = h || collideLineLine(fishes[i].x-fishes[i].size*2, fishes[i].y+fishes[i].size/118, fishes[i].x-fishes[i].size*1.9, fishes[i].y-fishes[i].size/3.1,nemo.x-nemo.size/1.2,nemo.y+nemo.size/1.1,nemo.x,nemo.y+nemo.size);
      h = h || collideLineLine(fishes[i].x+fishes[i].size*2, fishes[i].y+fishes[i].size/118, fishes[i].x+fishes[i].size*1.9, fishes[i].y-fishes[i].size/3.1,nemo.x-nemo.size/1.2,nemo.y+nemo.size/1.1,nemo.x,nemo.y+nemo.size);

      h = h || collideLineLine(fishes[i].x-fishes[i].size/1.2,fishes[i].y+fishes[i].size/1.1,fishes[i].x,fishes[i].y+fishes[i].size,nemo.x-nemo.size/1.2,nemo.y+nemo.size/1.1,nemo.x,nemo.y+nemo.size);
      h = h || collideLineLine(fishes[i].x,fishes[i].y+fishes[i].size,fishes[i].x+fishes[i].size/1.2,fishes[i].y+fishes[i].size/1.1,nemo.x-nemo.size/1.2,nemo.y+nemo.size/1.1,nemo.x,nemo.y+nemo.size);
      h = h || collideLineLine(fishes[i].x-fishes[i].size*1.5, fishes[i].y+fishes[i].size/1.5, fishes[i].x-fishes[i].size/1.2,fishes[i].y+fishes[i].size/1.1,nemo.x-nemo.size/1.2,nemo.y+nemo.size/1.1,nemo.x,nemo.y+nemo.size);
      h = h || collideLineLine(fishes[i].x+fishes[i].size/1.2,fishes[i].y+fishes[i].size/1.1, fishes[i].x+fishes[i].size*1.5, fishes[i].y+fishes[i].size/1.5,nemo.x-nemo.size/1.2,nemo.y+nemo.size/1.1,nemo.x,nemo.y+nemo.size);

      h = h || collideLineLine(fishes[i].x-fishes[i].size*1.9, fishes[i].y+fishes[i].size/3.1, fishes[i].x-fishes[i].size*1.5, fishes[i].y+fishes[i].size/1.5,nemo.x-nemo.size/1.2,nemo.y+nemo.size/1.1,nemo.x,nemo.y+nemo.size);
      h = h || collideLineLine(fishes[i].x+fishes[i].size*1.9, fishes[i].y+fishes[i].size/3.1, fishes[i].x+fishes[i].size*1.5, fishes[i].y+fishes[i].size/1.5,nemo.x-nemo.size/1.2,nemo.y+nemo.size/1.1,nemo.x,nemo.y+nemo.size);
      h = h || collideLineLine(fishes[i].x-fishes[i].size*2, fishes[i].y+fishes[i].size/118, fishes[i].x-fishes[i].size*1.9, fishes[i].y+fishes[i].size/3.1,nemo.x-nemo.size/1.2,nemo.y+nemo.size/1.1,nemo.x,nemo.y+nemo.size);
      h = h || collideLineLine(fishes[i].x+fishes[i].size*2, fishes[i].y+fishes[i].size/118, fishes[i].x+fishes[i].size*1.9, fishes[i].y+fishes[i].size/3.1,nemo.x-nemo.size/1.2,nemo.y+nemo.size/1.1,nemo.x,nemo.y+nemo.size);


      h = h || collideLineLine(fishes[i].x-fishes[i].size/1.2, fishes[i].y-fishes[i].size/1.1, fishes[i].x,fishes[i].y-fishes[i].size, nemo.x,nemo.y+nemo.size,nemo.x+nemo.size/1.2,nemo.y+nemo.size/1.1);
      h = h || collideLineLine(fishes[i].x,fishes[i].y-fishes[i].size,fishes[i].x+fishes[i].size/1.2,fishes[i].y-fishes[i].size/1.1, nemo.x,nemo.y+nemo.size,nemo.x+nemo.size/1.2,nemo.y+nemo.size/1.1);
      h = h || collideLineLine(fishes[i].x-fishes[i].size*1.5, fishes[i].y-fishes[i].size/1.5, fishes[i].x-fishes[i].size/1.2,fishes[i].y-fishes[i].size/1.1, nemo.x,nemo.y+nemo.size,nemo.x+nemo.size/1.2,nemo.y+nemo.size/1.1);
      h = h || collideLineLine(fishes[i].x+fishes[i].size/1.2,fishes[i].y-fishes[i].size/1.1, fishes[i].x+fishes[i].size*1.5, fishes[i].y-fishes[i].size/1.5, nemo.x,nemo.y+nemo.size,nemo.x+nemo.size/1.2,nemo.y+nemo.size/1.1);

      h = h || collideLineLine(fishes[i].x-fishes[i].size*1.9, fishes[i].y-fishes[i].size/3.1, fishes[i].x-fishes[i].size*1.5, fishes[i].y-fishes[i].size/1.5, nemo.x,nemo.y+nemo.size,nemo.x+nemo.size/1.2,nemo.y+nemo.size/1.1);
      h = h || collideLineLine(fishes[i].x+fishes[i].size*1.9, fishes[i].y-fishes[i].size/3.1, fishes[i].x+fishes[i].size*1.5, fishes[i].y-fishes[i].size/1.5, nemo.x,nemo.y+nemo.size,nemo.x+nemo.size/1.2,nemo.y+nemo.size/1.1);
      h = h || collideLineLine(fishes[i].x-fishes[i].size*2, fishes[i].y+fishes[i].size/118, fishes[i].x-fishes[i].size*1.9, fishes[i].y-fishes[i].size/3.1,nemo.x,nemo.y+nemo.size,nemo.x+nemo.size/1.2,nemo.y+nemo.size/1.1);
      h = h || collideLineLine(fishes[i].x+fishes[i].size*2, fishes[i].y+fishes[i].size/118, fishes[i].x+fishes[i].size*1.9, fishes[i].y-fishes[i].size/3.1,nemo.x,nemo.y+nemo.size,nemo.x+nemo.size/1.2,nemo.y+nemo.size/1.1);

      h = h || collideLineLine(fishes[i].x-fishes[i].size/1.2,fishes[i].y+fishes[i].size/1.1,fishes[i].x,fishes[i].y+fishes[i].size,nemo.x,nemo.y+nemo.size,nemo.x+nemo.size/1.2,nemo.y+nemo.size/1.1);
      h = h || collideLineLine(fishes[i].x,fishes[i].y+fishes[i].size,fishes[i].x+fishes[i].size/1.2,fishes[i].y+fishes[i].size/1.1,nemo.x,nemo.y+nemo.size,nemo.x+nemo.size/1.2,nemo.y+nemo.size/1.1);
      h = h || collideLineLine(fishes[i].x-fishes[i].size*1.5, fishes[i].y+fishes[i].size/1.5, fishes[i].x-fishes[i].size/1.2,fishes[i].y+fishes[i].size/1.1,nemo.x,nemo.y+nemo.size,nemo.x+nemo.size/1.2,nemo.y+nemo.size/1.1);
      h = h || collideLineLine(fishes[i].x+fishes[i].size/1.2,fishes[i].y+fishes[i].size/1.1, fishes[i].x+fishes[i].size*1.5, fishes[i].y+fishes[i].size/1.5,nemo.x,nemo.y+nemo.size,nemo.x+nemo.size/1.2,nemo.y+nemo.size/1.1);

      h = h || collideLineLine(fishes[i].x-fishes[i].size*1.9, fishes[i].y+fishes[i].size/3.1, fishes[i].x-fishes[i].size*1.5, fishes[i].y+fishes[i].size/1.5,nemo.x,nemo.y+nemo.size,nemo.x+nemo.size/1.2,nemo.y+nemo.size/1.1);
      h = h || collideLineLine(fishes[i].x+fishes[i].size*1.9, fishes[i].y+fishes[i].size/3.1, fishes[i].x+fishes[i].size*1.5, fishes[i].y+fishes[i].size/1.5,nemo.x,nemo.y+nemo.size,nemo.x+nemo.size/1.2,nemo.y+nemo.size/1.1);
      h = h || collideLineLine(fishes[i].x-fishes[i].size*2, fishes[i].y+fishes[i].size/118, fishes[i].x-fishes[i].size*1.9, fishes[i].y+fishes[i].size/3.1,nemo.x,nemo.y+nemo.size,nemo.x+nemo.size/1.2,nemo.y+nemo.size/1.1);
      h = h || collideLineLine(fishes[i].x+fishes[i].size*2, fishes[i].y+fishes[i].size/118, fishes[i].x+fishes[i].size*1.9, fishes[i].y+fishes[i].size/3.1,nemo.x,nemo.y+nemo.size,nemo.x+nemo.size/1.2,nemo.y+nemo.size/1.1);


      h = h || collideLineLine(fishes[i].x-fishes[i].size/1.2, fishes[i].y-fishes[i].size/1.1, fishes[i].x,fishes[i].y-fishes[i].size, nemo.x-nemo.size*1.5, nemo.y+nemo.size/1.5, nemo.x-nemo.size/1.2,nemo.y+nemo.size/1.1);
      h = h || collideLineLine(fishes[i].x,fishes[i].y-fishes[i].size,fishes[i].x+fishes[i].size/1.2,fishes[i].y-fishes[i].size/1.1, nemo.x-nemo.size*1.5, nemo.y+nemo.size/1.5, nemo.x-nemo.size/1.2,nemo.y+nemo.size/1.1);
      h = h || collideLineLine(fishes[i].x-fishes[i].size*1.5, fishes[i].y-fishes[i].size/1.5, fishes[i].x-fishes[i].size/1.2,fishes[i].y-fishes[i].size/1.1, nemo.x-nemo.size*1.5, nemo.y+nemo.size/1.5, nemo.x-nemo.size/1.2,nemo.y+nemo.size/1.1);
      h = h || collideLineLine(fishes[i].x+fishes[i].size/1.2,fishes[i].y-fishes[i].size/1.1, fishes[i].x+fishes[i].size*1.5, fishes[i].y-fishes[i].size/1.5, nemo.x-nemo.size*1.5, nemo.y+nemo.size/1.5, nemo.x-nemo.size/1.2,nemo.y+nemo.size/1.1);

      h = h || collideLineLine(fishes[i].x-fishes[i].size*1.9, fishes[i].y-fishes[i].size/3.1, fishes[i].x-fishes[i].size*1.5, fishes[i].y-fishes[i].size/1.5, nemo.x-nemo.size*1.5, nemo.y+nemo.size/1.5, nemo.x-nemo.size/1.2,nemo.y+nemo.size/1.1);
      h = h || collideLineLine(fishes[i].x+fishes[i].size*1.9, fishes[i].y-fishes[i].size/3.1, fishes[i].x+fishes[i].size*1.5, fishes[i].y-fishes[i].size/1.5, nemo.x-nemo.size*1.5, nemo.y+nemo.size/1.5, nemo.x-nemo.size/1.2,nemo.y+nemo.size/1.1);
      h = h || collideLineLine(fishes[i].x-fishes[i].size*2, fishes[i].y+fishes[i].size/118, fishes[i].x-fishes[i].size*1.9, fishes[i].y-fishes[i].size/3.1,nemo.x-nemo.size*1.5, nemo.y+nemo.size/1.5, nemo.x-nemo.size/1.2,nemo.y+nemo.size/1.1);
      h = h || collideLineLine(fishes[i].x+fishes[i].size*2, fishes[i].y+fishes[i].size/118, fishes[i].x+fishes[i].size*1.9, fishes[i].y-fishes[i].size/3.1,nemo.x-nemo.size*1.5, nemo.y+nemo.size/1.5, nemo.x-nemo.size/1.2,nemo.y+nemo.size/1.1);

      h = h || collideLineLine(fishes[i].x-fishes[i].size/1.2,fishes[i].y+fishes[i].size/1.1,fishes[i].x,fishes[i].y+fishes[i].size,nemo.x-nemo.size*1.5, nemo.y+nemo.size/1.5, nemo.x-nemo.size/1.2,nemo.y+nemo.size/1.1);
      h = h || collideLineLine(fishes[i].x,fishes[i].y+fishes[i].size,fishes[i].x+fishes[i].size/1.2,fishes[i].y+fishes[i].size/1.1,nemo.x-nemo.size*1.5, nemo.y+nemo.size/1.5, nemo.x-nemo.size/1.2,nemo.y+nemo.size/1.1);
      h = h || collideLineLine(fishes[i].x-fishes[i].size*1.5, fishes[i].y+fishes[i].size/1.5, fishes[i].x-fishes[i].size/1.2,fishes[i].y+fishes[i].size/1.1,nemo.x-nemo.size*1.5, nemo.y+nemo.size/1.5, nemo.x-nemo.size/1.2,nemo.y+nemo.size/1.1);
      h = h || collideLineLine(fishes[i].x+fishes[i].size/1.2,fishes[i].y+fishes[i].size/1.1, fishes[i].x+fishes[i].size*1.5, fishes[i].y+fishes[i].size/1.5,nemo.x-nemo.size*1.5, nemo.y+nemo.size/1.5, nemo.x-nemo.size/1.2,nemo.y+nemo.size/1.1);

      h = h || collideLineLine(fishes[i].x-fishes[i].size*1.9, fishes[i].y+fishes[i].size/3.1, fishes[i].x-fishes[i].size*1.5, fishes[i].y+fishes[i].size/1.5,nemo.x-nemo.size*1.5, nemo.y+nemo.size/1.5, nemo.x-nemo.size/1.2,nemo.y+nemo.size/1.1);
      h = h || collideLineLine(fishes[i].x+fishes[i].size*1.9, fishes[i].y+fishes[i].size/3.1, fishes[i].x+fishes[i].size*1.5, fishes[i].y+fishes[i].size/1.5,nemo.x-nemo.size*1.5, nemo.y+nemo.size/1.5, nemo.x-nemo.size/1.2,nemo.y+nemo.size/1.1);
      h = h || collideLineLine(fishes[i].x-fishes[i].size*2, fishes[i].y+fishes[i].size/118, fishes[i].x-fishes[i].size*1.9, fishes[i].y+fishes[i].size/3.1,nemo.x-nemo.size*1.5, nemo.y+nemo.size/1.5, nemo.x-nemo.size/1.2,nemo.y+nemo.size/1.1);
      h = h || collideLineLine(fishes[i].x+fishes[i].size*2, fishes[i].y+fishes[i].size/118, fishes[i].x+fishes[i].size*1.9, fishes[i].y+fishes[i].size/3.1,nemo.x-nemo.size*1.5, nemo.y+nemo.size/1.5, nemo.x-nemo.size/1.2,nemo.y+nemo.size/1.1);

      h = h || collideLineLine(fishes[i].x-fishes[i].size/1.2, fishes[i].y-fishes[i].size/1.1, fishes[i].x,fishes[i].y-fishes[i].size, nemo.x+nemo.size/1.2,nemo.y+nemo.size/1.1, nemo.x+nemo.size*1.5, nemo.y+nemo.size/1.5);
      h = h || collideLineLine(fishes[i].x,fishes[i].y-fishes[i].size,fishes[i].x+fishes[i].size/1.2,fishes[i].y-fishes[i].size/1.1, nemo.x+nemo.size/1.2,nemo.y+nemo.size/1.1, nemo.x+nemo.size*1.5, nemo.y+nemo.size/1.5);
      h = h || collideLineLine(fishes[i].x-fishes[i].size*1.5, fishes[i].y-fishes[i].size/1.5, fishes[i].x-fishes[i].size/1.2,fishes[i].y-fishes[i].size/1.1, nemo.x+nemo.size/1.2,nemo.y+nemo.size/1.1, nemo.x+nemo.size*1.5, nemo.y+nemo.size/1.5);
      h = h || collideLineLine(fishes[i].x+fishes[i].size/1.2,fishes[i].y-fishes[i].size/1.1, fishes[i].x+fishes[i].size*1.5, fishes[i].y-fishes[i].size/1.5, nemo.x+nemo.size/1.2,nemo.y+nemo.size/1.1, nemo.x+nemo.size*1.5, nemo.y+nemo.size/1.5);

      h = h || collideLineLine(fishes[i].x-fishes[i].size*1.9, fishes[i].y-fishes[i].size/3.1, fishes[i].x-fishes[i].size*1.5, fishes[i].y-fishes[i].size/1.5, nemo.x+nemo.size/1.2,nemo.y+nemo.size/1.1, nemo.x+nemo.size*1.5, nemo.y+nemo.size/1.5);
      h = h || collideLineLine(fishes[i].x+fishes[i].size*1.9, fishes[i].y-fishes[i].size/3.1, fishes[i].x+fishes[i].size*1.5, fishes[i].y-fishes[i].size/1.5, nemo.x+nemo.size/1.2,nemo.y+nemo.size/1.1, nemo.x+nemo.size*1.5, nemo.y+nemo.size/1.5);
      h = h || collideLineLine(fishes[i].x-fishes[i].size*2, fishes[i].y+fishes[i].size/118, fishes[i].x-fishes[i].size*1.9, fishes[i].y-fishes[i].size/3.1,nemo.x+nemo.size/1.2,nemo.y+nemo.size/1.1, nemo.x+nemo.size*1.5, nemo.y+nemo.size/1.5);
      h = h || collideLineLine(fishes[i].x+fishes[i].size*2, fishes[i].y+fishes[i].size/118, fishes[i].x+fishes[i].size*1.9, fishes[i].y-fishes[i].size/3.1,nemo.x+nemo.size/1.2,nemo.y+nemo.size/1.1, nemo.x+nemo.size*1.5, nemo.y+nemo.size/1.5);

      h = h || collideLineLine(fishes[i].x-fishes[i].size/1.2,fishes[i].y+fishes[i].size/1.1,fishes[i].x,fishes[i].y+fishes[i].size,nemo.x+nemo.size/1.2,nemo.y+nemo.size/1.1, nemo.x+nemo.size*1.5, nemo.y+nemo.size/1.5);
      h = h || collideLineLine(fishes[i].x,fishes[i].y+fishes[i].size,fishes[i].x+fishes[i].size/1.2,fishes[i].y+fishes[i].size/1.1,nemo.x+nemo.size/1.2,nemo.y+nemo.size/1.1, nemo.x+nemo.size*1.5, nemo.y+nemo.size/1.5);
      h = h || collideLineLine(fishes[i].x-fishes[i].size*1.5, fishes[i].y+fishes[i].size/1.5, fishes[i].x-fishes[i].size/1.2,fishes[i].y+fishes[i].size/1.1,nemo.x+nemo.size/1.2,nemo.y+nemo.size/1.1, nemo.x+nemo.size*1.5, nemo.y+nemo.size/1.5);
      h = h || collideLineLine(fishes[i].x+fishes[i].size/1.2,fishes[i].y+fishes[i].size/1.1, fishes[i].x+fishes[i].size*1.5, fishes[i].y+fishes[i].size/1.5,nemo.x+nemo.size/1.2,nemo.y+nemo.size/1.1, nemo.x+nemo.size*1.5, nemo.y+nemo.size/1.5);

      h = h || collideLineLine(fishes[i].x-fishes[i].size*1.9, fishes[i].y+fishes[i].size/3.1, fishes[i].x-fishes[i].size*1.5, fishes[i].y+fishes[i].size/1.5,nemo.x+nemo.size/1.2,nemo.y+nemo.size/1.1, nemo.x+nemo.size*1.5, nemo.y+nemo.size/1.5);
      h = h || collideLineLine(fishes[i].x+fishes[i].size*1.9, fishes[i].y+fishes[i].size/3.1, fishes[i].x+fishes[i].size*1.5, fishes[i].y+fishes[i].size/1.5,nemo.x+nemo.size/1.2,nemo.y+nemo.size/1.1, nemo.x+nemo.size*1.5, nemo.y+nemo.size/1.5);
      h = h || collideLineLine(fishes[i].x-fishes[i].size*2, fishes[i].y+fishes[i].size/118, fishes[i].x-fishes[i].size*1.9, fishes[i].y+fishes[i].size/3.1,nemo.x+nemo.size/1.2,nemo.y+nemo.size/1.1, nemo.x+nemo.size*1.5, nemo.y+nemo.size/1.5);
      h = h || collideLineLine(fishes[i].x+fishes[i].size*2, fishes[i].y+fishes[i].size/118, fishes[i].x+fishes[i].size*1.9, fishes[i].y+fishes[i].size/3.1,nemo.x+nemo.size/1.2,nemo.y+nemo.size/1.1, nemo.x+nemo.size*1.5, nemo.y+nemo.size/1.5);


      h = h || collideLineLine(fishes[i].x-fishes[i].size/1.2, fishes[i].y-fishes[i].size/1.1, fishes[i].x,fishes[i].y-fishes[i].size, nemo.x-nemo.size*1.9, nemo.y+nemo.size/3.1, nemo.x-nemo.size*1.5, nemo.y+nemo.size/1.5);
      h = h || collideLineLine(fishes[i].x,fishes[i].y-fishes[i].size,fishes[i].x+fishes[i].size/1.2,fishes[i].y-fishes[i].size/1.1, nemo.x-nemo.size*1.9, nemo.y+nemo.size/3.1, nemo.x-nemo.size*1.5, nemo.y+nemo.size/1.5);
      h = h || collideLineLine(fishes[i].x-fishes[i].size*1.5, fishes[i].y-fishes[i].size/1.5, fishes[i].x-fishes[i].size/1.2,fishes[i].y-fishes[i].size/1.1, nemo.x-nemo.size*1.9, nemo.y+nemo.size/3.1, nemo.x-nemo.size*1.5, nemo.y+nemo.size/1.5);
      h = h || collideLineLine(fishes[i].x+fishes[i].size/1.2,fishes[i].y-fishes[i].size/1.1, fishes[i].x+fishes[i].size*1.5, fishes[i].y-fishes[i].size/1.5, nemo.x-nemo.size*1.9, nemo.y+nemo.size/3.1, nemo.x-nemo.size*1.5, nemo.y+nemo.size/1.5);

      h = h || collideLineLine(fishes[i].x-fishes[i].size*1.9, fishes[i].y-fishes[i].size/3.1, fishes[i].x-fishes[i].size*1.5, fishes[i].y-fishes[i].size/1.5, nemo.x-nemo.size*1.9, nemo.y+nemo.size/3.1, nemo.x-nemo.size*1.5, nemo.y+nemo.size/1.5);
      h = h || collideLineLine(fishes[i].x+fishes[i].size*1.9, fishes[i].y-fishes[i].size/3.1, fishes[i].x+fishes[i].size*1.5, fishes[i].y-fishes[i].size/1.5, nemo.x-nemo.size*1.9, nemo.y+nemo.size/3.1, nemo.x-nemo.size*1.5, nemo.y+nemo.size/1.5);
      h = h || collideLineLine(fishes[i].x-fishes[i].size*2, fishes[i].y+fishes[i].size/118, fishes[i].x-fishes[i].size*1.9, fishes[i].y-fishes[i].size/3.1,nemo.x-nemo.size*1.9, nemo.y+nemo.size/3.1, nemo.x-nemo.size*1.5, nemo.y+nemo.size/1.5);
      h = h || collideLineLine(fishes[i].x+fishes[i].size*2, fishes[i].y+fishes[i].size/118, fishes[i].x+fishes[i].size*1.9, fishes[i].y-fishes[i].size/3.1,nemo.x-nemo.size*1.9, nemo.y+nemo.size/3.1, nemo.x-nemo.size*1.5, nemo.y+nemo.size/1.5);

      h = h || collideLineLine(fishes[i].x-fishes[i].size/1.2,fishes[i].y+fishes[i].size/1.1,fishes[i].x,fishes[i].y+fishes[i].size,nemo.x-nemo.size*1.9, nemo.y+nemo.size/3.1, nemo.x-nemo.size*1.5, nemo.y+nemo.size/1.5);
      h = h || collideLineLine(fishes[i].x,fishes[i].y+fishes[i].size,fishes[i].x+fishes[i].size/1.2,fishes[i].y+fishes[i].size/1.1,nemo.x-nemo.size*1.9, nemo.y+nemo.size/3.1, nemo.x-nemo.size*1.5, nemo.y+nemo.size/1.5);
      h = h || collideLineLine(fishes[i].x-fishes[i].size*1.5, fishes[i].y+fishes[i].size/1.5, fishes[i].x-fishes[i].size/1.2,fishes[i].y+fishes[i].size/1.1,nemo.x-nemo.size*1.9, nemo.y+nemo.size/3.1, nemo.x-nemo.size*1.5, nemo.y+nemo.size/1.5);
      h = h || collideLineLine(fishes[i].x+fishes[i].size/1.2,fishes[i].y+fishes[i].size/1.1, fishes[i].x+fishes[i].size*1.5, fishes[i].y+fishes[i].size/1.5,nemo.x-nemo.size*1.9, nemo.y+nemo.size/3.1, nemo.x-nemo.size*1.5, nemo.y+nemo.size/1.5);

      h = h || collideLineLine(fishes[i].x-fishes[i].size*1.9, fishes[i].y+fishes[i].size/3.1, fishes[i].x-fishes[i].size*1.5, fishes[i].y+fishes[i].size/1.5,nemo.x-nemo.size*1.9, nemo.y+nemo.size/3.1, nemo.x-nemo.size*1.5, nemo.y+nemo.size/1.5);
      h = h || collideLineLine(fishes[i].x+fishes[i].size*1.9, fishes[i].y+fishes[i].size/3.1, fishes[i].x+fishes[i].size*1.5, fishes[i].y+fishes[i].size/1.5,nemo.x-nemo.size*1.9, nemo.y+nemo.size/3.1, nemo.x-nemo.size*1.5, nemo.y+nemo.size/1.5);
      h = h || collideLineLine(fishes[i].x-fishes[i].size*2, fishes[i].y+fishes[i].size/118, fishes[i].x-fishes[i].size*1.9, fishes[i].y+fishes[i].size/3.1,nemo.x-nemo.size*1.9, nemo.y+nemo.size/3.1, nemo.x-nemo.size*1.5, nemo.y+nemo.size/1.5);
      h = h || collideLineLine(fishes[i].x+fishes[i].size*2, fishes[i].y+fishes[i].size/118, fishes[i].x+fishes[i].size*1.9, fishes[i].y+fishes[i].size/3.1,nemo.x-nemo.size*1.9, nemo.y+nemo.size/3.1, nemo.x-nemo.size*1.5, nemo.y+nemo.size/1.5);


      h = h || collideLineLine(fishes[i].x-fishes[i].size/1.2, fishes[i].y-fishes[i].size/1.1, fishes[i].x,fishes[i].y-fishes[i].size, nemo.x+nemo.size*1.9, nemo.y+nemo.size/3.1, nemo.x+nemo.size*1.5, nemo.y+nemo.size/1.5);
      h = h || collideLineLine(fishes[i].x,fishes[i].y-fishes[i].size,fishes[i].x+fishes[i].size/1.2,fishes[i].y-fishes[i].size/1.1, nemo.x+nemo.size*1.9, nemo.y+nemo.size/3.1, nemo.x+nemo.size*1.5, nemo.y+nemo.size/1.5);
      h = h || collideLineLine(fishes[i].x-fishes[i].size*1.5, fishes[i].y-fishes[i].size/1.5, fishes[i].x-fishes[i].size/1.2,fishes[i].y-fishes[i].size/1.1, nemo.x+nemo.size*1.9, nemo.y+nemo.size/3.1, nemo.x+nemo.size*1.5, nemo.y+nemo.size/1.5);
      h = h || collideLineLine(fishes[i].x+fishes[i].size/1.2,fishes[i].y-fishes[i].size/1.1, fishes[i].x+fishes[i].size*1.5, fishes[i].y-fishes[i].size/1.5, nemo.x+nemo.size*1.9, nemo.y+nemo.size/3.1, nemo.x+nemo.size*1.5, nemo.y+nemo.size/1.5);

      h = h || collideLineLine(fishes[i].x-fishes[i].size*1.9, fishes[i].y-fishes[i].size/3.1, fishes[i].x-fishes[i].size*1.5, fishes[i].y-fishes[i].size/1.5, nemo.x+nemo.size*1.9, nemo.y+nemo.size/3.1, nemo.x+nemo.size*1.5, nemo.y+nemo.size/1.5);
      h = h || collideLineLine(fishes[i].x+fishes[i].size*1.9, fishes[i].y-fishes[i].size/3.1, fishes[i].x+fishes[i].size*1.5, fishes[i].y-fishes[i].size/1.5, nemo.x+nemo.size*1.9, nemo.y+nemo.size/3.1, nemo.x+nemo.size*1.5, nemo.y+nemo.size/1.5);
      h = h || collideLineLine(fishes[i].x-fishes[i].size*2, fishes[i].y+fishes[i].size/118, fishes[i].x-fishes[i].size*1.9, fishes[i].y-fishes[i].size/3.1,nemo.x+nemo.size*1.9, nemo.y+nemo.size/3.1, nemo.x+nemo.size*1.5, nemo.y+nemo.size/1.5);
      h = h || collideLineLine(fishes[i].x+fishes[i].size*2, fishes[i].y+fishes[i].size/118, fishes[i].x+fishes[i].size*1.9, fishes[i].y-fishes[i].size/3.1,nemo.x+nemo.size*1.9, nemo.y+nemo.size/3.1, nemo.x+nemo.size*1.5, nemo.y+nemo.size/1.5);

      h = h || collideLineLine(fishes[i].x-fishes[i].size/1.2,fishes[i].y+fishes[i].size/1.1,fishes[i].x,fishes[i].y+fishes[i].size,nemo.x+nemo.size*1.9, nemo.y+nemo.size/3.1, nemo.x+nemo.size*1.5, nemo.y+nemo.size/1.5);
      h = h || collideLineLine(fishes[i].x,fishes[i].y+fishes[i].size,fishes[i].x+fishes[i].size/1.2,fishes[i].y+fishes[i].size/1.1,nemo.x+nemo.size*1.9, nemo.y+nemo.size/3.1, nemo.x+nemo.size*1.5, nemo.y+nemo.size/1.5);
      h = h || collideLineLine(fishes[i].x-fishes[i].size*1.5, fishes[i].y+fishes[i].size/1.5, fishes[i].x-fishes[i].size/1.2,fishes[i].y+fishes[i].size/1.1,nemo.x+nemo.size*1.9, nemo.y+nemo.size/3.1, nemo.x+nemo.size*1.5, nemo.y+nemo.size/1.5);
      h = h || collideLineLine(fishes[i].x+fishes[i].size/1.2,fishes[i].y+fishes[i].size/1.1, fishes[i].x+fishes[i].size*1.5, fishes[i].y+fishes[i].size/1.5,nemo.x+nemo.size*1.9, nemo.y+nemo.size/3.1, nemo.x+nemo.size*1.5, nemo.y+nemo.size/1.5);

      h = h || collideLineLine(fishes[i].x-fishes[i].size*1.9, fishes[i].y+fishes[i].size/3.1, fishes[i].x-fishes[i].size*1.5, fishes[i].y+fishes[i].size/1.5,nemo.x+nemo.size*1.9, nemo.y+nemo.size/3.1, nemo.x+nemo.size*1.5, nemo.y+nemo.size/1.5);
      h = h || collideLineLine(fishes[i].x+fishes[i].size*1.9, fishes[i].y+fishes[i].size/3.1, fishes[i].x+fishes[i].size*1.5, fishes[i].y+fishes[i].size/1.5,nemo.x+nemo.size*1.9, nemo.y+nemo.size/3.1, nemo.x+nemo.size*1.5, nemo.y+nemo.size/1.5);
      h = h || collideLineLine(fishes[i].x-fishes[i].size*2, fishes[i].y+fishes[i].size/118, fishes[i].x-fishes[i].size*1.9, fishes[i].y+fishes[i].size/3.1,nemo.x+nemo.size*1.9, nemo.y+nemo.size/3.1, nemo.x+nemo.size*1.5, nemo.y+nemo.size/1.5);
      h = h || collideLineLine(fishes[i].x+fishes[i].size*2, fishes[i].y+fishes[i].size/118, fishes[i].x+fishes[i].size*1.9, fishes[i].y+fishes[i].size/3.1,nemo.x+nemo.size*1.9, nemo.y+nemo.size/3.1, nemo.x+nemo.size*1.5, nemo.y+nemo.size/1.5);


      h = h || collideLineLine(fishes[i].x-fishes[i].size/1.2, fishes[i].y-fishes[i].size/1.1, fishes[i].x,fishes[i].y-fishes[i].size, nemo.x-nemo.size*2, nemo.y+nemo.size/118, nemo.x-nemo.size*1.9, nemo.y+nemo.size/3.1);
      h = h || collideLineLine(fishes[i].x,fishes[i].y-fishes[i].size,fishes[i].x+fishes[i].size/1.2,fishes[i].y-fishes[i].size/1.1, nemo.x-nemo.size*2, nemo.y+nemo.size/118, nemo.x-nemo.size*1.9, nemo.y+nemo.size/3.1);
      h = h || collideLineLine(fishes[i].x-fishes[i].size*1.5, fishes[i].y-fishes[i].size/1.5, fishes[i].x-fishes[i].size/1.2,fishes[i].y-fishes[i].size/1.1, nemo.x-nemo.size*2, nemo.y+nemo.size/118, nemo.x-nemo.size*1.9, nemo.y+nemo.size/3.1);
      h = h || collideLineLine(fishes[i].x+fishes[i].size/1.2,fishes[i].y-fishes[i].size/1.1, fishes[i].x+fishes[i].size*1.5, fishes[i].y-fishes[i].size/1.5, nemo.x-nemo.size*2, nemo.y+nemo.size/118, nemo.x-nemo.size*1.9, nemo.y+nemo.size/3.1);

      h = h || collideLineLine(fishes[i].x-fishes[i].size*1.9, fishes[i].y-fishes[i].size/3.1, fishes[i].x-fishes[i].size*1.5, fishes[i].y-fishes[i].size/1.5, nemo.x-nemo.size*2, nemo.y+nemo.size/118, nemo.x-nemo.size*1.9, nemo.y+nemo.size/3.1);
      h = h || collideLineLine(fishes[i].x+fishes[i].size*1.9, fishes[i].y-fishes[i].size/3.1, fishes[i].x+fishes[i].size*1.5, fishes[i].y-fishes[i].size/1.5, nemo.x-nemo.size*2, nemo.y+nemo.size/118, nemo.x-nemo.size*1.9, nemo.y+nemo.size/3.1);
      h = h || collideLineLine(fishes[i].x-fishes[i].size*2, fishes[i].y+fishes[i].size/118, fishes[i].x-fishes[i].size*1.9, fishes[i].y-fishes[i].size/3.1,nemo.x-nemo.size*2, nemo.y+nemo.size/118, nemo.x-nemo.size*1.9, nemo.y+nemo.size/3.1);
      h = h || collideLineLine(fishes[i].x+fishes[i].size*2, fishes[i].y+fishes[i].size/118, fishes[i].x+fishes[i].size*1.9, fishes[i].y-fishes[i].size/3.1,nemo.x-nemo.size*2, nemo.y+nemo.size/118, nemo.x-nemo.size*1.9, nemo.y+nemo.size/3.1);

      h = h || collideLineLine(fishes[i].x-fishes[i].size/1.2,fishes[i].y+fishes[i].size/1.1,fishes[i].x,fishes[i].y+fishes[i].size,nemo.x-nemo.size*2, nemo.y+nemo.size/118, nemo.x-nemo.size*1.9, nemo.y+nemo.size/3.1);
      h = h || collideLineLine(fishes[i].x,fishes[i].y+fishes[i].size,fishes[i].x+fishes[i].size/1.2,fishes[i].y+fishes[i].size/1.1,nemo.x-nemo.size*2, nemo.y+nemo.size/118, nemo.x-nemo.size*1.9, nemo.y+nemo.size/3.1);
      h = h || collideLineLine(fishes[i].x-fishes[i].size*1.5, fishes[i].y+fishes[i].size/1.5, fishes[i].x-fishes[i].size/1.2,fishes[i].y+fishes[i].size/1.1,nemo.x-nemo.size*2, nemo.y+nemo.size/118, nemo.x-nemo.size*1.9, nemo.y+nemo.size/3.1);
      h = h || collideLineLine(fishes[i].x+fishes[i].size/1.2,fishes[i].y+fishes[i].size/1.1, fishes[i].x+fishes[i].size*1.5, fishes[i].y+fishes[i].size/1.5,nemo.x-nemo.size*2, nemo.y+nemo.size/118, nemo.x-nemo.size*1.9, nemo.y+nemo.size/3.1);

      h = h || collideLineLine(fishes[i].x-fishes[i].size*1.9, fishes[i].y+fishes[i].size/3.1, fishes[i].x-fishes[i].size*1.5, fishes[i].y+fishes[i].size/1.5,nemo.x-nemo.size*2, nemo.y+nemo.size/118, nemo.x-nemo.size*1.9, nemo.y+nemo.size/3.1);
      h = h || collideLineLine(fishes[i].x+fishes[i].size*1.9, fishes[i].y+fishes[i].size/3.1, fishes[i].x+fishes[i].size*1.5, fishes[i].y+fishes[i].size/1.5,nemo.x-nemo.size*2, nemo.y+nemo.size/118, nemo.x-nemo.size*1.9, nemo.y+nemo.size/3.1);
      h = h || collideLineLine(fishes[i].x-fishes[i].size*2, fishes[i].y+fishes[i].size/118, fishes[i].x-fishes[i].size*1.9, fishes[i].y+fishes[i].size/3.1,nemo.x-nemo.size*2, nemo.y+nemo.size/118, nemo.x-nemo.size*1.9, nemo.y+nemo.size/3.1);
      h = h || collideLineLine(fishes[i].x+fishes[i].size*2, fishes[i].y+fishes[i].size/118, fishes[i].x+fishes[i].size*1.9, fishes[i].y+fishes[i].size/3.1,nemo.x-nemo.size*2, nemo.y+nemo.size/118, nemo.x-nemo.size*1.9, nemo.y+nemo.size/3.1);


      h = h || collideLineLine(fishes[i].x-fishes[i].size/1.2, fishes[i].y-fishes[i].size/1.1, fishes[i].x,fishes[i].y-fishes[i].size, nemo.x+nemo.size*2, nemo.y+nemo.size/118, nemo.x+nemo.size*1.9, nemo.y+nemo.size/3.1);
      h = h || collideLineLine(fishes[i].x,fishes[i].y-fishes[i].size,fishes[i].x+fishes[i].size/1.2,fishes[i].y-fishes[i].size/1.1, nemo.x+nemo.size*2, nemo.y+nemo.size/118, nemo.x+nemo.size*1.9, nemo.y+nemo.size/3.1);
      h = h || collideLineLine(fishes[i].x-fishes[i].size*1.5, fishes[i].y-fishes[i].size/1.5, fishes[i].x-fishes[i].size/1.2,fishes[i].y-fishes[i].size/1.1, nemo.x+nemo.size*2, nemo.y+nemo.size/118, nemo.x+nemo.size*1.9, nemo.y+nemo.size/3.1);
      h = h || collideLineLine(fishes[i].x+fishes[i].size/1.2,fishes[i].y-fishes[i].size/1.1, fishes[i].x+fishes[i].size*1.5, fishes[i].y-fishes[i].size/1.5, nemo.x+nemo.size*2, nemo.y+nemo.size/118, nemo.x+nemo.size*1.9, nemo.y+nemo.size/3.1);

      h = h || collideLineLine(fishes[i].x-fishes[i].size*1.9, fishes[i].y-fishes[i].size/3.1, fishes[i].x-fishes[i].size*1.5, fishes[i].y-fishes[i].size/1.5, nemo.x+nemo.size*2, nemo.y+nemo.size/118, nemo.x+nemo.size*1.9, nemo.y+nemo.size/3.1);
      h = h || collideLineLine(fishes[i].x+fishes[i].size*1.9, fishes[i].y-fishes[i].size/3.1, fishes[i].x+fishes[i].size*1.5, fishes[i].y-fishes[i].size/1.5, nemo.x+nemo.size*2, nemo.y+nemo.size/118, nemo.x+nemo.size*1.9, nemo.y+nemo.size/3.1);
      h = h || collideLineLine(fishes[i].x-fishes[i].size*2, fishes[i].y+fishes[i].size/118, fishes[i].x-fishes[i].size*1.9, fishes[i].y-fishes[i].size/3.1,nemo.x+nemo.size*2, nemo.y+nemo.size/118, nemo.x+nemo.size*1.9, nemo.y+nemo.size/3.1);
      h = h || collideLineLine(fishes[i].x+fishes[i].size*2, fishes[i].y+fishes[i].size/118, fishes[i].x+fishes[i].size*1.9, fishes[i].y-fishes[i].size/3.1,nemo.x+nemo.size*2, nemo.y+nemo.size/118, nemo.x+nemo.size*1.9, nemo.y+nemo.size/3.1);

      h = h || collideLineLine(fishes[i].x-fishes[i].size/1.2,fishes[i].y+fishes[i].size/1.1,fishes[i].x,fishes[i].y+fishes[i].size,nemo.x+nemo.size*2, nemo.y+nemo.size/118, nemo.x+nemo.size*1.9, nemo.y+nemo.size/3.1);
      h = h || collideLineLine(fishes[i].x,fishes[i].y+fishes[i].size,fishes[i].x+fishes[i].size/1.2,fishes[i].y+fishes[i].size/1.1,nemo.x+nemo.size*2, nemo.y+nemo.size/118, nemo.x+nemo.size*1.9, nemo.y+nemo.size/3.1);
      h = h || collideLineLine(fishes[i].x-fishes[i].size*1.5, fishes[i].y+fishes[i].size/1.5, fishes[i].x-fishes[i].size/1.2,fishes[i].y+fishes[i].size/1.1,nemo.x+nemo.size*2, nemo.y+nemo.size/118, nemo.x+nemo.size*1.9, nemo.y+nemo.size/3.1);
      h = h || collideLineLine(fishes[i].x+fishes[i].size/1.2,fishes[i].y+fishes[i].size/1.1, fishes[i].x+fishes[i].size*1.5, fishes[i].y+fishes[i].size/1.5,nemo.x+nemo.size*2, nemo.y+nemo.size/118, nemo.x+nemo.size*1.9, nemo.y+nemo.size/3.1);

      h = h || collideLineLine(fishes[i].x-fishes[i].size*1.9, fishes[i].y+fishes[i].size/3.1, fishes[i].x-fishes[i].size*1.5, fishes[i].y+fishes[i].size/1.5,nemo.x+nemo.size*2, nemo.y+nemo.size/118, nemo.x+nemo.size*1.9, nemo.y+nemo.size/3.1);
      h = h || collideLineLine(fishes[i].x+fishes[i].size*1.9, fishes[i].y+fishes[i].size/3.1, fishes[i].x+fishes[i].size*1.5, fishes[i].y+fishes[i].size/1.5,nemo.x+nemo.size*2, nemo.y+nemo.size/118, nemo.x+nemo.size*1.9, nemo.y+nemo.size/3.1);
      h = h || collideLineLine(fishes[i].x-fishes[i].size*2, fishes[i].y+fishes[i].size/118, fishes[i].x-fishes[i].size*1.9, fishes[i].y+fishes[i].size/3.1,nemo.x+nemo.size*2, nemo.y+nemo.size/118, nemo.x+nemo.size*1.9, nemo.y+nemo.size/3.1);
      h = h || collideLineLine(fishes[i].x+fishes[i].size*2, fishes[i].y+fishes[i].size/118, fishes[i].x+fishes[i].size*1.9, fishes[i].y+fishes[i].size/3.1,nemo.x+nemo.size*2, nemo.y+nemo.size/118, nemo.x+nemo.size*1.9, nemo.y+nemo.size/3.1);
    }
    
    
    //dist(fishes[i].x,fishes[i].y,nemo.x,nemo.y) < 10+nemo.size/1.1
    
    if(h == true){
      if(fishes[i].alive == true && nemo.size > fishes[i].size){
        fishes[i].alive = false;
        fishNum -= 1;
        nemo.size += fishes[i].size/10;
        score += fishes[i].size;
      }
      else if(nemo.size <= fishes[i].size){
        nemo.alive = false;
        lost = true;
      }
    }
  }

  fill(255);
  textSize(25);
  if(!lost){
    text(Math.floor(score), width/2-8, 70);
  }
  else{
    text("       You lost!\nPress 'r' to retry", width/2-80, height/2);
  }
  
}

function keyTyped(){
  if(key == 'w' && keyIsPressed){
    up = true;
  }
  if(key == 's' && keyIsPressed){
    down = true;
  }
  if(key == 'a' && keyIsPressed){
    left = true;
  }
  if(key == 'd' && keyIsPressed){
    right = true;
  }
  if(key == 'r' && keyIsPressed){
    setup();
  }
}

function keyReleased(){
  if(key == 'w'){
    up = false;
  }
  if(key == 's'){
    down = false;
  }
  if(key == 'a'){
    left = false;
  }
  if(key == 'd'){
    right = false;
  }
}
