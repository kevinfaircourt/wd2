$(document).ready(function () {

    var numProducts = 0;

    $('#tabs').tabs();

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
                .html("You have " + numProducts + " product" + plural + " in cart!");
        }
    });
  
    $( function() {
      $( "#accordion" ).accordion();
    } );
   
    $( function() {
        var availableTags = [
          "vintage",
          "new",
          "gold",
          "stainless steel",
          "silver",
          "diamonds",
          "leather straps",
          "sold",
          "european",
          "american",
          "brand",
          "swiss",
          "japanese",
          "digital",
          "iwatch", 
        ];

        $( "#tags" ).autocomplete({
          source: availableTags
        });
})
})