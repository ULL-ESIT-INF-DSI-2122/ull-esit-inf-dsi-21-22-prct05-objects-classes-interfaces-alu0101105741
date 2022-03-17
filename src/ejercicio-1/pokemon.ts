type Tipo = ('fuego' | 'agua' | 'hierba' | 'electrico');

/**
 * Interface Stats
 */
interface stats {
  ataque: number,
  defensa: number,
  velocidad: number,
  HP: number
}

/**
 * Class Pokemon
 */
export class Pokemon implements stats {
  /**
   * asd
  * @param {string} nombre asd
  * @param {number} peso asd
  * @param {number} altura asd
  * @param {Tipo} tipo asd
  * @param {number} ataque asd
  * @param {number} defensa asd
  * @param {number} velocidad asd
  * @param {number} HP asd
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
