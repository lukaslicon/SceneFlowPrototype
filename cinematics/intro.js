class title extends Phaser.Scene {
    constructor() {
        super('title');
    }
    create() {
    //fade
    this.fadeInScene();
    this.titleMusic = this.sound.add("titleMusic");
    this.titleMusic.loop = true;
    this.titleMusic.play();
    this.add.image(960, 540, 'titleScreen');
    this.isClicked = false;
    let playButton = this.add.image(960, 740, 'play')
        .setScale(.8)
        .setInteractive()
        .on('pointerover', () => {
            playButton.setTint(0x808080); // 0x808080 is the hex color for gray
        })
        .on('pointerout', () => {
            if (this.isClicked == false) {
                playButton.clearTint();
            }
        })
        .on('pointerdown', () => {
            this.isClicked = true;
            this.titleMusic.stop();
            playButton.removeInteractive();
            this.cameras.main.fadeOut(2000, 0, 0, 0)
            this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) => {
                this.scene.start('npcScreen', {}, { alpha: 0, duration: 1000 });
            })
        });
    }
    fadeInScene(){
        this.cameras.main.setAlpha(0);
        this.tweens.add({
            targets: this.cameras.main,
            alpha: 1,
            duration: 1000,
            ease: 'Linear', 
            onComplete: function() {
            console.log("Fade-in complete");
            }
        });

}
}