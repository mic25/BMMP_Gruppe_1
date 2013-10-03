function Level() {

    this.style = "sky";

    this.bg = new createjs.Bitmap(queue.getResult("bg"));
    //this.mg = new createjs.Bitmap(queue.getResult("mg"));
    this.fg = new createjs.Bitmap(queue.getResult("fg"));
   
    this.platforms = new Array();
    this.plat;
    this.initialize();
}

Level.prototype.initialize = function () {

    //setup Background
    stage.addChild(this.bg);
    stage.addChild(this.fg);

    //Startplatform
    this.plat = new Platform(352 / SCALE, 500 / SCALE, 10); 
    this.platforms.push(this.plat);

}

Level.prototype.generateLevel = function () {

    while (this.platforms.length < 15) {
        var randomSign = Math.random();
        //console.log(this.plat.x);
        //console.log(this.platforms.length);
        //console.log(this.plat.body.GetPosition().y);
        var lastX = this.plat.body.GetPosition().x * SCALE;
        var lastY = this.plat.body.GetPosition().y * SCALE;
        var tiles = Math.floor(Math.random() * (game.TILES_MAX - game.TILES_MIN + 1) + game.TILES_MIN);
        var newX = lastX + Math.floor(Math.random() * (game.HORIZONTAL_MAX - game.HORIZONTAL_MIN + 1)) + game.HORIZONTAL_MIN
            + (this.plat.tiles * this.plat.segmentSize) / 2 + (tiles * this.plat.segmentSize) / 2;

        if (randomSign < lastY / stage.canvas.height) {
            var newY = lastY - Math.random() * game.VERTICAL;
        }
        else {
            var newY = lastY + Math.random() * game.VERTICAL;
        }

        if (newY > stage.canvas.height - this.plat.segmentHeight) {
            newY -= game.VERTICAL;
        }
        else if (newY < this.plat.segmentHeight + 4 * game.VERTICAL) {
            newY += 2 * game.VERTICAL;
        }

        //console.log(lastX + " : " + lastY + " : " + newX + " : " + newY);
        this.plat = new Platform(newX / SCALE, newY / SCALE, tiles)
        this.platforms.push(this.plat);
    }
}

Level.prototype.updatePlatforms = function () {
    for (var i = 0; i < this.platforms.length; i++) {

        this.platforms[i].update();

        if (this.platforms[i].body.bitmaps[0].x < -stage.canvas.width) {
            stage.removeChild(this.platforms[i]);
            this.platforms.splice(i, 1);
        }
    }
}

Level.prototype.updateBackground = function () {
    this.bg.x += game.bg_speed;
    //this.mg.x += game.mg_speed;
    this.fg.x += game.fg_speed;
    if (this.bg.x + this.bg.image.width < stage.canvas.width) {
        this.bg.x = 0;
    }
    if (this.fg.x + this.fg.image.width < stage.canvas.width) {
        this.fg.x = 0;
    }
}