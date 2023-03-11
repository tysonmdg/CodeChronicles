export default class VerticalBackground extends Phaser.GameObjects.Sprite{
    constructor(scene){
        super(scene, 0, 0);
        this.scene = scene;
        this.auxSpeed = 0;

        // Carga la imagen 'planet' usando 'load'
        this.scene.load.image('planet', getImgV(this.scene.planet));
    }

    create(){
        this.graphics = this.scene.add.graphics();
        let st = this.scene.planetSettings[this.scene.planet];
		this.graphics.fillStyle(st["atmosColor"], 1);
		this.atmosphere = this.graphics.fillRect(0, 0, VERTICAL_LEVELS_WIDTH, VERTICAL_LEVELS_HEIGHT);
        this.atmosphere.alpha = st["transparency"];
        this.planetImg = this.scene.add.image(0, VERTICAL_LEVELS_HEIGHT, 'planet').setOrigin(0, 1);
    }

    launch(){

        if(!this.scene.introDone){
            this.auxSpeed += 0.03;
            this.scene.player.play("UP",true);
            if(this.planetImg.y < VERTICAL_LEVELS_HEIGHT + this.planetImg.height){
                this.planetImg.y += this.auxSpeed;
            }
            else if (this.atmosphere.alpha > 0){
                this.atmosphere.alpha -= 0.005;
                this.scene.player.speedY = -SPACESHIP_SPEED*2;
                this.scene.player.y -= SPACESHIP_SPEED*2;
            }
            else{ this.scene.introDone = true; }
        }
    }
}