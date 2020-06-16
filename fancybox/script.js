$(document).ready(function () {
    $(".toggle-button").click(function () {
        $(".nav-links").slideToggle();
    });

  


    // Replace form with replace message
    $(".donate-submit").click(function () {
        $("form").replaceWith($("#thanks"));
    });

    $("#donationTop").click(function () {
        $("#thanks").show();
    });

    $(".donate-submit").click(function () {
        $("replace flex").show();
    });

    $("#donationTop").click(function () {
        $("form").hide();
    });


    //   Remove hidden class from replace message
    $(".donate-submit").click(function () {
        $(".replace").removeClass("hidden-all");
    });

    $('form').submit(function (event) {
        event.preventDefault();
    });

    $(".amount .button").click(function() {
        $(".amount .button").removeClass("active");
        $(this).addClass("active");
 }
    )
    // Go to top of donation
    $('#donationTop').click(function () {
        window.location = '#thanks';
    });





})