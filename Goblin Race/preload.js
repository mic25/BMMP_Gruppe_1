function preload() {
    var manifest = [
        //TOFill
    ];
    queue = new createjs.LoadQueue(false);
    queue.installPlugin(createjs.Sound);
    queue.addEventListener("complete", menu.showMenu);
    queue.loadManifest(manifest);
}