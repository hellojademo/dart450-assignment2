/*

Counter
Pippin Barr

The code here sets an interval to run code repeatedly
which updates the text in a div on the page with the
value of a counter variable;

*/

$(document).ready(function() {
  var counter = 10; // The counter itself, to be displayed
  var interval = 1500; // How often to update the counter (millis)

  // We want to update the counter each interval, so we use the
  // built in setInterval function, which calls a function
  // over and over again at a set interval
  //
  // Documentation here:
  // http://www.w3schools.com/jsref/met_win_setinterval.asp

  setInterval(function () {
    // Set the text on the page to be the value of the counter
    $("#counter").text(counter);
    // Increment the counter



    var tellMe = ""

      if (counter == 7) {
        tellMe = "What will happen";
      }
      else if (counter == 4) {
        tellMe = "Who Knows";
      }
      else if (counter == 3) {
        tellMe = "Doom Comes";
      }

      else if (counter == 0) {
          $('#bod').addClass('bod2');
          tellMe = "Trump is President"
      }




      $('#tellme').text(tellMe);

      counter--;
      // There are multiple ways of doing this:
      // counter = counter + 1;
      // counter += 1;
      // counter++
    if (counter < 0) {
          // If opacity had become negative, set it back to 0
          counter = 0;
        }


  },interval);





});
