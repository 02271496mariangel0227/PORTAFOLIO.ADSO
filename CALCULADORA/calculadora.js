let display = document.getElementById("display");
let equation = "";

function agregarCaracter(caracter) {
    equation += caracter;
    display.value = equation;
}

function limpiar() {
    equation = "";
    display.value = "";
}

function calcular() {
    try {
        let result = eval(equation);
        display.value = result;
        equation = result.toString();
    } catch (error) {
        display.value = "Error";
        equation = "";
    }
}
