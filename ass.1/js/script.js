const TOTAL_LINES = 14;

// How long to wait between showing new lines
const LINE_DELAY = 3000;

const TOTAL_DIVS = 10;
const INTERVAL = 1000;

// An index into the array of dialog, pointing to the current line
// to put on the screen. Starts at 0, the first line!
var currentLine = 0;



$(document).ready(function() {

showLine();

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
      var more = ""

        if (counter == 7) {
          tellMe = "Aesthetic over Everything";
          // (function(event) {
          //   say("Is that what you're REALLY! wearing?");

        }
        else if (counter == 4) {
          tellMe = "#Artheaux";
        }
        else if (counter == 3) {
          tellMe = "~pastel blog~";
        }

        else if (counter == 0) {
            $('#bod').addClass('bod2');
            tellMe = ""
        }




        $('#tellme').text(tellMe);
        $('#more').text(more);

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






    $("#three, #eight, #nine, #ten, #eleven, #twelve, #thirteen, #fourteen, #fifteen, #sixteen, #seventeen, #eighteen, #num3, #romeo, #juliet, button").hide();

    $('#butt1').click(function(){


         $("#three").show();
       });



    $('#seven').click(function(){

           $("#three, #eight, #nine, #ten, #eleven, #twelve, #juliet").show();
           $("#one, #two, #four, #five, #six, #seven, #tellme").hide();
           $('body').addClass('bod2')

    $('#twelve').click(function(){
        $("#num3, #thirteen, #fourteen, #fifteen, #sixteen, #seventeen, #eighteen,#romeo").show();
          $("#three, #eight, #nine, #ten, #eleven, #twelve,#juliet").hide();
        $('body').addClass('bod3')

    });

    $('#eighteen').click(function(){
      $("#thirteen, #fourteen, #fifteen, #sixteen, #seventeen, #eighteen, #num3, #romeo").hide();
         $("#one, #two, #four, #five, #six, #seven, button").show();
         $('body').addClass('bod4')



    });

  for (var lineNum = 0; lineNum < TOTAL_LINES; lineNum++) {

  // A sonnet has an extra line break after every four lines
  // So if our current line number is divisible by 4 we should
  // add a <br />.
  //
  // The % here is "modulo" which returns the remainder
  // after division.
  //
  // Examples:
  // 4 % 4 == 0 (4 fits in 4 exactly 1 time)
  // 4 % 3 == 1 (3 fits in 4 1 time with 1 left over)
  // 4 % 2 == 0 (2 fits in 4 exactly 2 times)
  // 100 % 33 == 1 (33 fits in 100 3 times, with 1 left over)
  // 100 % 27 == 19 (27 fits in 100 3 times, with 19 left over)

  if (lineNum % 4 == 0) {
    $('#poem').append('<br>');
  }

  // First we choose a random sonnet number from our ten sonnets in the
  // sonnets array to pick the line from. We generate a number
  // between 0 and 9 in order to select one of them.
  var sonnetNum = Math.floor(Math.random() * sonnets.length);

  // Then we can get the sonnet we want the line from
  var sonnet = sonnets[sonnetNum];

  // And then we can get the line out of the sonnet that we want
  var line = sonnet[lineNum];

  // Note that if you want to be fancy, you can get the line from
  // the sonnet without getting the sonnet out first like this:
  //
  // var line = sonnets[sonnetNum][lineNum]
  //
  // That is, because the thing in sonnets[sonnetNum] is an array
  // you can just ask for an element in that array right away in
  // the same line rather than first storing the array into a
  // variable

  // And finally we'll add the line to the page along with a
  // line break
  $('#poem').append(line + '<br>');
}
      });

      function showLine () {

        // Set both divs to be blank
        $('#romeo,#juliet').text('');

        // Get the name of the current speaker, which is the same
        // as the CSS id for the div to put their text in
        var speaker = dialog[currentLine].name

        // Get the line they should speak
        var line = dialog[currentLine].line

        // Set the appropriate div to have the line in it
        $('#' + speaker).text(line);

        // Increase our index into the array by one to advance the dialog
        currentLine++;

        // Check if there are still lines remaining in the array of dialog
        if (currentLine < dialog.length) {
          // If so, set another timeout to say the next line
          setTimeout(showLine,LINE_DELAY);
        }
        // If the conditional was false, the page will stop setting timeouts
        // and will do nothing, leaving the final line on the screen.

      }

      // setInterval(function () {
      //   // And then we'll have our for loop from previously
      //   for (var i = 0; i < TOTAL_DIVS; i++) {
      //     // Create the div
      //     var div = $('<div id="div' + i + '"></div>')
      //     // Add the div to the page
      //     $('#test').append(div);
      //   }
      // },INTERVAL);




});
