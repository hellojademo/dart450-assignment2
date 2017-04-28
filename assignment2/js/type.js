// $(document).ready(function(){
//
// $("#done").hide();
//
//
// });

$(document).ready(function(){
  $("#listen").hide();
  $('#submit').click(buttonClicked);
  $("#done").hide();
  $("#listen").fadeTo(2000,1);
  $("#icon2").hide();
  $("#thank").fadeTo(4500,0);



  spokenVoice = new Audio ('../sounds/chi.wav')


  $("#listen").click(function(){

    spokenVoice.play();
  });




});



//This ensures the user has to type in the right word in order to advance
//The code checks to make sure they typed in the right input

function buttonClicked () {
  var answer = $('#input').val();
  if (answer == 'Chimegwetch') {
    $('#done').fadeTo(1000,1);
    $("#listen").hide();
    $("#submit").hide();

    $("#icon1").hide();

    $("#icon2").fadeTo(1500,1);

  }
}
