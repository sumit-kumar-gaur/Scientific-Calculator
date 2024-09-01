// Function to insert value into the input field
function insert(value) {
    document.getElementById("screen").value += value;
}

// Function to calculate the factorial of a number
function fact() {
    let n = document.getElementById("screen").value;
    if (n === '') {
        return;
    }
    n = parseInt(n);
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    document.getElementById("screen").value = result;
}

// Function to calculate the sine of a number
function sin() {
    let x = document.getElementById("screen").value;
    document.getElementById("screen").value = Math.sin(x);
}

// Function to calculate the cosine of a number
function cos() {
    let x = document.getElementById("screen").value;
    document.getElementById("screen").value = Math.cos(x);
}

// Function to calculate the tangent of a number
function tan() {
    let x = document.getElementById("screen").value;
    document.getElementById("screen").value = Math.tan(x);
}

// Function to calculate the square root of a number
function sqrt() {
    let x = document.getElementById("screen").value;
    document.getElementById("screen").value = Math.sqrt(x);
}

// Function to calculate the natural logarithm of a number
function log() {
    let x = document.getElementById("screen").value;
    document.getElementById("screen").value = Math.log(x);
}

// Function to calculate the power of a number
function pow() {
    let base = document.getElementById("screen").value;
    let exponent = prompt("Enter the exponent:");
    if (exponent !== null) {
        document.getElementById("screen").value = Math.pow(base, exponent);
    }
}

// Function to insert the value of pi
function pi() {
    document.getElementById("screen").value += Math.PI;
}

// Function to insert the value of e
function e() {
    document.getElementById("screen").value += Math.E;
}

// Function to delete the last character
function backspc() {
    let screen = document.getElementById("screen").value;
    document.getElementById("screen").value = screen.substring(0, screen.length - 1);
}

// Function to clear the screen
function clearScreen() {
    document.getElementById("screen").value = '';
}

// Function to evaluate the expression
function calculate() {
    try {
        document.getElementById("screen").value = eval(document.getElementById("screen").value);
    } catch (error) {
        alert("Invalid expression");
    }
}
