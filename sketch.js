let randomWalker = [];
let maxWalkers;
let colorPalette = ['blue','orange','yellow','red','black']
let posX = [30,50,150,200];
let posY = [150,30,200,300];
let circleSize = [20,40,20,40];

function setup() {
  createCanvas(400, 400);
  background('white');
  
  for (i=0;i<4;i++)
  {
    
    circle(posX[i],posY[i],circleSize[i]);
    
  }
  
  maxWalkers = 5;
  
  for (i=0; i < maxWalkers; i++)
    {
      randomWalker.push(new   walker(random(0,width),random(0,height),random(-5,10),colorPalette[i]))
    }
  
  
  
}

function draw() {
  
  for (i = 0; i<maxWalkers; i++)
  {
    randomWalker[i].display();
    randomWalker[i].walkingDirection();
    randomWalker[i].keepInCanvas();
    
  }
  
  
}

function display()
{
  
  stroke('white');
  strokeWeight(2);
  line(x1,y1,x2,y2);
  
  x1 = x2;
  y1 = y2;
  
}

function walkingDirection()
{
  let nextPos = floor(random(4));
  if (nextPos == 0)
    {
      x2 = x1+ distance;
    }
  else if (nextPos == 1)
    {
      x2 = x1- distance;
    }
  else if (nextPos == 2)
    {
      y2 = y1+ distance;
    }
  else if (nextPos == 3)
    {
      y2 = y1- distance;
    }
  
}

function keepInCanvas()
{
  if(x2 < 0)
    {
      x2 = 0;
    }
  else if(x2 > width)
    {
      x2 = width;
    }
  else if(y2 < 0)
    {
      y2 = 0;
    }
  else if(y2 > height)
    {
      y2 = height;
    }
  
  
}
