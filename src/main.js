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
    scene: [ Menu, Walk, Walk1, Walk2, TidePool, TidePool1, TidePool2, TidePool3, TidePool4, TidePool5, TidePool6, TidePool7, Compendium, Message]
}
let game = new Phaser.Game(config)
let compendium, returnGame, walkUp1, walkUp2, walkDown1, walkDown2, walkLeft1, walkLeft2, walkRight1, walkRight2, debugForMessage


//Global variables for progression markers
let scFound = false
let fishFound = false
let starFound = false
let urchinFound = false
let musselFound = false
let crabFound = false
let tutorialFinished = false
let resetOnce = false
//sets up global variables for progression checks, if all are true at the end,
//the game ends but will need to check if all are true for the full experience

//these boolean values are made to make sure that the counter doesn't increment
//on already searched tidepools
let tidePool0_1Found = false
let tidePool1_1Found = false
let tidePool1_2Found = false
let tidePool1_3Found = false

//these int values are counters so that way once you check all of the tide pools,
//you can move onto the next area
//using int values to prevent massive boolean if statement
let tidePools0Found = 0
let tidePools1Found = 0
let tidePools2Found = 0

//Sets up screen
let borderUISize = game.config.height / 15
let borderPadding = borderUISize / 3;