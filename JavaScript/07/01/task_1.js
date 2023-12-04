(function() {

    function createStudentCard(name, age) {
        let div = document.createElement('div')
        let h2 = document.createElement('h2')
        let span = document.createElement('span')
        
        h2.textContent = name
        span.textContent = `Возраст: ${age} лет`

        document.body.append(div)
        div.append(h2)
        div.append(span)
    }

    createStudentCard('Игорь', 17)

})()