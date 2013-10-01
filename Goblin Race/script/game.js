function Game() {
    //

	this.bg_speed1 = -5;
	this.ground_speed = -25;

	this.bg = new createjs.Bitmap(queue.getResult("bg"));
	this.ground = new createjs.Bitmap(queue.getResult("ground"));

    //Platforms
	this.platforms = new Array();
}

Game.prototype.handleTick = function () {

    //Background
	this.bg.x += this.bg_speed1;
	this.ground.x += this.ground_speed;
	if(this.bg.x+this.bg.image.width < stage.canvas.width){
		this.bg.x = 0;
	}
	if(this.ground.x+this.ground.image.width < stage.canvas.width){
		this.ground.x = 0;
	}

    //Platforms
	for (var i = 0; i <= this.platforms.lenth; i++) {
	    var platform = platforms.pop(i);
	    platform.move();
	}


  /*  if (Key.isDown(Key.UP)) {
        console.log("pressed");
        figure.jump();
        }
    if (Key.isDown(Key.DOWN)) {
        figure.crouch();
        }
   if (Key.isDown(Key.RIGHT)) {
        figure.run();
        }
    if (Key.isDown(Key.SPACE)) {
         figure.special();
        }*/

}

Game.prototype.start = function(){

	stage.addChild(this.bg);
	stage.addChild(this.ground);
	stage.update();

}

Game.prototype.generateLevel = function () {

    this.platforms.push(new Platform(300, 300, 500));

}