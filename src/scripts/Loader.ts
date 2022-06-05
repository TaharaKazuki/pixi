import { LoaderConfig } from './LoaderConfig'

import { Loader as ILoader } from 'pixi.js'
import { Globals } from './Global'

export class Loader {
  loader: ILoader

  constructor(loader: ILoader) {
    this.loader = loader
  }

  preload() {
    return new Promise<void>((resolve, reject) => {
      for (const key in LoaderConfig) {
        const url = LoaderConfig[key]
        this.loader.add(key, url)
      }

      this.loader.load((loader, resources) => {
        Globals.resources = resources
        resolve()
      })
    })
  }
}
