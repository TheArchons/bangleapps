// Show launcher when middle button pressed
Bangle.setUI("clock");

Bangle.loadWidgets();

const storage = require('Storage');
const locale = require('locale');
const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function getTemp() {
  var weatherJson;

  try {
    weatherJson = require("Storage").readJSON("weather.json");
    weatherJson = storage.readJSON('weather.json');
    let temp = weatherJson.weather.temp - 273.15;

    return temp.toString().padStart(2,0) + "C";
  } catch (e) {
    return "--";
  }
}

function drawSec() {
  var d = new Date();
  var s = d.getSeconds();
  g.reset();
  g.setFont("6x8", 3);
  g.clearRect(128,50,239,80);
  g.drawString(s.toString().padStart(2,0), 128, 50);

  if (s === 0) {
    draw();
  }
}

function draw() {
  // work out how to display the current timed
  var d = new Date();
  g.reset();
  g.setFont("6x8", 3);

  var h = d.getHours(), m = d.getMinutes(); s = d.getSeconds();
  var time = h.toString().padStart(2, 0) + ":" + m.toString().padStart(2,0) + ":" + s.toString().padStart(2,0);

  // Clear the area where we want to draw the time
  g.clearRect(0,52,170,80);
  
  // draw the current time
  g.drawString(time, 20, 50);
}

function drawSlow() {
  g.clear();

  Bangle.drawWidgets();
  g.reset();

  var d = new Date();

  // update date
  var month = d.getMonth() + 1, day = dayNames[d.getDay()], date = d.getDate();
  var dayweek = day + " " + month.toString().padStart(2,0) + "-" + date.toString().padStart(2,0);

  g.setFont("6x8", 2);
  g.drawString(dayweek, 20, 30);

  // update battery

  var bat = E.getBattery().toString().padStart(2,0);

  if (bat < 30) {
    g.setColor(255, 0, 0);
  } else {
    g.setColor(0, 255, 0);
  }

  g.drawString(bat + "%", 20, 80);

  // update temperature
  var temp = getTemp();

  g.setColor(g.theme.fg);

  g.drawString(temp, 60, 80);

  draw();

  
}

print(getTemp());

// Clear the screen once, at startup
g.clear();
// draw immediately at first
drawSlow();
draw();

// now draw every second
var secondInterval = setInterval(drawSec, 1000);
var slowInterval = setInterval(drawSlow, 600000);
