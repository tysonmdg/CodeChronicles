const IDLE   = 0;
const MOVING = 1;
const RIGHT = 0;
const LEFT  = 1;
const SPRITE_SIZE = 64;
const JUMPFORCE = 60;
const GRAVITY = 2;
const FLOORHEIGHT = 400;
const MAX_BUF_SIZE = 3;

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
    this.inputBuffer = "";
    
    this.state    = IDLE;
    this.facing   = RIGHT;
    this.ySpeed   = 0;     //used for jumps
    this.counter  = 0;
    this.jumpTime = 0;
    this.jumping  = false;
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
  moveLeft() {
    this.inputBuffer = "left";
    this.facing = LEFT;
  }

  // método para mover el jugador hacia la derecha
  moveRight() {
    this.inputBuffer = "right"; 
    this.facing = RIGHT;
  }

  jump() { 
    if(!this.jumping) { this.inputBuffer = "jump"; }
  }

  update(){
    this.updateMovement();
    this.updateSprite();
    this.counter++;
  }

  // método para actualizar la posición del jugador basado en el buffer de entrada
  updateMovement() {
    if(this.jumping){
      //aplicar parábola
      this.y = FLOORHEIGHT + (this.ySpeed*this.jumpTime - (GRAVITY*this.jumpTime*this.jumpTime)/2) * (-1);
      if(this.y > FLOORHEIGHT){
        this.jumping = false;
        this.y       = FLOORHEIGHT;
        this.ySpeed  = 0;
      }
      else{
        this.ySpeed  = JUMPFORCE - GRAVITY*this.jumpTime;
      }
      this.jumpTime++;
    }

    // comprueba si hay alguna entrada en el buffer
    if (this.inputBuffer.length > 0) {
      switch (this.inputBuffer) {
        case "left":
          this.x -= SPEED;
          break;
        case "right":
          this.x += SPEED;
          break;
        case "jump":          
          this.jumping  = true;
          this.ySpeed   = JUMPFORCE;
          this.jumpTime = 0;
          break;
        }
      this.state = MOVING;
    }
    else{  this.state = IDLE; }

    // actualiza la posición del jugador en pantalla
    this.updatePosition();
    this.inputBuffer = "";
  }

  updateSprite(){
    this.setSpritePosition((this.counter%4)*SPRITE_SIZE, (this.state*2 + this.facing)*SPRITE_SIZE, SPRITE_SIZE, SPRITE_SIZE);
  }
}