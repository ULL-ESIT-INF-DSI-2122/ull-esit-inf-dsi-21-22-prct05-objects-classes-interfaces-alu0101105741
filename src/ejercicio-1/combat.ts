import {Pokemon} from './pokemon';

/**
 * Class Combat
 */
export class Combat {
  /**
   * Constructor of our class combat that allow us to simulate a combat given two pokemons
   * @param {Pokemon} contrincanteUno First pokemon to fight
   * @param {Pokemon} contrincanteDos Second pokemon to fight
   */
  constructor(public contrincanteUno: Pokemon,
              public contrincanteDos: Pokemon) {}

  /**
   * Start function that start the combat between our pokemon
   */
  start() {
    let i: number = 0;
    console.log(`Empezamos el combate, vida de los diferentes contrincantes (${this.contrincanteUno.nombre}: ${this.contrincanteUno.HP}. ${this.contrincanteDos.nombre}: ${this.contrincanteDos.HP})\n`);

    while (this.contrincanteUno.HP > 0 && this.contrincanteDos.HP > 0) {
      if (i % 2 === 0) {
        this.contrincanteDos.HP -= this.pokemonTrainer(this.contrincanteUno, this.contrincanteDos);
        console.log(`TURNO ${i + 1}:\nVida del primer contrincante (${this.contrincanteUno.nombre}): ${this.contrincanteUno.HP}\nVida del segundo contrincante (${this.contrincanteDos.nombre}): ${this.contrincanteDos.HP}\n`);
      } else {
        this.contrincanteUno.HP -= this.pokemonTrainer(this.contrincanteDos, this.contrincanteUno);
        console.log(`TURNO ${i + 1}:\nVida del primer contrincante (${this.contrincanteUno.nombre}): ${this.contrincanteUno.HP}\nVida del segundo contrincante (${this.contrincanteDos.nombre}): ${this.contrincanteDos.HP}\n`);
      }
      i++;
    }
  }

  /**
   * Function that will allow us to check if the combat ended with a pokemon with no HP
   * @return {number} Lowest HP value of our pokemon
   */
  lowestHP(): number {
    if (this.contrincanteUno.HP < this.contrincanteDos.HP) {
      return this.contrincanteUno.HP;
    } else {
      return this.contrincanteDos.HP;
    }
  }

  /**
   * Function that allow us to calculate the damage done by a pokemon to the other one
   * @param {Pokemon} contrincanteUno Pokemon that attacks
   * @param {Pokemon} contrincanteDos Pokemon that deffends
   * @return {number} Number of HP that the first pokemon deals to the second
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
      }
      case 'agua': {
        return this.aguaEffectiveness(sencondType);
      }
      case 'hierba': {
        return this.hierbaEffectiveness(sencondType);
      }
      case 'electrico': {
        return this.electricoEffectiveness(sencondType);
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
      }
      case 'hierba': {
        return 2;
      }
      case 'electrico': {
        return 1;
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
      }
      case 'hierba': {
        return 0.5;
      }
      case 'electrico': {
        return 0.5;
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
      }
      case 'agua': {
        return 2;
      }
      case 'electrico': {
        return 1;
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
      }
      case 'agua': {
        return 2;
      }
      case 'hierba': {
        return 1;
      }
    }
  }
}
