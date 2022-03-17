/**
 * Class Hexadecimal
 * Given a number, create an Hexadecimal
 */
export class Hexadecimal {
  private hexa: string;
  private value: number;

  /**
   * Constructor of our Hexadecimal class
   * @param {number} value decimal value to create our hexadecimal
   */
  constructor(value: number) {
    this.hexa = '0x';
    this.value = value;

    let binary: string = '';

    while (value > 1) {
      binary += (value % 2).toString();
      value = Math.trunc(value / 2);
    }
    binary += value;
    binary = binary.split('').reverse().join('');

    while ((binary.length % 4) !== 0) {
      binary = '0'.concat(binary);
    }

    for (let i = 0; i < binary.length / 4; i ++) {
      const subString: string = binary.substring(i * 4, (i + 1) * 4);
      let hexa: string = '';
      let dummy: number = 0;

      for (let j = 0; j < subString.length; j++) {
        dummy += Number(subString[j]) * Math.pow(2, subString.length - j - 1);
      }

      if (dummy < 10) {
        hexa = dummy.toString().concat(hexa);
      } else {
        switch (dummy) {
          case 10: {
            hexa = 'A'.concat(hexa);
            break;
          }
          case 11: {
            hexa = 'B'.concat(hexa);
            break;
          }
          case 12: {
            hexa = 'C'.concat(hexa);
            break;
          }
          case 13: {
            hexa = 'D'.concat(hexa);
            break;
          }
          case 14: {
            hexa = 'E'.concat(hexa);
            break;
          }
          case 15: {
            hexa = 'F'.concat(hexa);
            break;
          }
        }
      }
      this.hexa += hexa;
    }
  }

  /**
   * Returns our hexadecimal value
   * @return {string} Hexadecimal value of our number
   */
  toString(): string {
    return this.hexa;
  }

  /**
   * Returns our dacimal value
   * @return {number} Decimal value of our number
   */
  valueOf(): number {
    return this.value;
  }

  /**
   * Function that allow us to add 2 hexadecimals
   * @param {Hexadecimal} hexDos Hexadecimal given to add to our number
   * @return {Hexadecimal} Resulting hexadecimal of our addition
   */
  add(hexDos: Hexadecimal): Hexadecimal {
    return new Hexadecimal(this.valueOf() + hexDos.valueOf());
  }

  /**
   * Function that allow us to subtract 2 hexadecimals
   * @param {Hexadecimal} hexDos Hexadecimal given to substract to our number
   * @return {Hexadecimal} Resulting hecadecimal of our substraction
   */
  substract(hexDos: Hexadecimal): Hexadecimal {
    return new Hexadecimal(this.valueOf() - hexDos.valueOf());
  }

  /**
   * Function that given a hexadecimal value returns his decimal value
   * @param {string} hexadecimal Hexadecimal value to convert
   * @return {number} Decimal value of our hexadecimal
   */
  parse(hexadecimal: string): number {
    hexadecimal = hexadecimal.substring(2);
    let binary: string = '';
    let number: number = 0;

    hexadecimal.split('').forEach((element) => {
      let value: number = 0;
      switch (element) {
        case 'A': {
          value = 10;
          break;
        }
        case 'B': {
          value = 11;
          break;
        }
        case 'C': {
          value = 12;
          break;
        }
        case 'D': {
          value = 13;
          break;
        }
        case 'E': {
          value = 14;
          break;
        }
        case 'F': {
          value = 15;
          break;
        }
        default: {
          value = Number(element);
          break;
        }
      }
      for (let i = 0; i < 4; i++) {
        if ((Math.pow(2, 3 - i)) <= value) {
          binary += '1';
          value -= Math.pow(2, 3 - i);
        } else {
          binary += '0';
        }
      }
    });

    for (let i = 0; i < binary.length; i++) {
      number += Number(binary[i]) * Math.pow(2, binary.length - i - 1);
    }

    return number;
  }
}
