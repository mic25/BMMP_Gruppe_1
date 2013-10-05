function Menu() {  

	this.menuBg =  new createjs.Bitmap("img/menuBg.png");

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
    stage.addChild(this.menuBg);
    stage.removeAllChildren();
    stage.update();
    this.lastScore_text.text = "Your last score: " + game.distanceScore;
    stage.addChild(this.menu_text);
    stage.addChild(this.lastScore_text);
    stage.addChild(this.bestScore_text);
    stage.addChild(this.help_text);
    stage.addChild(this.newGame_text);
}    
}

