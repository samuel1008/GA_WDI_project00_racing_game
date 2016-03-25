$(function () {

  var player = '<div id="player"></div>';
  $("#map").append(player);

  $(document).keydown(function (e) {


      var position = $("#player").position();


      switch (e.keyCode) {
        case 65:    // a - left
          $("#player").css('left', position.left - 20 + 'px');
          break;
        // case 87:    // w - top
        //   $("#player").css('top', position.top -20 + 'px');
        //   break;
        case 68:    // d - right
          $("#player").css('left', position.left + 20 + 'px');
          break;
        // case 83:    // s - down
        //   $("#player").css('top', position.top +20 + 'px');
        //   break;

      }

  });


});
