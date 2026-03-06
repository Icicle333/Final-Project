class Menu extends Phaser.Scene{
    constructor(){
        super("menuScene");
    }
    
    create(){
        let menuConfig = {
            fontFamily : 'Courier',
            fontSize : '28px',
            backgroundColor: '#F3B141',
            color: '#843605',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }
        
        this.add.text(game.config.width/2, game.config.height/2 - borderUISize - borderPadding, 'TidePooling', menuConfig).setOrigin(0.5)
        this.keys = this.input.keyboard.addKeys({
            walkUp1: Phaser.Input.Keyboard.KeyCodes.W,
            walkUp2: Phaser.Input.Keyboard.KeyCodes.Left,
            walkDown1: Phaser.Input.Keyboard.KeyCodes.S,
            walkDown2: Phaser.Input.Keyboard.KeyCodes.DOWN,
            walkLeft1: Phaser.Input.Keyboard.KeyCodes.A,
            walkLeft2: Phaser.Input.Keyboard.KeyCodes.LEFT,
            walkRight1: Phaser.Input.Keyboard.KeyCodes.D,
            walkRight2: Phaser.Input.Keyboard.KeyCodes.RIGHT
        })
    }   
    

}