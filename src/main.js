//Name: William McCabe
//Title: Tidepool
//Approximate hours: 30hr
//Comment for grader: I am not an artist, my art is really bad but I am always trying new things and experiementing 
//with games types that I have never made before. This type of game was trying to reflect a sort of collection esc game like Pokemon
//but instead of Pokeballs, it was clicking/recording data into a global progress checker
//Once finding one of each type, you can enter the final scene which ends the game. 
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
    scene: [ Menu, Walk, Walk1, Walk2, TidePool, TidePool1, TidePool2, TidePool3, TidePool4, TidePool5, TidePool6, TidePool7, Compendium, Message, Credit]
}
let game = new Phaser.Game(config)
let compendium, returnGame, walkUp1, walkUp2, walkDown1, walkDown2, walkLeft1, walkLeft2, walkRight1, walkRight2, debugForMessage
//global for music
let sound
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
//Tutorial Tidepool
let tidePool0_1Found = false

//Beach 1 Tidepool
let tidePool1_1Found = false
let tidePool1_2Found = false
let tidePool1_3Found = false

//Beach 2 Tidepool
let tidePool2_1Found = false
let tidePool2_2Found = false
let tidePool2_3Found = false
let tidePool2_4Found = false
//these int values are counters so that way once you check all of the tide pools,
//you can move onto the next area
//using int values to prevent massive boolean if statement
let tidePools0Found = 0
let tidePools1Found = 0
let tidePools2Found = 0

//Sets up screen
let borderUISize = game.config.height / 15
let borderPadding = borderUISize / 3;