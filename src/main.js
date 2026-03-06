let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480, 
    
}
let game = new Phaser.Game(config)

let walkLeft, walkRight, walkUp, walkDown, interact

let borderUISize = game.config.height / 15
let borderPadding = borderUISize / 3;