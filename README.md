# Práctica 5 - Objetos, clases e interfaces  [![Coverage Status](https://coveralls.io/repos/github/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct05-objects-classes-interfaces-alu0101105741/badge.svg?branch=main)](https://coveralls.io/github/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct05-objects-classes-interfaces-alu0101105741?branch=main)

## Índice
1. [Introducción](#introduccion)
2. [Objetivos](#objetivos)
3. [Instalación y configuración de Istanbul y Coveralls](#instalación-y-configuracion-de-istanbul-y-coveralls)
3. [Elaboración de la práctica](#elaboracion-de-la-practica)
4. [Conclusiones](#conclusiones)

## Introducción
En esta práctica llevaremos a cabo 2 ejercicios para conocer más en profundidad los objetos, clases e interfaces en TypeScript. Además, como en la práctica anterior, documentaremos nuestro desarrollo con la herramienta [TypeDoc](https://typedoc.org/) y a realizaremos desarrollo dirigido por pruebas (TDD) con las herramientas [Mocha](https://mochajs.org/) y [Chai](https://www.chaijs.com/), es decir, realizaremos las pruebas para los ejercicios antes de empezar con el desarrollo del mismo. Como ya hemos explicado en la práctica anterior cómo instalar, configurar y utilizar cada herramienta, nos saltaremos estos pasos (podremos consultar los tests en ```./tests/ejercicios.spec.ts``` y cada respectivo fichero de configuración en la raíz del repositorio).

Además de esto comenzaremos a familiarizarnos con las herramientas [Istanbul](https://istanbul.js.org/) y [Coveralls](https://coveralls.io/) que nos permitirán realizar un informe sobre el cubrimiento de código que hemos desarrollado.

Todas las soluciones estarán separadas por ejercicio en la carpeta ```./src/ejercicio-n```, es decir para el ejercicio 1 crearemos una carpeta llamada ejercicio-1 donde se encontrarán los ficheros fuente y así consecutivamente.

## Objetivos
El objetivo principal de esta práctica será familiarizarnos con los objetos, clases e interfaces en TypeScript que será el lenguaje que usaremos en la asignatura. Además nos comenzaremos a familiarizar con las herramientas [Istanbul](https://istanbul.js.org/) y [Coveralls](https://coveralls.io/) que nos permitirán realizar un informe sobre el cubrimiento de código que hemos desarrollado.

## Instalacion y configuracion de Istanbul y Coveralls
Para instalar las herramientas lo único que tendremos que ejecutar será el comando ```npm install --save-dev nyc coveralls``` que nos instalará los paquetes necesarios para empezar a utilizar nuestras herramientas. Con esto hecho accederemos a la web de [Coveralls](https://coveralls.io/), iniciaremos sesión y nos aparecerá una pantalla con nuestros repositorios que han sido cubiertos, para añadir este repositorio a la herramienta lo primero que tendremos que hacer será cambiar la visibilidad de nuestro repo a público ya que sino la herramienta no puede acceder a él y con esto hecho procederemos a clickar en la pestaña de ```Add Repos``` en la web de [Coveralls](https://coveralls.io/).

Si hemos realizado todo correctamente podremos encontrar nuestro repositorio en dicha pestaña y podremos hacer click en el pequeño interruptor de la izquierda para que se ponga en el estado ```on```, con esto hecho se nos añadirá un botón que pone ```Details```, al clickar en él nos llevará a una página en la que nos aparecerán diferentes maneras de usar la herramienta, nosotros utilizaremos la segunda, en la que sólo se encuentra una línea que pone ```repo_token: ...``` copiaremos dicha línea y la añadiremos en nuestro directorio de trabajo en un archivo llamado ```.coveralls.yml```.

Con todo esto hecho sólo nos quedará modificar nuestro package.json para crear un script que nos ejecute nuestro cubrimiento de código automáticamente para ello pondermos en nuestro fichero el script ```coverage``` como podemos ver a continuación:
```JSON
{
  ...
  "scripts": {
    "start": "tsc-watch --onSuccess \"node dist/index.js\"",
    "test": "mocha",
    "doc": "typedoc",
    "coverage": "nyc npm test && nyc report --reporter=text-lcov | coveralls && rm -rf .nyc_output"
  },
  ...
}

```

Con esto tendremos nuestras herramientas instaladas y listas para trabajar.

## Elaboracion de la practica
Ya habiendo instalado y configurado las herramientas cómo hemos explicado anteriormente, nos pondremos a realizar nuestros ejercicios. En este caso se trata de 2 ejercicios extensos en los que existen varios ficheros fuente por lo que explicaré como las hemos desarrollado y por qué hemos decidido crear dichas jerarquías.

Nuestro primer ejercicio tratará de hacer una pokedex que cuente con datos de diferente pokemons (nombre, peso, altura, tipo, stats) y además crear una clase combat que permita simular un combate entre dos pokemons reescribiendo la función creada en la práctica 3. Por otro lado en el segundo ejercicio se nos pide crear el juego Conecta 4 en el que se jugará en una rejilla de 6 filas x 7 columnas y cada jugador contará con 21 fichas, el primer jugador será el primero en jugar y luego el segundo y así sucesivamente.
### Ejercicio 1
En este primer ejercicio hemos pensado que nos era suficiente con crear 3 clases que en nuestro caso serán Pokedex (que contará con los diferentes pokemons y sus stats), Pokemon (que contará con los stats de cada pokemon) y Combat (que realizará el combate y calculará todo lo necesario para que se lleve a cabo). Ahora procederemos a explicar cada clase.

#### Pokemon
Esta clase como podemos observar en el fichero fuente:
```TypeScript
type Tipo = ('fuego' | 'agua' | 'hierba' | 'electrico');

interface stats {
  ataque: number,
  defensa: number,
  velocidad: number,
  HP: number
}

export class Pokemon implements stats {
  constructor(public nombre: string,
              public peso: number,
              public altura: number,
              public tipo: Tipo,
              public ataque: number,
              public defensa: number,
              public velocidad: number,
              public HP: number) {}
}
```

Se trata de una clase muy sencilla en la cual guardaremos la información relativa a cada pokemon, como podemos observar hemos creado un tipo de datos para los tipos de pokemon ya que en este caso solo suponemos posibles pokemon de tipo fuego, agua, hierba y eléctrico.

#### Pokedex
Por otro lado contamos con la clase pokedex que también se trata de una clase muy sencilla como podemos observar:
```TypeScript
import {Pokemon} from './pokemon';

export class Pokedex {
  constructor(public pokemons: Pokemon[]) {}

  addPokemon(pokemon: Pokemon) {
    this.pokemons.push(pokemon);
  }

  getPokemons(): Pokemon[] {
    return this.pokemons;
  }
}
```

Como podemos ver, se trata de una clase muy sencilla la cual solo cuenta con un array de Pokemons en el cual se guardará la información de cada uno de ellos y cuenta con 2 funciones extra que servirán para añadir un nuevo pokemon a nuestro array o devolver los pokemons existente en nuestra pokédex (Estas funciones no son realmente necesarias ya que nuestro array de pokemon se encuentra en ```public``` por lo que se puede acceder desde afuera, dichas funciones serían necesarias si nuestro array estuviese ```protected```o ```private```, en tal caso también deberíamos añadir la opción de devolver un pokemon en concreto).

#### Combat
Por último contamos con nuestra clase combat que si es un poco más compleja pero aún asi sigue tratándose de una clase bastante sencilla:

```TypeScript
import {Pokemon} from './pokemon';

export class Combat {
  constructor(public contrincanteUno: Pokemon,
              public contrincanteDos: Pokemon) {}

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

  lowestHP(): number {
    if (this.contrincanteUno.HP < this.contrincanteDos.HP) {
      return this.contrincanteUno.HP;
    } else {
      return this.contrincanteDos.HP;
    }
  }

  pokemonTrainer(contrincanteUno: Pokemon, contrincanteDos: Pokemon): number {
    return 50 * (contrincanteUno.ataque / contrincanteDos.defensa) *
    this.effectiveness(contrincanteUno.tipo, contrincanteDos.tipo);
  }

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

  ...
```

Como podemos ver hemos reutilizado nuestra función creada en la [Práctica 3](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct03-types-functions-alu0101105741) donde lo único que hemos tenido que cambiar han sido los valores que recibe la función principal ```pokemonTrainer``` ya que pasa de recibir los stats por separado que necesitabamos para calcular el daño a recibir dos pokemons y entonces tendremos que seleccionar que valor queremos de cada pokemon para realizar el cálculo, de resto sigue igual así que no comentaremos otra vez las funciones de efectividad. Además, hemos añadido la función ```lowestHP()``` que nos devolverá la vida del pokemon que menos tenga, esto nos servirá para saber si un combate finaliza correctamente (debería devolvernos un balor menor o igual a 0).

Por último hemos creado la función principal ```start()``` que enseñará la vida inicial de cada pokemon y mientras ninguno de los dos pokemon se debiliten ejecutará nuestra función ```pokemonTrainer()``` alternando el pokemon que lanza y recibe el ataque mirando el turno del combate y además restará el daño recibido a la vida de dicho pokemon y mostrando por pantalla el resultado de dicho ataque.

## Ejercicio 2
En este ejercicio hemos creado una estructura de 4 clases, Ficha (que guardará el color y el símbolo de dicha ficha y nos permitirá imprimirla por pantalla), Jugador (que contará con 21 fichas y sus características, es decir, un objeto ficha), Rejilla (que manejará todo lo relacionado con la rejilla, es decir, insertar una ficha en una columna, checkear si se ha producido una victoria, checkear si una columna está completa, etc) y por último la clase Conecta4 (que contará con la rejilla en la que se va a jugar y 2 jugadores).

#### Ficha
Esta se trata de una clase muy sencilla ya que sólo tendremos que guardar el color de la ficha (en nuestro caso hemos creado un tipo para delimitarla a rojo o amarillo) y su símbolo, además nos hemos ayudado del paquete [Chalk](https://www.npmjs.com/package/chalk) para realizar la impresión por pantalla y que nos muestre la ficha con su correspondiente color (como es una clase tan sencilla no realizaré mas comentarios al respecto):

```TypeScript
import chalk = require('chalk');

export type colorFicha = ('rojo' | 'amarillo');

export class Ficha {
  constructor(public color: colorFicha, public symbol: string = '') {}

  print() {
    switch (this.color) {
      case 'rojo': {
        return chalk.red.inverse(this.symbol);
      }
      case 'amarillo': {
        return chalk.yellow.inverse(this.symbol);
      }
    }
  }
}
```

#### Jugador
Esta clase también se trata de una clase muy sencilla por lo que no realizaremos casi comentarios sobre ella ya que solo se trata de una clase que nos servirá para almacenar el número de fichas de cada jugador y sus características, además crearemos una clase que nos servirá para checkear rápidamente si nuestro jugador rodavía cuenta con fichas disponibles:

```TypeScript
import {Ficha} from './ficha';

export class Jugador {
  public numeroFichas: number = 21;

  constructor(public ficha: Ficha) {}

  enoughtTokens(): boolean {
    if (this.numeroFichas > 0) {
      return true;
    } else {
      return false;
    }
  }
}
```

#### Rejilla
Esta se trata de la clase más compleja ya que es donde se encuentran todas las comprobaciones de victoria, estados de la rejilla y diferentes acciones que se pueden realizar sobre ella:

```TypeScript
import {Ficha} from './ficha';
import {Jugador} from './jugador';
import scanf = require('scanf');

export class Rejilla {
  public rejilla: Ficha[][];


  constructor() {
    const columns: Ficha[] = new Array<Ficha>(6);

    this.rejilla = [columns, columns, columns, columns, columns, columns, columns];
  }

  addColumn(column: number, jugador: Jugador) {
    if (!this.fullColumn(column) && column >= 0 && column < 7) {
      let i = this.rejilla.length - 1;
      while (this.rejilla[i][column] !== undefined) {
        i--;
      }

      this.rejilla[i][column] = jugador.ficha;
      console.log('Valor añadido: test add column', this.rejilla[0][column], this.rejilla[1][column], this.rejilla[2][column], this.rejilla[3][column], this.rejilla[4][column], this.rejilla[5][column]);
    } else {
      console.error(`La columna ${column} está llena o fuera de rango, seleccione otra columna [0, 6]: `);
      const columna = scanf('%d');
      this.addColumn(columna, jugador);
    }
  }

  fullColumn(column: number): boolean {
    if (this.rejilla[0][column] === undefined) {
      return false;
    } else {
      console.log('columna llena', this.rejilla[0][column].symbol, this.rejilla[1][column].symbol, this.rejilla[2][column].symbol, this.rejilla[3][column].symbol, this.rejilla[4][column].symbol, this.rejilla[5][column].symbol);
    }

    return true;
  }

  checkHorizontal(row: number, column: number, symbol: string): boolean {
    let pivotHorizontal: number = column;
    let consecutive: number = 0;

    while (pivotHorizontal >= 0 && consecutive < 4) {
      if (this.rejilla[row][pivotHorizontal] !== undefined) {
        if (this.rejilla[row][pivotHorizontal].symbol === symbol) {
          consecutive++;
          pivotHorizontal--;
        } else {
          return false;
        }
      } else {
        return false;
      }
    }

    pivotHorizontal = column + 1;

    while (pivotHorizontal < this.rejilla[row].length && consecutive < 4) {
      if (this.rejilla[row][pivotHorizontal] !== undefined) {
        if (this.rejilla[row][pivotHorizontal].symbol === symbol) {
          consecutive++;
          pivotHorizontal++;
        } else {
          return false;
        }
      } else {
        return false;
      }
    }

    if (consecutive >= 4) {
      return true;
    } else {
      return false;
    }
  }

  checkVertical(row: number, column: number, symbol: string): boolean {
    let pivotVertical: number = column;
    let consecutive: number = 0;

    while (pivotVertical >= 0 && consecutive < 4) {
      if (this.rejilla[pivotVertical][column] !== undefined) {
        if (this.rejilla[pivotVertical][column].symbol === symbol) {
          consecutive++;
          pivotVertical--;
        } else {
          return false;
        }
      } else {
        return false;
      }
    }

    pivotVertical = row + 1;

    while (pivotVertical < this.rejilla.length && consecutive < 4) {
      if (this.rejilla[pivotVertical][column] !== undefined) {
        if (this.rejilla[pivotVertical][column].symbol === symbol) {
          consecutive++;
          pivotVertical++;
        } else {
          return false;
        }
      } else {
        return false;
      }
    }

    if (consecutive >= 4) {
      return true;
    } else {
      return false;
    }
  }

  checkDiagonal(row: number, column: number, symbol: string): boolean {
    return false;
  }

  reset() {
    this.rejilla = [];
  }
}
```

Como podemos observar no nos ha dado tiempo a terminarla pero tenemos la mayoría de las funciones desarrolladas:
* El constructor nos inicializará nuestra rejilla para que cuente con 6 filas y 7 columnas que irán rellenas de fichas
* La función ```fullColumn()``` nos permitirá comprobar si una columna se encuentra llena, es decir, que se han introducido fichas en todos los espacios de dicha columna.
* La función ```addColumn()``` servirá para que pasado el número de la columna a introducir nuestra fichas y el jugador que realiza dicho movimiento nos introduzca en dicha columna una ficha con las carácterísticas de dicho jugaro, en caso de que la columna se encuentre llena, pedirá que se le introduzca otro número de columna.
* Las funciones ```checkHorizontal(), checkVertical() y checkDiagonal()``` sirven para lo mismo, comprobar si se ha producido un 4 en raya pero en diferentes casos, la función ```checkHorizontal()``` recibirá dónde se ha introducido la última ficha y comprobará sus adyascentes en la misma fila hasta encontrar algún símbolo que no sea el mísmo que se ha introducido, en caso de que se hayan encontrado 4 o más valores consecutivos se devolverá que se trata de un 4 en raya. Las funciones ```checkVertical()``` y ```checkDiagonal()``` siguen el mismo desarrollo pero comprobando columnas y diagonales respectivamente.
* Por último contamos con la función reset que lo que hará será resetear nuestra rejilla para dejarla preparada para el siguiente juego.

#### Conecta4
Esta función es donde se manejará todo lo relacionado a la partida (inicio de la misma, qué jugador juega cada turno, ejecutar la comprobación de final cada turno, resetear los valores, etc). Como podemos observar casi no hemos realizado nada de esta clase por falta de tiempo por lo que explicaré las pequeñas cosas que hemos realizado:

```TypeScript
import {Jugador} from './jugador';
import {Rejilla} from './rejilla';

/**
 * Conecta4 class
 */
export class Conecta4 {
  public final = false;
  constructor(public rejilla: Rejilla, public jugador1: Jugador, public jugador2: Jugador) {}

  start() {

  }

  isFinished(): boolean {
    return this.final;
  }

  reset() {
    this.rejilla.reset();
    this.final = false;
  }
}
```

Como podemos ver no hemos realizado la función ```start()``` por lo que no podemos realizar el juego, pero como podemos ver el constructor necesita una rejilla y dos jugadores para poder comenzar el juego, además contamos con un booleano que servirá para poder comprobar si el juego ya ha terminado y ahorrarnos llamadas a la función start() si ya nos encontramos ante un juego finalizado. La idea de esto era al realizar las comprobaciones pertinentes al lanzar una ficha, en caso de que se tratase de una victoria poner este booleano a true para que no nos dejase ejecutar otra partida hasta resetear el tablero, la función ```isFinished()``` nos devolverá el valor de dicho booleano y la función ```reset()``` reseteara dichos valores.

## Conclusiones
Esta práctica se trata de una práctica muy entretenida pero por diversos factores externos he carecido del tiempo para desarrollarla como me hubiese gustado y no he podido terminarla. La idea al completarla sería dejar todos nuestros atributos de clase en privado y crear diferentes métodos para acceder a ellos y modificarlos para poder asegurar un poco más la integridad del funcionamiento. También me hubiese gustado añadir un poco más de funcionalidades pero no ha sido posible.
