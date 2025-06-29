const students = {
    firstStd: "Fardin",
    secondStd: "Khorshed",
    thirdStd: "Siam",
    fourthStd: "Sagar",

    allStd: () => {
        return students.firstStd + ", " + students.secondStd + ", " + students.thirdStd + ", " + students.fourthStd;
    },

    otherAllStd: function() {
        return this.firstStd + ", " + this.secondStd + ", " + this.thirdStd + ", " + this.fourthStd;
    },

    // Total Students
    totalStd : 24,
    stdCities : ["Dhaka", "Chittagong", "Sylhet", "Rajshahi"],
    batchInfos: {
        batchName: "Batch 01 2025",
        batchId: 101,
        batchSize: 24,
        batchLocation: "Dhaka"
    }
}

console.log(students.firstStd);
console.log(students.allStd());
console.log(students.otherAllStd());
console.log(students.stdCities[0]);
console.log(students.batchInfos.batchName);