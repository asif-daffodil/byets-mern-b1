var input = `5.0
10.0
10.0`;
var lines = input.split('\n');
console.log("MEDIA = " + ((parseFloat(lines[0]) * 2 + parseFloat(lines[1]) * 3 + parseFloat(lines[2]) * 5) / 10).toFixed(1));