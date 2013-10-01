function Platform(xPos,yPos,tiles){
	
	this.x = xPos;
	this.y = yPos;
	this.tiles = tiles;

	var bodyDef = new b2d.b2BodyDef();
	bodyDef.position.Set(xPos,yPos);
	bodyDef.type = b2d.b2Body.b2_kinematicBody;

	var shape = new b2d.b2PolygonShape();
	this.boxWidth = (50.0*this.tiles)/SCALE;
	this.boxHeight = 50.0/SCALE;
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

	for (var i = 0; i < tiles; i++) {
	    var visuals = new createjs.Bitmap(queue.getResult("platform1"));
	    this.body.bitmaps.push(visuals);
	    stage.addChild(visuals);
	    visuals.y = yPos * SCALE - 50;
	}
	
	this.body.SetUserData("ground");
}



Platform.prototype.update = function(){
	for(var i=0;i<this.body.bitmaps.length;i++){		
		this.body.bitmaps[i].x = ((this.body.GetPosition().x-this.boxWidth)*SCALE)+i*this.boxWidth/this.tiles*2*SCALE;
	}

	this.body.SetPosition(new b2d.b2Vec2(this.x-cameraOffsetX*2,this.y));
}