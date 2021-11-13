/*!
 * pixi-js-test-app - v1.0.0
 * Compiled Sun, 31 Oct 2021 18:26:47 UTC
 */
var app = (function (exports, core_js, pixi_js) {
	'use strict';

	class Sample {
	    constructor() {
	    }
	    destroy() {
	    }
	}

	class DatGUISample extends Sample {
	    constructor(app) {
	        super();
	        let guiProps = {};
	        guiProps.renderEnabled = true;
	        guiProps.maxFPS = 60;
	        let gui = new dat.GUI({ hideable: true, closed: true });
	        gui.useLocalStorage = false;
	        let folder = gui.addFolder('Main settings');
	        folder.add(guiProps, 'renderEnabled', 0, 1)
	            .name('&bull; Rendering enabled')
	            .onChange((value) => {
	            if (!value) {
	                app.stop();
	            }
	            else {
	                app.start();
	            }
	        });
	        gui.open();
	        folder.open();
	        folder = gui.addFolder('Advanced options');
	    }
	    destroy() {
	    }
	}

	class TestAppAssets extends core_js.AssetList {
	    constructor() {
	        super('AppAssetList');
	        this.add(new core_js.Asset('Data', 'assets/data.json'));
	        this.add(new core_js.AssetBundle('AppBundle', 'assets/bundle.zip'));
	    }
	}

	class TestApp extends core_js.App {
	    constructor() {
	        super({
	            resolution: { width: 1920, height: 1080 },
	            scale: { method: core_js.AppScale.float.bind(core_js.AppScale), adaptivity: 1.2 },
	            //title: "PIXI JS Test App",
	            quality: core_js.AppQuality.BEST,
	            language: core_js.AppLanguage.ENGLISH,
	            color: 0x7777FF,
	            border: false
	        });
	        this.addPreloader();
	        this._datguiSample = new DatGUISample(this);
	        core_js.Assets.addLists(new TestAppAssets());
	        core_js.Assets.load({ listID: 'AppAssetList' })
	            .onStart(this.onLoadingStart.bind(this))
	            .onProgress(this.onLoadingProgress.bind(this))
	            .onComplete(this.onLoadingComplete.bind(this))
	            .onError(this.onLoadingError.bind(this));
	    }
	    onResize() {
	        super.onResize();
	    }
	    onLoadingStart() {
	        super.onLoadingStart();
	    }
	    onLoadingProgress(data) {
	        super.onLoadingProgress(data);
	    }
	    onLoadingComplete() {
	        if (this._preloader) {
	            setTimeout(this._preloader.hide.bind(this._preloader), 500);
	        }
	        setTimeout(this.tests.bind(this), 1000);
	    }
	    onLoadingError(message) {
	        if (this._preloader)
	            this._preloader.showError(message);
	    }
	    tests() {
	        let sheet = core_js.Assets.spritesheet('core ui');
	        let bg = new pixi_js.TilingSprite(sheet.textures["grid.png"], 1920, 1080);
	        core_js.Color.addColorFilterTo(bg, 0x7777FF, 3);
	        bg.cacheAsBitmap = true;
	        this.content.addChild(bg);
	        let tx = sheet.textures["panel_dark.png"];
	        let nsp = new pixi_js.NineSlicePlane(tx, 10, 32, 10, 10);
	        nsp.width = 200;
	        nsp.height = 100;
	        this.content.addChild(nsp);
	        core_js.Color.addColorFilterTo(nsp, 0x7777FF, 3);
	        let tex = sheet.textures["progressbar_fill_thin.png"];
	        let ts = new pixi_js.TilingSprite(tex, 800, 6);
	        ts.cacheAsBitmap = true;
	        ts.x = 100;
	        ts.y = 200;
	        core_js.Color.addColorFilterTo(ts, 0x7777FF, 2);
	        this.content.addChild(ts);
	        let click = core_js.Assets.sound('click', 'AppAssetList');
	        let bg1 = new pixi_js.Sprite(core_js.Assets.texture('img1', 'Default'));
	        this.content.addChild(bg1);
	        let spr = new pixi_js.Sprite(core_js.Assets.texture('starlight texture', 'Starlight'));
	        spr.scale.x = -1;
	        spr.pivot.x = spr.width;
	        spr.name = 'Starlight';
	        core_js.Console.inspector.attach(spr);
	        core_js.Console.messages.scroll.container.addChild(new pixi_js.Sprite(core_js.Assets.texture('starlight texture', 'Starlight')));
	        let btnBlue = new core_js.CodeButton({ color: 0x0000FF, width: 400, height: 120, text: 'Blue button', radius: 40, alpha: 0.75 });
	        btnBlue.x = 460;
	        btnBlue.y = 540;
	        btnBlue.label = { text: 'Blue\nbutton', style: { fontSize: 40 } };
	        core_js.Console.inspector.attach(btnBlue);
	        core_js.Console.messages.scroll.container.addChild(btnBlue);
	        let redButn = new core_js.CodeButton({ color: 0xFF0000, width: 400, height: 60, text: 'Red button' });
	        redButn.x = 30;
	        redButn.y = 600;
	        core_js.Console.inspector.attach(redButn);
	        core_js.Console.messages.scroll.container.addChild(redButn);
	        let handle = new core_js.CodeButton({ color: 0xFFFF00, width: 20, height: 200 });
	        handle.x = 950;
	        handle.y = 290;
	        core_js.Console.inspector.attach(handle);
	        core_js.Console.messages.scroll.container.addChild(handle);
	        let greenButn = new core_js.CodeButton({ color: 0x44FF44, width: 200, height: 200, text: 'G', radius: 100 });
	        greenButn.x = 610;
	        greenButn.y = 290;
	        core_js.Console.inspector.attach(greenButn);
	        core_js.Console.messages.scroll.container.addChild(greenButn);
	        greenButn.resize({ w: 100, h: 200 });
	        core_js.Console.messages.scroll.percentX = 0.5;
	        core_js.Console.messages.scroll.percentY = 0.5;
	        core_js.Console.commands.add('c1', 'my test command', () => {
	            console.log('my test command');
	        });
	        core_js.Console.commands.add('c2', 'remove bg', () => {
	            this.content.removeChild(bg1);
	        });
	        core_js.Console.commands.add('c3', 'add bg', () => {
	            this.content.addChildAt(bg1, this.content.children.length - 1);
	        });
	        core_js.Console.commands.add('c4', 'play click', () => {
	            click.play();
	        });
	        spr.buttonMode = true;
	        spr.interactive = true;
	        spr.hitArea = new pixi_js.Rectangle(100, 0, 400, 1000);
	        spr.on('mousedown', () => {
	            if (document.fullscreenElement == document.getElementById("app"))
	                document.exitFullscreen();
	            else
	                document.getElementById("app")?.requestFullscreen();
	        });
	        this.content.addChild(spr);
	        this.onResize();
	    }
	}
	core_js.startApp(TestApp);

	exports.TestApp = TestApp;

	Object.defineProperty(exports, '__esModule', { value: true });

	return exports;

})({}, CORE, PIXI);
