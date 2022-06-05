import * as PIXI from 'pixi.js'
import { Globals } from './Global'

export class PuzzlePice {
  sprite!: PIXI.Sprite
  dragging!: boolean
  field!: { x: number; y: number }
  touchPosition!: { x: number; y: number }

  constructor(id: number, field: { x: number; y: number }) {
    this.sprite = new PIXI.Sprite(Globals.resources[`puzzle${id}`].texture)
    this.sprite.x = field.x
    this.sprite.y = field.y
    this.sprite.anchor.set(0.5)
    this.sprite.scale.set(0.5)

    this.field = field

    this.setInteractive()
  }

  setInteractive() {
    this.sprite.interactive = true
    this.sprite.on('mousedown', this.onTouchStart, this)
  }

  onTouchStart(e: PIXI.InteractionEvent) {
    this.touchPosition = { x: e.data.global.x, y: e.data.global.y }
    this.dragging = true
  }

  onTouchMove(e: PIXI.InteractionEvent) {
    if (!this.dragging) {
      return
    }

    const currentPosition = { x: e.data.global.x, y: e.data.global.y }
    const offset = {
      x: currentPosition.x - this.touchPosition.x,
      y: currentPosition.y - this.touchPosition.y,
    }

    this.sprite.x = this.field.x + offset.x
    this.sprite.y = this.field.y + offset.y
  }
}
