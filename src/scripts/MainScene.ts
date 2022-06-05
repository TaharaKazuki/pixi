import * as PIXI from 'pixi.js'
import { Globals } from './Global'

export class MainScene {
  container: PIXI.Container

  constructor() {
    this.container = new PIXI.Container()
    this.createBackground()
  }

  createBackground() {
    const bg = new PIXI.Sprite(Globals.resources.bg.texture)
    bg.width = window.innerWidth
    bg.height = window.innerHeight
    this.container.addChild(bg)
  }
}