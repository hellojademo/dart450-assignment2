$(document).ready(function() {

  const TOTAL_DIVS = 20;
  const INTERVAL = 150;

  // We want to add divs over time this time...
  // So we'll use setInterval, which is like a kind of loop in time
  // It happens over and over again, just with a delay between
  // executions of its code.
  setInterval(function () {
    // And then we'll have our for loop from previously
    for (var i = 0; i < TOTAL_DIVS; i++) {
      // Create the div
      var div = $('<div id="div' + i + '"></div>')
      // Add the div to the page
      $('body').append(div);
    }
  },INTERVAL);

  // What are we going to see?
  // Will one div get added at a time?
  // More than one? Thousands?

});
