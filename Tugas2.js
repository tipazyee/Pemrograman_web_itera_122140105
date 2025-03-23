function calculate(operation) {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let result;
    
    if (isNaN(num1)) {
        alert("Masukkan angka pertama!");
        return;
    }
    
    switch(operation) {
        case 'add': result = num1 + num2; break;
        case 'subtract': result = num1 - num2; break;
        case 'multiply': result = num1 * num2; break;
        case 'divide': result = num2 !== 0 ? num1 / num2 : "Error"; break;
        case 'modulus': result = num1 % num2; break;
        case 'power': result = Math.pow(num1, num2); break;
        case 'sqrt': result = Math.sqrt(num1); break;
        default: result = "Invalid";
    }
    
    document.getElementById("result").innerText = result;
}