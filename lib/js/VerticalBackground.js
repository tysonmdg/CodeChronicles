export default class VerticalBackground extends Phaser.GameObjects.Sprite{
    constructor(scene, planet, gravity, atmosColor){
        super(scene, 0, 0);
        this.scene      = scene;
        this.planet 	= planet;
		this._gravity  	= gravity;
		this.atmosColor = atmosColor;

        this.auxSpeed = 0;

        this.graphics = this.scene.add.graphics();
		this.graphics.fillStyle(this.atmosColor, 1);
		this.atmosphere = this.graphics.fillRect(0, 0, VERTICAL_LEVELS_WIDTH, VERTICAL_LEVELS_HEIGHT);
		
		this.planetImg = this.scene.add.image(0, VERTICAL_LEVELS_HEIGHT, 'planet').setOrigin(0, 1);
    }

    launch(){
        if(!this.scene.introDone){
            this.auxSpeed += 0.02;
            this.scene.player.play("UP",true);
            if(this.auxSpeed <= 2){
                this.planetImg.y += this.auxSpeed;
            }
            else if (this.atmosphere.alpha > 0){
                this.atmosphere.alpha -= 0.005;
                this.scene.player.speedY = -SPACESHIP_SPEED*2;
                this.scene.player.y -= SPACESHIP_SPEED*2;
            }
            else{ 
                this.scene.introDone = true; }
        }
    }
}