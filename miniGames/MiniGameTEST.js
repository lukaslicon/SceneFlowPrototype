
class MiniGameTEST extends MiniGameClass  {
    constructor() {
        super('MiniGameTEST');
    }
    create() {
        this.cameras.main.fadeIn(1000, 0, 0, 0);
        this.fullScreenButton();
        this.add.text(560,560, "SCENE FLOW TESTING GAME WIN/LOSE is recorded here.").setFontSize(50);
        this.add.text(760,760, "Click anywhere to continue.").setFontSize(20);
        this.input.on('pointerdown', () => {
            this.cameras.main.fade(1000, 0,0,0);
            this.time.delayedCall(1000, () => this.scene.start('npcScreen'));
        });
    }
}