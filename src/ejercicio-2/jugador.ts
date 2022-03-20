import {Ficha} from './ficha';

/**
 * Class jugador
 */
export class Jugador {
  public numeroFichas: number = 21;

  /**
   * Constructor of our jugador class, given a token create a player with 21 tokens and the definition of itself
   * @param {Ficha} ficha Token that our player will use during the game
   */
  constructor(public ficha: Ficha) {}

  /**
   * Function that allow us to check if the player have enought tokens to play
   * @return {boolean} Returns true if the player have 1 or more tokens, false if not
   */
  enoughtTokens(): boolean {
    if (this.numeroFichas > 0) {
      return true;
    } else {
      return false;
    }
  }
}
