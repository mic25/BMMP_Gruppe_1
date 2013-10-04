function ContactListener(){
	

	this.listener = new b2d.b2ContactListener;
    
    this.listener.BeginContact = function(contact) {
        var shape1 = contact.GetFixtureA();
		var shape2 = contact.GetFixtureB();

		if(shape1.GetBody().GetUserData() == "player"){
			player.numFootContacts++;	
		}else if(shape2.GetBody().GetUserData() == "player"){
			player.numFootContacts++;
		}
		if(shape1.GetBody().GetUserData() =="coin"){
			deleteArray.push(shape1.GetBody());
			stage.removeChild(shape1.GetBody().bitmap);
		}
		else if(shape2.GetBody().GetUserData() == "coin"){
			deleteArray.push(shape2.GetBody());
			stage.removeChild(shape2.GetBody().bitmap);
		}

    }

    this.listener.EndContact = function(contact) {
        var shape1 = contact.GetFixtureA();
		var shape2 = contact.GetFixtureB();

		if(shape1.GetBody().GetUserData() == "player"){
			player.numFootContacts--;
		}else if(shape2.GetBody().GetUserData() == "player"){
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