function Game() {
    //

	this.bg_speed1 = -5;
	this.ground_speed = -25;

	this.bg = new createjs.Bitmap(queue.getResult("bg"));
	this.ground = new createjs.Bitmap(queue.getResult("ground"));

    //Platforms
	this.platforms = new Array();
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
	for (var i = 0; i <= this.platforms.lenth; i++) {
	    var platform = platforms.pop(i);
	    platform.move();
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

    this.platforms.push(new Platform(300/SCALE, 300/SCALE, 5));

}