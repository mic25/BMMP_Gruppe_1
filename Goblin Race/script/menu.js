function Menu() { 

    this.loading =  new createjs.Bitmap("img/loading.png"); 
    stage.addChild(this.loading);

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

    //Sound on/off
    this.soundOn = new createjs.Bitmap("img/soundOn.png");
    this.soundOn.scaleX = 0.3;
    this.soundOn.scaleY = 0.3;
    this.soundOn.x = 1200;
    this.soundOn.y = 0;
    this.soundOn.image.alpha = 0.95;
    this.hitSoundOn = new createjs.Shape();
    this.hitSoundOn.graphics.beginFill("#000").drawRect(0, 0, this.soundOn.image.width, this.soundOn.image.height);
    this.soundOn.hitArea = this.hitSoundOn;

    this.soundOff = new createjs.Bitmap("img/soundOff.png");
    this.soundOff.scaleX = 0.3;
    this.soundOff.scaleY = 0.3;
    this.soundOff.x = 1200;
    this.soundOff.y = 0;
    this.soundOff.image.alpha = 0.94;
    this.hitSoundOff = new createjs.Shape();
    this.hitSoundOff.graphics.beginFill("#000").drawRect(0, 0, this.soundOff.image.width, this.soundOff.image.height);
    this.soundOff.hitArea = this.hitSoundOff;

    //Game over
    this.devil =  new createjs.Bitmap("img/Teufel.png");
    this.devil.scaleX = 0.7;
    this.devil.scaleY = 0.7;
    this.devil.x = 450;
    this.devil.y = 100;

}

Menu.prototype.showMenu = function () {

    // show the Menu
    inGame = false;
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
    menu.soundOn.addEventListener("click", menu.handleClick);
    menu.soundOff.addEventListener("click", menu.handleClick);
    console.log(localStorage.getItem("sound"));
    if(localStorage.getItem("sound") == 1){
        stage.addChild(menu.soundOn);
    }else if(localStorage.getItem("sound") == 0){
        stage.addChild(menu.soundOff);
    }else{
        localStorage.setItem("sound", 1);
        stage.addChild(menu.soundOn);
    }


    //For test purposes
 	/*stage.removeAllChildren();
    stage.update();*/
    //menu.startGame();
}

Menu.prototype.startGame = function () {

    game = new Game();

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
            if(localStorage.getItem("sound") == 1){
                game.runningSound.resume();
            }
            stage.removeChild(game.overlay);
            stage.removeChild(game.pause_text);
            stage.removeChild(game.pauseExplanation_text);
            if(localStorage.getItem("sound") == 1){
                game.resumeSound.play();
            }
            
            player.image.play();
            if(localStorage.getItem("sound") == 1){
                stage.removeChild(menu.soundOn);
            }else if(localStorage.getItem("sound") == 0){
                stage.removeChild(menu.soundOff);
            }else{
                localStorage.setItem("sound", 1);
                stage.removeChild(menu.soundOn);
            }
            if (player != undefined && player.isOutOfBounds) inGame = false;
            pPressedCheck = pPressed;
        }
    }
    else {pPressed = false; pPressedCheck = false;}

    if (Key.isDown(Key.R)) {
    	//menu.generateNew();
    	menu.startGame();
    }
    if (Key.isDown(Key.ESCAPE)){
        game.runningSound.stop();
    	menu.showMenu();
    }
    if (Key.isDown(Key.H)){
    	menu.getHelp();
    }
    if (Key.isDown(Key.ENTER)){
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
    
    if(evt.target.text == "<h> Tutorial"){
        menu.getHelp();
    }
    else if(evt.target.text == "<enter> Start"){
        //menu.generateNew();
        menu.startGame();
    }
    else if(evt.target.text == "<esc> Back to Menu"){
        menu.showMenu();
    }
    else if(evt.target.text == "Failed you have!"){
        stage.addChild(menu.devil);
        if(localStorage.getItem("sound") == 1){
            game.laughingSound.play();
        }    
    }
    //soundOn-Image
    else if(evt.target.image.alpha == 0.95){
        localStorage.setItem("sound", 0);
        console.log(localStorage.getItem("sound"));
        stage.removeChild(menu.soundOn);
        stage.addChild(menu.soundOff);
    }
    //soundOff-Image
    else if(evt.target.image.alpha == 0.94){
        localStorage.setItem("sound", 1);
        console.log(localStorage.getItem("sound"));
        stage.removeChild(menu.soundOff);
        stage.addChild(menu.soundOn);
    }

}

Menu.prototype.handleMouse = function(){
    stage.removeChild(menu.devil);
}

Menu.prototype.setScores = function(){
    var oldBest = localStorage.getItem("bestScore");
    var last = localStorage.getItem("lastScore");
    var newBest;
    localStorage.setItem("bestScore", 0);
    if(last > oldBest){
        newBest = last;
        
    }else{
        newBest = oldBest;
    }
    localStorage.setItem("bestScore", newBest);
    this.lastScore_text.text = "Your last score: " + localStorage.getItem("lastScore");
    this.bestScore_text.text = "Your best score: " + localStorage.getItem("bestScore");
}

}

