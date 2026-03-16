class Credit extends Phaser.Scene{
    constructor(){
        super("creditsScene");
    }
    create(){
        //background image
        this.backGround = this.add.tileSprite(0, 0, 640, 480, 'creditsImage').setOrigin(0, 0)
        //credit text config
        let creditsConfig = {
            fontFamily : 'Courier',
            fontSize : '10px',
            backgroundColor: '#169934',
            color: '#1a27b9',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }
        //keybind
        this.keys = this.input.keyboard.addKeys({
            gameEnter: Phaser.Input.Keyboard.KeyCodes.ENTER 
        })
        //text
        this.add.text(game.config.width/2.5, game.config.height/2.5 - borderUISize - borderPadding * 0.3, 'Press Enter to return to Title Screen', creditsConfig).setOrigin(0.5)

        this.add.text(game.config.width/2.5, game.config.height/1.5 - borderUISize - borderPadding * 0.3, 'Background images courtesy of my friend group discord server', creditsConfig).setOrigin(0.5)
        this.add.text(game.config.width/2.5, game.config.height/1.3 - borderUISize - borderPadding * 0.3, 'Taken March of 2026', creditsConfig).setOrigin(0.5)
        this.add.text(game.config.width/2.5, game.config.height/1.2 - borderUISize - borderPadding * 0.3, 'Player hurt sound done my friend and IGC groupmate, Marvin Frausto', creditsConfig).setOrigin(0.5)
        this.add.text(game.config.width/2.4, game.config.height - borderUISize - borderPadding * 0.3, 'All other assets, code, and art created by me using Piscel, Visual Studio, and Beep Box', creditsConfig).setOrigin(0.5)
    }
    update() {
        //key to leave scene
        if (Phaser.Input.Keyboard.JustDown(this.keys.gameEnter)){
            this.scene.start('menuScene');
        }
    }
}