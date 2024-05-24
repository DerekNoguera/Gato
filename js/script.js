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
    let fila = Math.floor(index / 3); // el math.floor lo que hace es redondear para abajo el numero entero mas cercano// lo que va a hacer es dividir index / 3, index son las posiciones de los divs, por ejemplo la posicion 0 de mi index seria el primero cuadrito // por ejemplo la la posicion 0/3 va a ser = a "0" entonces es la fila numero 0, 5/3 es 1.6666 entonces se redondea a el numero entero mas cercano de abajo // el cual seria 1, entonces 5/3 va a ser la fila numero 1 y solo hay 3 filas, la 0,1 y 2, el ultimo div iterado por mi index es 8 entonces 8/3 es 2.666// entonces se redondea a 2 y esa seria mi ultima posicion. División (/):
    let columna = index % 3; // Módulo (%): es parecido al de fila solo que aqui se devuelve el resto de la division, por ejemlo, 4%3 el resto es 1 // entoces esa posicion es la segunda columna, 7%3 es 2 con resto de 1, entonces es la segunda columna la que se encuentra y asi, los ejemplo de cada columna serian asi // Para la columna 0: Índice 0: 0 % 3 = 0, Índice 3: 3 % 3 = 0,Índice 6: 6 % 3 = 0// Para la columna 1:  Índice 1: 1 % 3 = 1,Índice 4: 4 % 3 = 1 ,Índice 7: 7 % 3 = 1.
    if (matriz[fila][columna] === "") {
        // si cada posicion de fila y columna de la matriz es " " entonces a la matriz se la pone
        matriz[fila][columna] = changePlay(); // la funcion ChangePlay() para que me ponga los simbolos jugador1 empieza valiendo "O" y dice que si vale 0 entonces el primera valor va // a ser una "X", el siguiente turno va a valer "O" porque dice, si no vale "O" osea si vale "X" entonces jugador1 va a valer "O"
        divs[index].innerHTML = matriz[fila][columna];
        turno = 1 - turno; // si turno comienza en 0 entonces juega jugador X, ahora turno vale 1, juega jugador O, si en esa vuelta de O turno vale 1 y es 1 - turno // osea si es 1-turno entonces es 1-1 y eso es 0, se alternan entre jugador X y O
        nombreTurno.innerHTML = "Es turno de PC";
        if (ValidaWinFilasX(matriz) || Diagonal(matriz)) {
            turno = 0
        }
        if (turno == 1) {
            // si turno es igual a 1
            document.getElementById("contenedor3").style.display = "block";
            let perrito = ""; // se crea la variable
            for (let i = 0; i < 9; i++) {
                // se va a iterar 9 veces el for
                perrito = Math.floor(Math.random() * 9); // la primera vuelta es perrito = a Math.floor(Math.random() * 9) para que se eligan aletariamente las casillas
                if (divs[perrito].innerHTML === "") {
                     // si el div iterado por perrito es estrictamente igual a vacio entonces
                    break; // entonces  sale de el bucle y se ejecuta lo de abajo
                }
            }
            setTimeout(() => {
                if (divs[perrito].innerHTML === "") {
                    // si divs[perrito].innerHTML es estricatemente igual a vacio, si no es estricatemente igual a vacio entonces no se pondra en ninguna casilla, entonces no se va a sobre escribir en ninguna casilla
                    divs[perrito].innerHTML = changePlay(); // a los divs iterados por perrito se le ejecuta la funcion de changePlay()
                    // let contadorO1 = 0;
                    // let contadorX1 = 0;
                    for (let index = 0; index < divs[perrito].innerHTML.length; index++) {
                        for (
                            let index2 = 0;
                            index2 < divs[perrito].innerHTML.length;
                            index2++
                        ) {
                            if ( // validaciones de ganes de el bot
                                (divs[0].innerHTML === "O" && divs[1].innerHTML === "O" && divs[2].innerHTML === "O" ||
                                    divs[3].innerHTML === "O" && divs[4].innerHTML === "O" && divs[5].innerHTML === "O" ||
                                    divs[6].innerHTML === "O" && divs[7].innerHTML === "O" && divs[8].innerHTML === "O" ||
                                    divs[0].innerHTML === "O" && divs[3].innerHTML === "O" && divs[6].innerHTML === "O" ||
                                    divs[1].innerHTML === "O" && divs[4].innerHTML === "O" && divs[7].innerHTML === "O" ||
                                    divs[2].innerHTML === "O" && divs[5].innerHTML === "O" && divs[8].innerHTML === "O" ||
                                    divs[0].innerHTML === "O" && divs[4].innerHTML === "O" && divs[8].innerHTML === "O" ||
                                    divs[6].innerHTML === "O" && divs[4].innerHTML === "O" && divs[2].innerHTML === "O")
                            ) {
        
                                setTimeout(() => {
                                    location.reload()
                                }, 2000);
                                alert("GANO O");
                            }
                            //     if (divs[perrito].innerHTML[index][index2] === "O") {
                            //         contadorO1++;
                            //         console.log(divs[perrito].innerHTML[index][index2]);
                            //     }
                            //     if (divs[perrito].innerHTML[index2][index] === "O") {
                            //         contadorX1++;
                            //     }
                            //     console.log("contadorO1 " + contadorO1, " contadorX1 " + contadorX1);
                            //     if (contadorO1 == 3) {
                            //         return true
                            //     }
                            //     if (contadorX1 == 3) {
                            //         return true
                            //     }
                        }
                        // contadorO1 = 0;
                        // contadorX1 = 0;
                    }
                        matriz[Math.floor(perrito / 3)][perrito % 3] =
                        divs[perrito].innerHTML; // la matriz se actualiza para que se refle el movimiento de el math random
                        turno = 0; // turno se vuelve 0 para jugar yo

                    // console.log(matriz,"MAT")
                    // console.log(divs[perrito],"PER")
                }
                nombreTurno.innerHTML = "Es turno de DEREK";
                document.getElementById("contenedor3").style.display = "none";
            }, 1000);
        }
    }
}
let cont = 0;
for (let index = 0; index < divs.length; index++) {
    // este for lo que hacer es medirme los divs y a cada div le va a ejecutar addEventListener
    divs[index].addEventListener("click", function () {
        // se ejecuta los divs  medidios con [index] y se ejecuta addEventListener en cada uno
        juegoFuncion(index); // aqui dentro va a ir llamada la funcion que se va a ejecutar para el juego
        if (ValidaWinFilasX(matriz) || Diagonal(matriz)) {
        // si se cumple validar filas, osea mi funcion entonces se gana
            alert("GANO X");
            document.getElementById("contenedor2").style.display = "block ";
            setTimeout(() => {
                location.reload();
            }, 2000);
        } else if (divs[index].innerHTML != " ") {
            cont++; // si ninguna es verdadera entonces cont++ va a contar hasta 9, cada click contador va a ser 1+
        }
        if (cont == 5) {
            // si contador es igual a 9 osea si llega a 9 entonces va a tirar una alerta que dice "EMPATE"
            alert("Empate");
            location.reload();
        }
    });
}
function ValidaWinFilasX(matriz) {
    let contadorX = 0; //contadores para validar los ganes
    let contadorO = 0;
    for (let index = 0; index < matriz.length; index++) {
        for (let index2 = 0; index2 < matriz.length; index2++) {
            if (matriz[index][index2] === "X") {
                contadorX++;
                console.log(contadorX, "Soy el de la X fila");
            }
            if (matriz[index2][index] === "X") {
                contadorO++;
                console.log(contadorO, "Soy el de la X columna");
            }
            if (contadorX == 3) {
                return true;
                //si se llega a tres ganes retornar un verdadero
            }
            if (contadorO == 3) {
                return true;
            }
        }
        contadorX = 0;
        contadorO = 0;
        // console.log(contadorX, contadorO);
    }
}

function Diagonal(matriz) {
    //validaciones de diagonales
    if (
        (matriz[0][0] === "X" && matriz[1][1] === "X" && matriz[2][2] === "X") ||
        (matriz[0][2] === "X" && matriz[1][1] === "X" && matriz[2][0] === "X")
    ) {
        return true;
    }
}
reiniciar.addEventListener("click", function () {
    location.reload();
});
// -------------------------------------------------------------------------------------------------------------------
// Math.floor() https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
// Módulo (%) https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Remainder
