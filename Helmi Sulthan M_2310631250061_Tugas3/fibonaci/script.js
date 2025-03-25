let a = 0;
let b = 1;
let fib;


console.log(a)
if (a < 1){
    console.log(b);}

for (let i = 2; i < 100; i++){
    fib = a + b;
    console.log(fib);
    a = b;
    b = fib;
}