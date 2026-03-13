let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480, 
    render:{
        pixelArt: true
    },
    physics: {
        default: 'arcade',
        arcade: {
            debug: true
        }
    },
    scene: [ Menu, Walk, Walk1, Walk2, TidePool, TidePool1, TidePool2, TidePool3, TidePool4, TidePool5, TidePool6, TidePool7, Compendium]
}
let game = new Phaser.Game(config)
let compendium, returnGame, walkUp1, walkUp2, walkDown1, walkDown2, walkLeft1, walkLeft2, walkRight1, walkRight2


//Global variables for progression markers
let scFound = false
let fishFound = false
let starFound = false
let tutorialFinished = false
let tidePool0_1Found = false
let tidePools0Found = 0
let tidePools1Found = 0
let tidePools2Found = 0

//Sets up screen
let borderUISize = game.config.height / 15
let borderPadding = borderUISize / 3;