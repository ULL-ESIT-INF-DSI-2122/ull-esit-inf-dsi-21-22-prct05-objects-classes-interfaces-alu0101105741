import 'mocha';
import {expect} from 'chai';
import chalk = require('chalk');
import {Ficha} from '../src/ejercicio-2/ficha';
import {Jugador} from '../src/ejercicio-2/jugador';
import {Rejilla} from '../src/ejercicio-2/rejilla';
// import {Conecta4} from '../src/ejercicio-2/conecta4';

describe('Test block on Conecta 4 exercise', () => {
  const ficha1: Ficha = new Ficha('rojo', 'X');
  const ficha2: Ficha = new Ficha('amarillo', 'Y');
  const jugador1: Jugador = new Jugador(ficha1);
  const jugador2: Jugador = new Jugador(ficha2);
  const rejilla1: Rejilla = new Rejilla();
  const rejilla2: Rejilla = new Rejilla();
  // const juego: Conecta4 = new Conecta4(rejilla1, jugador1, jugador2);

  rejilla2.rejilla = [[ficha1, ficha1, ficha1, ficha1, ficha1, ficha1, ficha1], [ficha1, ficha1, ficha1, ficha1, ficha1, ficha1, ficha1], [ficha1, ficha1, ficha1, ficha1, ficha1, ficha1, ficha1], [ficha1, ficha1, ficha1, ficha1, ficha1, ficha1, ficha1], [ficha1, ficha1, ficha1, ficha1, ficha1, ficha1, ficha1], [ficha1, ficha1, ficha1, ficha1, ficha1, ficha1, ficha1]];

  it('Jugador enoughtTokens() method', () => {
    expect(jugador1.enoughtTokens()).to.be.equal(true);
    expect(jugador2.enoughtTokens()).to.be.equal(true);
  });

  it('Ficha print() method', () => {
    expect(ficha1.print()).to.be.equal(chalk.red.inverse(ficha1.symbol));
    expect(ficha2.print()).to.be.equal(chalk.yellow.inverse(ficha2.symbol));
  });

  it('Rejilla fullColumn() method', () => {
    expect(rejilla1.fullColumn(2)).to.be.equal(false);
    expect(rejilla2.fullColumn(2)).to.be.equal(true);
  });

  it('Rejilla checkHorizontal() method', () => {
    expect(rejilla1.checkHorizontal(2, 2, ficha1.symbol)).to.be.equal(false);
    expect(rejilla2.checkHorizontal(2, 2, ficha1.symbol)).to.be.equal(true);
  });

  it('Rejilla checkVertical() methods', () => {
    expect(rejilla1.checkVertical(2, 2, ficha1.symbol)).to.be.equal(false);
    expect(rejilla2.checkVertical(2, 2, ficha1.symbol)).to.be.equal(true);
  });

  // it('Rejilla checkDiagonal() methods', () => {
  //   expect(rejilla1.checkDiagonal(2, 2, ficha1.symbol)).to.be.equal(false);
  // });

  // it('Conecta4 start() and isFinished() method', () => {
  //   expect(juego.isFinished()).to.be.equal(false);
  //   juego.start();
  //   // expect(rejilla1.isFinished()).to.be.equal(true);
  // });

  // it('Conecta4 reset() method', () => {
  //   juego.reset();
  //   expect(juego.isFinished()).to.be.equal(false);
  // });
});
