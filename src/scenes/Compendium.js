class Compendium extends Phaser.Scene{
    constructor(){
        super('compendiumScene')
    }

    create(){
        let compendiumConfig = {
            fontFamily: 'Times New Roman',
            fontSize: '24ppx',
            backgroundColor: '#296017',
            color: '#dfbb29',
            align: 'right',
            padding : {
                top: 5,
                bottom: 5
            },
            fixedWidth: 0
        }
        this.animalsLeft = 6;
        this.background = this.add.tileSprite(0, 0, 640, 480, 'tempBackgroundforCompendium').setOrigin(0, 0)
        this.input.on("pointerdown", (pointer) => {
            console.log("debug")
        })
        this.keys = this.input.keyboard.addKeys({
            gameReturn: Phaser.Input.Keyboard.KeyCodes.ENTER, 
           
        })
        if(fishFound == true){
            this.add.image(100, 250, 'fish').setScale(5)
            this.animalsLeft -= 1
        }
        if(scFound == true){
            this.add.image(150, 80, 'sc').setScale(5)
            this.animalsLeft -= 1
        }
        if(starFound == true){
            this.add.image(250, 400, 'star').setScale(5)
            this.animalsLeft -= 1
        }
        if(urchinFound == true){
            this.add.image(350, 35, 'urchin').setScale(5)
            this.animalsLeft -= 1
        }
        if(crabFound == true){
            this.add.image(450, 35, 'collectableCrab').setScale(5)
        }
        if(musselFound == true){
            this.add.image(50, 352, 'mussel').setScale(5)
        }
        this.add.text(game.config.width/100, game.config.height/2 - 150, this.animalsLeft, compendiumConfig)
    }
    update(){
        if (Phaser.Input.Keyboard.JustDown(this.keys.gameReturn)){
            console.log("debug")
            this.scene.start('walkScene');
        }
        
    }
}