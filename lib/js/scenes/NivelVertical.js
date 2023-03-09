/**
 * Escena de Título.
 * @extends Phaser.Scene
 */

import VerticalBackground from '../VerticalBackground.js';
import Spaceship from '../Spaceship.js';
export default class NivelVertical extends Phaser.Scene {
	/**
	 * Escena principal.
	 * @extends Phaser.Scene
	 */

	constructor(planet, gravity, atmosColor) {
		super({ key: 'nivelVertical' });
		this.introDone 	= false;
	}

	init(){

	}

	/**
	 * Cargamos todos los assets que vamos a necesitar
	 */
	preload(){
		this.load.image('background', getImgV("universeBg.png"));
		this.load.image('planet', getImgV("Mars.png"));
		this.load.spritesheet("spaceship",getImgV("spaceship.png"), {frameWidth: SPACESHIP_WIDTH, frameHeight: SPACESHIP_HEIGHT});
	}
	
	/**
	* Creación de los elementos de la escena principal de juego
	*/
	create() {
		this.add.image(0, 0, 'background').setOrigin(0, 0);
		this.bg 	= new VerticalBackground(this,"Mars",0,0xFFD7A2);
		this.player = new Spaceship(this, VERTICAL_LEVELS_WIDTH/2, VERTICAL_LEVELS_HEIGHT- 50, 20);
		//this.player.setCollideWorldBounds(true);

        /*
		//Pintamos un fondo

		//Pintamos un botón de Empezar
		sprite.setInteractive(); // Hacemos el sprite interactivo para que lance eventos

		// Escuchamos los eventos del ratón cuando interactual con nuestro sprite de "Start"
	    sprite.on('pointerdown', pointer    => { console.log("pulsando"); });
	    sprite.on('pointerup', pointer      => { this.scene.start('animation'); /*Cambiamos a la escena de juego });
		sprite.on('pointerover', ()         => { console.log("hola") });
	    sprite.on('pointerout', ()          => { console.log("adios") });
        */

		//this.cursors = this.input.keyboard.createCursorKeys();
	}

	/**
	* Loop del juego
	*/
    update(){
		super.update();
		this.bg.launch();
		if(this.introDone){ this.player.handleMovement(); }
	}
}