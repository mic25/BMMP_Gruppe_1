function Menu() {    

    this.blub = 0;

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

