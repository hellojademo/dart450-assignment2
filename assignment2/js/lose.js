var numSelected = 0;


// A global variable to store whether speech is ready to be used
var speechReady = false;

// The specific voice we want the computer to use
// See: http://responsivevoice.org/text-to-speech-languages/
var voice = 'UK English Male';

// The parameters for the voice in an object
var voiceParameters = {
  pitch: 1,
  rate: 1,
  volume: 1
}
//Code here from Pippin's examples with some tweaking
//No matter which check box the user picks, they "loose their status"


$(document).ready(function() {

  $('#button').hide();

  $('input').click(inputSelected);
  $("#icon2").hide();


  responsiveVoice.OnVoiceReady = speechIsReady;

  $("#icon2").mouseenter(function (event) {
  say("Oh No, What a shame, You lost your status and now you can never get it back");
});

    // We can have speech happen in reaction to different page
    // events like clicks and keypresses, to make things more dynamic...
    // $('#button').click(function (event) {
    //   // say() is a function defined below
    //   say("Oh No, What a shame, You lost your status and now you can never get it back");
    // });


});

//This checkbox section shows how no matter which they choose their status is lost

function inputSelected () {
  if ($(this).is(':checked')) {
    numSelected++;
    if (numSelected == 1) {
      $('#button').show();
      $("#icon1").hide();
      $("#icon2").show();
       say("Oh No, What a shame, You lost your status and now you can never get it back");
    }
  }
  else {
    numSelected--;
  }
}


function speechIsReady () {
  speechReady = true;
}


function say (text) {
  if (speechReady) {
    responsiveVoice.speak(text,voice,voiceParameters);
  }
}
