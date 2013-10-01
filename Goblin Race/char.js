function Char() {
//Startposition
var startX = 50;
var startY = 550;

//Grafik laden
this.image = new createjs.Bitmap(queue.getResult("figure"));
this.image.regX = 100;
this.image.rexY = 100;
this.image.x = startX;
this.image.y = startY;

}

Char.prototype.run = function(){
	//
}

Char.prototype.jump = function(){
	console.log("jump");
	this.image.y -= 600;
	this.image.x += 30;
}

Char.prototype.crouch = function(){
	//
}

Char.prototype.special = function(){
	//
}