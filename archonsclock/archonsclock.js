require("Font8x12").add(Graphics);

const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
function drawSec() {
  var d = new Date();
  var s = d.getSeconds();
  g.clearRect(98,50,135,80);
  g.drawString(s.toString().padStart(2,0), 101, 50);

  if (s === 0) {
    draw();
  }
}

function draw() {
  // work out how to display the current timed
  var d = new Date();

  var h = d.getHours(), m = d.getMinutes(); s = d.getSeconds();
  var time = h + ":" + m.toString().padStart(2,0) + ":" + s.toString().padStart(2,0);

  // Clear the area where we want to draw the time
  g.clearRect(0,52,170,80);
  
  // draw the current time
  g.drawString(time, 20, 50);
}

function drawSlow() {
  g.clear();
  var d = new Date();

  // update date
  var month = d.getMonth() + 1, day = dayNames[d.getDay()], date = d.getDate();
  var dayweek = day + " " + month.toString().padStart(2,0) + "-" + date.toString().padStart(2,0);

  g.setFont("8x12", 2);
  g.drawString(dayweek, 20, 30);

  g.setFont("8x12", 3);

  // update battery

  var bat = E.getBattery().toString().padStart(2,0);

  if (bat < 30) {
    g.setColor(255, 0, 0);
  } else {
    g.setColor(0, 255, 0);
  }

  g.drawString(bat + "%", 20, 80);

  g.setColor(0);

  draw();
}

// Clear the screen once, at startup
g.clear();
// draw immediately at first
drawSlow();
draw();

// now draw every second
var secondInterval = setInterval(drawSec, 1000);
var slowInterval = setInterval(drawSlow, 600000);
