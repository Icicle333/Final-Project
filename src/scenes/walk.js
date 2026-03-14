class Walk extends Phaser.Scene{
    constructor(){
        super("walkScene");
    }
    init(){
        this.canMove = true;
    }
    create(){
        this.physics.world.setBounds(0, 0, 640, 480)
        //Sprites
        
        this.player = new Character(this, game.config.width/2, game.config.height - borderUISize - borderPadding, 'player').setDepth(1)
        this.player.body.setCollideWorldBounds(true)
        this.crab = new Crab(this, 150, 250, 'crab').setDepth(1)
        this.crab.body.setCollideWorldBounds(true)
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
        
        //Crab collision with player
        this.tempPool = this.physics.add.sprite(250, 250, 'tb').setScale(4)
        this.tempPool.body.setCircle(5)
        this.tempPool.body.setOffset(13, 11)
        this.ouch = this.sound.add('ahhh')
        this.physics.add.collider(this.player, this.crab, (Player, crab) => {
            crab.x = 50
            crab.y = 50
            crab.body.setVelocity(0)
            this.canMove = false
            this.ouch.play()
            Player.setTint(0xffff00)
            this.timeEvent = this.time.addEvent({
                delay: 3000,
                callback:this.onEvent,
                callbackScope: this
            })
        })
        //Enters Tidepool
        this.physics.add.collider(this.player, this.tempPool, (Player, pool) =>{
            if(tidePool0_1Found == false){
                tidePool0_1Found = true
                tidePools0Found += 1
            }
            this.scene.start("tidepoolScene")
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
            this.physics.moveToObject(this.crab, this.player, 100)

        }
       if(tidePools0Found >= 1){
        if(this.player.x == 620){
            this.scene.start("walk1Scene")
        }
       }


       
    }
    onEvent(){
        this.canMove = true
        this.player.clearTint();
    }
    
}