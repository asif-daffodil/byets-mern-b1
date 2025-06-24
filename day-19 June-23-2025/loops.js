// While
let n = 1;
const g = 2;

while (n <= 10) {
    console.log(g + " x " + n + " = " + g * n);
    n++;
}

// For
for (let i = 0; i < 10; i++) {
   console.log(i); 
}

// 1 theke 100 porjonto jeshob shongkhake 7 diye vag korle 6 oboshisto thake, sheshob shongkha dekhan

for (let i = 1; i <= 100; i++) {
    if(i % 7 == 6 && i > 7){
        console.log(i);
    }
}


let x = 15;

do{
    console.log(x);
    x++;
}while (x < 10);

const city = "Dhaka";

for (let i = city.length - 1; i >= 0; i--) {
    console.log(city[i]);
}

