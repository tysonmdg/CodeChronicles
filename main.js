window.onload = function (){
  var player = new Player(400, FLOORHEIGHT, "spriteSheet_x2.png");
  var keysPressed = {};

  document.addEventListener("keydown", function(event) { keysPressed[event.key] = true; });
  document.addEventListener("keyup", function(event) { delete keysPressed[event.key]; });

  function handleKeysPressed() {
    //console.log(keysPressed.length);
    //if(Object.keys(keysPressed).length < MAX_BUF_SIZE){ 
      if ("ArrowLeft"  in keysPressed) { player.moveLeft(); }
      if ("ArrowRight" in keysPressed) { player.moveRight(); }
      if ("ArrowUp"    in keysPressed) { player.jump(); }
      //if ("ArrowDown"  in keysPressed) { player.moveDown(); }
      //if ("space"      in keysPressed) { player.jump(); console.log("holu?"); }
    //}
  }

  setInterval(function() {
    handleKeysPressed();
    player.update();
  }, 60);
}