var Key = {
  	_pressed: {},

 	LEFT: 37,
  	UP: 38,
  	RIGHT: 39,
  	DOWN: 40,
  	SPACE: 32,
  	H: 72,
  	P: 80,
  	R: 82,
  	ENTER: 13,
    ESCAPE: 27,
  
	  isDown: function(keyCode) {
	    return this._pressed[keyCode];
	  },
  
	  onKeydown: function(event) {
	  	//console.log(event.keyCode);
	    this._pressed[event.keyCode] = true;
	  },
  
	  onKeyup: function(event) {
	    delete this._pressed[event.keyCode];
	  },

	  isEmpty: function() {
	  	return Object.keys(this._pressed).length>0;
	  }
};