class Message extends Phaser.Scene{
    constructor(){
        super("messageScene");
    }
    create(){
        //add background image
        this.backGround = this.add.tileSprite(0, 0, 640, 480, 'messageImage').setOrigin(0, 0)
        //text config
        let messageConfig = {
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
        //text
        this.add.text(game.config.width/2.5, game.config.height/4.5 - borderUISize - borderPadding * 0.3, 'Dear Squad', messageConfig).setOrigin(0.5)
        this.add.text(game.config.width/2, game.config.height/3.5 - borderUISize - borderPadding * 0.3, 'Since meeting you all last year, I can\'t ever imagine my life without you all.', messageConfig).setOrigin(0.5)
        this.add.text(game.config.width/2, game.config.height/2.5 - borderUISize - borderPadding * 0.3, 'No matter which paths we may walk along after college, I will always hold you all inside my heart', messageConfig).setOrigin(0.5)
        this.add.text(game.config.width/2, game.config.height/2 - borderUISize - borderPadding * 0.3, 'Thank you all for being wonderful friends and for all of the shared memories together', messageConfig).setOrigin(0.5)
        this.add.text(game.config.width/2, game.config.height/1.5 - borderUISize - borderPadding * 0.3, 'From, William (Liam) McCabe', messageConfig).setOrigin(0.5)

    }
}