function Level() {

    this.style = "cloud"; // options : cloud, cave, rainbow 
    this.last_bg = 3; //last added image-part  0 = start, 1 = middle, 2 = end, 3 = wiese
    this.last_mg = 2; // 0 = start, 1 = middle, 2 = end
    this.last_fg = 2; // 0 = start, 1 = middle, 2 = end
    this.bg_im; //last added image
    this.mg_im;
    this.fg_im;

    this.bg = new Array();
    this.mg = new Array();
    this.fg = new Array();

    this.BG_ELEMENTS = 2;
    this.PL_ELEMENTS = 7;
   
    this.platforms = new Array();
    this.plat;
    this.lastYPlat;

    this.coins = new Array();
    this.coin;

    this.bubble = null;

    this.candyCane = null;
    this.candyTick = 0;

    this.randomC = this.random(5, 15);
    console.log("randomC" + this.randomC);
    this.randomB = this.random(5, 15);
    console.log("randomB" + this.randomB);

    var mg_data = {
        "images": [queue.getResult("mg_sprite")],
        "frames": [
            [2, 3477, 1366, 384],
            [2, 3091, 1366, 384],
            [2, 2705, 1366, 384],
            [2, 2, 1366, 385],
            [2, 2319, 1366, 384],
            [2, 1933, 1366, 384],
            [2, 1547, 1366, 384],
            [2, 1161, 1366, 384],
            [2, 775, 1366, 384],
            [2, 389, 1366, 384]
        ],
        "animations": {
            "mg_cave": [0],
            "mg_cave_end": [1],
            "mg_cave_start": [2],
            "mg_cloud": [3],
            "mg_cloud_end": [4],
            "mg_cloud_start": [5],
            "mg_rainbow": [6],
            "mg_rainbow_end": [7],
            "mg_rainbow_start": [8],
            "mg_wiese": [9]
        }
    }
    var fg_data = {
        "images": [queue.getResult("fg_sprite")],
        "frames": [
            [2282, 2, 1138, 320],
            [1142, 646, 1138, 320],
            [1142, 324, 1138, 320],
            [1142, 2, 1138, 320],
            [2, 646, 1138, 320],
            [2, 324, 1138, 320],
            [1142, 2, 1138, 320],
            [2, 646, 1138, 320],
            [2, 324, 1138, 320],
            [2, 2, 1138, 320]
        ],
        "animations": {
            "fg_cave": [0],
            "fg_cave_end": [1],
            "fg_cave_start": [2],
            "fg_cloud": [3],
            "fg_cloud_end": [4],
            "fg_cloud_start": [5],
            "fg_rainbow": [6],
            "fg_rainbow_end": [7],
            "fg_rainbow_start": [8],
            "fg_wiese": [9]
        }
    }
    this.mg_sprite = new createjs.SpriteSheet(mg_data);
    this.fg_sprite = new createjs.SpriteSheet(fg_data);
    this.initialize();
}

