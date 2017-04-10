/*

Play Array
Pippin Barr

Creates a grid of DIVs on screen and adds them to an array. It then
adds and removes classes to random divs in the array over time to
create a very, very primitive game-like experience.

*/

// Constants to set the possible number of divs on the screen,
// calling them "pieces" because it's more gamelike
const MIN_PIECES = 200;
const MAX_PIECES = 300;

// Constants to set timing with which the game updates a random pieces
const INTERVAL = 15;
// and for how long a piece that can be used to score keeps that status
const WINNER_TIME = 2000;

// Constant to determine how likely it is that a piece becomes a
// points-scoring piece when it is selected by our random function
const POINTS_CHANCE = 0.1; // 10%

// An array of possible classes to apply to pieces
// These match the classes defined in our CSS
const CLASSES = ['rotator','scaler','fader'];

// We'll store our play pieces (divs) in this array so that we can
// do stuff with them later
var pieces;

// We'll track the player's score here, even though that's not very
// playful!
var score = 0;

const LINE_DELAY = 1500;

// An index into the array of dialog, pointing to the current line
// to put on the screen. Starts at 0, the first line!
var currentLine = 0;

// $(document).ready(function() {
//
//   // First we add all the pieces to the screen
//   makePieces();
//
//   // Then we use an interval to update the pieces on the screen
//   // over and over again (a loop in time)
//   setInterval(update,INTERVAL);
//
// });
//
//
// // makePieces ()
// //
// // Works out how many pieces (divs) to display and then creates them all
// // in a for loop and adds them to our pieces array.
//
// function makePieces () {
//
//   // Get our random number of pieces for the game
//   // Remember we defined this function last week, and here it is again
//   var numPieces = randomIntegerInRange(MIN_PIECES,MAX_PIECES);
//
//   // Create an array to store them in of the appropriate length
//   pieces = new Array(numPieces);
//
//   // Use a for loop to go through our array adding pieces to it
//   for (var i = 0; i < pieces.length; i++) {
//
//     // Create a div
//     var piece = $('<div></div>');
//
//     // Style it with .basic
//     piece.addClass('basic');
//
//     // Add it to the page
//     $('body').append(piece);
//
//     // Add it to the array
//     pieces[i] = piece;
//
//   }
//
// }
//
//
// // update
// //
// // Every INTERVAL millis this function runs to keep things interesting.
// // It randomly adds/removes classes to one piece on the screen.
//
// function update () {
//
//   // Choose our random piece in the array by getting an index
//   var randomPieceIndex = randomIntegerInRange(0,pieces.length);
//
//   // Get the random piece out of the array
//   var randomPiece = pieces[randomPieceIndex];
//
//   // Choose the index of a random class to apply to the piece
//   var randomClassIndex = randomIntegerInRange(0,CLASSES.length);
//
//   // Get the class name from the array
//   var randomClass = CLASSES[randomClassIndex];
//
//   // Toggle the selected class on our random piece
//   randomPiece.toggleClass(randomClass);
//
//   // Check if we should make this piece score points when clicked
//   if (Math.random() < POINTS_CHANCE) {
//
//     // Add the points class
//     randomPiece.addClass('points');
//
//     // Add a click event so that if it's clicked the player gets a point
//     randomPiece.click(function () {
//
//       // Increment the score
//       score++;
//
//       // Set the score on the page
//       $('#score').text(score);
//
//     });
//
//     // After a delay we should disable the points scoring so it's
//     // not too easy!
//     setTimeout(function () {
//
//       // Remove the points class
//       randomPiece.removeClass('points');
//
//       // Remove the click event from the piece
//       // Otherwise you could keep clicking and getting points
//       // even though it's not green anymore...
//       randomPiece.off('click');
//
//     },WINNER_TIME);
//   };
//
// }
//
//
// // randomIntegerInRange (max, min)
// //
// // Our old friend. Returns a random integer between min
// // and max
//
// function randomIntegerInRange(min,max) {
//
//   return Math.floor(Math.random() * (max - min)) + min;
//
// }

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
   $("#romeo").click(function () {
    //  for (var i = 0; i < pieces.length; i++) {
    //    pieces[i].hide();
    //   //  pieces[i].addClass('zero');
    //  }
     $("#bb").removeClass('zero');

   });


}
