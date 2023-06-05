
let config = {
    type: Phaser.AUTO,
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: 1920,
    height: 1080,
    physics:{
        default: 'arcade',
        arcade: {
            debug: false,
            debugShowVelocity: false
    }
},
scene: [load, title, npcScreen, MiniGameTEST],
title: "Mini Game Prototype",
};

let game = new Phaser.Game(config);
