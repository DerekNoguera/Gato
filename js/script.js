// VARIABLES 

let divs = document.getElementsByClassName('miniC');
let reiniciar = document.getElementById("reiniciar")
let turno = 0; // variable para validar los turnos de los jugadores
let nombreTurno = document.getElementById("nombreTurno")
let Jugador1 = "O"// variable para poner X y O usada en la funcion ChangePlay

// FUNCIONALIDAD


function changePlay() { // funcion para cambiar de X a O
    if (Jugador1 == "X") { // si Jugador es == X
        Jugador1 = "O" // Entonces Jugador va ser igual a O
        return Jugador1 // retornamos el valor O
    } else {
        Jugador1 = "X" // SI no Jugador va a ser igual a X
        return Jugador1 // retornamos el valor X
    }
}

const matriz = [
    //datos de el array
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
console.log(matriz);


divs[0].addEventListener("click", function () {

    if (turno === 0 ) { // si turno es igual a 0 entonces se va a ejecutar lo de abaji
        nombreTurno.innerHTML = "Es turno de Derek"// va a cambiar lo que esta en pantalla por "Es turno de Derek"
        divs[0].innerHTML = matriz[0][0] = changePlay() // el div de la posicion [0] va a ser igual a la posicion [0][0] de mi arrayy ese array va a ser igual a mi funcion
        turno = 1 // turno va a ser 1 para que se ejecute la linea de abajo
        console.log(turno);
    } else {
        nombreTurno.innerHTML = "Es turno de PC" // va a cambiar lo que esta en pantalla de "Es turno de Derek" a "Es turno de PC"
        divs[0].innerHTML = matriz[0][0] = changePlay() // el div de la posicion [0] va a ser igual a la posicion [0][0] de mi arrayy ese array va a ser igual a mi funcion 
        turno = 0; // turno va a ser 0 para que se puedan ejecutar los siguientes addEventListener
        console.log(turno);
    } 
    if (gane1(matriz)) {
        console.log("lol");
    }
    
})
function gane1(matriz) {
    let contadorX = 0;
    let contadorO = 0;
    for (let index = 0; index < matriz.length; index++) {
       if (matriz[0][index] = "X") {
        contadorX++
       }else if (matriz[0][index] = "O") {
        contadorO++
       }
    }
    if (contadorO === 3  || contadorX === 3) {
        return true
    }else{
        return false 
    } 
   
}

divs[1].addEventListener("click", function () {
    nombreTurno.innerHTML = "Es turno de Derek"
    if (turno === 0) {
        divs[1].innerHTML = matriz[0][1] = changePlay()
        turno = 1
        console.log(turno);
    } else {
        nombreTurno.innerHTML = "Es turno de PC"
        divs[1].innerHTML = matriz[0][1] = changePlay()
        turno = 0
        console.log(turno);
    }
    if (gane1(matriz)) {
        console.log("lol");
    }
})

divs[2].addEventListener("click", function () {
    nombreTurno.innerHTML = "Es turno de Derek"
    if (turno === 0) {
        divs[2].innerHTML = matriz[0][2] = changePlay()
        turno = 1
    } else {
        nombreTurno.innerHTML = "Es turno de PC"
        divs[2].innerHTML = matriz[0][2] = changePlay()
        turno = 0
    }
    if (gane1(matriz)) {
        console.log("lol");
    }
})

divs[3].addEventListener("click", function () {
    nombreTurno.innerHTML = "Es turno de Derek"
    if (turno === 0) {
        divs[3].innerHTML = matriz[1][0] = changePlay()
        turno = 1
    } else {
        nombreTurno.innerHTML = "Es turno de PC"
        divs[3].innerHTML = matriz[1][0] = changePlay()
        turno = 0
    }
})

divs[4].addEventListener("click", function () {
    nombreTurno.innerHTML = "Es turno de Derek"
    if (turno === 0) {
        divs[4].innerHTML = matriz[1][1] = changePlay()
        turno = 1
    } else {
        nombreTurno.innerHTML = "Es turno de PC"
        divs[4].innerHTML = matriz[1][1] = changePlay()
        turno = 0
    }
})

divs[5].addEventListener("click", function () {
    nombreTurno.innerHTML = "Es turno de Derek"
    if (turno === 0) {
        divs[5].innerHTML = matriz[1][2] = changePlay()
        turno = 1
    } else {
        nombreTurno.innerHTML = "Es turno de PC"
        divs[5].innerHTML = matriz[1][2] = changePlay()
        turno = 0
    }
})

divs[6].addEventListener("click", function () {
    nombreTurno.innerHTML = "Es turno de Derek"
    if (turno === 0) {
        divs[6].innerHTML = matriz[2][0] = changePlay()
        turno = 1
    } else {
        nombreTurno.innerHTML = "Es turno de PC"
        divs[6].innerHTML = matriz[2][0] = changePlay()
        turno = 0
    }
})

divs[7].addEventListener("click", function () {
    nombreTurno.innerHTML = "Es turno de Derek"
    if (turno === 0) {
        divs[7].innerHTML = matriz[2][1] = changePlay()
        turno = 1
    } else {
        nombreTurno.innerHTML = "Es turno de PC"
        divs[7].innerHTML = matriz[2][1] = changePlay()
        turno = 0
    }
})

divs[8].addEventListener("click", function () {
    nombreTurno.innerHTML = "Es turno de Derek"
    if (turno === 0) {
        divs[8].innerHTML = matriz[2][2] = changePlay()
        turno = 1
    } else {
        nombreTurno.innerHTML = "Es turno de PC"
        divs[8].innerHTML = matriz[2][2] = changePlay()
        turno = 0
    }
})

// ------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------------------

reiniciar.addEventListener("click", function () {
    matriz[0][0] = " "
    matriz[0][1] = " "
    matriz[0][2] = " "
    matriz[1][0] = " "
    matriz[1][1] = " "
    matriz[1][2] = " "
    matriz[2][0] = " "
    matriz[2][1] = " "
    matriz[2][2] = " "
    divs[0].innerHTML = " "
    divs[1].innerHTML = " "
    divs[2].innerHTML = " "
    divs[3].innerHTML = " "
    divs[4].innerHTML = " "
    divs[5].innerHTML = " "
    divs[6].innerHTML = " "
    divs[7].innerHTML = " "
    divs[8].innerHTML = " "
    nombreTurno.innerHTML = "Es turno de Derek"
})