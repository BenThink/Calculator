
const display = document.getElementById("screen");

function allClear() {
    display.value = "";
}

function clear() {
    display.value = display.value.slice(0, -1);
}

function show(n) {
    display.value += n;
}

function equal() {
    display.value = eval(display.value);
}
