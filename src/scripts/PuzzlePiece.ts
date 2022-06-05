import * as PIXI from 'pixi.js'
import { Globals } from './Global'

export class PuzzlePice {
  sprite!: PIXI.Sprite

  constructor(id: number, field: { x: number; y: number }) {
    const sprite = new PIXI.Sprite(Globals.resources[`puzzle${id}`].texture)

    this.sprite = new PIXI.Sprite(Globals.resources[`puzzle${id}`].texture)
    this.sprite.x = field.x
    this.sprite.y = field.y
    this.sprite.anchor.set(0.5)
    this.sprite.scale.set(0.5)
    this.setInteractive()
  }

  setInteractive() {
    this.sprite.interactive = true
    this.sprite.on('mousedown', this.onTouchStart, this)
  }

  onTouchStart(e: PIXI.InteractionEvent) {
    console.info(e)
  }
}
