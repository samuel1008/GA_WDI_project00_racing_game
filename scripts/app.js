$(function () {

  var player = 'x';
  var player2 = '<div id="player2"></div>';
  var move1 = 0;
  $("#box1").append(player);
  $("#map2").append(player2);

  $(document).keydown(function (e) {
    console.log(1);

      var position = $("#player").position();
      var position2 = $("#player2").position();



      switch (e.keyCode) {
        case 65:    // a - left
          $("#player").css('left', position.left - 25 + 'px');
          break;

        case 68:    // d - right
          $("#player").css('left', position.left + 25 + 'px');
          break;

        case 39:    // -> - right
          $("#player2").css('left', position2.left + 25 + 'px');
          break;

        case 37:    // <- - left
          $("#player2").css('left', position2.left - 25 + 'px');
          break;

      }
      console.log(2);

  });


});
