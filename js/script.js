// VARIABLES

let divs = document.getElementsByClassName("miniC");
let reiniciar = document.getElementById("reiniciar");
let turno = 0; // variable para validar los turnos de los jugadores
let nombreTurno = document.getElementById("nombreTurno");
let Jugador1 = "O"; // variable para poner X y O usada en la funcion ChangePlay

// FUNCIONALIDAD

function changePlay() {
  // funcion para cambiar de X a O
  if (Jugador1 === "O") {
    // si jugador1 es estricatamente igual a "0"
    Jugador1 = "X"; // entonces jugador 1 va a valer "X"
    return Jugador1; // retornamos jugador1
  } else {
    Jugador1 = "O"; // si no jugador 1 va a valer "O"
    return Jugador1; // retornamos jugador1
  }
}

const matriz = [
  //datos de el array
  ["", "", ""], // los campos de el array estan vacios para que se validen dentro de la funcion
  ["", "", ""], // function juegoFuncion(index) dentro de el if
  ["", "", ""],
];
console.log(matriz);

function juegoFuncion(index) {
  // ese index es el del bucle de abajo.
  let fila = Math.floor(index / 3); // el math.floor lo que hace es redondear para abajo el numero entero mas cercano
  // lo que va a hacer es dividir index / 3, index son las posiciones de los divs, por ejemplo la posicion 0 de mi index seria el primero cuadrito
  // por ejemplo la la posicion 0/3 va a ser = a "0" entonces es la fila numero 0, 5/3 es 1.6666 entonces se redondea a el numero entero mas cercano de abajo
  // el cual seria 1, entonces 5/3 va a ser la fila numero 1 y solo hay 3 filas, la 0,1 y 2, el ultimo div iterado por mi index es 8 entonces 8/3 es 2.666
  // entonces se redondea a 2 y esa seria mi ultima posicion. División (/):
  let columna = index % 3; // Módulo (%): es parecido al de fila solo que aqui se devuelve el resto de la division, por ejemlo, 4%3 el resto es 1
  // entoces esa posicion es la segunda columna, 7%3 es 2 con resto de 1, entonces es la segunda columna la que se encuentra y asi, los ejemplo de cada columna serian asi
  // Para la columna 0: Índice 0: 0 % 3 = 0, Índice 3: 3 % 3 = 0,Índice 6: 6 % 3 = 0// Para la columna 1:  Índice 1: 1 % 3 = 1,Índice 4: 4 % 3 = 1 ,Índice 7: 7 % 3 = 1.

  if (matriz[fila][columna] === "") {
    // si cada posicion de fila y columna de la matriz es " " entonces a la matriz se la pone
    matriz[fila][columna] = changePlay(); // la funcion ChangePlay() para que me ponga los simbolos jugador1 empieza valiendo "O" y dice que si vale 0 entonces el primera valor va
    // a ser una "X", el siguiente turno va a valer "O" porque dice, si no vale "O" osea si vale "X" entonces jugador1 va a valer "O"
    divs[index].innerHTML = matriz[fila][columna];
     let perrito = Math.floor(Math.random() * 8);
      setTimeout(() => {
      if (divs[index].innerHTML !== "" && "X" && "O") {
        divs[perrito].innerHTML = changePlay();
      } else if (divs[index].innerHTML = "X" && "O") {
        divs[perrito].innerHTML = changePlay();
      } 
    }, 1000);
    turno = 1 - turno; // si turno comienza en 0 entonces juega jugador X, ahora turno vale 1, juega jugador O, si en esa vuelta de O turno vale 1 y es 1 - turno
    // osea si es 1-turno entonces es 1-1 y eso es 0, se alternan entre jugador X y O
    console.log(turno);
    if (turno === 0) {
      nombreTurno.innerHTML = "Es turno de DEREK"; // va a cambiar lo que esta en pantalla por "Es turno de Derek"
    } else {
      nombreTurno.innerHTML = "Es turno de PC"; // va a cambiar lo que esta en pantalla de "Es turno de Derek" a "Es turno de PC"
    }
  }
}

