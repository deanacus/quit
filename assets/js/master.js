function daysCalc(minutes) {
  var mins = Math.floor((minutes % 1440) % 60);
  var hours = Math.floor((minutes / 60) % 24);
  var days = Math.floor(((minutes / 60) / 24));
  return {
    "mins": mins,
    "hours": hours,
    "days": days
  }
}

//Get the quit date/time (might make this interactive one day)
var quitDate = new Date(2013,5,30,22,18);

//Get the current date/time
var now = new Date();

//Calculate the difference between the two date/times in minutes
var minsSinceQuit = Math.floor((now - quitDate) / 1000 / 60);

// Get the days, hours, mins since quit
var timeQuit = daysCalc(minsSinceQuit); // Get the days, hours, mins since quit

// Use days and hours to calculate approximate number of cigarettes not smoked
var cigs = Math.round((timeQuit.days * 29) + (timeQuit.hours * 1.208333333))

// Get the dollar value saved based on approx pack if cigarettees at time of quitting
var dollars = cigs * 0.8;

// Calculate the amount of time saved based on 6 minutes a cigarette
var timeSaved = daysCalc(cigs * 6);

document.getElementById('time').innerHTML = timeQuit.days + "d " + timeQuit.hours + "h " + timeQuit.mins + "m";
document.getElementById('cigs').innerHTML = cigs;
document.getElementById('dollars').innerHTML = "$" + dollars.toFixed(2);
document.getElementById('timesaved').innerHTML = timeSaved.days + "d " + timeSaved.hours + "h " + timeSaved.mins + "m";