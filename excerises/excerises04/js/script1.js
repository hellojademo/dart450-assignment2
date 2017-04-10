/*

Romeo and Juliet
Pippin Barr

Some basic code to go through an array of dialog over time,
displaying it on the page.

*/


// How long to wait between showing new lines
const LINE_DELAY = 3000;

// An index into the array of dialog, pointing to the current line
// to put on the screen. Starts at 0, the first line!
var currentLine = 0;

$(document).ready(function() {

  // When the document is ready, show the first line
  showLine();

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
  // $("#romeo").onClick(
  //   $("#bb").css("opacity","1");
  // )


}
