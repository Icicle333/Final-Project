class Compendium extends Phaser.Scene{
    constructor(){
        super('compendiumScene')
    }

    create(){
        this.background = this.add.tileSprite(0, 0, 640, 480, 'tempBackgroundforCompendium').setOrigin(0, 0)
        this.input.on("pointerdown", (pointer) => {
            console.log("debug")
        })
        this.keys = this.input.keyboard.addKeys({
            gameReturn: Phaser.Input.Keyboard.KeyCodes.ENTER, 
           
        })
        if(fishFound = true){
            this.testAnimal3 = new AquaAnimal(this, 550, 450, 'fish').setScale(6).setInteractive()
        }
    }
    update(){
        if (Phaser.Input.Keyboard.JustDown(this.keys.gameReturn)){
            console.log("debug")
            this.scene.start('walkScene');
        }
    }
}