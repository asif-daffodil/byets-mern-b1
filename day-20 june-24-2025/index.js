// Function Define
function welcomeMsg () {
    console.log("I am a message");
}

// Function call
welcomeMsg ()

// return
function welcomeMsg () {
    return "I am a message. Ha ha ha!";
    console.log("No Benefit of this line");
}

console.log(welcomeMsg());

// Parameter and Argument
function welcomeMsg(name) {
    return "I am a message for " + name;
}

console.log(welcomeMsg("Asif"));
console.log(welcomeMsg("Sakib"));

// Default Parameter
function welcomeMsg(name = "Asif") {
    return "I am a message for " + name;
}

console.log(welcomeMsg());

// Multiple Parameters
function welcomeMsg(name = "Asif", city = "Dhaka") {
    return "I am a message for " + name + " and I live in " + city + ".";
}

console.log(welcomeMsg("Asif", "Dhaka"));

// Function Expression
welcomeMsg = function(name = "Asif", city = "Dhaka") {
    return "I am a message for " + name + " and I live in " + city + ".";
};

console.log(welcomeMsg("Asif", "Dhaka"));

// Function Expression with Arrow Function
welcomeMsg = (name = "Asif", city = "Dhaka") => {
    return "I am a message for " + name + " and I live in " + city + ".";
};

console.log(welcomeMsg("Asif", "Dhaka"));


/* 
const func1 = (msg) => {
    return msg;
} 
*/

const func1 = msg => msg;
console.log(func1("Hello"));

// recursion
const factorial = n => {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

console.log(factorial(5));

// 0 to 9
const printNumbers = (n = 0) => {
    if (n < 10) {
        console.log(n);
        printNumbers(n + 1);
    }
}

printNumbers();

// Callbacks
const greet = (name, callback) => {
    console.log("Hello " + name);
    callback();
}

const cb = () => {
    console.log("This is a callback function.");
}

greet("Asif", cb);
greet("Sakib", () => {
    console.log("This is another callback function.");
});