let cont = 0;
for (let index = 0; index < divs.length; index++) {
  // este for lo que hacer es medirme los divs y a cada div le va a ejecutar addEventListener
  divs[index].addEventListener("click", function () { // se ejecuta los divs  medidios con [index] y se ejecuta addEventListener en cada uno
    juegoFuncion(index); // aqui dentro va a ir llamada la funcion que se va a ejecutar para el juego
    if (
      ValidarWin0(matriz) ||
      ValidarWin1(matriz) ||
      ValidarWin2(matriz) ||
      WinParalelo1(matriz) ||
      WinParalelo2(matriz) ||
      ValidarWin3(matriz) ||
      ValidarWin4(matriz) ||
      ValidarWin5(matriz)
    ) {
      alert("GANE");

      setTimeout(() => {
        location.reload();
      }, 1000);
    } else {
      cont++;
    }
    console.log("Contador: " + cont);
    if (cont == 9) {
      alert("Empate");
      location.reload();
    }
  });
}

function ValidarWin0(matriz) {
  let contadorX = 0;
  let contadorO = 0;
  for (let index = 0; index < matriz.length; index++) {
    if (matriz[0][index] == "X") {
      contadorX++;
    } else if (matriz[0][index] == "O") {
      contadorO++;
    }
  }
  if (contadorO === 3 || contadorX === 3) {
    return true;
  } else {
    return false;
  }
}
function ValidarWin1(matriz) {
  let contadorX = 0;
  let contadorO = 0;
  for (let index = 0; index < matriz.length; index++) {
    if (matriz[1][index] == "X") {
      contadorX++;
    } else if (matriz[1][index] == "O") {
      contadorO++;
    }
  }
  if (contadorO === 3 || contadorX === 3) {
    return true;
  } else {
    return false;
  }
}
function ValidarWin2(matriz) {
  let contadorX = 0;
  let contadorO = 0;
  for (let index = 0; index < matriz.length; index++) {
    if (matriz[2][index] == "X") {
      contadorX++;
    } else if (matriz[2][index] == "O") {
      contadorO++;
    }
  }
  if (contadorO === 3 || contadorX === 3) {
    return true;
  } else {
    return false;
  }
}
function ValidarWin3(matriz) {
  let contadorX = 0;
  let contadorO = 0;
  for (let index = 0; index < matriz.length; index++) {
    if (matriz[index][0] == "X") {
      contadorX++;
    } else if (matriz[index][0] == "O") {
      contadorO++;
    }
  }
  if (contadorO === 3 || contadorX === 3) {
    return true;
  } else {
    return false;
  }
}
function ValidarWin4(matriz) {
  let contadorX = 0;
  let contadorO = 0;
  for (let index = 0; index < matriz.length; index++) {
    if (matriz[index][1] == "X") {
      contadorX++;
    } else if (matriz[index][1] == "O") {
      contadorO++;
    }
  }
  if (contadorO === 3 || contadorX === 3) {
    return true;
  } else {
    return false;
  }
}
function ValidarWin5(matriz) {
  let contadorX = 0;
  let contadorO = 0;
  for (let index = 0; index < matriz.length; index++) {
    if (matriz[index][2] == "X") {
      contadorX++;
    } else if (matriz[index][2] == "O") {
      contadorO++;
    }
  }
  if (contadorO === 3 || contadorX === 3) {
    return true;
  } else {
    return false;
  }
}
function WinParalelo1(matriz) {
  let contadorX = 0;
  let contadorO = 0;
  for (let index = 0; index < matriz.length; index++) {
    if (matriz[0][2] == "X" && matriz[1][1] == "X" && matriz[2][0] == "X") {
      contadorX++;
    } else if (
      matriz[0][2] == "O" &&
      matriz[1][1] == "O" &&
      matriz[2][0] == "O"
    ) {
      contadorO++;
    }
  }
  if (contadorO === 3 || contadorX === 3) {
    return true;
  } else {
    return false;
  }
}
function WinParalelo2(matriz) {
  let contadorX = 0;
  let contadorO = 0;
  for (let index = 0; index < matriz.length; index++) {
    if (matriz[0][0] == "X" && matriz[1][1] == "X" && matriz[2][2] == "X") {
      contadorX++;
    } else if (
      matriz[0][0] == "O" &&
      matriz[1][1] == "O" &&
      matriz[2][2] == "O"
    ) {
      contadorO++;
    }
  }
  if (contadorO === 3 || contadorX === 3) {
    return true;
  } else {
    return false;
  }
}
reiniciar.addEventListener("click", function () {
  location.reload();
});
// -------------------------------------------------------------------------------------------------------------------
// Math.floor() https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
// Módulo (%) https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Remainder