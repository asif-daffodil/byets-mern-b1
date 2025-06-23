const studentNames = ["Moni", "Siam", "Sagar", "Arafat"]; 
console.log(studentNames.length);
console.log(studentNames[3]);

for (let i = 0; i < studentNames.length; i++) {
    console.log(studentNames[i]);
}

// push
// pop
// shift
// unshift
// indexOf

studentNames.push("Rafi", "Rifat");
studentNames.pop();
studentNames.unshift("Sagar", "Sagarika", "Arafa");
studentNames.shift();

console.log(studentNames);