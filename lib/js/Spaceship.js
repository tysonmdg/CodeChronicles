export default class Spaceship extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, speed){
        super(scene, x, y, "spaceship", 1);
        this.scene.add.existing(this);
        this.direction = "UP";
        this.speedX = 0;
        this.speedY = 0;


        this.scene.anims.create({
            key: "standing",
            frames: this.scene.anims.generateFrameNumbers('spaceship', { start: 1, end: 1}),
            frameRate: 1,
            repeat: -1
        });

        this.scene.anims.create({
            key: "up",
            frames: this.scene.anims.generateFrameNumbers('spaceship', { start: 4, end: 5}),
            frameRate: 10,
            repeat: -1
        });

        this.scene.anims.create({
            key: "down",
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

        //this.on('animationcomplete', () => { this.play("standing",true); });

        this.a = this.scene.input.keyboard.addKey("A");
		this.s = this.scene.input.keyboard.addKey("S");
		this.d = this.scene.input.keyboard.addKey("D");
		this.w = this.scene.input.keyboard.addKey("W");

    }

    preUpdate(t, dt){
        super.preUpdate(t, dt);

        if(this.w.isDown){ this.direction = "UP"; }
        else if(this.s.isDown){ this.direction = "DOWN"; }

        if(this.a.isDown){ 
            this.play("left"+this.direction,true);
            this.speedX -= SPEED;
        }
        else if(this.d.isDown){ 
            this.play("right"+this.direction,true); 
            this.speedX += SPEED;
        }
        else if(this.w.isDown){ 
            this.play("up",true); 
            this.speedY -= SPEED;
        }
        else if(this.s.isDown){ 
            this.play("down",true); 
            this.speedY += SPEED;
        }
        else { 
            this.play("standing",true); 
        }

        this.x += this.speedX;
        this.y += this.speedY;
    }
}