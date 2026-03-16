class TidePool6 extends Phaser.Scene{
    constructor(scene){
        super("tidepool6Scene")
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
        //Bubble Particle
        this.bubbleFollow.startFollow(this.input.activePointer).setDepth(1)
       
        //load in images for the set tidepool
        this.backGround = this.add.tileSprite(0, 0, 640, 480, 'backgroundTemp2').setOrigin(0, 0)
        //Creates a random x variable for this tidepool
        this.value1 = Phaser.Math.Between(300, 400)
        this.value2 = Phaser.Math.Between(100, 200)
        this.value3 = Phaser.Math.Between(500, 600)
        //loads in animal sprites and tint them a bit
        this.animal1 = new AquaAnimal(this, this.value1, 50, 'collectableCrab').setScale(2).setInteractive()
        this.animal1.setTint(0x287233)
        this.animal2 = new AquaAnimal(this, this.value2, 150, 'collectableCrab').setScale(5).setInteractive()
        this.animal2.setTint(0xFF2301)
        this.animal3 = new AquaAnimal(this, this.value3, 450, 'collectableCrab').setScale(6).setInteractive()
        this.animal3.setTint(0x3E3B32)

        //groups animals together
        this.animals = this.add.group([this.animal1, this.animal2, this.animal3])
        
        //sound effect for clicking animal
        this.collection = this.sound.add('collection')
        
        //adds animal to compendium when clicked
        this.input.on('gameobjectdown', (pointer, animal) => {
            console.log('Clicked: ', animal)
            this.collection.play()
            if(animal.texture == 'collectableCrab'){
                starFound = true
            }
            animal.found = true;
            animal.setTint('#000000')
        })
        //sets up keys
        compendium = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.P)
        returnGame = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER)
    }

    update(){
        //keys to leave scene
        if(Phaser.Input.Keyboard.JustDown(compendium)){
            this.scene.start("compendiumScene")
        }
        if(Phaser.Input.Keyboard.JustDown(returnGame)){
            console.log("debug")
            this.scene.start("walk2Scene")
        }
    }
}