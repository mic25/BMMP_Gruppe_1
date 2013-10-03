function Game() {
    
    //Speeds
    this.bg_speed = -5;
    this.mg_speed = -6;
    this.fg_speed = -7;

    //Startspeeds
    this.BG_SPEED = -5;
    this.MG_SPEED = -6;
    this.FG_SPEED = -7;
    this.PL_SPEED = -10;

    //Platforms
	this.VERTICAL = 100;
	this.HORIZONTAL_MAX = 200;
	this.HORIZONTAL_MIN = 70;
	this.TILES_MIN = 1;
	this.TILES_MAX = 5;
	this.platformSpeed = -10;	
    
    //Score
	this.distance = 1;
	this.speedControl = 1;

    //Score Output
	this.distance_text = new createjs.Text("Score : " + this.distance, "40px  'Voltaire', sans-serif", "#000");
	this.distance_text.x = 1100; this.distance_text.y = 50;

    //Game Over
	this.gameOver_text = new createjs.Text("You lost!", "150px Arial", "#DF0101");
    this.gameOver_text.x = 400;
    this.gameOver_text.y = 250;

    this.reached_text = new createjs.Text("Your score: " + this.distance, "60px  'Voltaire', sans-serif", "#DF0101");
    this.reached_text.x = 520;
    this.reached_text.y = 450;	
}

Game.prototype.handleTick = function () {

    //Background
    level.generateBackground();
    level.updateBackground();

    //Platforms
    level.generateLevel();
    level.updatePlatforms();


    //Lets mak this stuff hard to do :D
	this.distance += -this.platformSpeed / SCALE;
	this.speedcontrol = Math.min(Math.floor(this.distance / 20), 30);
	this.platformSpeed = this.PL_SPEED - this.speedControl;
	this.bg_speed = this.BG_SPEED - 0.5 * this.speedControl;
	this.mg_speed = this.MG_SPEED - 0.7 * this.speedControl;
	this.fg_speed = this.FG_SPEED - 0.9 * this.speedControl;
	this.distance_text.text = "Distance : " + Math.floor(this.distance);

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

        if(player.isOutOfBounds){
            inGame = false;
            this.reached_text.text = "Your score: " + Math.floor(this.distance);
            stage.addChild(this.gameOver_text);
            stage.addChild(this.reached_text);
        }
    }
}

Game.prototype.start = function(){

    //Setup world
    game.setupPhysics();
    var listener = new ContactListener();
    world.SetContactListener(listener);

    //Setup level
    level = new Level();
    level.generateLevel();

    //Setup the rest ;)
	stage.addChild(this.distance_text);
	player = new Player();
	
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

