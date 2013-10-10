function CandyCane(xPos,yPos,type){
	
	this.x = xPos;
	this.y = yPos;
	this.segmentSize = 80; 
	this.segmentHeight = 80;
	this.type = type;

	var bodyDef = new b2d.b2BodyDef();
	bodyDef.position.Set(xPos,yPos);
	bodyDef.type = b2d.b2Body.b2_kinematicBody;

	var shape = new b2d.b2CircleShape();
	shape.SetRadius(this.segmentSize/2/SCALE);

	var fixDef = new b2d.b2FixtureDef();
	fixDef.density = 0.0;
	fixDef.restitution = 0.0;
	fixDef.friction = 0.0;
	fixDef.shape = shape;
	
	this.body = world.CreateBody(bodyDef);
	this.fix = this.body.CreateFixture(fixDef);
	this.fix.SetSensor(true);

	this.body.bitmap = new createjs.Bitmap(queue.getResult("candyCane"));;

	    
	    this.body.bitmap.y = yPos * SCALE - 0.5*this.segmentSize;
	    this.body.bitmap.x = xPos * SCALE - 0.5*this.segmentSize;
	    coin_stage.addChild(this.body.bitmap);
	this.body.SetUserData("candy");
}

CandyCane.prototype.update = function () {
    this.body.SetAwake(true);
    this.body.SetPosition(new b2d.b2Vec2(this.body.GetPosition().x + game.platformSpeed / SCALE , this.body.GetPosition().y));	
	this.body.bitmap.x = this.body.GetPosition().x * SCALE - 0.5*this.segmentSize;
}

CandyCane.prototype.remove = function () {
    coin_stage.removeChild(this.body.bitmap);
    deleteArray.push(this.fix.GetBody());
}