

$(document).ready(function() {


	$("#text").click(function(){
			$(this).animate({right:'+=2%',opacity:'.75', padding:'+=10px',}, 10);
		});


	  $('.cake').hover(function () {

	    $(this).fadeTo(500,0.2);

	  },function () {
  				$(this).fadeTo(500,1);


	  });

});
