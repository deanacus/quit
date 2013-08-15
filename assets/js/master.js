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

var quitDate = new Date(2013,5,30,22,18); //Get the quit date/time (might make this interactive one day
var now = new Date(); //Get the current date/time
var minsSinceQuit = Math.floor((now - quitDate) / 1000 / 60); // calculate difference between the two dates in minutes
var timeQuit = daysCalc(minsSinceQuit); // Get the days, hours, mins since quit
var cigs = Math.round((timeQuit.days * 29) + (timeQuit.hours * 1.208333333)) // work out how many smokes not smoked
var dollars = cigs * 0.8; //get the total dollars saved on a per cigarette basis ($20 a pack/ 25 ciggies a pack)
var timeSaved = daysCalc(cigs * 6); //Work out how much time I've save (6 minutes a smoke)

document.getElementById('time').innerHTML = timeQuit.days + "d " + timeQuit.hours + "h " + timeQuit.mins + "m";
document.getElementById('cigs').innerHTML = cigs;
document.getElementById('dollars').innerHTML = "$" + dollars.toFixed(2);
document.getElementById('timesaved').innerHTML = timeSaved.days + "d " + timeSaved.hours + "h " + timeSaved.mins + "m";