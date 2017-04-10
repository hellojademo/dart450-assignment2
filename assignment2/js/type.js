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
});

function buttonClicked () {
  var answer = $('#input').val();
  if (answer == 'cat') {
    $('#done').fadeTo(2000,1);
  }
}
