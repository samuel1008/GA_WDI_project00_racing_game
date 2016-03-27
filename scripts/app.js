$(document).ready(function() {

  var player = 'x';
  var player2 = 'y';
  var position1 = 1;
  var position2 = 13;

  $("#1").append(player);
  $("#13").append(player2);


  function gameplay() {
    $(window).on('keypress', function handler(event) {
      console.log(1);
      if (event.which === 100) {
        if ($("#" + position1).text !== "") {
          $("#" + position1).empty();
          position1++;
          $("#" + position1).text(player);
          console.log("after key press");
        }
        if (position1 === 12) {
          alert(player + " " + "wins!!!");

        }
      }
      if (event.which === 97) {
        console.log("why ain this working!!!");
        if ($("#" + position2).text !== "") {
          $("#" + position2).empty();
          position2++;
          $("#" + position2).text(player2);
          console.log("YEEEEE");
        }
      }
      $("#reset").on('click', function() {
        $("div.track div").empty();
        $("#1").append(player);
        $("#13").append(player2);

      });

      // else if ($("#24").text === player2){
      //   alert(player2 + " " + "wins!!!");
      // }
    });
  }
  gameplay();
});
