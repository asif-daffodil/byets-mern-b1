var input = `3.0 4.0 5.2`;
var lines = input.split('\n');

var A = parseFloat(lines[0].split(' ')[0]);
var B = parseFloat(lines[0].split(' ')[1]);
var C = parseFloat(lines[0].split(' ')[2]);
console.log("TRIANGULO: " + (A * C / 2).toFixed(3));
console.log("CIRCULO: " + (3.14159 * (C ** 2)).toFixed(3));
console.log("TRAPEZIO: " + (((A + B) * C) / 2).toFixed(3));
console.log("QUADRADO: " + (B ** 2).toFixed(3));
console.log("RETANGULO: " + (A * B).toFixed(3));