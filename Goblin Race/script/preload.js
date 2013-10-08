function preload() {
    var manifest = [
        //SOUNDS
        { id: "intro", src: "sound/intro.wav" },
        { id: "laughing", src: "sound/laughing.m4a" },

        { id: "coin1", src: "sound/coin1.wav" },
        { id: "coin2", src: "sound/coin2.wav" },
        { id: "coin3", src: "sound/coin3.wav" },
        { id: "coin4", src: "sound/coin4.wav" },

        { id: "pause", src: "sound/pause.wav" },
        { id: "continue", src: "sound/continue.wav" },

        { id: "distance", src: "sound/distance.wav" },
        { id: "speed", src: "sound/speed.wav" },

        { id: "ende1", src: "sound/ende1.wav" },
        { id: "ende2", src: "sound/ende2.wav" },
        { id: "ende3", src: "sound/ende3.wav" },
        { id: "ende4", src: "sound/ende4.wav" },
        { id: "ende5", src: "sound/ende5.wav" },
        { id: "ende6", src: "sound/ende6.wav" },
        { id: "ende7", src: "sound/ende7.wav" },
        { id: "ende8", src: "sound/ende8.wav" },

        { id: "escape1", src: "sound/escape1.wav" },
        { id: "escape2", src: "sound/escape2.wav" },
        { id: "escape3", src: "sound/escape3.wav" },

        { id: "essen1", src: "sound/ssen1.wav" },
        { id: "essen2", src: "sound/essen2.wav" },
        { id: "essen3", src: "sound/essen3.wav" },

        { id: "fly1", src: "sound/fly1.wav" },
        { id: "fly2", src: "sound/fly2.wav" },

        { id: "jump1", src: "sound/jump1.wav" },
        { id: "jump2", src: "sound/jump2.wav" },
        { id: "jump3", src: "sound/jump3.wav" },
        { id: "floor", src: "sound/floor.wav" },

        //IAMGES
        //{id:"bg", src:"img/Himmel.png"},
        { id:"fg", src:"img/Wiese.png"},
        { id: "player", src: "img/player/player.png" },
        { id: "platform1", src: "img/platform.png" },
        { id: "coin", src: "img/coin.png" },
        { id: "goldPot", src: "img/goldPot.png" },
        { id: "bubble", src: "img/bubble.png"},
        { id: "candyCane", src: "img/candyCane.png"},

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

        { id: "bg_cave_start", src: "img/bg/bg_cave_start.png" },
        { id: "bg_cave_end", src: "img/bg/bg_cave_end.png" },
        { id: "bg_cave", src: "img/bg/bg_cave.png" },
        { id: "mg_cave", src: "img/bg/mg_cave.png" },
        { id: "mg_cave_start", src: "img/bg/mg_cave_start.png" },
        { id: "mg_cave_end", src: "img/bg/mg_cave_end.png" },
        { id: "fg_cave", src: "img/bg/fg_cave.png" },
        { id: "fg_cave_start", src: "img/bg/fg_cave_start.png" },
        { id: "fg_cave_end", src: "img/bg/fg_cave_end.png" },

        { id: "plat_wiese_single", src: "img/plat/plat_wiese_single.png" },
        { id: "plat_wiese_l", src: "img/plat/plat_wiese_l.png" },
        { id: "plat_wiese_r", src: "img/plat/plat_wiese_r.png" },
        { id: "plat_wiese_m", src: "img/plat/plat_wiese_m.png" },

        { id: "plat_cloud_single", src: "img/plat/plat_cloud_single.png" },
        { id: "plat_cloud_l", src: "img/plat/plat_cloud_l.png" },
        { id: "plat_cloud_r", src: "img/plat/plat_cloud_r.png" },
        { id: "plat_cloud_m", src: "img/plat/plat_cloud_m.png" },

        { id: "plat_rainbow_single", src: "img/plat/plat_rainbow_single.png" },
        { id: "plat_rainbow_l", src: "img/plat/plat_rainbow_l.png" },
        { id: "plat_rainbow_r", src: "img/plat/plat_rainbow_r.png" },
        { id: "plat_rainbow_m", src: "img/plat/plat_rainbow_m.png" },

        { id: "plat_cave_single", src: "img/plat/plat_cave_single.png" },
        { id: "plat_cave_l", src: "img/plat/plat_cave_l.png" },
        { id: "plat_cave_r", src: "img/plat/plat_cave_r.png" },
        { id: "plat_cave_m", src: "img/plat/plat_cave_m.png" },

        { id: "overlay", src: "img/overlay.png" }
    ];
    queue = new createjs.LoadQueue(false);
    queue.installPlugin(createjs.Sound);
    queue.addEventListener("complete", menu.showMenu);
    queue.loadManifest(manifest);
}