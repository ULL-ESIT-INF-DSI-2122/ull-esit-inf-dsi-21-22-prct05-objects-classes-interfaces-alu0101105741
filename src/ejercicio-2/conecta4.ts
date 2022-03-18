import {Jugador} from './jugador';
import {Rejilla} from './rejilla';

/**
 * asd
 */
export class Conecta4 {
  public final = false;
  /**
   * zxc
   * @param {Rejilla} rejilla1 asd
   * @param {Jugador} jugador1 asd
   * @param {Jugador} jugador2 asd
   */
  constructor(public rejilla: Rejilla, public jugador1: Jugador, public jugador2: Jugador) {}

  /**
   * asd
   */
  start() {

  }

  /**
   * asd
   * @return {boolean} asd
   */
  isFinished(): boolean {
    return this.final;
  }

  /**
   * asd
   */
  reset() {
    this.rejilla.reset();
    this.final = false;
  }
}
