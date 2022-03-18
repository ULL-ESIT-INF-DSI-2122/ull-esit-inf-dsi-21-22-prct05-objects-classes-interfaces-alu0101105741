import chalk = require('chalk');

export type colorFicha = ('rojo' | 'amarillo');

/**
 * asd
 */
export class Ficha {
  /**
   * asd
   * @param {string} symbol asd
   * @param {colorFicha} color asd
   */
  constructor(public color: colorFicha, public symbol: string = '') {}

  /**
   * sd
   * @return {chalk.Chalk} asd
   */
  print() {
    switch (this.color) {
      case 'rojo': {
        return chalk.red.inverse(this.symbol);
      }
      case 'amarillo': {
        return chalk.yellow.inverse(this.symbol);
      }
    }
  }
}
