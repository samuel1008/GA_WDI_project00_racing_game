$(document).ready(function() {

  var playerOne = new Player("X", 1, 0);
  var playerTwo = new Player("Y", 13, 0);
  var playerArray = [playerOne, playerTwo];


  $("#1").append(playerOne.name);
  $("#13").append(playerTwo.name);

  /* TODO: Keep function definitions out of the document read section -jc */
  function gameplay() {
    $(window).on('keypress', function handler(event) {
      /* TODO: This code is confusing. Please add comments -jc */

      /* TODO: Your code successfully creates a game, but it repeats itself for either keypress. Create a function that will handle a player movement and pass it a parameter to tell the function which player is moving. This will cut your code in half. -jc */
      if (event.which === 100) {
        if ($("#" + playerOne.position).text !== "") {
          $("#" + playerOne.position).empty();
          playerOne.position++;
          $("#" + playerOne.position).text(playerOne.name);
        }
        if (playerOne.position === 12) {
          alert(playerOne.name + " " + "wins!!!");
          playerOne.score++;
          if ($(".score").text !== "") {
            $(".score").empty();
            /* TODO: Break this html string creation into a function for easier code flow. -jc */
            $(".score").append("<p>" + playerOne.name + " " + "scored " + playerOne.score + " " + "points," + playerTwo.name + " " + "scored " + playerTwo.score + " " + "points" + "</p>");
          } else {
            /* TODO: Break this html string creation into a function for easier code flow. -jc */
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
          if ($(".score").text !== "") {
            $(".score").empty();
            $(".score").append("<p>" + playerOne.name + " " + "scored " + playerOne.score + " " + "points," + playerTwo.name + " " + "scored " + playerTwo.score + " " + "points" + "</p>");
          } else {
            $(".score").append("<p>" + playerOne.name + " " + "scored " + playerOne.score + " " + "points," + playerTwo.name + " " + "scored " + playerTwo.score + " " + "points" + "</p>");
          }
          /* TODO: The code below is exactly the same as the code right below.  Turn this into it's own function and have it called three times total. -jc */
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

/* TODO: OOP, Nice job! -jc */
function Player(name, position, score) {
  this.name = name;
  this.position = position;
  this.score = score;
}
