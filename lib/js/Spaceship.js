//export default class Spaceship extends Phaser.GameObjects.Sprite{
    export default class Spaceship extends Phaser.Physics.Arcade.Sprite{
    create_Anim(key,x,y,framerate){
        createAnim(this.scene, key, 'spaceship', x, y, framerate, -1);
    }
    constructor(scene, x, y){
        super(scene, x, y);
        this.vDirection = "NE";
        this.hDirection = "";
        this.speedX = 0;
        this.speedY = 0;
        this.scene.add.existing(this);
        
        
        //load of graphics:
        this.scene.load.spritesheet("spaceship",getImgV("spaceship"), {frameWidth: SPACESHIP_WIDTH, frameHeight: SPACESHIP_HEIGHT});
    }


   

    
    create(){
        this.setTexture("spaceship");
        this.setFrame(1);
       
        //creating animations:        
        this.create_Anim("NE",        1,  1,  1);
        this.create_Anim("leftNE",    0,  0,  1);
        this.create_Anim("rightNE",   3,  3,  1);
        this.create_Anim("UP",        4,  5, 10);
        this.create_Anim("DOWN",      6,  7, 10);
        this.create_Anim("leftUP",    8,  9, 10);
        this.create_Anim("rightUP",  12, 13, 10);
        this.create_Anim("leftDOWN", 10, 11, 10);
        this.create_Anim("rightDOWN",14, 15, 10);
        this.scene.physics.add.existing(this);
        this.scene.physics.world.enable(this);
        

                
        this.setDepth(999);

        this.setCollideWorldBounds(true);
       
    
    }
    
    handleMovement(t, dt){
        if(this.scene.introDone){
            this.vDirection = "NE";
            
            //velocidad vertical:
            if(this.scene.w.isDown){ 
                this.vDirection = "UP";
                this.speedY -= SPACESHIP_SPEED;
            }
            else if(this.scene.s.isDown){
                this.vDirection = "DOWN";
                this.speedY += SPACESHIP_SPEED;
            }
            
            //velocidad horizontal:
            if(this.scene.a.isDown){
                this.hDirection = "left";
                this.speedX -= SPACESHIP_SPEED;
            }
            else if(this.scene.d.isDown){
                this.hDirection = "right";
                this.speedX += SPACESHIP_SPEED;
            }
            else{ this.hDirection = ""; }
            
            this.x += this.speedX;
            this.y += this.speedY;
            this.play(this.hDirection+this.vDirection,true);
        }
        else { this.play("NE",true); }
    }
    

    preUpdate(t, dt){
        super.preUpdate(t, dt);
        //handleMovement(t, dt);
    }
}