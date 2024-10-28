var song;
function preload(){
  song= loadSound("data/sigma.mp3");
}

function setup() {
 createCanvas(windowWidth, windowHeight);
 background(255, 255, 0);
 getAudioContext().suspend();
}

function draw() {
  background(255, 255, 0);
  circle(mouseX, mouseY, 60);
}
function mousePressed() {
  if (getAudioContext().state !== 'running') {
    getAudioContext().resume();
    song.play();
    song.loop();
   }
}
function keyTyped(){
  if (key === " "){
  song.stop();
  }
  else {
    song.play();
  }
}
