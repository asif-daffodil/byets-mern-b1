var input = `5.0
7.1`;
var lines = input.split('\n');
console.log("MEDIA = " + ((parseFloat(lines[0]) * 3.5 + parseFloat(lines[1]) * 7.5) / 11).toFixed(5));
