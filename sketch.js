var hr,mn,sc;

function setup() {
  hr = hour()
  mn= minute();
  sc=second();
  angleMode(DEGREES);
  createCanvas(800,400);
  
}

function draw() {
  translate(200,200);
  scAngle = map(sc, 0, 60, 0, 360);
  hrAngle = map(hr, 0, 60, 0, 360);
  mnAngle = map(mn, 0, 60, 0, 360);
  background(255,255,255);  
push ();
rotate(scAngle);
  stroke(225,0,0);
strokeWeight(7);
line(0,0,100,0);
pop ();
push();
rotate(mnAngle)
stroke(0,255,0);
strokeWeight(7);
line(0,0,120,0);
pop ();
push();
rotate(hrAngle);
stroke(0,0,255);
strokeWeight(7);
line(0,0,150,0);
pop ();

  drawSprites();
}
