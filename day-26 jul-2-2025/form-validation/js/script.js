// const siamPrinter = document.getElementById("siamPrinter");
const siamPrinter = document.querySelector("#siamPrinter");
document.querySelector("h1").innerText = "Siam Printer Demo";


siamPrinter.innerHTML = "Siam Printer is ready!";

const sazzadElements = document.querySelectorAll(".sazzad");

sazzadElements[1].textContent = "Sazzad is here!";

const cityList = document.getElementById("cityList");

cityList.children[0].textContent = "Dhaka";
cityList.children[1].textContent = "Chittagong";
cityList.children[2].textContent = "Sylhet";
cityList.children[3].textContent = "Rajshahi";
cityList.children[4].textContent = "Khulna";

console.log(cityList.children);
console.log(cityList.childNodes);

cityList.childNodes.forEach((data) => {
    if (data.nodeType === Node.ELEMENT_NODE) {
        console.log(data.textContent);
    }
})

Array.from(cityList.children).forEach((data) => {
    console.log(data.textContent);
});

console.log(cityList.nextSibling);
console.log(cityList.nextElementSibling);
console.log(cityList.previousSibling);
console.log(cityList.previousElementSibling);
console.log(cityList.firstChild);
console.log(cityList.firstElementChild);
console.log(cityList.lastChild);
console.log(cityList.lastElementChild);
console.log(cityList.parentNode);
console.log(cityList.parentElement);
