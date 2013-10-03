function preload() {
    var manifest = [
        {id:"bg", src:"img/Himmel.png"},
        {id:"fg", src:"img/Wiese.png"},
        { id: "figure", src: "img/schneemann.png" },
        { id: "platform1", src: "img/platform.png" },

        { id: "bg_green", src: "img/bg_green.png" },

        { id: "bg_rainbow_start", src: "img/bg_rainbow_start.png" },
        { id: "bg_rainbow_end", src: "img/bg_rainbow_end.png" },
        { id: "bg_rainbow_1", src: "img/bg_rainbow1.png" },
        { id: "bg_rainbow_2", src: "img/bg_rainbow2.png" },
        { id: "bg_rainbow_3", src: "img/bg_rainbow3.png" }
    ];
    queue = new createjs.LoadQueue(false);
    queue.installPlugin(createjs.Sound);
    queue.addEventListener("complete", menu.showMenu);
    queue.loadManifest(manifest);
}