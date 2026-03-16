class TidePool5 extends Phaser.Scene{
    constructor(scene){
        super("tidepool5Scene")
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
        this.backGround = this.add.tileSprite(0, 0, 640, 480, 'backgroundTemp2').setOrigin(0, 0)
        //create random x values
        this.value1 = Phaser.Math.Between(300, 500)
        this.value2 = Phaser.Math.Between(100, 600)
        this.value3 = Phaser.Math.Between(50, 600)
        //load in animals
        this.testAnimal1 = new AquaAnimal(this, this.value1, 50, 'star').setScale(2).setInteractive()
        this.testAnimal2 = new AquaAnimal(this, this.value2, 150, 'fish').setScale(5).setInteractive()
        this.testAnimal3 = new AquaAnimal(this, this.value3, 450, 'fish').setScale(6).setInteractive()
        
        this.animals = this.add.group([this.testAnimal1, this.testAnimal2, this.testAnimal3])
        //adds animal to compendium when clicked
        this.input.on('gameobjectdown', (pointer, animal) => {
            console.log('Clicked: ', animal)
            if(animal.texture == 'star'){
                starFound = true
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
            this.scene.start("walk2Scene")
        }
    }
}