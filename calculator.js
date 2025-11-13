var operations = document.getElementById("operations")
var result = document.getElementById("result")

function clickHandler(key) {
    if (key === "=") {
        calculate()
    } else {
        addSymbol(key)
    }
}

function calculate() {
    operation = operations.innerHTML
    
    console.log(operations.innerHTML)
    result.innerHTML = eval(operations.innerHTML)
    operations.innerHTML = ""
}

function addSymbol(key) {
    operations.innerHTML += key
}
