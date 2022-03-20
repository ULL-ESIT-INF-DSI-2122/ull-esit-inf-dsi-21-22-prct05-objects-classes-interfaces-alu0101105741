import {Jugador} from './jugador';
import {Rejilla} from './rejilla';

/**
 * Conecta4 class
 */
export class Conecta4 {
  public final = false;
  /**
   * Conecta4 constructor that creates a conecta4 game with a board and 2 players given
   * @param {Rejilla} rejilla1 asd
   * @param {Jugador} jugador1 asd
   * @param {Jugador} jugador2 asd
   */
  constructor(public rejilla: Rejilla, public jugador1: Jugador, public jugador2: Jugador) {}

  /**
   * Function that will start the game asking for each player of what column does he want to put his token
   */
  start() {

  }

  /**
   * Function that check if a game is finished
   * @return {boolean} Returns true if the game is finished, false if its not
   */
  isFinished(): boolean {
    return this.final;
  }

  /**
   * Function that allow us to reset the game so we can start a new one
   */
  reset() {
    this.rejilla.reset();
    this.final = false;
  }
}
