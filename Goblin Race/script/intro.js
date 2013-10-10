function showIntro() {

    var intro1 = createjs.Sound.createInstance("intro1");
    intro1.setVolume(1.2);
    intro1.addEventListener("complete", next);

    var bild1 = new createjs.Bitmap(queue.getResult("bild1"));
    bild1.addEventListener("click", function () {
        intro1.stop();
        menu.showMenu();
    });

    stage.addChild(bild1);
    intro1.play();
    stage.update();
}

function next() {

    var intro2 = createjs.Sound.createInstance("intro2");
    intro2.setVolume(1.2);
    intro2.addEventListener("complete", menu.showMenu);

    var bild2 = new createjs.Bitmap(queue.getResult("bild2"));
    bild2.addEventListener("click", function () {
        intro2.stop();
        menu.showMenu();
    });

    stage.addChild(bild2);
    intro2.play();
    stage.update();

}