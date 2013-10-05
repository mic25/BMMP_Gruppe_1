function Menu() {    



}

Menu.prototype.showMenu = function () {

    // show the Menu

    //For test purposes
    stage.removeAllChildren();
    stage.update();
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
    	menu.showMenu();
    }
}

