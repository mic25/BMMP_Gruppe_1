function preload() {
    var manifest = [
        //SOUNDS
        { id: "running", src: "sound/sabre_dance.mp3" },

        { id: "introSound", src: "sound/intro.wav" },
        { id: "laughingDevil", src: "sound/laughing.m4a" },

        { id: "coin_1", src: "sound/coin1.wav" },
        { id: "coin_2", src: "sound/coin2.wav" },
        { id: "coin_3", src: "sound/coin3.wav" },
        { id: "coin_4", src: "sound/coin4.wav" },

        { id: "stop", src: "sound/pause.wav" },
        { id: "further", src: "sound/continue.wav" },

        { id: "distant", src: "sound/distance.wav" },
        { id: "speedy", src: "sound/speed.wav" },

        { id: "ende_1", src: "sound/ende1.wav" },
        { id: "ende_2", src: "sound/ende2.wav" },
        { id: "ende_3", src: "sound/ende3.wav" },
        { id: "ende_4", src: "sound/ende4.wav" },
        { id: "ende_5", src: "sound/ende5.wav" },
        { id: "ende_6", src: "sound/ende6.wav" },
        { id: "ende_7", src: "sound/ende7.wav" },
        { id: "ende_8", src: "sound/ende8.wav" },

        { id: "escape_1", src: "sound/escape1.wav" },
        { id: "escape_2", src: "sound/escape2.wav" },
        { id: "escape_3", src: "sound/escape3.wav" },

        { id: "eat_1", src: "sound/essen1.wav" },
        { id: "eat_2", src: "sound/essen2.wav" },
        { id: "eat_3", src: "sound/essen3.wav" },

        { id: "fly_1", src: "sound/fly1.wav" },
        { id: "fly_2", src: "sound/fly2.wav" },

        { id: "jump_1", src: "sound/jump1.wav" },
        { id: "jump_2", src: "sound/jump2.wav" },
        { id: "jump_3", src: "sound/jump3.wav" },
        { id: "ground", src: "sound/floor.wav" },

        { id: "intro1", src: "sound/intro1.wav" },
        { id: "intro2", src: "sound/intro2.wav" },

        //IAMGES
        //{id:"bg", src:"img/Himmel.png"},
        { id:"devil", src:"img/Teufel.png"},
        { id:"soundOn", src:"img/soundOn.png"},
        { id:"soundOff", src:"img/soundOff.png"},
        { id:"fg", src:"img/Wiese.png"},
        { id: "player", src: "img/player/player.png" },
        { id: "platform1", src: "img/platform.png" },
        { id: "coin", src: "img/coin.png" },
        { id: "goldPot", src: "img/goldPot.png" },
        { id: "bubble", src: "img/bubble.png"},
        { id: "candyCane", src: "img/candyCane.png"},

        { id: "bg_wiese", src: "img/bg/bg_wiese.png" },

        { id: "bg_rainbow_start", src: "img/bg/bg_rainbow_start.png" },
        { id: "bg_rainbow_end", src: "img/bg/bg_rainbow_end.png" },
        { id: "bg_rainbow", src: "img/bg/bg_rainbow.png" },

        { id: "bg_cloud_start", src: "img/bg/bg_cloud_start.png" },
        { id: "bg_cloud_end", src: "img/bg/bg_cloud_end.png" },
        { id: "bg_cloud", src: "img/bg/bg_cloud.png" },

        { id: "bg_cave_start", src: "img/bg/bg_cave_start.png" },
        { id: "bg_cave_end", src: "img/bg/bg_cave_end.png" },
        { id: "bg_cave", src: "img/bg/bg_cave.png" },

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

        { id: "fg_sprite", src: "img/bg/fg_sprite.png" },
        { id: "mg_sprite", src: "img/bg/mg_sprite.png" },

        { id: "bild1", src: "img/Bild1.png" },
        { id: "bild2", src: "img/Bild2.png" },

        { id: "overlay", src: "img/overlay.png" }
    ];
    queue = new createjs.LoadQueue(false);
    queue.installPlugin(createjs.Sound);
    queue.addEventListener("complete", showIntro);
    queue.loadManifest(manifest);
}