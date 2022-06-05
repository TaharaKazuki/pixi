import * as PIXI from 'pixi.js'

interface IGlobal {
  resources: PIXI.utils.Dict<PIXI.LoaderResource>
}

export const Globals: IGlobal = {
  resources: {},
}
