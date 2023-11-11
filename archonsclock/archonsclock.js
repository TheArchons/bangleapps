require("Font8x12").add(Graphics);

function draw() {
  // work out how to display the current timed
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  var d = new Date();
  var month = d.getMonth(), day = dayNames[d.getDay()], date = d.getDate();
  var h = d.getHours(), m = d.getMinutes(); s = d.getSeconds();
  var time = h + ":" + m.toString() + ":" + s.toString().padStart(2,0);

  var dayweek = day + " " + month + "-" + date;

  var bat = E.getBattery();

  // Reset the state of the graphics library
  g.reset();
  // Clear the area where we want to draw the time
  g.clearRect(20,30,170,170);
  g.setFont("8x12", 3);
  // draw the current time
  g.drawString(time, 20, 50);

  g.setFont("8x12", 2);
  g.drawString(dayweek, 20, 30);

  if (bat < 30) {
    g.setColor(255, 0, 0);
  } else {
    g.setColor(0, 255, 0);
  }

  g.drawString(bat + "%", 20, 80);
}

// Clear the screen once, at startup
g.clear();
// draw immediately at first
draw();
// now draw every second
var secondInterval = setInterval(draw, 1000);