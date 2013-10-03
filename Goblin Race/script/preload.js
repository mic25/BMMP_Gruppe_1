function preload() {
    var manifest = [
        {id:"bg", src:"img/Himmel.png"},
        {id:"fg", src:"img/Wiese.png"},
        { id: "figure", src: "img/schneemann.png" },
        { id: "platform1", src: "img/platform.png" }
    ];
    queue = new createjs.LoadQueue(false);
    queue.installPlugin(createjs.Sound);
    queue.addEventListener("complete", menu.showMenu);
    queue.loadManifest(manifest);
}