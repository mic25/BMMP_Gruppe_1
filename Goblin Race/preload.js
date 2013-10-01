function preload() {
    var manifest = [
        {id:"bg", src:"img/Himmel.png"},
        {id:"ground", src:"img/Wiese.png"},
    ];
    queue = new createjs.LoadQueue(false);
    queue.installPlugin(createjs.Sound);
    queue.addEventListener("complete", menu.showMenu);
    queue.loadManifest(manifest);
}