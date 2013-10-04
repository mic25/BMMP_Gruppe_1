function Menu() {    



}

Menu.prototype.showMenu = function () {

    // show the Menu

    //For test purposes
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
}

