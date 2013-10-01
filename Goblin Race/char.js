function Char() {
//Startposition
var startX = 50;
var startY = 700;

//Grafik laden
this.image = new createjs.Bitmap(queue.getResult("figure"));
this.image.regX = 30;
this.image.rexY = 30;
this.image.x = startX;
this.image.y = startY;

}