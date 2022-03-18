import 'mocha';
import {assert, expect} from 'chai';
import {Pokedex} from '../src/ejercicio-1/pokedex';
import {Pokemon} from '../src/ejercicio-1/pokemon';
import {Combat} from '../src/ejercicio-1/combat';

describe('Test block on Pokedex exercise', () => {
  const poke1: Pokemon = new Pokemon('Charizard', 90.5, 1.7, 'fuego', 267, 255, 299, 360);
  const poke2: Pokemon = new Pokemon('Blastoise', 85.5, 1.6, 'agua', 265, 299, 255, 362);
  const poke3: Pokemon = new Pokemon('Venusaur', 100, 2, 'hierba', 263, 265, 259, 364);
  const poke4: Pokemon = new Pokemon('Pikacu', 6, 0.4, 'electrico', 209, 179, 279, 274);
  const pokedex: Pokedex = new Pokedex([poke1, poke2, poke3]);
  const combat1: Combat = new Combat(poke1, poke2);
  const combat2: Combat = new Combat(poke3, poke4);


  it('Pokedex addPokemon() & getPokemon() method', () => {
    expect(pokedex.getPokemons()).to.eql([poke1, poke2, poke3]);
    pokedex.addPokemon(poke4);
    expect(pokedex.getPokemons()).to.eql([poke1, poke2, poke3, poke4]);
  });

  it('Combat effectiveness() method', () => {
    expect(combat1.effectiveness('fuego', 'agua')).to.be.equal(0.5);
    expect(combat1.effectiveness('agua', 'fuego')).to.be.equal(2);
    expect(combat1.effectiveness('hierba', 'fuego')).to.be.equal(0.5);
    expect(combat1.effectiveness('electrico', 'fuego')).to.be.equal(1);
  });

  it('Combat fuegoEffectiveness() methods', () => {
    expect(combat1.fuegoEffectiveness('hierba')).to.be.equal(2);
    expect(combat1.fuegoEffectiveness('electrico')).to.be.equal(1);
  });

  it('Combat aguaEffectiveness() methods', () => {
    expect(combat1.aguaEffectiveness('hierba')).to.be.equal(0.5);
    expect(combat1.aguaEffectiveness('electrico')).to.be.equal(0.5);
  });

  it('Combat hierbaEffectiveness() methods', () => {
    expect(combat1.hierbaEffectiveness('electrico')).to.be.equal(1);
    expect(combat1.hierbaEffectiveness('agua')).to.be.equal(2);
  });

  it('Combat electricoEffectiveness() methods', () => {
    expect(combat1.electricoEffectiveness('agua')).to.be.equal(2);
  });

  it('Combat start() method', () => {
    combat1.start();
    assert.isAtMost(combat1.lowestHP(), 0);
    combat2.start();
    assert.isAtMost(combat2.lowestHP(), 0);
  });
});
