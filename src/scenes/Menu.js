class Menu extends Phaser.Scene{
    constructor(){
        super("menuScene");
    }
    preload() {
        //load in images
        this.load.image('tempPlayer', './assets/art/Icicle-1.png.png')
        this.load.image('tempCrab', './assets/art/fire bolt 2.png')
        this.load.image('fish', './assets/art/Fish.png')
        this.load.image('star', './assets/art/Star.png')
        this.load.image('sc', './assets/art/Sea Cactus Thing.png')
        this.load.image('tb', './assets/art/Temp TidePool.png')
        this.load.image('backgroundTemp2', './assets/art/tempBackground2_1_640x480.jpg')
        this.load.image('backgroundForTitle', './assets/art/tempBackground_1_640x480.jpg')
        this.load.image('tempBackgroundforCompendium', './assets/art/TempBackgroundForCompendium_cropped.jpg')
        this.load.image('crab', './assets/art/Crab.png')
        this.load.image('collectableCrab', './assets/art/Crab for Tidepool.png')
        this.load.image('mussel', './assets/art/Mussel-1.png.png')
        this.load.image('urchin', './assets/art/Urchin-1.png.png')
        //load in sounds
        this.load.audio('ahhh', './assets/sound/Scream.mp3')
        this.load.audio('backgroundMusic', './assets/sound/CurrBackgroundMusic.wav')

        }
    create(){
        this.backGround = this.add.tileSprite(0, 0, 640, 480, 'backgroundForTitle').setOrigin(0, 0)
        this.sound.add('backgroundMusic', {loop: true})
        this.sound.play('backgroundMusic')
        let menuConfig = {
            fontFamily : 'Courier',
            fontSize : '18px',
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
        this.add.text(game.config.width/2, game.config.height/2 - borderUISize - borderPadding+50, "To Move, press WASD or Arrow", menuConfig).setOrigin(0.5)
        this.add.text(game.config.width/2, game.config.height/2 - borderUISize - borderPadding+100, "To Enter Game, press Enter, to get to Compendium press P", menuConfig).setOrigin(0.5)
        this.add.text(game.config.width/2, game.config.height/2 - borderUISize - borderPadding+150, "Walk up to a tidepool to look in it, don't get hit by crabs", menuConfig).setOrigin(0.5)
        this.add.text(game.config.width/2, game.config.height/2 - borderUISize - borderPadding+200, "click on animals to add them to your compendium", menuConfig).setOrigin(0.5)
        
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