const IDLE   = 0;
const MOVING = 1;
const RIGHT = 0;
const LEFT  = 1;
const SPRITE_SIZE = 64;

const SPEED = 15;
class Player {
  constructor(x, y, imageSrc) {
    this.x = x; // posición en el eje X
    this.y = y; // posición en el eje Y
    this.imgName = imageSrc; // imagen asociada al jugador
    
    this.myImg = document.createElement("img");
    //this.myImg.setAttribute("src",getImg(this.imgName));
    this.myImg.style.position = "absolute"; // establece posición absoluta
    document.getElementById("player").append(this.myImg);

    this.setSpritePosition(0, 0, SPRITE_SIZE, SPRITE_SIZE);

    // inicializa el buffer de entrada
    this.inputBuffer = [];

    this.state  = IDLE;
    this.facing = RIGHT;
    this.counter = 0;
  }

  setState(newState){ this.state = newState; }

  // método para recortar la hoja de sprites y mostrar solo una zona de la misma
  setSpritePosition(spriteX, spriteY, spriteWidth, spriteHeight) {
    this.myImg.style.backgroundImage    = `url(${getImg(this.imgName)})`;
    this.myImg.style.backgroundPosition = `-${spriteX}px -${spriteY}px`;
    this.myImg.style.width              = `${spriteWidth}px`;
    this.myImg.style.height             = `${spriteHeight}px`;
  }

  // método para actualizar la posición del jugador en pantalla
  updatePosition() {
    this.myImg.style.left = this.x + "px";
    this.myImg.style.top  = this.y + "px";
  }

  // método para mover el jugador hacia la izquierda
  moveLeft() { this.inputBuffer.push("left"); this.facing = LEFT; }

  // método para mover el jugador hacia la derecha
  moveRight() { this.inputBuffer.push("right"); this.facing = RIGHT; }

  // método para mover el jugador hacia arriba
  moveUp() { this.inputBuffer.push("up"); }

  // método para mover el jugador hacia abajo
  moveDown() { this.inputBuffer.push("down"); }

  update(){
    this.updateMovement();
    this.updateSprite();
    this.counter++;
  }

  // método para actualizar la posición del jugador basado en el buffer de entrada
  updateMovement() {
    // comprueba si hay alguna entrada en el buffer
    if (this.inputBuffer.length > 0) {
      // obtiene la última entrada del buffer
      const input = this.inputBuffer.pop();
      // mueve el jugador en la dirección correspondiente
      switch (input) {
        case "left":
          this.x -= SPEED;
          break;
        case "right":
          this.x += SPEED;
          break;
        case "up":
          this.y -= SPEED;
          break;
        case "down":
          this.y += SPEED;
          break;
      }
      this.state = MOVING;
    }
    else{  this.state = IDLE; }
    // actualiza la posición del jugador en pantalla
    this.updatePosition();
  }

  updateSprite(){
    this.setSpritePosition((this.counter%4)*SPRITE_SIZE, (this.state*2 + this.facing)*SPRITE_SIZE, SPRITE_SIZE, SPRITE_SIZE);
  }
}