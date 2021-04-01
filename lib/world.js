class World {
  constructor(height, width) {
    this.height = height;
    this.width = width;

    let Application = PIXI.Application,
        Container = PIXI.Container,
        loader = PIXI.Loader.shared,
        resources = PIXI.Loader.shared.resources,
        Graphics = PIXI.Graphics,
        TextureCache = PIXI.utils.TextureCache,
        Sprite = PIXI.Sprite;

    this.renderer = PIXI.autoDetectRenderer(this.width, this.height,{backgroundColor : 0x1099bb});

    //Create a Pixi Application
    this.app = new Application({
        width: this.width,
        height: this.height,
        antialiasing: true,
        transparent: false,
        resolution: 1
      }
    );

    document.body.appendChild(this.app.view);
  }

  addChild(child) {
    this.app.stage.addChild(child);
  }
}
