import bg from '../sprites/bg.png'
import puzzle1 from '../sprites/1.png'
import puzzle2 from '../sprites/2.png'
import puzzle3 from '../sprites/3.png'
import puzzle4 from '../sprites/4.png'
import puzzle5 from '../sprites/5.png'
import puzzle6 from '../sprites/6.png'
import puzzle7 from '../sprites/7.png'
import puzzle8 from '../sprites/8.png'
import puzzle9 from '../sprites/9.png'
import click from '../sounds/click.mp3'
import music from '../sounds/music.mp3'

interface ILoaderConfig {
  [key: string]: string
}
export const LoaderConfig: ILoaderConfig = {
  bg,
  puzzle1,
  puzzle2,
  puzzle3,
  puzzle4,
  puzzle5,
  puzzle6,
  puzzle7,
  puzzle8,
  puzzle9,
  click,
  music,
}
