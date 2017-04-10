/*

Title of project
Author's name

Description of this script in the context of the project

*/

$(document).ready(function() {

  // Write code in here that will run when the document is loaded
//
$("#type, #animal, #status, #lose").hide();
$("#test5").hide();



$("#typebutt").click(function(){
    $("#animal").show();
    // $("#type").hide();


  });

$("#typebutt").click(function() {
$("#type").hide();

});



function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == "") {
        alert("Try Again!");
        return false;

    }

    var x = document.forms["myForm"]["fname"].value;
    if (x == "cat") {
        return true;

}







});