Level.prototype.random = function (min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

Level.prototype.initialize = function () {

    //setup Background
    this.bg_im = new createjs.Bitmap(queue.getResult("bg_wiese"));
    this.bg[0] = this.bg_im;
    this.bg_im.name = "bg_wiese";

    this.mg[0] = new createjs.Sprite(this.mg_sprite, "mg_wiese");
    this.mg[0].play();
    this.mg[0].name = "mg_wiese";
    this.mg[0].scaleX = 2;
    this.mg[0].scaleY = 2;

    this.fg[0] = new createjs.Sprite(this.fg_sprite, "fg_wiese");
    this.fg[0].play();
    this.fg[0].name = "fg_wiese";
    this.fg[0].scaleX = 1 / 0.41667;
    this.fg[0].scaleY = 1 / 0.41667;
    bg_stage.addChildAt(this.bg[0],0);
    bg_stage.addChildAt(this.mg[0],1);
    bg_stage.addChildAt(this.fg[0],2);

    this.generateBackground();

    //Add MG
    var newX = this.mg[0].x + this.bg[0].image.width - 2;
    var lastStyle;
    if (this.mg[0].name.indexOf("end") != -1)
        lastStyle = "wiese";
    else if (this.mg[0].name.indexOf("rainbow") != -1)
        lastStyle = "rainbow";
    else if (this.mg[0].name.indexOf("cloud") != -1)
        lastStyle = "cloud";
    else if (this.mg[0].name.indexOf("cave") != -1)
        lastStyle = "cave";
    else
        lastStyle = "wiese"; //more to come
    var url;

    if (lastStyle != this.getStyleAt(newX)) {
        if (lastStyle == "wiese") {
            url = "mg_" + this.getStyleAt(newX) + "_start";
            this.last_mg = 0;
        }
        else {
            if (this.last_mg == 0) {
                url = "mg_" + this.getStyleAt(newX) + "_start";
                this.last_mg = 0;
            }
            else {
                if (this.getStyleAt(newX) == "wiese") {
                    url = "mg_" + lastStyle + "_end";
                    this.last_mg = 2;
                }
                else {
                    url = "mg_" + this.getStyleAt(newX) + "_start";
                    this.last_mg = 0;
                }
            }
        }
    }
    else {
        url = "mg_" + lastStyle;
        this.last_mg = 1;
    }
    console.log(url);
    this.mg[1] = new createjs.Sprite(this.mg_sprite, url);
    this.mg[1].play();
    this.mg[1].name = url;
    this.mg[1].scaleX = 2;
    this.mg[1].scaleY = 2;
    bg_stage.addChildAt(this.mg[1],2);
    this.mg[1].x = newX;

    //Add FG
    var newX = this.fg[0].x + this.bg[0].image.width - 2;
    var lastStyle;
    if (this.fg[0].name.indexOf("end") != -1)
        lastStyle = "wiese";
    else if (this.fg[0].name.indexOf("rainbow") != -1)
        lastStyle = "rainbow";
    else if (this.fg[0].name.indexOf("cloud") != -1)
        lastStyle = "cloud";
    else if (this.fg[0].name.indexOf("cave") != -1)
        lastStyle = "cave";
    else
        lastStyle = "wiese"; //more to come
    var url;

    if (lastStyle != this.getStyleAt(newX)) {
        if (lastStyle == "wiese") {
            url = "fg_" + this.getStyleAt(newX) + "_start";
            this.last_fg = 0;
        }
        else {
            if (this.last_fg == 0) {
                url = "fg_" + this.getStyleAt(newX) + "_start";
                this.last_fg = 0;
            }
            else {
                if (this.getStyleAt(newX) == "wiese") {
                    url = "fg_" + lastStyle + "_end";
                    this.last_fg = 2;
                }
                else {
                    url = "fg_" + this.getStyleAt(newX) + "_start";
                    this.last_fg = 0;
                }
            }
        }
    }
    else {
        url = "fg_" + lastStyle;
        this.last_fg = 1;
    }
    console.log(url);
    this.fg[1] = new createjs.Sprite(this.fg_sprite, url);
    this.fg[1].play();
    this.fg[1].name = url;
    this.fg[1].scaleX = 1 / 0.41667;
    this.fg[1].scaleY = 1 / 0.41667;
    bg_stage.addChildAt(this.fg[1],4);
    this.fg[1].x = newX;

    //Startplatform
    this.plat = new Platform(352 / SCALE, 500 / SCALE, 10,"wiese"); 
    this.platforms.push(this.plat);
    this.platformCounterBubble = 0;
    this.platformCounterCandy = 0;

    //StartCoin
    this.coin = new Coin(700 / SCALE, 300 / SCALE); 
    this.coins.push(this.coin);
}

Level.prototype.generateLevel = function () {
    var newXPlat, newYPlat;

    while (this.platforms.length <= this.PL_ELEMENTS) {
        this.platformCounterBubble ++;
        this.platformCounterCandy ++;

        var randomSign = Math.random();
        var lastXPlat = this.plat.body.GetPosition().x * SCALE;
        this.lastYPlat = this.plat.body.GetPosition().y * SCALE;
        var tiles = Math.floor(Math.random() * (game.tiles_max - game.tiles_min + 1) + game.tiles_min);
        newXPlat = lastXPlat + Math.floor(Math.random() * (game.horizontal_max - game.horizontal_min + 1)) + game.horizontal_min
            + (this.plat.tiles * this.plat.segmentSize) / 2 + (tiles * this.plat.segmentSize) / 2;

        if (randomSign < this.lastYPlat / oldCanvasHeight) {
            newYPlat = this.lastYPlat - Math.random() * game.vertical;
        }
        else {
            newYPlat = this.lastYPlat + Math.random() * game.vertical;
        }

        if (newYPlat > oldCanvasHeight - this.plat.segmentHeight) {
            newYPlat -= game.vertical;
        }
        else if (newYPlat < this.plat.segmentHeight + 4 * game.vertical) {
            newYPlat += 2 * game.vertical;
        }
        this.plat = new Platform(newXPlat / SCALE, newYPlat / SCALE, tiles, this.getPlatStyleAt(newXPlat));
        this.platforms.push(this.plat);

        this.generateCoins(newXPlat, newYPlat, tiles);
    }

     if(this.platformCounterBubble > this.randomB && this.bubble == null){
        var newBubbleY = newYPlat - 200;
        this.bubble = new Bubble(newXPlat / SCALE, newBubbleY / SCALE);
        this.bubble.update();
        this.platformCounterBubble = 0;
        this.randomB = this.random(5, 15);
        console.log(this.randomB);
        console.log("newBubble " + newYPlat);
        }

    if(this.platformCounterCandy > this.randomC && this.candyCane == null){
        var newCandyY = newYPlat - 200;
        this.candyCane = new CandyCane(newXPlat / SCALE, newCandyY / SCALE);
        this.candyCane.update();
        this.platformCounterCandy = 0;
        this.randomC = this.random(5, 15);
        console.log(this.randomC);
        console.log("newCandy " + newYPlat);
        }
}

Level.prototype.generateCoins = function(x , y, anzahl) {
        
        var newYCoin = y;
        var platformLength = anzahl * 200;
        var randomSign = this.random(platformLength/2, platformLength/3);

        var newXCoin = x - randomSign;

        var randomCoins = Math.floor(Math.random() * anzahl*2)+ Math.floor(1*anzahl/2);
        console.log(randomCoins);

        if(randomCoins < anzahl){
            newXCoin = x - platformLength/4
        }

        for(var i = 0; i<randomCoins; i++){
        newXCoin +=80;
        var newY = this.random(100, 300);
        this.coin = new Coin(newXCoin / SCALE, (newYCoin - newY) / SCALE);
        this.coins.push(this.coin);
  //  }
}
}

Level.prototype.updatePlatforms = function () {
    for (var i = 0; i < this.platforms.length; i++) {
        this.platforms[i].update();
        if (this.platforms[i].start < -this.plat.segmentSize * (game.tiles_max+3) ) {
            this.platforms[i].remove();        
            this.platforms.splice(i, 1);
        }
    }
}

Level.prototype.updateCoins = function () {
    for (var i = 0; i < this.coins.length; i++) {
        this.coins[i].update();
        if (this.coins[i].body.bitmap.x <= -1500) {
            this.coins.splice(i, 1);
            this.coins[i].remove();
        }
    }
}

Level.prototype.updateBubbles = function () {
    if(this.bubble !=null){
        this.bubble.update();
        if (this.bubble.body.bitmap.x < -50) {        
            coin_stage.removeChild(this.bubble);            
            deleteArray.push(this.bubble);
            this.bubble = null;           
        }
    }
}

Level.prototype.updateCandyCane = function () {
    if(this.candyCane != null){
        this.candyCane.update();
        this.candyTick ++;
        if(this.candyTick > 300){
            isCandy = false;
            this.candyTick = 0;
        }
        if (this.candyCane.body.bitmap.x < -50) {        
            coin_stage.removeChild(this.candyCane);            
            deleteArray.push(this.candyCane);
            this.candyCane = null;        
        }
    }
}


Level.prototype.generateBackground = function () {

    //add new Background
    while (this.bg.length < this.BG_ELEMENTS) { 
        var newX = this.bg_im.x + this.bg_im.image.width - 1;
        if (this.last_bg == 1 || this.last_bg == 3) {
            this.last_bg = Math.floor(this.last_bg + Math.random() + 0.5)%4;
        }
        else this.last_bg = (this.last_bg + 1)%4 ;
        var url;
        if (this.last_bg == 1) {	
            url = "bg_" + this.style;
        }
        else if (this.last_bg == 0) {
            var random = Math.random();
            //Sobald alle stile verfügbar !
            if (random > 0.66) this.style = "cloud";
            else if (random > 0.33) this.style = "rainbow";
            else this.style = "cave"; 
            url = "bg_" + this.style + "_start";
        }
        else if (this.last_bg == 3) {
            url = "bg_wiese";
        }
        else {
            url = "bg_" + this.style + "_end";
        }
        this.bg_im = new createjs.Bitmap(queue.getResult(url));
        this.bg_im.name = url;
        console.log(url);
        this.bg.push(this.bg_im);
        bg_stage.addChildAt(this.bg_im,0);
        this.bg_im.x = newX;
    }
}

Level.prototype.updateBackground = function () {

    //move images
    for (var i = 0; i < this.BG_ELEMENTS; i++) {
        this.bg[i].x += game.bg_speed;
        this.mg[i].x += game.mg_speed;
        this.fg[i].x += game.fg_speed;
    }

    //remove images out of bounds
    for (var i = 0; i < this.BG_ELEMENTS ; i++) {
        if (this.bg[i] != undefined && this.bg[i].x < -(this.bg[0].image.width)) {
            bg_stage.removeChild(this.bg[i]);
            this.bg.splice(i, 1);
            deleteArray.push(this.bg[i]);
        }
    }
    if (this.mg[0] != undefined && this.mg[0].x < -this.bg[0].image.width) {
        this.mg.reverse();
        this.generateNewMG();
    }
    if (this.fg[0] != undefined && this.fg[0].x < -(this.bg[0].image.width)) {
        this.fg.reverse();
        this.generateNewFG();
    }
}

Level.prototype.getStyleAt = function (pos) {
    var str = this.bg_im.image.src.split("/")[this.bg_im.image.src.split("/").length - 1]
    if (str.indexOf("end") != -1)
        return "wiese";
    if (str.indexOf("rainbow") != -1)
        return "rainbow";
    else if(str.indexOf("cloud") != -1)
        return "cloud";
    else if(str.indexOf("cave") != -1)
        return "cave";
    else return "wiese";
}

Level.prototype.getPlatStyleAt = function (pos) {
    var offset = 100; var mg = this.mg[1];
    for (var i = 0; i < this.BG_ELEMENTS ; i++) {
        if (this.mg[i].x < pos && this.mg[i].x + this.bg[0].image.width >= pos) {
            mg = this.mg[i];
        }
    }
    //var str = mg.image.src.split("/")[mg.image.src.split("/").length - 1]
    var str = mg.name;
    if (pos < mg.x + this.bg[0].image.width / 3) {
        if (str.indexOf("start") != -1)
            return "wiese";
    }
    else if (pos > mg.x + this.bg[0].image.width / 2) {
        if (str.indexOf("end") != -1)
            return "wiese";
        }
    if (str.indexOf("rainbow") != -1)
        return "rainbow";
    else if (str.indexOf("cloud") != -1)
        return "cloud";
    else if (str.indexOf("cave") != -1)
        return "cave";
    else return "wiese";
    
}

Level.prototype.count = function (){
    if(isCandy) counter += 3;
    else counter ++;
}

Level.prototype.generateNewFG = function () {
    var newX = this.fg[0].x + this.bg[0].image.width - 2;
    var lastStyle
    if (this.fg[0].name.indexOf("end") != -1)
        lastStyle = "wiese";
    else if (this.fg[0].name.indexOf("rainbow") != -1)
        lastStyle = "rainbow";
    else if (this.fg[0].name.indexOf("cloud") != -1)
        lastStyle = "cloud";
    else if (this.fg[0].name.indexOf("cave") != -1)
        lastStyle = "cave";
    else
        lastStyle = "wiese"; //more to come
    var url;

    if (lastStyle != this.getStyleAt(newX)) {
        if (lastStyle == "wiese") {
            url = "fg_" + this.getStyleAt(newX) + "_start";
            this.last_fg = 0;
        }
        else {
            if (this.last_fg == 0) {
                url = "fg_" + this.getStyleAt(newX) + "_start";
                this.last_fg = 0;
            }
            else {
                if (this.getStyleAt(newX) == "wiese") {
                    url = "fg_" + lastStyle + "_end";
                    this.last_fg = 2;
                }
                else {
                    url = "fg_" + this.getStyleAt(newX) + "_start";
                    this.last_fg = 0;
                }
            }
        }
    }
    else {
        url = "fg_" + lastStyle;
        this.last_fg = 1;
    }
    this.fg[1].gotoAndPlay(url);
    this.fg[1].name = url;
    this.fg[1].x = newX;
}

Level.prototype.generateNewMG = function () {
    var newX = this.mg[0].x + this.bg[0].image.width - 2;
    var lastStyle
    if (this.mg[0].name.indexOf("end") != -1)
        lastStyle = "wiese";
    else if (this.mg[0].name.indexOf("rainbow") != -1)
        lastStyle = "rainbow";
    else if (this.mg[0].name.indexOf("cloud") != -1)
        lastStyle = "cloud";
    else if (this.mg[0].name.indexOf("cave") != -1)
        lastStyle = "cave";
    else
        lastStyle = "wiese"; //more to come
    var url;

    if (lastStyle != this.getStyleAt(newX)) {
        if (lastStyle == "wiese") {
            url = "mg_" + this.getStyleAt(newX) + "_start";
            this.last_mg = 0;
        }
        else {
            if (this.last_mg == 0) {
                url = "mg_" + this.getStyleAt(newX) + "_start";
                this.last_mg = 0;
            }
            else {
                if (this.getStyleAt(newX) == "wiese") {
                    url = "mg_" + lastStyle + "_end";
                    this.last_mg = 2;
                }
                else {
                    url = "mg_" + this.getStyleAt(newX) + "_start";
                    this.last_mg = 0;
                }
            }
        }
    }
    else {
        url = "mg_" + lastStyle;
        this.last_mg = 1;
    }
    console.log("url = " +url)
    this.mg[1].gotoAndPlay(url);
    this.mg[1].name = url;
    this.mg[1].x = newX;
}
