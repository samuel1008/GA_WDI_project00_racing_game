$(document).ready(function() {

  var player = 'x';
  var player2 = 'y';
  var position1 = 1;
  var position2 = 13;
  var score_p1 = 0;
  var score_p2 = 0;

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
          score_p1++;
          if($(".score").text !== ""){
            $(".score").empty();
            $(".score").append("<p>" + player + " " + "scored " + score_p1 + " " + "points," + player2 + " " + "scored " + score_p2 + " " + "points" + "</p>");
            console.log("did x win?");
        } else {
          $(".score").append("<p>" + player + " " + "scored " + score_p1 + " " + "points," + player2 + " " + "scored " + score_p2 + " " + "points" + "</p>");
        }
          $("div.track div").empty();
          $("#1").append(player);
          $("#13").append(player2);
          position1 = 1;
          position2 = 13;
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
        if (position2 === 24) {
          alert(player2 + " " + "wins!!!");
          score_p2++;
          if($(".score").text !== ""){
            $(".score").empty();
            $(".score").append("<p>" + player + " " + "scored " + score_p1 + " " + "points," + player2 + " " + "scored " + score_p2 + " " + "points" + "</p>");
        } else {
          $(".score").append("<p>" + player + " " + "scored " + score_p1 + " " + "points," + player2 + " " + "scored " + score_p2 + " " + "points" + "</p>");
        }
        console.log("did 2 win?");
          $("div.track div").empty();
          $("#1").append(player);
          $("#13").append(player2);
          position1 = 1;
          position2 = 13;
        }
      }
      $("#reset").on('click', function() {
        $("div.track div").empty();
        $("#1").append(player);
        $("#13").append(player2);
        position1 = 1;
        position2 = 13;

      });
    });
  }
  gameplay();
});
