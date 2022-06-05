import * as PIXI from 'pixi.js'
import { Globals } from './Global'

export class PuzzlePice {
  sprite!: PIXI.Sprite
  dragging!: boolean
  field!: { x: number; y: number }
  touchPosition!: { x: number; y: number }

  constructor(id: number, field: { x: number; y: number }) {
    this.sprite = new PIXI.Sprite(Globals.resources[`puzzle${id}`].texture)
    this.field = field
    this.reset()

    this.sprite.x = field.x
    this.sprite.y = field.y
    this.sprite.anchor.set(0.5)
    this.sprite.scale.set(0.5)

    this.setInteractive()
  }

  setInteractive() {
    this.sprite.interactive = true
    this.sprite.on('mousedown', this.onTouchStart, this)
    this.sprite.on('pointermove', this.onTouchMove, this)
    this.sprite.on('pointerup', this.onTouchEnd, this)
  }

  onTouchStart(e: PIXI.InteractionEvent) {
    this.touchPosition = { x: e.data.global.x, y: e.data.global.y }
    this.dragging = true
    this.sprite.zIndex = 1
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

  onTouchEnd() {
    this.dragging = false
    this.reset()
    this.sprite.zIndex = 0
  }

  reset() {
    this.sprite.x = this.field.x
    this.sprite.y = this.field.y
  }
}
