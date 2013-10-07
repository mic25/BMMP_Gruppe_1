function Menu() {  

    // Menu Background
	this.menuBg =  new createjs.Bitmap("img/menuBg.png");

    //Help elements

    //Move right
	this.rightArrow =  new createjs.Bitmap("img/right_arrow.png");
	this.rightArrow.scaleX = 0.5;
	this.rightArrow.scaleY = 0.5;
	this.rightArrow.x = 710;
	this.rightArrow.y = 300;

	this.moveRight_text = new createjs.Text("Move right", "80px 'Voltaire', sans-serif", "#F7F8E0");
	this.moveRight_text.x = 960;
	this.moveRight_text.y = 375;

    //Jump
	this.upArrow =  new createjs.Bitmap("img/up_arrow.png");
	this.upArrow.scaleX = 0.5;
	this.upArrow.scaleY = 0.5;
	this.upArrow.x = 605;
	this.upArrow.y = 120;

	this.slash_text = new createjs.Text("/", "120px 'Voltaire', sans-serif", "#F7F8E0");
	this.slash_text.x = 625;
	this.slash_text.y = 170;

	this.space =  new createjs.Bitmap("img/space.png");
	this.space.scaleX = 0.5;
	this.space.scaleY = 0.5;
	this.space.x = 415;
	this.space.y = 120;

	this.jump_text = new createjs.Text("Jump", "80px 'Voltaire', sans-serif", "#F7F8E0");
	this.jump_text.x = 835;
	this.jump_text.y = 190;

    //Move left
	this.leftArrow =  new createjs.Bitmap("img/left_arrow.png");
	this.leftArrow.scaleX = 0.5;
	this.leftArrow.scaleY = 0.5;
	this.leftArrow.x = 320;
	this.leftArrow.y = 300;

	this.moveLeft_text = new createjs.Text("Move left", "80px 'Voltaire', sans-serif", "#F7F8E0");
	this.moveLeft_text.x = 90;
	this.moveLeft_text.y = 375;

    //Pause
	this.pKey =  new createjs.Bitmap("img/p.png");
	this.pKey.scaleX = 0.5;
	this.pKey.scaleY = 0.5;
	this.pKey.x = 520;
	this.pKey.y = 450;

	this.pause_text = new createjs.Text("Have a break", "80px 'Voltaire', sans-serif", "#F7F8E0");
	this.pause_text.x = 760;
	this.pause_text.y = 525;

    //Game-Task
	this.explanation_text = new createjs.Text("Run the goblin across the platforms, collect coins & sweets to stay alive!", "50px 'Voltaire', sans-serif", "#F7F8E0");
	this.explanation_text.x = 25;
	this.explanation_text.y = 70;

    //Menu Header
	this.menu_text = new createjs.Text("Menu", "150px 'Voltaire', sans-serif", "#F7F8E0");
    this.menu_text.x = 550;
    this.menu_text.y = 250;

    //Scores
    this.lastScore_text = new createjs.Text("Your last score: 0", "60px 'Voltaire', sans-serif", "#F7F8E0");
    this.lastScore_text.x = 500;
    this.lastScore_text.y = 150;
    //localStorage.setItem("lastScore", 0);

    this.bestScore_text = new createjs.Text("Your best score: 0", "60px 'Voltaire', sans-serif", "#F7F8E0");
    this.bestScore_text.x = 500;
    this.bestScore_text.y = 80;
    //localStorage.setItem("bestScore", 0);

    //Help
    this.help_text = new createjs.Text("<h> Tutorial", "60px 'Voltaire', sans-serif", "#F7F8E0");
    this.help_text.x = 100;
    this.help_text.y = 650;
    this.hitHelp = new createjs.Shape();
    this.hitHelp.graphics.beginFill("#000").drawRect(0, 0, this.help_text.getMeasuredWidth(), this.help_text.getMeasuredHeight());
    this.help_text.hitArea = this.hitHelp;


    //Start
    this.newGame_text = new createjs.Text("<enter> Start", "60px 'Voltaire', sans-serif", "#F7F8E0");
    this.newGame_text.x = 950;
    this.newGame_text.y = 650;
    this.hitNew = new createjs.Shape();
    this.hitNew.graphics.beginFill("#000").drawRect(0, 0, this.newGame_text.getMeasuredWidth(), this.newGame_text.getMeasuredHeight());
    this.newGame_text.hitArea = this.hitNew;

    //Escape back to menu
    this.escape_text = new createjs.Text("<esc> Back to Menu", "60px 'Voltaire', sans-serif", "#F7F8E0");
    this.escape_text.x = 70;
    this.escape_text.y = 650;
    this.hitEsc = new createjs.Shape();
    this.hitEsc.graphics.beginFill("#000").drawRect(0, 0, this.escape_text.getMeasuredWidth(), this.escape_text.getMeasuredHeight());
    this.escape_text.hitArea = this.hitEsc;


}

