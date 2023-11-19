// Задача 1
console.log('Задача 1')

let x1 = 5;
let y1 = 8;
let x2 = 5;
let y2 = 5;


let height = Math.abs(y1 - y2);
let width = Math.abs(x1 - x2);

console.log(height * width);


// Задача 2
console.log('Задача 2')

let a = 13.890123;
let b = 2.891564;
let precision = 3;

let aNormalized = Math.floor(a % 1 * Math.pow(10, precision));

let bNormalized = Math.floor(b % 1 * Math.pow(10, precision));

console.log('дробные части:', aNormalized, ',', bNormalized)
console.log('Первое число больше второго -', aNormalized > bNormalized)
console.log('Первое число меньше второго -', aNormalized < bNormalized)
console.log('Первое число больше или равно второму -', aNormalized >= bNormalized)
console.log('Первое число меньше или равно второму -', aNormalized <= bNormalized)
console.log('Первое число равно второму -', aNormalized === bNormalized)
console.log('Первое число не равно второму -', aNormalized !== bNormalized)

// Задача 3
console.log('Задача 3')

let n = 100;
let m = -5;

let range = Math.abs(n - m);

let min = Math.min(n, m);

let random1 = min + (Math.round(Math.random() * range));
let random2 = min + (Math.round(Math.random() * range));

console.log(random1, random2)
console.log('Первое число больше второго -', random1 > random2)
console.log('Первое число меньше второго -', random1 < random2)
console.log('Первое число больше или равно второму -', random1 >= random2)
console.log('Первое число меньше или равно второму -', random1 <= random2)
console.log('Первое число равно второму -', random1 === random2)
console.log('Первое число не равно второму -', random1 !== random2)