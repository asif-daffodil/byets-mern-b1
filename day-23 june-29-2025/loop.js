// const students = ["Fardin", "Khorshed", "Siam", "Sagar", "Morshed", "Moni", "Sakin", "Sazzad", "Riyad", "Naima"];

// for (let i = 0; i < students.length; i++) {
//     console.log(students[i]);
// }

// const loopBack = (val, i) => {
//     console.log(i + " = " + val);
//     return val;
// }

// Using forEach
// students.forEach(loopBack);

// Using map
// const data = students.map(loopBack);
// console.log(data);

// filter
// const goodStudents = students.filter(val => val.length <= 5);
// const goodStudents = students.filter((val) => {
//     return val.length <= 5
// });
// console.log(goodStudents);

const students = {
    firstStd: "Fardin",
    secondStd: "Khorshed",
    thirdStd: "Siam",
    forthStd: "Sagar",
    fifthStd: "Naima",
    sixthStd: "Riyad",
    seventhStd: "Sazzad",
    eighthStd: "Moni",
    ninthStd: "Sakin",
}

// Using for...in loop
for (let key in students) {
    console.log(key + " = " + students[key]);
}

// Using for...of loop
const studentKeys = Object.keys(students);
for (let key of studentKeys) {
    console.log(key + " = " + students[key]);
}