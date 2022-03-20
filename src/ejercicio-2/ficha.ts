import chalk = require('chalk');

export type colorFicha = ('rojo' | 'amarillo');

/**
 * Ficha class
 */
export class Ficha {
  /**
   * Constructor of the ficha class, with a color and a symbol we create the token of the player
   * @param {string} symbol asd
   * @param {colorFicha} color asd
   */
  constructor(public color: colorFicha, public symbol: string = '') {}

  /**
   * Print function that allow us to prin our token with his correspondient colour and symbol on console
   * @return {chalk.Chalk} Chalk output that allow us to see the color on the console
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
