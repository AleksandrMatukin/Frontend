// Задача 1
console.log('Задача 1');

function getAge(year) {
    let currentDate = new Date()
    let currentYear = currentDate.getFullYear()

    let myAge = currentYear - year;
    return myAge
}

console.log(getAge(1995));

// Задача 2
console.log('\nЗадача 2');

function filter(whiteList, blackList) {
    let newList = [];

    for (let i = 0; i < whiteList.length; i++) {
        if (!blackList.includes(whiteList[i])) {
            newList.push(whiteList[i])
        }
    }

    return newList
}


let whiteList = ['my-email@gmail.ru', 'jsfunc@mail.ru', 'annavkmail@vk.ru', 'fullname@skill.ru', 'goodday@day.ru']
let blackList = ['jsfunc@mail.ru', 'goodday@day.ru']

console.log(filter(whiteList, blackList))

// Задача 3
console.log('\nЗадача 3');

function arrSort(arr = []) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }

    return arr

}

console.log(arrSort([2,5,1,3,4]))
console.log(arrSort([12,33,3,44,100]))
console.log(arrSort([0, 1]))