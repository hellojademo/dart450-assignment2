var gameOver = false;

var spokenVoice

$(document).ready(function() {

$("#well").hide();
$("#icon2").hide();


  if (annyang) {

    var command = {

      // We want to just pick up each individual word
      // the user says, because we want to check if
      // they said the right thing. Thus we call said()
      // each time with the word they said as its argument.

      // In annyang's commands writing a colon immediately
      // followed by a variable name means it will call
      // the function specified with that word in an argument
      'tensei': tanisi,
      // '*everything': function (words) { console.log(words); },


    };

    // Now we've defined the command we give it to annyang
    // by using its .addCommands() function.
    annyang.addCommands(command);

    // Finally we tell annyang to start listening with its
    // .start() function
    annyang.start();
  }


  spokenVoice = new Audio ('../sounds/coin.wav')


  $("#listen").click(function(){

    spokenVoice.play();
});

$('body').click(function(){
  $("#well").show();
  $("#icon1").hide();
  $("#listen").hide();
  $("#icon2").fadeTo(1500,1);

});

});







// said (word)
//
// Called when annyang detects the user said a word. The argument
// will contain the word annyang heard.
function tanisi () {
  // First make sure the "game" isn't already over
  if (gameOver) {
    return;
  }

    $('body').css({
      'background-color': 'green'
    });
  $("#well").show();
  $("#icon2").fadeTo(1500,1);


  // else {
  //   // If they didn't say 'something', they got it wrong, make
  //   // the page red
  //   $('body').css({
  //     'background-color': 'red'
  //   })
  // }

  // For good measure, add what they said to the page
  $('#command').text('"Hello to you too!"');

  gameOver = true;
}
