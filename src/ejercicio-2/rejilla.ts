import {Ficha} from './ficha';

/**
 * asd
 */
export class Rejilla {
  // public rejilla: Ficha[][];
  public rejilla: Ficha[][];


  /**
   * asd
   */
  constructor() {
    const columns: Ficha[] = new Array<Ficha>(6);

    this.rejilla = [columns, columns, columns, columns, columns, columns, columns];
  }

  /**
   * asd
   * @param {number} column asd
   * @return {boolean} asd
   */
  fullColumn(column: number) {
    let full: boolean = true;

    for (let i = 0; i < this.rejilla.length; i++) {
      if (this.rejilla[i][column] === undefined) {
        full = false;
      } else {
        if (this.rejilla[i][column].symbol === '') {
          full = false;
        }
      }
    }

    return full;
  }

  /**
   * asd
   * @param {number} row asd
   * @param {number} column asd
   * @param {string} symbol asd
   * @return {boolean} asd
   */
  checkHorizontal(row: number, column: number, symbol: string): boolean {
    let pivotHorizontal: number = column;
    let consecutive: number = 0;

    while (pivotHorizontal >= 0 && consecutive < 4) {
      if (this.rejilla[row][pivotHorizontal] !== undefined) {
        if (this.rejilla[row][pivotHorizontal].symbol === symbol) {
          consecutive++;
        }
      }

      pivotHorizontal--;
    }

    pivotHorizontal = column + 1;

    while (pivotHorizontal < this.rejilla[row].length && consecutive < 4) {
      if (this.rejilla[row][pivotHorizontal] !== undefined) {
        if (this.rejilla[row][pivotHorizontal].symbol === symbol) {
          consecutive++;
        }
      }

      pivotHorizontal++;
    }

    if (consecutive >= 4) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * asdasd
   * @param {number} row asd
   * @param {number} column asd
   * @param {string} symbol asd
   * @return {boolean} asd
   */
  checkVertical(row: number, column: number, symbol: string): boolean {
    let pivotVertical: number = column;
    let consecutive: number = 0;

    while (pivotVertical >= 0 && consecutive < 4) {
      if (this.rejilla[pivotVertical][column] !== undefined) {
        if (this.rejilla[pivotVertical][column].symbol === symbol) {
          consecutive++;
        }
      }

      pivotVertical--;
    }

    pivotVertical = row + 1;

    while (pivotVertical < this.rejilla.length && consecutive < 4) {
      if (this.rejilla[pivotVertical][column] !== undefined) {
        if (this.rejilla[pivotVertical][column].symbol === symbol) {
          consecutive++;
        }
      }

      pivotVertical++;
    }

    if (consecutive >= 4) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * asd
   * @param {number} row asd
   * @param {number} column asd
   * @param {string} symbol asd
   * @return {boolean} asd
   */
  checkDiagonal(row: number, column: number, symbol: string): boolean {
    return false;
  }

  /**
   * asd
   */
  reset() {
    this.rejilla = [];
  }
}
