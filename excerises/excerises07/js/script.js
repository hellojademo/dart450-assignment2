/*

ScrollMagic
http://scrollmagic.io/

TweenMax
https://greensock.com/tweenmax

*/

$(document).ready(function() {

  // Create a ScrollMagic Controller so we can use the library
  var controller = new ScrollMagic.Controller();

  // For each of the blocks we want to fade in
  $('.block').each(function (index) {

    // Add an id so we can use it as a trigger
    $(this).attr('id','block'+index);

    // Add a scene to control it
    var scene = new ScrollMagic.Scene({
      triggerElement: "#block"+index,
    });

    // Add a tween to fade it to opacity 1
    scene.setTween("#block"+index, 0.5, {
      opacity: "1",
    });


    // Add the debugging indicators so we can see what's happening
    // scene.addIndicators();

    // Add our scene to the controller so it actually does something
    scene.addTo(controller);
  });

});
