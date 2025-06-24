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
// splice
// slice
// reverse
// split
// join

studentNames.push("Rafi", "Rifat");
studentNames.pop();
studentNames.unshift("Sagar", "Sagarika", "Arafa");
studentNames.shift();
console.log(studentNames.indexOf("Sagarika"));
console.log(studentNames);
studentNames.splice(2, 1, "Pagarika");
console.log(studentNames);

// slice
const newStudentNames = studentNames.slice(1, 3);
console.log(newStudentNames);

// reverse
const reversedNames = studentNames.reverse();
console.log(reversedNames);

// split
const sentence = "I love programming";
const words = sentence.split(" ");
console.log(words);

// join
const joinedSentence = words.join(" ");
console.log(joinedSentence);