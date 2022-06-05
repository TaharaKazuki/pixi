import * as PIXI from 'pixi.js'
import { PuzzleGridConfig } from './PuzzleGridConfig'
import { PuzzlePice } from './PuzzlePiece'

export class PuzzleGrid {
  container: PIXI.Container
  pieces: PuzzlePice[] = []

  constructor() {
    this.container = new PIXI.Container()
    this.container.x = window.innerWidth / 2
    this.container.y = window.innerHeight / 2
    this.container.sortableChildren = true
    this.createPuzzlePieces()
  }

  createPuzzlePieces() {
    let ids = PuzzleGridConfig.map((field) => field.id)

    PuzzleGridConfig.forEach((field) => {
      const random = Math.floor(Math.random() * ids.length)
      const id = ids[random]
      ids = ids.filter((item) => item !== id)
      const piece = new PuzzlePice(id, field)
      this.container.addChild(piece.sprite)
      this.pieces.push(piece)
    })
  }
}
