class Menu extends Phaser.Scene{
    constructor(){
        super("menuScene");
    }
    preload(){

    }
    create(){
        let menuConfig = {
            fontFamily: 'Courier',
            fontSize: '28px',
            backgroundColor: '#F3B141',
            color: '#000000',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }

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