import 'mocha';
import {expect} from 'chai';
import {Hexadecimal} from '../src/modificacion/hexadecimal';

describe('Test block on modification (Hexadecimal)', () => {
  const hexUno: Hexadecimal = new Hexadecimal(255);
  const hexDos: Hexadecimal = new Hexadecimal(100);

  it('toSring() method', () => {
    expect(hexUno.toString()).to.be.equal('0xFF');
    expect(hexDos.toString()).to.be.equal('0x64');
  });

  it('valueOf() method', () => {
    expect(hexUno.valueOf()).to.be.equal(255);
    expect(hexDos.valueOf()).to.be.equal(100);
  });

  it('add() method', () => {
    expect(hexUno.add(hexDos).valueOf()).to.be.equal(355);
    expect(hexUno.add(hexDos).toString()).to.be.equal('0x163');
  });

  it('substract() method', () => {
    expect(hexUno.substract(hexDos).valueOf()).to.be.equal(155);
    expect(hexUno.substract(hexDos).toString()).to.be.equal('0x9B');
  });

  it('parse() method', () => {
    expect(hexUno.parse('0x26')).to.be.equal(38);
    expect(hexUno.parse('0x9B')).to.be.equal(155);
  });
});
