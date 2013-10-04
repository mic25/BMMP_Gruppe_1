function Coin(xPos,yPos,tiles,type){
	
	this.x = xPos;
	this.y = yPos;
	this.tiles = tiles;
	this.segmentSize = 50; //Breite des Bildes
	this.segmentHeight = 50;
	this.type = type;

	var bodyDef = new b2d.b2BodyDef();
	bodyDef.position.Set(xPos,yPos);
	bodyDef.type = b2d.b2Body.b2_kinematicBody;

	var shape = new b2d.b2CircleShape();
	shape.SetRadius(this.segmentSize/2/SCALE);

	var fixDef = new b2d.b2FixtureDef();
	fixDef.density = 0.0001;
	fixDef.restitution = 0.0001;
	fixDef.friction = 0.0001;
	fixDef.shape = shape;
	
	this.body = world.CreateBody(bodyDef);
	this.body.CreateFixture(fixDef);
	this.body.bitmap = new createjs.Bitmap(queue.getResult("coin"));;

	/*for(var i=0;i<tiles;i++){
		var random = Math.random();
		if(random>0.66)
			pic = 3;
		else if(random >0.33)
			pic = 2;
		else pic = 1;	
		var url = queue.getResult("ground"+pic);

		var visuals = new createjs.Bitmap(url);
		this.body.bitmaps.push(visuals);	
		stage.addChild(visuals);
		visuals.y = yPos*SCALE-50;
	}*/

	//for (var i = 0; i < this.tiles; i++) {
	//    var visuals = new createjs.Bitmap(queue.getResult("coin"));
	//    this.body.bitmaps.push(visuals);
	    
	    this.body.bitmap.y = yPos * SCALE - 0.5*this.segmentSize;
	    this.body.bitmap.x = xPos * SCALE - 0.5*this.segmentSize;
	    stage.addChild(this.body.bitmap);
	//}
    
	this.body.SetUserData("coin");
}



Coin.prototype.update = function () {
    this.body.SetAwake(true);
    this.body.SetPosition(new b2d.b2Vec2(this.body.GetPosition().x + game.platformSpeed / SCALE , this.body.GetPosition().y));	
	this.body.bitmap.x = this.body.GetPosition().x * SCALE - 0.5*this.segmentSize;
}