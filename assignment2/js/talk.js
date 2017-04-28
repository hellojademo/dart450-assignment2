var gameOver = false;

var spokenVoice

$(document).ready(function() {

$("#well").hide();
$("#icon2").hide();
$("#hint").hide();


  if (annyang) {

    var command = {


    // code used here mostly derieved from Pippin's example with addtions.
    //This section is to ensure the user says the right word in order to advance
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


  spokenVoice = new Audio ('../sounds/tensei.wav')


  $("#listen").click(function(){

    spokenVoice.play();
    $("#hint").show();
});

$('body').click(function(){
  // $("#well").show();
  // $("#icon1").hide();
  // $("#listen").hide();
  // $("#icon2").fadeTo(1500,1);

});

});







// said (word)
//
// Called when annyang detects the user said a word. The argument
// will contain the word annyang heard.




//THIS IS THE BIT I NEED TO FIX

function tanisi () {
  // First make sure the "game" isn't already over
  if (gameOver) {
    return;
  }

    $('body').css({
      'background-color': 'green'
    });

    $("#well").fadeIn(1000);
    $("#icon1").hide();
    $("#listen").hide();
    $("#icon2").fadeTo(1500,1);
  // else {
  //   // If they didn't say 'something', they got it wrong, make
  //   // the page red
  //   $('body').css({
  //     'background-color': 'red'
  //   })
  // }

  // For good measure, add what they said to the page
  // $('#command').text('"Hello to you too!"');
  $('#success').text('"cool"');
  // $('#command').append("#well");
  // $("#icon2").fadeTo(1500,1);
  gameOver = true;
}
