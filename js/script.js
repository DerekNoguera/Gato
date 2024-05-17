// VARIABLES 

let divs = document.getElementsByClassName('miniC');
let div1 = document.getElementById('div1');
let div2 = document.getElementById('div2');
let div3 = document.getElementById('div3');
// FUNCIONALIDAD

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
// --------------------------------------------------------------------------------------

div1.addEventListener("click", function () {
    let nuevo = document.createElement("p")
    nuevo.id = "Style-X"
    nuevo.innerHTML = matriz[0][0] = "X"
    div1.appendChild(nuevo)
    console.log(nuevo);
})
div2.addEventListener("click", function () {
    let nuevo = document.createElement("p")
    nuevo.id = "Style-X"
    nuevo.innerHTML = matriz[0][1] = "X"
    div2.appendChild(nuevo)
    console.log(nuevo);
})
div3.addEventListener("click", function () {
    let nuevo = document.createElement("p")
    nuevo.id = "Style-X"

    nuevo.innerHTML = matriz[0][2] = "X"
    div3.appendChild(nuevo)
    console.log(nuevo);
})
// for (let i = 0; i < divs.length; i++) {
//     divs[i].addEventListener('click',function () {

//         let nuevo = document.createElement("p")
//         nuevo.id = "Style-X"
//         let matrizX1 = matriz[0][0] = "X"
//         nuevo.innerHTML = matrizX1
//         divs[i].appendChild(nuevo)
//         console.log(nuevo);
//     })
// }
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
};


