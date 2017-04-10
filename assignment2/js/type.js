$(document).ready(function(){

$("#done").hide();

  function validateForm() {
      var x = document.forms["myForm"]["fname"].value;
      if (x == "") {
          alert("Try Again!");
          return false;

      }

      var x = document.forms["myForm"]["fname"].value;
      if (x == "cat") {
          return true;
          $("#done").fadeTo(2000,1);

  }




});
