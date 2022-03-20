import {Ficha} from './ficha';
import {Jugador} from './jugador';
import scanf = require('scanf');

/**
 * Rejilla class
 */
export class Rejilla {
  public rejilla: Ficha[][];


  /**
   * Constructor that create our rejilla creating all the spaces
   */
  constructor() {
    const columns: Ficha[] = new Array<Ficha>(6);

    this.rejilla = [columns, columns, columns, columns, columns, columns, columns];
  }

  /**
   * Function that allow us to put a player token in a given column
   * @param {number} column Column given to put our token
   * @param {Jugador} jugador Player that puts the token
   */
  addColumn(column: number, jugador: Jugador) {
    if (!this.fullColumn(column) && column >= 0 && column < 7) {
      let i = this.rejilla.length - 1;
      while (this.rejilla[i][column] !== undefined) {
        i--;
      }

      this.rejilla[i][column] = jugador.ficha;
      console.log('Valor añadido: test add column', this.rejilla[0][column], this.rejilla[1][column], this.rejilla[2][column], this.rejilla[3][column], this.rejilla[4][column], this.rejilla[5][column]);
    } else {
      console.error(`La columna ${column} está llena o fuera de rango, seleccione otra columna [0, 6]: `);
      const columna = scanf('%d');
      this.addColumn(columna, jugador);
    }
  }

  /**
   * Function that allow us to check if a column is full of tokens
   * @param {number} column Column given to check
   * @return {boolean} Returns true if the column is full or false if there a empty space
   */
  fullColumn(column: number): boolean {
    if (this.rejilla[0][column] === undefined) {
      return false;
    } else {
      console.log('columna llena', this.rejilla[0][column].symbol, this.rejilla[1][column].symbol, this.rejilla[2][column].symbol, this.rejilla[3][column].symbol, this.rejilla[4][column].symbol, this.rejilla[5][column].symbol);
    }

    return true;
  }

  /**
   * Function that allow us to check if a player have 4 tokens in an horizontal line
   * @param {number} row Row where the last token was putted
   * @param {number} column Column where the last token was putted
   * @param {string} symbol Symbol of our player to check
   * @return {boolean} Return true if the player have 4 tokens in an horizontal line, false if it doesn't
   */
  checkHorizontal(row: number, column: number, symbol: string): boolean {
    let pivotHorizontal: number = column;
    let consecutive: number = 0;

    while (pivotHorizontal >= 0 && consecutive < 4) {
      if (this.rejilla[row][pivotHorizontal] !== undefined) {
        if (this.rejilla[row][pivotHorizontal].symbol === symbol) {
          consecutive++;
          pivotHorizontal--;
        } else {
          return false;
        }
      } else {
        return false;
      }
    }

    pivotHorizontal = column + 1;

    while (pivotHorizontal < this.rejilla[row].length && consecutive < 4) {
      if (this.rejilla[row][pivotHorizontal] !== undefined) {
        if (this.rejilla[row][pivotHorizontal].symbol === symbol) {
          consecutive++;
          pivotHorizontal++;
        } else {
          return false;
        }
      } else {
        return false;
      }
    }

    if (consecutive >= 4) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * Function that allow us to check if a player have 4 tokens in an vertical line
   * @param {number} row Row where the last token was putted
   * @param {number} column Column where the last token was putted
   * @param {string} symbol Symbol of our player to check
   * @return {boolean} Return true if the player have 4 tokens in an vertical line, false if it doesn't
   */
  checkVertical(row: number, column: number, symbol: string): boolean {
    let pivotVertical: number = column;
    let consecutive: number = 0;

    while (pivotVertical >= 0 && consecutive < 4) {
      if (this.rejilla[pivotVertical][column] !== undefined) {
        if (this.rejilla[pivotVertical][column].symbol === symbol) {
          consecutive++;
          pivotVertical--;
        } else {
          return false;
        }
      } else {
        return false;
      }
    }

    pivotVertical = row + 1;

    while (pivotVertical < this.rejilla.length && consecutive < 4) {
      if (this.rejilla[pivotVertical][column] !== undefined) {
        if (this.rejilla[pivotVertical][column].symbol === symbol) {
          consecutive++;
          pivotVertical++;
        } else {
          return false;
        }
      } else {
        return false;
      }
    }

    if (consecutive >= 4) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * Function that allow us to check if a player have 4 tokens in an diagonal line
   * @param {number} row Row where the last token was putted
   * @param {number} column Column where the last token was putted
   * @param {string} symbol Symbol of our player to check
   * @return {boolean} Return true if the player have 4 tokens in an diagonal line, false if it doesn't
   */
  checkDiagonal(row: number, column: number, symbol: string): boolean {
    return false;
  }

  /**
   * Function that allow us to reset our rejilla
   */
  reset() {
    this.rejilla = [];
  }
}
