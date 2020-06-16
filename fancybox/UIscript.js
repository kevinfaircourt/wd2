$(document).ready(function () {
var numProducts = 0;



$(".draggable").draggable();


$(".droppable").droppable({
    drop: function (event, ui) {
        numProducts++;
        console.log(numProducts);

        var plural = '';
        if (numProducts > 1) {
            plural = "s";
        }

        $(".quokkaStatus").html("You helped " + numProducts + " Quokka" + plural + " get to the forest!");
    }
});
})