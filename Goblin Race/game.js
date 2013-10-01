function Game() {
    //

	this.bg_speed1 = -5;
	this.ground_speed = -25;

	this.bg = new createjs.Bitmap(queue.getResult("bg"));
	this.ground = new createjs.Bitmap(queue.getResult("ground"));
    this.figure = new Char(); 
}

Game.prototype.handleTick = function () {

	this.bg.x += this.bg_speed1;
	this.ground.x += this.ground_speed;

    this.figure.image.x +=2;
    

	if(this.bg.x+this.bg.image.width < stage.canvas.width){
		this.bg.x = 0;
	}

	if(this.ground.x+this.ground.image.width < stage.canvas.width){
		this.ground.x = 0;
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
    stage.addChild(this.figure.image);
	stage.update();

}