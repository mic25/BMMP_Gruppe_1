function Platform(xPos,yPos,tiles){
	
	this.x = xPos;
	this.y = yPos;
	this.tiles = tiles;
	this.speed = -12;
	this.segmentSize = 88; //Breite des Bildes
	this.segmentHeight = 44;

	var bodyDef = new b2d.b2BodyDef();
	bodyDef.position.Set(xPos,yPos);
	bodyDef.type = b2d.b2Body.b2_kinematicBody;

	var shape = new b2d.b2PolygonShape();
	this.boxWidth = (this.segmentSize*this.tiles)/SCALE;
	this.boxHeight = this.segmentHeight/SCALE;
	shape.SetAsBox(this.boxWidth,this.boxHeight);

	var fixDef = new b2d.b2FixtureDef();
	fixDef.density = 1;
	fixDef.friction = 0.5;
	fixDef.restitution = 0;
	fixDef.shape = shape;
	
	this.body = world.CreateBody(bodyDef);
	this.body.CreateFixture(fixDef);
	this.body.bitmaps = [];

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

	for (var i = 0; i < this.tiles; i++) {
	    var visuals = new createjs.Bitmap(queue.getResult("platform1"));
	    this.body.bitmaps.push(visuals);
	    stage.addChild(visuals);
	    visuals.y = yPos * SCALE - this.segmentHeight;
	    visuals.x = xPos * SCALE + (this.segmentSize * i); // FAktor für die Tile-Länge
	}
	
	this.body.SetUserData("ground");
}



Platform.prototype.update = function(){
	for(var i=0;i<this.body.bitmaps.length;i++){		
		this.body.bitmaps[i].x += this.speed;
	}

	this.body.SetPosition(new b2d.b2Vec2(this.body.GetPosition().x+this.speed,this.body.GetPosition().y)); // Könnte falsch sein
	//console.log(this.body.GetPosition().x + " : " + this.body.GetPosition().y));
}