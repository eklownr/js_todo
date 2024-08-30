//const todoList = [];
const todoList = [{
    name: 'Make dinner',
    date: '2024-08-29'
}, {
    name: 'Do dishes',
    date: '2024-08-29'
}]


function renderTodoList() {
    let todoListHtml = '';

    for (let i=0; i<todoList.length; i++){
        const todoObject = todoList[i];
        //const name = todoObject.name;
        //const date = todoObject.date;
        const {name, date} = todoObject;
        const html = `
        <p>
        ${name} ${date}
        <button onclick="
            todoList.splice(${i}, 1)
            renderTodoList()
        ">Delete</button>
        </p>`;
        todoListHtml += html;
    }
    console.log(todoListHtml);

    document.querySelector('.js_todo_list')
        .innerHTML = todoListHtml;
}


function addTodo() {
    const nameInputElement = document.querySelector('.js_name_input');
    const dateInputElement = document.querySelector('.js_date_input');
    todoList.push({
        name: nameInputElement.value,
        date: dateInputElement.value
    });

    nameInputElement.value = '';
    console.log(todoList);
    renderTodoList();
}

