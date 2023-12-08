(function () {

    // Создаем и возвращаем заголовок приложения
    function createAppTitle(title) {
        let appTitle = document.createElement('h2');
        appTitle.innerHTML = title;
        return appTitle;
    };

    // Создаем и возвращаем форму для создания дела
    function createTodoItemForm() {
        let form = document.createElement('form');
        let input = document.createElement('input');
        let buttonWrapper = document.createElement('div');
        let button = document.createElement('button');

        form.classList.add('input-group', 'mb-3');
        input.classList.add('form-control');
        input.placeholder = 'Введите название нового дела';
        buttonWrapper.classList.add('input-group-around');
        button.classList.add('btn', 'btn-primary');
        button.textContent = 'Добавить дело';

        buttonWrapper.append(button);
        form.append(input);
        form.append(buttonWrapper);

        return {
            form,
            input,
            button,
        };
    };

    // Создаем и возвращаем список элементов
    function createTodoList() {
        let list = document.createElement('ul');
        list.classList.add('list-group');
        return list;
    }

    // Создает и возвращает список дел
    function createTodoItem(obj) {
        let item = document.createElement('li');
        // кнопки помещаются в элемент, который покажет их в одной группе
        let buttonGroup = document.createElement('div');
        let doneButton = document.createElement('button');
        let deleteButton = document.createElement('button');

        // Устанавливаем стили для элементов списка, а также для размещения кнопок в его правой части с помощью flex
        item.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
        item.textContent = obj.name;

        buttonGroup.classList.add('btn-group', 'btn-group-sm');
        doneButton.classList.add('btn', 'btn-success');
        doneButton.textContent = 'Готово';
        deleteButton.classList.add('btn', 'btn-danger');
        deleteButton.textContent = 'Удалить';

        // Вкладываем кнопки в отдельный элемент, чтобы они обьединились в один блок
        buttonGroup.append(doneButton);
        buttonGroup.append(deleteButton);
        item.append(buttonGroup);

        // Приложению нужен доступ к самому элементу и кнопкам, чтобы обрабатывать события нажатия
        return {
            item,
            doneButton,
            deleteButton,
        };
    }

    function createTodoApp(container, title = 'Список дел', key) {
        let todoAppTitle = createAppTitle(title);
        let todoItemForm = createTodoItemForm();
        let todoList = createTodoList();

        let todoData = addTodo();

        // Загружаем данные из LocalStorage
        function addTodo() {
            let data = getTodoData(key);
            let arr = [];

            arr = data !== '' && data !== null ? arr = jsonToData(data) : [];

            return arr;
        };

        for (let todoArr of todoData) {
            let item = createTodoItem(todoArr);

            // Обработчик на все кнопки 'Готово' выгруженные из LocalStorage 
            item.doneButton.addEventListener('click', function () {
                item.item.classList.toggle('list-group-item-success');
                for (const listItem of todoData) {
                    if (listItem.id === todoArr.id) {
                        listItem.done = !listItem.done
                    }
                }
                setTodoData(key, dataToJson(todoData));
            });

            if (todoArr.done) {
                item.item.classList.add('list-group-item-success');
            }

            // Обработчик на все кнопки 'Удалить' выгруженные из LocalStorage 
            item.deleteButton.addEventListener('click', function () {
                if (confirm('Вы уверены?')) {
                    item.item.remove();
                }

                for (i = 0; i < todoData.length; i++) {
                    if (todoData[i].id === todoArr.id) {
                        todoData.splice(i, 1)
                    }
                }
                setTodoData(key, dataToJson(todoData));
            });

            todoList.append(item.item)
        };

        // Слухачь на input для состояния кнопки 'disabled'
        todoItemForm.button.setAttribute('disabled', 'disabled')
        todoItemForm.input.addEventListener('input', function () {
            if (todoItemForm.input.value === '') {
                todoItemForm.button.disabled = true
            } else {
                todoItemForm.button.disabled = false
            };
        });

        container.append(todoAppTitle);
        container.append(todoItemForm.form);
        container.append(todoList);

        // Браузер создает событие submit на форме по нажатию на Enter или на кнопку создание дела
        todoItemForm.form.addEventListener('submit', function (e) {
            // Эта строчка необходима, чтобы предотвратить стандарное действие браузера
            // в данном случае мы не хотим, чтобы страница перезагрузилась при отправке формы
            e.preventDefault();

            // игнорируем создание элемента, если пользователь ничего не ввел в поле
            if (!todoItemForm.input.value) {
                return;
            };

            let todoObj = {
                id: getNewId(todoData),
                name: todoItemForm.input.value,
                done: false
            };

            todoData.push(todoObj);
            // Выгружаем массив в LocalStorage
            setTodoData(key, dataToJson(todoData));
            console.log(todoData);

            let todoItem = createTodoItem(todoObj);


            // добавляем обработчик на кнопки
            todoItem.doneButton.addEventListener('click', function () {
                todoItem.item.classList.toggle('list-group-item-success');
                for (const listItem of todoData) {
                    if (listItem.id === todoObj.id) {
                        listItem.done = !listItem.done
                    }
                }
                setTodoData(key, dataToJson(todoData));
            });

            todoItem.deleteButton.addEventListener('click', function () {
                if (confirm('Вы уверены?')) {
                    todoItem.item.remove();
                }

                for (i = 0; i < todoData.length; i++) {
                    if (todoData[i].id === todoObj.id) {
                        todoData.splice(i, 1)
                    }
                }
                setTodoData(key, dataToJson(todoData));
            });

            // Создаем и добавляем в список новое дело с названием из поля ввода
            todoList.append(todoItem.item);
            // Обнуляем значение в поле, чтобы не пришлось стирать его в ручную
            todoItemForm.input.value = '';
            todoItemForm.button.disabled = true;
        });
    };

    // Данный метод вернет входящие данные в виде строки
    function dataToJson(data) {
        return JSON.stringify(data);
    };

    // Данный метод вернет входящую строку в виде данных
    function jsonToData(data) {
        return JSON.parse(data);
    };

    // Данный мето вернет данные из LocalStorage
    function getTodoData(key) {
        return localStorage.getItem(key);
    };

    // Данный метод запишет наши данные в LocalStorage
    function setTodoData(key, data) {
        localStorage.setItem(key, data);
    };

    // Создание ID 
    function getNewId(arr) {
        let max = 0;
        for (let item of arr) {
            if (item.id > max) {
                max = item.id;
            }
        }
        return max + 1;
    }

    window.createTodoApp = createTodoApp;

})();