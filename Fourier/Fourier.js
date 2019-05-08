let time = 0;
let slider;
let wave = [];
function setup () {
  createCanvas (1000, 700);
  slider = createSlider (1, 30, 1);
}

function draw () {
  background (0);
  translate (width / 4, height / 2); //position the circle
  
  let x = 0;
  let y = 0;
  
  for (let i = 0; i < slider.value(); i++) {
    let n = i * 2 + 1;
    let radius = 10 * (4 / n * PI);
    let prevx = x;
    let prevy = y;
    noFill ();
    stroke (255, 50);
    ellipse (prevx, prevy, radius * 2); //Circle

    x += radius * cos (n * time);
    y += radius * sin (n * time);
    stroke (255);
    line (prevx, prevy, x, y); //Line connecting dot to center
  }
  line (x, y, 150, wave[0]); //Connecting dot to wave
  wave.unshift (y); //Add dot to the start of the array

  stroke (255);

  translate (150, 0); //Translate wave
  beginShape ();
  noFill ();
  for (let i = 0; i < wave.length; i++) {
    vertex (i, wave[i]); //Show wave
  }
  endShape ();
  if (wave.length > 600) {
    wave.pop (); //Delete dots
  }

  time += 0.05;
}
