function preload() {
    var manifest = [
        //{id:"bg", src:"img/Himmel.png"},
        {id:"fg", src:"img/Wiese.png"},
        { id: "player", src: "img/player/player.png" },
        { id: "platform1", src: "img/platform.png" },
        { id: "coin", src: "img/coin.png" },
        { id: "goldPot", src: "img/goldPot.png" },

        { id: "bg_wiese", src: "img/bg/bg_wiese.png" },
        { id: "mg_wiese", src: "img/bg/mg_wiese.png" },
        { id: "fg_wiese", src: "img/bg/fg_wiese.png" },

        { id: "bg_rainbow_start", src: "img/bg/bg_rainbow_start.png" },
        { id: "bg_rainbow_end", src: "img/bg/bg_rainbow_end.png" },
        { id: "bg_rainbow", src: "img/bg/bg_rainbow.png" },
        { id: "mg_rainbow", src: "img/bg/mg_rainbow.png" },
        { id: "mg_rainbow_start", src: "img/bg/mg_rainbow_start.png" },
        { id: "mg_rainbow_end", src: "img/bg/mg_rainbow_end.png" },
        { id: "fg_rainbow", src: "img/bg/fg_rainbow.png" },
        { id: "fg_rainbow_start", src: "img/bg/fg_rainbow_start.png" },
        { id: "fg_rainbow_end", src: "img/bg/fg_rainbow_end.png" },

        { id: "bg_cloud_start", src: "img/bg/bg_cloud_start.png" },
        { id: "bg_cloud_end", src: "img/bg/bg_cloud_end.png" },
        { id: "bg_cloud", src: "img/bg/bg_cloud.png" },
        { id: "mg_cloud", src: "img/bg/mg_cloud.png" },
        { id: "mg_cloud_start", src: "img/bg/mg_cloud_start.png" },
        { id: "mg_cloud_end", src: "img/bg/mg_cloud_end.png" },
        { id: "fg_cloud", src: "img/bg/fg_cloud.png" },
        { id: "fg_cloud_start", src: "img/bg/fg_cloud_start.png" },
        { id: "fg_cloud_end", src: "img/bg/fg_cloud_end.png" },

        { id: "plat_wiese_single", src: "img/plat/plat_wiese_single.png" },
        { id: "plat_wiese_l", src: "img/plat/plat_wiese_l.png" },
        { id: "plat_wiese_r", src: "img/plat/plat_wiese_r.png" },
        { id: "plat_wiese_m", src: "img/plat/plat_wiese_m.png" },

        { id: "overlay", src: "img/overlay.png" }
    ];
    queue = new createjs.LoadQueue(false);
    queue.installPlugin(createjs.Sound);
    queue.addEventListener("complete", menu.showMenu);
    queue.loadManifest(manifest);
}