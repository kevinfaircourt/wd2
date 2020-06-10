$(document).ready(function(){
    $(".toggle-button").click(function(){
        $(".nav-links").slideToggle();
    });
    // Replace form with replace message
  $(".donate-submit").click(function () {
    $("form").replaceWith($("#thanks"));
  });
  $("#donationTop").click(function(){
    $("#thanks").show();
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
  $('#donationTop').click(function(){ window.location = '#thanks'; });
});
