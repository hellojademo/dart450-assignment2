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
});

function buttonClicked () {
  var answer = $('#input').val();
  if (answer == 'cat') {
    $('#done').fadeTo(1000,1);
    $("#listen").hide();
    $("#submit").hide();

    $("#icon1").hide();
  
    $("#icon2").fadeTo(1500,1);

  }
}
