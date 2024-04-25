class moveeee extends Phaser.Scene {
    constructor() {
        super("moveScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        // Create variables to hold constant values for sprite locations
        this.bodyX = 400;
        this.bodyY = 350;

        this.bullets = [];

    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets
        this.load.setPath("./assets/");

        this.load.image("character", "character_femaleAdventurer_idle.png");
        this.load.image("sword", "item_sword.png");
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability
        //let { this:width, this:height } = this.sys.game.canvas;

        // Create the main body sprite
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "character");
        //my.sprite.sword = this.add.sprite(this.bodyX - 50, this.bodyY, "sword");
        //my.sprite.sword.angle = -90;
        //my.sprite.sword.visible = false;

        this.aKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.dKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.spaceKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    }

    update() {
        let my = this.my;    // create an alias to this.my for readability
        if (this.aKey.isDown) {
            my.sprite.body.x -= 7;
            if (my.sprite.body.x <= 0) my.sprite.body.x = 0;
        }
        if (this.dKey.isDown) {
            my.sprite.body.x += 7;
            if (my.sprite.body.x >= game.config.width) my.sprite.body.x = game.config.width;
        }
        if (this.spaceKey.isDown) {
            my.sprite.sword = this.add.sprite(my.sprite.body.x, my.sprite.body.y - 50, "sword");
            this.bullets.push(my.sprite.sword);
        }
        if (this.bullets.length > 0) {
            for (let bullet of this.bullets) {
                bullet.y -= 8;
            }
        }
        if (my.sprite.sword && my.sprite.sword.y <= -60) {
            my.sprite.sword = null;
        }
    }

}