$(document).ready(function(){
    $(".toggle-button").click(function(){
        $(".nav-links").slideToggle();
    });

    var numProducts = 0;

    $(".draggable").draggable();
  
    $(".droppable").droppable({
        drop: function (event, ui) {
            numProducts++;
            var plural = '';
            if(numProducts > 1 ){
                plural = "s";
            }
            $(this)
                .find("h3")
                .html("You helped " + numProducts + " Quokka" + plural + "get to the forest!");
        }
    });


    // Replace form with replace message
  $(".donate-submit").click(function () {
    $("form").replaceWith($("#thanks"));
  });

  $("#donationTop").click(function(){
    $("#thanks").show();
  });
  
  $(".donate-submit").click(function(){
    $("replace flex").show();
  });

  $("#donationTop").click(function(){
    $("form").hide();
  });

  
  //   Remove hidden class from replace message
  $(".donate-submit").click(function () {
    $(".replace").removeClass("hidden-all");
  });

  $('form').submit(function (event) {
    event.preventDefault();
  });

  // Go to top of donation
  $('#donationTop').click(function(){ window.location = '#thanks'; 
});

 



});
