var input = `3`;
var lines = input.split('\n');

console.log("VOLUME = " + ((4/3) * 3.14159 * (parseFloat(lines[0])** 3)).toFixed(3));