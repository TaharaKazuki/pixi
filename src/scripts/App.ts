import * as PIXI from 'pixi.js'
import { Loader } from './Loader'
import { MainScene } from './MainScene'
import TWEEN from '@tweenjs/tween.js'

export class App {
  app: PIXI.Application

  constructor() {
    this.app = new PIXI.Application({ resizeTo: window })
  }
  run() {
    // create canvas
    document.body.appendChild(this.app.view)

    // load sprites
    const loader = new Loader(this.app.loader)
    loader.preload().then(() => {
      this.start()
    })
  }

  start() {
    this.app.ticker.add(() => {
      TWEEN.update()
    })
    const mainScene = new MainScene()
    this.app.stage.addChild(mainScene.container)
  }
}
