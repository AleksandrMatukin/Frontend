// Задача 1
console.log('Задача 1')

let password = '123456789';

if (password.length >= 4 && password.includes('-') || password.includes('_')) {
    console.log('Пароль надёжный')
} else {
    console.log('Пароль недостаточно надёжный')
}

// Задача 2
console.log('\nЗадача 2')

let firstUserName = 'alEksAnDr';
let firstUserSurname = 'Matukin';

let nameFirstLetter = firstUserName.substring(0,1);
let nameLastLetter = firstUserName.substring(1)

let sutnameFirstLetter = firstUserSurname.substring(0,1);
let sutnameLastLetter = firstUserSurname.substring(1);

let userName = nameFirstLetter.toUpperCase() + nameLastLetter.toLowerCase();
let userSurname = sutnameFirstLetter.toUpperCase() + sutnameLastLetter.toLowerCase();

console.log('Имя пользователя: ', userName);
console.log('Фамилия пользователя: ', userSurname);
console.log(firstUserName === userName ? 'Имя осталось без изменений' : 'Имя было преобразовано');
console.log(firstUserSurname === userSurname ? 'Фамилия осталась без изменений' : 'Фамилия была преобразовано');

// Задача 3
console.log('\nЗадача 3')

let number = 4;

console.log(number % 2 === 0 ? 'Число чётное' : 'Число нечётное');