function Menu() {    

}

Menu.prototype.showMenu = function () {

    // show the Menu

    //For test purposes
    this.startGame();
}

Menu.prototype.startGame = function () {

    game = new Game();
    controller = new COntroller();
    game.start();

}

