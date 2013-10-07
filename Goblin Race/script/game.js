function Game() {
    
    //Speeds
    this.bg_speed = -8;
    this.mg_speed = -10;
    this.fg_speed = -12;
    this.platformSpeed = -14;

    //Startspeeds
    this.BG_SPEED = -8;
    this.MG_SPEED = -10;
    this.FG_SPEED = -12;
    this.PL_SPEED = -14;

    //PLatforms
    this.vertical = 100;
    this.horizontal_max = 200;
    this.horizontal_min = 70;
    this.tiles_min = 4;
    this.tiles_max = 8;

    //Platforms starters
	this.VERTICAL = 100;
	this.HORIZONTAL_MAX = 200;
	this.HORIZONTAL_MIN = 50;
	this.TILES_MIN = 4;
	this.TILES_MAX = 8;
	
    //Score
	this.distance = 1;
	this.distanceCheck = 1;
    this.distanceScore = 0;
	this.speedControl = 1;
	this.tileControl = 1;
	this.distanceControl = 1;
	counter = 10;

    //Score Output
	this.distance_text = new createjs.Text("Score : " + this.distance, "40px  'Voltaire', sans-serif", "#000");
	this.distance_text.x = 1100; this.distance_text.y = 50;

	this.counter_icon = new createjs.Bitmap(queue.getResult("goldPot"));
	this.counter_icon.x = 50; this.counter_icon.y = 20;
	this.counter_icon.scaleX = 0.25; this.counter_icon.scaleY = 0.25;
    this.counter_text = new createjs.Text(this.counter, "40px  'Voltaire', sans-serif", "#000");
    this.counter_text.x = 150; this.counter_text.y = 50;

    //Game Over
	this.gameOver_text = new createjs.Text("You lost!", "150px Arial", "#FB5519");
    this.gameOver_text.x = 400;
    this.gameOver_text.y = 250;

    this.reached_text = new createjs.Text("Your score: " + this.distance, "60px  'Voltaire', sans-serif", "#FB5519");
    this.reached_text.x = 520;
    this.reached_text.y = 450;	

    this.gameOverExplanation_text = new createjs.Text
        ("<r> to begin a new journey  ~  <esc> to flee like a coward",
        "40px 'Voltaire', sans-serif", "#F7F8E0");
    this.gameOverExplanation_text.x = 273;
    this.gameOverExplanation_text.y = 700;

    //Pause
    this.overlay = new createjs.Bitmap(queue.getResult("overlay"));

    this.pause_text = new createjs.Text("Some breath you must take ?", "80px 'Voltaire', sans-serif", "#F7F8E0");
    this.pause_text.x = 250;
    this.pause_text.y = 150;

    this.pauseExplanation_text = new createjs.Text
        ("<p> to resume your quest  ~  <r> to begin a new journey  ~  <esc> to flee like a coward",
        "40px 'Voltaire', sans-serif", "#F7F8E0");
    this.pauseExplanation_text.x = 73;
    this.pauseExplanation_text.y = 700;
}

Game.prototype.handleTick = function () {

    //Background
    level.generateBackground();
    level.updateBackground();

    //Platforms
    level.generateLevel();
    level.updatePlatforms();

    //Coins
    level.updateCoins();
    if (Math.floor(this.distance) != Math.floor(this.distanceCheck)) {
        counter -= 0.5;
        this.distanceCheck = this.distance;
    }
    this.counter_text.text = Math.floor(counter);


    //Lets mak this stuff hard to do :D
    this.setControls();

    //kopiert aus Blatt05 was auch immer das hier macht..
    world.Step(1 / 60,  10,  10);
    world.DrawDebugData();
    //+++++++++++++Debug!!!+++++++++++++++++++++
    //stage.autoClear = false;
    world.ClearForces();   

    //Pause
    if (Key.isDown(Key.P)) {
        pPressed = true;
        if (pPressed != pPressedCheck) {
            inGame = false;
            player.image.stop();
            stage.addChild(this.overlay);
            stage.addChild(this.pause_text);
            stage.addChild(this.pauseExplanation_text);
            if (player != undefined && player.isOutOfBounds) inGame = false;
            pPressedCheck = pPressed;
        }
    }
    else {
        pPressed = false; pPressedCheck = false;
    }

    //Escape
    if (Key.isDown(Key.ESCAPE)){
        console.log("escape");
        menu.showMenuBetween();
    }

    if (Key.isDown(Key.R)){
        console.log("restart");
        inGame = false;
        menu.generateNew();
        menu.startGame();
    }

    //Player
    player.handleParticles();
    if (player != undefined) {
        player.update();
        player.draw();

        if(player.isOutOfBounds || counter <= 0){
            inGame = false;
            this.distanceScore = Math.floor(this.distance)
            this.reached_text.text = "Your score: " + this.distanceScore;
            stage.addChild(this.overlay);
            stage.addChild(this.gameOver_text);
            stage.addChild(this.reached_text);
            stage.addChild(this.gameOverExplanation_text);
        }
    }

    //deleteArray  
    for(var i =0; i<deleteArray.length; i++){
        world.DestroyBody(deleteArray[i]);
    }
    deleteArray.length = 0;
}

Game.prototype.start = function(){

    //Setup world
    game.setupPhysics();
    var listener = new ContactListener();
    world.SetContactListener(listener);

    player = new Player();

    //Setup level
    level = new Level();
    level.generateBackground();
    level.generateLevel();

    //Setup the rest ;)
	stage.addChild(this.distance_text);
	stage.addChild(this.counter_text);
	stage.addChild(this.counter_icon);
	
	stage.update();
}

Game.prototype.setControls = function(){
    this.distance += -this.platformSpeed / SCALE;
    this.speedControl = Math.min(Math.floor(this.distance / 100), 30);
    this.tileControl = Math.min(Math.floor(this.distance / 250), 7);
    this.tileControl_min = Math.min(Math.floor(this.distance / 500), 3);
    this.distanceControl = Math.min(Math.floor(this.distance / 10),100);
    this.platformSpeed = this.PL_SPEED - this.speedControl;
    this.bg_speed = this.BG_SPEED - 0.3 * this.speedControl;
    this.mg_speed = this.MG_SPEED - 0.7 * this.speedControl;
    this.fg_speed = this.FG_SPEED - 0.9 * this.speedControl;
    this.distance_text.text = "Distance : " + Math.floor(this.distance);
    this.tiles_max = this.TILES_MAX - this.tileControl;
    this.tiles_min = this.TILES_MIN - this.tileControl;
    this.horizontal_min = this.HORIZONTAL_MIN + this.distanceControl;
    this.horizontal_max = this.HORIZONTAL_MAX + this.distanceControl;
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

