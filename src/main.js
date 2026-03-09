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
    scene: [ Menu, Walk, TidePool, Compendium]
}
let game = new Phaser.Game(config)
let compendium, walkUp1, walkUp2, walkDown1, walkDown2, walkLeft1, walkLeft2, walkRight1, walkRight2


let borderUISize = game.config.height / 15
let borderPadding = borderUISize / 3;