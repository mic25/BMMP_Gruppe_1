function Game() {

	this.bg_speed1 = -5;
	this.ground_speed = -25;

	this.bg = new createjs.Bitmap(queue.getResult("bg"));
	this.ground = new createjs.Bitmap(queue.getResult("ground"));
    this.c = new Char(); 
}

Game.prototype.handleTick = function () {

	this.bg.x += this.bg_speed1;
	this.ground.x += this.ground_speed;
<<<<<<< HEAD

	if(this.bg.x+this.bg.image.width < stage.canvas.width){
		this.bg.x = 0;
	}

	if(this.ground.x+this.ground.image.width < stage.canvas.width){
		this.ground.x = 0;
	}
    
=======
   
>>>>>>> 543194a3b9121ffef0abe23787c47b723a5f7431

    /*if (Key.isDown(Key.UP)) {
        char.jump();
        }
    if (Key.isDown(Key.DOWN)) {
        char.crouch();
        }
   if (Key.isDown(Key.RIGHT)) {
        char.run();
        }
    if (Key.isDown(Key.SPACE)) {
         char.special()
        }*/

}

Game.prototype.start = function(){

	stage.addChild(this.bg);
	stage.addChild(this.ground);
    stage.addChild(this.c.image);
	stage.update();

}