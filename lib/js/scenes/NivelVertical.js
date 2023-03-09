/**
 * Escena de Título.
 * @extends Phaser.Scene
 */

import Spaceship from '../Spaceship.js';
export default class NivelVertical extends Phaser.Scene {
	/**
	 * Escena principal.
	 * @extends Phaser.Scene
	 */

	constructor() {
		super({ key: 'nivelVertical' });
		this._gravity = 0;
		this.player  = null;
		this.cursors = null;
	}

	init(){

	}

	/**
	 * Cargamos todos los assets que vamos a necesitar
	 */
	preload(){
		//this.load.spritesheet('spaceship', getImgV("spaceShip.png"), { frameWidth: SPACESHIP_WIDTH, frameHeight: SPACESHIP_HEIGHT });
		this.load.image('background', getImgV("universeBg.png"));
		this.load.spritesheet("spaceship",getImgV("spaceship.png"), {frameWidth: SPACESHIP_WIDTH, frameHeight: SPACESHIP_HEIGHT});
		/*
		this.load.image('castle', 'assets/castle.gif');
		this.load.spritesheet('box', 'assets/Box/box.png', {frameWidth: 64, frameHeight: 64})
        */
	}
	
	/**
	* Creación de los elementos de la escena principal de juego
	*/
	create() {
		this.add.image(0, 0, 'background').setOrigin(0, 0);
		
		this.player = new Spaceship(this, 100, 300, 20);//this.physics.add.sprite(100, 300, 'spaceship', getImgV("spaceship.png"));
		//this.player.setCollideWorldBounds(true);

        /*
		//Pintamos un fondo

		//Pintamos un botón de Empezar
		var sprite = this.add.image(this.sys.game.canvas.width/2, this.sys.game.canvas.height/2, 'start')
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

	}
}