window.onload = function (){
  var player = new Player(0, 0, "spriteSheet_x2.png");
  var keysPressed = {};

  document.addEventListener("keydown", function(event) { keysPressed[event.key] = true; });
  document.addEventListener("keyup", function(event) { delete keysPressed[event.key]; });

  function handleKeysPressed() {
    if ("ArrowLeft"  in keysPressed)  { player.moveLeft();  keysPressed["ArrowLeft"]; }
    if ("ArrowRight" in keysPressed)  { player.moveRight(); keysPressed["ArrowRight"]; }
    if ("ArrowUp"    in keysPressed)  { player.moveUp();    keysPressed["ArrowUp"]; }
    if ("ArrowDown"  in keysPressed)  { player.moveDown();  keysPressed["ArrowDown"]; }
  }

  setInterval(function() {
    handleKeysPressed();
    player.update();
  }, 50);
}