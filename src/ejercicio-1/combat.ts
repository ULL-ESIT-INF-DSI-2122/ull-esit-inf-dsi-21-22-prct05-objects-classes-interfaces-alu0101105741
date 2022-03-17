import {Pokemon} from './pokemon';

/**
 * Class Combat
 */
export class Combat {
  /**
   * asd
   * @param {Pokemon} contrincanteUno asd
   * @param {Pokemon} contrincanteDos asd
   */
  constructor(public contrincanteUno: Pokemon,
              public contrincanteDos: Pokemon) {}

  /**
   * asd
   */
  start() {
    let i: number = 0;
    while (this.contrincanteUno.HP > 0 && this.contrincanteDos.HP > 0) {
      if (i % 2 === 0) {
        this.contrincanteDos.HP -= this.pokemonTrainer(this.contrincanteUno, this.contrincanteDos);
        console.log(`Vida del primer contrincante: ${this.contrincanteUno.HP}
                    Vida del segundo contrincante: ${this.contrincanteDos.HP}`);
      } else {
        this.contrincanteUno.HP -= this.pokemonTrainer(this.contrincanteDos, this.contrincanteUno);
        console.log(`Vida del primer contrincante: ${this.contrincanteUno.HP}
                    Vida del segundo contrincante: ${this.contrincanteDos.HP}`);
      }
      i++;
    }
  }

  /**
   * asd
   * @param {Pokemon} contrincanteUno asd
   * @param {Pokemon} contrincanteDos asd
   * @return {number} asd
   */
  pokemonTrainer(contrincanteUno: Pokemon, contrincanteDos: Pokemon): number {
    return 50 * (contrincanteUno.ataque / contrincanteDos.defensa) *
    this.effectiveness(contrincanteUno.tipo, contrincanteDos.tipo);
  }

  /**
   * Given 2 types of pokemon, returns the effectiveness
   * @param {string} firstType Type of the first pokemon
   * @param {string} sencondType Type of the second pokemon
   * @return {number} Effectiveness between the pokemon
   */
  effectiveness(firstType: string, sencondType: string): number {
    switch (firstType) {
      case 'fuego': {
        return this.fuegoEffectiveness(sencondType);
        break;
      }
      case 'agua': {
        return this.aguaEffectiveness(sencondType);
        break;
      }
      case 'hierba': {
        return this.hierbaEffectiveness(sencondType);
        break;
      }
      case 'electrico': {
        return this.electricoEffectiveness(sencondType);
        break;
      }
    }
  }

  /**
   * Given a type returns the effectiveness between fire and that type
   * @param {string} sencondType type given
   * @return {number} effectiveness between fire and the type
   */
  fuegoEffectiveness(sencondType: string): number {
    switch (sencondType) {
      case 'agua': {
        return 0.5;
        break;
      }
      case 'hierba': {
        return 2;
        break;
      }
      case 'electrico': {
        return 1;
        break;
      }
    }
  }

  /**
   * Given a type returns the effectiveness between water and that type
   * @param {string} sencondType type given
   * @return {number} effectiveness between water and the type
   */
  aguaEffectiveness(sencondType: string): number {
    switch (sencondType) {
      case 'fuego': {
        return 2;
        break;
      }
      case 'hierba': {
        return 0.5;
        break;
      }
      case 'electrico': {
        return 0.5;
        break;
      }
    }
  }

  /**
   * Given a type returns the effectiveness between grass and that type
   * @param {string} sencondType type given
   * @return {number} effectiveness between grass and the type
   */
  hierbaEffectiveness(sencondType: string): number {
    switch (sencondType) {
      case 'fuego': {
        return 0.5;
        break;
      }
      case 'agua': {
        return 2;
        break;
      }
      case 'electrico': {
        return 1;
        break;
      }
    }
  }

  /**
   * Given a type returns the effectiveness between electric and that type
   * @param {string} sencondType type given
   * @return {number} effectiveness between electric and the type
   */
  electricoEffectiveness(sencondType: string): number {
    switch (sencondType) {
      case 'fuego': {
        return 1;
        break;
      }
      case 'agua': {
        return 2;
        break;
      }
      case 'hierba': {
        return 1;
        break;
      }
    }
  }
}
