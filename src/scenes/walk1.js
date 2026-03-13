class Walk1 extends Phaser.Scene{
    constructor(){
        super("walk1Scene");
    }
    init(){
        this.canMove = true;
    }
    create(){
        //Sprites
        this.player = new Character(this, game.config.width/2, game.config.height - borderUISize - borderPadding, 'tempPlayer').setDepth(1)
        this.crab1 = new Crab(this, 150, 250, 'tempCrab').setDepth(1)
        this.crab2 = new Crab(this, 350, 55, 'tempCrab').setDepth(1)
        this.crab = this.add.group([this.crab1, this.crab2])
        this.backGround = this.add.tileSprite(0, 0, 640, 480, 'backgroundForTitle').setOrigin(0, 0)
        
        //Keybinding Player Movement
        walkUp1 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W)
        walkUp2 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP)
        walkDown1 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S)
        walkDown2 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN)
        walkLeft1 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A)
        walkLeft2 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT)
        walkRight1 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D)
        walkRight2 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT)
        compendium = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.P)
        
        //Crab collision with player and Tidepool collision
        this.tempPool1 = this.physics.add.sprite(250, 250, 'tb').setScale(4)
        this.tempPool1.body.setCircle(5)
        this.tempPool1.body.setOffset(13, 11)
        this.ouch = this.sound.add('ahhh')
        this.physics.add.collider(this.player, this.crab, (Player, crab) => {
            if(crab == this.crab1){
                crab.x = 25
                crab.y = 50
            }
            if(crab === this.crab2){
                crab.x = 350
                crab.y = 220
            }
            crab.body.setVelocity(0)
            this.canMove = false
            this.ouch.play()
            Player.setTint("#ffff00")
            this.timeEvent = this.time.addEvent({
                delay: 3000,
                callback:this.onEvent,
                callbackScope: this
            })
        })
        //Enters Tidepool, create group and set each specific group to the specific pool
        this.physics.add.collider(this.player, this.tempPool1, (Player, pool) =>{
            this.scene.start("tidepool1Scene")
        })
        
    }

    update(){
        //Code to swap to Compendium Scene
       if(Phaser.Input.Keyboard.JustDown(compendium)){
            this.scene.start('compendiumScene')
        }
        if(this.canMove == true){
            //Player Movement
            if(walkUp1.isDown || walkUp2.isDown){
                this.player.y -= 2;
            }
            if(walkDown1.isDown || walkDown2.isDown){
                this.player.y += 2;
            }
            if(walkLeft1.isDown || walkLeft2.isDown){
                this.player.x -= 2;
            }
            if(walkRight1.isDown || walkRight2.isDown){
                this.player.x += 2;
            }
            this.physics.moveToObject(this.crab1, this.player, 150)
            this.physics.moveToObject(this.crab2, this.player, 50)

        }
       


       
    }
    onEvent(){
        this.canMove = true
        this.player.clearTint();
    }
    
}