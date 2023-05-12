
let t = 0; // declaring the time variable which is t
           // t is takes in the value of 0


function setup() { // runs once, at the start 
  createCanvas(innerWidth, innerHeight); // create a canvas
                          // 750 pixels wide
                          // 750 pixels tall
  
  frameRate(60) // canvas runs at 60 frames per second



}

function draw() { //repeatedly draws reference after setup
  background(200, 10); //makes the background translucent
                      //makes trail effect

  // creates a grid for the squares 
  for (let x = 0; x <= width; x = x + 30) {
    // declaring x as 0 
    // the value of x always has to be:
    // - less than width
    // - or equal to width
    // value of 30 is constantly added to x
    
    for (let y = 0; y <= height; y = y + 30) {
    // declaring y as 0 
    // the value of y always has to be:
    // - less than width
    // - or equal to width
    // value of 30 is constantly added to y 
      
      const xAngle = map(mouseX, 0, width, -4 * PI, 4 * PI, true);
//the xAngle become a consant
// alters the starting point of x position 
// the x position depend on position of mouse
// the x position of mouse has a range of 0 and canvas width
// moving mouse on x axis will change squares target position
// target position moves square along range of: -4PI and 4PI
      
      const yAngle = map(mouseY, 0, height, -4 * PI, 4 * PI, true);
//the yAngle become a consant
// alters the starting point of y position 
// the y position depend on position of mouse
// the y position of mouse has a range of 0 and canvas height
// moving mouse on y axis will change squares target position
// target position moves square along range of: -4PI and 4PI
      
      const angle = xAngle * (x / width) + yAngle * (y / height);
// angle of x and y is combined to work together
// it is under the constant angle
// values that were previously created in const yAngle change
// the x and y value is divided by width (x) and height (y)

//all particles move in a circular motion
      const myX = x + 20 * cos(2 * PI * t + angle);
      const myY = y + 20 * sin(2 * PI * t + angle);
// The particles movement on x axis follow cos function
// The particles movement on y axis follow sin function

      square(myX, myY, 25,3); // draws particle as square 
                            // size of square is 25
                            //4th value rounds squares by 3
      stroke(100,20,80) //outline of sqaure is added
                        //outline of square is purple
                        //outline uses rgb values
                        //red = 100
                        //green = 80
      strokeWeight(5) // thickness of outline is 5
      
    }
    
  }

  t = t + mouseX;
  // updates time
  // mouseX updates time when mouse is over canvas
  // thus the art is interactive when user wants it to be
}
