class Compendium extends Phaser.Scene{
    constructor(){
        super('compendiumScene')
    }

    create(){
        this.input.on("pointerdown", (pointer) => {
            console.log("debug")
        })
        this.keys = this.input.keyboard.addKeys({
            gameReturn: Phaser.Input.Keyboard.KeyCodes.ENTER, 
           
        })
    }
    update(){
        if (Phaser.Input.Keyboard.JustDown(this.keys.gameReturn)){
            this.scene.start('walkScene');
        }
    }
}