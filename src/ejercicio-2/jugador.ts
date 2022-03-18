import {Ficha} from './ficha';

/**
 * asd
 */
export class Jugador {
  public numeroFichas: number = 21;

  /**
   * asd
   * @param {Ficha} asd
   */
  constructor(public ficha: Ficha) {}

  /**
   * asd
   * @return {boolean} asd
   */
  enoughtTokens(): boolean {
    if (this.numeroFichas > 0) {
      return true;
    } else {
      return false;
    }
  }
}
