function Platform(xPos,yPos,tiles,type){
	
	this.x = xPos;
	this.y = yPos;
	this.tiles = tiles;
	this.segmentSize = 88; //Breite des Bildes
	this.segmentHeight = 44;
	this.type = type;

	var bodyDef = new b2d.b2BodyDef();
	bodyDef.position.Set(xPos,yPos);
	bodyDef.type = b2d.b2Body.b2_kinematicBody;

	var shape = new b2d.b2PolygonShape();
	this.boxWidth = (this.segmentSize*this.tiles)/SCALE/2;
	this.boxHeight = this.segmentHeight/SCALE/2;
	shape.SetAsBox(this.boxWidth,this.boxHeight);

	var fixDef = new b2d.b2FixtureDef();
	fixDef.density = 1;
	fixDef.friction = 0.5;
	fixDef.restitution = 0;
	fixDef.shape = shape;
	
	this.body = world.CreateBody(bodyDef);
	this.body.CreateFixture(fixDef);
	this.body.bitmaps = [];

	for (var i = 0; i < this.tiles; i++) {
	    var visuals = new createjs.Bitmap(queue.getResult("platform1"));
	    this.body.bitmaps.push(visuals);
	    
	    visuals.y = yPos * SCALE - 0.5*this.segmentHeight;
	    visuals.x = xPos * SCALE + (this.segmentSize * i) - this.tiles*this.segmentSize/2; // Faktor für die Tile-Länge
	    stage.addChild(visuals);
	}   
	this.body.SetUserData("platform");
}



Platform.prototype.update = function () {
    this.body.SetAwake(true);
    this.body.SetPosition(new b2d.b2Vec2(this.body.GetPosition().x + game.platformSpeed / SCALE , this.body.GetPosition().y));
	for(var i=0;i<this.body.bitmaps.length;i++){		
	    this.body.bitmaps[i].x = this.body.GetPosition().x * SCALE + (this.segmentSize * i) - (this.tiles * this.segmentSize/2);
	};
}