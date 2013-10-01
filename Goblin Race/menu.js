function Menu() {    

}

Menu.prototype.showMenu = function () {

    // show the Menu

    //For test purposes
    //this.startGame();

    game = new Game();
    controller = new Controller();
    game.start();
}

Menu.prototype.startGame = function () {

    game = new Game();
    controller = new Controller();
    game.start();

}

