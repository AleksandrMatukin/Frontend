(function() {

    function createStudentsList(listArr) {
        let list = document.createElement('ul')
        document.body.append(list)

        for (let i = 0; i < listArr.length; i++) {
            let listItem = document.createElement('li')
            let userName = document.createElement('h2')
            let userAge = document.createElement('span')

            list.prepend(listItem)
            listItem.prepend(userAge)
            listItem.prepend(userName)

            userName.textContent = listArr[i].name
            userAge.textContent = `Возраст: ${listArr[i].age} лет`
        }
    } 

    let allStudents=[
        {name: 'Валя', age: 11},
        {name: 'Таня',age: 24},
        {name: 'Рома',age: 21},
        {name: 'Надя', age: 34},
        {name: 'Антон', age: 7}
       ]

       createStudentsList(allStudents)
})()