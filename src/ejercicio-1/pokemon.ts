/**
 * Possible tipes of our pokemons
 */
type Tipo = ('fuego' | 'agua' | 'hierba' | 'electrico');

/**
 * Interface Stats
 */
interface stats {
  /** Attack stat */
  ataque: number,
  /** Deffense stat */
  defensa: number,
  /** Speed stat */
  velocidad: number,
  /** HP values */
  HP: number
}

/**
 * Class Pokemon
 */
export class Pokemon implements stats {
  /**
   * Constructor of our class pokemon that initialize all the stats and different info about our pokemon
  * @param {string} nombre Name of our pokemon
  * @param {number} peso Weight of our pokemon
  * @param {number} altura Height of our pokemon
  * @param {Tipo} tipo Type of our pokemon
  * @param {number} ataque Attack stat of our pokemon
  * @param {number} defensa Defense stat of our pokemon
  * @param {number} velocidad Speed stat of our pokemon
  * @param {number} HP Health Points of our pokemon
   */
  constructor(public nombre: string,
              public peso: number,
              public altura: number,
              public tipo: Tipo,
              public ataque: number,
              public defensa: number,
              public velocidad: number,
              public HP: number) {}
}
