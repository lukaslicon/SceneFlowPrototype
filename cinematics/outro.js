
class OutroTEST extends Cinematics  {
    constructor() {
        super('OutroTEST');
    }
    create() {
        this.cameras.main.fadeIn(1000, 0, 0, 0);
        this.fullScreenButton();
        this.add.text(560,560, "SCENE FLOW TESTING OVER...\n     next is cinematics").setFontSize(50);
    }
}