// Задача 1
console.log('Задача 1');

function getOlderUser(user1, user2) {
    if (user1.age > user2.age) {
        return `Пользователь ` + user1.name + ` старше.`
    } else if (user1.age === user2.age) {
        return `Возраст` + user1.name + `и` + user2.name + `равны`
    } else {
        return `Пользователь ` + user2.name + ` старше.`
    }
}

let user1 = {
    name: 'Игорь',
    age: 17
}
let user2 = {
    name: 'Оля',
    age: 21
}

console.log(getOlderUser(user1, user2))

// Задача 2
console.log('\nЗадача 2');

let allUsers = [
    { name: 'Валя', age: 11 },
    { name: 'Таня', age: 24 },
    { name: 'Рома', age: 21 },
    { name: 'Надя', age: 34 },
    { name: 'Антон', age: 7 }
]

function getOlderUserArray(obj) {

    let maxAge = 0
    let oldestUser = null

    for (user of obj) {
        if (user.age > maxAge) {
            oldestUser = user.name
            maxAge = user.age
        }
    }

    return oldestUser
}

let seniorUser = getOlderUserArray(allUsers)

console.log(seniorUser)

// Задача 3
console.log('\nЗадача 3');

function filter(obj, prop, value) {

    let newArr = []

    for (i of obj) {
        if (i[prop] === value) {
            newArr.push(i)
        }
    }

    return newArr
}

let objects = [
    { name: 'Василий', surname: 'Васильев' },
    { name: 'Иван', surname: 'Иванов' },
    { name: 'Пётр', surname: 'Петров' }
]

let result = filter(objects, 'surname', 'Петров');

console.log(result)