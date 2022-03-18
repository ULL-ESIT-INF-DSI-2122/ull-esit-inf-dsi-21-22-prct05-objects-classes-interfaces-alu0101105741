import {Pokemon} from './pokemon';

/**
 * Class Pokedex
 */
export class Pokedex {
  /**
   * Constructor of the class Pokedex that allow us to have an array of Pokemons
   * @param {Pokemon} pokemons Array that contains the pokemons of our pokedex
   */
  constructor(public pokemons: Pokemon[]) {}

  /**
   * Function that allow us to add an extra pokemon to our pokedex
   * @param {Pokemon} pokemon asd
   */
  addPokemon(pokemon: Pokemon) {
    this.pokemons.push(pokemon);
  }

  /**
   * Function that return us the pokemons of our pokedex
   * @return {Pokemon[]} asd
   */
  getPokemons(): Pokemon[] {
    return this.pokemons;
  }
}
