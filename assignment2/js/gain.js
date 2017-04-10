var numSelected = 0;

$(document).ready(function() {

  $('#button').hide();

  $('input').click(inputSelected);

});

function inputSelected () {
  if ($(this).is(':checked')) {
    numSelected++;
    if (numSelected == 3) {
      $('#button').show();
    }
  }
  else {
    numSelected--;
  }
}
