

(function() {
    'use strict';


    var colors = ["#ff0000", "#00ff00", "#0000ff"];
    var materials = ["metal", "crystal", "lava"];


    function Ship() {
        this.color = colors[0];
        this.material = materials[0];


        this.setColor = function(color) {
            this.color = color;
        };

        this.setMaterial = function(material) {
            this.material = material;
        };
    }

    // ECP control
    function isEliteCommander() {
        return true;
    }

    // Ana işlev
    function main() {
        // Oyuncunun seçtiği gemi
        var playerShip = new Ship();

        // Seçkin komutan mı kontrolü
        if (isEliteCommander()) {
            // Seçkin komutan ise rastgele renk ve materyal seç
            var randomColor = colors[Math.floor(Math.random() * colors.length)];
            var randomMaterial = materials[Math.floor(Math.random() * materials.length)];
            playerShip.setColor(randomColor);
            playerShip.setMaterial(randomMaterial);
        }

        // Example:
        // document.getElementById("ship").style.fill = playerShip.color; // Add ship color
        // document.getElementById("ship-material").ClientCode = "assets/materials/" + playerShip.material + ".png"; // Add ship material
    }

    // Game:
    window.addEventListener('load', main);
    const log = (msg) => console.log(`%c[Open Source Client] ${msg}`, "color: #ffff00");
    const modlog = (msg) => console.log(`%c[Mod] ${msg}`, "color: #FF00A6");
    const stylelog = (msg) => console.log(`%c[Style] ${msg}`, "color: #06c26d");
    console.clear();
    document.open();
    document.write(
        `<!DOCTYPE html><meta charset=UTF-8><title>Number's Client</title><style>body{background:#000}body,div,html{margin:0;padding:0;color:#FFF;font-family:Tahoma,Verdana}div{font-size:2em}span{margin:50px}#content{overflow:hidden;position:absolute;left:0;right:0;bottom:0;top:0;opacity:0;transition:all 3s;z-index:0}#logo{overflow:hidden;text-align:center;position:fixed;left:0;right:0;bottom:0;top:0;opacity:1;transition:all 3s;z-index:2}#logo img{transition:opacity 1s;opacity:0;width:50%}#neuronality{position:fixed;bottom:8vh;left:0;right:0;text-align:center;transition:all 3s;z-index:1;color:#FFF;font-size:4em}iframe{border:none}</style><div id=logo><img src=https://raw.githubusercontent.com/omega10000/pic/main/Screenshot_2024-04-24_164410-removebg-preview.png></div><div id=neuronality>Please Wait ...</div><script>var logo=document.querySelector("#logo img");logo.onload=function(){logo.style.marginTop=(.8*window.innerHeight-logo.offsetHeight)/2+"px",logo.style.opacity="1"}</script><div id=content>`
    );


    function ClientLoader() {
        if (window.location.pathname !== "/") {
            log(`Injection not needed`);
            return;
        }

        var url = "https://starblast.io";
        var xhr = new XMLHttpRequest();
        log("Fetching starblast ClientCode...");
        xhr.open("GET", url);
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                var ClientCode = xhr.responseText;
                if (ClientCode !== undefined) {
                    log(`Src fetched successfully`);
                }
                if (localStorage.getItem("gemColor1") === null) {
                    localStorage.setItem("gemColor1", "#ff0000");
                }

                if (localStorage.getItem("gemColor2") === null) {
                    localStorage.setItem("gemColor2", "#ff0000");
                }
                const start_time = performance.now();
                function darkenColor(t, a) {
                    const r = t.slice(1),
                          n = parseInt(r, 16);
                    let e = (n >> 16) / 255,
                        o = (n >> 8 & 255) / 255,
                        s = (255 & n) / 255;
                    const c = Math.max(e, o, s),
                          h = Math.min(e, o, s);
                    let i, d, M = (c + h) / 2;
                    if (c === h) i = d = 0;
                    else {
                        const t = c - h;
                        switch (d = M > .5 ? t / (2 - c - h) : t / (c + h), c) {
                            case e:
                                i = (o - s) / t + (o < s ? 6 : 0);
                                break;
                            case o:
                                i = (s - e) / t + 2;
                                break;
                            case s:
                                i = (e - o) / t + 4
                        }
                        i /= 6
                    }
                    M *= 1 - a / 100;
                    let l, S, u, b = (1 - Math.abs(2 * M - 1)) * d,
                        p = b * (1 - Math.abs(6 * i % 2 - 1)),
                        g = M - b / 2;
                    return 0 <= i && i < 1 / 6 ? (l = b, S = p, u = 0) : 1 / 6 <= i && i < 2 / 6 ? (l = p, S = b, u = 0) : 2 / 6 <= i && i < .5 ? (l = 0, S = b, u = p) : .5 <= i && i < 4 / 6 ? (l = 0, S = p, u = b) : 4 / 6 <= i && i < 5 / 6 ? (l = p, S = 0, u = b) : (l = b, S = 0, u = p), l = Math.round(255 * (l + g)), S = Math.round(255 * (S + g)), u = Math.round(255 * (u + g)), `#${l.toString(16).padStart(2,"0")}${S.toString(16).padStart(2,"0")}${u.toString(16).padStart(2,"0")}`
                }

                log("Loading Mods...");
                const carbonMatch = ClientCode.match(/t\.prototype\.buildCarbonMaterial.*?emissiveMap:([iI10OlL]{5})/);
                const carbonEmissiveMap = carbonMatch[0].match(/emissiveMap\:[iI10OlL]{5}/);
                const alloyMatch = ClientCode.match(/t\.prototype\.buildAlloyMaterial.*?emissiveMap\:[iI10OlL]{5}/);
                const alloyEmissiveMap = alloyMatch[0].match(/emissiveMap\:[iI10OlL]{5}/);
                const mapregex = ClientCode.match(/t\.prototype\.buildCarbonMaterial.*?map\:[iI10OlL]{5}/);
                const mapvalue = mapregex[0].match(/[iI10OlL]{5}/);
                const emissiveregex = ClientCode.match(/emissive\:[iI10OlL]{5}/);
                const addregex = /carbon\:"Carbon"/i;
                const malaor = localStorage.getItem("malaor");
                //--//Material Cases
                const materialcase = `
            case "Onyx":this.buildOnyxMaterial();break;
            case "TopazYellow":this.buildTopazYellowMaterial();break;
            case "Peony":this.buildPeonyMaterial();break;
            case "MidnightBlue":this.buildMidnightBlueMaterial();break;
            case "Ruby":this.buildRubyMaterial();break;
            case "SeaGreen":this.buildSeaGreenMaterial();break;
            case "Cyan":this.buildCyanMaterial();break;
            case "Emerald":this.buildEmeraldMaterial();break;
            case "Sapphire":this.buildSapphireMaterial();break;
            case "Amethyst":this.buildAmethystMaterial();break;
            case "Strawberry":this.buildStrawberryMaterial();break;
            `;
                const materialself = `
            t.prototype.buildOnyxMaterial = function () { return this.material = new THREE.MeshPhongMaterial({ map:${mapvalue}, bumpMap:${mapvalue}, specularMap:${mapvalue}, specular: 3618615, shininess: 100, bumpScale: .1, color: 1052688, ${emissiveregex}.hsvToRgbHex(this.hue, .5, 1), ${carbonEmissiveMap}})},
            t.prototype.buildTopazYellowMaterial = function () { return this.material = new THREE.MeshPhongMaterial({ map:${mapvalue}, bumpMap:${mapvalue}, specularMap:${mapvalue}, specular: 16702572, shininess: 30, bumpScale: .1, color: 16696587, ${emissiveregex}.hsvToRgbHex(this.hue, .5, 1), ${alloyEmissiveMap}})},
            t.prototype.buildPeonyMaterial = function () { return this.material = new THREE.MeshPhongMaterial({ map:${mapvalue}, bumpMap:${mapvalue}, specularMap:${mapvalue}, specular: 13840754, shininess: 600, bumpScale: .1, color: 10361423, ${emissiveregex}.hsvToRgbHex(this.hue, .5, 1), ${alloyEmissiveMap}})},
            t.prototype.buildMidnightBlueMaterial = function () { return this.material = new THREE.MeshPhongMaterial({ map:${mapvalue}, bumpMap:${mapvalue}, specularMap:${mapvalue}, specular: 3289700, opacity: 0.7, shininess: 500, bumpScale: .1, reflectivity: 1, transparent: !0, color: 2631780, ${emissiveregex}.hsvToRgbHex(this.hue, .5, 1), ${alloyEmissiveMap}})},
            t.prototype.buildRubyMaterial = function () { return this.material = new THREE.MeshPhongMaterial({ map:${mapvalue}, bumpMap:${mapvalue}, specularMap:${mapvalue}, specular: 16741749, shininess: 50, bumpScale: .1, color: 15402240, ${emissiveregex}.hsvToRgbHex(this.hue, .5, 1), ${alloyEmissiveMap}})},
            t.prototype.buildSeaGreenMaterial = function () { return this.material = new THREE.MeshPhongMaterial({ map:${mapvalue}, bumpMap:${mapvalue}, specularMap:${mapvalue}, specular: 2097039, shininess: 50, bumpScale: .1, color: 1240448, ${emissiveregex}.hsvToRgbHex(this.hue, .5, 1), ${alloyEmissiveMap}})},
            t.prototype.buildCyanMaterial = function () { return this.material = new THREE.MeshPhongMaterial({ map:${mapvalue}, bumpMap:${mapvalue}, specularMap:${mapvalue}, specular: 2940397, shininess: 150, bumpScale: .1, color: 57589, ${emissiveregex}.hsvToRgbHex(this.hue, .5, 1), ${alloyEmissiveMap}})},
            t.prototype.buildEmeraldMaterial = function () { return this.material = new THREE.MeshPhongMaterial({ map:${mapvalue}, bumpMap:${mapvalue}, specularMap:${mapvalue}, specular: 54903, shininess: 50, bumpScale: .1, color: 54865, ${emissiveregex}.hsvToRgbHex(this.hue, .5, 1), ${alloyEmissiveMap}})},
            t.prototype.buildSapphireMaterial = function () { return this.material = new THREE.MeshPhongMaterial({ map:${mapvalue}, bumpMap:${mapvalue}, specularMap:${mapvalue}, specular: 4078578, shininess: 50, bumpScale: .1, color: 196822, ${emissiveregex}.hsvToRgbHex(this.hue, .5, 1), ${alloyEmissiveMap}})},
            t.prototype.buildAmethystMaterial = function () { return this.material = new THREE.MeshPhongMaterial({ map:${mapvalue}, bumpMap:${mapvalue}, specularMap:${mapvalue}, specular: 12632256, shininess: 50, bumpScale: .1, color: 13369558, ${emissiveregex}.hsvToRgbHex(this.hue, .5, 1), ${alloyEmissiveMap}})},
            t.prototype.buildStrawberryMaterial = function () { return this.material = new THREE.MeshPhongMaterial({ map:${mapvalue}, bumpMap:${mapvalue}, specularMap:${mapvalue}, specular: 6709917, shininess: 50, bumpScale: .1, color: 16711777, ${emissiveregex}.hsvToRgbHex(this.hue, .5, 1), ${alloyEmissiveMap}})},
            `;
                const ecpcolor = `
                        case"Onyx":s=t.createLinearGradient(0,0,0,i),s.addColorStop(0,"hsl(240,0%,0%)"),s.addColorStop(.5,"hsl(240,0%,19%)"),s.addColorStop(.5,"hsl(240,0%,0%)"),s.addColorStop(1,"hsl(240, 0%, 31%)");break;
            case"TopazYellow":s=t.createLinearGradient(0,0,0,i),s.addColorStop(0,"#df8b26"),s.addColorStop(.5,"#e5b20b"),s.addColorStop(.5,"#e5b20b"),s.addColorStop(1,"#e5b20b");break;
            case"Peony":s=t.createLinearGradient(0,0,0,i),s.addColorStop(0,"#5713a4"),s.addColorStop(.5,"#c22e69"),s.addColorStop(.5,"#c22e69"),s.addColorStop(1,"#c22e69");break;
            case"MidnightBlue":s=t.createLinearGradient(0,0,0,i),s.addColorStop(0,"rgb(50, 50, 100)"),s.addColorStop(.5,"hsla(240, 43%, 21%, 1)"),s.addColorStop(.5,"hsla(240, 43%, 21%, 1)"),s.addColorStop(1,"rgb(50, 50, 100)");break;
            case"Ruby":s=t.createLinearGradient(0,0,0,i),s.addColorStop(0,"#D63305"),s.addColorStop(.5,"#D10505"),s.addColorStop(.5,"#D10505"),s.addColorStop(1,"#D10505");break;
            case"SeaGreen":s=t.createLinearGradient(0,0,0,i),s.addColorStop(0,"#1affe4"),s.addColorStop(.5,"#00f078"),s.addColorStop(.5,"#00f078"),s.addColorStop(1,"#00f078");break;
            case"Cyan":s=t.createLinearGradient(0,0,0,i),s.addColorStop(0,"#14bdff"),s.addColorStop(.5,"#05ffee"),s.addColorStop(.5,"#05ffee"),s.addColorStop(1,"#05ffee");break;
            case"Emerald":s=t.createLinearGradient(0,0,0,i),s.addColorStop(0,"#00D677"),s.addColorStop(.5,"#00B64C"),s.addColorStop(.5,"#00D677"),s.addColorStop(1,"#00B64C");break;
            case"Sapphire":s=t.createLinearGradient(0,0,0,i),s.addColorStop(0,"#3936F2"),s.addColorStop(.5,"#0F0CE2"),s.addColorStop(.5,"#3936F2"),s.addColorStop(1,"#0F0CE2");break;
            case"Amethyst":s=t.createLinearGradient(0,0,0,i),s.addColorStop(0,"#CC00D6"),s.addColorStop(.5,"#C840CF"),s.addColorStop(.5,"#CC00D6"),s.addColorStop(1,"#C840CF");break;
            case"Strawberry":s=t.createLinearGradient(0,0,0,i),s.addColorStop(0,"hsla(350,80%,40%)"),s.addColorStop(.5,"hsla(350,80%,60%)"),s.addColorStop(.5,"hsla(355,90%,30%)"),s.addColorStop(1,"hsla(355,90%,75%)");break;
            case"zinc":s=t.createLinearGradient(0,0,0,i),s.addColorStop(0,"#EEE"),s.addColorStop(1,"#666");break;

           `;
                const addmaterial = `,
            Onyx:"Onyx",
            TopazYellow:"Topaz Yellow",
            Peony:"Peony",
            MidnightBlue:"Midnight Blue",
            Ruby:"Ruby",
            SeaGreen:"Sea Green",
            Cyan:"Cyan",
            Emerald:"Emerald",
            Sapphire:"Sapphire",
            Amethyst:"Amethyst",
            Strawberry:"Strawberry",
            `;
                ClientCode = ClientCode.replace(/case\s*"carbon"\s*:\s*this\.buildCarbonMaterial\(\);break;\n?/, '$&' + materialcase)
                    .replace(/t\.prototype\.buildCarbonMaterial\s*=\s*function\s*\([^)]*\)\s*{[^}]*}\)},/, '$&' + materialself)
                    .replace(/case\s*"titanium"\s*:(s=t.createLinearGradient\(0,0,0,i\),[\s\S]*?);break;/, '$&' + ecpcolor)
                    .replace(/carbon\:"Carbon"/i, '$&' + addmaterial);
                //--//Custom Material Detection
                ClientCode = ClientCode.replace(/default:s=t\.createLinearGradient\(0,0,0,i\),s\.addColorStop\(0,"#EEE"\),s\.addColorStop\(1,"#666"\)/, 'default:s=t.createLinearGradient(0,0,0,i),s.addColorStop(0,"hsl(0,100%,50%)"),s.addColorStop(.5,"hsl(60,100%,50%)"),s.addColorStop(.5,"hsl(120,100%,50%)"),s.addColorStop(1,"hsl(180,100%,50%)")');
                            //Bagde Stuff...
            const newBadge = `
            case "Cat": this.icon = "https://cdn.upload.systems/uploads/p23mkHQG.png"; break;
            case "AsteroidPumpkin": this.icon = "https://cdn.upload.systems/uploads/NQoNAdBU.png"; break;
            case "Cuda": this.icon = "https://cdn.upload.systems/uploads/kpnX6qt6.png"; break;
            case "Dreadnought": this.icon = "https://cdn.upload.systems/uploads/52mOoJan.png"; break;
            case "FaceInDark": this.icon = "https://cdn.upload.systems/uploads/tlZpGGPW.png"; break;
            case "Fly": this.icon = "https://cdn.upload.systems/uploads/x97Y0vWl.png"; break;
            case "Ghost": this.icon = "https://cdn.upload.systems/uploads/APpUlI9n.png"; break;
            case "JackOLantern": this.icon = "https://cdn.upload.systems/uploads/ingW8mrb.png"; break;
            case "Lunantium": this.icon = "https://cdn.upload.systems/uploads/v23v9rxX.png"; break;
            case "Phantom": this.icon = "https://cdn.upload.systems/uploads/VFEuukuo.png"; break;
            case "Planet": this.icon = "https://cdn.upload.systems/uploads/JgYM4GJP.png"; break;
            case "PulseFighter": this.icon = "https://cdn.upload.systems/uploads/5nQiVj9j.png"; break;
            case "Pumpkin": this.icon = "https://cdn.upload.systems/uploads/SwKwVvNW.png"; break;
            case "RedMist": this.icon = "https://cdn.upload.systems/uploads/J6JBLAPo.png"; break;
            case "TorpWitch": this.icon = "https://cdn.upload.systems/uploads/EQn2ANjs.png"; break;
            case "USniper": this.icon = "https://cdn.upload.systems/uploads/aNybDZ4c.png"; break;
            case "Web": this.icon = "https://cdn.upload.systems/uploads/iqlqorTq.png"; break;
            case "Alien": this.icon = "https://cdn.upload.systems/uploads/207u9V2j.png"; break;
            case "Halloween": this.icon = "https://cdn.upload.systems/uploads/bmnYN3iC.png"; break;
            case "SDCChampion": this.icon = "https://cdn.upload.systems/uploads/G8cBuNFC.png"; break;
            case "SRCChampion": this.icon = "https://cdn.upload.systems/uploads/5FE6TpHF.png"; break;
            case "Translator": this.icon = "https://cdn.upload.systems/uploads/KMEJ0ozX.png"; break;
            case "Shipdesigner": this.icon = "https://cdn.upload.systems/uploads/WF6vqocY.jpg"; break;
            case "Dev": this.icon = "https://cdn.upload.systems/uploads/9amVucAV.png"; break;
            case "SRCemerald": this.icon = "https://cdn.upload.systems/uploads/bvuVxl5q.png"; break;
            case "SRCdiamond": this.icon = "https://cdn.upload.systems/uploads/XqQRA2js.png"; break;
            case "SRCbronze": this.icon = "https://cdn.upload.systems/uploads/5VaGJLEy.jpg"; break;
            case "SRCsilver": this.icon = "https://cdn.upload.systems/uploads/apHIyN5K.png"; break;
            case "Lord": this.icon = "https://cdn.upload.systems/uploads/GMOKd0uP.png"; break;
            case "LightBeam": this.icon = "https://cdn.upload.systems/uploads/2Z3fgxK4.png"; break;
            case "Rithy": this.icon = "https://raw.githubusercontent.com/b20ea132f276271c/8741271788b42630/main/8741271788b42630/logo_rithy_agrandi-modified_200x200.png"; break;
            case "blank": this.icon = "https://cdn.upload.systems/uploads/0zNDCd9Y.png"; break;
            case "Soviet": this.icon = "https://raw.githubusercontent.com/omega10000/pic/main/800px-Soviet_Red_Army_Hammer_and_Sickle.png"; break;
            case "Zaxie": this.icon = "https://raw.githubusercontent.com/omega10000/pic/main/sluxmywv3oqmxsnmt6yj.png"; break;
            case "Omega": this.icon = "https://raw.githubusercontent.com/omega10000/pic/main/Screenshot%202024-04-24%20201658.png"; break;
            `;
            const newbadgeadd = `,
			Alien: "Alien",
            AsteroidPumpkin: "AsteroidPumpkin",
            Cat: "Cat",
            Cuda: "Cuda",
            Dreadnought: "Dreadnought",
            FaceInDark: "FaceInDark",
            Fly: "Fly",
            Ghost: "Ghost",
            JackOLantern: "JackOLantern",
            Lunantium: "Lunantium",
            Phantom: "Phantom",
            Planet: "Planet",
            PulseFighter: "PulseFighter",
            Pumpkin: "Pumpkin",
            RedMist: "RedMist",
            TorpWitch: "TorpWitch",
            USniper: "USniper",
            Web: "Web",
            SDCChampion: "SDC Champion",
            SRCChampion: "SRC Champion",
            Translator: "Translator",
            Shipdesigner: "Ship Designer",
            Dev: "Developer",
            SRCemerald: "SRC Emerald",
            SRCdiamond: "SRC Diamond",
            SRCbronze: "SRC Bronze",
            SRCsilver: "SRC Silver",
            Omega: "Omega",
            Zaxie: "Zaxie",
            Soviet: "Soviet",
            `;
            ClientCode = ClientCode.replace(/case\s*"pmf"\s*:\s*this\.icon\s*=\s*".*?";\s*break;/, '$&\n' + newBadge)
                .replace(/seasonal\:"Seasonal"/i, '$&\n' + newbadgeadd);

                //Emotes
                function modifyVocabulary(mode, additionalEmotes) {
                    const modeRegex = new RegExp(
                        `(this\\.${mode}=function\\(e\\)\\{)([\\s\\S]*?)(this\\.vocabulary=\\[)([\\s\\S]*?)(\\])`
                    );
                    const matchMode = ClientCode.match(modeRegex);
                    if (matchMode) {
                        const prefix = matchMode[1];
                        const middleCode = matchMode[2];
                        const vocabularyPrefix = matchMode[3];
                        const existingVocabulary = matchMode[4];
                        const suffix = matchMode[5];
                        let modifiedVocabulary;
                        if (mode === "DeathMatchMode" || mode === "BattleRoyaleMode") {
                            modifiedVocabulary = additionalEmotes;
                        } else {
                            modifiedVocabulary = existingVocabulary + "," + additionalEmotes;
                        }
                        ClientCode = ClientCode.replace(
                            modeRegex
                            , `${prefix}${middleCode}${vocabularyPrefix}${modifiedVocabulary}${suffix}`
                        );
                    }
                }
                //I dont suggest to edit the Keys, only test and icon!!!!
                modifyVocabulary(
                    "TutorialMode"
                    , '{text:"Idiot",icon:"y",key:"I"},{text:"Example",icon:"®",key:"J"},{text:"Me",icon:"?",key:"E"},{text:"You",icon:">",key:"D"},{text:"E",icon:"·",key:"V"}'
                );
                modifyVocabulary(
                    "SurvivalMode"
                    , '{text:"Discord",icon:"{",key:"D"},{text:"Idiot",icon:"🤡",key:"I"},{text:"Skill issue",icon:"x",key:"V"},{text:"STACK TOGETHER!",icon:"1",key:"Z"},{text:"LOSER!",icon:"😞",key:"J"},{text:"AFK!",icon:"😴",key:"E"}'
                );
                modifyVocabulary(
                    "TeamMode"
                    , '{text:"Example",icon:"®",key:"I"},{text:"Example",icon:"®",key:"J"},{text:"contribute",icon:"°",key:"L"},{text:"Hello",icon:":",key:"W"},{ text: "Bye", icon: "F", key: "H" }'
                );
                modifyVocabulary(
                    "InvasionMode"
                    , '{text:"Example",icon:"®",key:"T"},{text:"Example",icon:"®",key:"J"},{text:"Alien",icon:"0",key:"W"},{text:"Boss",icon:"¿",key:"V"}'
                );
                modifyVocabulary(
                    "DeathMatchMode"
                    , '{text:"Good Game",icon:"GG",key:"G"}'
                );
                modifyVocabulary(
                    "BattleRoyaleMode"
                    , '{text:"Good Game",icon:"GG",key:"G"}'
                );
                modlog("Emotes added");
                //Badges
                const badgersus = localStorage.getItem("badgergers");

                if (!badgersus) {
                    console.warn(
                        `Local storage key "badgergers" not found or empty. Nothing will be loaded.`
                    );
                } else {
                    const badgegersData = JSON.parse(badgersus);

                    if (Array.isArray(badgegersData) && badgegersData.length > 0) {
                        const newCaseTemplate = `case "{name}": this.icon = "{url}"; break;`;
                        let newCases = "";
                        let newBadges = "";

                        badgegersData.forEach(({
                            name
                            , url
                        }) => {
                            const sanitizedCaseName = name.replace(/\s/g, "");
                            newCases += newCaseTemplate
                                .replace("{name}", sanitizedCaseName)
                                .replace("{url}", url);
                            newBadges += `"${sanitizedCaseName}":"${name}",`;
                        });

                        const seasonalIndex = ClientCode.indexOf('case"seasonal":');
                        if (seasonalIndex !== -1) {
                            ClientCode =
                                ClientCode.slice(0, seasonalIndex) +
                                newCases +
                                ClientCode.slice(seasonalIndex);
                        }

                        const blankIndex = ClientCode.indexOf('blank:"Blank"');
                        if (blankIndex !== -1) {
                            newBadges = newBadges.replace(/,\s*$/, "");
                            ClientCode =
                                ClientCode.slice(0, blankIndex + 'blank:"Blank"'.length) +
                                "," +
                                newBadges +
                                ClientCode.slice(blankIndex + 'blank:"Blank"'.length);
                        }
                    }
                }
                modlog("Badges added");
                const lowercaseName = localStorage.getItem("lowercaseName");
                const emotes = localStorage.getItem("Emote Capacity");
                const gemColor1 = localStorage.getItem("gemColor1");
                const gemColor2 = localStorage.getItem("gemColor2");
                const stationisten = localStorage.getItem("Custom Station Models");
                const weaponisten = localStorage.getItem("Custom Weapon Models");
                const voicechat = localStorage.getItem("voicechat");
                const blankbadge = localStorage.getItem("blankbadge");
                const radarfov = localStorage.getItem("radarfov");
                //main settings
                ClientCode = ClientCode.replace("LEADERBOARD", "Leaderboard");
                if (voicechat) {
                    let vcscript = document.createElement("script");
                    vcscript.src =
                        "https://vc.pixelmelt.dev/public/sbvc.user.js";
                    document.body.appendChild(vcscript);
                    modlog(`Voice Chat loaded`);
                }
                if (weaponisten === "true") {
                    let script = document.createElement("script");
                    script.src =
                        "https://cdn.jsdelivr.net/gh/bhpsngum/starblast-snippets@latest/CustomWeaponModels/loader.user.js";
                    document.body.appendChild(script);
                    modlog(`Custom Weapons added`);
                }

                if (stationisten === "true") {
                    let sbibt = document.createElement("script");
                    sbibt.src =
                        "https://cdn.jsdelivr.net/gh/bhpsngum/starblast-snippets@latest/CustomStationModuleModels/loader.user.js";
                    document.body.appendChild(sbibt);
                    modlog(`Custom Bases added`);
                }

                if (emotes) {
                    ClientCode = ClientCode.replace(/>=\s*4/, `>= ${emotes}`);
                    modlog(emotes + " Emotes added");
                }

                ClientCode = ClientCode.replace(/16711680/g, `"${gemColor1}"`);
                ClientCode = ClientCode.replace(/specular:16744576/g, `specular:"${gemColor2}"`);
                modlog("Crystal Color changed");

                if (lowercaseName === "true") {
                    ClientCode = ClientCode.replace(/\.toUpperCase\(\)/g, "");
                    ClientCode = ClientCode.replace(/text-transform:uppercase;/gim, "");
                    modlog(`Lowercase added`);
                }
                if (blankbadge === "true") {
                    ClientCode = ClientCode.replace(/"blank"\s*!==\s*this\.custom\.badge/, '"imbetterthanyou"!==this.custom.badge');
                }
                ClientCode = ClientCode.replace(
                    "https://starblast.data.neuronality.com/img/starblast_io_logo.svg?3"
                    , "https://raw.githubusercontent.com/omega10000/pic/main/Screenshot_2024-04-24_164410-removebg-preview.png"
                );
                modlog(`Logo replaced`);
                const end_time = performance.now();
                log(`Loaded Mods successfully (${(end_time - start_time).toFixed(0)}ms)`);
                document.open();
                document.write(ClientCode);
                document.close();
                log("Document loaded");
                setTimeout(() => {
                    stylelog("Loading Style");
                    console.log("Settings loaded");

                    var socialDie1 = document.querySelector(".social");

                    if (socialDie1) {
                        var loveIcon = document.createElement("i");
                        loveIcon.className = "sbg sbg-menu";
                        socialDie1.appendChild(loveIcon);
                        var settingstab = null;

                        loveIcon.addEventListener("mousedown", function(event) {
                            if (!settingstab) {
                                //settings tab
                                console.log("Settings opened");
                                settingstab = document.createElement("div");
                                settingstab.id = "settings-manager";
                                settingstab.style.width = "500px";
                                settingstab.style.background = "hsla(0, 0%, 100%, 0.3)";
                                settingstab.style.borderRadius = "20px";
                                settingstab.style.padding = "40px";
                                settingstab.style.boxShadow = "0 0 10px rgba(0,0,0,.3)";
                                settingstab.style.position = "fixed";
                                settingstab.style.left = "50%";
                                settingstab.style.top = "50%";
                                settingstab.style.transform = "translate(-50%, -50%)";
                                settingstab.style.backdropFilter = "blur(5px)";
                                settingstab.style.webkitBackdropFilter = "blur(5px)";
                                settingstab.style.zIndex = "9999";
                                settingstab.style.display = "none";
                                let offsetX
                                , offsetY
                                , isDragging = false;
                                settingstab.addEventListener("mousedown", (e) => {
                                    const target = e.target;

                                    if (
                                        target.tagName !== "INPUT" &&
                                        target.tagName !== "BUTTON" &&
                                        target.type !== "color" &&
                                        target.type !== "range" &&
                                        target.type !== "checkbox"
                                    ) {
                                        isDragging = true;
                                        offsetX =
                                            e.clientX -
                                            (settingstab.getBoundingClientRect().left +
                                             settingstab.offsetWidth / 2);
                                        offsetY =
                                            e.clientY -
                                            (settingstab.getBoundingClientRect().top +
                                             settingstab.offsetHeight / 2);
                                    }
                                });

                                document.addEventListener("mousemove", (e) => {
                                    if (!isDragging) return;

                                    const x = e.clientX - offsetX;
                                    const y = e.clientY - offsetY;

                                    settingstab.style.left = `${x}px`;
                                    settingstab.style.top = `${y}px`;
                                });

                                document.addEventListener("mouseup", () => {
                                    isDragging = false;
                                });
                                //close button
                                var closeButtonTopRight1 = document.createElement("button");
                                closeButtonTopRight1.textContent = "X";
                                closeButtonTopRight1.style.position = "absolute";
                                closeButtonTopRight1.style.top = "10px";
                                closeButtonTopRight1.style.right = "10px";
                                closeButtonTopRight1.style.userSelect = "none";
                                closeButtonTopRight1.addEventListener("click", function(event) {
                                    event.stopPropagation();
                                    settingstab.remove();
                                    settingstab = null;
                                });
                                settingstab.appendChild(closeButtonTopRight1);
                                //header
                                var header = document.createElement("h2");
                                header.innerText = "Client Settings";
                                header.style.userSelect = "none";
                                header.style.pointerEvents = "none";
                                settingstab.appendChild(header);
                                //br element
                                var br1 = document.createElement("br");
                                br1.style.userSelect = "none";
                                br1.style.pointerEvents = "none";
                                //Lowercase Name
                                var lwerlol = document.createElement("input");
                                lwerlol.type = "checkbox";
                                lwerlol.id = "lowercaseName";
                                var lowerlol = document.createElement("label");
                                lowerlol.htmlFor = "lowercaseName";
                                lowerlol.appendChild(document.createTextNode("Lowercase Name"));
                                lowerlol.style.userSelect = "none";
                                lowerlol.style.pointerEvents = "none";
                                //Custom Station Modules
                                var molds = document.createElement("input");
                                molds.type = "checkbox";
                                molds.id = "customstation";
                                var modls = document.createElement("label");
                                modls.htmlFor = "customstation";
                                modls.appendChild(document.createTextNode("Custom Station Models"));
                                modls.style.userSelect = "none";
                                modls.style.pointerEvents = "none";
                                //Custom Weapon Modules
                                var morlds = document.createElement("input");
                                morlds.type = "checkbox";
                                morlds.id = "customweapons";
                                var mordls = document.createElement("label");
                                mordls.htmlFor = "customweapons";
                                mordls.appendChild(document.createTextNode("Custom Weapon Models"));
                                mordls.style.userSelect = "none";
                                mordls.style.pointerEvents = "none";
                                //Voice Chat
                                var oiceat = document.createElement("input");
                                oiceat.type = "checkbox";
                                oiceat.id = "voicechat";
                                var voias = document.createElement("label");
                                voias.htmlFor = "voicechat";
                                voias.appendChild(document.createTextNode("Voice Chat"));
                                voias.style.userSelect = "none";
                                voias.style.pointerEvents = "none";
                                //Blank Badges
                                var ankages = document.createElement("input");
                                ankages.type = "checkbox";
                                ankages.id = "blankbadge";
                                var anges = document.createElement("label");
                                anges.htmlFor = "blankbadge";
                                anges.appendChild(document.createTextNode("Blank Badges"));
                                anges.style.userSelect = "none";
                                anges.style.pointerEvents = "none";
                                //Emotes
                                var ebot = document.createElement("label");
                                ebot.htmlFor = "emoteCapacity";
                                ebot.classList.add("emote-label");
                                ebot.style.userSelect = "none";
                                ebot.style.pointerEvents = "none";
                                ebot.htmlFor = "emoteCapacity";
                                ebot.appendChild(document.createTextNode("Emote Capacity:"));
                                var ebote = document.createElement("span");
                                ebote.id = "emoteCapacityValue";
                                ebote.classList.add("emote-value");
                                ebote.appendChild(document.createTextNode("1"));
                                ebote.style.userSelect = "none";
                                ebote.style.pointerEvents = "none";
                                var eboti = document.createElement("input");
                                eboti.type = "range";
                                eboti.id = "emoteCapacity";
                                eboti.min = "1";
                                eboti.max = "5";
                                eboti.classList.add("emote-slider");
                                //Gem Color
                                var gemus = document.createElement("label");
                                gemus.htmlFor = "gemColor1";
                                gemus.classList.add("color-label");
                                gemus.style.userSelect = "none";
                                gemus.style.pointerEvents = "none";
                                gemus.appendChild(document.createTextNode("Gem Color:"));
                                var gembus = document.createElement("input");
                                gembus.type = "color";
                                gembus.id = "gemColor1";
                                gembus.classList.add("color-input");
                                //Gem Color 2
                                var gemobus = document.createElement("label");
                                gemobus.htmlFor = "gemColor2";
                                gemobus.classList.add("color-label");
                                gemobus.style.userSelect = "none";
                                gemobus.style.pointerEvents = "none";
                                gemobus.appendChild(document.createTextNode("Gem Color 2:"));
                                var gembomus = document.createElement("input");
                                gembomus.type = "color";
                                gembomus.id = "gemColor2";
                                gembomus.classList.add("color-input");
                                //apply button
                                var applythng = document.createElement("button");
                                applythng.id = "applyChangesBtn";
                                applythng.innerHTML = "Apply Changes";
                                applythng.style.padding = "6px 10px";
                                applythng.style.fontSize = ".95vw";
                                applythng.style.cursor = "pointer";
                                applythng.style.margin = "5px 0 0 0";
                                applythng.style.textAlign = "center";
                                applythng.style.background =
                                    "radial-gradient(ellipse at center, hsla(201, 100%, 27%,1) 0, hsla(201, 100%, 27%,.5) 150%)";
                                applythng.style.boxShadow = "0 0 6px hsla(201,100%,80%,1)";
                                applythng.style.textShadow = "0 0 7px hsla(201,100%,80%,1)";
                                applythng.style.color = "hsla(201,100%,90%,.8)";
                                applythng.style.fontFamily = "Play, Verdana";
                                applythng.style.border = "0";
                                applythng.style.borderRadius = "20px";

                                //apply things to the Settings Menu
                                settingstab.appendChild(lwerlol);
                                settingstab.appendChild(lowerlol);
                                settingstab.appendChild(br1.cloneNode());
                                settingstab.appendChild(molds);
                                settingstab.appendChild(modls);
                                settingstab.appendChild(br1.cloneNode());
                                settingstab.appendChild(morlds);
                                settingstab.appendChild(mordls);
                                settingstab.appendChild(br1.cloneNode());
                                settingstab.appendChild(oiceat);
                                settingstab.appendChild(voias);
                                settingstab.appendChild(br1.cloneNode());
                                settingstab.appendChild(ankages);
                                settingstab.appendChild(anges);
                                settingstab.appendChild(br1.cloneNode());
                                settingstab.appendChild(ebot);
                                settingstab.appendChild(ebote);
                                settingstab.appendChild(eboti);
                                settingstab.appendChild(br1.cloneNode());
                                settingstab.appendChild(gemus);
                                settingstab.appendChild(gembus);
                                settingstab.appendChild(br1.cloneNode());
                                settingstab.appendChild(gemobus);
                                settingstab.appendChild(gembomus);
                                settingstab.appendChild(br1.cloneNode());
                                settingstab.appendChild(applythng);
                                //apply Settings Menu to game
                                document.body.appendChild(settingstab);
                                settingstab.style.display = "block";
                                loadSettings();
                                attachEventListeners();
                            }
                        });
                    }

                    function attachEventListeners() {
                        var checkboxes = document.querySelectorAll('input[type="checkbox"]');
                        checkboxes.forEach(function(checkbox) {
                            checkbox.addEventListener("change", function() {
                                saveSetting(checkbox.id, checkbox.checked);
                            });
                        });

                        var rangeInput = document.getElementById("emoteCapacity");
                        if (rangeInput) {
                            rangeInput.addEventListener("input", function() {
                                saveSetting("emoteCapacity", Number(rangeInput.value));
                                document.getElementById("emoteCapacityValue").textContent =
                                    rangeInput.value;
                            });
                            rangeInput.value = getSettingValue("emoteCapacity");
                            document.getElementById("emoteCapacityValue").textContent =
                                rangeInput.value;
                        }

                        var colorInput = document.getElementById("gemColor");
                        if (colorInput) {
                            colorInput.addEventListener("input", function() {
                                saveSetting("gemColor", colorInput.value);
                            });
                            colorInput.value = getSettingValue("gemColor");
                        }
                        var colorInput2 = document.getElementById("gemColor1");
                        if (colorInput2) {
                            colorInput2.addEventListener("input", function() {
                                saveSetting("gemColor1", colorInput2.value);
                            });
                            colorInput2.value = getSettingValue("gemColor1");
                        }

                        var applyChangesBtn = document.getElementById("applyChangesBtn");
                        if (applyChangesBtn) {
                            applyChangesBtn.addEventListener("click", function() {
                                saveSetting();
                                location.reload();
                            });
                        }
                    }

                    function loadSettings() {
                        var settings = [
                            "emoteCapacity"


                            , "gemColor1"


                            , "gemColor2"


                            , "lowercaseName"


                            , "customstation"


                            , "customweapons"


                            , "voicechat"


                            , "blankbadge"


                            , ];

                        settings.forEach(function(setting) {
                            var key = getKey(setting);
                            var value = localStorage.getItem(key);
                            if (value !== null) {
                                if (setting === "emoteCapacity") {
                                    document.getElementById(setting).value = value;
                                    document.getElementById("emoteCapacityValue").textContent = value;
                                } else if (setting === "gemColor1") {
                                    document.getElementById(setting).value = value;
                                } else if (setting === "gemColor2") {
                                    document.getElementById(setting).value = value;
                                } else {
                                    document.getElementById(setting).checked = JSON.parse(value);
                                }
                            }
                        });
                    }

                    function saveSetting(setting, value) {
                        var key = getKey(setting);
                        if (setting === "gemColor1") {
                            localStorage.setItem(key, value);
                        } else if (setting === "gemColor2") {
                            localStorage.setItem(key, value);
                        } else {
                            localStorage.setItem(key, JSON.stringify(value));
                        }
                    }

                    function getKey(setting) {
                        switch (setting) {
                            case "customweapons":
                                return "Custom Weapon Models";
                            case "customstation":
                                return "Custom Station Models";
                            case "emoteCapacity":
                                return "Emote Capacity";
                            case "gemColor1":
                                return "gemColor1";
                            case "gemColor2":
                                return "gemColor2";
                            case "lowercaseName":
                                return "lowercaseName";
                            case "voicechat":
                                return "voicechat";
                            case "blankbadge":
                                return "blankbadge";
                            default:
                                return setting;
                        }
                    }

                    function getSettingValue(setting) {
                        var key = getKey(setting);
                        var value = localStorage.getItem(key);

                        if (setting === "emoteCapacity") {
                            if (value === null) {
                                localStorage.setItem(key, 4);
                                return 4;
                            } else {
                                return Number(value);
                            }
                        } else if (setting === "gemColor") {
                            return value || "#ff0000";
                        } else if (setting === "gemColor1") {
                            return value || "#ff0000";
                        }

                        return value ? JSON.parse(value) : false;
                    }


                    var socialDiv = document.querySelector('.social');

                    if (socialDiv) {
                        var alienIcon = document.createElement('i');
                        alienIcon.className = 'sbg sbg-alien';
                        socialDiv.appendChild(alienIcon);
                        var badgeManager = null;

                        alienIcon.addEventListener('mousedown', function(event) {
                            if (!badgeManager) {
                                console.log('Badge manager opened');
                                badgeManager = document.createElement('div');
                                badgeManager.id = 'badge-manager';
                                badgeManager.style.width = '500px';
                                badgeManager.style.background = 'hsla(0, 0%, 100%, 0.3)';
                                badgeManager.style.borderRadius = '20px';
                                badgeManager.style.padding = '40px';
                                badgeManager.style.boxShadow = '0 0 10px rgba(0,0,0,.3)';
                                badgeManager.style.position = 'fixed';
                                badgeManager.style.left = '50%';
                                badgeManager.style.top = '50%';
                                badgeManager.style.transform = 'translate(-50%, -50%)';
                                badgeManager.style.backdropFilter = 'blur(5px)';
                                badgeManager.style.webkitBackdropFilter = 'blur(5px)';
                                badgeManager.style.zIndex = '9999'; // Set a high z-index to bring it to the front
                                badgeManager.style.display = 'none';
                                let offsetX, offsetY, isDragging = false;
                                badgeManager.addEventListener('mousedown', (e) => {
                                    isDragging = true;
                                    offsetX = e.clientX - (badgeManager.getBoundingClientRect().left + badgeManager.offsetWidth / 2);
                                    offsetY = e.clientY - (badgeManager.getBoundingClientRect().top + badgeManager.offsetHeight / 2);
                                });

                                document.addEventListener('mousemove', (e) => {
                                    if (!isDragging) return;

                                    const x = e.clientX - offsetX;
                                    const y = e.clientY - offsetY;

                                    badgeManager.style.left = `${x}px`;
                                    badgeManager.style.top = `${y}px`;
                                });

                                document.addEventListener('mouseup', () => {
                                    isDragging = false;
                                });
                                var closeButtonTopRight = document.createElement('button');
                                closeButtonTopRight.textContent = 'X';
                                closeButtonTopRight.style.position = 'absolute';
                                closeButtonTopRight.style.top = '10px';
                                closeButtonTopRight.style.right = '10px';
                                closeButtonTopRight.style.userSelect = 'none';

                                closeButtonTopRight.addEventListener('click', function(event) {
                                    event.stopPropagation();
                                    badgeManager.remove();
                                    badgeManager = null;
                                });

                                badgeManager.appendChild(closeButtonTopRight);

                                var header = document.createElement('h2');
                                header.innerText = 'Badge Manager';
                                header.style.userSelect = 'none';
                                header.style.pointerEvents = 'none';
                                badgeManager.appendChild(header);

                                var addBadgeButton = document.createElement('button');
                                addBadgeButton.innerText = 'Add Badge';
                                addBadgeButton.style.userSelect = 'none';
                                addBadgeButton.onclick = function() {
                                    var name = prompt('Enter a name for the badge:');
                                    if (name !== null && name !== '') {
                                        var url = prompt('Enter a valid link with jpg or png:');
                                        if (url !== null && validateUrl(url)) {
                                            saveBadge(name, url);
                                            location.reload();
                                            displayBadge(name, url);
                                        } else {
                                            alert('Please enter a valid link with jpg or png.');
                                        }
                                    }
                                };
                                badgeManager.appendChild(addBadgeButton);

                                document.body.appendChild(badgeManager);
                                badgeManager.style.display = 'block';
                                var savedBadges = JSON.parse(localStorage.getItem('badgergers')) || [];
                                savedBadges.forEach(function(badge) {
                                    displayBadge(badge.name, badge.url);
                                });
                            }
                        });
                    }

                    function validateUrl(url) {
                        var regex = /^(http|https):\/\/[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/i;
                        return regex.test(url);
                    }

                    function saveBadge(name, url) {
                        var badges = JSON.parse(localStorage.getItem('badgergers')) || [];
                        badges.push({
                            "name": name
                            , "url": url
                        });
                        localStorage.setItem('badgergers', JSON.stringify(badges));
                    }

                    function displayBadge(name, url) {
                        var badge = document.createElement('div');
                        badge.style.display = 'flex';
                        badge.style.alignItems = 'center';
                        badge.style.marginBottom = '10px';

                        var img = document.createElement('img');
                        img.src = url;
                        img.style.width = '64px';
                        img.style.height = '64px';
                        img.style.userSelect = 'none';
                        img.style.pointerEvents = 'none';
                        badge.appendChild(img);

                        var badgeName = document.createElement('p');
                        badgeName.innerText = name;
                        badgeName.style.marginLeft = '10px';
                        badgeName.style.userSelect = 'none';
                        badgeName.style.pointerEvents = 'none';
                        badge.appendChild(badgeName);

                        var closeButton = document.createElement('button');
                        closeButton.innerText = 'x';
                        closeButton.style.marginLeft = 'auto';
                        closeButton.style.userSelect = 'none';
                        closeButton.style.userSelect = 'none';
                        closeButton.onclick = function() {
                            badge.remove();
                            location.reload();
                            updateLocalStorage();
                        };
                        badge.appendChild(closeButton);

                        badgeManager.appendChild(badge);
                    }

                    function updateLocalStorage() {
                        var badges = [];
                        document.querySelectorAll('#badge-manager div').forEach(function(badgeElement) {
                            var name = badgeElement.querySelector('p').innerText;
                            var url = badgeElement.querySelector('img').src;
                            badges.push({
                                "name": name
                                , "url": url
                            });
                        });

                        if (badges.length > 0) {
                            localStorage.setItem('badgergers', JSON.stringify(badges));
                        } else {
                            localStorage.removeItem('badgergers');
                        }
                    }
const inputWrapperStyle = `

      html,
      body {
        margin: 0;
        padding: 0;
        background-color: #000;
        overflow: hidden;
        font-family: Play, Verdana;
        transform: rotate("90deg");
      }
      .noselect {
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }
      a {
        text-decoration: none;
        color: hsl(0, 0%, 91%);
      }
      a:visited {
        color: hsl(0, 0%, 80%);
      }
      .grayblur {
        -moz-filter: grayscale(0.5) blur(3px);
        -webkit-filter: grayscale(0.5) blur(3px);
        filter: grayscale(0.5) blur(3px);
      }
      #loading-text-aip {
        font-size: 0.4em;
      }
      #overlay {
        display: none;
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 2;
        text-align: center;
        font-size: 2em;
        color: #eee;
        text-shadow: 0 0 3px #000, 0 0 3px #000, 0 0 3px #000, 0 0 3px #000;
        transition: opacity 0.5s ease;
        box-shadow: 0 0 6px hsl(0, 0%, 93%);
        text-shadow: 0 0 2px hsla(0, 0%, 95%, 0.3);
        color: hsla(0, 0%, 100%, 0.8);
      }
      .gplay {
        position: fixed;
        top: 0;
        text-align: center;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 2;
        background: rgba(0, 0, 0, 0.8);
      }
      .gplay:after {
        content: "×";
        position: fixed;
        top: 0;
        right: 0;
        color: #fff;
        padding: 0 5vw;
        font-size: 10vw;
      }
      .gplay img {
        max-width: 90vw;
        max-height: 80vh;
      }
      #content {
        transition: all 0.5s ease;
      }
      #home,
      #home_mobile {
        display: none;
        text-align: center;
      }
      #home_mobile {
        height: 50px;
      }
      #home {
        height: 0;
      }
      [id^="cdm-zone-0"] {
        display: inline-block;
        margin: 0 5px;
        height: 250px;
        width: 300px;
        overflow: hidden;
      }
      #cdm-zone-01 {
        height: 90px;
        width: 768px;
        margin: 0;
      }
      [data-ad-slot="vi_462315138"] {
        height: 260px;
      }
      #alsotry {
        font-size: 1px;
      }
      .textcentered {
        text-align: center !important;
      }
      .loadwrapper {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        background: rgba(255, 255, 255, 0.1);
        transition: all 0.5s ease;
      }
      .loadwrapper .progress {
        height: 15px;
        width: 0;
        background: hsl(0, 0%, 100%);
        background: linear-gradient(
          to right,
          hsl(0, 0%, 31%) 0,
          hsl(0, 0%, 95%) 100%
        );
      }
      .mobile-social {
        display: none;
        font-size: 0.6em;
        position: absolute;
        bottom: 0;
        top: 0;
        left: 0;
        padding: 10px;
        background: rgba(255, 255, 255, 0);
      }
      .mobile-tools {
        display: none;
        font-size: 0.6em;
        position: absolute;
        bottom: 0;
        top: 0;
        right: 0;
        padding: 10px;
        background: rgba(255, 255, 255, 0);
      }
      #vidContainer {
        display: none;
        position: absolute;
        background: #000;
        text-align: center;
        left: 25%;
        width: 50%;
        height: 50%;
        margin: auto;
        z-index: 10;
        -webkit-transform: translateY(50%);
        -ms-transform: translateY(50%);
        transform: translateY(50%);
      }
      #criteoContent {
        width: 728px;
        height: 90px;
        display: none;
        margin: auto;
      }
      .followtools {
        font-family: Play, Verdana;
        display: none;
        font-size: 0.4em;
        position: absolute;
        bottom: 0;
        right: 0;
        padding: 5px;
        text-align: left;
        z-index: 1;
      }
      .followtools a,
      .followtools a:visited {
        display: inline-block;
        background: radial-gradient(
          ellipse at center,
          hsla(200, 50%, 0%, 1) 0,
          hsla(0, 0%, 100%, 0.5) 150%
        );
        box-shadow: 0 0 6px rgb(255, 255, 255);
        color: hsla(0, 0%, 100%, 0.9);
        border-radius: 0;
        padding: 7px;
        margin: 4px;
        position: relative;
        border-radius: 35px;
      }
      .followtools a.big {
        text-shadow: 0 0 7px rgb(255, 255, 255);
        text-align: center;
        width: 217px;
        margin: 4px 4px 10px 4px;
        padding: 4px 10px;
        line-height: 13px;
        font-size: 1.1em;
      }
      .followtools a.big i {
        text-shadow: 0 0 1px hsla(210, 100%, 100%, 0.2);
        font-size: 2.8em;
      }
      .followtools a.big.cup i {
        background-image: linear-gradient(
          135deg,
          #fceabb 0,
          #fccd4d 50%,
          #f8b500 51%,
          #fbdf93 100%
        );
        color: transparent;
        -webkit-background-clip: text;
        background-clip: text;
      }
      .followtools a.gold,
      .followtools a.gold:visited,
      #donate_mobile {
        text-shadow: 0 0 7px hsla(20, 100%, 80%, 1);
        background: radial-gradient(
          ellipse at center,
          hsla(20, 50%, 0%, 1) 0,
          hsla(20, 100%, 80%, 0.5) 150%
        );
        box-shadow: 0 0 6px hsla(20, 100%, 80%, 1);
        color: hsla(20, 100%, 90%, 0.9);
      }
      .followtools a i {
        font-size: 1.5em;
        vertical-align: middle;
      }
      .followtools a.gold:hover {
        background: hsla(20, 90%, 40%, 0.8);
        color: #fff;
      }
      .followtools a:hover {
        background: hsla(0, 0%, 71%, 0.8);
        color: #fff;
      }
      .followtools span {
        text-transform: uppercase;
        letter-spacing: -0.5px;
      }
      .social {
        font-size: 0.6em;
        position: absolute;
        bottom: 0;
        right: 0;
        left: 0;
        padding: 10px;
        background: rgba(0, 0, 0, 0);
      }
      .social i {
        margin: 0 10px;
      }
      .mobile-social i,
      .mobile-tools i {
        margin-bottom: 20px;
      }
      .social i,
      .mobile-social i,
      .mobile-tools i,
      .stats i {
        background: rgba(0, 0, 0, 0.6);
        padding: 5px;
        font-size: 1.4em;
        display: inline-block;
        width: 40px;
        height: 40px;
        line-height: 40px;
        border: 0;
        text-align: center;
        cursor: pointer;
        background: radial-gradient(
          ellipse at center,
          hsla(200, 50%, 0%, 1) 0,
          hsla(0, 0%, 100%, 0.5) 150%
        );
        box-shadow: 0 0 6px rgb(255, 255, 255);
        text-shadow: 0 0 7px rgb(255, 255, 255);
        color: hsla(0, 0%, 100%, 0.8);
        border-radius: 35px;
      }
      .social i:hover,
      .mobile-social i:hover,
      .mobile-tools i:hover,
      .stats i:hover {
        background: #000;
        border: 0 solid hsl(0, 0%, 100%);
        background: radial-gradient(
          ellipse at center,
          hsla(200, 50%, 0%, 1) 0,
          hsla(0, 0%, 85%, 0.5) 100%
        );
        box-shadow: 0 0 6px rgb(255, 255, 255);
        text-shadow: 0 0 7px rgb(255, 255, 255);
        color: #fff;
      }
      .hide {
        opacity: 0;
      }
      #logo {
        margin: auto;
        padding-bottom: 1vh;
        transition: all 5s ease;
        max-width: 40%;
        width: 1200px;
        opacity: 0;
      }
      #logo img {
        max-width: 100%;
      }
      #colors {
        margin-top: 10px;
      }
      .inputwrapper {
        display: inline-block;
        background: linear-gradient(
          to top,
          hsla(0, 0%, 75%, 0.5) 0,
          hsla(200, 50%, 0%, 1) 20%,
          hsla(200, 50%, 0%, 1) 60%,
          hsla(0, 0%, 40%, 0.5) 100%
        );
        box-shadow: 0 0 6px rgb(255, 255, 255);
        text-shadow: 0 0 7px rgb(238, 238, 238);
        border-radius: 4px;
        height: 43px;
        margin-top: 10px;
        position: relative;
        max-width: 100%;
        border-radius: 35px;
      }
      .colorwrapper {
        display: inline-block;
        cursor: pointer;
        position: absolute;
        right: 10px;
      }
      .colorchosen {
        transition: all 0.5s ease;
        background: red;
        display: inline-block;
        border: 2px solid rgba(0, 0, 0, 0.5);
        vertical-align: middle;
        width: 32px;
        height: 32px;
        margin: 0 0 5px 0;
        border-radius: 35px
      }
      #colors span {
        transition: all 0.2s ease;
        display: inline-block;
        border: 2px solid rgba(0, 0, 0, 0.5);
        margin: 0 4px;
        opacity: 0.8;
        width: 32px;
        height: 32px;
        cursor: pointer;
        border-radius: 35px;
      }
      #colors span.selected {
        opacity: 1;
        box-shadow: 0 0 5px 2px #fff;
        transform: scale(1.15);
      }
      #player,
      #respawn {
        transition: all 0.5s ease;
        margin: 0 auto 15px auto;
        max-width: 90%;
      }
      #player input {
        height: 43px;
        line-height: 43px;
        padding: 0 8px;
        font-size: 0.8em;
        text-align: center;
        border: 0 solid hsl(0, 0%, 15%);
        width: 415px;
        max-width: 80%;
        color: #eee;
        outline: 0;
        background: transparent;
        transition: all 0.5s ease;
        text-shadow: 0 0 7px rgb(235, 235, 235);
        color: hsla(0, 0%, 100%, 0.8);
      }
      .stats input,
      .ecpinput {
        height: 43px;
        line-height: 43px;
        padding: 0 8px;
        text-align: center;
        border: 0 solid hsl(0, 0%, 18%);
        width: 350px;
        outline: 0;
        transition: all 0.5s ease;
        background: linear-gradient(
          to top,
          hsla(0, 0%, 87%, 0.5) 0,
          hsla(200, 50%, 0%, 1) 20%,
          hsla(200, 50%, 0%, 1) 60%,
          hsla(0, 0%, 46%, 0.5) 100%
        );
        box-shadow: 0 0 6px rgb(241, 241, 241);
        color: hsla(0, 0%, 100%, 0.8);
        text-shadow: 0 0 7px rgb(255, 255, 255);
        border-radius: 4px;
        font-size: 1.2em;
      }
      .ecpbtn {
        vertical-align: middle;
        width: 50px;
        margin: 0 10px;
        cursor: pointer;
      }
      ::input-placeholder {
        color: hsla(0, 0%, 81%, 0.4);
        text-shadow: 0 0 7px hsla(210, 9%, 96%, 0.3);
        font-size: 16px;
      }
      ::-webkit-input-placeholder {
        color: hsla(210, 6%, 94%, 0.4);
        text-shadow: 0 0 7px hsla(0, 0%, 94%, 0.3);
        font-size: 16px;
      }
      ::-moz-placeholder {
        color: hsla(200, 10%, 80%, 0.4);
        text-shadow: 0 0 7px hsla(200, 20%, 94%, 0.3);
        font-size: 16px;
      }
      :-ms-input-placeholder {
        color: hsla(200, 10%, 80%, 0.4);
        text-shadow: 0 0 7px hsla(180, 7%, 94%, 0.3);
        font-size: 16px;
      }
      #respawn_actions,
      #respawn_swap,
      .JOKRF,
      .stats {
        transition: all 0.3s ease;
      }
      #player button,
      #respawn_actions button,
      .donate-btn {
        padding: 10px 60px;
        font-size: 1.2em;
        cursor: pointer;
        margin: 20px 0 20px 0;
        text-align: center;
        background: radial-gradient(
          ellipse at center,
          hsla(200, 50%, 0%, 1) 0,
          hsla(0, 0%, 100%, 0.5) 150%
        );
        box-shadow: 0 0 6px rgb(255, 255, 255);
        text-shadow: 0 0 7px rgb(255, 255, 255);
        color: hsla(0, 0%, 100%, 0.8);
        font-family: Play, Verdana;
        border: 0;
        border-radius: 35px;
      }
      #player button:hover,
      #respawn_actions button:hover,
      .donate-btn:hover,
      .ecpbtn:hover {
        background: radial-gradient(
          ellipse at center,
          hsla(200, 50%, 0%, 1) 0,
          hsla(0, 0%, 100%, 0.5) 100%
        );
        box-shadow: 0 0 8px rgb(255, 255, 255);
        color: #fff;
      }
      .playbtn {
        white-space: nowrap;
      }
      .playbtn i {
        padding: 0 10px;
        font-size: 2em;
        vertical-align: middle;
        font-family: normal normal normal 14px/1 FontAwesome;
        margin: 9px 10px 0 10px;
        cursor: pointer;
        color: hsla(0, 0%, 90%, 0.5);
        text-align: center;
        text-shadow: 0 0 7px rgb(255, 255, 255);
      }
      .playbtn i:hover {
        text-shadow: 0 0 27px rgb(255, 255, 255);
      }
      #player #play {
        padding: 0 60px 20px;
        position: relative;
      }
      #play.orange {
        color: #fff;
        background: radial-gradient(
          ellipse at center,
          hsla(20, 50%, 0%, 1) 0,
          hsla(20, 100%, 70%, 0.5) 150%
        );
        text-shadow: 0 0 7px hsla(20, 100%, 80%, 1);
        box-shadow: 0 0 6px hsla(20, 100%, 80%, 1);
      }
      #play.orange:hover {
        background: radial-gradient(
          ellipse at center,
          hsla(20, 50%, 0%, 1) 0,
          hsla(20, 100%, 70%, 0.5) 100%
        );
        box-shadow: 0 0 8px hsla(20, 100%, 90%, 1);
      }
      #play #game_modes {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(255, 255, 255, 0);
        font-size: 14px;
        overflow: hidden;
        white-space: nowrap;
      }
      #play #game_modes span {
        display: inline-block;
        width: 100%;
        transition: margin 0.5s ease;
      }
      #respawn {
        display: none;
      }
      .stats {
        font-size: 0.5em;
        border: 2px solid hsl(0, 0%, 83%);
        box-shadow: 0 0 15px hsl(0, 0%, 83%);
        background: hsla(200, 50%, 10%, 0.5);
        width: 600px;
        padding: 0 10px;
        margin: 10px auto;
        border-radius: 35px;
      }
      .stats i {
        margin: 10px;
        font-size: 1.6em;
      }
      .stats p {
        font-size: 2em;
        margin: 10px 0 15px 0;
      }
      .stats small {
        display: inline-block;
        background: rgba(0, 0, 0, 0.6);
        padding: 10px 15px 5px 15px;
        border-radius: 50% 50% 0 0;
      }
      #respawn_actions button {
        padding: 10px 0;
        font-size: 0.8em;
        width: 175px;
      }
      .statinfo {
        font-size: 1.5em;
        height: 40px;
        line-height: 40px;
        padding: 0 20px;
        border-bottom: 1px solid hsl(0, 0%, 76%);
        transition: all 0.5s ease;
      }
      .statinfo:last-child {
        border-bottom: 0;
      }
      .statinfo span:first-child {
        float: left;
      }
      .statinfo span:last-child {
        float: right;
      }
      #connection_lost,
      #game_over,
      #adblocked_message {
        display: none;
        font-size: 3.5vw;
        transition: all 2s ease;
        margin: 20px 0;
      }
      #adblocked_message div {
        font-size: 0.5em;
      }
      #goinfo {
        color: hsl(200, 50%, 70%);
        font-size: 2vw;
      }
      #connection_lost .cry,
      #adblocked_message .cry {
        margin-top: 50px;
        display: inline-block;
        transform: rotate(90deg);
      }
      .gameloader {
        margin-top: 20px;
        display: none;
        text-align: center;
        color: #eee;
        font-size: 3.5vw;
        transition: opacity 0.5s ease;
      }
      .gameloaderwrapper {
        width: 90%;
        margin: 0 auto;
        height: 25px;
        background: linear-gradient(to bottom, #000 0, #444 49%, #222 50%, #000 100%);
        border: 2px solid hsla(0, 0%, 100%, 0.8);
        box-shadow: 0 0 10px rgb(255, 255, 255);
        border-radius: 4px;
      }
      .sbg-facebook,
      .sbg-twitter {
        position: relative;
      }
      .sbg-diamond {
        font-size: 0.8em;
        position: absolute;
        top: -10px;
        right: -10px;
      }
      .sbg-facebook:hover .sbg-diamond,
      .sbg-twitter:hover .sbg-diamond {
        color: hsl(200, 90%, 70%);
      }
      .tutorial {
        width: 90%;
        margin: 0 auto;
        border-radius: 2vw;
        color: #666;
      }
      .desktop,
      .mobile {
        display: none;
      }
      .desktop {
        margin-top: 50px;
        background: rgba(255, 255, 255, 0.1);
      }
      .mobile {
        margin-top: 20px;
        position: relative;
        height: 15vw;
      }
      .joystick-container {
        position: absolute;
        left: 10vw;
        width: 15vw;
        height: 15vw;
        border-radius: 15vw;
        background: radial-gradient(
          ellipse at center,
          rgba(140, 140, 140, 0) 0,
          rgba(255, 255, 255, 0) 20%,
          rgba(217, 217, 217, 0) 32%,
          rgba(204, 204, 204, 0.7) 34%,
          rgba(115, 115, 115, 0.5) 64%,
          rgba(0, 0, 0, 0.5) 100%
        );
      }
      [class^="mobile-"] {
        position: absolute;
      }
      .mobile-top {
        left: 6.6vw;
      }
      .mobile-bottom {
        left: 6.6vw;
        top: 11.4vw;
      }
      .mobile-left {
        left: 1.1vw;
        top: 6.1vw;
      }
      .mobile-right {
        top: 6.1vw;
        left: 12.7vw;
      }
      .mobile-fire {
        position: absolute;
        right: 10vw;
        height: 15vw;
        width: 10vw;
        line-height: 15vw;
        background: rgba(255, 255, 255, 0.2);
        border-radius: 2vw;
      }
      table {
        width: 100%;
      }
      .keyboard,
      .mouse {
        position: relative;
        height: 265px;
      }
      .mouse-container {
        overflow: hidden;
        position: absolute;
        top: 1vw;
        display: inline-block;
        border: 1px solid #999;
        background: #eee;
        width: 8vw;
        height: 12vw;
        border-radius: 2vw;
      }
      .mouse-top {
        width: 95%;
        height: 4vw;
        line-height: 4vw;
        margin: 0 auto;
        border-bottom: 3px solid #999;
        font-size: 2.5vw;
      }
      .mouse-left {
        width: 50%;
        float: left;
        border-right: 2px solid #999;
      }
      .mouse-left {
        width: 49%;
      }
      [class^="kb-"] {
        display: inline-block;
        border: 1px solid #999;
        background: #eee;
        border-radius: 0.4vw;
        height: 3vw;
        line-height: 3vw;
        width: 3vw;
        font-size: 2vw;
        box-shadow: 0 0 10px #000;
        text-align: center;
        vertical-align: middle;
      }
      .keyboard .top {
        position: absolute;
        top: 2vw;
      }
      .keyboard .bottom {
        position: absolute;
        top: 6vw;
      }
      .keyboard canvas {
        display: inline-block;
        vertical-align: middle;
      }
      .keyboard span {
        font-size: 1.75vw;
      }
      .keyboard span.large {
        display: inline-block;
        width: 200px;
        text-align: center;
      }
      .kb-ctrl {
        width: 7vw;
      }
      .loaderprogress {
        height: 25px;
        width: 0;
        background: hsl(200, 90%, 70%);
        background: linear-gradient(
          to right,
          hsla(200, 30%, 30%, 0.7) 0,
          hsla(200, 90%, 80%, 0.8) 100%
        );
      }
      .textprogress {
        margin-top: 20px;
        text-shadow: 0 0 10px rgb(255, 255, 255);
        color: hsla(0, 0%, 100%, 0.9);
      }
      .cookieconsent {
        opacity: 0;
        transition: opacity 2s ease;
      }
      .changelog-new,
      .extrabutton {
        text-align: left;
        width: 18vw;
        border: 0;
        background: linear-gradient(
          -45deg,
          hsla(0, 0%, 10%, 0.5) 0,
          hsla(0, 0%, 60%, 0.15) 100%
        );
        padding: 5px 10px;
        box-shadow: 0 0 6px rgb(255, 255, 255);
        font-size: 0.95vw;
        display: none;
        margin-top: 10px;
        border-radius: 35px;
      }
      .community a {
        display: inline-block;
        border: 2px solid rgba(0, 0, 0, 0.5);
        width: 20%;
        margin: 0.3%;
        padding: 1vh 0;
        text-align: center;
        color: hsla(0, 0%, 100%, 0.8);
        border-radius: 10px;
        background: rgba(0, 0, 0, 0.3);
        fill: currentColor;
      }
      .community a .sbg {
        font-size: 2em;
      }
      .community a:hover {
        background: rgba(255, 255, 255, 0.1);
        color: #fff;
      }
      .community a svg {
        width: 60%;
      }
      .adblock {
        font-size: 1.5vw;
        padding: 0.5vw;
        text-align: center;
        display: none;
      }
      .extrabutton {
        display: block;
        text-align: center;
      }
      [data-display-only] {
        display: none;
      }
      .alphacentauri {
        text-align: center;
      }
      .alphacentauri img {
        max-width: 100%;
      }
      .alphacentauri button {
        background: #b11;
        color: #fff;
        box-shadow: 0 0 5px #b11;
        border: 0;
        width: 7vw;
        padding: 5px 0;
        font-size: 0.9vw;
        margin: 0.7vw;
        cursor: pointer;
        text-transform: uppercase;
      }
      .alphacentauri button:hover {
        color: #fff;
        box-shadow: 0 0 10px #fff;
      }
      .alphacentauri h2 {
        margin: 10px 0;
        padding: 0;
        padding-bottom: 4px;
        border-bottom: solid 5px hsla(200, 60%, 60%, 0.2);
        font-size: 16px;
      }
      .changelog-new .fa-star,
      .extrabutton .fa-star {
        color: hsla(50, 70%, 70%, 1);
      }
      .changelog-new h2 {
        font-size: 1.15vw;
        margin: 10px 0;
        padding: 0;
        padding-bottom: 4px;
        border-bottom: solid 5px hsla(200, 60%, 60%, 0.2);
      }
      .countdown,
      .event-time {
        padding: 5px 0;
        background: rgba(0, 0, 0, 0.5);
        font-size: 18px;
      }
      a.full-changelog,
      a.full-changelog:visited {
        color: #ddd;
        text-shadow: none;
        display: block;
        text-align: center;
        padding: 10px;
        border-top: 1px solid hsla(200, 60%, 60%, 0.2);
        background: rgba(200, 240, 255, 0.02);
        font-size: 0.8em;
        margin: 0 -10px -5px -10px;
      }
      a.full-changelog:hover {
        color: #fff;
        text-decoration: none;
        background: rgba(200, 240, 255, 0.1);
      }
      .bottom-left,
      .top-left,
      .top-right {
        z-index: 10;
        padding: 10px;
        position: absolute;
        left: 0;
      }
      .bottom-left {
        bottom: 0;
      }
      .top-right {
        top: 0;
        right: 0;
        left: auto;
        width: 237px;
        display: none;
        font-size: 0.6em;
      }
      .schedule {
        border: 0;
        background: linear-gradient(
          -45deg,
          hsla(200, 50%, 10%, 1) 0,
          hsla(200, 50%, 50%, 0.15) 100%
        );
        padding: 5px 10px;
        box-shadow: 0 0 6px hsla(200, 100%, 80%, 1);
        font-size: 1.3vw;
        margin-top: 10px;
      }
      .top-right .title {
        margin-bottom: 10px;
        color: #eee;
      }
      .top-right .date {
        color: hsl(200, 60%, 75%);
        margin-bottom: 3px;
      }
      .top-right .event {
        color: #eee;
        margin-bottom: 10px;
        font-size: 0.8em;
      }
      .steam-info {
        margin-top: -10px;
        background: hsla(200, 50%, 10%, 0.75);
        padding: 20px 5px;
        font-size: 14px;
      }
      .top-left {
        top: 0;
        width: calc(18vw + 20px);
      }
      .top-left img,
      .top-right img {
        max-width: 100%;
      }
      .modal {
        z-index: 3;
        position: fixed;
        left: 0;
        right: 0;
        top: -750px;
        margin: 0 auto;
        box-shadow: 0 0 6px rgb(255, 255, 255);
        width: 800px;
        max-width: 100%;
        max-height: 100%;
        background: linear-gradient(
          135deg,
          rgb(27, 27, 27) 0,
          rgb(92, 92, 92) 150%
        );
        transition: top 0.6s ease;
        display: none;
        overflow: auto;
        color: hsla(200, 80%, 100%, 0.8);
        text-shadow: 0 0 6px hsla(0, 0%, 100%, 0.75);
        border-radius: 35px;
      }
      .modal::-webkit-scrollbar-track {
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        border-radius: 0;
        background-color: transparent;
      }
      .modal::-webkit-scrollbar {
        width: 10px;
      }
      .modal::-webkit-scrollbar-thumb {
        border-radius: 0;
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
        background-color: hsla(0, 0%, 83%, 0.5);
      }
      .modal .header {
        margin: 5px 0;
        padding: 5px 40px;
        font-size: 2em;
        background: hsla(0, 0%, 80%, 0.1);
        border-bottom: 5px solid hsla(0, 0%, 85%, 0.5);
      }
      .modal .modaltitle {
        display: inline-block;
      }
      .modal .close-modal {
        cursor: pointer;
        width: 40px;
        text-align: center;
        float: right;
      }
      .modal .close-modal:hover {
        color: #fff;
        background: rgba(255, 255, 255, 0.1);
      }
      .modal .modalbody {
        overflow: auto;
        padding: 20px 40px;
        font-size: 1.5em;
      }
      .modal .modalbody .regions {
        text-align: center;
        border-bottom: 1px solid hsla(0, 0%, 83%, 0.5);
        margin: 0 -40px 40px -40px;
        padding: 10px 0;
        background: rgba(255, 255, 255, 0.08);
      }
      .modal .modalbody .regions .date {
        text-align: right;
        font-size: 0.5em;
      }
      .modal .modalbody span.region {
        display: inline-block;
        width: 180px;
        padding: 5px 10px;
        margin: 10px;
        cursor: pointer;
        transition: 0.2s ease all;
      }
      .modal .modalbody span.region:hover {
        background: rgba(255, 255, 255, 0.05);
      }
      .modal .modalbody span.region.active {
        color: #fff;
        background: radial-gradient(
          ellipse at center,
          hsla(20, 50%, 0%, 1) 20%,
          hsla(20, 50%, 60%, 0.5) 150%
        );
        box-shadow: 0 0 6px hsla(20, 100%, 80%, 1);
        text-shadow: 0 0 7px hsla(20, 100%, 80%, 1);
      }
      .modal .modal-header {
        background: rgba(0, 0, 0, 0.8);
        padding: 10px;
        font-size: 20px;
        margin: -20px -40px 20px -40px;
      }
      .modal .mod {
        display: inline-block;
        width: 31%;
        font-size: 14px;
        position: relative;
        margin: 10px;
      }
      .modal .modecp {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0, 0, 0, 0.8);
        padding: 10px;
        font-size: 20px;
        text-align: left;
      }
      .modal .modecp a {
        border-radius: 2px;
        background-color: rgba(255, 255, 255, 0.25);
        padding: 5px 10px;
        color: #fff;
        margin: 0 0 0 10px;
        float: right;
      }
      .modal .modecp div {
        padding: 5px 10px;
      }
      .modal .mod:hover {
        cursor: pointer;
      }
      .modal .mod:hover img {
        filter: grayscale(0);
      }
      .modal .mod img {
        width: 100%;
        filter: grayscale(60%);
      }
      .modal .mod.inactive {
        cursor: default;
      }
      .modal .mod.inactive img {
        filter: grayscale(100%);
      }
      .modal .mod .title {
        background: rgba(0, 0, 0, 0.5);
        padding: 3px 10px;
        text-align: left;
      }
      .modal .mod .nowplaying,
      .modal .mod .author {
        float: right;
      }
      .modal .mod .totalplayed {
        padding: 0 10px;
        margin-bottom: -15px;
        background: #fff;
        color: #000;
        text-shadow: none;
        font-size: 0.8em;
        text-align: left;
        position: absolute;
        top: -7px;
        left: 0;
        right: 0;
        z-index: 1;
      }
      #ranks .rankings {
        width: 100%;
        border-spacing: 0;
        border-collapse: collapse;
      }
      #ranks .rankings canvas {
        opacity: 0;
        transform: translateY(20px) scale(0);
        transition: 1s ease all;
      }
      #ranks .rankings tbody tr {
        height: 45px;
      }
      #ranks .rankings tbody tr:nth-child(odd) {
        background: rgba(120, 180, 255, 0.08);
      }
      #ranks .rankings th:first-child {
        font-size: 11px;
      }
      #ranks .rankings th {
        text-align: center;
        padding: 10px;
      }
      #ranks .rankings th.orating {
        width: 33.333%;
        background: rgba(0, 0, 0, 0.2);
        border: 1px dashed hsl(200, 50%, 50%);
        border-bottom: 0;
      }
      #ranks .rankings td.trophies {
        width: 10%;
        background: rgba(0, 0, 0, 0.2);
        border-right: 1px dashed hsl(200, 50%, 50%);
        text-align: right;
      }
      #ranks .rankings tr:first-child td.trophies {
        color: gold;
      }
      #ranks .rankings tr:nth-child(2) td.trophies {
        color: silver;
      }
      #ranks .rankings tr:nth-child(3) td.trophies {
        color: #cd7f32;
      }
      #ranks .rankings td:last-child {
        text-align: right;
      }
      #ranks .rankings td {
        padding: 5px 10px;
        width: auto;
        vertical-align: middle;
      }
      #ranks .fa-long-arrow-up {
        color: #77ee90;
      }
      #ranks .fa-long-arrow-down {
        color: #ed8256;
      }
      #ranks small {
        font-size: 0.6em;
        display: inline-block;
        width: 35px;
        text-align: center;
      }
      .modal .modalbody label {
        float: right;
        vertical-align: middle;
      }
      .modal .modalbody select,
      .modal .modalbody input[type="text"],
      .modal .modalbody input.number {
        font-size: 0.8em;
        padding: 3px 5px;
        color: white;
        background: hsl(0, 0%, 23%);
        border: 1px solid hsl(0, 0%, 15%);
        float: right;
        vertical-align: middle;
        width: 241px;
        box-sizing: border-box;
        border-radius: 35px;
      }
      #mappreview {
        border: 1px solid hsl(200, 60%, 10%);
        float: right;
      }
      #mappreview:after {
        clear: both;
      }
      .modal .modalbody hr {
        border-color: #8a8a8a;
      }
      .modal .modalbody .gmodes {
        margin: -20px -40px 0 -40px;
        text-align: center;
      }
      .modal .modalbody .gmodes span {
        display: inline-block;
        height: 40px;
        line-height: 40px;
        width: 45%;
        margin: 1%;
        border: 2px solid hsl(200, 60%, 10%);
        text-align: center;
        cursor: pointer;
      }
      .modal .modalbody .gmodes span.selected {
        box-shadow: 0 0 6px rgb(252, 252, 252);
        color: white;
      }
      .modal .modalbody .range {
        float: right;
        vertical-align: middle;
        font-size: 0.7em;
        padding: 0 100px 0 10px;
        position: relative;
        background: hsl(0, 0%, 25%);
        border: 1px solid hsl(0, 0%, 15%);
        height: 30px;
        line-height: 30px;
        border-radius: 35px;
      }
      .modal .modalbody .range input {
        height: 30px;
        padding: 0;
        margin: 0;
      }
      .modal .modalbody .range span {
        position: absolute;
        top: 0;
        right: 10px;
      }
      .modal .modalbody div.option {
        height: 45px;
      }
      .modal .modalbody div.option .fa-level-up {
        margin-left: 30px;
      }
      .sandboxmode {
        padding: 10px 20px 0 20px;
        background: rgba(0, 0, 30, 0.1);
        display: none;
      }
      .smalltext {
        font-size: 14px;
      }
      .smalltext .date {
        display: block;
        margin: 10px -40px 0 -40px;
        padding: 10px 40px;
        font-size: 1.7em;
        background: rgba(0, 0, 0, 0.2);
      }
      .info {
        white-space: nowrap;
      }
      .infos {
        font-size: 0.6em;
        text-align: justify;
      }
      .infos p {
        margin: 0 0 10px 0;
        padding: 10px 0;
      }
      .infos .center {
        text-align: center;
        margin: 20px 0;
        font-size: 16px;
      }
      .infos h1,
      .infos h2 {
        margin: 15px 0 -5px 0;
      }
      .customizeship {
        text-align: center;
        padding: 15px;
        background: rgba(0, 0, 0, 0.3);
        margin-top: 20px;
      }
      .buy-table tr {
        border: 2px solid rgba(0, 0, 0, 0.3);
      }
      .buy-table tr td:nth-child(2) {
        padding: 10px;
        text-align: left;
      }
      .buy-on {
        float: right;
        margin-top: 10px;
        padding: 5px;
        width: 150px;
        text-align: center;
        cursor: pointer;
      }
      .download-apps {
        text-align: center;
      }
      .download-apps img {
        border: 3px solid hsla(0, 0%, 77%, 0.5);
        border-radius: 10px;
        width: 64px;
        margin: 10px;
      }
      .download-apps img:hover {
        box-shadow: 0 0 6px rgb(255, 255, 255);
      }
      .frozenbg,
      .frozenbg:visited {
        background: radial-gradient(
          ellipse at center,
          hsla(200, 50%, 0%, 1) 20%,
          hsla(0, 0%, 74%, 0.5) 150%
        );
        box-shadow: 0 0 6px rgb(255, 255, 255);
        text-shadow: 0 0 7px rgb(255, 255, 255);
        color: hsla(0, 0%, 100%, 0.8);
        border-radius: 35px;
      }
      .hotbg,
      .hotbg:visited {
        background: radial-gradient(
          ellipse at center,
          hsla(0, 100%, 30%, 1) 20%,
          hsla(0, 100%, 50%, 1) 150%
        );
        box-shadow: 0 0 6px hsla(20, 80%, 70%, 1);
        color: #fff;
        border: 0;
        cursor: pointer;
      }
      .buy-on:hover {
        box-shadow: 0 0 8px hsla(200, 100%, 90%, 1);
        color: hsla(200, 100%, 95%, 0.9);
      }
      .customtable .title {
        display: inline-block;
        width: 150px;
        line-height: 25px;
        vertical-align: middle;
        position: relative;
      }
      .customtable i {
        opacity: 0.5;
        vertical-align: middle;
        font-size: 3em;
        padding: 10px;
        cursor: pointer;
      }
      .customtable i:hover {
        opacity: 1;
      }
      .customtable {
        width: 100%;
        text-align: center;
      }
      .blue {
        color: hsl(0, 0%, 84%);
      }
      .smallblue {
        font-size: 60%;
        color: hsl(200, 50%, 70%);
      }
      #infologo {
        text-align: center;
      }
      #infologo img {
        max-width: 70%;
      }
      canvas {
        margin-left: auto;
        margin-right: auto;
        display: block;
      }
      .pricechoice {
        display: inline-block;
        margin-top: 5px;
        padding: 5px;
      }
      .pricechoice article {
        display: inline;
      }
      .pricechoice span {
        display: inline-block;
        padding: 3px;
        vertical-align: middle;
        margin-right: 10px;
        background: linear-gradient(
          -45deg,
          hsla(0, 0%, 39%, 0.5) 0,
          hsla(0, 0%, 72%, 0.75) 100%
        );
        text-align: center;
        width: 68px;
        cursor: pointer;
        font-size: 1.2em;
        color: rgba(255, 255, 255, 0.5);
      }
      .pricechoice span.active {
        background: linear-gradient(
          -45deg,
          hsla(120, 70%, 50%, 0.75) 0,
          hsla(120, 50%, 70%, 1) 100%
        );
        box-shadow: 0 0 5px hsl(120, 60%, 60%);
        color: rgba(255, 255, 255, 0.9);
      }
      .custom-amount {
        display: none;
        margin-top: 10px;
      }
      .custom-amount input {
        display: inline-block;
        padding: 4px;
        vertical-align: middle;
        text-shadow: 0 0 7px hsla(200, 80%, 80%, 1);
        border: 0;
        outline: 0;
        background: rgba(255, 255, 255, 0.1);
        color: #fff;
        margin-right: 10px;
        width: 100px;
        text-align: center;
        font-size: 1.5em;
      }
      #licenceKey {
        text-align: center;
        border: 2px solid hsla(0, 0%, 97%, 0.2);
        background: rgba(0, 0, 0, 0.2);
        color: #fff;
        width: 150px;
        font-size: 1.5em;
        vertical-align: middle;
        padding: 5px;
      }
      #licenceKeyBtn {
        vertical-align: middle;
        font-size: 1.5em;
        border: 2px solid hsla(200, 80%, 80%, 0.2);
        background: rgba(0, 0, 0, 0.2);
        margin-left: 10px;
        color: #fff;
        padding: 5px 20px;
      }
      .switch {
        position: relative;
        display: inline-block;
        width: 60px;
        height: 34px;
      }
      .switch input {
        display: none;
      }
      .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ccc;
        -webkit-transition: 0.4s;
        transition: 0.4s;
        border-radius: 34px;
      }
      .slider:before {
        position: absolute;
        content: "";
        height: 26px;
        width: 26px;
        left: 4px;
        bottom: 4px;
        background-color: white;
        -webkit-transition: 0.4s;
        transition: 0.4s;
        border-radius: 35px;
      }
      input:checked + .slider {
        background-color: hsl(0, 0%, 14%);
        border-radius: 35px;
      }
      input:focus + .slider {
        box-shadow: 0 0 1px hsl(0, 0%, 39%);
      }
      input:checked + .slider:before {
        -webkit-transform: translateX(26px);
        -ms-transform: translateX(26px);
        transform: translateX(26px);
      }
      #_outbd_3,
      #_outbd_3 iframe {
        max-width: 100%;
      }
      #customEventable {
        box-shadow: 0 0 1px hsl(200, 60%, 30%);
        border: 0;
        background: radial-gradient(
          ellipse at center,
          hsla(200, 50%, 0%, 1) 20%,
          hsla(200, 50%, 60%, 0.5) 150%
        );
        box-shadow: 0 0 6px hsla(200, 100%, 80%, 1);
        text-shadow: 0 0 7px hsla(200, 100%, 80%, 1);
        color: hsla(200, 100%, 90%, 0.8);
        padding: 10px 32px;
        color: white;
        cursor: pointer;
      }
      input[type="range"] {
        -webkit-appearance: none;
        width: 100%;
        margin: 7.85px 0;
        background: transparent;
      }
      input[type="range"]:focus {
        outline: 0;
      }
      input[type="range"]::-webkit-slider-runnable-track {
        width: 100%;
        height: 9.3px;
        cursor: pointer;
        box-shadow: 1px 1px 1px #000, 0 0 1px #0d0d0d;
        background: hsl(200, 50%, 45%);
        border-radius: 1.3px;
        border: 0.2px solid #160101;
      }
      input[type="range"]::-webkit-slider-thumb {
        box-shadow: 1px 1px 1px #000, 0 0 1px #0d0d0d;
        border: 1px solid #000;
        height: 25px;
        width: 16px;
        border-radius: 3px;
        background: #fff;
        cursor: pointer;
        -webkit-appearance: none;
        margin-top: -8.05px;
      }
      input[type="range"]:focus::-webkit-slider-runnable-track {
        background: hsl(200, 60%, 55%);
      }
      input[type="range"]::-moz-range-track {
        width: 100%;
        height: 9.3px;
        cursor: pointer;
        box-shadow: 1px 1px 1px #000, 0 0 1px #0d0d0d;
        background: hsl(200, 50%, 45%);
        border-radius: 1.3px;
        border: 0.2px solid #160101;
      }
      input[type="range"]::-moz-range-thumb {
        box-shadow: 1px 1px 1px #000, 0 0 1px #0d0d0d;
        border: 1px solid #000;
        height: 25px;
        width: 16px;
        border-radius: 3px;
        background: #fff;
        cursor: pointer;
      }
      input[type="range"]::-ms-track {
        width: 100%;
        height: 9.3px;
        cursor: pointer;
        background: transparent;
        border-color: transparent;
        color: transparent;
      }
      input[type="range"]::-ms-fill-lower {
        background: #456394;
        border: 0.2px solid #160101;
        border-radius: 2.6px;
        box-shadow: 1px 1px 1px #000, 0 0 1px #0d0d0d;
      }
      input[type="range"]::-ms-fill-upper {
        background: hsl(200, 50%, 45%);
        border: 0.2px solid #160101;
        border-radius: 2.6px;
        box-shadow: 1px 1px 1px #000, 0 0 1px #0d0d0d;
      }
      input[type="range"]::-ms-thumb {
        box-shadow: 1px 1px 1px #000, 0 0 1px #0d0d0d;
        border: 1px solid #000;
        height: 25px;
        width: 16px;
        border-radius: 3px;
        background: #fff;
        cursor: pointer;
        height: 9.3px;
      }
      input[type="range"]:focus::-ms-fill-lower {
        background: hsl(200, 50%, 45%);
      }
      input[type="range"]:focus::-ms-fill-upper {
        background: hsl(200, 60%, 55%);
      }
      .github-fork-ribbon:before {
        background-color: hsla(200, 50%, 60%, 0.65);
      }
      .github-fork-ribbon:hover:before {
        background-color: hsla(200, 50%, 60%, 0.85);
      }
      [data-translate-base="promocontest"] {
        display: none;
      }
      [data-tooltip] {
        position: relative;
        z-index: 2;
        cursor: pointer;
      }
      [data-tooltip]:before,
      [data-tooltip]:after {
        visibility: hidden;
        opacity: 0;
        pointer-events: none;
      }
      [data-tooltip]:before {
        position: absolute;
        bottom: 150%;
        left: 50%;
        margin-bottom: -11px;
        margin-left: -97px;
        padding: 7px;
        width: 180px;
        -webkit-border-radius: 3px;
        -moz-border-radius: 3px;
        border-radius: 3px;
        background-color: #000;
        background-color: hsla(200, 50%, 30%, 0.9);
        color: #fff;
        content: attr(data-tooltip);
        text-align: center;
        font-size: 14px;
        line-height: 1.2;
      }
      .followtools [data-tooltip].fourth:before {
        margin-left: -125px;
      }
      .followtools [data-tooltip]:last-child:before {
        margin-left: -175px;
      }
      [data-tooltip]:after {
        position: absolute;
        bottom: 100%;
        left: 50%;
        margin-left: -5px;
        width: 0;
        border-top: 5px solid #000;
        border-top: 5px solid hsla(200, 50%, 30%, 0.9);
        border-right: 5px solid transparent;
        border-left: 5px solid transparent;
        content: " ";
        font-size: 0;
        line-height: 0;
      }
      [data-tooltip]:hover:before,
      [data-tooltip]:hover:after {
        visibility: visible;
        opacity: 1;
      }
      .atcb {
        display: none;
      }
      .atcb_button_wrapper {
        display: inline-block;
        padding: 5px;
        position: relative;
      }
      .atcb_button {
        align-items: center;
        background: #f5f5f5;
        border: 1px solid #d2d2d2;
        border-radius: 6px;
        -webkit-box-shadow: 1px 2px 10px 0 rgba(0, 0, 0, 0.4);
        box-shadow: 1px 2px 10px 0 rgba(0, 0, 0, 0.4);
        color: #333;
        cursor: pointer;
        display: flex;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 16px;
        font-weight: 600;
        line-height: 24px;
        max-width: 300px;
        min-width: 150px;
        padding: 10px 16px 11px 16px;
        position: relative;
        text-align: center;
        touch-action: manipulation;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        -webkit-tap-highlight-color: transparent;
        width: auto;
      }
      .atcb_button:focus,
      .atcb_button:hover {
        background: #fff;
      }
      @media only screen and (max-width: 575px) {
        .atcb_button {
          font-size: 14px;
        }
      }
      .atcb_button.atcb_active {
        background: #fff;
        border-radius: 6px 6px 3px 3px;
        -webkit-box-shadow: 1px 5px 15px 0 rgba(0, 0, 0, 0.5);
        box-shadow: 1px 5px 15px 0 rgba(0, 0, 0, 0.5);
        margin: -2px -4px;
        padding: 12px 20px 13px 20px;
        z-index: 90;
      }
      .atcb_icon {
        height: 16px;
        display: inline-block;
        margin-bottom: 4px;
        margin-right: 10px;
      }
      .atcb_icon svg {
        height: 100%;
        color: #333;
        width: auto;
      }
      .atcb_list {
        box-sizing: border-box;
        color: #333;
        display: block;
        font-family: Arial, Helvetica, sans-serif;
        max-width: 100%;
        position: absolute;
        padding: 0 3px;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        width: 100%;
        min-width: 10em;
        z-index: 80;
      }
      .atcb_list.atcb_modal {
        position: fixed;
        width: 16em;
        left: 50%;
        top: 50%;
        transform: translateY(-50%) translateX(-50%);
      }
      .atcb_list_item {
        align-items: center;
        background: #fafafa;
        border: 1px solid #d2d2d2;
        border-top: 0;
        -webkit-box-shadow: 1px 2px 8px 0 rgba(0, 0, 0, 0.3);
        box-shadow: 1px 2px 8px 0 rgba(0, 0, 0, 0.3);
        box-sizing: border-box;
        cursor: pointer;
        display: flex;
        font-size: 16px;
        left: 50%;
        position: relative;
        padding: 12px 18px;
        text-align: left;
        transform: translate(-50%);
        touch-action: manipulation;
        -webkit-tap-highlight-color: transparent;
      }
      .atcb_list_item:focus,
      .atcb_list_item:hover {
        background: #fff;
        -webkit-box-shadow: 1px 2px 10px 0 rgba(0, 0, 0, 0.4);
        box-shadow: 1px 2px 10px 0 rgba(0, 0, 0, 0.4);
        color: #000;
      }
      @media only screen and (max-width: 575px) {
        .atcb_list_item {
          font-size: 14px;
        }
      }
      .atcb_list.atcb_generated_button .atcb_list_item:first-child {
        padding-top: 20px;
      }
      .atcb_list:not(.atcb_generated_button) .atcb_list_item:first-child {
        border-radius: 6px 6px 0 0;
      }
      .atcb_list_item:last-child {
        border-radius: 0 0 6px 6px;
      }
      .atcb_list_item .atcb_icon {
        margin-right: 8px;
        width: 18px;
      }
      .atcb_bgoverlay {
        background: rgba(20, 20, 20, 0.2);
        backdrop-filter: blur(2px);
        height: 100%;
        left: 0;
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 70;
      }
      .atcb_bgoverlay.atcb_click:hover {
        cursor: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16'%3E%3Cpath fill-rule='evenodd' d='M11.991.69a2.35 2.35 0 0 1 3.318-.009c.918.911.922 2.392.009 3.307l-4.009 4.014 4.013 4.018c.906.909.893 2.38-.027 3.287a2.35 2.35 0 0 1-3.307-.004l-3.985-3.99-3.993 3.997a2.35 2.35 0 0 1-3.318.009c-.918-.911-.922-2.392-.009-3.307l4.009-4.014L.678 3.98C-.228 3.072-.215 1.6.706.693a2.35 2.35 0 0 1 3.307.004l3.985 3.99z'/%3E%3C/svg%3E")
            32 32,
          pointer;
      }
`;
GM_addStyle(inputWrapperStyle);



                    stylelog(`Css applied`);
                    stylelog(`Settings added`);
                    stylelog(`Badge Manager added`);
                    stylelog("Style loaded successfully");
                    log(`Client loaded successfully`);
                }, 30);
            }
        };
        xhr.send();
    }
    setTimeout(ClientLoader, 2000);

})();
