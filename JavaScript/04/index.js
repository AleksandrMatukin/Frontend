// Задача 1
console.log('Задача 1');

let array = [];
let count = 50;
let n = 100;
let m= 500;

while (count > 0) {
    count -= 1;
    if (m > n) {
        array.push(Math.floor(Math.random() * (m - n) + n));
    } else {
        array.push(Math.floor(Math.random() * (n - m) + m)); 
    }
}
console.log(array)

// Задача 2
console.log('\nЗадача 2');

let arrayTwo =[];
let countTwo = 7;

for (let i = 0; countTwo > i; ++i) {
    arrayTwo.push(i + 1);
}

console.log(arrayTwo)

// let currentIndex = arrayTwo.length;
// while (currentIndex !== 0) {
//     let randomIndex = Math.floor(Math.random() * currentIndex);
//     currentIndex--;
//     let temp = arrayTwo[currentIndex];
//     arrayTwo[currentIndex] = arrayTwo[randomIndex];
//     arrayTwo[randomIndex] = temp;
// }
// console.log(arrayTwo)

for (i in arrayTwo) {
    let j = Math.floor(Math.random() * arrayTwo.length);
    let temp = arrayTwo[i];
    arrayTwo[i] = arrayTwo[j];
    arrayTwo[j] = temp;
}

console.log(arrayTwo)

// Задача 3
console.log('\nЗадача 3');

let k = 6;

for (i in arrayTwo) {
    if (k < arrayTwo.length) {
        if (arrayTwo[i] === arrayTwo[k]) {
            console.log(arrayTwo[i]);
        } 
    } else {
        console.log('Число не найдено')
        break
    }
}

// Задача 4
console.log('\nЗадача 4');

let arr1 = [2, 2, 17, 21, 45, 12, 54, 31, 53];
let arr2 = [12, 44, 23, 5];

let arr3 =[];

// for (let i = 0; i < Math.max(arr1.length, arr2.length); i++) {
// if (arr1[i]) {
//     arr3.push(arr1[i])
// }
// if (arr2[i]) {
//     arr3.push(arr2[i])
// }
// }

for (let i = 0; i < arr1.length + arr2.length; i++) {
    if (i < arr1.length) {
        arr3[i] = arr1[i];
    } else {
        arr3[i] = arr2[i - arr1.length]
    }
}

console.log(arr3)