function Menu() {  

	this.menuBg =  new createjs.Bitmap("img/menuBg.png");

	this.rightArrow =  new createjs.Bitmap("img/right_arrow.png");
	this.rightArrow.scaleX = 0.5;
	this.rightArrow.scaleY = 0.5;
	this.rightArrow.x = 710;
	this.rightArrow.y = 400;

	this.moveRight_text = new createjs.Text("Move right", "80px 'Voltaire', sans-serif", "#F7F8E0");
	this.moveRight_text.x = 960;
	this.moveRight_text.y = 475;

	this.upArrow =  new createjs.Bitmap("img/up_arrow.png");
	this.upArrow.scaleX = 0.5;
	this.upArrow.scaleY = 0.5;
	this.upArrow.x = 605;
	this.upArrow.y = 150;

	this.slash_text = new createjs.Text("/", "120px 'Voltaire', sans-serif", "#F7F8E0");
	this.slash_text.x = 625;
	this.slash_text.y = 200;

	this.space =  new createjs.Bitmap("img/space.png");
	this.space.scaleX = 0.5;
	this.space.scaleY = 0.5;
	this.space.x = 415;
	this.space.y = 150;

	this.jump_text = new createjs.Text("Jump", "80px 'Voltaire', sans-serif", "#F7F8E0");
	this.jump_text.x = 835;
	this.jump_text.y = 220;

	this.leftArrow =  new createjs.Bitmap("img/left_arrow.png");
	this.leftArrow.scaleX = 0.5;
	this.leftArrow.scaleY = 0.5;
	this.leftArrow.x = 320;
	this.leftArrow.y = 400;

	this.moveLeft_text = new createjs.Text("Move left", "80px 'Voltaire', sans-serif", "#F7F8E0");
	this.moveLeft_text.x = 90;
	this.moveLeft_text.y = 475;

	this.explanation_text = new createjs.Text("Run the goblin across the platforms, collect coins & sweets to stay alive!", "50px 'Voltaire', sans-serif", "#F7F8E0");
	this.explanation_text.x = 25;
	this.explanation_text.y = 70;

	this.menu_text = new createjs.Text("Menu", "150px 'Voltaire', sans-serif", "#F7F8E0");
    this.menu_text.x = 500;
    this.menu_text.y = 250;

    this.lastScore_text = new createjs.Text("Your last score: 0", "60px 'Voltaire', sans-serif", "#F7F8E0");
    this.lastScore_text.x = 500;
    this.lastScore_text.y = 150;

    this.bestScore_text = new createjs.Text("Your best score: 0", "60px 'Voltaire', sans-serif", "#F7F8E0");
    this.bestScore_text.x = 500;
    this.bestScore_text.y = 80;

    this.help_text = new createjs.Text("<h> Tutorial", "60px 'Voltaire', sans-serif", "#F7F8E0");
    this.help_text.x = 100;
    this.help_text.y = 650;

    this.newGame_text = new createjs.Text("<enter> Start", "60px 'Voltaire', sans-serif", "#F7F8E0");
    this.newGame_text.x = 950;
    this.newGame_text.y = 650;


}

Menu.prototype.showMenu = function () {

    // show the Menu



    //For test purposes
 	/*stage.removeAllChildren();
    stage.update();*/
    menu.startGame();
}

Menu.prototype.startGame = function () {

    game = new Game();
    controller = new Controller();  
    game.start();
    inGame = true;

}

Menu.prototype.handleTick = function () {
    if (Key.isDown(Key.P)) {
        pPressed = true;
        if (pPressed != pPressedCheck) {
            inGame = true;
            stage.removeChild(game.overlay);
            stage.removeChild(game.pause_text);
            stage.removeChild(game.pauseExplanation_text);
            player.image.play();
            if (player != undefined && player.isOutOfBounds) inGame = false;
            pPressedCheck = pPressed;
        }
    }
    else {pPressed = false; pPressedCheck = false;}

    if (Key.isDown(Key.R)) {
    	console.log("restart");
    	
    	stage.removeAllChildren();
    	stage.update();

    	level.coins.length = 0;
    	level.platforms.length = 0;
    	level.bg.length = 0;
    	level.fg.length = 0;
    	
    	menu.startGame();
    }
    if (Key.isDown(Key.ESCAPE)){
    	console.log("escape");
    	menu.showMenuBetween();
    }
    if (Key.isDown(Key.H)){
    	console.log("help");
    	stage.removeAllChildren;
    	stage.update();
    	stage.addChild(this.menuBg);
    	stage.addChild(this.explanation_text);
    	stage.addChild(this.space);
    	stage.addChild(this.upArrow);
    	stage.addChild(this.leftArrow);
    	stage.addChild(this.rightArrow);
    	stage.addChild(this.jump_text);
    	stage.addChild(this.slash_text);
    	stage.addChild(this.moveRight_text);
    	stage.addChild(this.moveLeft_text);
    	this.newGame_text.x = 520;
    	this.newGame_text.y = 650;
    	stage.addChild(this.newGame_text);
    }
    if (Key.isDown(Key.ENTER)){
    	console.log("new Game");
    	stage.removeAllChildren();
    	stage.update();

    	level.coins.length = 0;
    	level.platforms.length = 0;
    	level.bg.length = 0;
    	level.fg.length = 0;
    	
    	menu.startGame();
    }


Menu.prototype.showMenuBetween = function(){
	inGame = false;
	console.log(this.menuBg);
    stage.removeAllChildren();
    stage.update();
    stage.addChild(this.menuBg);
    this.lastScore_text.text = "Your last score: " + game.distanceScore;
    stage.addChild(this.menu_text);
    stage.addChild(this.lastScore_text);
    stage.addChild(this.bestScore_text);
    stage.addChild(this.help_text);
    stage.addChild(this.newGame_text);
}    
}

