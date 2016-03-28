$(document).ready(function() {

  var playerOne=new Player("X", 1, 0);
  var playerTwo=new Player("Y", 13, 0);
  var playerArray = [playerOne, playerTwo];


  $("#1").append(playerOne.name);
  $("#13").append(playerTwo.name);

  function gameplay() {
    $(window).on('keypress', function handler(event) {
      if (event.which === 100) {
        if ($("#" + playerOne.position).text !== "") {
          $("#" + playerOne.position).empty();
          playerOne.position++;
          $("#" + playerOne.position).text(playerOne.name);
        }
        if (playerOne.position === 12) {
          alert(playerOne.name + " " + "wins!!!");
          playerOne.score++;
          if($(".score").text !== ""){
            $(".score").empty();
            $(".score").append("<p>" + playerOne.name + " " + "scored " + playerOne.score + " " + "points," + playerTwo.name + " " + "scored " + playerTwo.score + " " + "points" + "</p>");
        } else {
          $(".score").append("<p>" + playerOne.name + " " + "scored " + playerOne.score + " " + "points," + playerTwo.name + " " + "scored " + playerTwo.score + " " + "points" + "</p>");
        }
          $("div.track div").empty();
          $("#1").append(playerOne.name);
          $("#13").append(playerTwo.name);
          playerOne.position = 1;
          playerTwo.position = 13;
        }
      }
      if (event.which === 97) {
        if ($("#" + playerTwo.position).text !== "") {
          $("#" + playerTwo.position).empty();
          playerTwo.position++;
          $("#" + playerTwo.position).text(playerTwo.name);
        }
        if (playerTwo.position === 24) {
          alert(playerTwo.name + " " + "wins!!!");
          playerTwo.score++;
          if($(".score").text !== ""){
            $(".score").empty();
            $(".score").append("<p>" + playerOne.name + " " + "scored " + playerOne.score + " " + "points," + playerTwo.name + " " + "scored " + playerTwo.score + " " + "points" + "</p>");
        } else {
          $(".score").append("<p>" + playerOne.name + " " + "scored " + playerOne.score + " " + "points," + playerTwo.name + " " + "scored " + playerTwo.score + " " + "points" + "</p>");
        }
          $("div.track div").empty();
          $("#1").append(playerOne.name);
          $("#13").append(playerTwo.name);
          playerOne.position = 1;
          playerTwo.position = 13;
        }
      }
      $("#reset").on('click', function() {
        $("div.track div").empty();
        $("#1").append(playerOne.name);
        $("#13").append(playerTwo.name);
        playerOne.position = 1;
        playerTwo.position = 13;

      });
    });
  }
  gameplay();
});

function Player(name, position, score) {
  this.name = name;
  this.position = position;
  this.score = score;
}
