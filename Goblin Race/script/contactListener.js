function ContactListener(){
	

	this.listener = new b2d.b2ContactListener;
    
    this.listener.BeginContact = function(contact) {
        var shape1 = contact.GetFixtureA();
		var shape2 = contact.GetFixtureB();

		
		if(shape1.GetBody().GetUserData() =="coin"){
			deleteArray.push(shape1.GetBody());
			stage.removeChild(shape1.GetBody().bitmap);
			cCounter++;
		}
		else if(shape2.GetBody().GetUserData() == "coin"){
			deleteArray.push(shape2.GetBody());
			stage.removeChild(shape2.GetBody().bitmap);
			cCounter++;
		}

		else if(shape1.GetBody().GetUserData() =="bubble"){
			deleteArray.push(shape1.GetBody());
			stage.removeChild(shape1.GetBody().bitmap);
			isFlying = true;
			player.setFly();
			console.log(isFlying);
		}
		else if(shape2.GetBody().GetUserData() == "bubble"){
			deleteArray.push(shape2.GetBody());
			stage.removeChild(shape2.GetBody().bitmap);
			isFlying = true;
			player.setFly();
			console.log(isFlying);
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