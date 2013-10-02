function Game() {
    //

    this.bg_speed = -5;
    this.mg_speed = -6;
	this.fg_speed = -7;

	this.bg = new createjs.Bitmap(queue.getResult("bg"));
	this.fg = new createjs.Bitmap(queue.getResult("ground"));


    //Platforms
	this.platforms = new Array();
	this.VERTICAL = 100;
	this.HORIZONTAL_MAX = 200;
	this.HORIZONTAL_MIN = 70;
	this.TILES_MIN = 1;
	this.TILES_MAX = 5;
	this.platformSpeed = -10;

    //Startspeeds
	this.BG_SPEED = -5;
	this.MG_SPEED = -6;
	this.FG_SPEED = -7;
	this.PL_SPEED = -10;

	this.plat;

	this.score = 1;
	this.speedControl = 1;

    //Score
	this.score_text = new createjs.Text("Score : " + this.score, "40px Arial", "#000");
	this.score_text.x = 1150; this.score_text.y = 50;
	
}

Game.prototype.handleTick = function () {

    //Background
	this.bg.x += this.bg_speed;
	this.fg.x += this.fg_speed;
	if(this.bg.x+this.bg.image.width < stage.canvas.width){
		this.bg.x = 0;
	}
	if(this.fg.x+this.fg.image.width < stage.canvas.width){
		this.fg.x = 0;
	}

    //Platforms
	for (var i = 0; i < this.platforms.length; i++) {
	    
	    this.platforms[i].update();

	    if(this.platforms[i].body.bitmaps[0].x < -stage.canvas.width){
	    	stage.removeChild(this.platforms[i]);
	    	this.platforms.splice(i, 1);
	    }
	}

    //Lets mak this stuff hard to do :D
	this.score += -this.platformSpeed / SCALE;
	this.speedcontrol = Math.min(Math.floor(this.score/20),30);
	this.platformSpeed = this.PL_SPEED - this.speedControl;
	this.bg_speed = this.BG_SPEED - 0.5 * this.speedControl;
	this.mg_speed = this.MG_SPEED - 0.7 * this.speedControl;
	this.fg_speed = this.FG_SPEED - 0.9 * this.speedControl;
	this.score_text.text = "Score : " + Math.floor(this.score);

	//console.log(this.platforms.length);
	game.generateLevel();

    //kopiert aus Blatt05 was auch immer das hier macht..
    world.Step(1 / 60,  10,  10);
    world.DrawDebugData();
    //+++++++++++++Debug!!!+++++++++++++++++++++
    //stage.autoClear = false;
    world.ClearForces();   

    //Player
    if (player != undefined) {
        player.update();
        player.draw();
    }
    

}

Game.prototype.start = function(){

	stage.addChild(this.bg);
	stage.addChild(this.fg);
	stage.addChild(this.score_text);

	game.setupPhysics();
    this.plat= new Platform(352 / SCALE, 500 / SCALE, 10); //Startplatform
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
        var lastX = this.plat.body.GetPosition().x * SCALE;
        var lastY = this.plat.body.GetPosition().y * SCALE;
        var tiles = Math.floor(Math.random() * (this.TILES_MAX - this.TILES_MIN + 1) + this.TILES_MIN);
        var newX = lastX + Math.floor(Math.random() * (this.HORIZONTAL_MAX - this.HORIZONTAL_MIN + 1)) + this.HORIZONTAL_MIN
            + (this.plat.tiles * this.plat.segmentSize) / 2 + (tiles * this.plat.segmentSize) / 2;

        if(randomSign < lastY/stage.canvas.height){
        	var newY = lastY -  Math.random() * this.VERTICAL;
        }
        else{
        	var newY = lastY + Math.random() * this.VERTICAL;
        }

        if (newY > stage.canvas.height - this.plat.segmentHeight) {
            newY -= this.VERTICAL;
        }
        else if (newY < this.plat.segmentHeight + 4*this.VERTICAL) {
            newY += 2*this.VERTICAL;
        }
        
        //console.log(lastX + " : " + lastY + " : " + newX + " : " + newY);
        this.plat = new Platform(newX / SCALE, newY / SCALE, tiles)
        this.platforms.push(this.plat);

    }




}