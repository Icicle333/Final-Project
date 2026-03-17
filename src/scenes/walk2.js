class Walk2 extends Phaser.Scene{
    constructor(){
        super("walk2Scene");
    }
    init(){
        this.canMove = true;
    }
    create(){
        sound = this.sound.add('backgroundMusic', {loop: true})
        sound.play()
        //animation for player getting hurt
        this.anims.create({
            key: 'hurt',
            frames: this.anims.generateFrameNumbers('playerAnim', {
                start: 0,
                end: 2
            }),
            frameRate: 10,
            repeat: -1
        })
        //animation or frame for when the player can move again
        this.anims.create({
            key: 'walk',
            frames: this.anims.generateFrameNumbers('playerAnim', {
                start: 2,
                end: 2
            }),

        })
        //Sprites
        this.physics.world.setBounds(0, 0, 640, 480)
        this.player = new Character(this, game.config.width/2, game.config.height - borderUISize - borderPadding, 'player').setDepth(1)
        this.player.body.setCollideWorldBounds(true)
        this.crab = new Crab(this, 150, 250, 'crab').setDepth(1)
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
        //Crab collision with player and Tidepool collision
        this.tidePool4 = this.physics.add.sprite(350, 150, 'tb').setScale(4)
        this.tidePool4.body.setCircle(5)
        this.tidePool4.body.setOffset(13, 11)

        this.tidePool
        this.ouch = this.sound.add('ahhh')
        this.physics.add.collider(this.player, this.crab, (Player, crab) => {
            this.player.play('hurt')
            crab.x = 50
            crab.y = 50
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
        this.tidePool = this.add.group([this.tidePool1, this.tidePool2, this.tidePool3, this.tidePool4])
        this.physics.add.collider(this.player, this.tidePool, (Player, pool) =>{
            sound.stop()
            if(pool == this.tidePool1){
                if(tidePool2_1Found == false){
                    tidePool2_1Found = true
                    tidePools2Found += 1
                }
                this.scene.start("tidepool4Scene")

            }
            if(pool == this.tidePool2){
                if(tidePool2_2Found == false){
                    tidePool2_2Found = true
                    tidePools2Found += 1
                }
                this.scene.start("tidepool5Scene")
            }
            if(pool == this.tidePool3){
                if(tidePool2_3Found == false){
                    tidePool2_3Found == true
                    tidePools2Found +=1
                }
                this.scene.start("tidepool6Scene")
            }
            if(pool == this.tidePool4){
                if(tidePool2_4Found == false){
                    tidePool2_4Found = true
                    tidePools2Found += 1
                }
                this.scene.start("tidepool7Scene")
            }
            
        })
        if(scFound && fishFound && starFound && urchinFound && musselFound && crabFound){
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
            this.physics.moveToObject(this.crab, this.player, 156)

        }
        if(this.player.x == 20){
            this.scene.start("walk1Scene")
        }
       if(scFound && fishFound && starFound && urchinFound && musselFound && crabFound){
            if(this.player.x == 620){
                this.scene.start("messageScene")
            }
        }


       
    }
    onEvent(){
        this.canMove = true
        this.player.clearTint();
        this.player.anims.stop();
        this.player.anims.play('walk')
    }
    
}