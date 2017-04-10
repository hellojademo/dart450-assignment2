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
  pitch: 2,
  rate: 0.5,
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
    say("" );
  });
  $("#gav").mouseenter(function (event) {
    say("Dance with me");
  });
  // $("#gav").mouseleave(function (event) {
  //   say("Yeah that's what i thought");
  // });

  $("#gav2").mouseenter(function (event) {
    say("What's wrong? Too fast?");
  });
  // $("#gav2").mouseleave(function (event) {
  //   say("Ugh I can't take you anywhere");
  // });

  $("#gav3").mouseenter(function (event) {
    say("Too hard to catch the beat?");
  });
  // $("#gav3").mouseleave(function (event) {
  //   say("get outta my face punk");
  // });


  $("#gav4").mouseenter(function (event) {
    say("Ugh humans are the worst");
  });

  $("#gav5").mouseenter(function (event) {
    say("SCREAMING");

  });
  // $("#gav4").mouseleave(function (event) {
  //   say("Cmon I smiled this time");
  // });

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






var poem = [];
// We need to keep track of the current line being read
var currentLine = 0;
// We need voice parameters for our poet
var voiceParameters = {
  pitch: 1,
  rate: 0.5,
  volume: 0.5,
  onend: speakNextLine
}

$(document).ready(function() {

  // Load our script file as text

  // We'll use .ajax for this, which is the main jQuery function
  // for requesting data from files/urls. It stands for:
  // Asynchronous JavaScript And XML
  // .getJSON, for example, is just a version of .ajax that
  // specifically requests JSON data
  $.ajax({
    url: 'js/script.js', // Location of the file
    success: gotData, // Function to call when data is ready
    dataType: 'text' // The type of data we're requesting
  });

  // Every beat poet needs erratic drumming as accompaniment,
  // so start that up
  startDrums();

});

// startDrums ()
//
// Starts the Gibber library and creates a random drum-loop
function startDrums() {
  // We have to initialise Gibber first
  Gibber.init();

  // Now let's create a random drum loop

  // Length of the loop (in beats)
  const DRUM_SEQUENCE_LENGTH = 50;

  // Possible drum types
  // x=snare, o=kick, -=closed hihat, *=open hihat, .=nothing
  var drumSymbols = ['x','o','-','*','.','-','*','.','x','o','*','.','-','o','-','*','.','-','*',];

  // This is the string we'll create our loop in
  var drumString = '';

  // Now loop for the sequence length and and add random drum characters
  // to our string
  for (var i = 0; i < DRUM_SEQUENCE_LENGTH; i++) {
    drumString += drumSymbols[Math.floor(Math.random() * drumSymbols.length)];
  }
  // Finally, create our drums with the string with a note length of 1/8
  var b = EDrums(drumString,1/24);
}

// gotData (data)
//
// Called when .ajax has loaded our script.js file
function gotData (data) {
  // Split the file into lines based on the 'carriage return' character \n
  // .split() returns an ARRAY
  poem = data.split('\n');
  // Speak the next line of the poem...
  speakNextLine();
}

// speakNextLine ()
//
// Speaks the next line of the poem
function speakNextLine () {
  // If we're at the end of the poem
  if (currentLine == poem.length) {
    // Do nothing
    return;
  }
  else {
    // Otherwise speak the current line in the poem array
    // Note that in voiceParameters we have set onend to call
    // speakNextLine - so after one line is finished, it will
    // speak the next.
    responsiveVoice.speak(poem[currentLine],"UK English Male",voiceParameters);
    // Increase the current line
    currentLine++;
  }
}
