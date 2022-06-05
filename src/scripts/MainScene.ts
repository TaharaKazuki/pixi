import * as PIXI from 'pixi.js'
import { Globals } from './Global'
import { PuzzleGrid } from './PuzzleGrid'
import { sound } from '@pixi/sound'

export class MainScene {
  container: PIXI.Container

  constructor() {
    this.container = new PIXI.Container()
    sound.add('music', Globals.resources.music.url)
    // sound.play('music', { loop: true, volume: 0.2 })
    this.createBackground()
    this.createPuzzleGrid()
  }

  createBackground() {
    const bg = new PIXI.Sprite(Globals.resources.bg.texture)
    bg.width = window.innerWidth
    bg.height = window.innerHeight
    this.container.addChild(bg)
  }

  createPuzzleGrid() {
    const grid = new PuzzleGrid()
    this.container.addChild(grid.container)
  }
}
