squares = [];

function setup() {
  createCanvas(500, 500);
  
  
  let index = 0
  
  for (let i=0; i<5; i++){
    for (let j=0; j<5; j++){
      
      let x = i*100 + 10
      let y = j*100 + 10
      let s = 80
      
      squares[index] = new Square (x,y,s)
      index++;
      
      
      
    }
  }
}

function draw() {
  
  background(250,100,80);
  for(i=0; i<squares.length; i++){
  
  squares[i].show();
  squares[i].move();
   
    
  }
  
}

class Square{

  constructor (x, y, s){
    this.x = x
    this.y = y
    this.s = s
  }
  
  show(){
    blendMode(MULTIPLY);
    fill(255, 150,0);
    noStroke();
    square (this.x, this.y, this.s);
    blendMode(BLEND);
    
  }
  
  move(){
    this.x += random(-2,2);
    this.y += random(-2,2);
   
  }
  
  }