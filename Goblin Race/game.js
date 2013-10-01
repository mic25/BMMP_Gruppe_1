function Game() {

	this.bg_speed1 = 0.2;
	this.ground_speed = 0.5;

	this.bg = new createjs.Bitmap(queue.getResult("bg"));
	this.ground = new createjs.Bitmap(queue.getResult("ground"));



}

Game.prototype.handleTick = function () {

	this.bg.x += this.bg_speed1;
	this.ground.x += this.ground_speed;


    if (Key.isDown(Key.UP)) {
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
        }

}

Game.prototype.start = function(){

	stage.add(this.bg);
	stage.add(this.ground);

}