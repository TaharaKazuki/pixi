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
    this.createPuzzlePieces()
  }

  createPuzzlePieces() {
    PuzzleGridConfig.forEach((field) => {
      const piece = new PuzzlePice(field.id, field)
      this.container.addChild(piece.sprite)
      this.pieces.push(piece)
    })
  }
}
