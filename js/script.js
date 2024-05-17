// VARIABLES 

let divs = document.getElementsByClassName('miniC');
let reiniciar = document.getElementById("reiniciar")
let turno = 0;
let nombreTurno = document.getElementById("nombreTurno")
let Jugador1 = "O"

// FUNCIONALIDAD


function changePlay() {
    if (Jugador1 == "X") {
        Jugador1 = "O"
        return Jugador1
    } else {
        Jugador1 = "X"
        return Jugador1
    }
}

const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
console.log(matriz);
matriz[0][0] = " "
matriz[0][1] = " "
matriz[0][2] = " "
matriz[1][0] = " "
matriz[1][1] = " "
matriz[1][2] = " "
matriz[2][0] = " "
matriz[2][1] = " "
matriz[2][2] = " "

divs[0].addEventListener("click", function () {
   nombreTurno.innerHTML = "Es turno de Derek"
    if (turno === 1) {
        divs[0].innerHTML = matriz[0][0] = changePlay()
    } else {
        nombreTurno.innerHTML = "Es turno de PC"
        divs[0].innerHTML = matriz[0][0] = changePlay()
        turno = 0
    }

})
divs[1].addEventListener("click", function () {
    nombreTurno.innerHTML = "Es turno de Derek"
    if (turno === 0) {
        divs[1].innerHTML = matriz[0][1] = changePlay()
        turno = 1
    } else {
        nombreTurno.innerHTML = "Es turno de PC"
        divs[1].innerHTML = matriz[0][1] = changePlay()
        turno = 0
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
if (matriz[0][0] === "X" && matriz[0][1] === "X" && matriz[0][2] === "X") {
    alert("xd")
} else if (matriz[1][0] === "X" && matriz[1][1] === "X" && matriz[1][2] === "X") {
    alert("xd")
} else if (matriz[2][0] === "X" && matriz[2][1] === "X" && matriz[2][2] === "X") {
    alert("xd")
} else if (matriz[0][0] === "X" && matriz[1][1] === "X" && matriz[2][2] === "X") {
    alert("xd")
} else if (matriz[0][2] === "X" && matriz[1][1] === "X" && matriz[2][0] === "X") {
    alert("xs")
} else if (matriz[0][0] === "X" && matriz[1][0] === "X" && matriz[2][0] === "X") {
    alert("xd")
} else if (matriz[0][1] === "X" && matriz[1][1] === "X" && matriz[2][1] === "X") {
    alert("XD")
} else if (matriz[0][2] === "X" && matriz[1][2] === "X" && matriz[2][2] === "X") {
    alert("xd")
} else if (matriz[0][0] === "O" && matriz[0][1] === "O" && matriz[0][2] === "O") {
    alert("Od")
} else if (matriz[1][0] === "O" && matriz[1][1] === "O" && matriz[1][2] === "O") {
    alert("Od")
} else if (matriz[2][0] === "O" && matriz[2][1] === "O" && matriz[2][2] === "O") {
    alert("Od")
} else if (matriz[0][0] === "O" && matriz[1][1] === "O" && matriz[2][2] === "O") {
    alert("Od")
} else if (matriz[0][2] === "O" && matriz[1][1] === "O" && matriz[2][0] === "O") {
    alert("Os")
} else if (matriz[0][0] === "O" && matriz[1][0] === "O" && matriz[2][0] === "O") {
    alert("Od")
} else if (matriz[0][1] === "O" && matriz[1][1] === "O" && matriz[2][1] === "O") {
    alert("OD")
} else if (matriz[0][2] === "O" && matriz[1][2] === "O" && matriz[2][2] === "O") {
    alert("xd")
}
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
})