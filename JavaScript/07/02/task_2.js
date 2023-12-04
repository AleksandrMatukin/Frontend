(function () {

    function createStudentCard(student) {
        let div = document.createElement('div')
        let h2 = document.createElement('h2')
        let span = document.createElement('span')

        if (student !== null) {
            h2.textContent = student.name
            span.textContent = `Возраст: ${student.age} лет`
        }
        
        document.body.append(div)
        div.append(h2)
        div.append(span)
    }

    let studentObj = {
        name: 'Игорь',
        age: 17
    }

    createStudentCard(studentObj)

})()