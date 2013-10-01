function Platform(x,y,len) {

    this.speed = -30;
    this.length = len;
    this.x = x;
    this.y = y;
    this.HEIGHT = 50;
    //image

    this.image = new createjs.Shape();
    this.image.graphics.beginFill("#2A2").rect(0, 0, this.length, this.HEIGHT);
    this.image.x = this.x;
    this.image.y = this.y;
    stage.addChild(this.image);

}

Platform.prototype.move = function () {

    this.x += this.speed();

}
