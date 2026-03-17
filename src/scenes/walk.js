class Walk extends Phaser.Scene{
    constructor(){
        super("walkScene");
    }
    init(){
        this.canMove = true;
    }
    create(){
        //animation for player getting hurt
        
        sound = this.sound.add('backgroundMusic', {loop: true})
        sound.play()
        this.anims.create({
            key: 'hurt',
            frames: this.anims.generateFrameNumbers('playerAnim', {
                start: 0,
                end: 2
            }),
            frameRate: 10,
            repeat: -1
        })
        this.anims.create({
            key: 'walk',
            frames: this.anims.generateFrameNumbers('playerAnim', {
                start: 2,
                end: 2
            }),

        })
        this.physics.world.setBounds(0, 0, 640, 480)
        //Sprites
        
        this.player = new Character(this, game.config.width/2, game.config.height - borderUISize - borderPadding, 'player', 0).setDepth(1)
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
        this.tempPool.body.setImmovable(true)
        this.ouch = this.sound.add('ahhh')
        this.physics.add.collider(this.player, this.crab, (Player, crab) => {
            this.player.play('hurt')
            
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
            sound.stop()
            this.scene.start("tidepoolScene")
        })

        //adds flashing arrow once you have completed an area
        //will serve as a replacement for animation of scene
        if(tidePools0Found >= 1){
            this.arrow1 = this.add.sprite(620, 100, 'arrow')
            this.arrow1.setTint(0x000000)
            
            this.arrow2 = this.add.sprite(620, 200, 'arrow')
            this.arrow2.setTint(0x000000)
            
            this.arrow3 = this.add.sprite(620, 300, 'arrow')
            this.arrow3.setTint(0x000000)
            
            this.arrow4 = this.add.sprite(620, 400, 'arrow')
            this.arrow4.setTint(0x000000)
            
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
            this.physics.moveToObject(this.crab, this.player, 100)

        }
       if(tidePools0Found >= 1){
        if(this.player.x == 620){
            sound.stop()
            this.scene.start("walk1Scene")
        }
       }


       
    }
    onEvent(){
        this.canMove = true
        this.player.clearTint();
        this.player.anims.stop()
        this.player.anims.play('walk')
    }
    
}