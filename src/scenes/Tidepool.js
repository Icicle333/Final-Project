class TidePool extends Phaser.Scene{
    constructor(scene){
        super("tidepoolScene")
        this.toReturn = scene

    }

    create(){
        //create a bubble particle:
        this.bubbleFollow = this.add.particles(this.input.x, this.input.y, 'bubble', {
            color: [0x0000FF],
            speed: 50,
            scale: {start: 1, end: 0},
            frequency: 10
        })
        this.bubbleFollow.startFollow(this.input.activePointer).setDepth(1)
       
        //load in images for the set tidepool
        this.backGround = this.add.tileSprite(0, 0, 640, 480, 'backgroundTemp2').setOrigin(0, 0)
        this.testAnimal1 = new AquaAnimal(this, 350, 50, 'star').setScale(2).setInteractive()
        this.testAnimal2 = new AquaAnimal(this, 150, 150, 'sc').setScale(5).setInteractive()
        this.testAnimal3 = new AquaAnimal(this, 550, 450, 'fish').setScale(6).setInteractive()
        
        this.animals = this.add.group([this.testAnimal1, this.testAnimal2, this.testAnimal3])
        //adds animal to compendium when clicked
        this.input.on('gameobjectdown', (pointer, animal) => {
            console.log('Clicked: ', animal)
            if(animal == this.testAnimal1){
                starFound = true
            }
            if(animal == this.testAnimal2){
                scFound = true
            }
            if(animal == this.testAnimal3){
                fishFound = true
            }

            animal.found = true;
            animal.setTint(0xFF0000)
        })
        //sets up keys
        
        compendium = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.P)
        returnGame = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER)
        tutorialFinished = true
    }

    update(){
        
        if(Phaser.Input.Keyboard.JustDown(compendium)){
            this.scene.start("compendiumScene")
        }
        if(Phaser.Input.Keyboard.JustDown(returnGame)){
            console.log("debug")
            this.scene.start("walkScene")
        }
    }
}