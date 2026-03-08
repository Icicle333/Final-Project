class Menu extends Phaser.Scene{
    constructor(){
        super("menuScene");
    }
    preload() {
        this.load.image('tempPlayer', './assets/art/Icicle-1.png.png')
        this.load.image('tempCrab', './assets/art/fire bolt 2.png')
        this.load.audio('ahhh', './assets/sound/Scream.mp3')
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
            gameEnter: Phaser.Input.Keyboard.KeyCodes.ENTER, 
            compendium: Phaser.Input.Keyboard.KeyCodes.P
        })
    }   

    update() {
        if (Phaser.Input.Keyboard.JustDown(this.keys.gameEnter)){
            this.scene.start('walkScene');
        }

        if(Phaser.Input.Keyboard.JustDown(this.keys.compendium)){
            console.log("debug")
            this.scene.start('compendiumScene')
        }
    }
    

}