function Game() {
    //

	this.bg_speed1 = -5;
	this.ground_speed = -25;

	this.bg = new createjs.Bitmap(queue.getResult("bg"));
	this.ground = new createjs.Bitmap(queue.getResult("ground"));

    //Platforms
	this.platforms = new Array();
	this.VERTICAL = 150;
	this.HORIZONTAL_MAX = 200;
	this.HORIZONTAL_MIN = 50;
	this.TILES_MIN = 2;
	this.TILES_MAX = 10;
}

Game.prototype.handleTick = function () {

    //Background
	this.bg.x += this.bg_speed1;
	this.ground.x += this.ground_speed;
	if(this.bg.x+this.bg.image.width < stage.canvas.width){
		this.bg.x = 0;
	}
	if(this.ground.x+this.ground.image.width < stage.canvas.width){
		this.ground.x = 0;
	}

    //Platforms
	for (var i = 0; i < this.platforms.length; i++) {
	    //this.platforms[i].update();
	}


  /*  if (Key.isDown(Key.UP)) {
        console.log("pressed");
        figure.jump();
        }
    if (Key.isDown(Key.DOWN)) {
        figure.crouch();
        }
   if (Key.isDown(Key.RIGHT)) {
        figure.run();
        }
    if (Key.isDown(Key.SPACE)) {
         figure.special();
        }*/

}

Game.prototype.start = function(){

	stage.addChild(this.bg);
	stage.addChild(this.ground);

	game.setupPhysics();
	game.generateLevel();

	stage.update();

}

Game.prototype.setupPhysics = function () {

    world = new b2d.b2World(new b2d.b2Vec2(0, 10), true);

    // debug draw:
    var debugDraw = new b2d.b2DebugDraw();
    debugDraw.SetSprite(stage.canvas.getContext("2d"));
    debugDraw.SetDrawScale(SCALE);
    debugDraw.SetFlags(b2d.b2DebugDraw.e_shapeBit | b2d.b2DebugDraw.e_jointBit);
    debugDraw.SetFillAlpha(0.3);
    debugDraw.SetLineThickness(1.0);
    world.SetDebugDraw(debugDraw);

    var listener = new ContactListener();
    world.SetContactListener(listener);
}

Game.prototype.generateLevel = function () {

    this.platforms.push(new Platform(0 / SCALE, 0 / SCALE, 5));

    while (this.platforms.length < 15) {
        var lastX = this.platforms[this.platforms.length-1].x;
        var lastY = this.platforms[this.platforms.length-1].y;
        var newX = lastX + Math.floor(Math.random() * (this.HORIZONTAL_MAX - this.HORIZONTAL_MIN + 1)) + this.HORIZONTAL_MIN;
        var newY = lastY - this.VERTICAL + Math.random() * 2 * this.VERTICAL;
        var tiles = Math.floor(Math.random() * (this.TILES_MAX - this.TILES_MIN + 1) + this.TILES_MIN);
        console.log(lastX + " : " + lastY + " : " + newX);
        this.platforms.push(new Platform(newX / SCALE, newY / SCALE, tiles));

    }



}