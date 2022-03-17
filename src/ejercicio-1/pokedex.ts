import {Pokemon} from './pokemon';

/**
 * Class Pokedex
 */
export class Pokedex {
  /**
   * asd
   * @param {Pokemon} pokemons asd
   */
  constructor(public pokemons: Pokemon[]) {}

  /**
   * asd
   * @param {Pokemon} pokemon asd
   */
  addPokemon(pokemon: Pokemon) {
    this.pokemons.push(pokemon);
  }

  /**
   * asd
   * @return {Pokemon[]} asd
   */
  getPokemons(): Pokemon[] {
    return this.pokemons;
  }
}
