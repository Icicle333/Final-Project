class TidePool1 extends Phaser.Scene{
    constructor(scene){
        super("tidepool1Scene")
        this.toReturn = scene

    }

    create(){
         //create a bubble particle:
        this.bubbleFollow = this.add.particles(0, 0, 'bubble', {
            color: [0x0000FF],
            speed: 50,
            scale: {start: 1, end: 0},
            frequency: 10
        })
        this.bubbleFollow.startFollow(this.input.activePointer).setDepth(1)
       
        //load in images for the set tidepool
        if(tutorialFinished == true && resetOnce == false){
            starFound = false
            scFound = false
            fishFound = false
        }
        this.backGround = this.add.tileSprite(0, 0, 640, 480, 'backgroundTemp2').setOrigin(0, 0)
        this.animal1 = new AquaAnimal(this, 350, 50, 'mussel').setScale(2).setInteractive()
        this.animal2 = new AquaAnimal(this, 150, 150, 'sc').setScale(5).setInteractive()
        this.animal3 = new AquaAnimal(this, 550, 450, 'urchin').setScale(6).setInteractive()
        
        this.animals = this.add.group([this.animal1, this.animal2, this.animal3])
        //adds animal to compendium when clicked
        this.input.on('gameobjectdown', (pointer, animal) => {
            console.log('Clicked: ', animal)
            if(animal.texture == 'mussel'){
                musselFound = true
            }
            if(animal.texture == 'sc'){
                scFound = true
            }
            if(animal.texture == 'fish'){
                fishFound = true
            }
            animal.found = true;
            animal.setTint('#000000')
        })
        //sets up keys
        compendium = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.P)
        returnGame = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER)
    }

    update(){
        if(Phaser.Input.Keyboard.JustDown(compendium)){
            this.scene.start("compendiumScene")
        }
        if(Phaser.Input.Keyboard.JustDown(returnGame)){
            console.log("debug")
            this.scene.start("walk1Scene")
        }
    }
}