function Player() {

	this.x = 5;
	this.y = 3;
	this.onGround = false;
	this.groundCheck = false;
	this.maxSpeed =100;
	this.numFootContacts = 0;
	this.jumpTimeout = 0;
	this.isOutOfBounds = false;

	//Create the physical player body
	var bodyDef = new b2d.b2BodyDef();
	bodyDef.position.Set(this.x,this.y);
	bodyDef.type = b2d.b2Body.b2_dynamicBody;
	bodyDef.fixedRotation = true;
	this.body = world.CreateBody(bodyDef);

	var shape = new b2d.b2PolygonShape();
	this.fixDef = new b2d.b2FixtureDef();
	this.boxWidth = 30.0/SCALE;
	this.boxHeight = 62.0/SCALE;
	this.fixDef.density = 20;
	this.fixDef.friction = 0.2;
	this.fixDef.restitution = 0.0;
	this.fixDef.shape = shape;

	shape.SetAsBox(this.boxWidth,this.boxHeight);
	this.fixture = this.body.CreateFixture(this.fixDef);

    //setup the graphics

	this.data = {
	    "images": [queue.getResult("player")],
        "frames": [

            [2, 996, 633, 985], 
            [591, 2, 678, 969], 
            [2, 2, 587, 992], 
            [1271, 880, 670, 961], 
            [1271, 2, 718, 876]
        ],
        "animations": {
            "Run": [0, 3, true, 0.3],
            "Jump" : [4],
            "KoboldTopf":[0], 
            "Laufen1":[1], 
            "Laufen2":[2], 
            "Laufen3":[3], 
            "Springen":[4]
        },
	}

	var spritesheet = new createjs.SpriteSheet(this.data);
	this.image = new createjs.Sprite(spritesheet, "Jump");
	this.image.scaleX = 0.2;
	this.image.scaleY = 0.15;
	this.image.y = 300;
	this.image.play();
	stage.addChild(this.image);
	this.imagewidth = 450;
	this.imageheight = 220;

	/*this.image = new createjs.Bitmap(queue.getResult("figure"));
	this.image.scaleX = 0.5;
	this.image.scaleY = 0.5;*/
	//this.image.graphics.beginFill("#0ff").rect(0,0,this.boxWidth*2*SCALE,this.boxHeight*2*SCALE);
	//stage.addChild(this.image);

	this.body.SetUserData("player");
	this.body.SetBullet(true);
	this.mass = this.body.GetMass();

	this.body.SetUserData("player");
}


Player.prototype.draw = function(){
    this.image.x = (this.x - this.boxWidth) * SCALE - this.imagewidth / 8;
	this.image.y = (this.y-this.boxHeight)*SCALE;
}

Player.prototype.jump = function(){
	player.body.SetAwake(true);
	if(this.onGround && this.jumpTimeout<=0){
		    player.body.ApplyImpulse( new b2d.b2Vec2(0,-this.mass*10), this.body.GetWorldCenter() );
		    this.jumpTimeout = 15;		    	
	}	
}

Player.prototype.moveLeft = function(){
	player.body.ApplyForce( new b2d.b2Vec2(-100,0), this.body.GetWorldCenter() );
}

Player.prototype.moveRight = function () {
    
    player.body.ApplyForce(new b2d.b2Vec2(100, 0), this.body.GetWorldCenter());

}

Player.prototype.moveDown = function(){
	if(!this.onGround)
	this.body.ApplyForce( new b2d.b2Vec2(0,500), this.body.GetWorldCenter() );		
}


Player.prototype.update = function() {
	this.moveDown();
	this.jumpTimeout --;

	if (this.body.GetPosition().y * SCALE > stage.canvas.height + this.imageheight / 2 || this.body.GetPosition().x * SCALE < -this.imagewidth / 2) {
		this.isOutOfBounds =  true;
	}

	if(this.numFootContacts<1){
		this.onGround = false;
	}else{
		this.onGround = true;
	}
	if (this.onGround != this.groundCheck) {
	    if (this.onGround)
	        this.image.gotoAndPlay("Run");
	    else
	        this.image.gotoAndPlay("Jump");
	    this.groundCheck = this.onGround;
	}

	if (Key.isDown(Key.UP)) player.jump();
	if (Key.isDown(Key.SPACE)) player.jump();
	if (Key.isDown(Key.DOWN)) player.moveDown();
	if (Key.isDown(Key.LEFT)) player.moveLeft();	
	if (Key.isDown(Key.RIGHT)) player.moveRight();
	if (Key.isEmpty() && !this.onGround) {
	}

	if (this.body.GetPosition().x * SCALE > stage.canvas.width - this.imagewidth / 4) {
	    var posY = this.body.GetPosition().y;
	    var posX = stage.canvas.width - this.imagewidth / 4;
	    this.body.SetPosition(new b2d.b2Vec2(posX/SCALE, posY));
	}

  	this.x = this.body.GetPosition().x;
    this.y = this.body.GetPosition().y;

  	this.image.x = this.body.GetPosition().x;
  	this.image.y = this.body.GetPosition().y;

};


