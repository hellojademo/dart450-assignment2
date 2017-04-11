var numSelected = 0;

$(document).ready(function() {

  $('#button').hide();
    $("#icon2").hide();

  $('input').click(inputSelected);



});

function inputSelected () {
  if ($(this).is(':checked')) {
    numSelected++;
    if (numSelected == 3) {
      $('#button').show();
      $("#icon1").hide();
      $("#icon2").show();
    }
  }
  else {
    numSelected--;
  }
}
