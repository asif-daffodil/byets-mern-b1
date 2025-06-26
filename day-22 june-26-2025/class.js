class myClass {
    // properties
    subject = "MERN";
    students = ["Morshed", "Khorshed", "Siam", "Sagar", "Pintu"];
    firstStudent =  this.students[0];
    siam;

    // methods
    sum = (num1, num2) => {
        if(isNaN(num1) || isNaN(num2)){
            return "Invalid Number";
        }
        // return parseFloat(num1) + parseFloat(num2);
        // return parseInt(num1) + parseInt(num2);
        return Number(num1) + Number(num2);
    }

    //  constructor
    constructor(msg = "No message provided") {
        console.log(msg);
    }

}

const obj = new myClass("Parent class initialized");
const otherIns = new myClass;
otherIns.siam = "New value provided";
otherIns.sagar = "Made in mizmizi";
otherIns.morshed = (data) => data;
console.log(otherIns.siam);
console.log(otherIns.sagar);
console.log(otherIns.morshed("Khorshed Morshed er classmate"));

console.log(obj.subject);
console.log(obj.students[1]);
console.log(obj.sum("15", "10"));

// inheritance
class myChildClass extends myClass {
    myBestStudent = () => {
        return this.students[2];
    }
}

const obj2 = new myChildClass("Child Class Initialized");
console.log(obj2.myBestStudent());