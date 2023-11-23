const numbers = document.querySelectorAll('input[type=button]');
var visor = document.querySelector('input[type=tel]');
var pile;
let result;
var digits = 0;

for (i = 0; i < numbers.length; i++) {
    const pressKey = numbers[i];

    pressKey.onclick = function () {
        if (pressKey.value === "1" || pressKey.value === "2" || pressKey.value === "3" || pressKey.value === "4" || pressKey.value === "5" || pressKey.value === "6" || pressKey.value === "7" || pressKey.value === "8" || pressKey.value === "9" || pressKey.value === "0" || pressKey.value === ".") {
            if (visor.value === "0") {
                visor.value = pressKey.value;
            } else {
                visor.value = visor.value + pressKey.value;
                digits++;
            }
        }
        if (pressKey.value === "+" || pressKey.value === "-" || pressKey.value === "/") {
            visor.value = visor.value + pressKey.value;
            pile = visor.value;
            visor.value = "0";
        }
        if (pressKey.value === "x") {
            visor.value = visor.value + "*";
            pile = visor.value;
            visor.value = "0";
        }
        if (pressKey.value === "DEL") {
            let strTemp = visor.value;
            visor.value = strTemp.slice(0, -1);
        }
        if (pressKey.value === "=") {
            result = pile + visor.value;
            visor.value = eval(result);
        }
        if (pressKey.value === "RESET") {
            visor.value = "0";
            digits = 0;
        }
    }
}
