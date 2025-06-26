var input = `12 1 5.30
16 2 5.10`;
var lines = input.split('\n');


// const pro1Arr = parseInt(lines[0].split(" ")[1]) * parseFloat(lines[0].split(" ")[2]);
// const pro2Arr = parseInt(lines[1].split(" ")[1]) * parseFloat(lines[1].split(" ")[2]);

console.log("VALOR A PAGAR: R$ " + (parseInt(lines[0].split(" ")[1]) * parseFloat(lines[0].split(" ")[2]) + parseInt(lines[1].split(" ")[1]) * parseFloat(lines[1].split(" ")[2])).toFixed(2));
