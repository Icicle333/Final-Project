let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480, 
    scenes: [Menu]
}
let game = new Phaser.Game(config)

let walkLeft1, walkLeft2, walkRight1, walkRight2, walkUp1, walkUp2, walkDown1, walkDown2, interact

let borderUISize = game.config.height / 15
let borderPadding = borderUISize / 3;