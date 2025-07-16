const studentData = ["Kamal", "Jamal", "Tamal", "Akmal"];

const [siam, morshed, khorshed, moni] = studentData;

console.log(morshed);

const morshed2 = {
    name: "Morshed",
    age: 25,
    city: "Old Town",
    isMarried: false,
    hasBaby: false, 
}

const {city, age, country = city} = morshed2;
console.log(country);
morshed2.city = "new town";

