class Walk extends Phaser.Scene{
    constructor(){
        super("walkScene");
    }
    init(){
        this.canMove = true;
    }
    create(){
        this.player = new Character(this, game.config.width/2, game.config.height - borderUISize - borderPadding, 'tempPlayer')
        this.crab = new Crab(this, 50, 50, 'tempCrab')
        walkUp1 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W)
        walkUp2 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP)
        walkDown1 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S)
        walkDown2 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN)
        walkLeft1 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A)
        walkLeft2 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT)
        walkRight1 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D)
        walkRight2 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT)
        compendium = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.P)
        this.ouch = this.sound.add('ahhh')
        this.physics.add.collider(this.player, this.crab, (Player, crab) => {
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
        
    }

    update(){
       if(Phaser.Input.Keyboard.JustDown(compendium)){
            this.scene.start('compendiumScene')
        }
        if(this.canMove == true){
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
            this.physics.moveToObject(this.crab, this.player, 50)

        }
       


       
    }
    onEvent(){
        this.canMove = true
        this.player.clearTint();
    }
    
}