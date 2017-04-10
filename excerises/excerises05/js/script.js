/*

Basic Speech
Pippin Barr

Using ResponseVoice to say something with the browser
*/

// A global variable to store whether speech is ready to be used
var speechReady = false;

// The specific voice we want the computer to use
// See: http://responsivevoice.org/text-to-speech-languages/
var voice = 'UK English Male';

// The parameters for the voice in an object
var voiceParameters = {
  pitch: 5,
  rate: 1,
  volume: 1
}

$(document).ready(function() {
  // We can set .OnVoiceReady on the responsiveVoice library object
  // with a function to call when the speech functionality for the
  // page is ready...
  responsiveVoice.OnVoiceReady = speechIsReady;

  // We can have speech happen in reaction to different page
  // events like clicks and keypresses, to make things more dynamic...
  $(document).click(function () {
    // say() is a function defined below
    say("Touch me again and I'll drop you like it's hot");
  });

  $(document).keypress(function (event) {
    say("I love it when you press key code number " + event.which);
  });
  $("#gav").mouseenter(function (event) {
    say("what do you want");
  });
  $("#gav").mouseleave(function (event) {
    say("Yeah that's what i thought");
  });

  $("#gav2").mouseenter(function (event) {
    say("Is that what you're REALLY! wearing?");
  });
  $("#gav2").mouseleave(function (event) {
    say("Ugh I can't take you anywhere");
  });

  $("#gav3").mouseenter(function (event) {
    say("Yeah I stole your crayons what about it");
  });
  $("#gav3").mouseleave(function (event) {
    say("get outta my face punk");
  });


  $("#gav4").mouseenter(function (event) {
    say("Soooooooo wanna treat me to mcdonalds?");
  });
  $("#gav4").mouseleave(function (event) {
    say("Cmon I smiled this time");
  });

});

// speechIsReady()
//
// Rather than DO anything when speech is ready, we set a variable
// to REMEMBER that speech is ready. Then we can check that variable
// before trying to use speech functions...
function speechIsReady () {
  speechReady = true;
}

// say(text)
//
// Checks if speech is available and if it is, speaks the text given
// with the parameters determined at the top of the script.
function say (text) {
  if (speechReady) {
    responsiveVoice.speak(text,voice,voiceParameters);
  }
}
