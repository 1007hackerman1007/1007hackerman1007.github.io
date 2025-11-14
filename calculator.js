var operations = document.getElementById("operations")
var result = document.getElementById("result")
var sound = new Audio("digitar.mp3");


function clickHandler(key) {
    if (key === "=") {
        calculate()
    } else {
        addSymbol(key)
    }
}

function som() {
    sound.play();
  }

function calculate() {
    let operation = operations.innerHTML
    operation = operation.replaceAll("x", "*")
    operation = operation.replaceAll("÷", "/")
    
    operations.innerHTML = eval(operation)
}

function addSymbol(key) {
    operations.innerHTML += key
}
