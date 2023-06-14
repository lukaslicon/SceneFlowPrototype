
class Title extends Cinematics {
    constructor() {
        super('title', 'title');
    }
    onEnter() {
        //for music
        if (musicMute == true){
            this.titleMusic.play();
            this.titleMusic.setVolume(0);
        }
        else{
            this.titleMusic.play();
        }
        //fade
        this.fadeInScene();
        this.add.image(960, 540, 'titleScreen');
        this.fullScreenButton();
        this.muteButton(this.titleMusic);
        this.isClicked = false;
        let playButton = this.add.image(960, 740, 'play')
            .setScale(.8)
            .setInteractive()
            .on('pointerover', () => {
                playButton.setTint(0x808080);
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

}