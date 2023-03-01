window.onload = function (){
  var player      = new Player(400, FLOORHEIGHT, "spriteSheet_x2.png");
  var keysPressed = {};
  var time        = 0;

  document.addEventListener("keydown", function(event) { keysPressed[event.key] = true; });
  document.addEventListener("keyup", function(event) { delete keysPressed[event.key]; });

  function handleKeysPressed() {
      if ("ArrowLeft"  in keysPressed) { player.moveLeft(); }
      if ("ArrowRight" in keysPressed) { player.moveRight(); }
      if ("ArrowUp"    in keysPressed) { player.jump(); }
      //if ("ArrowDown"  in keysPressed) { player.moveDown(); }
  }

  setInterval(function() {
    handleKeysPressed();
    player.update(time);
    time++;
  }, 10);
}