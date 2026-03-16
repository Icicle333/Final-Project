class Walk1 extends Phaser.Scene{
    constructor(){
        super("walk1Scene");
    }
    init(){
        this.canMove = true;
    }
    create(){
        //Sprites
        this.physics.world.setBounds(0, 0, 640, 480)
        this.player = new Character(this, game.config.width/2, game.config.height - borderUISize - borderPadding, 'player').setDepth(1)
        this.player.body.setCollideWorldBounds(true)
        this.crab1 = new Crab(this, 150, 250, 'tempCrab').setDepth(1)
        this.crab2 = new Crab(this, 350, 255, 'tempCrab').setDepth(1)
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
        this.tidePool1 = this.physics.add.sprite(250, 250, 'tb').setScale(4)
        this.tidePool1.body.setCircle(5)
        this.tidePool1.body.setOffset(13, 11)
        this.tidePool1.body.setImmovable(true)

        this.tidePool2 = this.physics.add.sprite(100, 40, 'tb').setScale(6)
        this.tidePool2.body.setCircle(5)
        this.tidePool2.body.setOffset(13, 11)
        this.tidePool2.body.setImmovable(true)

        this.tidePool3 = this.physics.add.sprite(450, 300, 'tb').setScale(3)
        this.tidePool3.body.setCircle(5)
        this.tidePool3.body.setOffset(13,11)
        this.tidePool3.body.setImmovable(true)

        //groups tidepools together
        this.tidePool = this.add.group([this.tidePool1, this.tidePool2, this.tidePool3])
        
        this.ouch = this.sound.add('ahhh')
        this.physics.add.collider(this.player, this.crab, (Player, crab) => {
            if(crab == this.crab1){
                crab.x = 25
                crab.y = 50
            }
            if(crab === this.crab2){
                crab.x = 350
                crab.y = 50
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
        this.physics.add.collider(this.player, this.tidePool, (Player, pool) =>{
            if(pool == this.tidePool1){
                if(tidePool1_1Found == false){
                    tidePool1_1Found = true
                    tidePools1Found += 1
                }
                this.scene.start("tidepool1Scene")

            }
            if(pool == this.tidePool2){
                if(tidePool1_2Found == false){
                    tidePool1_2Found = true
                    tidePools1Found += 1
                }
                this.scene.start("tidepool2Scene")
            }
            if(pool == this.tidePool3){
                if(tidePool1_3Found == false){
                    tidePool1_3Found == true
                    tidePools1Found +=1
                }
                this.scene.start("tidepool3Scene")
            }
            
        })
        if(tidePools1Found >= 3){
            this.arrow1 = this.add.sprite(620, 100, 'arrow')
            this.arrow2 = this.add.sprite(620, 200, 'arrow')
            this.arrow3 = this.add.sprite(620, 300, 'arrow')
            this.arrow4 = this.add.sprite(620, 400, 'arrow')
            this.tweens.add({
                targets: [this.arrow1, this.arrow2, this.arrow3, this.arrow4],
                alpha: 0,
                duration: 500,
                ease: 'Linear',
                yoyo: true,
                repeat: -1
            })
        
        }
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
        if(this.player.x == 20){
            this.scene.start("walkScene")
        }
        if(tidePools1Found >= 3){
            if(this.player.x == 620){
                this.scene.start("walk2Scene")
            }
        }
       


       
    }
    onEvent(){
        this.canMove = true
        this.player.clearTint();
    }
    
}