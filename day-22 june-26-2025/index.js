const aPromise = control => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (control) {
                resolve("Promise run successfully");
            } else {
                reject("Something went wrong");
            }
        }, 3000);
    });
} 

aPromise(true).then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
})

console.log("Ami nasta khainai");