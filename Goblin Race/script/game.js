function Game() {
    //

	this.bg_speed1 = -5;
	this.ground_speed = -7;

	this.bg = new createjs.Bitmap(queue.getResult("bg"));
	this.ground = new createjs.Bitmap(queue.getResult("ground"));


    //Platforms
	this.platforms = new Array();
	this.VERTICAL = 50;
	this.HORIZONTAL_MAX = 300;
	this.HORIZONTAL_MIN = 50;
	this.TILES_MIN = 1;
	this.TILES_MAX = 5;
	this.platformSpeed = -10;

	this.plat;
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
	    
	    this.platforms[i].update();

	    if(this.platforms[i].body.bitmaps[0].x < -stage.canvas.width){
	    	stage.removeChild(this.platforms[i]);
	    	this.platforms.splice(i, 1);
	    }
	}
	//console.log(this.platforms.length);
	game.generateLevel();

    //kopiert aus Blatt05 was auch immer das hier macht..
    world.Step(1 / 60,  10,  10);
    world.DrawDebugData();
    stage.autoClear = false;
    world.ClearForces();

    //Player
    if (player != undefined) {
        player.update();
        player.draw();
    }
    

}

Game.prototype.start = function(){

	//stage.addChild(this.bg);
	//stage.addChild(this.ground);

	game.setupPhysics();
    this.plat= new Platform(0 / SCALE, 400 / SCALE, 15); //Startplatform
	this.platforms.push(this.plat);

	player = new Player();
	var listener = new ContactListener();
	world.SetContactListener(listener);

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

    
}

Game.prototype.generateLevel = function () {

    while (this.platforms.length < 15) {
    	var randomSign = Math.random();
        //console.log(this.plat.x);
        //console.log(this.platforms.length);
    	//console.log(this.plat.body.GetPosition().y);
        var lastX = this.plat.body.GetPosition().x * SCALE + (this.plat.body.bitmaps.length * this.plat.segmentSize);
        var lastY = this.plat.body.GetPosition().y * SCALE;
        var newX = lastX + Math.floor(Math.random() * (this.HORIZONTAL_MAX - this.HORIZONTAL_MIN + 1)) + this.HORIZONTAL_MIN;
        if(randomSign <0.5){
        	var newY = lastY -  Math.random() * 2 * this.VERTICAL;
        }
        else{
        	var newY = lastY + Math.random() * 2 * this.VERTICAL;
        }	
        if (newY > stage.canvas.height - this.plat.segmentHeight) {
            newY -= this.VERTICAL;
        }
        else if (newY < this.plat.segmentHeight + 2*this.VERTICAL) {
            newY += 2*this.VERTICAL;
        }
        var tiles = Math.floor(Math.random() * (this.TILES_MAX - this.TILES_MIN + 1) + this.TILES_MIN);
        //console.log(lastX + " : " + lastY + " : " + newX + " : " + newY);
        this.plat = new Platform(Math.floor(newX / SCALE), Math.floor(newY / SCALE), tiles)
        this.platforms.push(this.plat);

    }




}