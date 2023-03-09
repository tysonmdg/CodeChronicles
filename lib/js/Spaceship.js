export default class Spaceship extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, speed){
        super(scene, x, y, "spaceship", 1);
        this.scene.add.existing(this);
        this.vDirection = "NE";
        this.hDirection = "";
        this.speedX = 0;
        this.speedY = 0;


        this.scene.anims.create({
            key: "NE",
            frames: this.scene.anims.generateFrameNumbers('spaceship', { start: 1, end: 1}),
            frameRate: 1,
            repeat: -1
        });

        this.scene.anims.create({
            key: "leftNE",
            frames: this.scene.anims.generateFrameNumbers('spaceship', { start: 0, end: 0}),
            frameRate: 1,
            repeat: -1
        });

        this.scene.anims.create({
            key: "rightNE",
            frames: this.scene.anims.generateFrameNumbers('spaceship', { start: 3, end: 3}),
            frameRate: 1,
            repeat: -1
        });

        this.scene.anims.create({
            key: "UP",
            frames: this.scene.anims.generateFrameNumbers('spaceship', { start: 4, end: 5}),
            frameRate: 10,
            repeat: -1
        });

        this.scene.anims.create({
            key: "DOWN",
            frames: this.scene.anims.generateFrameNumbers('spaceship', { start: 6, end: 7}),
            frameRate: 10,
            repeat: -1
        });

        this.scene.anims.create({
            key: "leftUP",
            frames: this.scene.anims.generateFrameNumbers('spaceship', { start: 8, end: 9}),
            frameRate: 10,
            repeat: -1
        });

        this.scene.anims.create({
            key: "rightUP",
            frames: this.scene.anims.generateFrameNumbers('spaceship', { start: 12, end: 13}),
            frameRate: 10,
            repeat: -1
        });

        this.scene.anims.create({
            key: "leftDOWN",
            frames: this.scene.anims.generateFrameNumbers('spaceship', { start: 10, end: 11}),
            frameRate: 10,
            repeat: -1
        });

        this.scene.anims.create({
            key: "rightDOWN",
            frames: this.scene.anims.generateFrameNumbers('spaceship', { start: 14, end: 15}),
            frameRate: 10,
            repeat: -1
        });

        this.a = this.scene.input.keyboard.addKey("A");
		this.s = this.scene.input.keyboard.addKey("S");
		this.d = this.scene.input.keyboard.addKey("D");
		this.w = this.scene.input.keyboard.addKey("W");

    }

    preUpdate(t, dt){
        super.preUpdate(t, dt);
        this.vDirection = "NE";
        
        //velocidad vertical:
        if(this.w.isDown){ 
            this.vDirection = "UP";
            this.speedY -= SPACESHIP_SPEED;
        }
        else if(this.s.isDown){
            this.vDirection = "DOWN";
            this.speedY += SPACESHIP_SPEED;
        }
        
        //velocidad horizontal:
        if(this.a.isDown){ 
            //this.play("left"+this.vDirection,true);
            this.hDirection = "left";
            this.speedX -= SPACESHIP_SPEED;
        }
        else if(this.d.isDown){ 
            //this.play("right"+this.vDirection,true); 
            this.hDirection = "right";
            this.speedX += SPACESHIP_SPEED;
        }

        this.x += this.speedX;
        this.y += this.speedY;
        this.play(this.hDirection+this.vDirection,true);
    }
}