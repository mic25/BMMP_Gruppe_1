function ContactListener(){
	
	this.listener = new b2d.b2ContactListener;
    
    this.listener.BeginContact = function(contact) {
        var shape1 = contact.GetFixtureA();
		var shape2 = contact.GetFixtureB();

		
		if(shape1.GetBody().GetUserData() =="coin"){
			game.playSound("coin1");
			deleteArray.push(shape1.GetBody());
			stage.removeChild(shape1.GetBody().bitmap);
			player.createCountParticle();
			level.count();
		}
		else if(shape2.GetBody().GetUserData() == "coin"){
			game.playSound("coin1");
			deleteArray.push(shape2.GetBody());
			stage.removeChild(shape2.GetBody().bitmap);
			player.createCountParticle();
			level.count();
		}

		else if(shape1.GetBody().GetUserData() =="bubble"){
			game.playSound("fly1");
			deleteArray.push(shape1.GetBody());
			stage.removeChild(shape1.GetBody().bitmap);
			isFlying = true;
			player.setFly();
			console.log(isFlying);
		}
		else if(shape2.GetBody().GetUserData() == "bubble"){
			game.playSound("fly1");
			deleteArray.push(shape2.GetBody());
			stage.removeChild(shape2.GetBody().bitmap);
			isFlying = true;
			player.setFly();
			console.log(isFlying);
		}

		else if(shape1.GetBody().GetUserData() =="candy"){
			deleteArray.push(shape1.GetBody());
			stage.removeChild(shape1.GetBody().bitmap);
			isCandy = true;
		}
		else if(shape2.GetBody().GetUserData() == "candy"){
			deleteArray.push(shape2.GetBody());
			stage.removeChild(shape2.GetBody().bitmap);
			isCandy = true;
		}

		else if(isFlying && shape1.GetBody().GetUserData() == "platform"){
			player.setRunning();
			isFlying = false;
			player.numFootContacts++;
			console.log(isFlying + "plattform");
		}
		else if(isFlying && shape2.GetBody().GetUserData() == "platform"){
			player.setRunning();
			isFlying = false;
			player.numFootContacts++;
			console.log(isFlying + "plattform");
		}

		else if(shape1.GetBody().GetUserData() == "platform"){
			player.numFootContacts++;	
		}else if(shape2.GetBody().GetUserData() == "platform"){
			player.numFootContacts++;
		}

    }

    this.listener.EndContact = function(contact) {
        var shape1 = contact.GetFixtureA();
		var shape2 = contact.GetFixtureB();

		if(shape1.GetBody().GetUserData() == "platform"){
			player.numFootContacts--;
		}else if(shape2.GetBody().GetUserData() == "platform"){
			player.numFootContacts--;
		}

    }

    this.listener.PostSolve = function(contact, impulse) {
    	var shape1 = contact.GetFixtureA();
		var shape2 = contact.GetFixtureB();
		


    }

    this.listener.PreSolve = function(contact, oldManifold) {
		
    }

    return this.listener;
}