Menu.prototype.showMenu = function () {

    // show the Menu
    inGame = false;
    console.log(menu.menuBg);
    stage.removeAllChildren();
    stage.update();
    stage.addChild(menu.menuBg);
    menu.setScores();
    stage.addChild(menu.menu_text);
    stage.addChild(menu.lastScore_text);
    stage.addChild(menu.bestScore_text);
    stage.addChild(menu.help_text);
    
    menu.help_text.addEventListener("click", menu.handleClick);
    stage.addChild(menu.newGame_text);
    
    menu.newGame_text.addEventListener("click", menu.handleClick);



    //For test purposes
 	/*stage.removeAllChildren();
    stage.update();*/
    //menu.startGame();
}

Menu.prototype.startGame = function () {

    game = new Game();
    controller = new Controller(); 

    stage.removeAllChildren();
    stage.update();

    /*level.coins.length = 0;
    level.platforms.length = 0;
    level.bg.length = 0;
    level.fg.length = 0;*/

    game.counter = 0;

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
    	//menu.generateNew();
    	menu.startGame();
    }
    if (Key.isDown(Key.ESCAPE)){
    	console.log("escape");
    	menu.showMenu();
    }
    if (Key.isDown(Key.H)){
    	console.log("help");
    	menu.getHelp();
    }
    if (Key.isDown(Key.ENTER)){
    	console.log("new Game");
    	//menu.generateNew();
    	menu.startGame();
    }

Menu.prototype.generateNew = function (){
    stage.removeAllChildren();
    stage.update();

    level.coins.length = 0;
    level.platforms.length = 0;
    level.bg.length = 0;
    level.fg.length = 0;

    game.counter = 0;
}    

Menu.prototype.getHelp = function (){
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
    stage.addChild(this.pKey);
    stage.addChild(this.pause_text);
    this.newGame_text.x = 1000;
    stage.addChild(this.newGame_text);
    
    this.newGame_text.addEventListener("click", menu.handleClick);
    stage.addChild(this.escape_text);
    
    this.escape_text.addEventListener("click", menu.handleClick);
}    


Menu.prototype.handleClick = function (evt){
    console.log(evt.target);
    if(evt.target.text == "<h> Tutorial"){
        console.log("help");
        menu.getHelp();
    }
    else if(evt.target.text == "<enter> Start"){
        console.log("new Game");
        //menu.generateNew();
        menu.startGame();
    }
    else if(evt.target.text == "<esc> Back to Menu"){
        console.log("back");
        menu.showMenu();
    }
}


Menu.prototype.setScores = function(){
    if(localStorage.getItem("lastScore") == null){
        localStorage.setItem("lastScore", 0);
    }
    else if(localStorage.getItem("bestScore") == null){
        localStorage.setItem("bestScore", 0);
    }else{
        this.lastScore_text.text = "Your last score: " + localStorage.getItem("lastScore");
        if(localStorage.getItem("lastScore") > localStorage.getItem("bestScore")){
            var newScore = localStorage.getItem("lastScore");
            localStorage.setItem("bestScore", newScore);
        }else{
            //localStorage.setItem("bestScore", localStorage.getItem("bestScore"));
        }
        this.bestScore_text.text = "Your best score: " + localStorage.getItem("bestScore");
    }
}

}

